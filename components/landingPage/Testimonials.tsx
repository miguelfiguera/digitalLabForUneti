"use client";
//import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Props {
  [key: string]: never;
}

const testimonials = [
  {
    id: 1,
    name: "Roberto Jimenez",
    role: "CEO de R&R Advisor",
    content:
      "Digital Lab creó una web sencilla pero poderosa para nuestro negocio con un diseño excepcional y optimización móvil impecable. La experiencia de usuario mejoró radicalmente y nuestras conversiones aumentaron un 150% en solo 3 meses.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
  },
  {
    id: 2,
    name: "Nacy Rodriguez",
    role: "CEO de DV Enterprise",
    content:
      "Impressionante trabajo integral: desde el desarrollo web y ecommerce hasta la estructura completa de marketing y planes de negocio. Su estudio de mercado fue clave para posicionarnos como líderes en nuestro sector.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    id: 3,
    name: "Miguel Figuera",
    role: "Desarrollador Fullstack Freelance",
    content:
      "El logo creado por Digital Lab capturó perfectamente mi esencia profesional. Combinan visión artística con comprensión técnica, resultando en una identidad que destaca en mi sitio web y materiales profesionales.",
    image: "/TeamPhotos/miguel.png",
  },
  {
    id: 4,
    name: "Luis Fonten",
    role: "Coach de Alto Rendimiento",
    content:
      "Su enfoque en VSL (Video Sales Letters) para mi web de productos high-ticket revolucionó mis ventas.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
  },
  {
    id: 5,
    name: "Jason R.",
    role: "CEO and owner of Towerware",
    content:
      "Their software engineer enhanced my microservice-based Ruby on Rails infrastructure and delivered innovative new features for both my clients and me.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];
function Testimonials(props: Props) {
  const {} = props;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Cambiar testimonio cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dlab-dark-blue mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            El éxito de nuestros clientes es nuestro mejor testimonio. Conoce
            sus experiencias trabajando con Digital Lab.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dlab-light p-8 rounded-lg shadow-lg relative">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
 */}
              <div>
                <div className="text-lg md:text-xl text-gray-700 italic mb-4">
                  &ldquo;{testimonials[currentTestimonial].content}&ldquo;
                </div>
                <div className="font-bold text-dlab-dark-blue">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-dlab-orange w-6"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
