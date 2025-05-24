"use client";

import React from "react";
import Head from "@/components/Portfolio/Head";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";
import CTA from "@/components/Portfolio/CTA";

const Portfolio = () => {
  return (
    <div className="pt-16">
      {/* Encabezado del portafolio */}
      <Head />

      {/* Sección de proyectos */}

      <PortfolioSection />

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Portfolio;
