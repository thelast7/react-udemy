import React from "react";

const App = () => {
  return (
    <div>
      <label htmlFor="name">Nama :</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

export default App;
