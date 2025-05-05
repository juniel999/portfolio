interface TechStack {
  category: string;
  skills: {
    name: string;
    icon: string;
    color: string;
  }[];
}

export const techStack: TechStack[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "logos:react", color: "#61DAFB" },
      { name: "Angular", icon: "logos:angular-icon", color: "#DD0031" },
      { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6" },
      { name: "Next.js", icon: "logos:nextjs-icon", color: "#000000" },
      { name: "TailwindCSS", icon: "logos:tailwindcss-icon", color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "logos:nodejs-icon", color: "#339933" },
      { name: "NestJS", icon: "logos:nestjs", color: "#E0234E" },
      { name: "Laravel", icon: "logos:laravel", color: "#FF2D20" },
      { name: "PostgreSQL", icon: "logos:postgresql", color: "#4169E1" },
      { name: "MongoDB", icon: "logos:mongodb-icon", color: "#47A248" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "logos:git-icon", color: "#F05032" },
      { name: "Docker", icon: "logos:docker-icon", color: "#2496ED" },
      { name: "AWS", icon: "logos:aws", color: "#FF9900" },
      { name: "Linux", icon: "logos:linux-tux", color: "#FCC624" },
    ],
  },
];
