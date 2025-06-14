import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Menu, X} from "lucide-react"

const Navbar = () => {

  const [isMenuOpen,setIsMenuOpen] =useState(false)

  return (
    <div className="sm:h-20 h-15 py-4 lg:px-10 md:px-8 sm:px-4 px-2 bg-zinc-800 mb-5 relative">
      <div className="navbar bg-zinc-700 rounded-md shadow-sm sm:px-5 px-2">
        <div className="flex-1">
          <p className="btn btn-ghost text-xl">PeerSolve</p>
        </div>
        <div className="flex-none flex items-center">
          <ul className="hidden sm:flex menu menu-horizontal px-1 text-base mr-5 gap-x-5">
            <li>
              <Link className="btn btn-primary" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary" to="/create-ticket">
                Ask Doubt
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary" to="/tickets">
                All Doubt's
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary" to="/solve-tickets">
                Solve Doubt's
              </Link>
            </li>
          </ul>
          <div className="hidden sm:block dropdown dropdown-end">
            <Link to="/profile" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </Link>
          </div>
          <h2 className="sm:hidden cursor-pointer" >
          {isMenuOpen ? <X onClick={()=>setIsMenuOpen(false)} size={35}/> : <Menu onClick={()=>setIsMenuOpen(true)} size={35} />}
          </h2>
        </div>

        {isMenuOpen &&  <ul onClick={()=>setIsMenuOpen(false)} className="z-10 absolute bg-zinc-400 rounded-md opactiy-50 right-2 w-68  mt-1 gap-y-5 menu menu-vertical h-[50vh] flex flex-col top-20 px-1 text-xs">
            <li>
              <Link className="btn btn-primary" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary" to="/create-ticket">
                Ask Doubt
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary" to="/tickets">
                All Doubt's
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary" to="/solve-tickets">
                Solve Doubt's
              </Link>
            </li>
          </ul>}

      </div>
    </div>
  );
};

export default Navbar;
