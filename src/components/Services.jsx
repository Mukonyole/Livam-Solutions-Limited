import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your local images
import wellDrillingImage from "../images/truck.jpg";
import boreholeMaintenanceImage from "../images/well.jpg";
import waterConsultancyImage from "../images/water.jpg";
import siteSurveyImage from "../images/survey.jpg";
import pumpImage from "../images/pump.jpg";
import tankImage from "../images/tank.jpg";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: "Borehole Drilling",
      description:
        "We provide complete borehole drilling services including professional drilling, installation of durable casing pipes and proper gravel packing to ensure a safe, stable and high-yield water source.",
      image: wellDrillingImage,
    },
    {
      title: "Borehole Maintenance",
      description:
        "We provide professional borehole maintenance services to ensure your water system operates efficiently at optimal performance throughout its lifespan. Our maintenance services include inspection and servicing of pumps, cleaning and flushing of boreholes, removal of silt and debris and testing water flow and quality.",
      image: boreholeMaintenanceImage,
    },
    {
      title: "Water Testing and Consultancy",
      description:
        "We provide comprehensive water testing and consultancy services to ensure safe, efficient, and sustainable water use. Our process involves detailed laboratory analysis to assess water quality, alongside expert advisory to guide clients on the best water management, treatment, and system solutions.",
      image: waterConsultancyImage,
    },
    {
      title: "Site Survey",
      description:
        "We provide professional site survey services to determine the best location, depth, and success rate of your borehole before drilling begins. Our scientific approach minimizes risks and ensures reliable water access.",
      image: siteSurveyImage,
    },
     {
      title: "Pump installation",
      description:
        "We provide professional pump installation services to ensure efficient, reliable, and long-lasting water extraction from your borehole or water source. Our solutions are tailored to match your water demand, borehole depth, and system requirements.",
      image: pumpImage,
    },
    {
      title: "Water Storage Solutions",
      description:
        "We provide reliable and efficient water storage solutions designed to ensure a consistent and uninterrupted water supply for domestic, agricultural, and commercial use. Our services include the installation of high-quality water storage tanks, elevated tank towers, and complete distribution systems tailored to your specific needs.",
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
          At Livam Solutions ltd, we are dedicated to providing
          high-quality water solutions tailored to meet your needs. Whether it's
          drilling water wells, maintaining boreholes, or offering expert
          consultancy, we are committed to delivering excellence in every
          project we undertake.
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
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
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
