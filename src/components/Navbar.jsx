import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 rounded-2xl text-white bg-gray-600">
      <p className="text-green-500 text-3xl font-bold">Movie</p>

      <ul className="hidden md:flex gap-4 font-bold">
        <li>
          <Link
            to="/"
            className="text-white hover:text-emerald-400 cursor-pointer"
          >
            AnaSayfa
          </Link>
        </li>
        <li>
          <Link
            to="/favorites"
            className="text-white hover:text-emerald-400 cursor-pointer"
          >
            Favoriler
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-white hover:text-emerald-400 cursor-pointer"
          >
            Giriş
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="text-white hover:text-emerald-400 cursor-pointer"
          >
            Kayıt Ol
          </Link>
        </li>
      </ul>

      <div onClick={handleMenu} className="block md:hidden cursor-pointer">
        {showMenu ? <IoClose size={24} /> : <IoMenu size={24} />}
      </div>

      <div
       className={`fixed top-0 left-0 w-[60%] h-full bg-gray-900 border-r border-gray-700 p-4 
        transition-transform duration-300 ease-in-out z-[999] ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-3xl font-bold text-emerald-400">HatoFlix</h1>
        <ul className="hidden md:flex gap-4 font-bold z-[999] relative">
          <li>
            <Link
              to="/"
              className="text-white hover:text-emerald-400 cursor-pointer"
            >
              AnaSayfa
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="text-white hover:text-emerald-400 cursor-pointer"
            >
              Favoriler
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-white hover:text-emerald-400 cursor-pointer"
            >
              Giriş
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-white hover:text-emerald-400 cursor-pointer"
            >
              Kayıt Ol
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
