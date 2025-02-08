import React, { useRef } from "react";

const Smoking = ({ onClose }) => {
  const smokingRef = useRef();
  const closeModal = (e) => {
    if (smokingRef.current === e.target) {
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
              Smoking Cessation
            </h1>
          </div>

          <div className="text-gray-400 pt-9 max-w-md lg:w-lg text-left font-primary leading-7 text-xl">
            <p>
              The effectiveness of hypnotherapy for smoking cessation remains a
              topic of scientific debate. A 2019 Cochrane review concluded that
              there is insufficient evidence to determine whether hypnotherapy
              is more effective than other forms of behavioral support or
              unassisted quitting. If a benefit exists, current evidence
              suggests it is small at most. However, some studies have reported
              higher success rates. For instance, a 2018 study found that 16 out
              of 20 participants (80%) quit smoking after undergoing hypnosis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smoking;
