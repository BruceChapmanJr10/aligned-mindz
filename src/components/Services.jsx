import React from "react";
import WeightLossBtn from "./WeightLossBtn";
import SmokingBtn from "./SmokingBtn";
import PastLifeBtn from "./PastLiftBtn";
import prices from "../assets/prices.png";

const Services = () => {
  return (
    <div id="services" className="pt-10 ">
      <h1 className="text-center text-4xl font-primary text-orange-700">
        Let Your Journey To Transformation
      </h1>
      <p className="text-center text-4xl font-primary pt-2 text-orange-700">
        Start Here
      </p>
      <div className="flex flex-col items-center lg:flex-row py-8 lg:justify-around">
        <WeightLossBtn />
        <SmokingBtn />
        <PastLifeBtn />
      </div>
      <h2 className="text-center text-2xl font-primary pt-2 text-orange-700">
        In-person sessions or Zoom (Virtual) sessions available.
      </h2>
      <p className="text-center text-2xl font-primary pt-2 text-orange-700">
        I will travel up to 30 miles from Winchester, Virginia for in-person
        sessions .
      </p>
    </div>
  );
};

export default Services;
