import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// Import your local images
import wellDrillingImage from "../images/truck.jpg";
import boreholeMaintenanceImage from "../images/well.jpg";
import waterConsultancyImage from "../images/water.jpg";
import siteSurveyImage from "../images/survey.jpg";
import pumpImage from "../images/pump.jpg";
import tankImage from "../images/tank.jpg";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

const services = [
  {
    title: "Borehole Drilling",
    slug: "borehole-drilling",
    description:
      "We provide complete borehole drilling services including professional drilling, installation of durable casing pipes and proper gravel packing to ensure a safe, stable and high-yield water source.",
    image: wellDrillingImage,
  },
  {
    title: "Borehole Maintenance",
    slug: "borehole-maintenance",
    description:
      " A well-maintained borehole is essential for ensuring a reliable, safe and uninterrupted water supply..",
    image: boreholeMaintenanceImage,
  },
  {
    title: "Water Testing and Consultancy",
    slug: "water-testing-consultancy",
    description:
      "At Livam Solutions Limited, we believe that access to clean, safe and reliable water is essential...",
    image: waterConsultancyImage,
  },
  {
    title: "Site Survey",
    slug: "site-survey",
    description:
      "Every successful borehole project begins with a professional site survey. This crucial first...",
    image: siteSurveyImage,
  },
  {
    title: "Pump Installation",
    slug: "pump-installation",
    description:
      "We provide professional pump installation services to ensure efficient, reliable, and long-lasting water extraction from your borehole or water source. Our solutions are tailored to match your water demand, borehole depth, and system requirements.",
    image: pumpImage,
  },
  {
    title: "Water Storage Solutions",
    slug: "water-storage-solutions",
    description:
      "Our Water Storage Solutions are designed to ensure that homes, farms, businesses...",
    image: tankImage,
  },
];

  return (
    <div style={{ backgroundColor: "#e2dfdf" }}>
      {/* Introduction Section */}
      

      {/* Services Section */}
      <section className="container py-5" data-aos="fade-up">
        <h2
          className="text-center mb-4"
          style={{ color: "#01327b", fontWeight: "bold" }}
        >
          Our Services
        </h2>
        <p className="text-center mb-5">
          At Livam Solutions Limited, we are dedicated to delivering high-quality, reliable 
          and sustainable water solutions tailored to meet the unique needs of our clients. 
          Whether you require professional site surveys, borehole drilling, pump installation, 
          borehole maintenance, water testing, water storage solutions, or expert consultancy, 
          our experienced team is committed to excellence at every stage of the project. We offer the following services.
        </p>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card shadow-sm border-0 h-100"
                style={{
                  backgroundColor: "#fff", // Light gray background
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
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body text-center d-flex flex-column">
  <h5 className="card-title fw-bold">{service.title}</h5>

  <p className="card-text flex-grow-1">
  {service.description.split(" ").slice(0, 15).join(" ")}...
</p>

<Link
  to={`/services/${service.slug}`}
  style={{
    color: "#01327b",
    fontWeight: "bold",
    textDecoration: "none",
  }}
>
  Learn More →
</Link>

</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Drilling Cost Section */}
<section className="container py-5" data-aos="fade-up">
  <h2
    className="text-center mb-4"
    style={{
      color: "#01327b",
      fontWeight: "bold",
    }}
  >
    Estimated Borehole Drilling Costs
  </h2>

  <p className="text-center mb-5">
    Borehole drilling costs vary depending on location,
    drilling depth, geological conditions, water table level,
    equipment requirements, and installation needs.
    Below are estimated service costs.
  </p>

  <div className="row g-4">

    {[
      {
        title: "Hydrogeological Site Survey",
        price: "From KES 50,000",
        desc:
          "Professional survey to determine water availability and suitable drilling points.",
      },

      {
        title: "Borehole Drilling",
        price: "KES 6,000 - 7,500 per metre",
        desc:
          "Includes drilling operations, casing installation, gravel packing and development.",
      },

      {
        title: "Pump Installation",
        price: "From KES 50,000",
        desc:
          "Supply and installation of pumps based on depth and water demand.",
      },

      {
        title: "Water Storage Solutions",
        price: "From KES 100,000",
        desc:
          "Tank installation, towers and water distribution systems.",
      },

      {
        title: "Water Testing",
        price: "From KES 15,000",
        desc:
          "Laboratory analysis and quality assessment.",
      },

      {
        title: "Borehole Maintenance",
        price: "Custom Quotation",
        desc:
          "Cleaning, flushing, pump servicing and rehabilitation.",
      },

    ].map((cost, index) => (

      <div className="col-md-4" key={index}>
        <div
          className="card shadow border-0 h-100 text-center"
          style={{
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >

          <div
            style={{
              backgroundColor: "#01327b",
              color: "white",
              padding: "20px",
            }}
          >
            <h5 className="fw-bold">
              {cost.title}
            </h5>

            <h3 className="mt-3">
              {cost.price}
            </h3>
          </div>

          <div className="card-body d-flex flex-column">

  <p className="text-muted flex-grow-1">
    {cost.desc}
  </p>

  <button
    className="btn mt-3"
    style={{
      backgroundColor: "#01327b",
      color: "white",
      borderRadius: "8px",
    }}
    onClick={() => window.location.href="/contact"}
  >
    Request Quotation
  </button>

</div>

        </div>
      </div>

    ))}

  </div>

  <div className="text-center mt-5">
    <p
      style={{
        fontSize: "15px",
  color: "black",
  textAlign: "justify",
  margin: 0,
  padding: 0,
  textIndent: 0,
  lineHeight: "1.8",
  fontStyle: "italic",
      }}
    >
      <strong> * The costs provided are intended for estimation purposes only and 
      should not be considered as final quotations. Actual project costs 
      may vary depending on several factors, including the location of the 
      project, the required drilling depth, geological formations encountered, 
      transportation and mobilization expenses, casing specifications, pump type 
      and capacity, water yield, and overall site accessibility and conditions. 
      Additional requirements such as hydrogeological surveys, water quality testing, 
      power supply installation, or specialized equipment may also affect the final price. 
      We recommend contacting Livam Solutions Limited for a detailed site assessment and a 
      customized quotation tailored to your specific water project needs.
      </strong>
    </p>
  </div>

</section>
    </div>
  );
};

export default Services;
