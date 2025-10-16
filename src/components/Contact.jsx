import React, { useState } from "react";
import { motion } from "framer-motion";
import "./css/Contact.css";
import { BiMap, BiEnvelope, BiPhone } from "react-icons/bi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE", // IMPORTANT: PASTE YOUR KEY HERE
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      if (res.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ ...formData, name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 5000); // Clear status after 5 seconds
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="info-item">
            <BiMap className="icon" />
            <div>
              <h4>Location:</h4>
              <p>Thiruvallam, Trivandrum, Kerala 695027</p>
            </div>
          </div>
          <div className="info-item">
            <BiEnvelope className="icon" />
            <div>
              <h4>Email:</h4>
              <p>pranavartist1@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <BiPhone className="icon" />
            <div>
              <h4>Call:</h4>
              <p>+91 9074261433</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          </div>
          <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
          <textarea name="message" rows="6" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Send Message</button>
          {status && <p className="form-status">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;