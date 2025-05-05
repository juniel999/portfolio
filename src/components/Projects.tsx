import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Icon } from "@iconify/react";
import { projects } from "../data/projects";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import SectionHeading from "./common/SectionHeading";

const Projects = () => {
  const { elementRef, isInView } = useIntersectionObserver({
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="work" className="pb-20 max-w-5xl mx-auto">
      <div className="section-container">
        <motion.div
          ref={elementRef}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <SectionHeading
            title="Works"
            subtitle="A collection of projects I've built to solve real-world problems."
          />

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {projects
              .filter((project) => project.featured)
              .slice(0, 4)
              .map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col justify-between p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:border-primary-500/20 transition-all duration-300"
                >
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800 dark:text-gray-400 mb-2">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary-500 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary-500 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {project.description.split(".")[0]}.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.techStack.map((tech) => {
                        const iconMapping: { [key: string]: string } = {
                          "Next.js": "logos:nextjs-icon",
                          TypeScript: "logos:typescript-icon",
                          "Tailwind CSS": "logos:tailwindcss-icon",
                          PostgreSQL: "logos:postgresql",
                          React: "logos:react",
                          "Node.js": "logos:nodejs-icon",
                          "Socket.IO": "logos:socket-io",
                          MongoDB: "logos:mongodb-icon",
                          Angular: "logos:angular-icon",
                          NestJS: "logos:nestjs",
                          Laravel: "logos:laravel",
                          InertiaJS: "simple-icons:inertia",
                          Javascript: "logos:javascript",
                          HTML: "logos:html-5",
                          CSS: "logos:css-3",
                          SocketIO: "logos:socket-io",
                        };

                        return (
                          <motion.div
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800"
                            title={tech}
                          >
                            {iconMapping[tech] && (
                              <Icon
                                icon={iconMapping[tech]}
                                className="w-3 h-3"
                              />
                            )}
                            <span>{tech}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <motion.a
              whileHover={{ x: 5 }}
              className="text-sm text-gray-500 hover:text-primary-500 transition-colors inline-flex items-center gap-2"
              href="#"
            >
              See all projects
              <motion.span>→</motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
