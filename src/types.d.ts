export type Experience = {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc: string;
  skills?: string[];
  doc?: string;
};

export type Education = {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
};

export type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  webapp: string;
  member?: ProjectMember[];
};

type ProjectMember = {
  name: string;
  img: string;
  linkedin: string;
  github: string;
};
