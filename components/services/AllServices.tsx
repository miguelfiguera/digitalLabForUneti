"use client";
import React from "react";
import { Service } from "@/lib/Types/interfaces";
//import { ChevronRight } from "lucide-react";
interface Props {
  setActiveService: (id: string) => void;
  services: Service[];
}

function AllServices(props: Props) {
  const { services, setActiveService } = props;

  return (
    <section className="py-16 bg-dlab-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dlab-dark-blue mb-4">
            Todos Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios de marketing digital para
            ayudarte a crecer en el entorno online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-t-4 border-dlab-orange sm:hover:scale-110"
              onClick={() => setActiveService(service.id)}
            >
              <div
                className={`inline-flex p-3 rounded-lg ${service.color} mb-4`}
              >
                <service.icon className="min-w-[50px] min-h-[50px]" />
              </div>
              <h3 className="text-xl font-bold text-dlab-dark-blue mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.shortDescription}</p>
              {/*               <button
                className="text-dlab-orange font-medium flex items-center hover:underline"
                onClick={() => setActiveService(service.id)}
              >
                Ver detalles <ChevronRight size={16} className="ml-1" />
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllServices;
