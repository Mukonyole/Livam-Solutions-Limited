import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import wellDrillingImage from "../images/truck.jpg";
import waterConsultancyImage from "../images/truck3.jpg";
import ConsultancyImage from "../images/tank.jpg";
import constructionImage from "../images/Construction.jpg";

const HomeServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
    title: "Borehole Drilling",
    slug: "borehole-drilling",
    description:
        "We provide professional borehole drilling services using modern equipment and proven techniques to deliver reliable, high-yield water sources. From site assessment and drilling to casing installation and well development, our experienced team ensures every borehole is constructed safely, efficiently, and in accordance with industry standards for long-term performance.",
      image: wellDrillingImage,
    },
    {
    title: "Pump Installation",
    slug: "pump-installation",
      description:
        "We provide professional installation of high-quality submersible pumps for residential, agricultural, commercial, institutional, and industrial boreholes. Our experienced technicians carefully select, install, and test each pumping system to ensure maximum efficiency, reliable performance, optimal water delivery, and long-term durability, giving clients a dependable and uninterrupted water supply.",
      image: waterConsultancyImage,
    },
    {
    title: "Water Storage Solutions",
    slug: "water-storage-solutions",
      description:
        "We design and install reliable water storage systems, including water tanks, steel towers, pipelines, and distribution networks, to ensure a consistent and uninterrupted water supply. Our tailored solutions are built for durability, efficiency, and long-term performance, serving residential, agricultural, commercial, institutional, and industrial clients.",
      image: ConsultancyImage,
    },
    {
    title: "Construction & Civil Works",
    slug: "construction-and-civil-works",
      description:
        "We provide professional construction services for hospitals, schools, offices, commercial buildings, and other institutional facilities. Our team delivers quality construction works from foundations to completion, with a strong focus on durability, safety, functionality, and high-quality workmanship. We work with clients to deliver reliable facilities that meet their specific needs, project requirements, and applicable construction standards.",
      image: constructionImage,
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
         Livam Solutions Limited is a trusted water drilling, construction, and civil works 
         company based in Kakamega, providing efficient and reliable solutions across Kenya. 
         We specialize in borehole drilling and water solutions while also delivering professional 
         construction and civil works for homes, schools, hospitals, offices, commercial buildings, 
         and other institutional facilities. With a strong focus on quality workmanship, modern 
         technology, safety, and customer satisfaction, we strive to provide cost-effective solutions 
         that ensure long-term value and dependable performance. Our experienced team works closely 
         with clients from consultation, site assessment, and project planning through construction, 
         project execution, testing, finishing, and ongoing support. Whether developing a reliable 
         water source or constructing essential infrastructure, we are committed to completing every 
         project efficiently, professionally, and to high industry standards.
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
  We provide comprehensive borehole drilling, maintenance, water consultancy, construction, 
  and civil works services to deliver reliable water and infrastructure solutions across Kenya. 
  From initial site assessment, hydrogeological surveys, and borehole drilling to casing, pump 
  installation, water quality analysis, and maintenance, we ensure that every water project is 
  executed with precision, safety, and adherence to industry standards. We also undertake 
  construction and civil works for hospitals, schools, offices, commercial buildings, 
  residential properties, and other institutional facilities, delivering quality building works 
  with a strong focus on durability, safety, functionality, and professional workmanship.
  </p>
  <p>
  By utilizing modern equipment, innovative techniques, quality materials, and proven industry 
  practices, we strive to deliver cost-effective and environmentally responsible solutions that 
  provide long-term value to our clients. Our construction and civil works services cover various 
  stages of development, from foundations and structural works to finishing and supporting 
  infrastructure, depending on the requirements of each project.
 
  </p>
   <p>
 In addition, our consultancy services provide expert guidance on water resource management, 
 borehole development, regulatory compliance, construction requirements, and the selection of 
 appropriate water and infrastructure solutions. We work closely with our clients from project 
 planning and assessment through implementation, testing, construction, and ongoing support, 
 ensuring that every project is delivered professionally and efficiently. Kindly find below key services that we offer. </p>
  <p>
  For more services, kindly click on <strong>Our Services</strong> section to explore more of our services that we offer.
</p> <br/>
        <div className="row g-4">
  {services.map((service, index) => (
    <div className="col-12 col-sm-6 col-md-3" key={index}>

  <Link
    to={`/services/${service.slug}`}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <div
  className="card service-card shadow-sm border-0 h-100"
  style={{
    backgroundColor: "#ffffff",
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

      <div className="card-body">
        <h5
          className="card-title fw-bold text-center"
          style={{ color: "#01327b" }}
        >
          {service.title}
        </h5>

        <p
          className="card-text"
          style={{
            textAlign: "left",
            margin: 0,
            lineHeight: "1.8",
          }}
        >
          {service.description}
        </p>
      </div>
    </div>
  </Link>
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

    .service-card {
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .service-card:hover {
      background-color: #015e7b !important;
      color: #fff !important;
      transform: translateY(-6px);
      box-shadow: 0 12px 25px rgba(1, 50, 123, 0.4) !important;
    }

    .service-card:hover .card-title,
    .service-card:hover .card-text {
      color: #fff !important;
    }

    .service-card:hover img {
      opacity: 0.9;
    }
  `}
</style>
    </div>
  );
};

export default HomeServices;
