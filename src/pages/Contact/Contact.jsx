import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import AnimatedPage from "../../AnimatedPage";

const Contact = () => {
  return (
    <AnimatedPage>
      <div className="contactContainer">
        <div className="contactBgOverlay"></div>
        <Link to="/" className="backArrow">
          <FaArrowLeftLong />
        </Link>
        <ContactForm />
      </div>
    </AnimatedPage>
  );
};
export default Contact;
