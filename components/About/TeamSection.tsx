"use client";
import React, { FC, useState } from "react";
import { TeamMember } from "@/lib/Types/about-types";
import { team } from "@/lib/helpers/about-data";
import Link from "next/link";
import Image from "next/image";

interface TeamSectionProps {
  [key: string]: never;
}

const TeamSection: FC<TeamSectionProps> = () => {
  const [activeTeamMember, setActiveTeamMember] = useState<TeamMember>(team[0]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dlab-dark-blue mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce a los expertos detrás de Digital Lab que hacen posible el
            éxito de nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Team member photos */}
          <div className="order-2 lg:order-1 lg:col-span-1">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
              {team.map((member) => (
                <div
                  key={member.id}
                  className={`relative cursor-pointer overflow-hidden rounded-lg transition-all ${
                    activeTeamMember.id === member.id
                      ? "ring-4 ring-dlab-orange shadow-lg"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setActiveTeamMember(member)}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-32 md:h-24 lg:h-40 object-cover"
                    width={200}
                    height={160}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-2 text-white">
                      <div className="text-sm font-medium">{member.name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active team member details */}
          <div className="order-1 lg:order-2 lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={activeTeamMember.image}
                  alt={activeTeamMember.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dlab-dark-blue mb-1">
                  {activeTeamMember.name}
                </h3>
                <div className="text-dlab-orange font-medium mb-4">
                  {activeTeamMember.role}
                </div>
                <p className="text-gray-600 mb-6">{activeTeamMember.bio}</p>
                <div className="flex space-x-3">
                  <Link
                    href=""
                    className="text-dlab-dark-blue hover:text-dlab-orange transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
