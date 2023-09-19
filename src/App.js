import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./style.scss";
import { AdminLayout } from "./pages/admin/layout";
import { User } from "./pages/admin/pages/user";
import { Donate } from "./pages/admin/pages/donate";
import { Donate2 } from "./pages/donate2";
import Feedback1 from "./pages/Feedback1";
import Feedback2 from "./pages/Feedback2";
import Feedback3 from "./pages/Feedback3";
import AppWorks from "./pages/works";
import Chat from "./pages/chat";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/t",
        element: <AppWorks />,
      },
      {
        path: "/post/1",
        element: <Feedback />,
      },
      {
        path: "/post/2",
        element: <Feedback1 />,
      },
      {
        path: "/post/3",
        element: <Feedback2 />,
      },
      {
        path: "/post/4",
        element: <Feedback3 />,
      },
      {
        path: "/donate2",
        element: <Donate2 />,
      },
      {
        path: "/lienhe",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/users",
        element: <User />,
      },
      {
        path: "/admin/donate",
        element: <Donate />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
