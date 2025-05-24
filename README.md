# Tarea de informatica, hacer una pagina web.

Debido a que se nos indicó que la pagina web debe ser sencilla, se hizo usando las tecnologías aqui descritas de forma colaborativa entre compañeros.

Siendo cada una de las page.tsx y sus componentes responsabilidad asignada a un miembro del equipo.

# Equipo

- Miguel Figuera C.I: 23.558.789
- Iromy Leon C.I: V-30.243.131
- Alejandra Herde C.I: V-23.711.974
- Greimar Marin C.I: V-29.686.611

## Notas:

1. Se uso tailwindcss en vez de bootstrap porque aunque requiere un poco mas de tiempo, permite estudiar css de una vez y contempla tambien la filosofia de desarrollo 'mobile first', lo que permite adaptarnos al entorno movil desde un principio.
2. En la seccion de contacto se puede ver el formulario validado por javascript, el componente se llama FormWithValidation.tsx y se ubica en components/FormWithValidation.tsx
3. Se uso typescript porque es lo mas usado actualmente con respecto a javascript y viene integrado a muchos frameworks desde el inicio.

---

# thedigitallab.dev - Página de Aterrizaje

Esta es una página de aterrizaje informativa sencilla para Digital Lab, construida con Next.js. Muestra los servicios, valores, equipo e información de contacto de la empresa.

## Visión General

- **Sitio Web:** [thedigitallab.dev](https://thedigitallab.dev)
- **Propósito:** Proporcionar información sobre Digital Lab e incentivar a los clientes potenciales a contactarlos.
- **Stack Tecnológico:**
  - [Next.js](https://nextjs.org/) (Framework de React)
  - [React](https://react.dev/)
  - [Tailwind CSS](https://tailwindcss.com/) (Framework de CSS)
  - [Radix UI](https://www.radix-ui.com/) (Librería de Componentes de Interfaz de Usuario)
  - [Lucide React](https://lucide.dev/) (Íconos)
  - [Formspree](https://formspree.io/) (Manejo de Formularios)
  - [Zod](https://zod.dev/) (Validación de Esquemas)
  - [Netlify](https://www.netlify.com/) (Despliegue)

## Características

- **Diseño Responsivo:** El sitio web está diseñado para ser responsivo y funcionar bien en todos los dispositivos (escritorios, tablets y teléfonos móviles).
- **Secciones Informativas:** La página incluye secciones para:

  - Root: landing page con informacion de contacto para programar reuniones con clientes potenciales.
  - Servicios: listado de servicios ofrecidos por thedigitallab.dev
  -     Portafolio: Listado de proyectos destacados.
  - Nosotros: Breve historia de la "empresa".
  - Esta enlazada con calendly para la programacion de reuniones.

- **Animaciones:** Incluye animaciones sutiles para una mejor experiencia de usuario (Tailwind Animate).
- **Componentes de Interfaz de Usuario:** Utiliza Radix UI para componentes de interfaz de usuario accesibles y personalizables.
- **Código Limpio y Mantenible:** El código está bien estructurado y es fácil de entender.

## Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone [url_del_repositorio]
    cd [nombre_del_repositorio]
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    # o
    yarn install
    # o
    pnpm install
    ```

## Desarrollo

1.  **Ejecuta el servidor de desarrollo:**

    ```bash
    npm run dev
    # o
    yarn dev
    # o
    pnpm dev
    ```

    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el sitio web.

## Build & Despliegue

1.  **Construye el proyecto para producción:**

    ```bash
    npm run build
    # o
    yarn build
    # o
    pnpm build
    ```

2.  **Despliegue en Netlify:**

    Este proyecto está desplegado en Netlify. El proceso de build se automatiza con cada push a la rama `main`. También puedes desplegar manualmente conectando tu cuenta de Netlify al repositorio.

    - **Comando de Build:** `next build`
    - **Directorio de Publicación:** `.next`

## Tecnologías Utilizadas

- **Next.js:** Un framework de React para construir aplicaciones web de alto rendimiento y optimizadas para SEO.
- **React:** Una librería de JavaScript para construir interfaces de usuario.
- **Tailwind CSS:** Un framework de CSS "utility-first" para estilizar rápidamente elementos HTML.
- **Radix UI:** Un conjunto de primitivas de interfaz de usuario sin estilo y accesibles.
- **Lucide React:** Una librería de iconos hermosos y consistentes.

## Estructura de Carpetas

Digital Lab/
├── .next/ # Salida del build de Next.js
├── app/ # Directorio de la aplicación Next.js (páginas, componentes, etc.)
├── components/ # Componentes de React reutilizables
├── public/ # Recursos estáticos (imágenes, fuentes, etc.)
├── styles/ # Estilos CSS globales (globals.css)
├── tailwind.config.js # Configuración de Tailwind CSS
├── next.config.js # Configuración de Next.js
├── package.json # Dependencias y scripts del proyecto
├── README.md # Este archivo
└── ...

## Contribución

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1.  Haz un "fork" del repositorio.
2.  Crea una nueva rama para tu funcionalidad o corrección de errores.
3.  Realiza tus cambios.
4.  Envía un "pull request".

## Licencia

**Todos los derechos reservados**

## Contacto

[miguelqui725@gmail.com]
