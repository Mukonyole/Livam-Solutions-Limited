import { useParams } from "react-router-dom";
import { services } from "../data/services";

function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <h2 className="text-center mt-5">Service Not Found</h2>;
  }

  return (
    <div className="container py-5">
      <img
        src={service.image}
        alt={service.title}
        className="img-fluid rounded mb-4"
      />

      <h1 style={{ color: "#01327b" }}>{service.title}</h1>

      <div
  style={{ lineHeight: "1.8" }}
  dangerouslySetInnerHTML={{ __html: service.content }}
/>
    </div>
  );
}

export default ServiceDetails;