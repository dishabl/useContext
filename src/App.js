import "./App.css";
import React, { useState } from "react";
import List from "./List";
import MyContext from "./MyContext";
import sun from "./sun.png";
import moon from "./moon.png";

function App() {
  const [theme, setTheme] = useState("White");
  const changeNum = () => {
    setTheme(theme === "White" ? "Black" : "White");
  };
  let pict, head_style;
  if (theme === "White") {
    pict = moon;
    head_style = "App-header";
  } else {
    pict = sun;
    head_style = "App-header1";
  }
  return (
    <div className="App">
      <header className={head_style}>
        <img src={pict} className="App-logo" alt="pict" />
        <MyContext.Provider value={theme}>
          <List />
        </MyContext.Provider>
        <button className="buttonChange" onClick={changeNum}>
          Сменить тему
        </button>
      </header>
    </div>
  );
}

export default App;
