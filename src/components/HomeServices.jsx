import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import wellDrillingImage from "../images/truck.jpg";
import waterConsultancyImage from "../images/truck3.jpg";
import ConsultancyImage from "../images/truck2.jpg";

const HomeServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: "Borehole Drilling",
      description:
        "We provide professional water drilling services, ensuring a reliable and sustainable water source for your needs.",
      image: wellDrillingImage,
    },
    {
      title: "Borehole Maintenance",
      description:
        "Our borehole maintenance services ensure optimal performance and longevity of your water systems.",
      image: waterConsultancyImage,
    },
    {
      title: "Water Testing and Consultancy",
      description:
        "Get expert advice on water management and solutions tailored to your unique requirements.",
      image: ConsultancyImage,
    },
  ];

  return (
    <div>
      {/* Services Section */}
      <section
        className="container-fluid py-5"
        data-aos="fade-up"
        style={{
          background: `linear-gradient(270deg, #ebf8ff, #f3ebff, #fffceb)`,
          backgroundSize: "600% 600%",
          animation: "gradientAnimation 8s ease infinite",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ color: "#01327b", fontWeight: "bold" }}
        >
          Who We Are
        </h2>
        <p >
          Livam Solutions Limited is a trusted water drilling company based in Kakamega, providing efficient and reliable borehole solutions across Kenya to ensure consistent access to clean water for homes, farms, and businesses. With a strong focus on quality workmanship, modern technology, and customer satisfaction, we strive to provide cost-effective solutions that ensure long-term value and dependable performance. Our experienced team works closely with clients from consultation and site assessment to project execution, testing, and ongoing support, ensuring every project is completed efficiently and to the highest industry standards.
        </p>
        <p>
          Over the years, we have built a reputation for professionalism, integrity, and excellence by consistently delivering projects on time and within budget. Our dedication to innovation and continuous improvement enables us to provide practical solutions that address today's challenges while preparing our clients for tomorrow's opportunities.
          At Livam Solutions Ltd, we don't just provide services, we build lasting relationships based on trust, quality, and exceptional customer care. Partner with us today and experience dependable solutions designed to power progress, enhance productivity, and secure a better future for generations to come.
  </p>
        
        <h2
  className="text-center mt-5 mb-4"
  style={{ color: "#01327b", fontWeight: "bold" }}
>
  Our Key Services
</h2>
<p  className="about-text"
  
>
  We provide comprehensive borehole drilling, maintenance, and water
  consultancy services to ensure reliable access to clean and sustainable
  water solutions across Kenya.From initial site assessment and hydrogeological surveys to borehole drilling, casing, pump installation, and water quality analysis, we ensure that every project is executed with precision, safety, and adherence to industry standards.
  By utilizing modern equipment, innovative techniques, and best practices, we strive to deliver cost-effective and environmentally responsible solutions that guarantee long-term value.
  </p>
   <p>
  In addition, our consultancy services provide expert guidance on water resource management, borehole development, regulatory compliance, and the selection of appropriate water solutions. By utilizing modern equipment, innovative techniques, and best practices, we strive to deliver cost-effective and environmentally responsible solutions that guarantee long-term value.
  Kindly find below key services that we offer. For more services, kindly click on <strong>Our Services</strong> section to explore more of our services that we offer.
</p> <br/>

<div className="row g-4"></div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card shadow-sm border-0 h-100"
                style={{
                  backgroundColor: "#ffffff", // White background for cards
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body text-center">
                  <h5
                    className="card-title fw-bold"
                    style={{ color: "#01327b" }}
                  >
                    {service.title}
                  </h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gradient Animation CSS */}
      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomeServices;
