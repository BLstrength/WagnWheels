import ContactForm from '../components/ContactForm'

const services = [
  {
    name: 'Full Groom',
    description:
      'Our signature service — bath, blow dry, breed-specific haircut or style, nail trim, ear cleaning, and finishing touches.',
    tag: 'Most popular',
  },
  {
    name: 'Premium Nail Filing',
    description:
      'Trimming and filing nails to a safe, comfortable length. Keeps your pet moving happily and your floors scratch-free.',
    tag: 'Available as add-on',
  },
  {
    name: 'Teeth Brushing',
    description:
      'A gentle brush with pet-safe toothpaste to freshen your pet\'s breath and support long-term dental health.',
    tag: 'Available as add-on',
  },
  {
    name: 'Flea Treatment',
    description:
      'Medicated bath using veterinarian-recommended flea shampoo to keep your pet and home pest-free.',
    tag: 'Available on request',
  },
  {
    name: 'Skunk Treatment',
    description:
      'Specialized de-skunking treatment to safely and effectively neutralize odor and get your pet fresh and clean again.',
    tag: 'Available on request',
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
          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="service-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className="service-tag">{service.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  )
}
