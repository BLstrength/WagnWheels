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
            <path d="M 0.26,0.42 C 0.35,0.36 0.44,0.40 0.50,0.44 C 0.56,0.40 0.65,0.36 0.74,0.42 C 0.84,0.47 0.88,0.58 0.86,0.68 C 0.84,0.79 0.75,0.88 0.64,0.92 C 0.58,0.94 0.54,0.96 0.50,0.96 C 0.46,0.96 0.42,0.94 0.36,0.92 C 0.25,0.88 0.16,0.79 0.14,0.68 C 0.12,0.58 0.16,0.47 0.26,0.42 Z"/>
            <ellipse cx="0.175" cy="0.31"  rx="0.095" ry="0.125"/>
            <ellipse cx="0.38"  cy="0.17"  rx="0.09"  ry="0.125"/>
            <ellipse cx="0.62"  cy="0.17"  rx="0.09"  ry="0.125"/>
            <ellipse cx="0.825" cy="0.31"  rx="0.095" ry="0.125"/>
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
