"use client";
import { useState } from "react";
import { services } from "@/lib/helpers/staticContent";
import Hero from "@/components/services/Hero";
import Nav from "@/components/services/Nav";
import CTA from "@/components/services/CTA";
//import AllServices from "@/components/services/AllServices";

const Services = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  const handleService = (id: string): void => {
    setActiveService(id);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero />

      {/* Navegación de servicios interactiva */}
      <Nav
        activeService={activeService}
        services={services}
        setActiveService={handleService}
      />

      {/* Lista completa de servicios */}
      {/*  <AllServices services={services} setActiveService={handleService} />
       */}
      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Services;
