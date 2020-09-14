import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>

  <Auth0Provider
    domain="michaelcadima.us.auth0.com"
    clientId="BxbhuOPMVBUby2nr8gsfYzsBokR1q773"
    // redirectUri={`${window.location.origin}/profile`}
    redirectUri={`${window.location.origin}/`}

  >
    <App />
  </Auth0Provider>
  </Router>,

  document.getElementById("root")
);


// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// //for auth0
// // import { BrowserRouter as Router } from "react-router-dom";
// import Auth0ProviderWithHistory from "./auth0-provider-with-history";

// ReactDOM.render(
//     <Auth0ProviderWithHistory>
//       <App />
//     </Auth0ProviderWithHistory>,
//   document.getElementById("root")
// );


