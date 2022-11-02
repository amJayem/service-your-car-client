import React from "react";
import Banner from "../Common/Banner";
import About from "./About";

const Home = () => {
  return (
    <div>
      <div className="mb-16">
        <Banner />
        <About/>
      </div>
    </div>
  );
};

export default Home;