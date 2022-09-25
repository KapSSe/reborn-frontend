import React from "react"
import Link from "next/link"
import NextImage from "./image"
import { useRouter } from "next/router"

const Nav = ({ homepage, categories, langSwithes, lang }) => {
  const router = useRouter()

  const renderLogoLink = () => {
    if (lang === "uk") {
      return (
        <Link href="/" passHref>
          <a className="uk-link-reset navbar__logo">
            <NextImage image={homepage.attributes.logo} />
          </a>
        </Link>
      )
    } else {
      return (
        <Link href={`/${lang}`} passHref>
          <a className="uk-link-reset navbar__logo">
            <NextImage image={homepage.attributes.logo} />
          </a>
        </Link>
      )
    }
  }

  const createLangUrl = (newLang) => {
    const path = router.pathname
    const slug = router?.query?.slug
    if (lang === "uk") {
      if (slug) {
        return `/${newLang}${path.replace("[slug]", slug)}`
      } else {
        return `/${newLang}${path}`
      }
    } else {
      if (slug) {
        return `/${path.replace("[slug]", slug).split("/").splice(2).join("/")}`
      } else {
        return `/${path.split("/").splice(2).join("/")}`
      }
    }
  }

  return (
    <div className="navbar">
      <nav
        className="uk-navbar-container uk-margin-auto uk-container-large uk-navbar"
        data-uk-navbar
      >
        <ul className="uk-navbar-left navbar__left">
          {renderLogoLink()}
          <ul className="uk-navbar-nav navbar__center">
            {categories.map((category) => {
              if (category.attributes.isHomePage) {
                if (lang === "uk") {
                  return (
                    <li key={category.id}>
                      <Link href={`/#${category.attributes.slug}`} passHref>
                        <a className="uk-link-reset navbar__menu-item">
                          {category.attributes.name}
                        </a>
                      </Link>
                    </li>
                  )
                } else {
                  return (
                    <li key={category.id}>
                      <Link
                        href={`/${lang}/#${category.attributes.slug}`}
                        passHref
                      >
                        <a className="uk-link-reset navbar__menu-item">
                          {category.attributes.name}
                        </a>
                      </Link>
                    </li>
                  )
                }
              } else {
                if (lang === "uk") {
                  return (
                    <li key={category.id}>
                      <Link href={`/${category.attributes.slug}`} passHref>
                        <a className="uk-link-reset navbar__menu-item">
                          {category.attributes.name}
                        </a>
                      </Link>
                    </li>
                  )
                } else {
                  return (
                    <li key={category.id}>
                      <Link
                        href={`/${lang}/${category.attributes.slug}`}
                        passHref
                      >
                        <a className="uk-link-reset navbar__menu-item">
                          {category.attributes.name}
                        </a>
                      </Link>
                    </li>
                  )
                }
              }
            })}
          </ul>
        </ul>
        <ul className="uk-navbar-right navbar__right">
          {langSwithes.map((currentLang, i) => {
            if (currentLang.attributes.lang === lang) {
              return (
                <li key={i}>
                  <span className="navbar__menu-item navbar__menu-item_active">
                    {currentLang.attributes.langLabel}
                  </span>
                </li>
              )
            } else {
              return (
                <li key={i}>
                  <Link
                    href={createLangUrl(currentLang.attributes.lang)}
                    passHref
                  >
                    <a className="uk-link-reset navbar__menu-item">
                      {currentLang.attributes.langLabel}
                    </a>
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
