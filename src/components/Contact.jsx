import React from 'react';
import './css/Contact.css';
import { BiMap, BiEnvelope, BiPhone } from 'react-icons/bi';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row mt-1">
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
            <form className="email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div className="my-3">
                <div className="loading">Loading...</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>

              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
