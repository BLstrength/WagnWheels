import ContactForm from '../components/ContactForm'

const addOns = [
  {
    name: 'Premium Nail Filing',
    description:
      'Trimming and filing nails to a safe, comfortable length. Keeps your pet moving happily and your floors scratch-free.',
  },
  {
    name: 'Teeth Brushing',
    description:
      'A gentle brush with pet-safe toothpaste to freshen your pet\'s breath and support long-term dental health.',
  },
  {
    name: 'Flea Treatment',
    description:
      'Medicated bath using veterinarian-recommended flea shampoo to keep your pet and home pest-free.',
  },
  {
    name: 'Skunk Treatment',
    description:
      'Specialized de-skunking treatment to safely and effectively neutralize odor and get your pet fresh and clean again.',
  },
]

export default function Services() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Professional grooming packages for dogs and cats of all breeds and sizes.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <span className="services-note">
            Pricing varies by pet size, breed, and coat condition — contact us for a personalized quote!
          </span>

          <div className="services-featured-row">
            <div className="service-card service-card--featured">
              <h3>Full Service Groom</h3>
              <p>The Full Service Groom includes a bath, conditioner, blow dry, brushing, deshedding, haircut, nail trimming, and ear cleaning, giving your dog a complete spa‑style grooming experience from start to finish.</p>
            </div>
          </div>

          <div className="services-grid">
            {addOns.map((service, i) => (
              <div key={i} className="service-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className="service-tag">Available as add-on</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  )
}
