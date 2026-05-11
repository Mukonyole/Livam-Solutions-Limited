import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mt-5">

      <p data-aos="fade-up">
        Livam Solutions Ltd has established itself as a trusted leader in water drilling and borehole solutions across Kenya. With over 5 years of experience in the industry, the company has successfully completed 257 projects, including the drilling of 172 boreholes, delivering reliable and sustainable water solutions to homes, farms, institutions, and businesses.

        Based in Kakamega, Livam Solutions Ltd serves clients across the entire country, providing professional, efficient, and affordable water services tailored to meet diverse needs. These achievements reflect our commitment to quality, reliability, and customer satisfaction.
      </p>

      <h4>🛠️ Comprehensive Water Solutions</h4>
      <p>
        Beyond drilling, Livam Solutions Ltd offers a wide range of services including:
        <br />
        Site survey and water consultancy<br />
        Borehole drilling, casing, and gravel packing<br />
        Pump installation and maintenance<br />
        Water testing and treatment solutions<br />
        Borehole rehabilitation and maintenance<br />
        Water storage solutions<br />
        <br />
        Our goal is to provide end-to-end water solutions, ensuring our clients enjoy uninterrupted water supply.
      </p>

      <h4>🤝 Why Choose Livam Solutions Ltd?</h4>
      <p>
        Clients across Kenya trust us because we offer:
        <br />
        Professional and experienced team<br />
        Modern drilling equipment<br />
        Affordable and transparent pricing<br />
        Timely project completion<br />
        Customized solutions for every client<br />
        <br />
        We understand that every project is unique, and we work closely with our clients to deliver solutions that meet their specific needs.
      </p>

<section className="py-5 bg-light" data-aos="fade-up">
  <div className="container">
    <h2 className="text-center fw-bold mb-5" style={{ color: "#01327b" }}>
      Our Blog
    </h2>

    <div className="row g-4">
      {[
        {
          title: "Borehole drilling requirements in Kenya",
          content: `
Before drilling a borehole in Kenya, several legal and technical requirements must be met. These include obtaining permits from Water Resources Authority (WRA), conducting a hydrogeological survey, and ensuring environmental compliance.

The survey helps determine water availability, depth, and drilling feasibility. Without it, drilling may fail or produce low water yield.

Proper documentation ensures your project is approved and avoids legal penalties.
          `,
        },
        {
          title: "What to look for when drilling a borehole",
          content: `
When drilling a borehole, it is important to consider the location, soil type, water table depth, and the experience of the drilling company.

A professional company will conduct site surveys, use modern drilling machines, and ensure proper casing and gravel packing.

Quality materials and correct installation determine the lifespan of your borehole system.
          `,
        },
        {
          title: "No shortcuts in borehole drilling",
          content: `
Borehole drilling is a technical process that requires precision. Cutting corners often leads to collapsed boreholes, low water yield, or contamination.

Proper drilling procedures include site analysis, correct drilling depth, proper casing, and pump testing.

At Livam Solutions Ltd, we ensure every project follows industry standards for long-term reliability.
          `,
        },
      ].map((blog, index) => (
        <div className="col-md-4" key={index}>
          <div className="card shadow-sm border-0 h-100 p-3">
            <h5 className="fw-bold mb-3" style={{ color: "#01327b" }}>
              {blog.title}
            </h5>

            <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
              {blog.content.substring(0, 200)}...
            </p>

            <button className="btn btn-primary btn-sm mt-2">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
    
  );
};

export default Blog;