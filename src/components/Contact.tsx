import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send, Linkedin, Github } from "lucide-react";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AnnouncementContext } from "../App";
import SectionHeading from "./common/SectionHeading";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLoadingState } from "../hooks/useLoadingState";
import Spinner from "./common/Spinner";
import FormErrorMessage from "./common/FormErrorMessage";
import { AnimatePresence } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { elementRef, isInView } = useIntersectionObserver({
    threshold: 0.2,
  });

  const { isLoading, withLoading } = useLoadingState();
  const { announce } = useContext(AnnouncementContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    await withLoading(async () => {
      try {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted:", data);
        reset();

        const successMessage =
          "Message sent successfully! I'll get back to you soon.";
        toast.success(successMessage);
        announce(successMessage, true);
      } catch (error) {
        const errorMessage = "Failed to send message. Please try again later.";
        toast.error(errorMessage);
        announce(errorMessage, true);
        console.error("Form submission error:", error);
      }
    });
  };

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
    <section id="contact" className="pb-20 max-w-5xl mx-auto">
      <div className="section-container">
        <motion.div
          ref={elementRef}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <SectionHeading
              title="Get in Touch"
              subtitle="Have a project in mind or just want to chat? Feel free to reach out!"
            />

            <motion.div variants={containerVariants} className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <Mail className="w-5 h-5 text-primary-500" />
                <a href="mailto:hello@example.com" className="link-underline">
                  hello@example.com
                </a>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-primary-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-primary-500 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
              aria-label="Contact form"
            >
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={!!errors.name}
                />
                <AnimatePresence>
                  {errors.name && (
                    <FormErrorMessage
                      message={errors.name.message || ""}
                      id="name-error"
                    />
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                />
                <AnimatePresence>
                  {errors.email && (
                    <FormErrorMessage
                      message={errors.email.message || ""}
                      id="email-error"
                    />
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  aria-invalid={!!errors.message}
                />
                <AnimatePresence>
                  {errors.message && (
                    <FormErrorMessage
                      message={errors.message.message || ""}
                      id="message-error"
                    />
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={isLoading ? "Sending message..." : "Send message"}
              >
                {isLoading ? (
                  <>
                    <Spinner size="sm" className="text-white" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
