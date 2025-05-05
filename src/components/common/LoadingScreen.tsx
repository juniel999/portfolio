import { motion } from "framer-motion";
import Spinner from "./Spinner";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: isLoading ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
      >
        <Spinner size="lg" className="text-primary-500" />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
