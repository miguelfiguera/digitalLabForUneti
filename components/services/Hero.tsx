import React from "react";

interface Props {
  [key: string]: never;
}

function Hero(props: Props) {
  const {} = props;

  return (
    <section className="bg-dlab-dark-blue text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nuestros Servicios
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Soluciones estratégicas y personalizadas para impulsar tu presencia
          digital y convertirla en resultados tangibles para tu negocio.
        </p>
      </div>
    </section>
  );
}

export default Hero;
