import { useState } from "react";
import Logo from "../ui/Logo";
import {FaUser,FaShoppingCart,FaSearch} from "react-icons/fa"; 
import Search from "../ui/Search";


const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav>
          <ul className="flex gap-x-2">
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

          <a href="">
            <button className="btn-order">Order Online</button>
          </a>
        </div>
      </div>
    {showModal &&(<Search setShowModal ={setShowModal} />)}
    </div>
  );
};

export default Header;