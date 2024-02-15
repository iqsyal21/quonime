import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import NotFoundGif from "../assets/images/notfound.gif";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full lg:w-1/2 p-8">
        <img src={NotFoundGif} alt="not found image" className="w-full" />
        <button className="btn btn-outline btn-warning w-full mt-8" onClick={() => navigate(-1)}>
          <span>
            <MdArrowBack />
          </span>
          Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
