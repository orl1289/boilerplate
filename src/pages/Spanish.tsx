import "../App.css";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";

function Home() {
  return (
    <>
      {/* <!--------------------- Intro --------------------------------------------------------------> */}
      <header>
        <NavBar />
      </header>

      <section className="container m-auto laptop:px-10">
        <div className="text-center m-10 py-3">
          <h1 className="font-bold box-decoration-clone text-3xl tablet:text-4xl laptop:text-5xl">
            <span className="leading-normal">
              <p>Orlando Mata Monge</p>
            </span>
          </h1>
          <h1 className="box-decoration-clone text-2xl tablet:text-3xl laptop:text-4xl">
            <p>Ingeniero Químico</p>
            <p>Máster en Energía y Sostenibilidad</p>
          </h1>
        </div>

        <div className="text-xl m-2 grid tablet:text-xl laptop:text-2xl tablet:grid-cols-3 py-5">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                clip-rule="evenodd"
              />
            </svg>
            Madrid, 28004
          </div>

          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2 5.6V18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V5.6l-.9.7-7.9 6a2 2 0 0 1-2.4 0l-8-6-.8-.7Z" />
              <path d="M20.7 4.1A2 2 0 0 0 20 4H4a2 2 0 0 0-.6.1l.7.6 7.9 6 7.9-6 .8-.6Z" />
            </svg>
            <a href="mailto:orl1289@gmail.com">orl1289@gmail.com</a>
          </div>
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z" />
            </svg>
            +34 692 536587
          </div>
        </div>

        {/* --------------------- Education --------------------------------------------------------------> */}

        <div className="text-center p-4 m-2">
          <div className="flex justify-center items-center p-4">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2c.6 0 1-.4 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Formación Académica
            </h1>
          </div>

          <h2 className="text-[1.3rem] p-4 font-semibold list-item list-inside tablet:text-2xl laptop:text-3xl">
            Universidad de Vigo
            <p className="italic"> Máster en Energía y Sostenibilidad</p>
          </h2>
          <h2 className="text-[1.3rem] p-4 font-semibold list-item list-inside tablet:text-2xl laptop:text-3xl">
            Universidad de Costa Rica
            <p className="italic"> Licenciatura en Ingeniería Química</p>
          </h2>
        </div>

        {/* <!--------------------- Experience --------------------------------------------------------------> */}
        <div className="text-center p-4 m-2">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.4l1.4.7a7.7 7.7 0 0 0 .7.3 21 21 0 0 0 16.4-.3l1.5-.7V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.4 7.9.6-.3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.4l.6.3a10 10 0 0 0 .7.3 23 23 0 0 0 18-.3h.1L21 13l.4.9ZM12 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Experiencia Profesional
            </h1>
          </div>
        </div>
        {/* <!-- Edit Experience  --> */}
        {/* <!-- #1 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            {" "}
            <p className="text-violet-950 text-4xl">
              Commercial Suppliers & Distribution Quality Assurance
            </p>
            <p>
              <i>Abbott Laboratories</i>
            </p>
            <p>
              <i> Agosto 2025 - Febrero 2026 - (Madrid, España)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Apoyé los procesos de control de calidad de proveedores
              comerciales para filiales en las regiones EMEA y LATAM, en
              consonancia con los sistemas de calidad y los procedimientos
              regulatorios de Abbott para productos IVD Molecular Diagnostics.
            </p>
            <p className="list-item list-inside p-2">
              Colaboré con los equipos comerciales y operativos para productos
              de diagnóstico in vitro (IVD), en lo que respecta a la
              trazabilidad, la logística de la cadena de frío, el almacenamiento
              con temperatura controlada y las especificaciones de etiquetado
              local.
            </p>
            <p className="list-item list-inside p-2">
              Coordiné auditorías para la evaluación de los sistemas de calidad
              de los proveedores, incluyendo la planificación, la definición del
              alcance y la documentación requerida.
            </p>
            <p className="list-item list-inside p-2">
              Asistí en la recopilación y el análisis de datos de registros de
              calidad trazables para la implementación de planes y chequeos de
              efectividad de CAPAs, con el fin de abordar las no conformidades.
            </p>
            <p className="list-item list-inside p-2">
              Participé en la planificación de proyectos de calidad para
              impulsar la mejora continua, de acuerdo con los procesos de
              calidad para elementos relacionados con los objetivos de calidad,
              la implementación de normativas, el control de registros y los
              KPI.
            </p>
            <p className="list-item list-inside p-2">
              Garantizé que los paquetes de control de cambios fueron
              correctamente iniciados y confirmé la completa y exhaustiva
              recopilación de información, documentos y formularios en
              SmartSolve eQMS.
            </p>
            <p className="list-item list-inside p-2">
              Colaboré con equipos multifuncionales (Global Services Support,
              Service Compliance, and Commercial) para garantizar el
              cumplimiento de los requisitos de servicio, la gestión de
              repuestos y los requisitos de calidad de los servicios de
              terceros.
            </p>
            <p className="list-item list-inside p-2">
              Realizé "gap assessments" para revisar el cumplimiento de todos
              los elementos de las normas y estándares internacionales que
              afectan a las buenas prácticas de distribución (BDP).
            </p>
            <p className="list-item list-inside p-2">
              Gestioné y elaboré informes periódicos sobre el rendimiento de los
              proveedores con métricas para su revisión, con el fin de iniciar
              las reevaluaciones o planes de acción necesarios de manera
              oportuna, utilizando los metadatos de la base de datos de
              proveedores (reportes de SBM, Excel y Power BI).
            </p>
            <p className="list-item list-inside p-2">
              Facilité la comunicación efectiva con los proveedores para
              recopilar autoevaluaciones de proveedores (SSA) y normas ISO para
              verificar el cumplimiento de las actividades de reevaluación.
            </p>
          </div>
        </div>
        {/* <!-- #1 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            {" "}
            <p className="text-violet-950 text-4xl">
              Global Quality Management Systems
            </p>
            <p>
              <i>Merck Healthcare</i>
            </p>
            <p>
              <i> Julio 2024 - Julio 2025 - (Madrid, España)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Ejercí como usuario experto para las funciones globales de
              Healthcare, permitiendo una gestión diligente durante el ciclo de
              vida de la documentación en el sistema electrónico de gestión de
              calidad.
            </p>
            <p className="list-item list-inside p-2">
              Desempeñé el rol de Aprobador de Calidad de los procedimientos
              globales del SGC, para garantizar que la documentación fuera
              completa y coherente, y que los usuarios y las aprobaciones
              cumplieran con los estándares, las reglas específicas y los
              principios ALCOA+ (incluidas las propiedades y los metadatos de
              calidad en el eQMS).
            </p>
            <p className="list-item list-inside p-2">
              Gestioné la creación de registros de datos mediante la iniciación
              de un flujo de trabajo, para permitir a las subsidiarias la
              evaluación y valoración oportuna de los procedimientos y
              estándares globales recientemente aprobados (KPI de documentación
              de calidad).
            </p>
            <p className="list-item list-inside p-2">
              Brindé apoyo a los propietarios de procesos globales en temas
              relacionados con la documentación, garantizando el cumplimiento de
              los estándares de calidad y la alineación con los procedimientos
              corporativos en equipos multifuncionales.
            </p>
            <p className="list-item list-inside p-2">
              Identifiqué activamente las necesidades de los usuarios, para
              comprender sus requisitos y traducirlos en acciones y flujos de
              trabajo específicos.
            </p>
            <p className="list-item list-inside p-2">
              Diseñé y construí un nuevo panel de control dentro del eQMS (Mango
              CARA) para mejorar la clasificación de los documentos globales con
              respecto a su fecha de revisión periódica (a tiempo, en curso,
              vencida), desde URS hasta la versión de producción de acuerdo con
              los estándares de desarrollo de software (GxP).
            </p>
            <p className="list-item list-inside p-2">
              Generé informes y métricas para evaluar el cumplimiento y la
              eficiencia de los procesos del eQMS, garantizando la gobernanza,
              integridad y calidad de datos adecuadas como estrategia general a
              largo plazo (informes de metadatos, creación de una base de datos
              de propietarios de procesos).
            </p>
            <p className="list-item list-inside p-2">
              Brindé capacitación y garantizé que los usuarios estén entrenados
              adecuadamente, fomentando una base de usuarios informados que
              puedan navegar eficazmente por el eQMS.
            </p>
            <p className="list-item list-inside p-2">
              Aseguré que los riesgos identificados se escalen de manera
              adecuada y oportuna para su solución inmediata.
            </p>
            <p className="list-item list-inside p-2">
              Promoví la participación de los empleados en las iniciativas de
              mejora de la calidad, mediante el desarrollo de políticas,
              procedimientos y métodos.
            </p>
            <p className="list-item list-inside p-2">
              Obtuve competencias y experiencia práctica en terminología
              farmacéutica y Buenas Prácticas de Fabricación (GMP), requisitos
              regulatorios aplicables como FDA 21 CFR Parte 820, ICH Q7, ICH Q9,
              ICH Q10 y procesos de gestión de calidad (desviaciones, CAPA,
              control de cambios).
            </p>
            <p className="list-item list-inside p-2">
              Gané amplia familiaridad con la biotecnología del ADN recombinante
              de somatropina y sus procesos de fabricación (ascendentes y
              descendentes), sus atributos de calidad críticos, medios de
              cultivo celular y tecnologías de un solo uso.
            </p>
          </div>
        </div>

        {/* <!-- #2 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            {" "}
            <p className="text-violet-950 text-4xl">Ingeniero Interno</p>
            <p>
              <i>Voltfer</i>
            </p>
            <p>
              <i> Abril 2023 - Mayo 2023 - (Vigo, España)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Participé en tareas relacionadas con el diseño de sistemas
              fotovoltaicos para autoconsumo doméstico e industrial, como parte
              de la práctica profesional.
            </p>
            <p className="list-item list-inside p-2">
              Brindé apoyo al área comercial recopilando información a través de
              una prospección de potenciales clientes en polígonos comerciales
              de la zonas de Pontevedra, y alrededores.
            </p>
            <p className="list-item list-inside p-2">
              Apliqué competencias en el cálculo de estimaciones de producción a
              partir de fuentes de datos meteorológicos, dibujo técnico,
              técnicas de diseño, normas y regulaciones dentro de la industria
              de energía renovable.
            </p>
          </div>
        </div>
        {/* <!-- #1 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">
              Team Manager, Data Management
            </p>{" "}
            en Amazon
            <p>
              <i>Amazon</i>
            </p>
            <p>
              <i>Agosto 2021 - Agosto 2022 - (San José, Costa Rica)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Establecí relaciones sólidas con equipos diversos en diferentes
              ubicaciones geográficas y zonas horarias, asegurando la alineación
              en iniciativas corporativas clave relacionadas con los principios
              de gobernanza de datos, la gestión del ciclo de vida de los datos
              y las buenas prácticas.
            </p>
            <p className="list-item list-inside p-2">
              Lideré una visión basada en los principios de la empresa y creamos
              un entorno de colaboración para las operaciones diarias de un
              equipo remoto (8-10 asociados) y más de 70 procesos de gestión de
              documentación y gestión de datos en el ámbito de los mercados EMEA
              y LATAM.
            </p>
            <p className="list-item list-inside p-2">
              Determiné indicadores (KPI's) de capacidad y productividad tales
              como los requisitos de FTE (equivalente a tiempo completo) y el
              tiempo de resolución (TTR), para pronosticar las necesidades de
              demanda, la disponibilidad de personal y establecer los objetivos
              del equipo y las estrategias para el negocio operativo.
            </p>
            <p className="list-item list-inside p-2">
              Brindé un enfoque proactivo, estructurado y orientado a soluciones
              para respaldar la implementación exitosa de nuevas directrices de
              procesos, la adopción de herramientas para el equipo y flujos de
              trabajo automatizados para aumentar la productividad del equipo de
              datos y minimizar los errores.
            </p>
            <p className="list-item list-inside p-2">
              Gestioné actividades relacionadas con la incorporación de nuevos
              procesos, la migración de datos y los proyectos de transformación
              de datos maestros, de acuerdo con el catálogo de servicios en
              cuanto a alcance, riesgos y prioridades.
            </p>
            <p className="list-item list-inside p-2">
              Recluté, formé y supervisé al personal en áreas como el
              conocimiento del producto, el servicio al cliente y las mejores
              prácticas de gestión de datos, para garantizar que contaran con el
              equipo, las habilidades y los conocimientos necesarios para
              desempeñar sus funciones de manera eficaz.
            </p>
            <p className="list-item list-inside p-2">
              Presenté informes de datos quincenales a la alta dirección para la
              revisión de métricas de desempeño del equipo y otros puntos clave.
            </p>
            <p className="list-item list-inside p-2">
              Preparé las evaluaciones de desempeño y las revisiones de talento
              del equipo anuales, con base en los hallazgos del análisis
              mensual, retroalimentación y oportunidades de mejora.
            </p>
            <p className="list-item list-inside p-2">
              Creé e implementé mecanismos para anticipar las necesidades de
              demanda y asegurar la disponibilidad de personal.
            </p>
            <p className="list-item list-inside p-2">
              Enseñé y ayudé a desarrollar el potencial de miembros del equipo,
              delegando asignaciones y proyectos acorde con sus habilidades e
              intereses.
            </p>
            <p className="list-item list-inside p-2">
              Desarrollé oportunidades efectivas de redes profesionales
              participando en foros/proyectos según correspondía, y asistí a
              reuniones regulares de miembros profesionales con la gerencia de
              nivel superior.
            </p>
          </div>
        </div>
        {/* <!-- #2 --> */}
        <div className="text-primary-600 text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">
              Process Lead, Data Management
            </p>
            <p>
              <i>Amazon</i>
            </p>
            <p>
              <i>Octubre 2020 - Julio 2021 - (San José, Costa Rica)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Promoción en reconocimiento al desempeño consistentemente sólido,
              liderazgo colaborativo y capacidad para gestionar con éxito
              grandes volúmenes de trabajo, equilibrar múltiples prioridades y
              ofrecer resultados excepcionales en un entorno dinámico.
            </p>
            <p className="list-item list-inside p-2">
              Actué como experto en la materia y punto de contacto entre otras
              partes interesadas operativas internas y el equipo de Data
              Management.
            </p>
            <p className="list-item list-inside p-2">
              Supervisé la revisión de defectos y el análisis de datos para
              identificar inconsistencias o problemas de calidad de los datos, y
              se movilizaron recursos para abordar estos desafíos de acuerdo con
              el modelado de datos, los procesos ETL/ELT, los principios de
              gobernanza de datos, las políticas y los procedimientos.
            </p>
            <p className="list-item list-inside p-2">
              Coordiné las propuestas de mejora continua de los procesos bajo
              sólidas políticas y procedimientos de gestión de datos.
            </p>
            <p className="list-item list-inside p-2">
              Garanticé la óptima utilización del personal a diario al asignar
              las tareas eficientemente con base en su disponibilidad y
              experiencia.
            </p>
            <p className="list-item list-inside p-2">
              Realicé el seguimiento del cumplimiento de las métricas de gestión
              de servicios de TI (incidentes, incumplimiento de los objetivos de
              SLA) y otros KPI mediante varias herramientas de visualización de
              paneles (Amazon Quicksight, herramienta de gestión de
              incidencias).
            </p>
            <p className="list-item list-inside p-2">
              Satisfice las necesidades de acceso a la información y generación
              de reportes mediante el diseño de consultas simples y complejas en
              la aplicación.
            </p>
            <p className="list-item list-inside p-2">
              Apliqué técnicas de análisis de causa raíz (RCA) para investigar
              discrepancias en los procesos, descubrir debilidades e implementar
              acciones correctivas.
            </p>
            <p className="list-item list-inside p-2">
              Establecí los medios efectivos para la actualización de los
              Procedimientos Operativos Estándar y prioricé la formación sobre
              los nuevos cambios.
            </p>
            <p className="list-item list-inside p-2">
              Configuré y evalué nuestras herramientas y soluciones de proceso
              antes de su implementación.
            </p>
            <p className="list-item list-inside p-2">
              Redacté respuestas a reclamos durante y después de cualquier
              proyecto de adquisición o migración.
            </p>
          </div>
        </div>
        {/* <!-- #3 --> */}

        <div className="text-primary-600 text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            {" "}
            <p className="text-violet-950 text-4xl">
              Sr. Associate, Data Management
            </p>
            <p>
              <i>Amazon</i>
            </p>
            <p>
              <i>Septiembre 2017 - Septiembre 2020 - (San José, Costa Rica)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Aseguré un servicio al cliente de alta calidad proporcionando una
              resolución oportuna, gestionando la comunicación e interacción a
              través del sistema de tickets.
            </p>
            <p className="list-item list-inside p-2">
              Gestioné y optimicé procesos transaccionales dentro de PS Oracle
              (RDBMS), garantizando la precisión de los datos, la integridad y
              el cumplimiento de los estándares organizativos y requisitos
              regulatorios.
            </p>
            <p className="list-item list-inside p-2">
              Colaboré de manera interfuncional con colegas para identificar
              requisitos, optimizar flujos de trabajo y procesos.
            </p>
            <p className="list-item list-inside p-2">
              Demostré un fuerte compromiso con el crecimiento personal y
              profesional buscando activamente oportunidades para aprender y
              asumir nuevas responsabilidades a medida que surgían.
            </p>
          </div>
        </div>
        {/* <!-- #4 --> */}
        <div className="text-primary-600 text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">
              Asistente de Laboratorio de Química
            </p>
            <p>
              <i>Universidad de Costa Rica</i>
            </p>
            <p>
              <i>Agosto 2015 - Marzo 2017 - (San José, Costa Rica)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Preparé y impartí conferencias a los estudiantes, proporcionando
              tanto conocimientos teóricos como demostraciones prácticas para
              mejorar la comprensión de acuerdo con el programa del curso.
            </p>
            <p className="list-item list-inside p-2">
              Supervisé las sesiones de laboratorio asegurando el cumplimiento
              de los protocolos de seguridad y el manejo adecuado de equipos y
              materiales.
            </p>
            <p className="list-item list-inside p-2">
              Brindé asistencia individual durante las sesiones de laboratorio,
              ofreciendo orientación y apoyo para mejorar su experiencia de
              aprendizaje.
            </p>
            <p className="list-item list-inside p-2">
              Colaboré con miembros del cuerpo docente para asignar pruebas y
              calificarlas, y medir el progreso general y la comprensión del
              estudiante.
            </p>
          </div>
        </div>
        {/* <!-- #5 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">
              Coordinación de Talleres sobre Potabilidad y Tratamiento del agua
            </p>
            <p>
              <i>Universidad de Costa Rica</i>
            </p>
            <p>
              <i>Agosto 2014 - Noviembre 2015 - (San José, Costa Rica)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Impartí capacitaciones sobre contaminación microbiana y el
              incumplimiento de la normativa nacional en acueducto y
              alcantarillado sanitarios; análisis químico del agua y sus
              resultados.
            </p>
            <p className="list-item list-inside p-2">
              Evalué la calidad del agua potable en términos de parámetros
              químicos como DQO, dureza y presencia de nitrato y fosfato de
              varias localidades, para asegurar el cumplimiento de las
              normativas.
            </p>
          </div>
        </div>

        {/* <!----------------------Languages---------------------------------------------------------------------- --> */}

        <div className="text-center p-4 m-2">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M4.4 7.7c2 .5 2.4 2.8 3.2 3.8 1 1.4 2 1.3 3.2 2.7 1.8 2.3 1.3 5.7 1.3 6.7M20 15h-1a4 4 0 0 0-4 4v1M8.6 4c0 .8.1 1.9 1.5 2.6 1.4.7 3 .3 3 2.3 0 .3 0 2 1.9 2 2 0 2-1.7 2-2 0-.6.5-.9 1.2-.9H20m1 4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Idiomas
            </h1>
          </div>
          <div className="text-xl text-center p-1 m-auto tablet:text-2xl tablet:mx-20">
            <h2 className="p-2 font-semibold list-item list-inside">
              {" "}
              Español
              <i className="italic"> (Nativo)</i>
            </h2>
            <h2 className="p-2 font-semibold list-item list-inside">
              {" "}
              Inglés
              <i className="italic"> (Profesional)</i>
            </h2>
            <h2 className="p-2 font-semibold list-item list-inside">
              {" "}
              Francés
              <i className="italic"> (Fluido)</i>
            </h2>
          </div>
        </div>

        {/* <!-------------------------------Certifications------------------------------------------------------------- --> */}

        <div className="text-center p-4 m-2">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2a3 3 0 0 0-2.1.9l-.9.9a1 1 0 0 1-.7.3H7a3 3 0 0 0-3 3v1.2c0 .3 0 .5-.2.7l-1 .9a3 3 0 0 0 0 4.2l1 .9c.2.2.3.4.3.7V17a3 3 0 0 0 3 3h1.2c.3 0 .5 0 .7.2l.9 1a3 3 0 0 0 4.2 0l.9-1c.2-.2.4-.3.7-.3H17a3 3 0 0 0 3-3v-1.2c0-.3 0-.5.2-.7l1-.9a3 3 0 0 0 0-4.2l-1-.9a1 1 0 0 1-.3-.7V7a3 3 0 0 0-3-3h-1.2a1 1 0 0 1-.7-.2l-.9-1A3 3 0 0 0 12 2Zm3.7 7.7a1 1 0 1 0-1.4-1.4L10 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l5-5Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Cursos y Certificaciones
            </h1>
          </div>
          <div className="text-xl text-center p-1 m-auto tablet:text-2xl tablet:mx-20">
            <h2 className="font-semibold list-item list-inside p-2">
              {" "}
              Measuring Sustainable Development
              <p className="italic"> SDG Academy (2024) - edX Certificado</p>
            </h2>
          </div>
          <div className="text-xl text-center p-1 m-auto tablet:text-2xl tablet:mx-20">
            <h2 className="font-semibold list-item list-inside p-2">
              {" "}
              AWS Cloud Quest: Cloud Practitioner
              <p className="italic">
                {" "}
                Amazon Web Services (2023) - Certificado{" "}
              </p>
            </h2>
          </div>
          <div className="text-xl text-center p-1 m-auto tablet:text-2xl tablet:mx-20">
            <h2 className="font-semibold list-item list-inside p-2">
              {" "}
              Alianza Francesa de San José
              <p className="italic"> DELF Niveau B1 (2012)</p>
            </h2>
          </div>
        </div>

        {/* <!-------------------------------Congress------------------------------------------------------------- --> */}
        <div className="text-center p-4 m-2">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.5 3A3.5 3.5 0 0 0 14 7L8.1 9.8A3.5 3.5 0 0 0 2 12a3.5 3.5 0 0 0 6.1 2.3l6 2.7-.1.5a3.5 3.5 0 1 0 1-2.3l-6-2.7a3.5 3.5 0 0 0 0-1L15 9a3.5 3.5 0 0 0 6-2.4c0-2-1.6-3.5-3.5-3.5Z" />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Congresos
            </h1>
          </div>
          <div className="text-xl text-center p-1 m-auto tablet:text-2xl tablet:mx-20">
            <h2 className="font-semibold list-item list-inside p-2">
              XXIV Congreso Latinoamericano de Estudiantes de Ingeniería Química
              y Carreras Afines
              <p className="italic">
                {" "}
                Universidad Tecnológica Nacional (Buenos Aires, Argentina) -
                2018
              </p>
            </h2>
          </div>
        </div>

        {/* <!--------------------- Skills --------------------------------------------------------------> */}

        <div className="text-center p-4 m-2">
          <div className="flex justify-center items-center p-1">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-1 9a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm2-5c.6 0 1 .4 1 1v6a1 1 0 1 1-2 0v-6c0-.6.4-1 1-1Zm4 4a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Habilidades
            </h1>
          </div>

          <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
            <div>Resolución de problemas</div>
            <div>Pensador analítico</div>
            <div>Resolución colaborativa</div>
            <div>Trabajo en equipo</div>
            <div>Enfocado al cliente</div>
            <div>Automotivado</div>
            <div>Planificador y conceptualizador</div>
            <div>Autonomo y proactivo</div>
            <div>Comunicación oral y escrita efectiva</div>
            <div>Atento a los detalles</div>
            <div>Escucha activa</div>
            <div>Ajustado al 'deadline'</div>
            <div>Adaptable</div>
            <div>Orientado al proceso</div>
            <div>Emprendedor</div>
            <div>Orientado al aprendizaje</div>
            <div>Redacción de memorias técnicas</div>
            <div>Habituado a trabajar en un entorno multicultural</div>
            <div>Extracción de datos y creación de reportes</div>
            <div>Herramientas de visualización de datos</div>
          </div>
        </div>

        {/* <!---------------------Knowledge --------------------------------------------------------------> */}

        <div className="text-center p-4 m-2">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11 21V2.4a3.5 3.5 0 0 0-4.8 1.8A3.5 3.5 0 0 0 4 8l-.7 1.1-.1.4-.1.3a3.5 3.5 0 0 0 0 1.5A3.9 3.9 0 0 0 2 14v.9l.2.6a3.8 3.8 0 0 0 1 1.4 4 4 0 0 0 .6.5v.1A3.5 3.5 0 0 0 7 21a3.4 3.4 0 0 0 4.2.5 1 1 0 0 1-.2-.5Zm11-7.7v-.1a4 4 0 0 0-1-2 3.4 3.4 0 0 0-.2-1.7V9c-.3-.4-.5-.8-.8-1a3.4 3.4 0 0 0-.6-2.6 4 4 0 0 0-1.6-1.3A3.5 3.5 0 0 0 13 2.4V21c0 .2 0 .4-.2.5A3.4 3.4 0 0 0 17 21a3.5 3.5 0 0 0 3-3.5 5.4 5.4 0 0 0 .7-.5 4.2 4.2 0 0 0 .7-.9l.3-.5.2-.7v-.2a4 4 0 0 0 0-1.4Z" />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Conocimientos
            </h1>
          </div>
          <h3 className="font-semibold p-2 text-2xl tablet:text-2xl laptop:text-3xl">
            {" "}
            Software
          </h3>
          <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
            <div>Microsoft Word</div>
            <div>Microsoft Excel</div>
            <div>Microsoft Office Power Point</div>
            <div>Autocad (Intermedio)</div>
            <div>Minitab (Intermedio)</div>
            <div>PowerBi (Intermedio)</div>
            <div>Mango Cara Generis</div>
            <div>Palantir Foundry</div>
            <div>Matlab</div>
            <div>Oracle People Soft</div>
            <div>Salesforce CRM</div>
            <div>OnBase ECM</div>
            <div>Alteryx</div>
            <div>Unisim</div>
            <div>Chemcad</div>
            <div>Dialux</div>
            <div>PVSol</div>
            <div>PVGis</div>
            <div>CEX</div>
            <div>HULC</div>
            <div>Cypetherm</div>
            <div>Servicios en la nube</div>
            <div>Amazon Chime</div>
            <div>AWS Cloud Practitioner</div>
            <div>Amazon QuickSight</div>
          </div>
          <h3 className="font-semibold p-2 text-2xl tablet:text-2xl laptop:text-3xl">
            {" "}
            Lenguajes de programación
          </h3>
          <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
            <div>SQL (PostgreSQL)</div>
            <div>Python</div>
            <div>Python Libraries: Pandas,Numpy, Matplotlib</div>
          </div>
          <h3 className="font-semibold p-2 text-2xl tablet:text-2xl laptop:text-3xl">
            Web development
          </h3>
          <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
            <div>CSS</div>
            <div>HTML</div>
            <div>JavaScript</div>
            <div>Libraries: React, Svelte</div>
          </div>
          <h3 className="font-semibold p-2 text-2xl tablet:text-2xl laptop:text-3xl">
            {" "}
            Marco Legislativo
          </h3>
          <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
            <div>ISO 9001:2015</div>
            <div>ISO 13485:2016</div>
            <div>EUDRALEX</div>
            <div>Documento Básico para el Ahorro de Energía</div>
            <div>Código Técnico de la Edificación</div>
            <div>
              El Plan Nacional Integrado de Energía y Clima 2021-2030 (PNIEC)
            </div>
          </div>
        </div>
        {/* <!---------------------Professional interest --------------------------------------------------------------> */}

        <div className="text-center p-4 m-2">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M7 4a7 7 0 0 1 12 5c0 2.4-1.2 3.9-2.2 5v.1c-1 1.3-1.8 2.2-1.8 3.9 0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1c0-1.6-.8-2.6-1.8-3.9C6.2 12.8 5 11.4 5 9a7 7 0 0 1 2-5Zm2 17c0-.6.4-1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.6-13.4A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0c0-.5.2-1 .6-1.4Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Áreas de interés profesional
            </h1>
          </div>
          <div>
            <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
              <div className="list-item list-inside p-2">
                Optimización de Datos: Dedicado a refinar procesos de datos para
                mejorar la eficiencia y la toma de decisiones.
              </div>
              <div className="list-item list-inside p-2">
                Prácticas Sostenibles: Comprometido con impulsar iniciativas de
                sostenibilidad para reducir el impacto ambiental.
              </div>
              <div className="list-item list-inside p-2">
                Liderazgo Colaborativo: Hábil en liderar equipos diversos para
                lograr objetivos colectivos.
              </div>
              <div className="list-item list-inside p-2">
                Mejora Continua: Apasionado por optimizar procesos para
                maximizar la productividad.
              </div>
              <div className="list-item list-inside p-2">
                Servicio al Cliente: Comprometido con brindar un servicio
                superior a través de soluciones personalizadas.
              </div>
              <div className="list-item list-inside p-2">
                Gestión Efectiva de Proyectos: Competente en supervisar
                proyectos desde su inicio hasta su finalización.
              </div>
              <div className="list-item list-inside p-2">
                Innovación Tecnológica: Entusiasta en integrar la tecnología de
                y mejorar y oprimiazar operaciones.
              </div>
              <div className="list-item list-inside p-2">
                Cumplimiento Normativo: Diligente en asegurar el cumplimiento de
                regulaciones y estándares de la industria.
              </div>
              <div className="list-item list-inside p-2">
                Responsabilidad Social Corporativa (RSC): Comprometido con
                apoyar iniciativas de RSC mediante prácticas efectivas de
                gestión de datos, contribuyendo a los objetivos de
                sostenibilidad corporativa y de impacto social.
              </div>
              <div className="list-item list-inside p-2">
                Gestión Sostenible de la Cadena de Suministro: Interesado en
                aplicar principios de gestión de datos para optimizar procesos
                de la cadena de suministro y mejorar la sostenibilidad en toda
                la cadena de valor.
              </div>
              <div className="list-item list-inside p-2">
                Energías Renovables: Interesado en aprovechar técnicas de diseño
                para optimizar sistemas de energía renovable y promover
                soluciones energéticas sostenibles.
              </div>
              <div className="list-item list-inside p-2">
                Reducción de la Huella de Carbono: Comprometido en utilizar
                enfoques basados en soluciones para rastrear y reducir las
                emisiones de carbono, promoviendo la responsabilidad ambiental y
                la sostenibilidad.
              </div>
            </div>
          </div>
        </div>

        {/* <!---------------------Insert animation --------------------------------------------------------------> */}
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
