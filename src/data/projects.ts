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
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe, featuring a responsive design and real-time inventory management.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "PostgreSQL",
    ],
    imageUrl: "/images/ecommerce.jpg",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    techStack: ["React", "Node.js", "Socket.IO", "MongoDB"],
    imageUrl: "/images/task-app.jpg",
    liveUrl: "https://example.com/task-app",
    githubUrl: "https://github.com/username/task-app",
    featured: true,
  },
  {
    title: "AI Image Generator",
    description:
      "An AI-powered image generation tool that creates unique artwork based on text descriptions.",
    techStack: ["Python", "TensorFlow", "React", "FastAPI"],
    imageUrl: "/images/ai-generator.jpg",
    liveUrl: "https://example.com/ai-generator",
    featured: true,
  },
];
