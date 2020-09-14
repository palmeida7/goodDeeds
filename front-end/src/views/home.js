import React, { Fragment } from "react";

import "./home.css"

// import { Hero, Content } from "../components";

const Home = () => (
  <Fragment>
    <div className="welcome">
    {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
    <h1 className="maintext">GoodDeeds</h1>

    <p className="welcome">
      This is a site commited to helping those in need. 
    </p>
    <p className="welcome">
    You can commit your time to from everything from lending a 
      ear for good converstation to helping raise money for aid for a good cause.
    </p>
  </div>
  </Fragment>
);

export default Home;