interface TechStack {
  category: string;
  skills: {
    name: string;
    icon?: string;
    color?: string;
  }[];
}

export const techStack: TechStack[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Next.js", color: "#000000" },
      { name: "TailwindCSS", color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", color: "#339933" },
      { name: "Python", color: "#3776AB" },
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "MongoDB", color: "#47A248" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", color: "#F05032" },
      { name: "Docker", color: "#2496ED" },
      { name: "AWS", color: "#FF9900" },
      { name: "Linux", color: "#FCC624" },
    ],
  },
];
