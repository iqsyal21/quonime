import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import BA1 from "../../assets/images/ba1.png";
import { getAnimeScheduleNow, getRandomQuote, getWallpaperWaifu } from "../../lib/api";
import QuoteBubble from "../../components/QuoteBubble";
import { quote, schedule } from "../../lib/definitions";
import ScheduleTable from "../../components/ScheduleTable";
import Hero from "../../components/Hero";
import ScheduleCard from "../../components/ScheduleCard";

const Dashboard = () => {
  const [quotes, setQuotes] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [wallpapers, setWallpapers] = useState([]);

  const fetchQuotes = async () => {
    try {
      const response = await getRandomQuote();
      setQuotes(response);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const fetchSchedules = async () => {
    try {
      const response = await getAnimeScheduleNow();
      setSchedules(response);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const fetchWallpapers = async () => {
    try {
      const response = await getWallpaperWaifu();
      setWallpapers(response);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchQuotes();
    fetchSchedules();
    fetchWallpapers();
  }, []);

  return (
    <div>
      <header>
        <Hero />
      </header>
      <main
        className="p-4 lg:p-32"
        style={{ backgroundImage: `url(${BA1})`, backgroundPosition: "center" }}
      >
        <section>
          <div className="collapse collapse-arrow bg-base-100 my-8 lg:p-4">
            <input type="checkbox" defaultChecked={true} />
            <div className="collapse-title text-xl font-medium">Anime Quotes</div>
            <div className="collapse-content">
              {quotes.slice(0, 3).map((item: quote, index) => (
                <QuoteBubble
                  key={item.id}
                  index={index}
                  id={item.id}
                  quote={item.quote}
                  anime={item.anime}
                  character={item.character}
                />
              ))}
              <Link to="quotes">
                <div className="w-full inline-flex justify-center mt-8">
                  <button className="btn btn-outline btn-warning w-1/2">Explore</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="collapse collapse-arrow bg-base-100 my-8 lg:p-4">
            <input type="checkbox" defaultChecked={true} />
            <div className="collapse-title text-xl font-medium">Anime Schedules</div>
            <div className="collapse-content overflow-auto">
              <div className="grid grid-cols-2 gap-4 items-center lg:hidden">
                {schedules.slice(0, 4).map((item: schedule, index) => (
                  <ScheduleCard
                    key={index}
                    url={item.url}
                    image={item.images}
                    title={item.title}
                    aired={item.aired}
                    episodes={item.episodes}
                    score={item.score}
                  />
                ))}
              </div>
              <div className="hidden lg:block overflow-x-auto lg:m-8">
                <table className="table border border-blue-500 ">
                  <thead className="bg-blue-500 text-white">
                    <tr>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Date</th>
                      <th>Genres</th>
                      <th>Episodes</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedules.slice(0, 3).map((item: schedule, index) => (
                      <ScheduleTable
                        key={index}
                        id={item.mal_id}
                        url={item.url}
                        image={item.images}
                        title={item.title}
                        aired={item.aired}
                        genres={item.genres}
                        episodes={item.episodes}
                        score={item.score}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <Link to="schedules">
                <div className="w-full inline-flex justify-center mt-8">
                  <button className="btn btn-outline btn-info w-1/2">Explore</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="collapse collapse-arrow bg-base-100 my-8 lg:p-4">
            <input type="checkbox" defaultChecked={true} />
            <div className="collapse-title text-xl font-medium">Anime Wallpapers</div>
            <div className="collapse-content">
              <div className="flex flex-col md:flex-row items-center justify-center lg:m-8">
                {wallpapers.slice(0, 3).map((item: string, index) => (
                  <div key={index} className="basis-1/3">
                    <LazyLoadImage
                      alt="waifu wallpaper"
                      effect="blur"
                      src={item}
                      className="w-[80%] m-auto p-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-xl duration-300"
                    />
                  </div>
                ))}
              </div>
              <Link to="wallpapers">
                <div className="w-full inline-flex justify-center mt-8">
                  <button className="btn btn-outline btn-accent w-1/2">Explore</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
