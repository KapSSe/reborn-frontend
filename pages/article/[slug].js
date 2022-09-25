/* eslint-disable prettier/prettier */

import ReactMarkdown from "react-markdown"
// import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import NextImage from "../../components/image"
import { getStrapiMedia } from "../../lib/media"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Nav from "../../components/nav"
import Donations from "../../components/donations"
import Footer from "../../components/footer"

const Article = ({ article, categories, homepage, sectionDonation, sectionContacts, sectionFooter, socials, langSwithes, lang }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <Layout page="article-page">
      <Seo seo={seo} />
      <Nav homepage={homepage} categories={categories} langSwithes={langSwithes} lang={lang} />
        <div className="article-page__content uk-container uk-container-large">
          <div className="article-page-item__wrapper">
            <div className="article-page-item__filter"></div>
            <div className="article-page-item__bg">
              <NextImage image={article.attributes.image} />
            </div>
            <div className="article-page-item__content">
              <h3 className="article-page-item__title">
                {article.attributes.title}
              </h3>
              <span className="article-page-item__desc">
                {article.attributes.description}
              </span>
            </div>
          </div>
          <div className="uk-grid uk-grid-collapse">
            <div className="article-page-article uk-width-3-4">
              <ReactMarkdown
                source={article.attributes.content}
                escapeHtml={false}
              />
            </div>
          </div>
        </div>
      <Donations sectionContacts={sectionContacts} sectionDonation={sectionDonation}/>
      <Footer sectionFooter={sectionFooter} socials={socials} categories={categories}/>
    </Layout>
  )
}

export async function getStaticPaths() {
  const lang = "uk"
  const articlesRes = await fetchAPI("/articles", { locale: lang, fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const lang = "uk"
  const articlesRes = await fetchAPI("/articles", {
    locale: lang,
    filters: {
      slug: params.slug,
    },
    populate: "*",
  })
  const categoriesRes = await fetchAPI("/categories", { locale: lang, populate: "*" })
  const homepageRes = await fetchAPI("/homepage", {
    locale: lang,
    populate: {
      seo: { populate: "*" },
      logo:{ populate: "*" }
    },
  })
  const donationsRes = await fetchAPI("/section-donation", { locale: lang, populate: "*" })
  const contactsRes = await fetchAPI("/section-contact", { locale: lang, populate: "*" })
  const footerRes = await fetchAPI("/section-footer", { locale: lang, populate: "*" })
  const socialsRes = await fetchAPI("/socials", { locale: lang, populate: "*" })
  const langSwitchesRes = await fetchAPI("/lang-switches", { populate: "*" })

  return {
    props: {
      article: articlesRes.data[0],
      categories: categoriesRes.data,
      homepage: homepageRes.data,
      sectionDonation: donationsRes.data,
      sectionContacts: contactsRes.data,
      sectionFooter: footerRes.data,
      socials :socialsRes.data,
      langSwithes: langSwitchesRes.data,
      lang: lang
    },
    revalidate: 1,
  }
}

export default Article