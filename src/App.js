import React from "react";
import "./App.css";
import LeftBox from "./Component/LeftBox";
import RightBox from "./Component/RightBox";
const App = () => {
  return (
    <div className="App mx-48 px-40">
      <LeftBox />
      <RightBox />
    </div>
  );
};

export default App;
