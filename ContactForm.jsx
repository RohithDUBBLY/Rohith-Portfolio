import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zcae0ev",      // from EmailJS
        "template_ib4r52b",     // from EmailJS
        form.current,
        "_6lU5IstjPMaHUlVq"       // from EmailJS
      )
      .then(
        (result) => {
          console.log("Message sent!", result.text);
          alert("✅ Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" required />

      <label>Email</label>
      <input type="email" name="email" required />

      <label>Message</label>
      <textarea name="message" required />

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
