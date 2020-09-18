import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <Auth0Provider
    domain="yim.us.auth0.com"
    clientId="E9FDh3Hc3Mfz24zdTYKYX4pbrF677jhA"
    redirectUri={`${window.location.origin}/sign_in`}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(
//   <Router>

//   <Auth0Provider
//     domain="michaelcadima.us.auth0.com"
//     clientId="BxbhuOPMVBUby2nr8gsfYzsBokR1q773"
//     // redirectUri={`${window.location.origin}/profile`}
//     redirectUri={`${window.location.origin}/`}

//   >
//     <App />
//   </Auth0Provider>
//   </Router>,

//   document.getElementById("root")
// );



