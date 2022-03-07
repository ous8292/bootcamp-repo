const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Blog</h1>
      <div className="Links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            birderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
