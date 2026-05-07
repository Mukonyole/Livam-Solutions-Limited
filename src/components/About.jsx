import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import introImage from "../images/cover.jpg";
import justusImg from "../images/justus.jpg";
import cliffordImg from "../images/clifford.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Introduction Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center text-white bg-dark"
        style={{
          height: "60vh",
          backgroundImage: `url(${introImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
         <h1 className="display-4 fw-bold" style={{ color: "white" }}>
  Livam Solutions Limited
</h1>
 <p
  className="lead mt-3"
  style={{
    color: "white",
    fontWeight: "800",
    fontSize: "1.8rem",
    letterSpacing: "0.5px"
  }}
>
  Water for Today, Sustainability for Tomorrow
</p>
  </div>
      </section>

      {/* About Us Section */}
      <section className="container py-5" data-aos="fade-up">
        <h2
          className="text-center mb-4"
          style={{ color: "#01327b", fontWeight: "bold" }}
        >
          About Us
<p style={{ textAlign: "left", fontSize: "17px", lineHeight: "1.7", color: "#696868" }}>
  Livam Solutions Ltd is a professional water drilling company based in Kakamega, Kenya. We are committed to delivering reliable, sustainable, and affordable water solutions for homes, farms, institutions, commercial properties and industries across Kenya. With over 5 years of experience in the water drilling industry, Livam Solutions Limited has built a strong reputation for professionalism, quality service delivery, and customer satisfaction. Our experienced team uses modern equipment and industry best practices to ensure successful and efficient project execution. We specialize in borehole drilling, hydrogeological site surveys, pump installation, water testing, borehole maintenance, and other water-related engineering solutions. We take pride in contributing to improved livelihoods by providing dependable water solutions across Kenya.
</p>
        </h2>
        <div className="row">
          <div className="col-12 position-relative">
            {[
              {
                title: "Our Vision",
                text: `At <strong>Livam Solutions Limited</strong>, our vision is to to become the most trusted and innovative water solutions company, delivering excellence in drilling and ensuring long-term water solution in Kenya`,
                color: "#FF6F61",
              },
              {
                title: "Our Mission",
                text: `To provide reliable, affordable, and sustainable water solutions that improve the quality of life for our clients and communities.`,
                color: "#FFD700",
              },
              {
                title: "Our Expertise",
                text: `We combine advanced drilling technologies, a dedicated team of professionals, and eco-friendly practices to deliver precision and efficiency in every project. From drilling water wells to providing expert consultations, we are committed to excellence at every step.`,
                color: "#00C6FF",
              },
              {
                title: "Our Commitment",
                text: `At Livam Solutions Ltd, we are dedicated to building lasting relationships with our clients by consistently exceeding expectations. Our team is passionate about contributing to the long-term water security of Kenya through projects that are both sustainable and impactful.`,
                color: "#6A5ACD",
              },
               {
                title: "Health, Safety & Environment",
                text: `At Livam Solutions Limited, safety is a priority in all our operations. We follow strict safety procedures and environmentally responsible practices to protect our employees, clients, communities, and the environment.`,
                color: "#6A5ACD",
              },
              {
                title: "Why Choose Us",
                text: `Choosing Livam Solutions Ltd means partnering with a team that values trust, innovation, and quality. We deliver timely, cost-effective, and customized solutions to ensure your water needs are met with precision and care.`,
                color: "#32CD32",
              },
                {
                title: "Our Core Values",
                text: `1. <strong>Quality Service</strong> <br></br>
We are committed to delivering high-quality workmanship in every project we undertake.<br></br>

2. <strong>Integrity</strong><br></br>
We operate with honesty, transparency, and professionalism in all our dealings.<br></br>

3. <strong>Customer Focus</strong><br></br>
Our clients are at the heart of everything we do, and we strive to exceed their expectations.<br></br>

4. <strong>Innovation</strong><br></br>
We embrace modern technology and continuous improvement to provide efficient water solutions.<br></br>

5. <strong>Sustainability</strong><br></br>
We promote environmentally responsible practices to ensure long-term water access.`,
                color: "Blue",
              },
              
            ].map((section, index) => (
              <div className="d-flex align-items-start mb-5" key={index}>
                {/* Circle and Line */}
                <div className="d-flex flex-column align-items-center me-3">
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: section.color,
                      borderRadius: "50%",
                    }}
                  ></div>
                  {index < 4 && (
                    <div
                      style={{
                        width: "4px",
                        height: "100px",
                        background: `linear-gradient(${section.color}, ${
                          ["#FFD700", "#00C6FF", "#6A5ACD", "#32CD32"][
                            index + 1
                          ] || section.color
                        })`,
                      }}
                    ></div>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="fw-bold mb-3">{section.title}</h3>
                  <p
                    className="text-muted fs-5"
                    dangerouslySetInnerHTML={{ __html: section.text }}
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-light py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4">Meet Our Team</h2>
          <div className="row g-4">
            {[
              {
                name: "Justus Asakhulu",
                role: "CEO",
                img: justusImg,
              },
              {
                name: "Evans Mukonyole",
                role: "Finance and Accounts Manager",
                img: "https://picsum.photos/300/300?random=2",
              },
              {
                name: "Clifford Musambai",
                role: "Operations Manager",
                img: cliffordImg,
              },
            ].map((member, index) => (
              <div className="col-md-4" key={index}>
                <div className="card text-center shadow-sm border-0">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="card-img-top"
                    style={{
                      height: "300px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{member.name}</h5>
                    <p className="card-text">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
