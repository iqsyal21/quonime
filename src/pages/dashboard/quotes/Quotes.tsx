import { useEffect, useState } from "react";
import { IoReload } from "react-icons/io5";
import { getRandomQuote } from "../../../lib/api";
import { quote } from "../../../lib/definitions";
import QuoteCard from "../../../components/QuoteCard";
import { MdFavorite, MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const Quotes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [listSavedQuotes, setListSavedQuotes] = useState([]);

  const fetchQuotes = async () => {
    try {
      const response = await getRandomQuote();
      setQuotes(response);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleReload = () => {
    setIsLoading(true);
    setQuotes([]);
    fetchQuotes();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleLike = (newQoute: quote) => {
    const storedQuotes: any = listSavedQuotes;
    const filterQuotes = storedQuotes.filter((item: { id: number }) => item.id !== newQoute.id);

    const updatedSavedQuotes: any = [...filterQuotes, newQoute];
    setListSavedQuotes(updatedSavedQuotes);
    localStorage.setItem("likedQuotes", JSON.stringify(updatedSavedQuotes));
  };

  const handleDelete = (id: number) => {
    const newSavedQuotes = listSavedQuotes.filter((item: { id: number }) => item.id !== id);
    setListSavedQuotes(newSavedQuotes);
    localStorage.setItem("likedQuotes", JSON.stringify(newSavedQuotes));

    const newListQuotes: any = quotes.filter((item: { id: number }) => item.id !== id);
    setQuotes(newListQuotes);
  };

  useEffect(() => {
    fetchQuotes();

    const storedQuotes = JSON.parse(localStorage.getItem("likedQuotes") || "[]");
    setListSavedQuotes(storedQuotes);
  }, []);

  return (
    <div className="bg-base-200 p-4 lg:p-16">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body min-h-screen">
          <div className="flex flex-col lg:flex-row justify-between">
            <h2 className="card-title">Get favorite quote</h2>
            <div className="flex justify-between mt-8 lg:mt-0">
              <Link to="search">
                <button className="btn btn-outline btn-info">
                  Search
                  <span>
                    <MdOutlineSearch className="text-xl" />
                  </span>
                </button>
              </Link>
              <Link to="favorite">
                <button className="btn btn-outline btn-info lg:mx-4">
                  Favorite
                  <span>
                    <MdFavorite />
                  </span>
                </button>
              </Link>
              <button className="btn btn btn-outline" onClick={handleReload}>
                {isLoading ? "Loading" : "Reload"}
                {isLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  <IoReload className="text-xl" />
                )}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
            {quotes.length > 0 ? (
              <>
                {quotes.map((item: quote) => (
                  <QuoteCard
                    key={item.id}
                    id={item.id}
                    quote={item.quote}
                    anime={item.anime}
                    character={item.character}
                    handleLike={handleLike}
                    handleDelete={handleDelete}
                    listSavedQuotes={listSavedQuotes}
                  />
                ))}
              </>
            ) : (
              <>
                <h3 className="text-2xl">No data found</h3>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
