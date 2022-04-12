import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Button({ text, bg, padding }) {
  let navigate = useNavigate();
  return (
    <div>
      <a
        href="https://github.com/karunialeo/mini-project-web"
        target="_blank"
        className={`
          ${padding || "px-6 py-2"} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </a>
    </div>
  );
}

function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 h-16 shadow-md bg-gray-700">
      <nav className="flex items-center container mx-auto h-full justify-between">
        <h1 className="font-semibold uppercase text-lg text-gray-200">
          💡 Mini Project
        </h1>
        <div>
          <ul className="flex items-center space-x-10 text-sm">
            <li>
              <Link to="/" className="text-gray-400 hover:text-gray-100">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/customer"
                className="text-gray-400 hover:text-gray-100"
              >
                Customer
              </Link>
            </li>
            <li>
              <Link to="/product" className="text-gray-400 hover:text-gray-100">
                Product
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Button
            text="Github"
            bg="bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
