import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import PhotoCarousel from '../components/PhotoCarousel'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Grooming Upgraded</h1>
          <p className="hero-sub">
            Premium service without the hassle.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-gold">Book Now</a>
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
            We bring the salon to you! Making grooming a breeze for pets and their owners alike.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>We Come To You</h3>
              <p>
                No more stressful trips to the salon. Our fully equipped grooming van pulls right up to your driveway.
              </p>
            </div>
            <div className="feature-card">
              <h3>One-on-One Attention</h3>
              <p>
                Your pet gets our undivided focus throughout the entire appointment. No more waiting in kennels with other animals.
              </p>
            </div>
            <div className="feature-card">
              <h3>Professional Results</h3>
              <p>
                Our team of experienced groomers use premium, pet-safe products to keep your dog or cat looking and feeling their best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <svg style={{position:'absolute',width:0,height:0}} aria-hidden="true">
        <defs>
          <clipPath id="paw-clip" clipPathUnits="objectBoundingBox">
            <ellipse cx="0.5"  cy="0.65" rx="0.44" ry="0.34"/>
            <ellipse cx="0.16" cy="0.22" rx="0.13" ry="0.11"/>
            <ellipse cx="0.36" cy="0.13" rx="0.12" ry="0.10"/>
            <ellipse cx="0.64" cy="0.13" rx="0.12" ry="0.10"/>
            <ellipse cx="0.84" cy="0.22" rx="0.13" ry="0.11"/>
          </clipPath>
        </defs>
      </svg>
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
                Our grooming van arrives at your home at the scheduled time
                fully stocked and ready to go.
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Fresh and Clean Pet</h3>
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
