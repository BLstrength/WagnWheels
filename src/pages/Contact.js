import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Ready to book? Have questions? We'd love to hear from you!</p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon">📞</div>
              <h3>Phone</h3>
              <p>(555) 000-0000</p>
              <span>Mon – Sat, 8am – 6pm</span>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">✉️</div>
              <h3>Email</h3>
              <p>hello@wagnwheels.com</p>
              <span>We reply within 24 hours</span>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">📍</div>
              <h3>Service Area</h3>
              <p>Greater Metro Area</p>
              <span>Contact us to confirm your location</span>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  )
}
