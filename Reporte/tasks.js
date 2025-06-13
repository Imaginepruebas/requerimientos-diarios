let tasks = [
            {
                "id": "INTERNO",
                "title": "Radicación Express con IA",
                "assigned": "DANILO RAMIREZ",
                "state": "En Test",
                "progress": 90,
                "startDate": "27/02/2025",
                "endDate": "28/04/2025",
                "observations": "28/02/2025: modificó el script para entrenar con lenguaje natura28/04/2025: Se entrega para TEST"
            },
            {
                "id": "INTERNO",
                "title": "Lectura de incapacidadaes por Python",
                "assigned": "DANILO RAMIREZ",
                "state": "Entrenamiento",
                "progress": 50,
                "startDate": "14/02/2025",
                "endDate": "",
                "observations": "13/06/2025: No se ha podido validar el rendimiento del modelo"
            },
            {
                "id": "GD772-103",
                "title": "Paso de documentos de fs a s3",
                "assigned": "DANILO RAMIREZ",
                "state": "Paso a Producción",
                "progress": 10,
                "startDate": "15/04/2025",
                "endDate": "22/05/2025",
                "observations": "13/06/2025: Se ajustaron fechas para realizar un nuevo reconteo de archivos transferidos"
            },
            {
                "id": "GD772-64",
                "title": "Api de recobros",
                "assigned": "DANILO RAMIREZ",
                "state": "Detenido Bolívar",
                "progress": 0,
                "startDate": "27/02/2025",
                "endDate": "07/03/2025",
                "observations": "28/04/2025: Requerimeinto cancelado por Bolivar"
            },
            {
                "id": "INTERNO",
                "title": "Comprimir información del body de la tabla cola_correos",
                "assigned": "DANILO RAMIREZ",
                "state": "Detenido Bolívar",
                "progress": 0,
                "startDate": "31/03/2025",
                "endDate": "",
                "observations": "28/04/2025: sin cambios por parte de bolivar"
            },
            {
                "id": "MDSB-707440/GD772-74",
                "title": "Portal reembolsos ARL (FLUJO YII)",
                "assigned": "JAIRO NIÑO",
                "state": "Pruebas Bolívar",
                "progress": 80,
                "startDate": "02/05/2025",
                "endDate": "",
                "observations": "11/06/2025: A la espera de habilitación del ambiente de pruebas para que Bolivar continue con las pruebas, Bolivar debe gestionar la activación para continuar."
            },
            {
                "id": "MDSB-780227",
                "title": "Duplicación de actividades en Nativo",
                "assigned": "JESUS PEÑA",
                "state": "Pausado",
                "progress": 0,
                "startDate": "17/03/2025",
                "endDate": "",
                "observations": "28/04/2025: se pausa por validacion de flujos."
            },
            {
                "id": "GD772-87-Laravel",
                "title": "Implementar en laravel la autenticación con QR",
                "assigned": "JESUS PEÑA",
                "state": "Pruebas Bolívar",
                "progress": 0,
                "startDate": "31/01/2025",
                "endDate": "12/02/2025",
                "observations": "10/04/2025: Bolívar autorizó ayer iniciarlo en test para los ambientes de Yii y nativo"
            },
            {
                "id": "GD772-87-Yii-Nativo",
                "title": "Implementar en Yii y Nativo la autenticación con QR",
                "assigned": "JESUS PEÑA",
                "state": "Pruebas Bolívar",
                "progress": 0,
                "startDate": "14/04/2025",
                "endDate": "",
                "observations": "28/05/2025: El 26 de Mayo se finalizan los ajustes indiecados por Bolivar y se infroma para que realicen las pruebas."
            },
            {
                "id": "INTERNO",
                "title": "Realizar Imagen de docker de nativo para Jesus",
                "assigned": "WILSON APONTE",
                "state": "Pendiente",
                "progress": 0,
                "startDate": "",
                "endDate": "",
                "observations": "27/02/2025: No se ha podido realizar debido que se encuentra en otras tareas asignadas."
            },
            {
                "id": "GD772-100",
                "title": "Cambio de flujo radicación de facturas EPS",
                "assigned": "JAIRO NIÑO",
                "state": "Pendiente Bolívar",
                "progress": 0,
                "startDate": "",
                "endDate": "",
                "observations": "23/05/2025: No se han recibido nuevas indicaciones sobre este requerimiento de partes de Bolivar"
            },
            {
                "id": "INTERNO",
                "title": "Mejora informe glosa req GD772-104 Campos glosa aceptada y glosa conciliación",
                "assigned": "JAIRO NIÑO",
                "state": "En Proceso",
                "progress": 50,
                "startDate": "23/05/2025",
                "endDate": "",
                "observations": "13/06/2025: Se cometió un error durante el desarrollo, pero se continúa con los ajustes. Se espera mostrar avances en la tarde."
            },
            {
                "id": "INTERNO",
                "title": "Restablecimiento de contraseña en Laravel",
                "assigned": "JAIRO NIÑO",
                "state": "En Proceso",
                "progress": 30,
                "startDate": "05/06/2025",
                "endDate": "",
                "observations": "11/06/2025: Se confirmó que no se muestra el mensaje de “usuario no existe” cuando aplica. Para los usuarios nuevos que no pueden iniciar sesión después de restablecer la clave, Fabio realizara pruebas."
            },
            {
                "id": "GD772-88",
                "title": "Requerimiento gestión Medicamentos fase 2 - Sprint 2",
                "assigned": "JESUS PEÑA",
                "state": "Pendiente",
                "progress": 0,
                "startDate": "",
                "endDate": "",
                "observations": "09/06/2025: Estimación inicial de desarrollo 9 dias"
            },
            {
                "id": "GD772-81",
                "title": "Calificador automático (1)",
                "assigned": "JESUS PEÑA",
                "state": "Pruebas Bolívar",
                "progress": 0,
                "startDate": "28/04/2025",
                "endDate": "",
                "observations": "19/05/2025: El viernes 16 de mayo Se realizaron mejoras en la parte de envío físico, mostrando información completa (dirección, teléfono, nombre, etc.) cuando el caso es físico, incluyendo el PDF de salida para nueve tipologías distintas, no solo una. También se configuró el administrador de cartas, permitiendo edición según cada tipología"
            },
            {
                "id": "INTERNO",
                "title": "Analitica de factura de cuentas medicas (ingresar en el portal de yii) ArL",
                "assigned": "JAIRO NIÑO",
                "state": "En Proceso",
                "progress": 10,
                "startDate": "09/05/2025",
                "endDate": "",
                "observations": "13/06/2025: Se retomará el desarrollo durante la mañana de hoy. El objetivo es mostrar resultados concretos en esta jornada"
            },
            {
                "id": "INTERNO",
                "title": "Ajustar los portales para ser responsive",
                "assigned": "DANILO RAMIREZ",
                "state": "Pausado",
                "progress": 0,
                "startDate": "05/05/2025",
                "endDate": "",
                "observations": "28/05/2025: Continuara pausado dando prioridad al req GD772-109 Lectura de nuevos datos de ordenes medicas con IA con el fin de dejarlo terinado antes de salir a vacaiones el martes 3 de Junio."
            },
            {
                "id": "GD772-109",
                "title": "Lectura de nuevos datos de ordenes medicas con IA",
                "assigned": "DANILO RAMIREZ",
                "state": "En Proceso",
                "progress": 75,
                "startDate": "14/05/2025",
                "endDate": "",
                "observations": "11/06/2025: Retomara entre hoy y mañana un espacio de 1 a 2 horas para insertar más registros y así permitir que el sistema se entrene diariamente de forma continua."
            },
            {
                "id": "INTERNO",
                "title": "Desarrollo clasificador de imágenes en Python",
                "assigned": "JESUS PEÑA",
                "state": "Pausado",
                "progress": 80,
                "startDate": "15/05/2025",
                "endDate": "",
                "observations": "28/05/2025: Las pruebas realizadas con el clasificador de archivos PDF no han alcanzado los resultados esperados. Se evalúan otras opciones, pero el enfoque actual está en la funcionalidad de Sistematización con IA (Segunda vista de incapacidades en portal)."
            },
            {
                "id": "MDSB-812862",
                "title": "Jira dia a dia Descarga masiva de imágenes (Nativo)",
                "assigned": "JESUS PEÑA",
                "state": "Pendiente",
                "progress": 0,
                "startDate": "",
                "endDate": "",
                "observations": "30/05/2025: Se tiene previsto evacuar los requerimientos prioritarios para poder dar inicio a las validaciones correspondientes."
            },
            {
                "id": "INTERNO",
                "title": "Implementar cambio de contraseña a 30 dias en los tres aplicativos",
                "assigned": "JESUS PEÑA",
                "state": "Pendiente",
                "progress": 0,
                "startDate": "",
                "endDate": "",
                "observations": "30/05/2025: Se tiene previsto evacuar los requerimientos prioritarios para poder dar inicio a las validaciones correspondientes"
            },
            {
                "id": "INTERNO",
                "title": "Sistematización con IA (Segunda vista de incapacidades en portal)",
                "assigned": "JESUS PEÑA",
                "state": "Pruebas Imagine",
                "progress": 95,
                "startDate": "26/05/2025",
                "endDate": "06/06/2025",
                "observations": "11/06/2025: Se reporta que algunas imágenes devuelven NIT en lugar de cédula. Se sugirió probar con múltiples imágenes y registrar patrones para mejoras futuras"
            },
            {
                "id": "MDSB-820704",
                "title": "Jira dia a dia Error en generación informe mail 472 (Prefactura)",
                "assigned": "JESUS PEÑA",
                "state": "Pendiente",
                "progress": 0,
                "startDate": "",
                "endDate": "",
                "observations": "30/05/2025: En cola de trabajo"
            },
            {
                "id": "INTERNO",
                "title": "Validación Informes de cuentas medicas y colas de procesamiento",
                "assigned": "JAIRO NIÑO",
                "state": "Pendiente",
                "progress": 65,
                "startDate": "29/05/2025",
                "endDate": "",
                "observations": "13/06/2025: Se continuará investigando otras alternativas para optimizar el proceso"
            },
            {
                "id": "GD772-69",
                "title": "Extraccion de Imagenes (API)",
                "assigned": "JESUS PEÑA",
                "state": "En Proceso",
                "progress": 90,
                "startDate": "09/06/2025",
                "endDate": "",
                "observations": "13/06/2025: El 12 de junio finalizó la lógica de firma y reestructuración del código. El API está lista, solo falta habilitar el endpoint para completar las pruebas"
            },
            {
                "id": "INTERNO",
                "title": "Automatización cuentas medicas con IA",
                "assigned": "JAIRO NIÑO",
                "state": "Pendiente",
                "progress": 20,
                "startDate": "03/06/2025",
                "endDate": "",
                "observations": "11/06/2025: No se trabajó en los últimos días. Continúa pendiente."
            },
            {
                "id": "GD772-60",
                "title": "Descarga automatica de informes",
                "assigned": "JAIRO NIÑO",
                "state": "En Proceso",
                "progress": 10,
                "startDate": "11/06/2025",
                "endDate": "",
                "observations": "13/06/2025: El 11 de junio inicia en la creación de una tabla que permita asignar informes automáticos a múltiples usuarios. Falta desarrollar el panel administrativo y completar los ajustes en la estructura de CMS. hoy se estima se solicitara control de cambios en test"
            },
            {
                "id": "INTERNO",
                "title": "Monitoreo de carga y alertas del servidor",
                "assigned": "DANILO RAMIREZ",
                "state": "En Proceso",
                "progress": 75,
                "startDate": "10/06/2025",
                "endDate": "",
                "observations": "13/06/2025: el 11 de junio se finalizó la implementación del monitoreo de carga, RAM y procesadores, con toma de snapshots cada minuto ante sobrecarga. El envío de alertas por correo quedó pendiente de implementar mediante Exchange para evitar abrir puertos. Se acordó dejarlo “en proceso” para retomarlo más adelante si es necesario."
            },
            {
                "id": "CNTI-271",
                "title": "Vulnerabilidad, CVE-2016-4055 – DoS por expresiones regulares ineficientes en Moment.js (< v2.11.2)",
                "assigned": "DANILO RAMIREZ",
                "state": "En Proceso",
                "progress": 50,
                "startDate": "13/06/2025",
                "endDate": "",
                "observations": "13/06/2025: Se actualizó a la versión 2.29.4 para corregir la vulnerabilidad, se deben realizar pruebas en test para comprobar funcionamiento."
            },
            {
                "id": "CNTI-271-Moment",
                "title": "Vulnerabilidad, CVE-2017-18214 (Moment.js) – ReDoS al procesar cadenas de fecha maliciosas (< v2.19.3)",
                "assigned": "DANILO RAMIREZ",
                "state": "Finalizado",
                "progress": 100,
                "startDate": "11/06/2025",
                "endDate": "11/06/2025",
                "observations": "13/06/2025: El 11 de junio se actualizó a la versión 2.29.4 para corregir la vulnerabilidad"
            },
            {
                "id": "CNTI-271-Linux",
                "title": "Vulnerabilidad, CVE-2017-18214 (Linux Kernel) – Error en el subsistema DCCP del kernel de Linux",
                "assigned": "DANILO RAMIREZ",
                "state": "Finalizado",
                "progress": 100,
                "startDate": "12/06/2025",
                "endDate": "13/06/2025",
                "observations": "13/06/2025: Se cierre vulnerabilidad debido a que la Versión de kernel es superior (5.15.0-1084-aws)"
            },
            {
                "id": "CNTI-195",
                "title": "Vulnerabilidad, Implementación insegura de la integridad de los recursos secundarios (SRI) / imaginex",
                "assigned": "DANILO RAMIREZ",
                "state": "Pendiente",
                "progress": 0,
                "startDate": "08/07/2025",
                "endDate": "",
                "observations": "No usar SRI permite que recursos externos como scripts o estilos sean manipulados sin ser detectados, exponiendo al sitio a posibles ataques si el servidor externo es comprometido"
            },
            {
                "id": "CNTI-96",
                "title": "Vulnerabilidad, La política de seguridad de los contenidos contiene la directiva “unsafe” / imaginex",
                "assigned": "DANILO RAMIREZ",
                "state": "Pendiente",
                "progress": 0,
                "startDate": "01/07/2025",
                "endDate": "",
                "observations": "Una configuración débil de la Política de Seguridad de Contenido (CSP) permite ejecutar scripts en línea o evaluar código dinámico, lo que incrementa el riesgo de ataques XSS."
            },
            {
                "id": "PRV_2025_001",
                "title": "REVISIÓN DE LIQUIDACIÓN PARA PAGO VALIDACIÓN DE LOTE PARA PAGO NOTIFICACIÓN DE PAGO",
                "assigned": "Mauricio Figueroa",
                "state": "En Proceso",
                "progress": 30,
                "startDate": "03/02/2025",
                "endDate": "",
                "observations": "13/06/2025: Se obtuvo respuesta positiva sobre permisos para acceder a la vista de Plus. Sin embargo, falta que la vista tenga datos reales para completar la sincronización."
            },
            {
                "id": "PRV_2025_004",
                "title": "AUXILIOS FUNERARIOS PAGO AUX. FUNERARIOS",
                "assigned": "Mauricio Figueroa",
                "state": "Pausado",
                "progress": 0,
                "startDate": "02/05/2025",
                "endDate": "",
                "observations": "09/06/2025: El requerimirneo fue pausado el 6 de junio de 2025."
            },
            {
                "id": "PRV_2025_009",
                "title": "DESARROLLO PREVISIONALES INCAPACIDADES",
                "assigned": "Mauricio Figueroa",
                "state": "Pruebas Alfa",
                "progress": 100,
                "startDate": "09/06/2025",
                "endDate": "12/06/2025",
                "observations": "13/06/2025: Ya fue entregado en ambiente de pruebas para validación del cliente. Está funcionando correctamente y aplicando los cálculos según lo solicitado."
            },
            {
                "id": "PRV_2025_007",
                "title": "CALCULO IBL",
                "assigned": "Mauricio Figueroa",
                "state": "En Proceso",
                "progress": 10,
                "startDate": "13/06/2025",
                "endDate": "",
                "observations": "11/06/2025: Continuara con el desarrollo tras finalizar req PRV_2025_001 REVISIÓN DE LIQUIDACIÓN PARA PAGO 13/06/2025: Se programó su inicio para hoy. Mauricio confirmara la estimación del tiempo de desarrollo."
            },
            {
                "id": "PRV_2025_005",
                "title": "HISTORIA LABORAL",
                "assigned": "Mauricio Figueroa",
                "state": "Pendiente",
                "progress": 0,
                "startDate": "14/06/2025",
                "endDate": "",
                "observations": "11/06/2025: Continuara con el desarrollo tras finalizar req PRV_2025_007 CALCULO IBL"
            }
        ];
export default tasks;