import React from "react";

const Form = () => {
  return (
    <div id="contact" className="  bg-purple-200 bg-cover">
      <h1 className="text-orange-700 pt-9 text-center font-primary text-4xl font-bold py-9">
        Contact
      </h1>
      <form className=" bg-purple-950 space-y-4 pt-3 max-w-2xl lg:w-lg m-auto  rounded-2xl">
        <div>
          <label htmlFor="name" className="block text-white ml-3 mb-2">
            Name
          </label>
          <input
            name="user_name"
            type="text"
            className="w-full pt-2 rounded bg-gray-300 border border-gray-600 focus:outline-none focus:border-purple-400"
            placeholder="Enter Your Name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="text-white ml-3 block mb-2">
            Email
          </label>
          <input
            name="user_email"
            type="email"
            className="w-full pt-2 rounded bg-gray-300 border border-gray-600 focus:outline-none focus:border-purple-400"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="text-white ml-3 block mb-2">
            Address
          </label>
          <input
            name="user_address"
            type="text"
            className="w-full pt-2 rounded bg-gray-300 border border-gray-600 focus:outline-none focus:border-green-400"
            placeholder="Enter Your Address"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-white ml-3 block mb-2">
            How can I help you
          </label>
          <textarea
            type="text"
            className="w-full pt-2 rounded bg-gray-300 border border-gray-600 focus:outline-none focus:border-green-400"
            placeholder="How can I help you..."
            rows="5"
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer mt-4 w-full bg-gradient-to-r from-purple-500 to-orange-800 text-white 
               md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
