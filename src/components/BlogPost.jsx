import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();

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
    </div>
  );
};

export default BlogPost;