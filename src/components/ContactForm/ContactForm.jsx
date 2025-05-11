import './ContactForm.css';

const ContactForm = () => {
  return (
    <>
      <div className="contactContainerr">
        <h2>Working...</h2>
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
      </div>
    </>
  );
};

export default ContactForm;