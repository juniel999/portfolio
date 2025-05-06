import { useState, useEffect, useContext } from "react";
import { Sun, Moon, Menu, X, Keyboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeStore } from "../store/useThemeStore";
import { useScrollTo } from "../hooks/useScrollTo";
import { useKeyboardShortcut } from "../hooks/useKeyboardShortcut";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { AnnouncementContext } from "../App";
import KeyboardShortcutsModal from "./common/KeyboardShortcutsModal";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isKeyboardShortcutsOpen, setIsKeyboardShortcutsOpen] = useState(false);
  const scrollTo = useScrollTo();
  const scrollDirection = useScrollDirection();
  const { announce } = useContext(AnnouncementContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsKeyboardShortcutsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const navLinks = [
    { href: "about", label: "About", shortcut: "1" },
    { href: "work", label: "Work", shortcut: "2" },
    { href: "contact", label: "Contact", shortcut: "3" },
  ];

  const handleThemeToggle = () => {
    toggleTheme(announce);
  };

  // Theme toggle shortcut (Ctrl + T)
  useKeyboardShortcut({
    key: "t",
    ctrlKey: true,
    callback: handleThemeToggle,
  });

  // Navigation shortcuts (Alt + number)
  navLinks.forEach((link) => {
    useKeyboardShortcut({
      key: link.shortcut,
      altKey: true,
      callback: () => scrollTo(link.href),
    });
  });

  // Keyboard shortcuts modal toggle (Alt + H)
  useKeyboardShortcut({
    key: "h",
    altKey: true,
    callback: () => setIsKeyboardShortcutsOpen((prev) => !prev),
  });

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          y: scrollDirection === "down" && !isMenuOpen ? -100 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm" : ""
        }`}
      >
        <nav className="section-container !py-3 !max-w-6xl">
          <div className="flex items-center justify-between w-full">
            <a
              href="/"
              className="text-2xl font-display font-bold"
              aria-label="Go to homepage"
            >
              hssn.dev
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="link-underline text-sm font-medium group"
                  aria-label={`Go to ${link.label} section (Alt + ${link.shortcut})`}
                >
                  <span>{link.label}</span>
                  <span className="ml-2 text-xs text-gray-400 group-hover:text-primary-500">
                    Alt+{link.shortcut}
                  </span>
                </a>
              ))}
              <button
                onClick={() => setIsKeyboardShortcutsOpen(true)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Show keyboard shortcuts (Alt + H)"
              >
                <Keyboard className="w-5 h-5" />
              </button>
              <button
                onClick={handleThemeToggle}
                className="p-2 pr-12 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode (Ctrl + T)`}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800 md:hidden"
                role="dialog"
                aria-label="Navigation menu"
              >
                <div className="flex flex-col p-4 space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={`#${link.href}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm font-medium"
                      aria-label={`Go to ${link.label} section (Alt + ${link.shortcut})`}
                    >
                      <span>{link.label}</span>
                      <span className="ml-2 text-xs text-gray-400">
                        Alt+{link.shortcut}
                      </span>
                    </a>
                  ))}
                  <button
                    onClick={handleThemeToggle}
                    className="flex items-center gap-2 text-sm font-medium"
                    aria-label={`Switch to ${
                      theme === "dark" ? "light" : "dark"
                    } mode (Ctrl + T)`}
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="w-4 h-4" /> Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4" /> Dark Mode
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      <KeyboardShortcutsModal
        isOpen={isKeyboardShortcutsOpen}
        onClose={() => setIsKeyboardShortcutsOpen(false)}
      />
    </>
  );
};

export default Header;
