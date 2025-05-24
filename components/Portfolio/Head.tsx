import React from "react";

interface Props {
  [key: string]: never;
}

function Head(props: Props) {
  const {} = props;

  return (
    <section className="bg-dlab-dark-blue text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Nuestro Portafolio
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Descubre cómo hemos ayudado a marcas como la tuya a alcanzar sus
          objetivos digitales.
        </p>
      </div>
    </section>
  );
}

export default Head;
