import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 text-white h-18 fixed bottom-2 px-6 w-full flex justify-between items-center rounded-4xl shadow-lg">
      <a href="/home" className="material-icons-round text-red-700">home</a>
      <a href="/map" className="material-icons-round text-red-700">map</a>
      <a href="/event" className="material-icons-round text-red-700">event</a>
      <a href="/more" className="material-icons-round text-red-700">more_horiz</a>
    </nav>
  );
};

export default Navbar;
