import React, { useEffect, useState } from "react";
import { TbRotateClockwise2 } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitEmail = (e) => {
    e.preventDefault();

    // console.log("this email");
    // console.log(e.target);

    // console.log(import.meta.env.VITE_TEMPLATE_ID);
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then((res) => {
        toast.success("Email Sent!");
      })
      .catch((err) => {
        toast.error("Something went wrong, please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      id="contact"
      className="grid sm:grid-cols-2 gap-10 pt-30 mx-5 sm:mx-20 mb-20"
      data-aos="fade-right"
    >
      <Toaster position="top-center" />
      <div className="">
        <h3 className="text-2xl font-semibold mb-5">Contact Us</h3>
        <p>
          We’re here to help you find the right filtration solution. Reach out
          today and our team will respond with a personalized quote within 24
          hours.
        </p>
      </div>
      <div>
        <form action="" className="space-y-5" onSubmit={submitEmail}>
          <input
            type="text"
            name="name"
            placeholder="Business Name"
            className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
            // value={formData.name}
            // onChange={handleInputChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
            // value={formData.phone}
            // onChange={handleInputChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
            // value={formData.email}
            // onChange={handleInputChange}
            required
          />

          <input
            type="text"
            name="product"
            placeholder="Product Required"
            className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
            // value={formData.product}
            // onChange={handleInputChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message (Optional)"
            className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
            rows={"5"}
            // value={formData.message}
            // onChange={handleInputChange}
          ></textarea>

          {loading ? (
            <div className="bg-primary/90 min-w-40 place-self-start place-items-center text-white lg:w-full font-medium rounded-lg border border-primary py-2 px-4">
              <TbRotateClockwise2 className="animate-spin" size={25} />
            </div>
          ) : (
            <button
              type="submit"
              className="bg-primary/90 min-w-40 whitespace-nowrap text-white lg:w-full font-medium rounded-lg hover:bg-transparent hover:text-primary border border-primary hover:cursor-pointer py-2 px-4"
            >
              Get A Free Quote
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
