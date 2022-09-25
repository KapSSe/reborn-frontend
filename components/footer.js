import NextImage from "./image"
import Link from "next/link"

const Footer = ({ sectionFooter, socials, categories, lang }) => {
  return (
    <section className="footer">
      <div className="footer__content uk-container uk-container-large">
        <ul className="footer__navigation-footer">
          {categories.map((category) => {
            if (category.attributes.isHomePage) {
              if (lang === "uk") {
                return (
                  <li className="navigation-footer__item" key={category.id}>
                    <Link href={`/#${category.attributes.slug}`} passHref>
                      <a className="uk-link-reset navigation-footer__link">
                        {category.attributes.name}
                      </a>
                    </Link>
                  </li>
                )
              } else {
                return (
                  <li className="navigation-footer__item" key={category.id}>
                    <Link
                      href={`/${lang}/#${category.attributes.slug}`}
                      passHref
                    >
                      <a className="uk-link-reset navigation-footer__link">
                        {category.attributes.name}
                      </a>
                    </Link>
                  </li>
                )
              }
            } else {
              if (lang === "uk") {
                return (
                  <li className="navigation-footer__item" key={category.id}>
                    <Link href={`/${category.attributes.slug}`} passHref>
                      <a className="uk-link-reset navigation-footer__link">
                        {category.attributes.name}
                      </a>
                    </Link>
                  </li>
                )
              } else {
                return (
                  <li className="navigation-footer__item" key={category.id}>
                    <Link
                      href={`/${lang}/${category.attributes.slug}`}
                      passHref
                    >
                      <a className="uk-link-reset navigation-footer__link">
                        {category.attributes.name}
                      </a>
                    </Link>
                  </li>
                )
              }
            }
          })}
        </ul>
        <ul className="footer__social-footer">
          {socials.map((social) => {
            return (
              <li className="social-footer__item" key={social.id}>
                <Link href={social.attributes.link} passHref>
                  <a>
                    <div className="social-footer__icon">
                      <NextImage image={social.attributes.icon} />
                    </div>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
        <span className="footer__description">
          {sectionFooter.attributes.description}
        </span>
      </div>
    </section>
  )
}

export default Footer
