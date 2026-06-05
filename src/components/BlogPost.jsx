<<<<<<< HEAD
import { useParams } from "react-router-dom";
=======
import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogPosts";
>>>>>>> 3c71a3197b7171d15488f55657cd1a2f10c8db61

const BlogPost = () => {
  const { slug } = useParams();

<<<<<<< HEAD
  return (
    <div>
      <h1>Blog Post</h1>
      <p>Reading blog: {slug}</p>
=======
  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return (
      <div className="container py-5">
        <h2>Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1
        className="mb-4"
        style={{ color: "#01327b" }}
      >
        {blog.title}
      </h1>

      <div
        style={{
          whiteSpace: "pre-line",
          lineHeight: "1.8"
        }}
      >
        {blog.content}
      </div>
>>>>>>> 3c71a3197b7171d15488f55657cd1a2f10c8db61
    </div>
  );
};

export default BlogPost;