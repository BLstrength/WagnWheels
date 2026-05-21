import ContactForm from '../components/ContactForm'

const services = [
  {
    icon: '🛁',
    name: 'Bath & Blow Dry',
    description:
      'A relaxing bath with premium shampoo and conditioner, followed by a professional blow dry and thorough brush out.',
    tag: 'Great for in-between grooms',
  },
  {
    icon: '✂️',
    name: 'Full Groom',
    description:
      'Our signature service — bath, blow dry, breed-specific haircut or style, nail trim, ear cleaning, and finishing touches.',
    tag: 'Most popular',
  },
  {
    icon: '💅',
    name: 'Nail Trim & File',
    description:
      'Trimming and filing nails to a safe, comfortable length. Keeps your pet moving happily and your floors scratch-free.',
    tag: 'Available as add-on',
  },
  {
    icon: '🌊',
    name: 'De-Shedding Treatment',
    description:
      'Specialized shampoo, conditioner, and deshedding tools to dramatically reduce loose fur and seasonal shedding.',
    tag: 'Perfect for heavy shedders',
  },
  {
    icon: '👂',
    name: 'Ear Cleaning',
    description:
      'Gentle and thorough ear cleaning to remove wax buildup and reduce the risk of infections — safe for dogs and cats.',
    tag: 'Available as add-on',
  },
  {
    icon: '🦷',
    name: 'Teeth Brushing',
    description:
      'A gentle brush with pet-safe toothpaste to freshen your pet\'s breath and support long-term dental health.',
    tag: 'Available as add-on',
  },
  {
    icon: '🐛',
    name: 'Flea & Tick Treatment',
    description:
      'Medicated bath using veterinarian-recommended flea and tick shampoo to keep your pet and home pest-free.',
    tag: 'Available on request',
  },
  {
    icon: '🐶',
    name: "Puppy's First Groom",
    description:
      'A gentle, positive introduction to grooming for puppies and kittens — building confidence for a lifetime of easy appointments.',
    tag: 'For pets under 1 year',
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
                <div className="service-icon">{service.icon}</div>
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
