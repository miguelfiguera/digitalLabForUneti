import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  [key: string]: never;
}

function CTAFinalSection(props: Props) {
  const {} = props;

  return (
    <section className="py-16 bg-dlab-dark-blue text-white border-b">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Hablemos sobre tu proyecto</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Estamos listos para ayudarte a alcanzar tus objetivos digitales.
          Contáctanos hoy mismo para comenzar.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-dlab-orange hover:bg-dlab-orange/90"
        >
          <Link href="/#Agenda">Agendar una Consulta</Link>
        </Button>
      </div>
    </section>
  );
}

export default CTAFinalSection;
