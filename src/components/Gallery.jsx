import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from "../images/gallery6.jpg";
import gallery7 from "../images/gallery7.jpg";

import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Image Gallery Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h1
            className="text-center fw-bold mb-4"
            style={{ color: "#01327b" }}
          >
            Our Gallery
          </h1>

          <p className="text-center text-muted mb-5">
            Explore some of our completed projects, drilling operations,
            water systems installations, and field activities across Kenya.
          </p>

          <div className="row g-4">
            {[
              gallery1,
              gallery2,
              gallery3,
              gallery4,
              gallery5,
              gallery6,
              gallery7,
            ].map((image, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow-sm overflow-hidden">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="img-fluid"
                    style={{
                      height: "300px",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-5 bg-white" data-aos="fade-up">
        <div className="container">
          <h2
            className="text-center fw-bold mb-5"
            style={{ color: "#01327b" }}
          >
            Project Videos
          </h2>

          <div className="row g-4">
            {[video1, video2].map((video, index) => (
              <div className="col-md-6" key={index}>
                <div className="card border-0 shadow-sm overflow-hidden">
                  <video
                    controls
                    className="w-100"
                    style={{
                      height: "300px",
                      objectFit: "cover",
                    }}
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support videos.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;