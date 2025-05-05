import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Code2, Briefcase, UserCircle2, ExternalLink } from "lucide-react";
import { techStack } from "../data/techStack";
import SectionHeading from "./common/SectionHeading";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const About = () => {
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
    <section id="about" className="pb-20 max-w-5xl mx-auto">
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          ref={elementRef}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-8">
            <SectionHeading
              title="About Me"
              subtitle="Crafting digital experiences that merge creativity with technical excellence."
            />
            <motion.div
              variants={containerVariants}
              className="space-y-6 text-gray-600 dark:text-gray-300"
            >
              <motion.div variants={itemVariants} className="flex gap-3 group">
                <UserCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  Angular specialist bringing designs to life with pixel-perfect
                  precision. Building exceptional web experiences that work for
                  everyone.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex gap-3 group">
                <Briefcase className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  Full-stack innovator crafting robust APIs and scalable
                  architectures. Turning complex problems into elegant
                  solutions.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex gap-3 group">
                <Code2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  DevOps enthusiast championing automated workflows and clean
                  code. Always learning, always improving.
                </p>
              </motion.div>
            </motion.div>

            <motion.a
              href="/path-to-your-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500/10 hover:bg-primary-500/20 dark:bg-primary-500/5 dark:hover:bg-primary-500/10 rounded-xl font-medium transition-all group"
            >
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                View Full Resume
              </span>
              <ExternalLink className="w-4 h-4 text-primary-500 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

          <motion.div variants={containerVariants} className="space-y-8">
            {techStack.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-gray-100 dark:border-gray-700 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-primary-500/5 group-hover:to-transparent transition-all" />
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1"
                        style={{ backgroundColor: skill.color }}
                      />
                      <div className="relative flex items-center gap-3">
                        <Icon
                          icon={skill.icon}
                          className="w-5 h-5"
                          style={{ color: skill.color }}
                        />
                        <span className="group-hover:text-primary-500 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
