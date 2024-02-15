import React from "react";

interface quoteProps {
  index: number;
  id: number;
  quote: string;
  anime: string;
  character: string;
}

const QuoteBubble: React.FC<quoteProps> = ({ index, id, quote, anime, character }) => {
  const getColorBubble = () => {
    const randomIndex = Math.floor(Math.random() * 5);
    const classNames = ["info", "success", "warning", "error", "accent"];
    return `chat-bubble chat-bubble-${classNames[randomIndex]}`;
  };

  return (
    <div className={`chat ${index % 2 == 0 ? "chat-end" : "chat-start"} lg:m-8 `}>
      <div className={getColorBubble()}>
        <p>{quote}</p>
        <p className="mt-4">{`${character} ~ ${anime}`}</p>
      </div>
    </div>
  );
};

export default QuoteBubble;
