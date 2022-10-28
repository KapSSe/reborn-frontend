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
          <ul className="navbar__desktop uk-navbar-nav navbar__center">
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
        <ul className="navbar__desktop uk-navbar-right navbar__right">
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
        <div className="uk-navbar-right navbar__mobile">
          <a href="#" className="uk-navbar-toggle" uk-toggle="target: #sidenav">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path
                fill="white"
                d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"
              />
            </svg>
          </a>
          <div id="sidenav" uk-offcanvas="flip: true" className="uk-offcanvas">
            <div className="uk-offcanvas-bar navbar__mobile-wrap">
              <ul className="navbar__mobile-lang-swither">
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
              <ul className="navbar__mobile-menu">
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
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
