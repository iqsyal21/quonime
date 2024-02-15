import React from "react";
import { IconType } from "react-icons/lib";

interface featuresProps {
  index: number;
  icon: IconType;
  title: string;
  desc: string;
}

const SectionFeatures: React.FC<featuresProps> = ({ index, icon: Icon, title, desc }) => {
  const filterAos = (indexValue: number) => {
    switch (indexValue) {
      case 0:
        return "fade-down-right";
      case 1:
        return "fade-down";
      case 2:
        return "fade-down-left";
      default:
        break;
    }
  };

  return (
    <div className="basis-1/3 px-16 py-8" data-aos={filterAos(index)}>
      <Icon className="text-3xl m-auto" />
      <h3 className="text-lg lg:text-2xl my-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default SectionFeatures;
