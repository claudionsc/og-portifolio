import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./App";
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import PageArt from "./components/pageArt/PageArt";

function ProductUrl() {
  let { id } = useParams();
}

const router =  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/art:id",
          element: <PageArt />
      },
    ],
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
