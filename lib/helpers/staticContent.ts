import {
  Users,
  Image,
  ShoppingCart,
  BarChart,
  Target,
  Mail,
  Globe,
  Settings,
  Smartphone,
} from "lucide-react";

import { Service } from "@/lib/Types/interfaces";
// content for Services/page.tsx and its components

export const services: Service[] = [
  {
    id: "brand-strategy",
    title: "Estrategia de Marca e Identidad Visual",
    shortDescription:
      "Creamos marcas memorables y identidades visuales que conectan con tu audiencia.",
    icon: Image,
    color: "bg-pink-100 text-pink-600",
    fullDescription:
      "Desarrollamos estrategias de marca sólidas basadas en investigación de mercado y análisis de la competencia. Creamos identidades visuales completas, incluyendo logotipos, paletas de colores, tipografías y materiales de marca que reflejan los valores y la personalidad de tu empresa.",
    benefits: [
      "Diferenciación clara de la competencia",
      "Conexión emocional con tu audiencia ideal",
      "Consistencia en todos los puntos de contacto",
      "Percepción de marca profesional y confiable",
    ],
    process: [
      "Auditoría de marca y análisis competitivo",
      "Desarrollo de estrategia y posicionamiento",
      "Creación de identidad visual y elementos de marca",
      "Implementación y guía de uso de marca",
    ],
    image: "/stockPhotos/digitalMarketing.png",
  },
  {
    id: "social-media",
    title: "Marketing en Redes Sociales y Creación de Contenido",
    shortDescription:
      "Potenciamos tu presencia en redes sociales con contenido estratégico que genera resultados.",
    icon: Users,
    color: "bg-purple-100 text-purple-600",
    fullDescription:
      "Diseñamos y ejecutamos estrategias de redes sociales personalizadas para aumentar tu visibilidad, engagement y conversiones. Creamos contenido relevante y atractivo adaptado a cada plataforma y a los intereses de tu audiencia.",
    benefits: [
      "Aumento de seguidores y engagement",
      "Mayor visibilidad de marca y reconocimiento",
      "Generación de leads cualificados",
      "Construcción de comunidad fiel a tu marca",
    ],
    process: [
      "Auditoría de redes sociales actuales",
      "Desarrollo de estrategia de contenido",
      "Creación y publicación de contenidos",
      "Análisis y optimización continua",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    id: "ecommerce",
    title: "E-commerce y Configuración de E-commerce",
    shortDescription:
      "Desarrollamos tiendas online optimizadas para maximizar ventas y mejorar la experiencia de compra.",
    icon: ShoppingCart,
    color: "bg-blue-100 text-blue-600",
    fullDescription:
      "Diseñamos y desarrollamos tiendas online personalizadas con enfoque en la experiencia de usuario y la optimización para conversiones. Implementamos las mejores prácticas en comercio electrónico para garantizar una experiencia de compra fluida y segura.",
    benefits: [
      "Plataforma de e-commerce optimizada para ventas",
      "Proceso de compra simplificado y efectivo",
      "Integración con sistemas de pago y logística",
      "Análisis y mejora continua basada en datos",
    ],
    process: [
      "Análisis de necesidades y objetivos de negocio",
      "Diseño y desarrollo de tienda online",
      "Configuración de pasarelas de pago y envíos",
      "Optimización para conversión y seguimiento",
    ],
    image: "/stockPhotos/ecommerce.jpg",
  },
  {
    id: "paid-ads",
    title: "Campañas de Publicidad Pagada",
    shortDescription:
      "Diseñamos campañas publicitarias de alto rendimiento en Google, Meta y otras plataformas.",
    icon: BarChart,
    color: "bg-teal-100 text-teal-600",
    fullDescription:
      "Creamos y gestionamos campañas publicitarias en Google Ads, Facebook, Instagram, LinkedIn y otras plataformas relevantes para tu negocio. Optimizamos continuamente para maximizar el retorno de inversión y alcanzar tus objetivos de marketing.",
    benefits: [
      "Alcance inmediato a audiencias cualificadas",
      "Optimización del presupuesto publicitario",
      "Aumento de tráfico, leads y conversiones",
      "Análisis detallado y reportes de resultados",
    ],
    process: [
      "Definición de objetivos y audiencias",
      "Creación de estrategia publicitaria",
      "Diseño de anuncios y configuración de campañas",
      "Monitorización, optimización y reportes",
    ],
    image: "/stockPhotos/ads.png",
  },
  {
    id: "lead-gen",
    title: "Generación y Gestión de Leads",
    shortDescription:
      "Implementamos estrategias efectivas para captar leads cualificados y convertirlos en clientes.",
    icon: Target,
    color: "bg-green-100 text-green-600",
    fullDescription:
      "Diseñamos estrategias integrales de generación de leads que combinan múltiples canales para captar potenciales clientes interesados en tus productos o servicios. Implementamos sistemas de nurturing y seguimiento para guiarlos por el embudo de conversión.",
    benefits: [
      "Aumento constante de leads cualificados",
      "Mejora en las tasas de conversión",
      "Reducción del coste por adquisición de cliente",
      "Sistema de seguimiento eficiente",
    ],
    process: [
      "Definición de buyer personas y customer journey",
      "Creación de contenidos y ofertas de valor",
      "Implementación de embudos de conversión",
      "Automatización de seguimiento y nurturing",
    ],
    image: "/stockPhotos/leadGeneration.png",
  },
  {
    id: "direct-marketing",
    title: "Direct-Marketing y Automatización",
    shortDescription:
      "Diseñamos estrategias de email marketing y automatizaciones que generan resultados.",
    icon: Mail,
    color: "bg-amber-100 text-amber-600",
    fullDescription:
      "Desarrollamos campañas de email marketing estratégicas y secuencias automatizadas que nutren tus leads y fomentan la lealtad de tus clientes. Utilizamos herramientas avanzadas de segmentación y personalización para maximizar la efectividad.",
    benefits: [
      "Comunicación directa y personalizada",
      "Nutrición de leads automatizada",
      "Aumento de las tasas de apertura y clics",
      "Incremento en ventas recurrentes",
    ],
    process: [
      "Estrategia de email marketing",
      "Diseño de plantillas y secuencias",
      "Implementación de automatizaciones",
      "Análisis y optimización continua",
    ],
    image: "/stockPhotos/emailMarketing.png",
  },
  {
    id: "web-development",
    title: "Desarrollo Web y Optimización SEO",
    shortDescription:
      "Creamos sitios web optimizados para conversión y posicionamiento en buscadores.",
    icon: Globe,
    color: "bg-indigo-100 text-indigo-600",
    fullDescription:
      "Diseñamos y desarrollamos sitios web a medida, centrados en la experiencia de usuario y optimizados para SEO. Implementamos las mejores prácticas para mejorar la visibilidad en buscadores y aumentar el tráfico orgánico.",
    benefits: [
      "Sitio web responsive y optimizado para conversión",
      "Mejora del posicionamiento en buscadores",
      "Aumento del tráfico orgánico cualificado",
      "Experiencia de usuario excepcional",
    ],
    process: [
      "Análisis de requisitos y planificación",
      "Diseño UX/UI centrado en conversión",
      "Desarrollo y optimización técnica SEO",
      "Lanzamiento y monitorización",
    ],
    image: "/stockPhotos/webDev.png",
  },
  {
    id: "business-automation",
    title: "Automatización de Negocios e Implementación de CRM",
    shortDescription:
      "Optimizamos tus procesos de negocio con soluciones de automatización y CRM personalizadas.",
    icon: Settings,
    color: "bg-rose-100 text-rose-600",
    fullDescription:
      "Implementamos sistemas CRM y automatizaciones que optimizan los procesos internos de tu empresa, mejorando la eficiencia y reduciendo costes. Integramos herramientas y desarrollamos flujos de trabajo personalizados según tus necesidades.",
    benefits: [
      "Reducción de tareas manuales y repetitivas",
      "Mejora en la gestión de clientes y leads",
      "Procesos de venta más eficientes",
      "Toma de decisiones basada en datos",
    ],
    process: [
      "Análisis de procesos actuales",
      "Selección e implementación de herramientas",
      "Configuración de automatizaciones e integraciones",
      "Capacitación y soporte continuo",
    ],
    image: "/stockPhotos/automation.png",
  },
  {
    id: "mobile-strategy",
    title: "Mobile-Dev y Diseño Mobile",
    shortDescription:
      "Desarrollamos estrategias mobile-first y diseñamos experiencias móviles excepcionales.",
    icon: Smartphone,
    color: "bg-sky-100 text-sky-600",
    fullDescription:
      "Creamos experiencias móviles intuitivas y atractivas adaptadas a las necesidades de tus usuarios. Desde aplicaciones móviles hasta diseños web responsive, garantizamos una experiencia fluida en cualquier dispositivo.",
    benefits: [
      "Experiencia de usuario optimizada para móviles",
      "Diseño consistente en todos los dispositivos",
      "Mayor engagement y retención de usuarios",
      "Aumento de conversiones desde dispositivos móviles",
    ],
    process: [
      "Análisis de necesidades y comportamiento de usuarios",
      "Diseño UX/UI para plataformas móviles",
      "Desarrollo e implementación",
      "Pruebas y optimización continua",
    ],
    image: "/stockPhotos/mobileDev.png",
  },
];

export const projects = [
  {
    id: 1,
    title: "Construccion de Landing Page",
    client: "R&R Advisor",
    category: "Web",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description:
      "Rediseño completo del sitio e-commerce con un aumento del 120% en conversiones. \n \n https://rradvisor.net",
  },
  {
    id: 2,
    title: "Alpha Computer",
    client: "AlphaComputer",
    category: "web",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description:
      "Creación de ecommerce para productos y servicios de alpha computer.",
  },
  {
    id: 3,
    title: "Identidad Corporativa",
    client: "DV Enterprise",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description:
      "Desarrollo de identidad visual completa para startup de backoffice.",
  },
  {
    id: 4,
    title: "Impacto20x.com VSL",
    client: "Luis Fonten",
    category: "Web",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Pagina enfocada en VSL para ventas.",
  },
  {
    id: 5,
    title: "Claro De Luna",
    client: "Escuela Claro De Luna",
    category: "Branding",
    image: "/projectPhotos/logoCDL.png",
    description:
      "Branding y desarrollo de Plataforma de E-learning para el contenido teórico de la escuela y sus evaluaciones.",
  },
  {
    id: 6,
    title: "Gestión de Redes Sociales",
    client: "Dulzura Natural",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description:
      "Campaña con memes clave para aumentar engagement en los seguidores.",
  },
];

export const clients = [
  { id: 1, name: "TechSolutions", logo: "https://via.placeholder.com/150" },
  { id: 2, name: "EcoFriendly", logo: "https://via.placeholder.com/150" },
  { id: 3, name: "Urban Style", logo: "https://via.placeholder.com/150" },
  { id: 4, name: "Financial Plus", logo: "https://via.placeholder.com/150" },
  { id: 5, name: "Health & Care", logo: "https://via.placeholder.com/150" },
  { id: 6, name: "Travel Explorer", logo: "https://via.placeholder.com/150" },
];
