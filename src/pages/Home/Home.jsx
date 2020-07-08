import React from "react";

import HomeJumbotron from "../../components/HomeJumbotron/HomeJumbotron";
import ButtonLogin from "../../components/ButtonLogin/ButtonLogin";
import ButtonRegister from "../../components/ButtonRegister/ButtonRegister";

function Home() {
  return (
    <div>
      <HomeJumbotron />
      <ButtonLogin />
      <ButtonRegister />
    </div>
  );
}

export default Home;
