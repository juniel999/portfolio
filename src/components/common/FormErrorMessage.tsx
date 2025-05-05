import { motion } from "framer-motion";
import { useEffect, useContext } from "react";
import { AnnouncementContext } from "../../App";

interface FormErrorMessageProps {
  message: string;
  id: string;
}

const FormErrorMessage = ({ message, id }: FormErrorMessageProps) => {
  const { announce } = useContext(AnnouncementContext);

  useEffect(() => {
    if (message) {
      announce(`Error in form: ${message}`, true);
    }
  }, [message, announce]);

  return (
    <motion.p
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="mt-1 text-sm text-red-500"
      id={id}
    >
      {message}
    </motion.p>
  );
};

export default FormErrorMessage;
