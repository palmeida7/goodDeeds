import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="yim.us.auth0.com"
    clientId="E9FDh3Hc3Mfz24zdTYKYX4pbrF677jhA"
    redirectUri={`${window.location.origin}/profile`}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);