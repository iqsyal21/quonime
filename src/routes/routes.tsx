import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../pages/NotFound";
import Quotes from "../pages/dashboard/quotes/Quotes";
import Schedules from "../pages/dashboard/schedules/Schedules";
import Wallpapers from "../pages/dashboard/wallpapers/Wallpapers";
import Layout from "../pages/dashboard/Layout";
import Favorites from "../pages/dashboard/quotes/Favorites";
import Search from "../pages/dashboard/quotes/Search";

const routes = createRoutesFromElements(
  <>
    <Route path="/dashboard" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="quotes" element={<Quotes />} />
      <Route path="quotes/favorite" element={<Favorites />} />
      <Route path="quotes/search" element={<Search />} />
      <Route path="schedules" element={<Schedules />} />
      <Route path="wallpapers" element={<Wallpapers />} />
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </>
);

const router = createBrowserRouter(routes);

export default router;
