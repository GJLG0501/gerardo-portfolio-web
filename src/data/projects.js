export const projects = [
  {
    id: 1,
    slug: "modelado-riesgo-crediticio",
    title: "Modelado de Riesgo Crediticio (LDA/QDA)",
    company: "LendSmart",
    context: "Evaluación de riesgo crediticio para LendSmart.",
    problem: "Alta tasa base de default (28%) afectando rentabilidad operativa.",
    solution: "Clasificación con modelos paramétricos (LDA/QDA) para predecir impago.",
    impact: "Reducción de exposición al riesgo mediante reglas de decisión auditables.",
    stack: ["Python", "scikit-learn", "pandas", "Riesgo Crediticio", "Clasificación"],
    githubUrl: "https://github.com/GJLG0501/mi-portfolio-ma2003b-/tree/main/case-02-discriminant-analysis",
    caseStudyUrl: "https://github.com/GJLG0501/mi-portfolio-ma2003b-/tree/main/case-02-discriminant-analysis",
    extended: {
      narrative: true,
      sections: [
        {
          title: "Contexto del Problema Crediticio",
          content: "El riesgo de originación es el motor de supervivencia de cualquier institución financiera de consumo. En LendSmart se detectó una tasa base de incumplimiento (default) histórica preocupante, amenazando directamente el P&L operativo si no se contenía sistemáticamente la aprobación de perfiles de alto riesgo crediticio.",
          image: "/assets/projects/modelado-riesgo-crediticio/mean-default-rate.png",
          caption: "Distribución condicional que evidencia la proporción masiva de cartera productiva operando históricamente en escenario de impago (Default)."
        },
        {
          title: "Normativas, Riesgo y Explicabilidad",
          content: "A diferencia del marketing digital, negar un servicio bancario requiere transparencia absoluta frente a organismos reguladores (se debe justificar sólidamente un rechazo para no violar derechos contractuales en \"cajas negras\" algorítmicas). Esta restricción directiva condicionó el proyecto a priorizar heurísticas paramétricas explicables en lugar de Modelos de Aprendizaje Profundo opacos."
        },
        {
          title: "Exploración de Relaciones Multi-Variables",
          content: "Iniciamos un proceso exhaustivo de depuración sobre millones de registros anonimizados, analizando cruces entre covariables fuertes (edad, utilización de tarjeta de crédito, línea superficial disponible) frente al Target (Pago vs Atraso). Identificar la colinealidad resultó imperativo antes de derivar funciones.",
          image: "/assets/projects/modelado-riesgo-crediticio/correlation-map.png",
          caption: "Mapa estadístico de correlación general, exhibiendo los patrones ocultos y la fuerza lineal de co-dependencia entre variables económicas del usuario."
        },
        {
          title: "Comparación de Criterios (LDA vs QDA)",
          content: "Se diseñaron dos paradigmas paralelos de Análisis Discriminante para calificar prospectos: Un modelo basado en homogeneidad lineal (LDA) asumiendo mismas varianzas para deudores y pagadores, contra un acercamiento Cuadrático (QDA), asumiendo que los clientes problemáticos financieramente son estadísticamente muchísimo más dispersos en su comportamiento.",
          image: "/assets/projects/modelado-riesgo-crediticio/lda-vs-qda.png",
          caption: "Análisis transversal algorítmico enfrentando las fronteras rígidias del LDA contra la flexibilización multidominio requerida por el QDA."
        },
        {
          title: "Sensibilidad y Desempeño Operativo",
          content: "Al testear masivamente, priorizamos sintonizar el modelo para reducir drásticamente un factor asimétrico: Los 'Falsos Positivos'. Es muchísimo más costoso y destructivo aprobar un gran crédito a alguien que defaulteará (Falso Positivo) que negárselo inadvertidamente por cautela a alguien que sí iba a pagar. Estas métricas modelaron la efectividad matemática final.",
          image: "/assets/projects/modelado-riesgo-crediticio/qda-metrics.png",
          caption: "Métricas absolutas de sensibilidad de negocio demostrando el balance y contención sobre Falsos Positivos productivos."
        },
        {
          title: "Implicaciones Estratégicas para Riesgos",
          content: "La adopción de este discriminante paramétrico sentó una base auditada interna para LendSmart. El Comité Operativo de Crédito puede respaldar con números cada barrera de corte comercial (Score Decision), asegurando un crecimiento moderado del TPV financiero sin inflar artificialmente la bolsa de provisión corporativa de cuentas incobrables."
        }
      ]
    }
  },
  {
    id: 2,
    slug: "segmentacion-clientes",
    title: "Segmentación de Clientes (Clustering)",
    company: "MegaMart",
    context: "Personalización de campañas comerciales en MegaMart.",
    problem: "Inversión publicitaria saturada sin distinción de valor por segmento de retención.",
    solution: "Clustering no-supervisado (K-Means) con validación Silhouette / Método del Codo.",
    impact: "Aislamiento empírico del clúster VIP y rediseño efectivo del presupuesto CRM.",
    stack: ["Python", "Clustering", "K-Means", "Análisis de Negocio", "Plotly"],
    githubUrl: "https://github.com/GJLG0501/mi-portfolio-ma2003b-/tree/main/case-03-cluster-analysis",
    caseStudyUrl: "https://github.com/GJLG0501/mi-portfolio-ma2003b-/tree/main/case-03-cluster-analysis",
    extended: {
      narrative: true,
      sections: [
        {
          title: "Contexto de Negocio",
          content: "En un entorno ultra-competitivo como MegaMart Retail, retener clientes a ciegas es perjudicial. Históricamente, el corporativo inyectaba un presupuesto único masivo en incentivos comerciales (Mail/Ads) para todo el portafolio, regalando rebajas agresivas a consumidores eventuales y descuidando estímulos vitales para perfiles recurrentes sumamente estables."
        },
        {
          title: "El Problema Operacional",
          content: "Tratar universalmente a un padrón es insostenible y erosiona brutalmente el margen operativo (EBITDA). Existe una necesidad inmediata de crear \"Funnels Estratégicos Inteligentes\" separando, sin preconceptos artificiales o sesgos humanos, la calidad estructural del usuario, para potenciar tácticas de lealtad al top decil (el 10% que origina el mayor volumen neto de ventas e ingresos recurrentes)."
        },
        {
          title: "Ingeniería en Pre-procesamiento de Datos",
          content: "Iniciamos una recolección sobre millones de bits de telemetría y compra, comprimiéndolos y filtrando *outliers* anómalos (compras mayoristas institucionales que destruirían un modelo poblacional). Imputamos constructos RFM nativos (Recency, Frequency, Monetary) balanceados geométricamente, vital para garantizar que algoritmos basados en distancias euclidianas no estén manipulados por la varianza nativa en monedas."
        },
        {
          title: "Modelado Selectivo de Inflexiones Múltiples",
          content: "Implementar clústeres a ciegas produce errores de agrupación. Aplicamos el \"Método del Codo\" penalizando inercia transversal, y cruzamos los datos mediante validación del \"Silhouette Score\". Este doble candado empujó matemáticamente la validación hacia 5 arquetipos distintos donde la cohesión de similitudes (K=5) converge perfectamente sin redundancias operacionales.",
          image: "/assets/projects/segmentacion-clientes/elbow-silhouette.png",
          caption: "Alineación matemática y optimización doble, justificando y respaldando la partición no-supervisada rigurosamente a 5 cortes."
        },
        {
          title: "Convergencia de Observaciones y Agrupamiento Dimensional",
          content: "El desafío narrativo: es visualmente incomprensible representar distancias entre perfiles de 7 dimensiones. Recurrimos entonces a algoritmos de Análisis de Componentes Principales (PCA) proyectando una condensación 2D sobre la variabilidad agregada fundamental (Eigenvectors). Esta visualización rotunda sirvió para convencer de inmediato a la mesa directiva sobre la delimitación empírica en el ecosistema real de consumidores.",
          image: "/assets/projects/segmentacion-clientes/pca.png",
          caption: "Gráfico de proyección de dimensiones latentes, atestiguando con brillante evidencia matemática la separación nítida e independiente que impera en la base."
        },
        {
          title: "Estructura Demográfica (Búsqueda de Patrones Táctiles)",
          content: "Ya mapeados, extrajimos e iteramos la distribución natural de las nubes (Centroides relativos), comparando variables bidimensionales críticas. La matriz delineó de forma elocuente clústeres formidables (Usuarios VIP Frecuentes, Migratorios Cazaofertas e Inactivos Históricos Abandonados) permitiendo trazar por primera vez tácticas defensivas aisladas para cada esfera de riesgo comercial detectada.",
          image: "/assets/projects/segmentacion-clientes/scatter-plot.png",
          caption: "Aterrizaje pragmático de regresiones bivariantes, ilustrando gráficamente a los arquetipos sobre rangos duros de rentabilidad."
        },
        {
          title: "Interpretaciones para Retargeting Sistémico (CRM)",
          content: "La decodificación arrojó tres lecciones angulares y accionables inmediatas para el área técnica/operativa: 1) Redistribuir el OPEX presupuestal agresivo única y expresamente para aislar a la competencia en el Cluster \"VIP Rentables\", 2) Detonar activadores en email automatizado bajo goteo al detectar inercia pasiva en los segmentos de \"Potencial Lealtad y Ascenso\", compensando silenciosamente los vacíos presenciales, y 3) Inhibir permanentemente las inversiones inútiles promocionales originadas por un sobrecosto hacia los clusters volátiles irrelevantes."
        }
      ]
    }
  },
  {
    id: 3,
    slug: "prediccion-ventas-retail",
    title: "Modelado Predictivo de Ventas con Ensambles",
    company: "Datos de Amazon",
    context: "Predicción de transaccionalidad futura (Retail).",
    problem: "Quiebres de inventario logístico originados por modelos analíticos exclusivamente reactivos.",
    solution: "Comparativa de Modelos Supervisados evaluando Árboles Paramétricos frente a Ensambles (Forest).",
    impact: "Optimización radical de las desviaciones (RMSE/MAPE) mitigando fuertemente el sobrestock.",
    stack: ["Python", "scikit-learn", "Random Forest", "Grid Search", "Predicción de Ventas"],
    githubUrl: "https://github.com/GJLG0501/mi-portfolio-ma2003b-/tree/main/case-01-factor-analysis",
    caseStudyUrl: "https://github.com/GJLG0501/mi-portfolio-ma2003b-/tree/main/case-01-factor-analysis",
    extended: {
      narrative: true,
      sections: [
        {
          title: "El Problema de Decidir Viendo el Pasado",
          content: "El retail masivo no puede guiarse únicamente de analítica descriptiva (qué se vendió ayer). La incapacidad para predecir rigurosamente las ventas futuras acarrea sobre-stock (capital atrapado en almacén) o quiebres logísticos mortales (demandas en ceros sin inventario de soporte). Convertir históricos dispersos en modelos predictivos matemáticamente validados es el santo grial de las utilidades."
        },
        {
          title: "Exploración e Ingeniería de Variables (EDA)",
          content: "Antes de introducir modelos regresivos, aislamos e ingiriendo la metadata multivariada provista por Amazon. Tras evaluar distribuciones, el foco decisivo recayó sobre desvelar la multicolinealidad entre características (features). En inferencia estadística, descartar predictores artificialmente correlacionados evita la sobreestimación del modelo.",
          image: "/assets/projects/prediccion-ventas-retail/correlation-map.png",
          caption: "Correlación lineal bivariada (Matriz Pearson) exponiendo variables fuertemente dominantes o sustractivas antes del entrenamiento."
        },
        {
          title: "Arquitecturas de Machine Learning Evaluadas",
          content: "En lugar de adherirse a un solo enfoque de caja negra, estructuramos un enfrentamiento de algoritmos: Establecimos un 1. Árbol de Decisión Regresor estático como Línea Base Empírica, contra 2. Un Algoritmo de Ensamble (Random Forest), cuya arquitectura de votación masiva (bagging) mitiga estructuralmente la varianza natural de factores individuales."
        },
        {
          title: "Comparación Analítica (Métricas Clave)",
          content: "Para gerencia financiera, el margen de error debe decodificarse en moneda. Evaluamos Decision Tree, Decision Tree con Grid Search, Random Forest y Random Forest con Grid Search mediante métricas como RMSE, MSE, MAE, MAPE y R2.",
          image: "/assets/projects/prediccion-ventas-retail/comparison-metrics.png",
          caption: "Comparación cuantitativa entre modelos usando métricas de error y ajuste.",
          interactiveUrl: "/assets/projects/prediccion-ventas-retail/comparison-metrics.html",
          interactiveLabel: "Explorar métricas interactivas"
        },
        {
          title: "Comportamiento del Árbol Simple (Test Set Baseline)",
          content: "Una visualización sobre el Set de Prueba ciego (sin data-leaking de entrenamiento) es vital. El Árbol de Regresión estándar demostró una convergencia general pero sus cortes paramétricos fijos (splits) mostraron un rango predecible y falto de flexibilidad en picos súbitos.",
          image: "/assets/projects/prediccion-ventas-retail/dt-test-results.png",
          caption: "Limitaciones operativas exhibidas por un Árbol Paramétrico frente al escurridizo comportamiento real del Test Set."
        },
        {
          title: "Supremacía: Random Forest C/ Grid Search",
          content: "El desenlace validó nuestra arquitectura predilecta. Al inyectar una optimización computacional cruzada exhaustiva sobre los hiperparámetros (Grid Search), el Bosque Aleatorio suprimió ruido colineal, logrando una adherencia a la tendencia subyacente de la curva sumamente fiel, disminuyendo dramáticamente los costos por exceso de inventario logístico inferido.",
          image: "/assets/projects/prediccion-ventas-retail/rf-gs-test-results.png",
          caption: "Impacto del Ensamble Multidimensional. La predicción con iteraciones de Grid Search estrecha milimétricamente el margen de demanda."
        },
        {
          title: "Conclusiones Corporativas",
          content: "El proyecto fundamenta empíricamente que la robustez predictiva de un algoritmo ensamblado amortiza abrumadoramente el costo del clúster de horas de cómputo necesarias para sintonizarlo. En aplicaciones P&L logísticas, sacrificar interpretabilidad pura por certidumbre probabilística (ensambles) es la decisión de negocio de largo plazo por excelencia. Rutas futuras apuntarían sin duda al Gradient Boosting."
        }
      ]
    }
  },
  {
    id: 4,
    slug: "techoserve-customer-satisfaction",
    title: "Análisis del Cliente y Factores Latentes",
    company: "TechoServe",
    context: "Identificación empírica de factores de satisfacción B2B.",
    problem: "Ruido excesivo paramétrico en encuestas y KPIs que ocultaba los drivers operacionales de lealtad.",
    solution: "Análisis Factorial estructurado mediante PCA / reducciones de dimensionalidad rotativa.",
    impact: "Reasignación de CAPEX / OPEX priorizando las verdaderas palancas directas del NPS corporativo.",
    stack: ["Python", "Factor Analysis", "Análisis Estadístico", "Estrategia de Negocio"],
    githubUrl: "#",
    caseStudyUrl: "#",
    extended: {
      narrative: true,
      sections: [
        {
          title: "Contexto y Problema",
          content: "Las encuestas de satisfacción tradicionales suelen saturar a los tomadores de decisiones con decenas de variables evaluadas de manera ruidosa y asilada. El verdadero reto analítico (y de negocio) consiste en comprender que la evaluación general del usuario no se compone de esas docenas de minutas, sino de un grupo de dimensiones subyacentes fundamentales o \"factores latentes\". Identificar cuáles son verdaderamente estos drivers es indispensable para guiar a la operación hacia el incremento del NPS y la probabilidad de retención."
        },
        {
          title: "Exploración Inicial",
          content: "Comenzamos limpiando la matriz de respuestas ordinales y descartando sesgos de recencia en las evaluaciones críticas del cliente. Omitiendo mapas saturados de distribución, priorizamos un escaneo de KMO y Esfericidad de Bartlett para garantizar la factibilidad matemática de aplicar la técnica de componentes."
        },
        {
          title: "Selección del Número de Factores",
          content: "Para justificar empíricamente la estructura del modelo, procesamos y analizamos el Scree Plot, determinando el punto exacto de inflexión donde la varianza marginal explicada ya no resulta estadísticamente valiosa. El modelo retuvo únicamente las dimensiones más fuertes para evitar el sobreajuste.",
          image: "/assets/projects/techoserve/scree-plot.png",
          caption: "Scree Plot evidenciando el \"codo\" para la retención racional de factores latentes."
        },
        {
          title: "Interpretación de Factores Latentes",
          content: "Apoyándonos de estrategias de rotación ortogonal (Varimax), extrajimos las cargas factoriales robustas. Esta matriz nos permite traducir variables estériles en pilares conversacionales en el comité de dirección, acuñando finalmente dimensiones como 'Tecnología', 'Resolución Técnica', 'Capacidad Operativa', 'Valor Estratégico' y 'Soporte Continuo'.",
          image: "/assets/projects/techoserve/cargas.png",
          caption: "Mapa térmico de cargas factoriales, ilustrando la vinculación conceptual de cada variable observada con su pilar macro latente."
        },
        {
          title: "Relación con Métricas de Desempeño (Business Value)",
          content: "El corolario vital del análisis consistió en el modelado asociativo a través de correlaciones: Mapear los scores factoriales sintetizados de cada cliente contra los verdaderos indicadores de salud corporativa (Satisfacción Global, Net Promoter Score, Probabilidad de Renovación Contractual y Oportunidad de Upselling).",
          image: "/assets/projects/techoserve/correlaciones.png",
          caption: "Análisis bivariado evidenciando el vínculo empírico entre la satisfacción de factores latentes y los Core KPIs organizacionales."
        },
        {
          title: "El Hallazgo Crítico",
          content: "Se cristalizó estadísticamente que los pilares tienen impactos sumamente asimétricos sobre la percepción global del usuario B2B. Por ejemplo, el factor latente 1 tiene un efecto dominó abrumador en la lealtad que desplaza a las quejas por valor económico, lo cual obliga virtualmente a una reasignación inminente de CAPEX/OPEX en el área de producto y atención.",
          image: "/assets/projects/techoserve/impacto.png",
          caption: "Modelo de Regresión del Impacto: Jerarquía de factores en la movilización final de retención del cliente."
        },
        {
          title: "Implicaciones Estratégicas",
          content: "En conclusión técnica: se deben centralizar presupuestos presupuestales de retención exclusivamente en los Factores 1 y 2, reformular la taxonomía de los tickets de queja para vigilar variaciones relativas, y rediseñar los umbrales de Health Score del área comercial basados en las previsiones de este modelo analítico."
        }
      ]
    }
  },
  {
    id: 5,
    slug: "analisis-datos-salud-denue",
    title: "Analisis Territorial de Salud con DENUE",
    company: "DENUE / INEGI",
    context: "Exploracion territorial de establecimientos de salud general en Iztapalapa usando el Directorio Estadistico Nacional de Unidades Economicas.",
    problem: "La oferta de salud aparece como un directorio tabular: abundante, pero dificil de leer para detectar concentraciones, vacios de cobertura y diferencias publico-privadas.",
    solution: "Limpieza DENUE, clasificacion por tipo/sector, analisis geoespacial y persistencia homologica para interpretar densidad, aislamiento y cobertura territorial.",
    impact: "Se identificaron 563 establecimientos, 57 puntos aislados y zonas candidatas para intervencion o nuevas ubicaciones con evidencia visual y topologica.",
    stack: ["Python", "Pandas", "Geoanalisis", "DENUE", "TDA", "Persistencia Homologica"],
    githubUrl: "https://github.com/GJLG0501/Analisis_Datos_Salud_DENUE",
    caseStudyUrl: "https://github.com/GJLG0501/Analisis_Datos_Salud_DENUE",
    extended: {
      narrative: true,
      sections: [
        {
          title: "Contexto y Alcance",
          content: "El proyecto transforma registros DENUE de establecimientos de salud general en una lectura territorial accionable. La base se concentro en Iztapalapa y separo consultorios, clinicas y hospitales por sector publico/privado, personal ocupado y ubicacion geografica. El valor no esta solo en contar unidades, sino en entender como se distribuyen y que zonas quedan mas expuestas por distancia o baja densidad.",
          image: "/assets/projects/analisis-datos-salud-denue/01_barras_tipo_establecimiento.png",
          caption: "Distribucion por tipo de establecimiento: la oferta se concentra principalmente en unidades de menor escala, mientras hospitales y clinicas tienen una presencia mucho mas limitada."
        },
        {
          title: "Balance Publico-Privado",
          content: "La clasificacion por sector permite distinguir si la cobertura depende mas de capacidad publica o de oferta privada. Este corte es importante porque dos colonias con el mismo numero de establecimientos pueden tener niveles de acceso muy distintos si la mayoria de puntos responde a servicios privados, consultorios pequenos o infraestructura publica.",
          image: "/assets/projects/analisis-datos-salud-denue/02_barras_sector.png",
          caption: "Comparacion de establecimientos por sector, util para medir el peso relativo de la oferta publica frente a la privada."
        },
        {
          title: "Capacidad Operativa",
          content: "El rango de personal ocupado funciona como proxy de escala operativa. Una red con muchos puntos pequenos no equivale a una red robusta: puede resolver atencion basica, pero no necesariamente cubrir urgencias, hospitalizacion o demanda simultanea. Por eso se cruzo el tamano del personal con el tipo de establecimiento.",
          image: "/assets/projects/analisis-datos-salud-denue/03_barras_personal_ocupado.png",
          caption: "Distribucion por personal ocupado: ayuda a diferenciar presencia territorial de capacidad instalada real."
        },
        {
          title: "Personal por Tipo de Unidad",
          content: "El cruce entre tipo de establecimiento y personal ocupado permite ver donde se concentra la capacidad. Los consultorios dominan la red, pero su tamano operativo suele ser reducido; hospitales y clinicas aparecen como nodos menos frecuentes, aunque con mayor potencial de atencion compleja.",
          image: "/assets/projects/analisis-datos-salud-denue/04_personal_ocupado_por_tipo.png",
          caption: "Cruce entre tipo de establecimiento y rango de personal ocupado para identificar que categorias sostienen mayor capacidad."
        },
        {
          title: "Concentracion por Codigo Postal",
          content: "El analisis por codigo postal revela nucleos de mayor presencia y zonas donde la oferta queda mas dispersa. Este enfoque es practico para priorizar revision territorial porque conecta la ubicacion de establecimientos con unidades administrativas reconocibles.",
          image: "/assets/projects/analisis-datos-salud-denue/05_top10_codigos_postales.png",
          caption: "Top 10 codigos postales con mayor numero de establecimientos de salud general."
        },
        {
          title: "Mapa de Distribucion por Tipo",
          content: "La visualizacion espacial muestra que la cobertura no se comporta de forma uniforme. Hay corredores con alta densidad de servicios y bordes territoriales con menor presencia. Esta diferencia importa porque el conteo agregado puede ocultar vacios locales relevantes.",
          image: "/assets/projects/analisis-datos-salud-denue/06_mapa_puntos_por_tipo.png",
          caption: "Mapa de puntos por tipo de establecimiento; evidencia concentraciones y dispersion territorial de la red de salud."
        },
        {
          title: "Lectura Sectorial del Territorio",
          content: "Separar el mapa por sector publico y privado permite detectar donde la cobertura depende de mercado y donde existe presencia institucional. Esta lectura evita confundir disponibilidad economica con cobertura universal.",
          image: "/assets/projects/analisis-datos-salud-denue/07_mapa_publico_privado.png",
          caption: "Distribucion publico-privada de establecimientos de salud en el territorio analizado.",
          interactiveUrl: "/assets/projects/analisis-datos-salud-denue/mapa_interactivo_tipos.html",
          interactiveLabel: "Abrir mapa interactivo por tipo"
        },
        {
          title: "Tamano Operativo en el Espacio",
          content: "Al incorporar personal ocupado al mapa, la visualizacion cambia de una fotografia de presencia a una aproximacion de capacidad. Las zonas con puntos pequenos pueden verse cubiertas en apariencia, pero seguir dependiendo de servicios de baja escala.",
          image: "/assets/projects/analisis-datos-salud-denue/08_mapa_tamano_operativo.png",
          caption: "Mapa de ubicacion y tamano operativo: cada punto relaciona posicion geografica con rango de personal."
        },
        {
          title: "Aislamiento Espacial",
          content: "Se calculo la distancia al vecino mas cercano para identificar establecimientos con mayor aislamiento relativo. El percentil alto de distancia funciona como alerta: si un punto esta muy lejos de otros servicios similares, su entorno puede tener mayor vulnerabilidad ante saturacion o fallas de acceso.",
          image: "/assets/projects/analisis-datos-salud-denue/09_hist_distancia_vecino_mas_cercano.png",
          caption: "Histograma de distancia al vecino mas cercano; base para separar puntos integrados de puntos aislados."
        },
        {
          title: "Establecimientos Aislados",
          content: "El analisis marco 57 establecimientos aislados. No todos representan un problema por si mismos, pero si senalan zonas donde la red es menos redundante. En terminos de planeacion, estos puntos ayudan a priorizar validacion en campo y revision de demanda local.",
          image: "/assets/projects/analisis-datos-salud-denue/10_mapa_establecimientos_aislados.png",
          caption: "Mapa de establecimientos con mayor aislamiento espacial dentro del territorio.",
          interactiveUrl: "/assets/projects/analisis-datos-salud-denue/mapa_aislados_hospitales.html",
          interactiveLabel: "Abrir mapa interactivo de aislados"
        },
        {
          title: "Evolucion de Cobertura con Vietoris-Rips",
          content: "Para estudiar conectividad territorial se modelaron complejos Vietoris-Rips a distintos radios. Conforme aumenta el radio, los establecimientos pasan de ser puntos separados a una red conectada. La velocidad con la que se conectan revela si la cobertura esta compacta o fragmentada.",
          image: "/assets/projects/analisis-datos-salud-denue/11_vr_evolucion_4radios.png",
          caption: "Evolucion de la conectividad en cuatro radios, mostrando como aparecen enlaces y componentes territoriales."
        },
        {
          title: "Complejo Alpha",
          content: "El complejo alpha aporta una lectura geometrica mas controlada de vecindad, evitando conectar puntos solo por radio cuando la estructura espacial no lo justifica. Esta grafica ayuda a observar el esqueleto real de la red y sus zonas de separacion.",
          image: "/assets/projects/analisis-datos-salud-denue/12_complejo_alpha_iztapalapa.png",
          caption: "Complejo alpha aplicado a establecimientos de salud para observar conectividad espacial efectiva."
        },
        {
          title: "Persistencia Homologica",
          content: "Los barcodes H0 y H1 resumen cuando nacen y mueren componentes conectadas y huecos de cobertura. H0 permite entender fragmentacion; H1 permite detectar ciclos o vacios persistentes en la red. Este paso traduce el mapa en evidencia topologica.",
          image: "/assets/projects/analisis-datos-salud-denue/13_barcodes_h0_h1.png",
          caption: "Barcodes de H0 y H1: componentes y huecos de cobertura a traves de distintos radios."
        },
        {
          title: "Diagrama de Persistencia",
          content: "El diagrama de persistencia separa ruido topologico de patrones duraderos. Los puntos mas alejados de la diagonal indican estructuras que permanecen durante mas escalas y, por lo tanto, merecen mayor atencion analitica.",
          image: "/assets/projects/analisis-datos-salud-denue/14_diagrama_persistencia_mejorado.png",
          caption: "Diagrama de persistencia mejorado para identificar estructuras territoriales robustas."
        },
        {
          title: "Comparacion Publico vs Privado",
          content: "El modelo topologico tambien se comparo por sector. Esta comparacion ayuda a ver si la red publica y la privada tienen patrones espaciales similares o si una de ellas presenta mayor fragmentacion, concentracion o dependencia de ciertos corredores.",
          image: "/assets/projects/analisis-datos-salud-denue/15_comparacion_sector_publico_privado.png",
          caption: "Comparacion de patrones topologicos entre establecimientos publicos y privados."
        },
        {
          title: "Componentes Conectadas",
          content: "La evolucion de componentes H0 muestra que tan rapido se integra la red al aumentar el radio de cobertura. Si las componentes tardan en fusionarse, hay evidencia de separacion territorial y posibles barreras de acceso.",
          image: "/assets/projects/analisis-datos-salud-denue/16_evolucion_componentes_h0.png",
          caption: "Evolucion de componentes conectadas H0 conforme crece el radio de enlace."
        },
        {
          title: "Vacios de Cobertura",
          content: "Los huecos H1 persistentes se interpretan como zonas rodeadas por servicios, pero sin cobertura central suficiente. No sustituyen un diagnostico urbano, pero son una senal clara para revisar areas con oportunidad de intervencion.",
          image: "/assets/projects/analisis-datos-salud-denue/17_vacios_cobertura_h1.png",
          caption: "Visualizacion de vacios de cobertura detectados mediante H1."
        },
        {
          title: "Densidad y Aislamiento",
          content: "Combinar densidad con aislamiento permite priorizar mejor. Un punto aislado en una zona de baja densidad es mas critico que un punto aislado cerca de multiples alternativas. Esta grafica sintetiza ambos criterios para lectura operativa.",
          image: "/assets/projects/analisis-datos-salud-denue/18_densidad_aislamiento_hospitales.png",
          caption: "Relacion entre densidad territorial y aislamiento de establecimientos."
        },
        {
          title: "Panel de Sintesis TDA",
          content: "El panel resume las senales principales del analisis topologico: conectividad, vacios, dispersion y patrones de cobertura. Sirve como puente entre el analisis matematico y una conclusion ejecutiva para planeacion territorial.",
          image: "/assets/projects/analisis-datos-salud-denue/19_panel_resumen_tda.png",
          caption: "Panel resumen de hallazgos TDA para comunicar el diagnostico territorial."
        },
        {
          title: "Propuesta de Ubicaciones",
          content: "A partir de los vacios, densidad y aislamiento se generaron ubicaciones candidatas. La propuesta no pretende decidir automaticamente donde construir, sino acotar zonas prioritarias para evaluacion de factibilidad, demanda, transporte y presupuesto.",
          image: "/assets/projects/analisis-datos-salud-denue/20_propuesta_ubicaciones.png",
          caption: "Mapa con ubicaciones propuestas para mejorar cobertura territorial."
        },
        {
          title: "Simulacion Antes y Despues",
          content: "La simulacion compara la red actual con un escenario de intervencion. Este tipo de contraste permite comunicar impacto potencial: no solo donde faltan puntos, sino como cambiaria la conectividad si se agregaran nuevos nodos.",
          image: "/assets/projects/analisis-datos-salud-denue/21_simulacion_antes_despues.png",
          caption: "Comparacion de cobertura antes y despues de incorporar ubicaciones candidatas."
        },
        {
          title: "Validacion Territorial",
          content: "La validacion territorial contrasta las propuestas contra condiciones espaciales y patrones de cobertura. Este paso reduce el riesgo de elegir ubicaciones que lucen buenas en el modelo pero son debiles en la lectura geografica.",
          image: "/assets/projects/analisis-datos-salud-denue/22_validacion_territorial.png",
          caption: "Validacion de zonas candidatas frente al contexto territorial.",
          interactiveUrl: "/assets/projects/analisis-datos-salud-denue/mapa_cobertura_500m.html",
          interactiveLabel: "Abrir mapa de cobertura 500 m"
        },
        {
          title: "Sensibilidad del Radio de Cobertura",
          content: "La sensibilidad de radio muestra como cambian las conclusiones si se asume una distancia de cobertura distinta. Este analisis es clave porque una recomendacion robusta debe mantenerse razonable bajo varios supuestos de movilidad.",
          image: "/assets/projects/analisis-datos-salud-denue/23_sensibilidad_rhab.png",
          caption: "Sensibilidad del analisis ante cambios en el radio de cobertura asumido."
        },
        {
          title: "Resultado Final",
          content: "El proyecto convierte DENUE en una herramienta de inteligencia territorial: identifica estructura de oferta, dependencia sectorial, puntos aislados, vacios topologicos y ubicaciones candidatas. El resultado es un caso completo de analisis de datos abiertos aplicado a salud, con visualizaciones descriptivas, mapas interactivos y una capa matematica de persistencia homologica para respaldar decisiones."
        }
      ]
    }
  }
];
