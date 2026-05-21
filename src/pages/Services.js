import ContactForm from '../components/ContactForm'

const addOns = [
  {
    name: 'Premium Nail Filing',
    description:
      'Premium nail filing involves smoothing the sharp edges of your dog\'s nails into a gentle, rounded shape using a Dremel tool. This creates a more comfortable, polished finish that reduces the risk of scratches to your floors, furniture, and family while still maintaining proper nail length and health.',
  },
  {
    name: 'Teeth Brushing',
    description:
      'A gentle brush with pet safe toothpaste to freshen your pet\'s breath and support long term dental health.',
  },
  {
    name: 'Flea Removal',
    description:
      'Flea Removal begins with an unmedicated bath specially formulated to loosen and wash away fleas from your pet\'s coat, followed by a thorough all‑over flea comb to remove any remaining fleas and debris. This gentle, non‑chemical approach helps reduce flea populations on your pet while keeping their skin and coat comfortable.',
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
