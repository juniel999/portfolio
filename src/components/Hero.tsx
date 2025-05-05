import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useScrollTo } from "../hooks/useScrollTo";

const Hero = () => {
  const scrollTo = useScrollTo();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const glowAnimation = {
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.02, 1],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/juniel999", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/junielhusain",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:junielhussain@gmail.com", label: "Email" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <section className="relative min-h-[90vh] pt-14 flex flex-col justify-center items-start overflow-hidden">
      {/* Modern gradient background with blur effect */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          {...glowAnimation}
          className="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-transparent to-primary-50/30 dark:from-primary-900/30 dark:via-transparent dark:to-primary-900/20 backdrop-blur-[1px]"
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200/50 dark:via-primary-800/50 to-transparent" />

        {/* Modern geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-primary-100/20 dark:bg-primary-900/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-primary-50/30 dark:bg-primary-800/10 rounded-full blur-3xl"
          />
        </div>
      </div>

      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl relative"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <motion.div
              className="relative inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span className="relative inline-flex items-center gap-2 pl-3 pr-4 py-2 bg-gradient-to-r from-primary-500/10 via-primary-400/5 to-transparent dark:from-primary-400/10 dark:via-primary-500/5 dark:to-transparent backdrop-blur-sm border-l-2 border-y border-r border-primary-500/50 dark:border-primary-400/50 rounded-lg overflow-hidden group">
                <motion.div
                  animate={{
                    opacity: [1, 0.8, 1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-primary-500/5 dark:bg-primary-400/5 rounded-lg"
                />

                {/* Glitch effect overlay */}
                <motion.div
                  animate={{
                    opacity: [0, 0.05, 0],
                    x: [-2, 0, 2],
                    scaleY: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-primary-500 dark:bg-primary-400 mix-blend-overlay"
                />

                <motion.div
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <motion.span
                    className="font-mono text-xs text-primary-700/70 dark:text-primary-300/70 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ~/status $
                  </motion.span>
                  <motion.span
                    className="font-medium text-sm bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-300 dark:to-primary-500 bg-clip-text text-transparent"
                    animate={{
                      x: [-0.5, 0.5, -0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    innovating_through_code.sh
                  </motion.span>
                </motion.div>
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-6 text-5xl sm:text-6xl md:text-7xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary-800 to-gray-600 dark:from-white dark:via-primary-300 dark:to-gray-400"
          >
            @hssn.dev
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Hi, I'm Juniel Husain👋. A Full-Stack Developer passionate about
            building innovative digital experiences with clean code and
            intuitive design.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a
              href="#work"
              onClick={(e) => handleNavClick(e, "work")}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-2xl font-semibold shadow-lg shadow-primary-500/25 transition-all hover:shadow-xl hover:shadow-primary-500/30 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <motion.span
                className="relative z-10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 px-8 py-3.5 rounded-2xl font-semibold shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 transition-all hover:shadow-xl border border-gray-100 dark:border-gray-700"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  color: "var(--tw-colors-primary-500)",
                }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modern scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Scroll to explore
          </span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-primary-200 dark:border-primary-800 rounded-full p-1"
          >
            <motion.div
              className="w-1.5 h-1.5 bg-primary-500 rounded-full mx-auto"
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
