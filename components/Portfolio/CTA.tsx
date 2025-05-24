import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  [key: string]: never;
}

function CTA(props: Props) {
  const {} = props;

  return (
    <section className="py-12 bg-gradient-to-r from-dlab-blue to-dlab-dark-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          ¿Listo para destacar en el mundo digital?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contáctanos hoy mismo y comencemos a trabajar juntos en tu próximo
          proyecto exitoso.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-dlab-orange hover:bg-dlab-orange/90"
        >
          <Link href="/#Agenda">Contactar ahora</Link>
        </Button>
      </div>
    </section>
  );
}

export default CTA;
