import { useState } from 'react'

const emptyForm = { name: '', address: '', contact: '', breed: '', size: '', description: '' }

const EMAILJS_SERVICE_ID  = 'service_je2x0if'
const EMAILJS_TEMPLATE_ID = 'template_p6jh1gs'
const EMAILJS_PUBLIC_KEY  = 'EKfpgTI13qg9fLcl8'

async function sendEmail(form) {
  await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    title:   'New Appointment Request',
    name:    form.name,
    email:   form.contact,
    message: `Address: ${form.address}\nPhone/Email: ${form.contact}\nBreed: ${form.breed}\nSize: ${form.size}\n\nNotes: ${form.description}`,
  })
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

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="breed">Breed</label>
                <input
                  id="breed"
                  type="text"
                  name="breed"
                  value={form.breed}
                  onChange={handleChange}
                  placeholder="Your pet's breed"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="size">Size of Pet</label>
                <input
                  id="size"
                  type="text"
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  placeholder="In Pounds"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Pet Description</label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Any special needs, behaviors, or requests? If you have more than one animal, add their info here too..."
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
