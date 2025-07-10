import React from "react";
import { TbMoodEmptyFilled } from "react-icons/tb";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-10 mx-10">
      <TbMoodEmptyFilled size={100} className="text-primary" />
      <h1 className="text-lg md:text-4xl text-primary-500 font-bold">
        Sorry, Page Not Found or Has Been Removed.
      </h1>
      <span className="text-sm">
        Please check the URL in the address bar and try again.
      </span>
    </div>
  );
};

export default NotFound;
