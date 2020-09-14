import React from 'react';
//added switch
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Container } from "react-bootstrap";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
//for auth0
import { NavBar, Footer } from "./auth";
import { Home, Profile, WelcomePage } from "./views";
import "./App.css";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">

      <NavBar  />

      <Container className="navbar">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/welcomepage" component={WelcomePage} />
          
          <Route path="/chat" component={Chat} />

        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

//old
// const App = () => (
//   <Router>
//     <Route path="/" exact component={Join} />
//     <Route path="/chat" component={Chat} />
//   </Router>
// );


export default App;
