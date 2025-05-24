import React from "react";
import Link from "next/link";
import { ChevronRight, Users, BarChart, Globe } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  [key: string]: never;
}

const featuredServices = [
  {
    id: 1,
    title: "Estrategia de Marca",
    description:
      "Desarrollamos estrategias de marca que conectan con tu audiencia y destacan tu propuesta de valor.",
    icon: Users,
  },
  {
    id: 2,
    title: "Marketing Digital",
    description:
      "Implementamos campañas de marketing digital eficaces para aumentar tu visibilidad y conversiones.",
    icon: BarChart,
  },
  {
    id: 3,
    title: "Desarrollo Web",
    description:
      "Creamos sitios web optimizados para conversión que representan perfectamente tu marca.",
    icon: Globe,
  },
];

function FeaturedServices(props: Props) {
  const {} = props;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dlab-dark-blue mb-4">
            Nuestros Servicios Destacados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En Digital Lab ofrecemos soluciones integrales para potenciar tu
            presencia digital y convertirla en resultados tangibles para tu
            negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-dlab-orange"
            >
              <div className="service-icon inline-flex p-4 rounded-full bg-dlab-orange/10 text-dlab-orange mb-6 transition-transform duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-dlab-dark-blue mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href="/Services"
                className="text-dlab-orange font-medium hover:text-dlab-dark-blue transition-colors inline-flex items-center"
              >
                Saber más
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-dlab-dark-blue hover:bg-dlab-dark-blue/90 transition-colors"
          >
            <Link href="/Services">Ver todos los servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;
