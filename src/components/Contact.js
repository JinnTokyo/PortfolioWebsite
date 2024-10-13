import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ydbir0a', 'template_nxa0xeq', form.current, 'B7NrLqK42s5auZpHS')
      .then((result) => {
          alert('Message sent successfully!');
      }, (error) => {
          alert('Failed to send message. Please try again.');
      });

    e.target.reset(); // Clear the form
  };

  return (
    <section id="contact" className="Contact">
      <div className="ContactContainer">
        <h2 className="ContactMe">Contact Me</h2>
        <p className="contact-description">
          I’d love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out through the form below or via email.
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required className="input-field" />
          <input type="email" name="user_email" placeholder="Your Email" required className="input-field" />
          <textarea name="message" placeholder="Your Message" required className="message-field"></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

  