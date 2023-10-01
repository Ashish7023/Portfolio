import React, { useState } from "react";
export const CursorContext = React.createContext();
export const TextContext = React.createContext();
const CursorProvider = ({ children }) => {
  const [cursorVariants, setcursorVariants] = useState("default");
  const MouseEnter = () => {
    setcursorVariants("text");
  };
  const MouseLeave = () => {
    setcursorVariants("default");
  };
  return (
    <CursorContext.Provider
      value={{
        cursorVariants
      }}>
      <TextContext.Provider value={{ MouseEnter, MouseLeave }}>
        {children}
      </TextContext.Provider>
    </CursorContext.Provider>
  );
};

export default CursorProvider;
