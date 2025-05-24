import React from "react";

interface Props {
  [key: string]: never;
}

// Cliente Logos (simulados)
const clientLogos = [
  { id: 1, name: "Cliente 1" },
  { id: 2, name: "Cliente 2" },
  { id: 3, name: "Cliente 3" },
  { id: 4, name: "Cliente 4" },
  { id: 5, name: "Cliente 5" },
];

function Clients(props: Props) {
  const {} = props;

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 mb-8">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clientLogos.map((logo) => (
            <div
              key={logo.id}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
