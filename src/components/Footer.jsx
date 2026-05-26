import React, { useEffect, useState, useRef } from "react";
import { footer } from "../Data";
import "./footer.css";


const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const sectionRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // ✅ FORM SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xrejkodl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setEmail("");
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <>
      <section
        ref={sectionRef}
        className={`footerContact ${isVisible ? "animate" : ""}`}
      >
        <div className="container">
          <div className="send flex">
            <div className={`text ${isVisible ? "fade-in" : ""}`}>
              <span>Do You Have Questions?</span>
              <p>We'll help you to grow your career and growth.</p>
            </div>

            <a
              href={`https://wa.me/254722372788?text=${encodeURIComponent(
                "Hello customer care @Livam Solutions Limited, I have visited your website and I need your assistance."
              )}`}
              className={`btn5 ${isVisible ? "slide-in" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#fff",
                backgroundColor: "#01327b",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
  <div className="container">
    <div className="row gy-4">

      {/* Newsletter */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="box">
          <h3>Need Help With Anything?</h3>

          <p>
            Receive updates, offers and discounts in your inbox.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-2"
              required
            />

            <button className="btn btn-primary w-100">
              Subscribe
            </button>
          </form>

          {status === "SUCCESS" && (
            <p style={{ color: "green" }}>Subscribed!</p>
          )}

          {status === "ERROR" && (
            <p style={{ color: "red" }}>Try again</p>
          )}
        </div>
      </div>

      {/* Links */}
      {footer.map((val, index) => (
        <div className="col-12 col-md-6 col-lg-3" key={index}>
          <div className="box">
            <h3>{val.title}</h3>

            <ul>
              {val.text.map((item, i) => (
                <li key={i}>
                  <a href={item.link}>{item.list}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

    </div>
  </div>
</footer>

      <div className="legal">
        <span>© {currentYear}. Livam Solutions Ltd.</span>
      </div>
    </>
  );
};

export default Footer;