import React from "react";
import { MapPin, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  [key: string]: never;
}

function LocationSection(props: Props) {
  const {} = props;

  return (
    <section className="py-16 bg-dlab-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dlab-dark-blue mb-4">
            Nuestra Ubicación
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visítanos o contáctanos por cualquiera de nuestros canales. Estamos
            listos para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md h-[400px]">
            {/* Map would go here */}
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <span className="text-gray-500">Mapa de ubicación</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-dlab-dark-blue mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin
                  className="text-dlab-orange flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-medium">Dirección</h4>
                  <p className="text-gray-600">
                    Av. Principal 123, Ciudad, País
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail
                  className="text-dlab-orange flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">info@digitallab.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Calendar
                  className="text-dlab-orange flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-medium">Horario</h4>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                asChild
                className="w-full bg-dlab-dark-blue hover:bg-dlab-dark-blue/90"
              >
                <Link href="/#Agenda">Contactar Ahora</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
