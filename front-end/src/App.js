import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

import Login from "./components/Auth0/Login";
import LogoutButton from "./components/Auth0/LogoutButton";
import Profile from "./components/Auth0/Profile";
import Explore from "./components/Explore";





const App = () => {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    <Router>
      {/* <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/private_profile" exact component={PrivateProfile} />
      <Route path="/public_profile" exact component={PublicProfile} />
      <Route path="/explore" exact component={Explore} />
      <Route path="/upcoming" exact component={Upcoming} />
      <Route path="/completed" exact component={Completed} />
      <Route path="/ratings" exact component={Ratings} />
      <Route path="/signup_feed" exact component={SignUpFeed} />
      <Route path="/details" exact component={Details} />
      <Route path="/assigned" exact component={Assigned} />
      <Route path="/created_list" exact component={CreatedList} />
      <Route path="/create_deed" exact component={CreateDeed} />
      <Route path="/edit_deed" exact component={EditDeed} /> */}
      {!isAuthenticated &&
        <Route path="/" component={Login} />
      }
      {isAuthenticated &&
        <>
          <Route path="/logout" exact component={LogoutButton} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/explore" exact component={Explore} />
          <Route path="/join" exact component={Join} />
          <Route path="/chat" component={Chat} />
        </>
      }

    </Router>
  )
};


export default App;
