import { useEffect, useState } from "react";
import { IoReload } from "react-icons/io5";
import { getWallpaperWaifu } from "../../../lib/api";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Wallpapers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [wallpapers, setWallpapers] = useState([]);

  const fetchWallpapers = async () => {
    try {
      const response = await getWallpaperWaifu();
      setWallpapers(response);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleReload = () => {
    setIsLoading(true);
    setWallpapers([]);
    fetchWallpapers();

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    fetchWallpapers();
  }, []);

  return (
    <div className="bg-base-200 p-4 lg:p-16">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body min-h-screen">
          <div className="flex flex-col lg:flex-row justify-between">
            <h2 className="card-title">Select your Wallpaper</h2>
            <button className="btn btn btn-outline mt-8 lg:mt-0" onClick={handleReload}>
              {isLoading ? "Loading" : "Reload"}
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <IoReload className="text-xl" />
              )}
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {wallpapers.slice(0, 20).map((item: string, index) => (
              <div key={index} className="flex items-center" data-aos="zoom-in">
                <a href={item} target="_blank" rel="noopener noreferrer">
                  <LazyLoadImage
                    alt="waifu wallpaper"
                    effect="blur"
                    src={item}
                    threshold={400}
                    placeholder={<div className="skeleton w-32 h-32"></div>}
                    className="w-full lg:w-[80%] py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-xl duration-300"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallpapers;
