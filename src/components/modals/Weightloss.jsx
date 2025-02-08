import React, { useRef } from "react";

const Weightloss = ({ onClose }) => {
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
          className=" place-self-center lg:place-self-end px-5 mt-8 text-3xl"
        >
          X
        </button>
        <div className="bg-black rounded-xl px-4 lg:px-20 flex flex-col gap-2 lg:gap-5 items-center mx-4 w-sm lg:w-xl py-10">
          <div>
            <h1 className="text-white pt-5 lg:pt-9 text-center font-primary w-md m-auto text-2xl">
              Weight Loss
            </h1>
          </div>

          <div className="text-gray-400 pt-9 max-w-md lg:w-lg text-left font-primary leading-7 text-xl">
            <p>
              Research on hypnotherapy for weight loss has yielded mixed
              results. A 2020 study indicated that hypnotherapy led to weight
              loss in obese patients and resulted in significant changes in
              serum leptin, adiponectin, and irisin levels, suggesting potential
              benefits in obesity treatment. Conversely, a 2022 study found that
              audio self-hypnosis had no statistically significant effect on
              weight loss after three weeks, though it was associated with
              increased satiety and quality of life in patients with obesity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weightloss;
