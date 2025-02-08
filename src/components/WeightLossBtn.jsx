import React, { useState } from "react";
import Weightloss from "./modals/Weightloss";
import weightLossimg from "../assets/weightloss.png";

const WeightLossBtn = () => {
  const [showModal, setShowModal] = useState();
  return (
    <div>
      <button
        className="cursor-pointer transform transition duration-500 hover:scale-110"
        onClick={() => setShowModal(true)}
      >
        <div className="relative">
          <img
            className="size-80 rounded-2xl"
            src={weightLossimg}
            alt="Weight loss"
          />
          <p className="absolute bottom-2 right-25 text-white font-bold text-2xl">
            Learn More
          </p>
        </div>
      </button>
      {showModal && <Weightloss onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default WeightLossBtn;
