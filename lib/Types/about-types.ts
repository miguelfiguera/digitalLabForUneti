export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export interface Value {
  id: number;
  title: string;
  description: string;
  color: string;
}

export interface Milestone {
  year: number;
  title: string;
  description: string;
}
