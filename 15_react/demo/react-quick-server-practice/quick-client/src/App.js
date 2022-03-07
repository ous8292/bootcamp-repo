import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("on first mount");
  }, []);

  useEffect(() => {
    console.log("next page");
  }, [counter]);

  const buttonClick = () => {
    console.log("Clicked");

    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>hello</h1>
      {counter}
      <button onClick={buttonClick}> My Button </button>
    </div>
  );
}

export default App;
