import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import SectionHeading from "./common/SectionHeading";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Contact = () => {
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
    <section id="contact" className="pb-20">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          ref={elementRef}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              title="Let's Connect"
              subtitle="Have an exciting project or opportunity? I'd love to hear about it!"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-col items-center gap-8"
          >
            <motion.a
              variants={itemVariants}
              href="mailto:hello@example.com"
              className="flex items-center gap-3 text-lg hover:text-primary-500 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span className="link-underline">junielhussain@gmail.com</span>
            </motion.a>

            <motion.div
              variants={itemVariants}
              className="flex gap-6 items-center"
            >
              <a
                href="https://linkedin.com/in/junielhussain"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/juniel999"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:text-primary-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
