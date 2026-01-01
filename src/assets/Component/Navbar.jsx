import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-[95%] bg-black rounded-xl px-6 py-3 flex items-center justify-between ">
        
        <div className="text-white font-bold text-2xl">
          DVSY
        </div>

        <div className="flex gap-6 text-gray-300 text-m font-bold">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
