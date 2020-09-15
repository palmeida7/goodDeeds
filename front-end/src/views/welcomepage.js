import React from "react";
import { Container } from "react-bootstrap";

import "./welcomepage.css"

export const welcomepage = () => {
  return (
    <Container className="welcome">
      <h1>Welcome Page</h1>
      <p>
    This is the welcome page 
    <br></br>       
     <strong className="paragraph">
         We look forward to seeing your GoodDeeds
         </strong>.
      </p>
    </Container>
  );
};

export default welcomepage;