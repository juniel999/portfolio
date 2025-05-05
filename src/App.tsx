import { useEffect, useState, createContext } from "react";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore";
import { useAnnouncement } from "./hooks/useAnnouncement";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/common/LoadingScreen";
import SkipToContent from "./components/common/SkipToContent";
import Announcement from "./components/common/Announcement";
import "./App.css";

export const AnnouncementContext = createContext<{
  announce: (message: string, assertive?: boolean) => void;
}>({
  announce: () => {},
});

function App() {
  const { theme } = useThemeStore();
  const [isLoading, setIsLoading] = useState(true);
  const { message, assertive, announce } = useAnnouncement();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    // Simulate initial content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnnouncementContext.Provider value={{ announce }}>
      <LoadingScreen isLoading={isLoading} />
      <SkipToContent />
      <Announcement message={message} assertive={assertive} />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className:
            "!bg-white dark:!bg-gray-800 !text-gray-900 dark:!text-white",
          duration: 5000,
          style: {
            padding: "16px",
            borderRadius: "8px",
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          },
        }}
      />
    </AnnouncementContext.Provider>
  );
}

export default App;
