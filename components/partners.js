import NextImage from "./image"

const Partners = ({ sectionPartner, partners }) => {
  return (
    <section className="partners" id="partners">
      <div className="partners__content uk-container uk-container-large">
        <h2 className="partners__title">{sectionPartner.attributes.title}</h2>
        <div className="uk-grid uk-grid-medium">
          {partners.map((partner, i) => {
            return (
              <div className="uk-width-1-3" key={i}>
                <NextImage image={partner.attributes.image} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Partners
