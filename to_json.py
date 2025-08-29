import pandas as pd
import json
import re

def format_dates_in_observations(text: str) -> str:
    """
    Encuentra fechas en formato DD/MM/YYYY y las encierra entre corchetes
    """
    if not text or pd.isna(text):
        return ""
    
    # Patrón para fechas DD/MM/YYYY
    pattern = r'\b(\d{1,2}/\d{1,2}/\d{4})\b'
    
    # Reemplazar fechas encontradas encerrándolas en corchetes
    formatted_text = re.sub(pattern, r'[\1]', str(text))
    
    return formatted_text

def excel_to_json_array(archivo_excel):
    """
    Convierte un archivo Excel a un arreglo de objetos JSON
    Mapeo de columnas:
    - id: Columna B
    - title: Columna C  
    - assigned: Columna A
    - state: Columna F
    - progress: Columna G
    - startDate: Columna J
    - endDate: Columna L
    - observations: Columna P
    - unit: 'Fala' (valor fijo)
    - detail: Columna D
    - visible: Columna Q
    """
    
    try:
        # Leer la primera hoja del Excel
        df = pd.read_excel(archivo_excel)
        
        print(f"✓ Archivo Excel leído correctamente")
        print(f"  Dimensiones: {df.shape[0]} filas × {df.shape[1]} columnas")
        print(f"  Columnas disponibles: {list(df.columns)}")
        
        # Crear lista para almacenar los objetos JSON
        json_array = []
        
        # Recorrer cada fila (saltando la cabecera que ya fue procesada por pandas)
        for index, row in df.iterrows():
            # Formatear fechas al formato DD/MM/YYYY
            start_date = ""
            end_date = ""
            
            # Procesar startDate
            if pd.notna(row.iloc[9]):
                try:
                    if isinstance(row.iloc[9], pd.Timestamp):
                        start_date = row.iloc[9].strftime("%d/%m/%Y")
                    else:
                        fecha_temp = pd.to_datetime(str(row.iloc[9]).strip(), errors='coerce')
                        if pd.notna(fecha_temp):
                            start_date = fecha_temp.strftime("%d/%m/%Y")
                except (ValueError, TypeError):
                    start_date = ""
            
            # Procesar endDate
            if pd.notna(row.iloc[11]):
                try:
                    if isinstance(row.iloc[11], pd.Timestamp):
                        end_date = row.iloc[11].strftime("%d/%m/%Y")
                    else:
                        fecha_temp = pd.to_datetime(str(row.iloc[11]).strip(), errors='coerce')
                        if pd.notna(fecha_temp):
                            end_date = fecha_temp.strftime("%d/%m/%Y")
                except (ValueError, TypeError):
                    end_date = ""
            
            # Procesar progress (manejar formato de porcentaje)
            progress_val = 0
            try:
                if pd.notna(row.iloc[6]):
                    progress_raw = str(row.iloc[6]).strip()
                    # Si es un porcentaje con %, extraer el número
                    if progress_raw.endswith('%'):
                        progress_val = int(float(progress_raw.replace('%', '')))
                    # Si es un decimal (ej: 0.75 = 75%)
                    elif '.' in progress_raw and float(progress_raw) <= 1:
                        progress_val = int(float(progress_raw) * 100)
                    else:
                        progress_val = int(float(progress_raw))
            except (ValueError, TypeError):
                progress_val = 0
            
            # Crear objeto JSON para cada fila
            json_obj = {
                "id": str(row.iloc[1]) if pd.notna(row.iloc[1]) else "",           # Columna B (índice 1)
                "title": str(row.iloc[2]) if pd.notna(row.iloc[2]) else "",       # Columna C (índice 2)
                "assigned": str(row.iloc[0]) if pd.notna(row.iloc[0]) else "",    # Columna A (índice 0)
                "state": str(row.iloc[5]).title() if pd.notna(row.iloc[5]) else "",  # Columna F (índice 5) - Title Case
                "progress": progress_val,     # Valor numérico del porcentaje
                "startDate": start_date,   # Formato DD/MM/YYYY
                "endDate": end_date,       # Formato DD/MM/YYYY
                "observations": format_dates_in_observations(row.iloc[15]), # Columna P con fechas formateadas
                "unit": "Fala",                                                     # Valor fijo
                "detail": str(row.iloc[3]) if pd.notna(row.iloc[3]) else "",     # Columna D (índice 3)
                "visible": bool(row.iloc[16]) if pd.notna(row.iloc[16]) else False # Columna Q (índice 16)
            }
            
            json_array.append(json_obj)
        
        print(f"✓ Se procesaron {len(json_array)} filas")
        return json_array
        
    except FileNotFoundError:
        print(f"❌ Error: El archivo '{archivo_excel}' no existe")
        return []
    except Exception as e:
        print(f"❌ Error al procesar el archivo: {e}")
        return []

