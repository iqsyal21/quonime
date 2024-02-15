import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <button className="btn btn-outline">Page Not Found</button>
      <Link to="/" className="text-center mt-8">
        <button className="btn btn-ghost">Back to home</button>
      </Link>
    </>
  );
};

export default NotFound;
