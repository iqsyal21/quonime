import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface previewProps {
  index: number;
  image: string;
  title: string;
  desc: string;
}

const SectionPreview: React.FC<previewProps> = ({ index, image, title, desc }) => {
  return (
    <div className={`${index == 1 ? "bg-base-100" : "bg-base-300"} p-16`}>
      <div className={`flex flex-col ${index == 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <div className="basis-1/2 mb-8 lg:mg-0" data-aos={index == 1 ? "fade-left" : "fade-right"}>
          <img src={image} className="w-[50%] rounded-xl shadow-2xl m-auto" />
        </div>
        <div
          className="basis-1/2 m-auto text-center"
          data-aos={index == 1 ? "fade-right" : "fade-left"}
        >
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="py-6">{desc}</p>
          <Link to="/login">
            <button className="btn btn-outline btn-info mt-16 w-full w-1/2">
              Get Started
              <span>
                <FaArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionPreview;
