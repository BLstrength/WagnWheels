import ContactForm from '../components/ContactForm'

const addOns = [
  {
    name: 'Premium Nail Filing',
    description:
      'Premium nail filing smooths the sharp edges of your dog\'s nails into a gentle, rounded shape using a Dremel tool, creating a polished finish that reduces scratches to floors, furniture, and family while maintaining proper nail length and health.',
    price: '$10',
  },
  {
    name: 'Teeth Brushing',
    description:
      'Our Teeth Brushing is a gentle brushing of your pets teeth with pet safe toothpaste to freshen your pet\'s breath and support long term dental health while helping those teeth stay shiny white!',
    price: '$10',
  },
  {
    name: 'Flea Removal',
    description:
      'Flea removal uses an unmedicated bath specially formulated to loosen and wash fleas from your pet\'s coat, followed by an all‑over flea comb to remove any remaining fleas and debris.',
    price: '$100 – $200',
  },
  {
    name: 'Skunk Treatment',
    description:
      "Our skunk treatment is a gentle, specialized de-skunking treatment to effectively remove odor and restore your pet's freshness.",
    price: '$100 – $200',
  },
]

const fullServicePrices = [
  { size: 'S', range: '$65 – $95' },
  { size: 'M', range: '$75 – $100' },
  { size: 'L', range: '$80 – $110' },
  { size: 'XL', range: '$90 – $130' },
  { size: 'Cat', range: '$70 – $100' },
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
            Pricing depends on breed, coat condition and if you're outside our normal travel radius but typical prices are below
          </span>

          <div className="services-featured-row">
            <div className="service-card service-card--featured">
              <h3>Full Service Groom</h3>
              <p>The Full Service Groom includes a bath, conditioner, blow dry, brushing, deshedding, haircut, nail trimming, and ear cleaning, giving your dog a complete spa‑style grooming experience from start to finish.</p>
              <div className="service-price-grid">
                {fullServicePrices.map(({ size, range }) => (
                  <div key={size} className="service-price-row">
                    <span className="service-price-size">{size}</span>
                    <span className="service-price-range">{range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="services-grid">
            {addOns.map((service, i) => (
              <div key={i} className="service-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <span className="service-price-addon">{service.price}</span>
                  <span className="service-tag">Available as add-on</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  )
}
