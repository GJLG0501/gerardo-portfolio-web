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
  }
];