import React from "react";

import { FaStar } from "react-icons/fa";
interface scheduleTableProps {
  url: string;
  image: any;
  title: string;
  aired: any;
  episodes: number;
  score: number;
}

const ScheduleCard: React.FC<scheduleTableProps> = ({
  url,
  image,
  title,
  aired,
  episodes,
  score,
}) => {
  return (
    <div className="flex flex-col">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image.webp.image_url} alt="tes" className="w-full" />
        <div className="bg-neutral w-full p-1 text-white">
          <h5 className="font-bold line-clamp-1 hover:line-clamp-none">{title}</h5>
          <p className="line-clamp-1 hover:line-clamp-none">{aired.string}</p>
          <p>{episodes}</p>
          <p className="inline-flex items-center line-clamp-1 hover:line-clamp-none">
            <FaStar className="text-warning mr-1" />
            {score}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ScheduleCard;
