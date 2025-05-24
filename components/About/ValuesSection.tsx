import React, { FC } from "react";
import { values } from "@/lib/helpers/about-data";

interface ValuesSectionProps {
  [key: string]: never;
}

const ValuesSection: FC<ValuesSectionProps> = () => (
  <section className="py-20 bg-dlab-light">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-dlab-dark-blue mb-4">
          Nuestros Valores
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Estos principios guían nuestro trabajo diario y definen nuestra
          cultura empresarial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value) => (
          <div
            key={value.id}
            className="bg-white p-8 rounded-lg shadow-md animate-slide-up"
            style={{ animationDelay: `${value.id * 0.1}s` }}
          >
            <div className={`inline-flex p-3 rounded-lg ${value.color} mb-4`}>
              <span className="text-2xl font-bold">{value.id}</span>
            </div>
            <h3 className="text-xl font-bold text-dlab-dark-blue mb-3">
              {value.title}
            </h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;
