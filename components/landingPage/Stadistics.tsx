import React from "react";

interface Props {
  [key: string]: never;
}

//data
const stats = [
  { id: 1, value: "50+", label: "Clientes Satisfechos" },
  { id: 2, value: "97%", label: "Tasa de Retención" },
  { id: 3, value: "25+", label: "Proyectos Completados" },
  { id: 4, value: "5+", label: "Años de Experiencia" },
];
function Stadistics(props: Props) {
  const {} = props;

  return (
    <section className="py-16 bg-dlab-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-dlab-orange">
                {stat.value}
              </div>
              <div className="text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stadistics;
