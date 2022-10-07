import NextImage from "./image"

const Contacts = ({ sectionContacts }) => {
  const copyText = () => {
    if (typeof window !== "undefined") {
      window.navigator.clipboard
        .writeText(sectionContacts.attributes.addressLink)
        .then(() => {})
    }
  }

  return (
    <section className="contacts" id="contacts">
      <div className="uk-container uk-container-large">
        <div className="contacts__content">
          <h1 className="contacts__heading">
            {sectionContacts.attributes.title}
          </h1>
          <div className="uk-grid uk-grid-medium">
            <div className="uk-width-2-3">
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
            <div className="uk-width-1-3">
              <div className="contacts__button-block">
                <a
                  className="button-block__button"
                  href={"mailto:" + sectionContacts.attributes.addressLink}
                >
                  {sectionContacts.attributes.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contacts
