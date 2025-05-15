import "./ContactForm.css";
import contactImg from "../../assets/contactImg.png";
import toast from "react-hot-toast";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/emonshikder2217@gmail.com",
        {
          method: "POST",
          headers: {
          Accept: "application/json",
          },
          body: formData,
        }
      );

      if (res.ok) {
        toast.success("✅ Message sent successfully!", {
          style: {
            fontFamily: "'outfit', sans-serif",
            fontSize: "20px",
          },
        });
        form.reset(); // Clear input fields
      } else {
        toast.error("❌ Failed to send message!", {
          style: {
            fontFamily: "'outfit', sans-serif",
            fontSize: "20px",
          },
        });
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong!", {
        style: {
          fontFamily: "'outfit', sans-serif",
          fontSize: "20px",
        },
      });
    }
  };

  return (
    <div className="contactContainerr">
      <div className="contactBox">
        <div className="contactTitle">
          <h1 className="contactHeader">Get In Touch With Us</h1>
        </div>
        <div className="contactBoxx">
          <form className="contactForm" onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />
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
    </div>
  );
};

export default ContactForm;
