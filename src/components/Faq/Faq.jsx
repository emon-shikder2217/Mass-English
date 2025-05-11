import { useState } from "react";
import "./Faq.css";

function Faq() {
  const faqs = [
    {
      question: "How do I reply?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "What's the fee of this academy?",
      answer: "It varies based on course, but generally affordable for all.",
    },
    {
      question: "Is this course available online?",
      answer: "Yes, it's fully online and self-paced.",
    },
    {
      question: "Can I get a refund?",
      answer: "Refunds are available within 14 days of purchase.",
    },
    {
      question: "Do I need prior experience?",
      answer: "No, beginners are welcome!",
    },
    {
      question: "Do I need prior experience?",
      answer: "No, beginners are welcome!",
    },
    {
      question: "Do I need prior experience?",
      answer: "No, beginners are welcome!",
    },
    {
      question: "Do I need prior experience?",
      answer: "No, beginners are welcome!",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h1 className="faqTitle">FREQUENTLY ASKED <br /> QUESTIONS</h1>
      <ul className="faq">
        {faqs.map((faq, index) => (
          <li
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="q" onClick={() => toggle(index)}>
              <span
                className={`arrow ${
                  openIndex === index ? "arrow-rotated" : ""
                }`}
              ></span>
              <span>{faq.question}</span>
            </div>
            <div className="a">
              <p>{faq.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Faq;