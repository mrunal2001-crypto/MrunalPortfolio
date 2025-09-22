import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";

// 1️⃣ Define props type
type NavbarProps = {
  currentPage: string;
};

// 2️⃣ Use the type in the component
const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  return (
    <nav className="flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            {"MRUNAL".split("").map((letter, index) => (
              <span
                key={index}
                className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
              >
                {letter}
              </span>
            ))}
          </span>
        </Link>
      </li>

      {console.log(currentPage)}

      {/* Uncomment if you want the menu links
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => (
          <li
            key={index}
            className={`list-none text-white ${
              currentPage === item.title
                ? "opacity-100"
                : "opacity-40 hover:opacity-100 transition-opacity"
            }`}
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      */}
    </nav>
  );
};

export default Navbar;
