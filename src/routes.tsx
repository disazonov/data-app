import { Route, Routes } from "react-router-dom";
import Home from "./javascript/Components/Home";
import Page1 from "./javascript/Components/Page1";
import Page2 from "./javascript/Components/Page2";

const routes = [
  {
    path: "/",
    label: "Home",
    element: <Home />,
  },
  {
    path: "/page1",
    label: "Page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    label: "Page 2",
    element: <Page2 />,
  },
];

export default function RouteConfig() {
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route key={i} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
