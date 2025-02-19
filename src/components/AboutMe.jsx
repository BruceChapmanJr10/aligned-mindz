import React from "react";
import aboutMeImg from "../assets/shasta-main.jpg";
import sunset2 from "../assets/sunset2.png";

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="bg-fixed w-full bg-cover bg-center
        flex justify-center flex-col items-center"
      style={{ backgroundImage: `url(${sunset2})` }}
    >
      <h1 className="text-white pt-9 text-center font-primary text-4xl font-bold py-9">
        About Me
      </h1>
      <img
        className="py-9  rounded-full w-72 h-72 lg:w-96 lg:h-96 place-self-center overflow-hidden"
        src={aboutMeImg}
        alt="About me"
      />
      <p className="text-white bg-purple-950/80 px-3 lg:px-8 rounded-2xl py-9 max-w-2xl lg:w-3xl text-left m-auto font-primary leading-8 text-2xl">
        &nbsp; &nbsp; &nbsp; As a passionate hypnotherapist and Reiki
        practitioner, my mission is to help others overcome life’s obstacles,
        heal from trauma, and rediscover the joy and balance they deserve. At
        40, I’ve walked my own path of resilience, navigating the challenges of
        raising five children, managing personal struggles, and coping with the
        unexpected loss of my mother, 4 years ago. These experiences have
        deepened my empathy and strengthened my commitment to helping others
        transform their lives. <br />
        <br />
        &nbsp; &nbsp; &nbsp;My journey into hypnotherapy and energy healing
        began with a desire to better understand the mind-body connection and
        the incredible power we all hold within ourselves to create change.
        Through hypnotherapy, I guide clients into the subconscious, where
        lasting breakthroughs are possible. As a Reiki practitioner, I
        complement this work with energy healing, helping to release emotional
        blockages and restore inner harmony. I offer confidential, personalized
        sessions in the comfort of your own home, creating a safe space where
        you can relax, open up, and explore your potential for healing. Whether
        you’re seeking relief from anxiety, freedom from limiting habits, or
        simply a sense of clarity and peace, my goal is to empower you on your
        journey toward a better life. <br />
        <br />
        &nbsp; &nbsp; &nbsp; In addition to hypnotherapy and Reiki, I specialize
        in past life regression, a profound and transformative experience that
        helps uncover and heal patterns, fears, or emotional blocks rooted in
        previous lifetimes. By exploring the deeper layers of your soul’s
        journey, past life regression can bring clarity, closure, and a deeper
        understanding of your present life. It’s an extraordinary tool for
        healing and self-discovery, helping you move forward with newfound peace
        and purpose. <br /> <br />
        &nbsp; &nbsp; &nbsp;Another area of focus in my practice is helping
        individuals and businesses access their flow state through hypnosis. The
        flow state is a powerful mental state where people experience optimal
        productivity, creativity, and focus, which is especially beneficial in
        professional environments. By using hypnosis to facilitate entry into
        this state, I assist business professionals, teams, and entrepreneurs in
        achieving heightened focus, reducing stress, and increasing their
        overall productivity. This approach can enhance workplace performance,
        improve decision-making, and foster innovation and creativity, making it
        a valuable tool in any business setting. <br />
        <br />
        &nbsp; &nbsp; &nbsp;Healing is my passion, and I am honored to be a part
        of each client’s story of transformation. Together, we can make
        meaningful changes that resonate far beyond the session, touching every
        part of your life.
      </p>
    </div>
  );
};

export default AboutMe;
