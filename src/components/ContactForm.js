import { useState } from 'react'

const emptyForm = { name: '', address: '', contact: '', description: '' }

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm(emptyForm)
    }, 5000)
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <h2>Book Your Appointment</h2>
          <p>
            We come to you! Fill out the form below and we'll reach out to
            schedule a grooming session for your furry family member.
          </p>
        </div>

        {submitted ? (
          <div className="form-success">
            🐾 Thank you! We'll be in touch shortly to confirm your appointment.
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Your service address"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact">Phone or Email</label>
              <input
                id="contact"
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Phone number or email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Pet Description</label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Tell us about your pet(s) — breed(s), size(s), and any special needs or requests..."
                required
                rows={4}
              />
            </div>

            <button type="submit" className="btn btn-gold form-submit">
              Send Appointment Request 🐾
            </button>
          </form>
        )}

        <div className="footer-bottom">
          © {new Date().getFullYear()} Wag N Wheels · Mobile Pet Grooming
        </div>
      </div>
    </footer>
  )
}
