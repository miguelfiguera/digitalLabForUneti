import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface Props {
  [key: string]: never;
}

function WhyWorkWithUsSection(props: Props) {
  const {} = props;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Colaboración en equipo"
              className="rounded-lg shadow-lg"
              width={650}
              height={450}
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-dlab-dark-blue mb-6">
              ¿Por qué trabajar con Digital Lab?
            </h2>
            <p className="text-gray-600 mb-8">
              Nos diferenciamos por nuestro enfoque estratégico, compromiso con
              la excelencia y capacidad para generar resultados medibles para
              nuestros clientes.
            </p>

            {[
              "Equipo de expertos multidisciplinario",
              "Estrategias personalizadas, no soluciones genéricas",
              "Enfoque en ROI y resultados medibles",
              "Transparencia y comunicación constante",
              "Innovación continua y adaptación al cambio",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 mb-4">
                <div className="bg-dlab-orange text-white rounded-full p-1 flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p>{item}</p>
              </div>
            ))}

            <div className="mt-8">
              <Button
                asChild
                className="bg-dlab-orange hover:bg-dlab-orange/90"
              >
                <Link href="/#Agenda" className="flex items-center">
                  Contáctanos hoy
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWorkWithUsSection;
