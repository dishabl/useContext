import React, { useContext } from "react";
import MyContext from "./MyContext";
// import sun from "./sun.png";

function List() {
  const value = useContext(MyContext);
  return (
    <div>
      {/* <img src={sun} className="App-logo" alt="sun" /> */}
      <h2 style={{ color: value }}>Dark / Light</h2>
      <h5 style={{ color: value }}>Toogle dark or light to customize</h5>
      <h5 style={{ color: value }}>your interface</h5>
      <br></br>
    </div>
  );
}

export default List;
