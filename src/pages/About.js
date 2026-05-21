import ContactForm from '../components/ContactForm'

export default function About() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>About Wag N Wheels</h1>
          <p>Passionate pet lovers bringing professional grooming to your doorstep.</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Wag N Wheels was born out of a love for animals and a desire to
                make pet grooming a truly stress-free experience. We know how
                much your furry family members mean to you — that's why we treat
                every dog and cat that hops into our tub with the same love and
                care we'd give our own.
              </p>
              <p>
                Our fully-equipped mobile grooming van brings everything needed
                to pamper your pet: premium shampoos, conditioners, professional
                tools, and a calm, private environment — all right outside your
                front door.
              </p>
              <p>
                Whether you have a tiny Chihuahua, a fluffy Maine Coon, or a
                large Golden Retriever, we have the experience and the tools to
                give them the perfect groom every single time.
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
