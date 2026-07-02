import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Introduction Section */}
      

      {/* Contact Details Section */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row g-4">
          {/* Contact Details */}
          <div className="col-md-6">
            <p>Our office is located in Lurambi, Kakamega County, opposite KK Hotel along the Kakamega–Malava Road.</p>
            <h4>Our Office</h4>
            <p>
              <strong>Address:</strong> Lurambi,Kakamega town, Kenya
            </p>
            <p>
              <strong>Phone:</strong> +254 733372788
            </p>
            <p>
              <strong>Email:</strong> livamcompany@gmail.com
            </p>
            <p>
              <strong>Hours:</strong> Mon - Sat: 8:00 AM - 5:00 PM
            </p>
              {/* Social Media */}
  <div className="mt-4">
    <h5>Follow Us</h5>

    <a
      href="https://www.facebook.com/profile.php?id=61590446234251"
      target="_blank"
      rel="noreferrer"
      className="me-3 text-primary social-icon"
    >
      <FaFacebook size={25} />
    </a>
  <a
       href="https://www.instagram.com/livamsolutions_ltd?igsh=aWZzN3JzZmc3czdi"
       target="_blank"
       rel="noopener noreferrer"
       className="me-3 text-primary social-icon"
        >
        <FaInstagram />
          </a>
               <a
  href="https://www.youtube.com/@LivamSolutionsLtd"
  target="_blank"
  rel="noopener noreferrer"
  className="me-3 text-danger social-icon"
>
  <FaYoutube />
</a>
    <a
      href="https://www.tiktok.com/@livamsolutions_limited?_r=1&_t=ZS-96eQUwHOD5Q"
      target="_blank"
      rel="noreferrer"
      className="me-3 text-dark social-icon"
    >
      <FaTiktok size={25} />
    </a>
  <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-dark social-icon"
              >
                <FaLinkedinIn />
              </a>
    <a
      href="https://twitter.com/yourusername"
      target="_blank"
      rel="noreferrer"
      className="text-info social-icon"
    >
      <FaTwitter size={25} />
    </a>
  </div>
  </div>

          {/* Google Map */}
          <div className="col-md-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.160342169514!2d34.746126499999995!3d0.28186049999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17803c37cdba7711%3A0xd7380a06dc908a6a!2sKakamega!5e0!3m2!1sen!2ske!4v1776861034958!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Contact;
