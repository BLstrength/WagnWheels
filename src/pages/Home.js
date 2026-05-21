import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import PhotoCarousel from '../components/PhotoCarousel'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Where Convenience Meets Luxury</h1>
          <p className="hero-sub">
            Professional grooming brought straight to you—easy for you, better for your pet.
          </p>
          <div className="hero-btns">
            <Link to="/contact" className="btn btn-gold">Book Now</Link>
            <Link to="/services" className="btn btn-outline">Our Services</Link>
          </div>
        </div>
        <PhotoCarousel />
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Wag N Wheels?</h2>
          <p className="section-sub text-center">
            We bring the salon to you — making grooming a breeze for pets and their owners alike.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚐</div>
              <h3>We Come To You</h3>
              <p>
                No more stressful trips to the salon. Our fully-equipped grooming
                van pulls right up to your driveway.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🐾</div>
              <h3>One-on-One Attention</h3>
              <p>
                Your pet gets our undivided focus throughout the entire appointment
                — no waiting in kennels with other animals.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✂️</div>
              <h3>Professional Results</h3>
              <p>
                Experienced groomers using premium, pet-safe products to keep
                your dog or cat looking and feeling their best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title text-center">How It Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Book Online</h3>
              <p>
                Fill out our quick contact form with your pet's info and we'll
                schedule a convenient time for you.
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>We Come To You</h3>
              <p>
                Our grooming van arrives at your home at the scheduled time —
                fully stocked and ready to go.
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Happy Pet, Happy You</h3>
              <p>
                Your freshly groomed, happy pet is back in your arms within a
                couple of hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  )
}
