import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";
import SectionHeading from "./common/SectionHeading";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Projects = () => {
  const { elementRef, isInView } = useIntersectionObserver({
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="work" className="pb-20 max-w-5xl mx-auto">
      <div className="section-container">
        <motion.div
          ref={elementRef}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          <SectionHeading
            title="Featured Projects"
            subtitle="Here are some of my recent projects that showcase my skills and experience in building modern web applications."
            centered
          />

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={projectVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                  {/* Replace with actual image when available */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    [Project Image]
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 transition-opacity"
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="View Source Code"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                    )}
                  </motion.div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
