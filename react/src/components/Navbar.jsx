import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 text-white h-18 fixed bottom-2 px-6 w-full flex justify-between items-center rounded-4xl shadow-lg">
      <Link to="/" className="material-icons-round text-red-700">home</Link>
      <Link to="/map" className="material-icons-round text-red-700">map</Link>
      <Link to="/event" className="material-icons-round text-red-700">event</Link>
      <Link to="/more" className="material-icons-round text-red-700">more_horiz</Link>
    </nav>
  );
};

export default Navbar;
