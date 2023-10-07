import React, { useContext } from "react";
import { TextContext } from "../../Context/CursorProvider";

const Navbar = () => {
  const { MouseEnter, MouseLeave } = useContext(TextContext);
  return (
    <nav className="  nav  hidden lg:block">
      <ul className="w-max mt-32">
        <li onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
          {/* <div className="border-b-2  border-red-900"></div> */}
          <a
            href="#about"
            className="group flex items-center py-3 active inline-block"
          >
            <span
              className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 
            group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
            ></span>
            <span className="nav-text text-2xl font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              ABOUT
            </span>
          </a>
        </li>
        <li onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
          <a
            href="#Expirence"
            className="group flex items-center py-3 active inline-block"
          >
            <span
              className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 
            group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
            ></span>
            <span className="nav-text text-2xl font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              EXPERIENCE
            </span>
          </a>
        </li>
        <li onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
          <a
            href="#Project"
            className="group flex items-center py-3 active inline-block"
          >
            <span
              className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 
            group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
            ></span>
            <span className="nav-text text-2xl font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              PROJECT
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
