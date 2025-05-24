import React from "react";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  [key: string]: never;
}

function WhyChooseUs(props: Props) {
  const {} = props;

  return (
    <section className="py-20 bg-dlab-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src="/stockPhotos/diagram.png"
              alt="Equipo de trabajo"
              className="rounded-lg shadow-lg"
              width={650}
              height={450}
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-dlab-dark-blue mb-6">
              ¿Por qué elegir Digital Lab?
            </h2>
            <p className="text-gray-600 mb-8">
              Combinamos creatividad, estrategia y tecnología para impulsar el
              crecimiento de tu negocio. Nuestro enfoque centrado en resultados
              nos diferencia.
            </p>

            <div className="space-y-4">
              {[
                "Equipo de expertos multidisciplinario",
                "Enfoque personalizado para cada cliente",
                "Estrategias basadas en datos y análisis",
                "Resultados medibles y tangibles",
                "Innovación constante y adaptación al cambio",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle
                    className="text-dlab-orange flex-shrink-0"
                    size={20}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                asChild
                className="bg-dlab-orange hover:bg-dlab-orange/90"
              >
                <Link href="/About">Conoce nuestro equipo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
