import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Sidebar from './components/Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="outlet">
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
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
