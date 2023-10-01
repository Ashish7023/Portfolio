import React from "react";
import "./App.css";
import LeftBox from "./Component/LeftBox";
import Cursor from "./Context/Cursor";
const App = () => {
  return (
    <div className="App">
      <LeftBox />
      <Cursor/>
    </div>
  );
};

export default App;
