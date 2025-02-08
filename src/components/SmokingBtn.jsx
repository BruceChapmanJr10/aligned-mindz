import React, { useState } from "react";
import Smoking from "./modals/Smoking";
import smokingImg from "../assets/quitsmoking.png";

const SmokingBtn = () => {
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
            src={smokingImg}
            alt="Quit Smoking"
          />
          <p className="absolute bottom-2 right-25  text-white font-bold text-2xl">
            Learn More
          </p>
        </div>
      </button>
      {showModal && <Smoking onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default SmokingBtn;
