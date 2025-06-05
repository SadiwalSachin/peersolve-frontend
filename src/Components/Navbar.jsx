import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const role = localStorage.getItem("role");

  return (
    <div className="h-20 py-4 px-10 bg-zinc-800 mb-5">
      <div className="navbar bg-zinc-700 rounded-md shadow-sm px-5">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">PeerSolve</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-base mr-5 gap-x-5">
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
          <div className="dropdown dropdown-end">
            <Link to="/profile" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
