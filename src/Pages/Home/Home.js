import React from "react";
import Banner from "../Common/Banner";
import About from "./About";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <div className="mb-16">
        <Banner />
        <About/>
        <Services/>
      </div>
    </div>
  );
};

export default Home;