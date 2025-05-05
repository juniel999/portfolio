import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SkipToContent = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <AnimatePresence>
      {isFocused && (
        <motion.a
          href="#main-content"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-4 left-4 z-[100] bg-primary-500 text-white px-4 py-2 rounded-lg focus:outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          Skip to main content
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default SkipToContent;
