import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Helmet } from "react-helmet";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v10.0"
        nonce="7H3JUWJy"
      >
        </script>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
