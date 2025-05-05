import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  className = "",
  centered = false,
}: SectionHeadingProps) => {
  const { elementRef, isInView } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`space-y-4 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="heading text-3xl sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
