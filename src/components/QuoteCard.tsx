import React, { useEffect, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { quote } from "../lib/definitions";

interface quoteProps {
  id: number;
  quote: string;
  anime: string;
  character: string;
  handleLike: any;
  handleDelete: any;
  listSavedQuotes: Array<quote>;
}

const QuoteCard: React.FC<quoteProps> = ({
  id,
  quote,
  anime,
  character,
  handleLike,
  handleDelete,
  listSavedQuotes,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const colors = ["info", "success", "warning", "error", "accent"];
  const randomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  const backgroundColorClass = randomColor();

  const checkId = () => {
    const findSavedQuotes = listSavedQuotes.find((item: any) => item.id === id);

    if (findSavedQuotes) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  };

  const saveQuote = () => {
    setIsSaved(true);
    handleLike({ id, quote, anime, character });
  };

  const deleteQuote = () => {
    setIsSaved(true);
    handleDelete(id);
  };

  useEffect(() => {
    checkId();
  }, [isSaved]);

  return (
    <div className={`card w-full shadow-xl bg-${backgroundColorClass}`} data-aos="zoom-in">
      <div className="card-body">
        <h2 className="card-title">{anime}</h2>
        <h3>by : {character}</h3>
        <p className="line-clamp-4 hover:line-clamp-none">{quote}</p>
        <div className="card-actions justify-end">
          {isSaved ? (
            <MdFavorite className="text-red-500 text-4xl cursor-pointer" onClick={deleteQuote} />
          ) : (
            <MdFavoriteBorder className="text-4xl cursor-pointer" onClick={saveQuote} />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
