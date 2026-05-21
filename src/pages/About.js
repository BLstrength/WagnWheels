import ContactForm from '../components/ContactForm'

export default function About() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>About Wag N Wheels</h1>
          <p>Your pet's personal pit crew, delivered to your door.</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                At Wag N Wheels, everything we do is rooted in a genuine love for animals and a mission to make grooming as stress-free and convenient as possible. As a pet owner myself, I understand the challenges. Dogs that get overly excited for car rides, pets that feel anxious in transit, or cats who protest the entire journey. That is exactly why Wag N Wheels was created, to bring a calm, professional grooming experience directly to your doorstep.
              </p>
              <p>
                Our fully equipped mobile grooming van has everything needed to care for your pet, including premium shampoos, conditioners, and professional tools. More importantly, every appointment is conducted one-on-one in a quiet, private environment. This means no crowded salons, no waiting, and no exposure to other animals. Just focused, personalized care.
              </p>
              <p>
                Whether your pet gets car sick, sheds all over your vehicle, or simply feels stressed leaving home, we eliminate that burden by bringing the grooming salon to you. From small breeds like Chihuahuas to large dogs like Golden Retrievers, and even cats like Maine Coons, every pet is treated with the same level of patience, attention, and care we give our own.
              </p>
              <p>
                At Wag N Wheels, your pet is not just another appointment, they are family.
              </p>
            </div>

            <div className="about-values">
              <div className="value-card">
                <span className="value-icon">💛</span>
                <h3>We Love Animals</h3>
                <p>Every pet that steps into our van gets treated like royalty — because they deserve it.</p>
              </div>
              <div className="value-card">
                <span className="value-icon">🛡️</span>
                <h3>Safety First</h3>
                <p>We use only pet-safe, high-quality products — gentle on skin and coats for all breeds.</p>
              </div>
              <div className="value-card">
                <span className="value-icon">🌟</span>
                <h3>Experienced Groomers</h3>
                <p>Professionally trained and experienced with dogs and cats of all breeds and sizes.</p>
              </div>
              <div className="value-card">
                <span className="value-icon">🏡</span>
                <h3>Your Schedule, Your Home</h3>
                <p>We work around your routine and come directly to you — no drop-offs, no pickups.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  )
}
