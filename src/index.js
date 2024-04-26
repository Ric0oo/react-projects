import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Fetch from "./components/Fetch";
// import DynamicData from "./components/DynamicData";
// import JSON from "./components/JSON";
// import Rest from "./components/Rest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <DynamicData /> */}
    {/* <JSON /> */}
    {/* <Rest /> */}
    <Fetch />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
