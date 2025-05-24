import { ComponentType } from "react";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
  fullDescription: string;
  benefits: string[];
  process: string[];
  image: string;
}

export interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
}
