import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Props {
  [key: string]: never;
}

function Hero(props: Props) {
  const {} = props;

  return (
    <section className="relative min-h-[90vh] flex items-center bg-dlab-dark-blue">
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
            backgroundBlendMode: "overlay",
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up">
              Impulsa tu Negocio al{" "}
              <span className="text-dlab-orange">Siguiente Nivel</span> Digital
            </h1>
            <p
              className="text-xl text-gray-300 mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Soluciones de marketing digital estratégicas y personalizadas para
              hacer crecer tu empresa en el mundo online.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-dlab-orange hover:bg-dlab-orange/90 text-white"
              >
                <Link href="/#Agenda">Solicita una Consulta</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/Services" className="flex items-center">
                  Nuestros Servicios
                  <ChevronRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          <div
            className="lg:w-1/2 animate-slide-right"
            style={{ animationDelay: "0.4s" }}
          >
            <Image
              src="/stockPhotos/digitalBusiness.png"
              alt="Digital Marketing Team"
              className="rounded-lg shadow-2xl w-full"
              width={650}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
