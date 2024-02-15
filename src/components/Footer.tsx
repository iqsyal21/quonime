import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer p-10 bg-neutral text-neutral-content items-center justify-center">
      <span className="inline-flex text-lg items-center hover:cursor-pointer" onClick={scrollToTop}>
        back to top <FaArrowUp />
      </span>
    </footer>
  );
};

export default Footer;
