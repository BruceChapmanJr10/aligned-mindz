import React from "react";
import hyptnoImg from "../assets/selfhypno.png";

const GettingStarted = () => {
  return (
    <div id="whyHypnotherapy" className="mt-8">
      <div className="flex flex-col items-center lg:flex-row gap-5 pb-9 bg-purple-100 ">
        <div>
          <img className="w-2xl h-96" src={hyptnoImg} alt="hypnotherapy" />
        </div>
        <div className="w-fit px-7 ">
          <h1 className="text-purple-900 pt-9 text-center font-primary text-4xl font-bold">
            What is Hypnotherapy?
          </h1>
          <p className="text-purple-900 pt-9 max-w-2xl text-left px-2 lg:px-1 m-auto font-primary leading-8 text-2xl">
            Hypnotherapy is a gentle, yet highly effective therapeutic approach
            that uses guided relaxation, focused attention, and deep
            concentration to access the subconscious mind. This is where our
            thoughts, emotions, habits, and deeply ingrained patterns reside. By
            tapping into this powerful part of your mind, hypnotherapy helps you
            create positive changes, overcome challenges, and achieve your
            goals.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 bg-orange-100 pb-5">
        <div>
          <h2 className="text-purple-900 pt-9 text-center font-primary text-3xl font-bold ">
            The Benefits of Hypnotherapy
          </h2>
          <h3 className="text-purple-900 pt-9 px-3 lg:px-1 text-center font-primary max-w-2xl lg:w-md m-auto text-2xl">
            Hypnotherapy is a versatile tool that can address a wide range of
            challenges.
          </h3>
          <p className=" m-auto text-purple-900 font-primary text-center pt-5 text-2xl font-semibold">
            Including:
          </p>
          <ul className="list-disc pl-6 lg:px-6 m-auto max-w-2xl lg:w-lg text-purple-900 pt-9 font-primary space-y-3 text-2xl">
            <li>Reducing stress, anxiety, and fear</li>
            <li>
              Breaking free from unhealthy habits such as smoking or overeating
            </li>
            <li>Enhancing confidence and self-esteem</li>
            <li>
              Improving focus and performance in personal and professional areas
            </li>
            <li>Managing pain and improving sleep quality</li>
            <li>Healing emotional wounds and releasing past trauma</li>
          </ul>
          <p className="text-purple-900 px-3 lg:px-1 pt-9 max-w-2xl lg:w-lg text-left m-auto font-primary leading-8 text-2xl">
            Unlike traditional talk therapy, hypnotherapy works by bypassing the
            conscious mind to reach the root of the issue, making it especially
            effective for long-term, sustainable results. It is entirely safe
            and natural, allowing you to feel deeply relaxed and in control
            throughout the process.
          </p>
        </div>
        <div className="bg-purple-100 lg:bg-orange-100">
          <h2 className="text-purple-900 pt-9 text-center font-primary text-3xl font-bold ">
            How Effective is Hypnotherapy?
          </h2>
          <h3 className="text-purple-900 pt-9 px-3 lg:px-1 text-left font-primary max-w-2xl lg:w-lg m-auto text-2xl">
            Research has shown that hypnotherapy has a high success rate in
            helping individuals make meaningful changes in their lives.
          </h3>
          <p className=" m-auto text-purple-900 font-primary text-center pt-9 text-2xl font-semibold">
            For example:
          </p>
          <ul className="list-disc pl-6 lg:px-6 m-auto max-w-2xl lg:w-lg text-purple-900 pt-9 font-primary space-y-3 text-2xl">
            <li>
              A study published in the American Journal of Clinical Hypnosis
              found a 93% success rate after just 6 sessions for various issues.
            </li>
            <li>
              Another study showed that hypnotherapy can be 30% more effective
              than other forms of therapy for breaking habits.
            </li>
          </ul>
          <p className="text-purple-900 px-3 lg:px-1 pt-9 max-w-2xl lg:w-lg text-left m-auto font-primary leading-8 text-2xl">
            Everyone’s journey is unique, but many clients experience noticeable
            improvements after just a few sessions.
          </p>
        </div>
      </div>
      <div className="bg-orange-100 lg:bg-purple-100 pb-5">
        <h2 className="text-purple-900 px-3 font-semibold lg:px-1 pt-9 text-center font-primary max-w-2xl lg:w-lg m-auto text-3xl">
          Why Choose Hypnotherapy?
        </h2>
        <h3 className="text-purple-900 px-3 lg:px-1 pt-9 text-left font-primary max-w-2xl lg:w-2xl m-auto text-2xl">
          Hypnotherapy is about empowerment. It’s a journey of self-discovery
          and healing, allowing you to harness the incredible power of your
          subconscious mind. Whether you’re looking to overcome specific
          challenges or simply improve your overall well-being, hypnotherapy
          offers a path to meaningful and lasting transformation
        </h3>
      </div>
    </div>
  );
};

export default GettingStarted;
