import { useEffect, useState } from "react";
import { getShcedules } from "../../../lib/api";
import { schedule } from "../../../lib/definitions";
import ScheduleTable from "../../../components/ScheduleTable";
import { scheduleSeason, scheduleYear } from "../../../lib/data";
import ScheduleCard from "../../../components/ScheduleCard";

const Schedules = () => {
  const [schedules, setSchedules] = useState([]);
  const [year, setYear] = useState(2024);
  const [season, setSeason] = useState("winter");

  const fetchSchedules = async () => {
    try {
      const response = await getShcedules(year, season);
      setSchedules(response);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, [year, season]);

  return (
    <div className="bg-base-200 p-4 lg:p-16">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body min-h-screen">
          <div className="flex flex-col lg:flex-row justify-between">
            <h2 className="card-title">Get schedule all seasons</h2>
            <div className="flex flex-col lg:flex-row justify-center">
              <select
                className="select select-bordered w-max mx-auto my-4 lg:my-0 lg:mx-4"
                defaultValue={year}
                onChange={(e: any) => setYear(e.target.value)}
              >
                {scheduleYear.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {scheduleSeason.map((item) => (
                  <button
                    className={`btn btn-outline btn-info ${season == item && "btn-active"}`}
                    onClick={() => setSeason(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center lg:hidden">
            {schedules.map((item: schedule, index) => (
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
                {schedules.map((item: schedule, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Schedules;
