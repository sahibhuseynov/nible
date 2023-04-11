import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home';
import Sidebar from "./components/Sidebar/Sidebar";
import Explore from "./pages/Explore/Explore";
import Navigation from "./components/Navigation/Navigation";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar/>
      <div className="outlet">
        <Navigation />
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
