import React from "react";
import ReactDOM from "react-dom/client";
//import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";
import "./assets/fonts/Roboto-Regular.ttf";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import PrivacyNote from "./pages/PrivacyNote.tsx";
import English from "./pages/English.tsx";

//* Here I created the router, router and special package to configure
//*routes statically (it's impossible to generate purely dynamic routes on a server)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

    {
    path: "/english",
    element: <English />,
  },

  {
    path: "/privacynote",
    element: <PrivacyNote />,
  },

  {
    path: "/notfoundpage",
    element: <NotFoundPage />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
