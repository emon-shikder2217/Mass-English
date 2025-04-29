import { BsBoxArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Contact.css';
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactBgOverlay"></div>
      <Link to="/" className="backArrow">
        <BsBoxArrowLeft />
      </Link>
      
      <ContactForm />
    </div>
  )
}
export default Contact