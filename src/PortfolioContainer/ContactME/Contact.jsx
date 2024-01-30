import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";
import Aos from "aos";
function Contact() {
  const [errors, setErrors] = useState({});

  const form = useRef();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields before sending the email
    if (validateForm()) {
      emailjs
        .sendForm(
          "service_ujmm5hq",
          "template_ihpr6pm",
          form.current,
          "QmNiC9DaDQf0DpcC8"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
            console.log("Not send");
          }
        );
    } else {
      console.log("Form validation failed. Please check your inputs.");
    }
  };

  const validateForm = () => {
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    // Initialize errors object
    const newErrors = {};

    // Simple validation checks
    if (!name) {
      newErrors.user_name = "Name is required";
    } else if (!email) {
      newErrors.user_email = "Email is required";
      alert("Email is required");
    } else {
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.user_email = "Invalid email address";
        alert("Invalid email address");
      }
    }

    if (!message) {
      newErrors.message = "Message is required";
      alert("Message required");
    }

    // Update state with errors
    setErrors(newErrors);

    // If all validations pass
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="form-container" id="contact">
      <div className="header3 mb-5" data-Aos="slide-right">
        <h1>Let's Get In Touch</h1>
      </div>
      <form
        className="contact-form"
        ref={form}
        onSubmit={sendEmail}
        data-Aos="slide-up"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="Input-field"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="Input-field"
        />

        <textarea name="message" placeholder="Message" />
        <input type="submit" value="Send" className="send-btn" />
      </form>
    </div>
  );
}

export default Contact;
