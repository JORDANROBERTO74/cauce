import type { Dictionary } from "./en"

export const es: Dictionary = {
  meta: {
    title: "Cauce — Encuentra la señal antes que el mercado",
    description:
      "Cauce es un espacio de trabajo de outbound para equipos B2B: vigila tus cuentas, explica qué cambió y redacta el primer mensaje. Demo bilingüe construida con Next.js.",
  },
  nav: {
    skip: "Saltar al contenido",
    product: "Producto",
    how: "Cómo funciona",
    pricing: "Precios",
    faq: "Preguntas",
    cta: "Reservar demo",
    language: "Idioma",
  },
  hero: {
    eyebrow: "Espacio de outbound",
    title: "Encuentra la señal",
    titleAccent: "antes que el mercado.",
    lead: "Cauce vigila las cuentas que te importan, explica qué cambió y redacta el primer mensaje. Tu equipo lo revisa, lo envía y cierra la llamada.",
    primary: "Reservar demo",
    secondary: "Ver cómo funciona",
    note: "Demo. Datos de ejemplo, sin registro y sin backend.",
    panel: {
      title: "Señales",
      meta: "Hoy · 14 nuevas",
      columns: { account: "Cuenta", signal: "Señal", fit: "Encaje", status: "Estado" },
      rows: [
        {
          account: "Northline Logistics",
          signal: "Abrió 4 vacantes de ventas",
          fit: "Alta",
          status: "Borrador listo",
        },
        {
          account: "Meridian Health",
          signal: "Cerró una ronda Serie A",
          fit: "Alta",
          status: "Borrador listo",
        },
        {
          account: "Oberon Retail",
          signal: "Migró a un CRM nuevo",
          fit: "Media",
          status: "En revisión",
        },
        {
          account: "Kestrel Studios",
          signal: "Fichó un responsable de operaciones",
          fit: "Media",
          status: "En cola",
        },
      ],
      footer: "32 cuentas vigiladas · próximo lote en 6 h",
    },
    facts: ["Solo fuentes públicas", "Borradores que apruebas", "Límites de envío activos"],
  },
  features: {
    eyebrow: "Espacio de trabajo",
    title: "Un espacio de trabajo, no otra pestaña.",
    lead: "Señales, investigación, borradores y respuestas en un solo sitio, con la fuente al lado de cada frase.",
    items: [
      {
        icon: "signal",
        title: "Vigilancia de señales",
        body: "Contrataciones, financiación, lanzamientos, migraciones y cambios de dirección en la lista que ya tienes.",
      },
      {
        icon: "research",
        title: "Fichas de cuenta",
        body: "Cada ficha se arma con fuentes públicas y los enlaces adjuntos, para que cualquiera pueda comprobarla.",
      },
      {
        icon: "draft",
        title: "Borradores con tu voz",
        body: "Un primer mensaje escrito desde la ficha y tus últimos treinta correos aprobados, listo para editar.",
      },
      {
        icon: "triage",
        title: "Triaje de respuestas",
        body: "Las respuestas se ordenan en siguiente paso, más adelante y no, con el motivo en el registro.",
      },
      {
        icon: "sync",
        title: "Un CRM que no miente",
        body: "Propietarios, etapas y notas se sincronizan con las herramientas que tu equipo ya usa.",
      },
      {
        icon: "shield",
        title: "Límites primero",
        body: "Listas de exclusión, topes por dominio y un paso de aprobación antes de que salga nada.",
      },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    title: "De la señal al mensaje enviado, en cuatro pasos.",
    lead: "Sin otra bandeja que cuidar. Cada paso deja un registro que puedes leer.",
    items: [
      {
        tab: "1 · Conecta",
        phase: "Fase 01 — Configuración",
        title: "Trae la lista que ya tienes.",
        body: "Importa cuentas desde un CSV o tu CRM y elige las señales que importan a tu segmento. Cada regla queda visible y editable.",
        bullets: [
          "Importación por CSV y CRM",
          "Reglas de señal por segmento",
          "Prueba en seco antes del primer lote",
        ],
      },
      {
        tab: "2 · Vigila",
        phase: "Fase 02 — Detección",
        title: "Solo los cambios que merecen un mensaje.",
        body: "Cauce puntúa cada cambio según encaje y momento, y descarta el ruido antes de que llegue a la cola.",
        bullets: [
          "Puntuación de encaje y momento",
          "Filtro de duplicados y ruido",
          "Lotes diarios o por hora",
        ],
      },
      {
        tab: "3 · Redacta",
        phase: "Fase 03 — Redacción",
        title: "Una ficha y una primera línea, con tu voz.",
        body: "Investigación y borrador llegan juntos, con la fuente bajo cada afirmación y un tono aprendido de los correos que ya aprobaste.",
        bullets: [
          "Fuente bajo cada afirmación",
          "Tono a partir de correos aprobados",
          "Editar, regenerar o descartar",
        ],
      },
      {
        tab: "4 · Envía",
        phase: "Fase 04 — Revisión",
        title: "Aprueba, envía, da seguimiento.",
        body: "Límites de envío, aprobación y seguimientos viven en una sola cola. Las respuestas actualizan el embudo sin otra herramienta.",
        bullets: [
          "Una sola cola de aprobación",
          "Topes de envío por dominio",
          "Embudo actualizado al responder",
        ],
      },
    ],
  },
  integrations: {
    eyebrow: "Conexiones",
    title: "Se conecta a lo que ya usas.",
    lead: "Cauce no es otra bandeja. Escribe en las herramientas que tu equipo ya mira.",
    items: [
      { icon: "crm", name: "CRM", note: "Propietarios, etapas y notas siempre en sincronía." },
      { icon: "mail", name: "Email", note: "Envía desde tu dominio, no desde el nuestro." },
      { icon: "calendar", name: "Calendario", note: "Las reuniones caen en el día del comercial correcto." },
      { icon: "webhook", name: "Webhooks", note: "Publica señales nuevas donde quieras, en orden." },
      { icon: "csv", name: "CSV", note: "Importa cuentas y señales en minutos." },
      { icon: "api", name: "API", note: "Lee y escribe el espacio de trabajo por código." },
      { icon: "sso", name: "SSO", note: "Inicio de sesión único para equipos con plan compartido." },
      { icon: "warehouse", name: "Almacén de datos", note: "Guarda una copia de cada señal y cada borrador." },
    ],
  },
  metrics: {
    eyebrow: "El conjunto de ejemplo",
    title: "Cifras del espacio de trabajo de ejemplo, no de clientes.",
    note: "Datos de ejemplo. Esta versión no tiene backend, así que nada aquí está medido.",
    items: [
      { value: "3,2x", label: "más respuestas por comercial y semana" },
      { value: "68%", label: "del tiempo de investigación devuelto al equipo" },
      { value: "12 min", label: "mediana de señal a borrador revisado" },
      { value: "94%", label: "de borradores enviados tras una edición" },
    ],
  },
  pricing: {
    eyebrow: "Precios",
    title: "Empieza con un comercial. Amplía cuando lleguen las respuestas.",
    lead: "Un espacio de trabajo, tres planes. Todos incluyen los dos idiomas y el conjunto completo de señales.",
    note: "Precios en EUR, por espacio de trabajo y mes, IVA no incluido.",
    freeLabel: "Gratis",
    perMonth: "/ mes",
    cta: "Habla con nosotros",
    badge: "Más elegido",
    tiers: [
      {
        name: "Solo",
        price: 0,
        summary: "Para un comercial probando señales.",
        features: [
          "1 usuario",
          "50 cuentas vigiladas",
          "200 señales al mes",
          "Borradores de email",
          "Soporte de la comunidad",
        ],
        highlighted: false,
      },
      {
        name: "Team",
        price: 49,
        summary: "Para un equipo pequeño con un embudo compartido.",
        features: [
          "5 usuarios",
          "2.500 cuentas vigiladas",
          "Todos los tipos de señal",
          "Sincronización con el CRM",
          "Límites de envío y aprobaciones",
          "Soporte por email",
        ],
        highlighted: true,
      },
      {
        name: "Scale",
        price: 149,
        summary: "Para un equipo que trabaja el outbound como canal.",
        features: [
          "Usuarios ilimitados",
          "25.000 cuentas vigiladas",
          "API y webhooks",
          "SSO",
          "Onboarding dedicado",
          "Soporte prioritario",
        ],
        highlighted: false,
      },
    ],
  },
  faq: {
    eyebrow: "Preguntas",
    title: "Preguntas que la demo puede responder.",
    lead: "Respuestas cortas, sin llamada de ventas.",
    items: [
      {
        question: "¿Cauce es un producto real?",
        answer:
          "No. Es una demo bilingüe de front-end. No hay cuentas, ni cobros, ni backend: el espacio de trabajo que ves son datos de ejemplo.",
      },
      {
        question: "¿Qué cuenta como señal?",
        answer:
          "Un cambio verificable en una cuenta: un puesto nuevo, financiación, un lanzamiento, una migración técnica o un cambio de dirección. Cada señal llega con su fuente.",
      },
      {
        question: "¿Envía correos sin mí?",
        answer:
          "No. Cada borrador espera aprobación y los límites de envío se aplican por dominio. Esta demo no envía nada.",
      },
      {
        question: "¿De dónde salen los datos?",
        answer:
          "En un despliegue real, de fuentes públicas y de tu propio CRM. En esta versión, el conjunto de datos es contenido de ejemplo escrito a mano.",
      },
      {
        question: "¿Qué idiomas soporta?",
        answer:
          "Inglés y español. El sitio detecta el idioma del navegador y recuerda la elección que hagas.",
      },
      {
        question: "¿Cómo lo ejecuto en local?",
        answer:
          "Clona el repositorio, instala con pnpm y arranca el servidor de desarrollo. El README tiene los comandos exactos.",
      },
    ],
  },
  cta: {
    title: "Pon la señal antes del discurso.",
    body: "Reserva una demo y recorremos los mismos cuatro pasos con tu lista.",
    primary: "Reservar demo",
    secondary: "Ver cómo funciona",
  },
  footer: {
    tagline: "Espacio de outbound para equipos B2B. Demo bilingüe construida con Next.js.",
    columns: [
      {
        title: "Producto",
        links: [
          { label: "Funciones", href: "#features" },
          { label: "Cómo funciona", href: "#how-it-works" },
          { label: "Precios", href: "#pricing" },
          { label: "Preguntas", href: "#faq" },
        ],
      },
    ],
    legal: "© 2026 Cauce Labs. Todos los derechos reservados.",
    demoNote: "Proyecto de demostración. Datos de ejemplo, sin cuentas y sin seguimiento más allá de Vercel Analytics.",
  },
  notFound: {
    title: "Esta página tomó otro cauce.",
    body: "El enlace que seguiste no existe en esta versión.",
    cta: "Volver al inicio",
  },
}
