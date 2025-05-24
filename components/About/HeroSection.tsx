import React, { FC } from "react";
import Image from "next/image";

interface HeroSectionProps {
  [key: string]: never;
}

const HeroSection: FC<HeroSectionProps> = () => (
  <section className="py-20 text-white bg-gradient-to-r from-dlab-dark-blue to-sky-900">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-slide-up">
            Conoce a <span className="text-dlab-orange">Digital Lab</span>
          </h1>
          <p
            className="mb-8 text-xl text-gray-300 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Somos un equipo apasionado de expertos en marketing digital
            comprometidos con el éxito de nuestros clientes.
          </p>
        </div>
        <div
          className="lg:w-1/2 animate-slide-right"
          style={{ animationDelay: "0.3s" }}
        >
          <Image
            src="/Logo/DigitalLab_isotipo.png"
            alt="Equipo Digital Lab"
            className="rounded-full shadow-2xl"
            width={500}
            height={350}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
