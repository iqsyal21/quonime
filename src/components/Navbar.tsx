import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="flex-none flex lg:hidden">
          <div className="drawer relative z-10">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu p-4 w-80 min-h-full bg-base-100 text-base-content justify-between">
                <div className="text-center">
                  <Link to="/dashboard" className="text-center">
                    <span className="btn btn-ghost text-xl">QuoNime</span>
                  </Link>
                  <ul className="menu menu-vertical mt-4">
                    <li>
                      <Link to="/dashboard">Home</Link>
                    </li>
                    <li>
                      <Link to="quotes">Quotes</Link>
                    </li>
                    <li>
                      <Link to="schedules">Schedules</Link>
                    </li>
                    <li>
                      <Link to="wallpapers">Wallpapers</Link>
                    </li>
                  </ul>
                </div>
                <Link to="/">
                  <button className="btn btn-error w-full" onClick={() => sessionStorage.clear()}>
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Link to="/dashboard">
            <span className="btn btn-ghost text-xl">QuoNime</span>
          </Link>
        </div>
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            <li>
              <Link to="quotes">Quotes</Link>
            </li>
            <li>
              <Link to="schedules">Schedules</Link>
            </li>
            <li>
              <Link to="wallpapers">Wallpapers</Link>
            </li>
          </ul>
          <Link to="/">
            <button className="btn btn-error" onClick={() => sessionStorage.clear()}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
