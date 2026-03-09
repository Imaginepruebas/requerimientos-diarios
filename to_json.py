import pandas as pd
import json
import re


def parse_visible(value):
    if pd.isna(value):
        return False

    value = str(value).strip().lower()

    if value in ["true", "verdadero", "1", "si", "sí", "y", "yes"]:
        return True
    if value in ["false", "falso", "0", "no", "n"]:
        return False

    return False


def format_dates_in_observations(text):
    if not text or pd.isna(text):
        return ""

    pattern = r'\b(\d{1,2}/\d{1,2}/\d{4})\b'
    return re.sub(pattern, r'[\1]', str(text))


def excel_to_json_array(archivo_excel):

    try:
        df = pd.read_excel(archivo_excel)

        print("✓ Archivo Excel leído correctamente")
        print(f"Dimensiones: {df.shape[0]} filas × {df.shape[1]} columnas")
        print("Columnas:", list(df.columns))

        json_array = []

        for index, row in df.iterrows():

            # ================= PROGRESS (UNICO Y CORRECTO) =================
            progress_val = 0

            if "% Avance" in df.columns:
                valor = row["% Avance"]
            else:
                valor = row.iloc[6]

            if pd.notna(valor):
                try:
                    num = float(str(valor).replace("%", "").strip())
                    

                    if num <= 1:
                        progress_val = int(num * 100)
                    else:
                        progress_val = int(num)
                except:
                    progress_val = 0
            # ===============================================================

            # Fechas
            def parse_fecha(v):
                if pd.isna(v):
                    return ""
                if isinstance(v, pd.Timestamp):
                    return v.strftime("%d/%m/%Y")
                try:
                    f = pd.to_datetime(str(v).strip(), errors="coerce")
                    if pd.notna(f):
                        return f.strftime("%d/%m/%Y")
                except:
                    pass
                return ""

            start_date = parse_fecha(row.iloc[9])
            fecha_estimada_entrega = parse_fecha(row.iloc[10])
            end_date = parse_fecha(row.iloc[11])
            fecha_compromiso_cliente = parse_fecha(row.iloc[13])
            fecha_produccion = parse_fecha(row.iloc[15])

            dias_estimados = int(row.iloc[7]) if pd.notna(row.iloc[7]) else 0
            dias_total = int(row.iloc[12]) if pd.notna(row.iloc[12]) else 0

            json_obj = {
                "id": str(row.iloc[1]) if pd.notna(row.iloc[1]) else "",
                "title": str(row.iloc[2]) if pd.notna(row.iloc[2]) else "",
                "assigned": str(row.iloc[0]).strip().upper() if pd.notna(row.iloc[0]) else "",
                "state": str(row.iloc[5]).title() if pd.notna(row.iloc[5]) else "",
                "progress": progress_val,
                "startDate": start_date,
                "endDate": end_date,
                "observations": format_dates_in_observations(row.iloc[16]),
                "unit": "Tuya",
                "detail": str(row.iloc[3]) if pd.notna(row.iloc[3]) else "",
                "visible": parse_visible(row.iloc[17]),
                "diasEstimadosDesarrollo": dias_estimados,
                "fechaEstimadaEntrega": fecha_estimada_entrega,
                "fechaCompromisoCliente": fecha_compromiso_cliente,
                "diasTotalDesarrollo": dias_total,
                "produccion": fecha_produccion
            }

            json_array.append(json_obj)

        print(f"✓ Se procesaron {len(json_array)} filas")
        return json_array

    except Exception as e:
        print("❌ Error:", e)
        return []


def guardar_json(json_array, archivo):
    with open(archivo, "w", encoding="utf-8") as f:
        json.dump(json_array, f, indent=2, ensure_ascii=False)

    print("✓ JSON guardado en:", archivo)  


if __name__ == "__main__":

    archivo_excel = "Tuya.xlsx"

    json_data = excel_to_json_array(archivo_excel)

    if json_data:
        guardar_json(json_data, "C:\\Users\\79220621\\Documents\\REPORTEDIARIO\\REPORTEDIARIO\\datos\\Tuya.json")

        print("Total registros:", len(json_data))

        asignados = list(set(x["assigned"] for x in json_data if x["assigned"]))
        print("Personas asignadas:", asignados)
