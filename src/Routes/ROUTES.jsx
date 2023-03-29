import Home from "../Pages/Home/Home";

export const RoutePathes = Object.freeze({
  Home: "/",
  New: "/new",
  Popular: "/popular",
  Trending: "/trending",
  Categories: "/about",
});

const ROUTES = [
  {
    id: "home",
    name: "Home",
    path: RoutePathes.Home,
    Element: Home,
    isHidden: false,
  },
  {
    id: "new",
    name: "New",
    path: RoutePathes.New,
    Element: "",
    isHidden: false,
  },
  {
    id: "popular",
    name: "Popular",
    path: RoutePathes.Popular,
    Element: "",
    isHidden: false,
  },
  {
    id: "trending",
    name: "Trending",
    path: RoutePathes.Trending,
    Element: <></>,
    isHidden: false,
  },
  {
    id: "about",
    name: "About",
    path: RoutePathes.Categories,
    Element: <></>,
    isHidden: false,
  },
];

export default ROUTES;
