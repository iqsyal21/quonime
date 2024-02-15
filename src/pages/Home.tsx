import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ba2 from "../assets/images/ba2.png";
import sakura from "../assets/icons/sakura.png";
import { sectionFeaturesList, sectionPreviewList } from "../lib/data";
import SectionFeatures from "../components/SectionFeatures";
import SectionPreview from "../components/SectionPreview";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <main>
        <section
          className="hero"
          style={{
            backgroundImage: `url(${ba2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content my-16" data-aos="zoom-in">
            <div className="flex flex-col lg:flex-row">
              <div className="flex items-center justify-center">
                <img
                  src={sakura}
                  alt="Sakura leaf"
                  className="w-24 mb-8 lg:mb-0 lg:mr-16 spinFlowerLeft"
                />
              </div>
              <div className="mb-8">
                <h1 className="text-5xl lg:text-9xl font-bold">Welcome</h1>
                <h1 className="text-3xl lg:text-7xl font-bold">to QuoNime</h1>
                <Link to="/login">
                  <button className="btn btn-outline btn-neutral text-white mt-16 w-full w-1/2">
                    Get Started
                    <span>
                      <FaArrowRight />
                    </span>
                  </button>
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={sakura}
                  alt="Sakura leaf"
                  className="w-24 mb-8 lg:mb-0 lg:ml-16 spinFlowerRight"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-base-100 text-center py-8">
          <h2 className="text-4xl" data-aos="fade-down">
            Our Features
          </h2>
          <div className="flex flex-col lg:flex-row justify-around mt-8">
            {sectionFeaturesList.map((item, index) => (
              <SectionFeatures
                key={index}
                index={index}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
            {/*
              <h3 className="text-lg lg:text-2xl my-2">Wallpapers "waifu.pics"</h3>*/}
          </div>
        </section>
        <section>
          {sectionPreviewList.map((item, index) => (
            <SectionPreview
              key={index}
              index={index}
              image={item.image}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
