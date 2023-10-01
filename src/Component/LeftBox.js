import React, { useContext } from "react";
import { TextContext } from "../Context/CursorProvider";
const LeftBox = () => {
  const { MouseEnter, MouseLeave} = useContext(TextContext);

  return (
    <div className="leftbox">
      <h1 onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
        pintu jha
      </h1>
    </div>
  );
};

export default LeftBox;
