import { useState } from "react";

const Home = () => {
  //creating state and setting to mario
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    //using changing states value to lugi
    setName("lugi");
    setAge("30");
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>
        {name} is {age}{" "}
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
