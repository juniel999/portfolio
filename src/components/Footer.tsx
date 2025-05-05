import { Heart } from "lucide-react";
import { useScrollTo } from "../hooks/useScrollTo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollTo = useScrollTo();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <footer>
      <div className="section-container">
        <div className="flex items-center w-full justify-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
