<<<<<<< HEAD
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
=======
<<<<<<< HEAD
import { useParams } from "react-router-dom";
=======
import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogPosts";
>>>>>>> 3c71a3197b7171d15488f55657cd1a2f10c8db61
>>>>>>> 8431558d338886c264ac1bf5c5a8aff351715f0a

function BlogPost() {
  const { slug } = useParams();

<<<<<<< HEAD
  const blog = blogs.find((item) => item.slug === slug);
=======
<<<<<<< HEAD
  return (
    <div>
      <h1>Blog Post</h1>
      <p>Reading blog: {slug}</p>
=======
  const blog = blogs.find(
    (item) => item.slug === slug
  );
>>>>>>> 8431558d338886c264ac1bf5c5a8aff351715f0a

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  return (
<<<<<<< HEAD
    <div className="container py-5 mt-5">
      <h1>{blog.title}</h1>
      <div>{blog.content}</div>
=======
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
>>>>>>> 8431558d338886c264ac1bf5c5a8aff351715f0a
    </div>
  );
}

export default BlogPost;