import React from "react";

const Form = () => {
  function handleFormData(formData) {
  
    const name = formData.get("user-name");
    const email = formData.get("user-email");
    const address = formData.get("user-address");
    const message = formData.get("message");

    console.log(name, email, address, message);
  }
  return (
    <div id="contact" className="  bg-purple-200 bg-cover pb-5">
      <h1 className="text-orange-700 pt-9 text-center font-primary text-4xl font-bold py-9">
        Contact
      </h1>
      <form
        action={handleFormData}
        className=" bg-purple-950 space-y-4 pt-3 max-w-2xl lg:w-lg m-auto  rounded-2xl"
      >
        <div>
          <label htmlFor="name" className="block text-white ml-3 mb-2">
            Name
          </label>
          <input
            name="user-name"
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
            name="user-email"
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
            name="user-address"
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
            name="message"
          />
        </div>
        <div className="flex justify-center pb-5">
          <button
            className="cursor-pointer bg-gradient-to-r from-purple-500 to-orange-800 text-white 
               md:inline transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
