import React from "react";

interface Genre {
  id: number;
  name: string;
}

interface scheduleTableProps {
  id: number;
  url: string;
  image: any;
  title: string;
  aired: any;
  genres: Genre[];
  episodes: number;
  score: number;
}

const ScheduleTable: React.FC<scheduleTableProps> = ({
  id,
  url,
  image,
  title,
  aired,
  genres,
  episodes,
  score,
}) => {
  return (
    <tr className="hover">
      <th>{id}</th>
      <td>
        <a href={url} target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
          <div className="flex flex-col lg:flex-row items-center">
            <img src={image.webp.image_url} alt={title} /> <span className="lg:ml-8">{title}</span>
          </div>
        </a>
      </td>
      <td>{aired.string}</td>
      <td>{genres.map((genre) => genre.name).join(", ")}</td>
      <td>{episodes}</td>
      <td>{score}</td>
    </tr>
  );
};

export default ScheduleTable;
