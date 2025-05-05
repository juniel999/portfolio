const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="section-container">
        <div className="flex items-center w-full justify-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Juniel Husain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
