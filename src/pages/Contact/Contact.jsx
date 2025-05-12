import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './Contact.css';
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactBgOverlay"></div>
      <Link to="/" className="backArrow">
        <FaArrowLeftLong />
      </Link>
      
      <ContactForm />
    </div>
  )
}
export default Contact