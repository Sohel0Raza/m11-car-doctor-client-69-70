import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes.jsx";
import Authprovider from "./providers/Authprovider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-6xl mx-auto">
    <React.StrictMode>
   <Authprovider>
   <RouterProvider router={Routes} />
   </Authprovider>
  </React.StrictMode>
  </div>
);
