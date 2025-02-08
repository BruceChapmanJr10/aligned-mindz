import React, { useState } from "react";
import Pastlife from "./modals/Pastlife";
import pastLifeimg from "../assets/pastliferegression.png";

const PastLifeBtn = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        className="cursor-pointer transform transition duration-500 hover:scale-110"
        onClick={() => setShowModal(true)}
      >
        <div className="relative">
          <img
            className="size-80 rounded-2xl"
            src={pastLifeimg}
            alt="Past Life Regression"
          />
          <p className="absolute bottom-2 right-25  text-white font-bold text-2xl">
            Learn More
          </p>
        </div>
      </button>
      {showModal && <Pastlife onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default PastLifeBtn;
