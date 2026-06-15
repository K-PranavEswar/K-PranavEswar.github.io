import { memo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { SectionHeader } from '../components/SectionHeader'
import { riseIn, viewport } from '../animations/motion'

// Shared Styles
const inputStyle = {
  width: '100%',
  padding: '1.1rem',
  borderRadius: '12px',
  border: '1px solid rgba(239, 68, 68, 0.15)', // Subtle red border
  background: 'rgba(15, 0, 0, 0.4)', // Dark red-tinted black
  color: '#ffffff',
  outline: 'none',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
}

function Contact() {
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)

    emailjs
      .sendForm(
        'service_am84p9h', // Keep these Service/Template IDs
        'template_8cebezc',
        formRef.current,
        { publicKey: 'ChEePP1sR1Htl5cz-' } // Keep this Public Key
      )
      .then(() => {
        setSuccess(true)
        formRef.current.reset()
        setTimeout(() => setSuccess(false), 4000)
      })
      .catch(() => {
        alert('Failed to send message ❌')
      })
      .finally(() => {
        setSending(false)
      })
  }

  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        padding: '8rem 1.5rem',
        background: '#030000', // Pure dark background matching education section
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Glow Effect - Deep Red */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none', // Important: won't interfere with clicks
          zIndex: 0
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionHeader eyebrow="Get in touch" title="LET'S COLLABORATE" />

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
          <motion.div
            variants={riseIn}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            style={{
              width: '100%',
              maxWidth: '600px',
              padding: '2.5rem',
              background: 'linear-gradient(145deg, rgba(20, 0, 0, 0.6), rgba(5, 0, 0, 0.8))',
              backdropFilter: 'blur(20px)',
              borderRadius: '28px',
              border: '1px solid rgba(239, 68, 68, 0.2)', // Red glowing edge
              boxShadow: '0 25px 50px -12px rgba(220, 38, 38, 0.15), inset 0 0 20px rgba(239, 68, 68, 0.05)',
            }}
          >
            <form ref={formRef} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Name Field */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#ef4444', marginLeft: '4px', fontWeight: '600', letterSpacing: '0.05em' }}>Name</span>
                <input
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#ef4444';
                    e.target.style.background = 'rgba(239, 68, 68, 0.08)'; // subtle red glow on focus
                    e.target.style.boxShadow = '0 0 15px rgba(239, 68, 68, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(239, 68, 68, 0.15)';
                    e.target.style.background = 'rgba(15, 0, 0, 0.4)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Email Field */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#ef4444', marginLeft: '4px', fontWeight: '600', letterSpacing: '0.05em' }}>Email</span>
                <input
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#ef4444';
                    e.target.style.background = 'rgba(239, 68, 68, 0.08)';
                    e.target.style.boxShadow = '0 0 15px rgba(239, 68, 68, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(239, 68, 68, 0.15)';
                    e.target.style.background = 'rgba(15, 0, 0, 0.4)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Message Field */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#ef4444', marginLeft: '4px', fontWeight: '600', letterSpacing: '0.05em' }}>Message</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#ef4444';
                    e.target.style.background = 'rgba(239, 68, 68, 0.08)';
                    e.target.style.boxShadow = '0 0 15px rgba(239, 68, 68, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(239, 68, 68, 0.15)';
                    e.target.style.background = 'rgba(15, 0, 0, 0.4)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={sending}
                style={{
                  marginTop: '1rem',
                  padding: '1.1rem',
                  border: '1px solid rgba(239, 68, 68, 0.5)',
                  borderRadius: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  background: sending ? '#333' : 'linear-gradient(90deg, #ef4444, #991b1b)',
                  color: '#ffffff', // White text for better contrast against deep red
                  cursor: sending ? 'not-allowed' : 'pointer',
                  boxShadow: '0 10px 25px -5px rgba(239, 68, 68, 0.5)', // Stronger red glow
                }}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Success Message */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      textAlign: 'center',
                      color: '#fca5a5', // Light red for text readability
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      background: 'rgba(239, 68, 68, 0.1)',
                      padding: '1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      boxShadow: '0 0 15px rgba(239, 68, 68, 0.2)',
                    }}
                  >
                    Message sent successfully! I'll get back to you soon. 🚀
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default memo(Contact)