import React from "react";

interface Props {
  [key: string]: never;
}

const process = [
  {
    step: "1",
    title: "Descubrimiento",
    description:
      "Analizamos tu negocio, competencia y objetivos para entender completamente tus necesidades.",
  },
  {
    step: "2",
    title: "Estrategia",
    description:
      "Desarrollamos un plan personalizado con tácticas específicas para alcanzar tus metas.",
  },
  {
    step: "3",
    title: "Implementación",
    description:
      "Ejecutamos la estrategia utilizando las mejores prácticas y tecnologías del sector.",
  },
  {
    step: "4",
    title: "Optimización",
    description:
      "Medimos, analizamos y ajustamos continuamente para mejorar los resultados.",
  },
];

function ApproachSection(props: Props) {
  const {} = props;

  return (
    <section className="py-20 bg-dlab-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestro Enfoque
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Un proceso estratégico y orientado a resultados que nos diferencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-dlab-orange text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApproachSection;
