import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown, ChevronUp } from "lucide-react"; // For dropdown icons

const AskedQuestions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  // FAQs data
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer water drilling, borehole maintenance, water testing and consultancy services, pump installation, Site survey and water storage solutions.",
    },
    {
      question: "How long does it take to drill a water well?",
      answer:
        "Typically, it takes 1-3 days depending on the depth and geological conditions.",
    },
    {
      question: "Do you provide borehole cleaning services?",
      answer:
        "Yes, we provide comprehensive borehole cleaning and maintenance services.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve Kakamega, Western Kenya, and other regions across the country.",
    },
    {
      question: "How do I know if I need a new water well?",
      answer:
        "ou may need a new water well if your current water source is unreliable, produces low pressure, has poor quality, requires frequent repairs, or no longer meets your household or business water needs.",
    },
    {
      question: "Do you conduct site surveys before drilling?",
      answer:
        "Yes, we carry out professional hydrogeological surveys to determine the best drilling location and increase the chances of success.",
    },
    {
      question: "How much does it cost to drill a borehole?",
      answer:
        "The cost depends on location, depth, and geological conditions, but we provide a detailed quotation after conducting a site survey.",
    },
    {
      question: "What happens if no water is found?",
      answer:
        "Our surveys are designed to minimize this risk, but in rare cases where water is not found, we advise on alternative solutions.",
    },
    {
      question: "How can I track my project progress?",
      answer:
        "Clients can track their project status through our tracking system or by contacting our support team.",
    },
    {
      question: "How do I maintain my borehole?",
      answer:
        "We recommend regular inspections and maintenance to ensure optimal performance.",
    },
    {
      question: "What equipment do you use for drilling?",
      answer:
        "We use modern, high-performance drilling rigs, air compressors, and specialized borehole equipment designed to handle different geological conditions, ensuring efficient and successful water drilling.",
    },
    {
      question: "How do I schedule a service with you?",
      answer:
        "You can contact us through our website or by phone to schedule a service.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container py-5" data-aos="fade-up">
      <h2
        className="text-center mb-4"
        style={{ color: "#01327b", fontWeight: "bold" }}
      >
        FAQ's
      </h2>
      <p className="text-center mb-5">
        Find answers to some of the most frequently asked questions about our
        services. If you have more questions, feel free to contact us.
      </p>
      <div className="row">
        {faqs.map((faq, index) => (
          <div className="col-lg-6 mb-4" key={index}>
            <div
              className="card shadow-sm border-0"
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#f8f9fa",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card-header d-flex justify-content-between align-items-center"
                style={{
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                  fontWeight: "bold",
                }}
                onClick={() => toggleAnswer(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {activeIndex === index && (
                <div className="card-body">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AskedQuestions;
