import React from "react";

function clickMe() {
  return "Yess";
}

const App = () => {
  return (
    <div>
      <button>{clickMe()}</button>
    </div>
  );
};

export default App;
