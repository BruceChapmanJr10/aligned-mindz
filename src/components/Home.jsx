import React from "react";
import imageUrl from "../assets/sunset.png";

const Home = () => {
  return (
    <div
      id="home"
      className=" bg-fixed w-full h-screen bg-cover bg-center
    flex justify-center flex-col items-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div>
        <h2 className=" text-5xl md:text-7xl text-white pt-20 tracking-widest text-center font-bold font-display">
          Welcome To
        </h2>
        <h1 className="text-5xl md:text-7xl text-white pt-4 tracking-widest text-center font-bold font-display">
          Aligned Mindz Hypnotherapy!
        </h1>
      </div>
      <div>
        <h2 className=" text-white font-primary tracking-wide py-8 my-8 text-center text-3xl md:text-5xl">
          Shasta Jenkins M.Ht
        </h2>
      </div>
      <div>
        <p className="text-white font-primary tracking-wide py-8 my-8 text-center text-2xl md:text-3xl italic">
          ~OFFERING COMFORTABLE, SAFE, CONFIEDENTIAL VIRTUAL SESSIONS~
        </p>
      </div>
    </div>
  );
};

export default Home;
