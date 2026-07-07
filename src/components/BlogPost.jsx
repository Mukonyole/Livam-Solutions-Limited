import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

function BlogPost() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  // (scroll to top on page load)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  return (
    <div className="container py-5 mt-5">
      <h1 className="mb-4" style={{ color: "#01327b" }}>
        {blog.title}
      </h1>

      <div style={{ lineHeight: "1.8" }}>
        {blog.content}
      </div>
    </div>
  );
}

export default BlogPost;