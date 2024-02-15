import { useEffect, useState } from "react";
import { IoReload } from "react-icons/io5";
import { quote } from "../../../lib/definitions";
import QuoteCard from "../../../components/QuoteCard";
import { MdArrowBack, MdOutlineSearch } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const getSavedQuotes = async () => {
    const storedQuotes = JSON.parse(localStorage.getItem("likedQuotes") || "[]");
    setQuotes(storedQuotes);
  };

  const handleReload = () => {
    setIsLoading(true);
    setQuotes([]);
    getSavedQuotes();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleDelete = (id: number) => {
    const storedQuotes: any = quotes;
    const filterQuotes = storedQuotes.filter((item: { id: number }) => item.id !== id);

    setQuotes(filterQuotes);
    localStorage.setItem("likedQuotes", JSON.stringify(filterQuotes));
  };

  useEffect(() => {
    getSavedQuotes();
  }, []);

  return (
    <div className="bg-base-200 p-4 lg:p-16">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body min-h-screen">
          <div className="flex flex-col lg:flex-row justify-between">
            <h2 className="card-title">Get favorite quote</h2>
            <div className="flex justify-between mt-8 lg:mt-0">
              <button className="btn btn-outline btn-warning" onClick={() => navigate(-1)}>
                Back
                <span>
                  <MdArrowBack className="text-xl" />
                </span>
              </button>
              <Link to="/dashboard/quotes/search">
                <button className="btn btn-outline btn-info lg:mx-4">
                  Search
                  <span>
                    <MdOutlineSearch className="text-xl" />
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
                    handleLike={null}
                    handleDelete={handleDelete}
                    listSavedQuotes={quotes}
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

export default Favorites;
