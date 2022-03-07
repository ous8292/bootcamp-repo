const Home = () => {
  // e is an event object - it happens whenever an event takes place
  const handleClick = (e) => {
    console.log("Hello Ninjas!", e);
  };

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  };
  return (
    <div className="home">
      <h2>Home Page</h2>
      {/* cannot pass in directly handleClick() <- due to it invoking with () when it loads */}
      <button onClick={handleClick}>Click me</button>
      {/* This function invokes handleClickAgain everytime you click the button, not
      on first load. Then passes in variable */}
      <button onClick={(e) => handleClickAgain("Peter", e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
