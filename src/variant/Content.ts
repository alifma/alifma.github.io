import {
  Biography,
  Education,
  Experience,
  Project,
  SkillsListItem,
} from "../types";

export enum ProjectType {
  All = "all",
  Web = "web app",
  Android = "android app",
  Ml = "machine learning",
}

export const Bio: Biography = {
  name: "Alifma",
  fullname: "Alif Maulana Arifin",
  email: "alifmaulana26@gmail.com",
  roles: ["Full Stack Developer", "Software Engineer", "Mathematics Educator"],
  description:
    "Full Stack Developer with a passion for continuous learning and knowledge sharing. Proficient in developing applications using JavaScript and Golang, with a background in mathematics education and over three years of experience as a software engineer.",
  github: "https://github.com/alifma",
  resume:
    "https://drive.google.com/file/d/1wossjdet9TNAt_f2ei4b_aH--_sEcZpn/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/alifma",
  insta: "https://www.instagram.com/alifma26",
  profile:
    "https://lh3.googleusercontent.com/d/1Dz5RA9FTCf4sNmuTR_LzZiyxnXVVNUNY",
};

export const skills: SkillsListItem[] = [
  {
    title: "Language",
    skills: [
      {
        name: "JavaScript",
        image:
          "https://lh3.googleusercontent.com/d/1F4REgHuEYYmmkajxSohBCbl-TYQIQ6b9",
      },
      {
        name: "Python",
        image:
          "https://lh3.googleusercontent.com/d/1a1LW03HOQpSalKrb1uOwFqo97LZrYbBc",
      },
      {
        name: "Golang",
        image:
          "https://lh3.googleusercontent.com/d/1akcg1ni4RQWrux04acpWyhSelA90u2My",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        image:
          "https://lh3.googleusercontent.com/d/1uKRtjbkMA0zHm-5sBufMs6sv3jaKzHth",
      },
      {
        name: "PostgreSQL",
        image:
          "https://lh3.googleusercontent.com/d/16djCeBfeUYs9fP9GFLBnOW5oE9CnM1IQ",
      },
      {
        name: "SQL Server",
        image:
          "https://lh3.googleusercontent.com/d/1Q3gBBRZS-d8O2vtY-4Hjl56cyV9jhAua",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "https://lh3.googleusercontent.com/d/13IpSb5vD5LHqoWgxqrnp7900U1S-WgZz",
      },
      {
        name: "Vue Js",
        image:
          "https://lh3.googleusercontent.com/d/1hF6-Bbq-QqX0p1jQiLPh0z_WNEjELhhx",
      },
      {
        name: "Material UI",
        image:
          "https://lh3.googleusercontent.com/d/1zYbCtRr9UuQ4f5b5nihGNu62nSHRLMix",
      },
      {
        name: "AntDesign",
        image:
          "https://lh3.googleusercontent.com/d/1nu43O4ovKEd7-KMjFtVF7JMKQcsMfDlk",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image:
          "https://lh3.googleusercontent.com/d/12cPze8t5wF06JQkdaE0I_DIpH3SJ-wAQ",
      },
      {
        name: "Express Js",
        image:
          "https://lh3.googleusercontent.com/d/1jO3kJlBUsYY9sNBLgOa9Fj8mfrdu-iF0",
      },
    ],
  },
  {
    title: "Mobile",
    skills: [
      {
        name: "React Native",
        image:
          "https://lh3.googleusercontent.com/d/13IpSb5vD5LHqoWgxqrnp7900U1S-WgZz",
      },
      {
        name: "Flutter",
        image:
          "https://lh3.googleusercontent.com/d/1swMYxOkkkhpzGhCgvVAVeqN0KQ_G0Ywm",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://lh3.googleusercontent.com/d/1uhWgXTysZQQFXu9LzBHgs263JaFe1Nkc",
      },
      {
        name: "GitHub",
        image:
          "https://lh3.googleusercontent.com/d/15Q1SDybHsNrZQ9h46vS833U86651Bnk3",
      },
      {
        name: "Google Cloud",
        image:
          "https://lh3.googleusercontent.com/d/1FZKh3VId1wEDeY1duQkXrAC59UX9GVnO",
      },
      {
        name: "Postman",
        image:
          "https://lh3.googleusercontent.com/d/1JGM4S6R5wR5RXLUPJnpH9tbqLq4Id5_4",
      },
      {
        name: "Figma",
        image:
          "https://lh3.googleusercontent.com/d/1IG6hvWxJYvT46OnjoKa4Uop4c9Tp0Ple",
      },
      {
        name: "Docker",
        image:
          "https://lh3.googleusercontent.com/d/10JaKbjPCZlK5xioVAvLyxRGoBREcUEl9",
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 0,
    img: "https://lh3.googleusercontent.com/d/1Vnw4D01AmxV83-GwCbx-jGPTCuvy2G3y",
    role: "IT Staff",
    company: "Pandeglang Library and Archives Office",
    date: "Jar 2015 - Mar 2015",
    desc: "Managing the computer networks of the Pandeglang Regency Public Library and the Pandeglang Regency Archives Office. This includes installing wireless access points, troubleshooting computer issues, and participating in the digitalization of old archive documents.",
    skills: ["Network", "Microsoft Office", "General Office Work"],
  },
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/d/1zWAi7x3Vkgej8Za2u3iW7fx30H3dcIiE",
    role: "Mathematics Teacher Intern",
    company: "Tarlac Agricultural University Laboratory School",
    date: "Aug 2018 - Sept 2018",
    desc: "Became an internship teacher to teach grade 10 mathematics at Tarlac Agricultural University Laboratory School for one month as part of the SEA-Teacher preservice teacher exchange Batch-6 from SEAMEO. Tarlac Agricultural University was previously known as Tarlac College of Agriculture.",
    skills: ["Mathematics", "Public Speaking"],
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/d/1b2ncgRtdzF_WbSODHwq-B-U2cov4xMmr",
    role: "Laboratory Assistant",
    company: "Universitas Sultan Ageng Tirtayasa",
    date: "Sep 2017 - Dec 2019",
    desc: "Assist the lectures to teach university student about Javascript and Java Programming. Actively involved on research and development with university and another laboratory assistant to create application and compete in national level competition.",
    skills: ["Javascript", "Mathematics", "Statistics", "Public Speaking"],
  },
  {
    id: 3,
    img: "https://lh3.googleusercontent.com/d/1cAPsS5fBFQwF_GPzZXDuF2WauP8y4BXf",
    role: "Mathematics Teacher",
    company: "SMK Nurul Huda Baros",
    date: "Jul 2020 - Dec 2020",
    desc: "Teaching Mathematics for 7 class on Grade XI and I have a chance to become Homeroom Teacher. Because of the Covid-19 Pandemy the teaching process is online using Google Classroom.",
    skills: ["Mathematics", "Public Speaking", "Problem Solving"],
  },
  {
    id: 4,
    img: "https://lh3.googleusercontent.com/d/1chsOi3YmTKL6fdHV-VW4uCTrZwkgmif0",
    role: "Volunteer Instructor",
    company: "Progate Indonesia",
    date: "Jun 2020 - Apr 2021",
    desc: "I served as a Frontend Instructor for the Digital Talent Scholarship Web program, guiding participants through their questions about HTML, CSS, and JavaScript. With over 4,800 participants in the event, my role is to guide and teach them how to effectively resolve their issues.",
    skills: ["HTML", "CSS", "Javascript", "Public Speaking"],
  },
  {
    id: 5,
    img: "https://lh3.googleusercontent.com/d/1dnNZAyGZ0xJxyV1s1ODF93K0dy-EV4VY",
    role: "Software Engineeer",
    company: "PT. Citra Digital Lintas",
    date: "Apr 2021 - Present",
    desc: "Contributed to different open-source projects and learn from industry experts",
    skills: [
      "Javascript",
      "Flutter",
      "Golang",
      "Databse",
      "Project Management",
      "Encryption",
    ],
  },
];

export const educations: Education[] = [
  {
    id: 0,
    img: "https://lh3.googleusercontent.com/d/1gXp6AHKxuKYbRzRUzopTyLXJJsWtdMIZ",
    school: "Vocational Highschool, Computer and Network Engineering",
    date: "Jul 2013 - Jun 2016",
    grade: "",
    desc: "",
    degree: "Vocational Highschool, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/d/1b2ncgRtdzF_WbSODHwq-B-U2cov4xMmr",
    school: "Universitas Sultan Ageng Tirtayasa",
    date: "July 2016 - January 2020",
    grade: "3.64 GPA",
    desc: "During my college I joined Mathematics Laboratory Assistant and involved in research and development such as participating in national research competition and become one of Indonesia Representation on SEA-Teacher Pre-Service Student Exchange in Philippines. I graduated after finishing my study for 3.5 Years.",
    degree: "Bachelor, Matehematics Education",
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/d/15L1qkZFFLhjoqyiocwSz_qvaD-0dAHvl",
    school: "Pijar Camp",
    date: "Dec 2020 - March 2021",
    grade: "",
    desc: "Prepare for a career as a professional developer by learning programming materials that are most up to date with today's industry demands. Learn about Full stack web development with Vue JS, Express JS and Softskills",
    degree: "Fullstack Web Developer",
  },
];

export const projects: Project[] = [
  {
    id: 0,
    title: "QRCode",
    description: "Just a simple static QRCode generator",
    image:
      "https://lh3.googleusercontent.com/d/14sD4JBTrejfm4xgrGFhx97-y16214BWP",
    tags: ["Javascript", "HTML", "CSS"],
    category: ProjectType.Web,
    github: "https://github.com/alifma/QRGen",
    webapp: "https://alifma.github.io/QRGen/",
    member: [
      {
        name: "Alifma",
        img: "https://avatars.githubusercontent.com/u/45408862?v=4",
        linkedin: "https://www.linkedin.com/in/alifma",
        github: "https://github.com/alifma/",
      },
      {
        name: "Fikri Basa",
        img: "https://avatars.githubusercontent.com/u/34205138?v=4",
        linkedin: "https://www.linkedin.com/in/fikribasa",
        github: "https://github.com/fikribasa",
      },
      {
        name: "Antsistra",
        img: "https://avatars.githubusercontent.com/u/79401906?v=4",
        linkedin: "https://www.linkedin.com/in/antsistra",
        github: "https://github.com/antsistra",
      },
    ],
  },
  {
    id: 1,
    title: "Drive Embed",
    description:
      "A converter from google drive public URL to get an embeded URL for it",
    image:
      "https://lh3.googleusercontent.com/d/1N3LAds9FdbwsZeLe1UzU_YXqGXTe9AMh",
    tags: ["Javascript", "HTML", "CSS"],
    category: ProjectType.Web,
    github: "https://github.com/alifma/DriveEmbed",
    webapp: "https://alifma.github.io/DriveEmbed/",
    member: [
      {
        name: "Alifma",
        img: "https://avatars.githubusercontent.com/u/45408862?v=4",
        linkedin: "https://www.linkedin.com/in/alifma",
        github: "https://github.com/alifma/",
      },
    ],
  },
];
