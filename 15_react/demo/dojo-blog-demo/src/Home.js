import { useState, useEffect } from "react";
import BlogList from "./BlogList";

//OUT PUTTING LISTS USING MAP METHOD
const Home = () => {
  const [blogs, setBlogs] = useState([null]);



  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };



  //runs everytime we render
  //only runs once on first render
  useEffect(() => {
    fetch('http://localhost:8001/blogs')
      .then(res => {
        return res.json()
      })
      .then(data  => {
        setBlogs(data)
      })
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
