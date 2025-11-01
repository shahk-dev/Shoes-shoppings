import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import cater from "../assets/icons/cater.svg"
import Logo from "../assets/img/Logo.png";
import grougs from "../assets/img/Group.svg";
import Search from "../assets/img/Search.svg";
import accound from "../assets/img/Account.svg";

function Navbar() {
  return (
    <>
      <nav className='flex item-center font-["Jost"]  justify-between bg-[#202020] text-white p-[44px]'>
        <div className='flex item-center gap-15 text-[20px]'>
          <button>
            <img src={cater} alt="Logo link" />
          </button>
          <ul className=" gap-13 flex item-center">
            <li>
              <NavLink
                to="/newarrival"
                className={({ isActive }) =>
                  isActive
                     ? "border-b-2 border-[#BA0000] text-[#ffffff] pb-2"
                    : "border-b-2 border-transparent hover:border-[#BA0000] hover:text-[#ffffff] pb-2"
                }
              >
                New Arrival
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutmen"
                className={({ isActive }) =>
                 isActive
                     ? "border-b-2 border-[#BA0000] text-[#ffffff] pb-2"
                    : "border-b-2 border-transparent hover:border-[#BA0000] hover:text-[#ffffff] pb-2"
                }
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutwomen"
                className={({ isActive }) =>
                  isActive
                     ? "border-b-2 border-[#BA0000] text-[#ffffff] pb-2"
                    : "border-b-2 border-transparent hover:border-[#BA0000] hover:text-[#ffffff] pb-2"
                }
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutkids"
                className={({ isActive }) =>
                  isActive
                     ? "border-b-2 border-[#BA0000] text-[#ffffff] pb-2"
                    : "border-b-2 border-transparent hover:border-[#BA0000] hover:text-[#ffffff] pb-2"
                }
              >
                Kids
              </NavLink>
            </li>
          </ul>

        </div>
        <div>
          <a href="/">
            <img src={Logo} alt="Like logo" />
          </a>
        </div>
        <div className='flex item-center gap-[40px]'>
          <Link to={'/aboutkids'}><img className='h-[27px]' src={Search} alt="Search" /></Link>
          <Link to={'/login'}><img className='h-[27px]' src={accound} alt="accound" /></Link>
          <Link to={'/cart'}><img className='h-[27px]' src={grougs} alt="grougs" /></Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar