import { useState } from "react";

//OUT PUTTING LISTS USING MAP METHOD
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "new blog 1", body: "blog 1", author: "mario", id: 1 },
    { title: "new blog 1", body: "blog 2", author: "lugi", id: 2 },
    { title: "new blog 1", body: "blog 2", author: "bowser", id: 3 },
  ]);
  return (
    <div className="home">
      {/* key property is required and used by react to keep track of each item in the dom as it's outputted, key must be unique */}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
