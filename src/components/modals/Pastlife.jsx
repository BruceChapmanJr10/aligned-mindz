import React, { useRef } from "react";

const Pastlife = ({ onClose }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  const modal = useRef();

  return (
    <div
      ref={modal}
      onClick={closeModal}
      className="mb-10 z-10 fixed inset-0 bg-black/80 backdrop:blur-sm flex justify-center items-center w-full"
    >
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button
          onClick={onClose}
          className="place-self-center lg:place-self-end px-5 text-3xl"
        >
          X
        </button>
        <div className="bg-black rounded-xl px-4 lg:px-20  flex flex-col gap-3 lg:gap-5 items-center mx-4 w-sm lg:w-xl py-10">
          <div>
            <h1 className="text-white pt-5 lg:pt-9 text-center font-primary w-md m-auto text-2xl">
              Past Life Regression
            </h1>
          </div>

          <div className="text-gray-400 pt-9 max-w-md lg:w-lg text-left font-primary leading-7 text-xl">
            <p>
              A therapeutic technique aimed at helping individuals recall
              memories of previous lives or incarnations. Often guided by a
              therapist, it’s believed to uncover past-life experiences that may
              be impacting the person's current life. The idea is that by
              understanding and addressing these past experiences, one can find
              healing and resolve unexplained fears, traumas, or behaviors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pastlife;
