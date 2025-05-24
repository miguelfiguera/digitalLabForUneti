import React, { FC } from "react";
import { milestones } from "@/lib/helpers/about-data";

interface HistorySectionProps {
  [key: string]: never;
}

const HistorySection: FC<HistorySectionProps> = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-dlab-dark-blue mb-4">
          Nuestra Historia
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          El viaje de Digital Lab desde sus inicios hasta convertirse en una
          agencia líder en marketing digital.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-dlab-orange/20"></div>

          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-1/2 px-8 ${index % 2 === 0 ? "text-right" : ""}`}
              >
                <div className="animate-slide-up">
                  <div className="text-dlab-orange font-bold text-xl mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-dlab-dark-blue mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-dlab-orange border-4 border-white"></div>

              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HistorySection;
