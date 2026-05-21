import { useState } from 'react'

const emptyForm = { name: '', address: '', contact: '', description: '' }

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

async function sendEmail(form) {
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id:  EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id:     EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name:   form.name,
        address:     form.address,
        contact:     form.contact,
        description: form.description,
        to_email:    'wagnwheelspa@gmail.com',
      },
    }),
  })
  if (!res.ok) throw new Error('EmailJS error')
}

export default function ContactForm() {
  const [form, setForm]     = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendEmail(form)
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        setForm(emptyForm)
      }, 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <h2>Book Your Appointment</h2>
          <p>
            We come to you! Fill out the form below and we'll reach out to
            schedule a grooming session for your furry family member.
          </p>
        </div>

        {status === 'sent' ? (
          <div className="form-success">
            Sent! We'll be in touch shortly to confirm your appointment.
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

            <p className="form-required-note">* All fields are required</p>

            {status === 'error' && (
              <p className="form-error">Something went wrong. Please try again or email us directly.</p>
            )}

            <button
              type="submit"
              className="btn btn-gold form-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Appointment Request 🐾'}
            </button>
          </form>
        )}

      </div>
    </footer>
  )
}
