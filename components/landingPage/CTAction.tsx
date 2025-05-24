import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";

interface Props {
  [key: string]: never;
}

function CTAction(props: Props) {
  const {} = props;

  return (
    <section className="py-20 bg-dlab-dark-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para impulsar tu negocio?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Agenda una consulta gratuita con nuestros expertos y descubre cómo
          podemos ayudarte a alcanzar tus objetivos digitales.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-dlab-orange hover:bg-dlab-orange/90"
          >
            <Link href="/#Agenda" className="flex items-center">
              <Calendar className="mr-2" size={20} />
              Agendar Consulta
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            <Link
              target="_blank"
              href="https://wa.me/56948084904?text=Buenos%20dias%2C%20quiero%20agendar%20una%20consulta"
              className="flex items-center"
            >
              <Phone className="mr-2" size={20} />
              Llamar Ahora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTAction;