def guardar_json(json_array, archivo_salida="datos.json"):
    """
    Guarda el arreglo JSON en un archivo
    """
    try:
        with open(archivo_salida, 'w', encoding='utf-8') as f:
            json.dump(json_array, f, indent=2, ensure_ascii=False)
        print(f"✓ JSON guardado en: {archivo_salida}")
    except Exception as e:
        print(f"❌ Error al guardar JSON: {e}")

def mostrar_ejemplo(json_array, num_ejemplos=2):
    """
    Muestra algunos ejemplos del JSON generado
    """
    print(f"\n{'='*60}")
    print("EJEMPLOS DEL JSON GENERADO:")
    print('='*60)
    
    for i, item in enumerate(json_array[:num_ejemplos]):
        print(f"\nEjemplo {i+1}:")
        print(json.dumps(item, indent=2, ensure_ascii=False))

# EJEMPLO DE USO PRINCIPAL
if __name__ == "__main__":
    # Nombre del archivo Excel
    archivo_excel = "Segumiento_alfa.xlsx"
    
    # Convertir Excel a JSON
    json_data = excel_to_json_array(archivo_excel)
    
    if json_data:
        # Mostrar algunos ejemplos
        mostrar_ejemplo(json_data)
        
        # Guardar en archivo JSON
        guardar_json(json_data, "C:\\Users\\79220621\\Documents\\REPORTEDIARIO\\REPORTEDIARIO\\datos\\alfa.json")
        
        # También puedes trabajar directamente con el array
        print(f"\nTotal de registros: {len(json_data)}")
        
        # Ejemplo: filtrar por estado
        en_proceso = [item for item in json_data if item['state'] == 'En Proceso']
        print(f"Registros 'En Proceso': {len(en_proceso)}")
        
        # Ejemplo: obtener todos los asignados únicos
        asignados = list(set(item['assigned'] for item in json_data if item['assigned']))
        print(f"Personas asignadas: {asignados}")

# FUNCIÓN ALTERNATIVA SI QUIERES MÁS CONTROL
def excel_to_json_con_validaciones(archivo_excel):
    """
    Versión con más validaciones y limpieza de datos
    """
    try:
        df = pd.read_excel(archivo_excel)
        json_array = []
        
        for index, row in df.iterrows():
            # Limpiar y validar datos
            id_val = str(row.iloc[1]).strip() if pd.notna(row.iloc[1]) else ""
            progress_val = 0
            
            # Validar progress como número (manejar formato de porcentaje)
            try:
                if pd.notna(row.iloc[6]):
                    progress_raw = str(row.iloc[6]).strip()
                    # Si es un porcentaje con %, extraer el número
                    if progress_raw.endswith('%'):
                        progress_val = int(float(progress_raw.replace('%', '')))
                    # Si es un decimal (ej: 0.75 = 75%)
                    elif '.' in progress_raw and float(progress_raw) <= 1:
                        progress_val = int(float(progress_raw) * 100)
                    else:
                        progress_val = int(float(progress_raw))
            except (ValueError, TypeError):
                progress_val = 0
            
            # Formatear fechas al formato DD/MM/YYYY
            start_date = ""
            end_date = ""
            
            # Procesar startDate
            if pd.notna(row.iloc[9]):
                try:
                    if isinstance(row.iloc[9], pd.Timestamp):
                        start_date = row.iloc[9].strftime("%d/%m/%Y")
                    else:
                        # Intentar convertir string a fecha
                        fecha_temp = pd.to_datetime(str(row.iloc[9]).strip(), errors='coerce')
                        if pd.notna(fecha_temp):
                            start_date = fecha_temp.strftime("%d/%m/%Y")
                except (ValueError, TypeError, AttributeError):
                    start_date = ""
            
            # Procesar endDate
            if pd.notna(row.iloc[11]):
                try:
                    if isinstance(row.iloc[11], pd.Timestamp):
                        end_date = row.iloc[11].strftime("%d/%m/%Y")
                    else:
                        # Intentar convertir string a fecha
                        fecha_temp = pd.to_datetime(str(row.iloc[11]).strip(), errors='coerce')
                        if pd.notna(fecha_temp):
                            end_date = fecha_temp.strftime("%d/%m/%Y")
                except (ValueError, TypeError, AttributeError):
                    end_date = ""
            
            json_obj = {
                "id": id_val,
                "title": str(row.iloc[2]).strip() if pd.notna(row.iloc[2]) else "",
                "assigned": str(row.iloc[0]).strip() if pd.notna(row.iloc[0]) else "",
                "state": str(row.iloc[5]).strip().title() if pd.notna(row.iloc[5]) else "",  # Title Case
                "progress": progress_val,
                "startDate": start_date,
                "endDate": end_date,
                "observations": format_dates_in_observations(row.iloc[15]),
                "unit": "Fala",  # Valor fijo
                "detail": str(row.iloc[3]).strip() if pd.notna(row.iloc[3]) else "",
                "visible": bool(row.iloc[16]) if pd.notna(row.iloc[16]) else False  # Columna Q (índice 16)
            }
            
            json_array.append(json_obj)
        
        return json_array
        
    except Exception as e:
        print(f"Error: {e}")
        return []