import React, { useContext } from "react";
import { TextContext } from "../Context/CursorProvider";
const RightBox = () => {
  const { MouseEnter, MouseLeave } = useContext(TextContext);
  return (
    <div className="rightbox">
      <h1 onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
        Ashish
      </h1>
    </div>
  );
};

export default RightBox;
