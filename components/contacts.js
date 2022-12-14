import NextImage from "./image"

const Contacts = ({ sectionContacts }) => {
  const copyText = () => {
    window.prompt("Copy text?", sectionContacts.attributes.addressLink)
  }

  return (
    <section className="contacts" id="contacts">
      <div className="uk-container uk-container-large">
        <div className="contacts__content">
          <h1 className="contacts__heading">
            {sectionContacts.attributes.title}
          </h1>
          <div className="contacts__grid uk-grid uk-grid-medium">
            <div className="uk-width-2-3 contacts__grid_text">
              <div className="contacts__address-block">
                <span className="address-block address-block__text">
                  {sectionContacts.attributes.addressLink}
                </span>
                <div
                  onClick={copyText}
                  className="address-block address-block__copy"
                >
                  <NextImage image={sectionContacts.attributes.buttonIcon} />
                </div>
              </div>
            </div>
            <div className="uk-width-1-3 contacts__grid_button">
              <div className="contacts__button-block">
                <button className="button button-block__button">
                  <a href={"mailto:" + sectionContacts.attributes.addressLink}>
                    {sectionContacts.attributes.buttonText}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contacts
