import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate, Outlet } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = sessionStorage.getItem("token");
    if (!getToken) {
      navigate("/login");
    }

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
