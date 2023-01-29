import { useState } from "react";
import Logo from "../ui/Logo";
import {FaUser,FaShoppingCart,FaSearch} from "react-icons/fa"; 
import Search from "../ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";


const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            menuModal === true && "!grid place-content-center"
          }`}>
          <ul className="flex gap-x-2 sm:flex-row flex-col">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
          {menuModal && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center ">
          <a href="" className="hover:text-primary transition-all">
            <FaUser />
          </a>
          <a href="" className="hover:text-primary transition-all">
            <FaShoppingCart />
          </a>
          <button href="" className="hover:text-primary transition-all" onClick={()=>setShowModal(true)}>
            <FaSearch />
          </button>
          <a href="" className="md:inline-block hidden sm">
            <button className="btn-order">Order Online</button>
          </a>
          <button className="sm:hidden inline-block" onClick={()=>setMenuModal(true)}>
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
        </div>
      </div>
    {showModal &&(<Search setShowModal ={setShowModal} />)}
    </div>
  );
};

export default Header;