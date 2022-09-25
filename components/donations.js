import { useState } from "react"
import NextImage from "./image"
import Link from "next/link"

const Donations = ({ sectionDonation, sectionContacts }) => {
  const [selectedDonation, setSelectedDonation] = useState(0)
  const [selectedDonationBank, setSelectedDonationBank] = useState(0)
  const [selectedDonationCrypto, setSelectedDonationCrypto] = useState(0)

  const copyText = (text) => {
    if (typeof window !== "undefined") {
      window.navigator.clipboard.writeText(text).then(() => {})
    }
  }

  return (
    <section className="donations">
      <div className="donations__content uk-container uk-container-large">
        <h2 className="donations__title">
          {sectionDonation.attributes.donationsData.title}
        </h2>
        <ul className="donations__menu">
          {sectionDonation.attributes.donationsData.types.map((type, i) => {
            return (
              <li
                key={i}
                className={`donations__menu-item ${
                  i === selectedDonation ? "donations__menu-item_active" : ""
                }`}
              >
                <button onClick={setSelectedDonation.bind(this, i)}>
                  {type.name}
                </button>
              </li>
            )
          })}
        </ul>
        <div className="donations__desc">
          {selectedDonation === 0 ? (
            <div className="donations__mobilepay">
              <p className="donations__mobilepay-desc">
                {
                  sectionDonation.attributes.donationsData.types[
                    selectedDonation
                  ].desc
                }
              </p>
              <Link
                href={sectionDonation.attributes.donationsData.donationLink}
                passHref
              >
                <a className="donations__button">
                  {
                    sectionDonation.attributes.donationsData.types[
                      selectedDonation
                    ].button
                  }
                </a>
              </Link>
            </div>
          ) : selectedDonation === 1 ? (
            <div className="donations__banks">
              <ul className="donations__submenu">
                {sectionDonation.attributes.donationsData.types[
                  selectedDonation
                ].subtypes.map((subtype, j) => {
                  return (
                    <li
                      key={j}
                      className={`donations__submenu-item ${
                        j === selectedDonationBank
                          ? "donations__submenu-item_active"
                          : ""
                      }`}
                    >
                      <button onClick={setSelectedDonationBank.bind(this, j)}>
                        {subtype.name}
                      </button>
                    </li>
                  )
                })}
              </ul>
              {selectedDonationBank >= 0 ? (
                <div className="donations__banks-desc">
                  <span>
                    {
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationBank].desc.name.key
                    }
                  </span>
                  <span>
                    {
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationBank].desc.name.value
                    }
                  </span>
                  <br />
                  <span>
                    {
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationBank].desc.code.key
                    }
                  </span>
                  <span>
                    {
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationBank].desc.code.value
                    }
                  </span>
                  <span
                    onClick={copyText.bind(
                      this,
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationBank].desc.code.value
                    )}
                    className="donations donations__copy"
                  >
                    <NextImage image={sectionContacts.attributes.buttonIcon} />
                  </span>
                  <br />
                  <span>
                    {
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationBank].desc.bank.key
                    }
                  </span>
                  <span>
                    {
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationBank].desc.bank.value
                    }
                  </span>
                  <br />
                  <span>
                    {
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationBank].desc.account.key
                    }
                  </span>
                  <span>
                    {
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationBank].desc.account.value
                    }
                  </span>
                  <span
                    onClick={copyText.bind(
                      this,
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationBank].desc.account.value
                    )}
                    className="donations donations__copy"
                  >
                    <NextImage image={sectionContacts.attributes.buttonIcon} />
                  </span>
                  <br />
                  <span>
                    {
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationBank].desc.currency.key
                    }
                  </span>
                  <span>
                    {
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationBank].desc.currency.value
                    }
                  </span>
                  <br />
                  <p className="donations__banks-guide">
                    {
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationBank].guide
                    }
                  </p>
                </div>
              ) : null}
            </div>
          ) : selectedDonation === 2 ? (
            <div className="donations__crypto">
              <ul className="donations__submenu">
                {sectionDonation.attributes.donationsData.types[
                  selectedDonation
                ].subtypes.map((subtype, k) => {
                  return (
                    <li
                      key={k}
                      className={`donations__submenu-item ${
                        k === selectedDonationCrypto
                          ? "donations__submenu-item_active"
                          : ""
                      }`}
                    >
                      <button onClick={setSelectedDonationCrypto.bind(this, k)}>
                        {subtype.name}
                      </button>
                    </li>
                  )
                })}
              </ul>
              {selectedDonationBank >= 0 ? (
                <div className="donations__crypto-desc">
                  <span>
                    {
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationCrypto].wallet
                    }
                  </span>
                  <span
                    onClick={copyText.bind(
                      this,
                      sectionDonation.attributes.donationsData.types[
                        selectedDonation
                      ].subtypes[selectedDonationCrypto].wallet
                    )}
                    className="donations donations__copy"
                  >
                    <NextImage image={sectionContacts.attributes.buttonIcon} />
                  </span>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default Donations
