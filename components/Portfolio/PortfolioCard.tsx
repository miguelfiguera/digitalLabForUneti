"use client";
import React, { useState } from "react";
import { Project } from "@/lib/Types/interfaces";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PortfolioCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="portfolio-card bg-white rounded-lg shadow-lg overflow-hidden relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="aspect-video w-full relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
          width={450}
          height={250}
        />

        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-70"
          )}
        >
          <div className="text-white">
            <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-gray-200 mb-1">{project.client}</p>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "p-4 bg-white transition-all duration-300",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}
      >
        <span className="inline-block px-2 py-1 text-xs rounded bg-dlab-blue/10 text-dlab-blue mb-2">
          {project.category}
        </span>
        <p className="text-gray-600 text-sm">{project.description}</p>
        {/*         <Button variant="link" className="text-dlab-orange p-0 mt-2 h-auto">
          Ver detalles <ArrowRight size={14} className="ml-1" />
        </Button> */}
      </div>
    </div>
  );
};

export default PortfolioCard;
