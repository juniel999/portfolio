import { motion } from "framer-motion";
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
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <SectionHeading
              title="About Me"
              subtitle="I'm a passionate full-stack developer with a keen eye for design and a strong focus on creating exceptional user experiences."
            />
            <motion.div
              variants={containerVariants}
              className="space-y-4 text-gray-600 dark:text-gray-300"
            >
              <motion.p variants={itemVariants}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt maxime sequi, repellendus tenetur repudiandae corporis?
              </motion.p>
              <motion.p variants={itemVariants}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                velit!
              </motion.p>
            </motion.div>
          </div>

          <motion.div variants={containerVariants} className="space-y-8">
            {techStack.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      style={{
                        borderLeft: `3px solid ${skill.color}`,
                      }}
                    >
                      {skill.name}
                    </motion.span>
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
