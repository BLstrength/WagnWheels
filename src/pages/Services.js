import ContactForm from '../components/ContactForm'

const addOns = [
  {
    name: 'Premium Nail Filing',
    description:
      'Premium nail filing smooths the sharp edges of your dog\'s nails into a gentle, rounded shape using a Dremel tool, creating a polished finish that reduces scratches to floors, furniture, and family while maintaining proper nail length and health.',
  },
  {
    name: 'Teeth Brushing',
    description:
      'Our Teeth Brushing is a gentle brushing of your pets teeth with pet safe toothpaste to freshen your pet\'s breath and support long term dental health while helping those teeth stay shiny white!',
  },
  {
    name: 'Flea Removal',
    description:
      'Flea removal uses an unmedicated bath specially formulated to loosen and wash fleas from your pet\'s coat, followed by an all‑over flea comb to remove any remaining fleas and debris.',
  },
  {
    name: 'Skunk Treatment',
    description:
      'Our skunk treatment is a gentle, specialized de-skunking treatment to effectively remove odor and restore your pet's freshness.',
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
            Pricing varies by pet size, breed, and coat condition
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
