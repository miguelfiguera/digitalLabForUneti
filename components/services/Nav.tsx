"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Service } from "@/lib/Types/interfaces";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
interface Props {
  services: Service[];
  setActiveService: (id: string) => void;
  activeService: string;
}

function Nav(props: Props) {
  const { /* activeService ,*/ services, setActiveService } = props;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dlab-dark-blue mb-4">
            Explora Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selecciona un servicio para conocer más detalles sobre cómo podemos
            ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        <Tabs
          defaultValue={services[0].id}
          className="w-full"
          onValueChange={setActiveService}
        >
          <div className="mb-8 overflow-x-auto pb-2">
            <TabsList className="flex w-full sm:w-auto sm:inline-flex bg-transparent space-x-2">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className={`px-4 py-2 rounded-full border-2 data-[state=active]:border-dlab-orange data-[state=active]:bg-white data-[state=active]:text-dlab-orange data-[state=inactive]:border-gray-200 data-[state=inactive]:bg-white data-[state=inactive]:text-gray-500 transition-all whitespace-nowrap`}
                >
                  <service.icon className="w-4 h-4 mr-2 inline" />
                  <span className="hidden sm:inline">
                    {service.title.split(" ")[0]}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {services.map((service) => (
            <TabsContent
              key={service.id}
              value={service.id}
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="animate-slide-right order-2 lg:order-1">
                  <div
                    className={`inline-flex p-3 rounded-lg ${service.color} mb-4`}
                  >
                    <service.icon className="min-w-[50px] min-h-[50px]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dlab-dark-blue mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-dlab-dark-blue mb-3">
                      Beneficios
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-dlab-orange mr-2">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-dlab-dark-blue mb-3">
                      Nuestro Proceso
                    </h4>
                    <ol className="space-y-2">
                      {service.process.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-dlab-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <Button
                    asChild
                    className="bg-dlab-orange hover:bg-dlab-orange/90"
                  >
                    <Link href="/#Agenda" className="flex items-center">
                      Solicitar este servicio
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="animate-slide-up order-1 lg:order-2">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-[300px] md:h-[400px] object-cover"
                    width={650}
                    height={450}
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

export default Nav;
