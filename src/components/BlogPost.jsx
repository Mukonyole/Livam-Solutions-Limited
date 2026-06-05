import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Reading blog: {slug}</p>
    </div>
  );
};

export default BlogPost;