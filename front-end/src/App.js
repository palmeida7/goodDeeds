import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import './Main.scss'

import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import PublicProfile from "./components/PublicProfile";
import PrivateProfile from "./components/PrivateProfile";
import CreateDeed from "./components/CreateDeed";
import DeedAssigned from "./components/DeedAssigned";
import DeedDetail from "./components/DeedDetail";
import LogoutButton from "./components/Auth0/LogoutButton";
import AvailableDeeds from "./components/AvailableDeeds";
import AboutUs from "./components/AboutUs";
import UpcomingDeeds from "./components/UpcomingDeeds";
import DeedsList from "./components/DeedsList";
import CompletedDeeds from "./components/CompletedDeeds";





const App = () => {
  let query = new URLSearchParams(window.location.search);
  const {isAuthenticated, isLoading, user, loginWithRedirect} = useAuth0();
  if (!isAuthenticated && !query.get('code')) {
    loginWithRedirect()
  }

  


  return (
  
    <Router>
      {/* 
      <Route path="/upcoming" exact component={Upcoming} />
      <Route path="/completed" exact component={Completed} />
      <Route path="/ratings" exact component={Ratings} />
      <Route path="/signup_feed" exact component={SignUpFeed} />
      <Route path="/assigned" exact component={Assigned} />
      <Route path="/edit_deed" exact component={EditDeed} /> */}

      <Navbar />
      {isAuthenticated &&
        <>
          <Route path="/sign_in" component={SignIn} />
          <Route path="/logout" exact component={LogoutButton} />
          <Route path="/public_profile/:email" exact component={PublicProfile} />
          <Route path="/private_profile" exact component={PrivateProfile} />
          <Route path="/explore" exact component={AvailableDeeds} />
          <Route path="/upcoming" exact component={UpcomingDeeds} />
          <Route path="/completed" exact component={CompletedDeeds} />
          <Route path="/create_deed" exact component={CreateDeed} />
          <Route path="/deed_assigned/:id" exact component={DeedAssigned} />
          <Route path="/details/:id" exact component={DeedDetail} />
          <Route path="/deeds_list" exact component={DeedsList} />
          <Route path="/message" exact component={Join} />
          <Route path="/chat" component={Chat} />
          <Route path="/about" component={AboutUs} />

        </>
      }

    </Router>
  )
};





export default App;