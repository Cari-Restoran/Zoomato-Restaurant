import React from "react";
import { Jumbotron } from "reactstrap";
import styled from "styled-components";

import background from "../../assets/images/jumbotron.jpeg";

const Title = styled.span`
  font-family: "Zoomato";
`;

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
      <h1
        className="display-3"
        style={{
          textAlign: "center",
          background: "rgba(244, 64, 76, 0.5)",
          color: "white",
        }}
      >
        <Title>zoomato</Title>
      </h1>
      {/* <p className="lead">
        This is a modified jumbotron thatdADA occupies the entire horizontal
        space of its parent.
      </p> */}
    </Jumbotron>
  );
}

export default HomeJumbotron;
