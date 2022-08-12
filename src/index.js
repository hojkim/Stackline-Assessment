import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Redux code (Still a beginner, I was unable to figure out how to implement redux for fetching data)
// import { store } from "./app/store";
// import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      {/* Redux Code
      <Provider store={store}>
         <App />
      </Provider> */}
      <App />
   </React.StrictMode>
);
