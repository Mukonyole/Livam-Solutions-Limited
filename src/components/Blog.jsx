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

    </div>
  );
};

export default Blog;