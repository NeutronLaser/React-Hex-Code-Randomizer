import "./styles.css";
import React, { useState } from "react";

const App = () => {
  const [hex, setHex] = useState("#ffffff");
  const randomizedHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: `${hex}`, minHeight: "100vh", zoom: 2 }}
    >
      <h1>{hex}</h1>
      <button className="btn" onClick={randomizedHex}>
        Randomize
      </button>
    </div>
  );
};

export default App;
