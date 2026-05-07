import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const testimonials = [
    {
      name: "Pastor Samuel Mbayi-Seventh Day Adventist church- Chebwai College.",
      text: "Livam Solutions delivered exactly what they promised.From the site survey to drilling and installation, everything was handled professionally. We now have a reliable water source for our farm. Highly recommended.",
    },
    {
      name: "Pastor Daniel Lwambi-Seventh Day Adventist church - Khumusalaba church",
      text: "Very efficient and trustworthy team.They completed our borehole project on time and within budget. Their transparency and communication stood out the most.",
    },
    {
      name: " Enock Ligwilu-Kenya School of Government - Boyani ",
      text: "Quality work and excellent customer service.The team explained every step clearly and ensured we understood the process. The water yield exceeded our expectations.",
    },
    {
      name: "Shakillah Ouna-County Government of Kakamega - Isukha east polytechnic",
      text: "Best decision we made for our property.We struggled with water shortages for years, but Livam Solutions solved it permanently. Their expertise is unmatched.",
    },
    {
      name: "John Gichu-County Government of Kakamega - Mwikhomo pry school kakamega",
      text: "Professional from start to finish.Their equipment, skilled staff, and commitment to quality really impressed us. We would definitely work with them again.",
    },
    {
      name: "Eng.Ireri-Min Of Agriculture & Irrigation- Khaunga primary Water project",
      text: "Reliable and cost-effective services.Compared to other companies, Livam Solutions offered great value without compromising on quality.",
    },
    {
      name: "Meshack Kijuba-St. Ann's Academy, Lubao,Kakamega",
      text: "Fast, responsive, and dependable.They responded quickly to our inquiry and delivered the project faster than expected. Truly dependable partners.",
    },
    {
      name: "Natalia Nicholas-Orthodox church-Chavokere Church.",
      text: "Outstanding after-service support.Even after completing the project, they followed up to ensure everything was working perfectly. That level of care is rare..",
    },
    {
      name: "Carolyne Were-Orthopedic Hospital Kakamega.",
      text: "They turned our vision into reality.From drilling to pump installation, everything was handled seamlessly. We now have a complete water solution.",
    },
    {
      name: "Principal Shinoyi Wilbrodah-Samitsi Girls High school, Malava.",
      text: "Highly skilled and knowledgeable team.Their understanding of geology and water systems is impressive. We felt confident throughout the entire project.",
    },
  ];

  return (
    <section className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2
          className="text-center mb-4"
          style={{ color: "#01327b", fontWeight: "bold" }}
        >
          What Our Clients Say
        </h2>
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="d-flex flex-column align-items-center">
                  <div
                    className="card shadow-sm border-0 text-center"
                    style={{ maxWidth: "600px" }}
                  >
                    <div className="card-body">
                      <p className="card-text fs-5 text-muted">
                        "{testimonial.text}"
                      </p>
                      <h5 className="fw-bold mt-3">{testimonial.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <i className="fas fa-chevron-left fs-3 text-dark"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <i className="fas fa-chevron-right fs-3 text-dark"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
