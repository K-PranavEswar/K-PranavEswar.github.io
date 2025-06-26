import React, { useState } from "react";
import "./css/Contact.css";
import { BiMap, BiEnvelope, BiPhone } from "react-icons/bi";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("http://localhost/contact-form/contact.php", formData);
      if (res.data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error. Try again later.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 className="wave-title">
            {"Let's Communicate!".split("").map((char, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </div>

        <div className="row mt-1">
          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="info">
              <div className="address d-flex align-items-start">
                <BiMap className="icon me-3" />
                <div>
                  <h4>Location:</h4>
                  <p>Thiruvallam, Trivandrum, Kerala 695027</p>
                </div>
              </div>

              <div className="email d-flex align-items-start mt-4">
                <BiEnvelope className="icon me-3" />
                <div>
                  <h4>Email:</h4>
                  <p>pranavartist1@gmail.com</p>
                </div>
              </div>

              <div className="phone d-flex align-items-start mt-4">
                <BiPhone className="icon me-3" />
                <div>
                  <h4>Call:</h4>
                  <p>+91 9074261433</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8 mt-5 mt-lg-0">
            <form className="email-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mt-3">
                <textarea
                  name="message"
                  rows="5"
                  className="form-control"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="text-center mt-3">
                <button type="submit">Send Message</button>
                <p className="form-status mt-2">{status}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
