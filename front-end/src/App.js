import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import './Main.scss'


import Navbar from "./components/Navbar";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import PublicProfile from "./components/PublicProfile";
import PrivateProfile from "./components/PrivateProfile";
import CreateDeed from "./components/CreateDeed";
import DeedDetail from "./components/DeedDetail";
import LogoutButton from "./components/Auth0/LogoutButton";
import Profile from "./components/Auth0/Profile";
import AvailableGd from "./components/AvailableGd";





const App = () => {
  let query = new URLSearchParams(window.location.search);
  console.log(query.entries())
  const {isAuthenticated, isLoading, user, loginWithRedirect} = useAuth0();

  console.log(isAuthenticated, isLoading, user);
  if (!isAuthenticated && !query.get('code')) {
    // return(
    //   <div><button onClick={loginWithRedirect}>Login</button></div>
    // )
    loginWithRedirect()
  }

  


  return (
  
    <Router>
      {/* <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/explore" exact component={Explore} />
      <Route path="/upcoming" exact component={Upcoming} />
      <Route path="/completed" exact component={Completed} />
      <Route path="/ratings" exact component={Ratings} />
      <Route path="/signup_feed" exact component={SignUpFeed} />
      <Route path="/assigned" exact component={Assigned} />
      <Route path="/created_list" exact component={CreatedList} />
      <Route path="/edit_deed" exact component={EditDeed} /> */}
      {/* <div>
        <Link to={"/explore"}> Explore </Link>
        <Link to={"/join"}> Messages </Link>
        <Link to={"/logout"}> Log Out </Link>

      </div> */}
      <Navbar />
      {isAuthenticated &&
        <>
          <Route path="/logout" exact component={LogoutButton} />
          <Route path="/hidden_profile" exact component={Profile} />
          <Route path="/public_profile" exact component={PublicProfile} />
          <Route path="/private_profile" exact component={PrivateProfile} />
          <Route path="/explore" exact component={AvailableGd} />
          <Route path="/create_deed" exact component={CreateDeed} />
          <Route path="/details" exact component={DeedDetail} />
          <Route path="/message" exact component={Join} />
          <Route path="/chat" component={Chat} />
        </>
      }

    </Router>
  )
};





export default App;


//added switch
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import { Container } from "react-bootstrap";



//for auth0
// import { NavBar, Footer } from "./auth";
// import { Home, Profile, WelcomePage } from "./views";
// import "./App.css";

// const App = () => {
//   return (
//     <div id="app" className="d-flex flex-column h-100">

//       <NavBar  />

//       <Container className="navbar">
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/profile" component={Profile} />
//           <Route path="/welcomepage" component={WelcomePage} />
//           <Route path="/chat" component={Chat} />

//         </Switch>
//       </Container>
//       <Footer />
//     </div>
//   );
// };

//old
// const App = () => (
//   <Router>
//     <Route path="/" exact component={Join} />
//     <Route path="/chat" component={Chat} />
//   </Router>
// );