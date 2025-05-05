interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Freedamn",
    description:
      "A modern blog-sharing platform focused on freedom of expression and community engagement.",
    techStack: ["Angular", "NestJS", "TypeScript", "Tailwind CSS", "MongoDB"],
    imageUrl: "/images/ecommerce.jpg",
    liveUrl: "https://freedamn.vercel.app",
    githubUrl: "https://github.com/juniel999/angular-nestjs-freedamn",
    featured: true,
  },
  {
    title: "Task Tracker App",
    description:
      "A collaborative task management application using Angular for the frontend and NestJS for the backend.",
    techStack: ["Angular", "NestJS", "MongoDB"],
    imageUrl: "/images/task-app.jpg",
    liveUrl: "https://example.com/task-app",
    githubUrl: "https://github.com/username/task-app",
    featured: true,
  },
  {
    title: "Chatify",
    description:
      "Chatify is a fun anonymous messaging app where you can send messages to someone like your crush, a friend, or anyone without revealing who you are. Built with Laravel, it is a playful way to connect with people secretly and see how they respond.",
    techStack: ["Laravel", "React", "InertiaJS"],
    imageUrl: "/images/ai-generator.jpg",
    liveUrl: "https://example.com/ai-generator",
    featured: true,
  },
  {
    title: "PacMan Multiplayer",
    description:
      "A real-time, browser-based Pacman game built with NodeJS, Express, and SocketIO. It supports multiplayer gameplay where players can join and compete in a shared game world, communicating live through WebSocket connections.",
    techStack: ["Javascript", "SocketIO", "HTML", "CSS"],
    imageUrl: "/images/ai-generator.jpg",
    liveUrl: "https://example.com/ai-generator",
    featured: true,
  },
];
