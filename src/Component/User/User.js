import React, { useContext } from "react";
import { TextContext } from "../../Context/CursorProvider";
import "./User.css";
import Navbar from "../Navbar/Navbar";
const User = () => {
  const { MouseEnter, MouseLeave } = useContext(TextContext);
  return (
    <div>
      <h1
        onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}
        className="font-[Poppins]  text-7xl font-[1000] inline-block text-[#c7d0e0]">
        Brittany Chiang
      </h1>
      <h2
        onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}
        className="text-3xl  mt-8 font-[Poppins]  text-[#c7d0e0]">
        Lead Engineer at Upstatement
      </h2>

      <p className="text-2xl font-[400] mt-8 text-[#94A3b8]">
        I build accessible, inclusive products and <br /> digital experiences
        for the web.
      </p>
      <Navbar/>
    </div>
  );
};

export default User;
