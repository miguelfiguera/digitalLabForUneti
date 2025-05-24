import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { projects } from "@/lib/helpers/staticContent";
import PortfolioCard from "@/components/Portfolio/PortfolioCard";
import { Globe, Instagram, Smartphone } from "lucide-react";
//import {ArrowRight} from 'lucide-react'
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  [key: string]: never;
}

const categories = ["Todos", "Web", "Social Media", "Branding"];

const categoryIcons: Record<string, React.ElementType> = {
  Web: Globe,
  "Social Media": Instagram,
  Branding: Smartphone,
};

function PortfolioSection(props: Props) {
  const {} = props;
  const [activeCategory, setActiveCategory] = useState("Todos");
  const isMobile = useIsMobile();

  // Filtrar proyectos por categoría
  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="Todos" className="w-full">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dlab-dark-blue mb-6">
              Proyectos Destacados
            </h2>

            {isMobile ? (
              <div className="overflow-x-auto pb-2">
                <TabsList className="inline-flex w-auto h-auto space-x-1 p-1 bg-gray-100">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-md ${
                        activeCategory === category
                          ? "bg-white shadow text-dlab-dark-blue"
                          : "text-gray-600 hover:text-dlab-dark-blue"
                      }`}
                    >
                      {category !== "Todos" && categoryIcons[category] && (
                        <span className="mr-2 inline-block">
                          {React.createElement(categoryIcons[category], {
                            size: 16,
                          })}
                        </span>
                      )}
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            ) : (
              <TabsList className="grid grid-cols-4 max-w-md mb-8">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category !== "Todos" && categoryIcons[category] && (
                      <span className="mr-2 inline-block">
                        {React.createElement(categoryIcons[category], {
                          size: 16,
                        })}
                      </span>
                    )}
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            )}
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <PortfolioCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-10">
          <Button asChild className="bg-dlab-orange hover:bg-dlab-orange/90">
            <Link href="/#Agenda">Hablemos de tu proyecto</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
