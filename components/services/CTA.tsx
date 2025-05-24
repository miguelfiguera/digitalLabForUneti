import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  [key: string]: never;
}

function CTA(props: Props) {
  const {} = props;

  return (
    <section className="py-16 bg-dlab-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          ¿No estás seguro de qué servicio necesitas?
        </h2>
        <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
          Agenda una consulta gratuita y nuestros expertos te ayudarán a
          determinar las mejores estrategias para tu negocio.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-dlab-orange hover:bg-dlab-orange/90"
        >
          <Link href="/#Agenda">Solicitar Consulta Gratuita</Link>
        </Button>
      </div>
    </section>
  );
}

export default CTA;
