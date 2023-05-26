import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home';
import Sidebar from "./components/Sidebar/Sidebar";
import Explore from "./pages/Explore/Explore";
import Navigation from "./components/Navigation/Navigation";
import Search from "./pages/Search/Search";
import Settings from './pages/Settings/Settings';
import Favorites from "./pages/Favorites/Favorites";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar/>
      <div className="outlet">
      <div className="sticky-nav">
          <Navigation />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/explore", element: <Explore /> },
      { path: "/search", element: <Search />},
      { path: "/settings", element: <Settings />},
      { path: "/favorites", element: <Favorites />}
    ],
  },
]);

function App() {
  
  return <RouterProvider router={router} />;
}

export default App;
