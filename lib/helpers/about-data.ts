import { TeamMember, Value, Milestone } from "../Types/about-types";

export const team: TeamMember[] = [
  {
    id: 1,
    name: "José Luis Perez",
    role: "CEO & Estratega Digital",
    bio: "Con más de 10 años de experiencia en marketing digital, José ha liderado estrategias exitosas para marcas nacionales. Su enfoque innovador y orientado a resultados ha sido clave para el crecimiento de Digital Lab.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E35AQH6uYntX41Cwg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1729338015533?e=1744124400&v=beta&t=xqTacfm1Igpn_HP_qCPkZbVQfYQJzJc75nrQtpamKeo",
    linkedin:
      "https://www.linkedin.com/in/jos%C3%A9-luis-p%C3%A9rez-quintero-50641525/",
  },
  {
    id: 2,
    name: "Miguel Figuera",
    role: "Director de Desarrollo Web",
    bio: "Experto en desarrollo web con enfoque en experiencia de usuario y conversión. Miguel combina habilidades técnicas con una visión estratégica para crear sitios web que no solo lucen bien, sino que generan resultados.",
    image: "/TeamPhotos/miguel.png",
    linkedin: "https://www.linkedin.com/in/miguel-quintero725/",
  },
  {
    id: 3,
    name: "Marisol Quintero",
    role: "Jefe de Diseño y Creación de Contenido",
    bio: "Especialista en storytelling y creación de contenidos que conectan con las audiencias. Marisol desarrolla estrategias de contenido que aumentan el engagement y posicionan a las marcas como referentes en sus sectores.",
    image: "/TeamPhotos/marisol.jpeg",
    linkedin: "",
  },
];

export const values: Value[] = [
  {
    id: 1,
    title: "Innovación",
    description:
      "Buscamos constantemente nuevas ideas y enfoques para ofrecer soluciones únicas y efectivas a nuestros clientes.",
    color: "bg-dlab-orange/10 text-dlab-orange",
  },
  {
    id: 2,
    title: "Excelencia",
    description:
      "Nos esforzamos por alcanzar los más altos estándares de calidad en todos nuestros servicios y entregables.",
    color: "bg-dlab-blue/10 text-dlab-blue",
  },
  {
    id: 3,
    title: "Transparencia",
    description:
      "Creemos en la comunicación clara y honesta con nuestros clientes, socios y entre nuestro equipo.",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    title: "Resultados",
    description:
      "Nos enfocamos en generar resultados medibles y tangibles que impulsen el crecimiento de nuestros clientes.",
    color: "bg-purple-100 text-purple-600",
  },
];

export const milestones: Milestone[] = [
  {
    year: 2019,
    title: "Fundación de Digital Lab",
    description:
      "Comenzamos como una pequeña agencia con grandes sueños y una visión clara: transformar el marketing digital.",
  },
  {
    year: 2022,
    title: "Expansión de Servicios",
    description:
      "Incorporamos servicios de desarrollo web, e-commerce, CRM y ERP para ofrecer soluciones más completas a nuestros clientes.",
  },
  {
    year: 2023,
    title: "Primeros 25 Clientes Recurrentes",
    description:
      "Alcanzamos los 25 clientes activos y expandimos nuestro equipo para satisfacer la creciente demanda.",
  },
  {
    year: 2024,
    title: "Apertura de Nueva Oficina en Temuco",
    description:
      "Inauguramos nuestra nueva sede principal para fomentar la creatividad y colaboración.",
  },
  {
    year: 2025,
    title: "Lanzamiento de nuestra web",
    description: "Estrenamos nueva imagen.",
  },
];
