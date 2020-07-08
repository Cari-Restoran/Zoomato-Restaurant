import React from "react";
import styled from "styled-components";

import HomeJumbotron from "../../components/HomeJumbotron/HomeJumbotron";
import ButtonLogin from "../../components/ButtonLogin/ButtonLogin";
import ButtonRegister from "../../components/ButtonRegister/ButtonRegister";

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

function Home() {
  return (
    <div>
      <HomeJumbotron />
      <Buttons>
        <div>
          <ButtonLogin />
        </div>
        <div>
          <ButtonRegister />
        </div>
      </Buttons>
    </div>
  );
}

export default Home;
