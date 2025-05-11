import './ContactForm.css';
import contactImg from '../../assets/contactImg.png';

const ContactForm = () => {
  return (
    <>
      <div className="contactContainerr">

        <div className="contactBox">
          <form className="contactForm">
          <div className="name">
            <input
              className="name_input"
              type="text"
              name="name"
              required
              placeholder="Enter Your Name"
            />
          </div>
          <div className="email">
            <input
              className="email_input"
              type="email"
              name="email"
              required
              placeholder="Enter Your Email"
            />
          </div>
          <div className="textarea">
            <textarea
              className="message_input"
              name="message"
              type="text"
              required
              placeholder="Enter Your Message"
            />
          </div>
          <div className="button_container">
            <button className="contact_btn" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="cLine"></div>
        <div className="contactImg">
          <img src={contactImg} alt="contactImg" />
        </div>
        </div>
        
        
      </div>
    </>
  );
};

export default ContactForm;