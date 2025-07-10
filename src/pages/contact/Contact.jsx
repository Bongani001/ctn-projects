import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-10 pt-30 mx-20 mb-20">
      <div className="">
        <h3 className="text-2xl font-semibold mb-5">Contact Us</h3>
        <p>
          We’re here to help you find the right filtration solution. Reach out
          today and our team will respond with a personalized quote within 24
          hours.
        </p>
      </div>
      <div>
        <form action="" className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Business Name"
            className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
            required
          />

          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
            required
          />

          <input
            type="text"
            name="product"
            placeholder="Product Required"
            className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Message (Optional)"
            className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
            rows={"5"}
          ></textarea>

          <button
            type="submit"
            className="bg-primary/90 text-white lg:w-full font-medium rounded-lg hover:bg-transparent hover:text-primary border border-primary hover:cursor-pointer py-2 px-4"
          >
            Get A Free Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
