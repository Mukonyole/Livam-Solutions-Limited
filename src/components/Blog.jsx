import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const blogs = [
    {
      title: "Borehole Drilling Requirements in Kenya",
      content: `
Before drilling a borehole in Kenya, several legal and technical requirements must be met. These include obtaining permits from the Water Resources Authority (WRA), carrying out hydrogeological surveys, and complying with environmental regulations.

The survey helps determine water availability, expected drilling depth, and the success rate of the project.

Proper approvals help avoid delays, legal penalties, and failed drilling projects.
      `,
    },

    {
      title: "What To Look For When Drilling A Borehole",
      content: `
Successful borehole drilling depends on proper planning and selecting an experienced drilling company.

Important factors include:
• Site location
• Geological conditions
• Water table depth
• Quality drilling equipment
• Proper casing and gravel packing

Using quality materials greatly improves borehole lifespan and performance.
      `,
    },

    {
      title: "No Shortcuts In Borehole Drilling",
      content: `
Borehole drilling requires technical precision.

Poor drilling methods often lead to:
• Collapsed boreholes
• Low water output
• Water contamination
• Pump failures

At Livam Solutions Ltd, every project follows industry standards from site investigation to pump testing to ensure long-term reliability.
      `,
    },
  ];

  return (
    <div className="container py-5">

      {/* Header */}
      <div className="text-center mb-5" data-aos="fade-up">
        <h1 className="fw-bold" style={{ color: "#01327b" }}>
          Our Blog
        </h1>

        <p className="lead text-muted">
          Reliable Water Solutions Across Kenya
        </p>
      </div>

      {/* Company Intro */}
      <div
        className="card border-0 shadow p-4 mb-5"
        data-aos="fade-up"
      >
        <p className="mb-0">
          Livam Solutions Ltd has established itself as a trusted leader
          in borehole drilling and water solutions across Kenya.

          With over <strong>5 years of experience</strong>, the company
          has successfully completed <strong>257 projects</strong> and
          drilled <strong>172 boreholes</strong>, delivering reliable
          water solutions to homes, farms, institutions, and businesses.

          Based in <strong>Kakamega</strong>, we proudly serve clients
          throughout Kenya while maintaining high standards of quality,
          professionalism, and customer satisfaction.
        </p>
      </div>

      {/* Statistics */}
      <div className="row text-center mb-5">

        <div className="col-md-4 mb-3" data-aos="zoom-in">
          <div className="card shadow border-0 p-4">
            <h2 style={{ color: "#01327b" }}>5+</h2>
            <p>Years Experience</p>
          </div>
        </div>

        <div className="col-md-4 mb-3" data-aos="zoom-in">
          <div className="card shadow border-0 p-4">
            <h2 style={{ color: "#01327b" }}>172</h2>
            <p>Boreholes Drilled</p>
          </div>
        </div>

        <div className="col-md-4 mb-3" data-aos="zoom-in">
          <div className="card shadow border-0 p-4">
            <h2 style={{ color: "#01327b" }}>257</h2>
            <p>Completed Projects</p>
          </div>
        </div>

      </div>

      {/* Services */}
      <div
        className="card shadow border-0 p-4 mb-5"
        data-aos="fade-up"
      >
        <h3 className="mb-3">
          🛠️ Comprehensive Water Solutions
        </h3>

        <ul>
          <li>Site survey and water consultancy</li>
          <li>Borehole drilling and casing</li>
          <li>Gravel packing services</li>
          <li>Pump installation and maintenance</li>
          <li>Water testing and treatment</li>
          <li>Borehole rehabilitation</li>
          <li>Water storage solutions</li>
        </ul>

        <p>
          We provide complete end-to-end water solutions for homes,
          institutions, farms, and businesses.
        </p>
      </div>

      {/* Blog Cards */}
      <section className="py-4">

        <div className="row g-4">

          {blogs.map((blog, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="fade-up"
            >
              <div className="card shadow border-0 h-100 p-4">

                <h5
                  className="fw-bold mb-3"
                  style={{ color: "#01327b" }}
                >
                  {blog.title}
                </h5>

                <p
                  className="text-muted"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {expanded === index
                    ? blog.content
                    : `${blog.content.substring(0, 180)}...`}
                </p>

                <button
                  className="btn btn-primary mt-auto"
                  onClick={() =>
                    setExpanded(
                      expanded === index
                        ? null
                        : index
                    )
                  }
                >
                  {expanded === index
                    ? "Show Less"
                    : "Read More"}
                </button>

              </div>
            </div>
          ))}

        </div>

      </section>

      {/* Why Choose Us */}
      <div
        className="card shadow border-0 p-4 mt-5"
        data-aos="fade-up"
      >
        <h3>🤝 Why Choose Livam Solutions Ltd?</h3>

        <ul>
          <li>Experienced and professional team</li>
          <li>Modern drilling equipment</li>
          <li>Affordable pricing</li>
          <li>Timely project delivery</li>
          <li>Customized water solutions</li>
          <li>Nationwide service coverage</li>
        </ul>

        <p>
          Every project receives dedicated planning and execution to
          deliver sustainable and reliable water access.
        </p>
      </div>

    </div>
  );
};

export default Blog;