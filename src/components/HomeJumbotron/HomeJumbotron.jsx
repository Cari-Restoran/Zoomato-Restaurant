import React from "react";
import { Jumbotron } from "reactstrap";
import background from "../../assets/images/jumbotron.jpeg";

function HomeJumbotron() {
  return (
    <Jumbotron
      fluid
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "30em",
      }}
    >
      <h1 className="display-3">Fluid jumbotron</h1>
      <p className="lead">
        This is a modified jumbotron thatdADA occupies the entire horizontal
        space of its parent.
      </p>
    </Jumbotron>
  );
}

export default HomeJumbotron;
