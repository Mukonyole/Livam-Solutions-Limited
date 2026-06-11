import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

function BlogPost() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  return (
    <div className="container py-5 mt-5">
      <h1>{blog.title}</h1>
      <div>{blog.content}</div>
    </div>
  );
}

export default BlogPost;