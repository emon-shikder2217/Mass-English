import './ContactForm.css';

const ContactForm = () => {
  return (
    <>
  

      <form
        className="contactForm"
      >
        <div className="name">
          <input className="name_input" type="text" name="name" required />
          <div className="labelline">Enter Your Name</div>
        </div>
        <div className="email">
          <input className="email_input" type="email" name="email" required />
          <div className="label_line">Enter Your Email</div>
        </div>
        <div className="textarea">
          <textarea
            className="message_input"
            name="message"
            type="text"
            required
          />
          <div className="label_line_msg">Enter Your Message</div>
        </div>
        <div className="button_container">
          <button className="contact_btn" type="submit">
            Submit
          </button>
        </div>
      </form>
     
    </>
  )
}
export default ContactForm;

