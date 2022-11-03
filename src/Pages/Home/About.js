import React from "react";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="my-20" id="#about">
      <div className="hero  bg-base-200 rounded-xl">
        <div className=" hero-content flex-col lg:flex-row">
          <div className="relative w-1/2 mb-20">
            <img
              alt=""
              src={person}
              className="w-4/5 rounded-lg shadow-2xl"
            />
            <img
              alt=""
              src={parts}
              className="absolute w-3/5 top-1/2 border-8 border-lime-100 right-5 max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-600">About us</p>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p className="py-6">
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <button className="btn bg-orange-600">Get More info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
