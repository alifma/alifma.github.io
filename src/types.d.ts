export type Biography = {
  name: string;
  fullname: string;
  roles: string[];
  description: string;
  github: string;
  resume: string;
  linkedin: string;
  insta: string;
  twitter?: string;
  facebook?: string;
  email?: string;
}

export type SkillItem = {
  name: string;
  image: string;
}

export type SkillsListItem = {
  title: string;
  skills: SkillItem[]
}

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
  category: ProjectType;
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
