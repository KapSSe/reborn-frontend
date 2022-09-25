/* eslint-disable prettier/prettier */
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Welcome from "../../components/welcome"
import About from "../../components/about"
import Mission from "../../components/mission"
import Partners from "../../components/partners"
import Donations from "../../components/donations"
import Win from "../../components/win"
import Contacts from "../../components/contacts"
import Footer from "../../components/footer"
import Articles from "../../components/articles"
import ScrollTop from "../../components/scrollTop"
import { fetchAPI } from "../../lib/api"

const Home = (
      {  
        langSwithes,
        about,
        categories,
        homepage,
        welcome,
        sectionMission,
        missions,
        missionSlides,
        sectionPartner,
        partners,
        sectionWin,
        sectionContacts,
        sectionFooter,
        socials,
        sectionDonation,
        articles,
        projects,
        lang
      }
  ) => {
  return (
    <Layout page="home-page">
      <Seo seo={homepage.attributes.seo} />
      <Welcome welcome={welcome} homepage={homepage} categories={categories} sectionDonation={sectionDonation} langSwithes={langSwithes} lang={lang}/>
      <About about={about}/>
      <Mission sectionMission={sectionMission} missions={missions} missionSlides={missionSlides} lang={lang} />
      <Articles articles={articles} categories={categories} projects={projects} missions={missions} lang={lang}/>
      <Partners sectionPartner={sectionPartner} partners={partners}/>
      <Donations sectionContacts={sectionContacts} sectionDonation={sectionDonation} lang={lang}/>
      <Win sectionWin={sectionWin}/>
      <Contacts sectionContacts={sectionContacts}/>
      <Footer sectionFooter={sectionFooter} socials={socials} categories={categories} lang={lang}/>
      <ScrollTop projects={projects}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const lang = "en"
  const [
      articlesRes,
      sectionProjectRes,
      sectionDonationRes,
      sectionSocialsRes,
      sectionFooterRes,
      sectionContactsRes,
      sectionWinRes,
      sectionPartnerRes,
      partnersRes,
      sectionMissionRes,
      missionsRes,
      missionSlidesRes,
      categoriesRes,
      welcomeRes,
      aboutRes,
      langSwitchesRes,
      homepageRes,
    ] = await Promise.all([
      fetchAPI("/articles", {  locale: lang, populate: "*" }),
      fetchAPI("/section-project", { locale: lang,  populate: "*" }),
      fetchAPI("/section-donation", { locale: lang, populate: "*" }),
      fetchAPI("/socials", { locale: lang, populate: "*" }),
      fetchAPI("/section-footer", { locale: lang, populate: "*" }),
      fetchAPI("/section-contact", { locale: lang, populate: "*" }),
      fetchAPI("/section-win", { locale: lang, populate: "*" }),
      fetchAPI("/section-partner", { locale: lang, populate: "*" }),
      fetchAPI("/partners", { populate: "*" }),
      fetchAPI("/section-mission", { locale: lang, populate: "*" }),
      fetchAPI("/missions", { locale: lang, populate: {
        title: { populate: "*" },
        description: { populate: "*" },
        image: { populate: "*" },
      } }),
      fetchAPI("/missions-slides", { populate: "*" }),
      fetchAPI("/categories", { locale: lang, populate: "*" }),
      fetchAPI("/section-welcome", { locale: lang, populate: "*" }),
      fetchAPI("/section-about", { locale: lang, populate: "*" }),
      fetchAPI("/lang-switches", { populate: "*" }),
      fetchAPI("/homepage", {
        locale: lang,
        populate: {
          seo: { populate: "*" },
          logo: { populate: "*"}
        },
      }),
    ])

  return {
    props: {
      articles: articlesRes.data,
      projects: sectionProjectRes.data,
      sectionDonation: sectionDonationRes.data,
      socials: sectionSocialsRes.data,
      sectionFooter: sectionFooterRes.data,
      sectionContacts: sectionContactsRes.data,
      sectionWin: sectionWinRes.data,
      sectionPartner: sectionPartnerRes.data,
      partners: partnersRes.data,
      sectionMission: sectionMissionRes.data,
      missions: missionsRes.data,
      missionSlides: missionSlidesRes.data,
      about: aboutRes.data,
      categories: categoriesRes.data,
      langSwithes: langSwitchesRes.data,
      homepage: homepageRes.data,
      welcome: welcomeRes.data,
      lang: lang,
    },
    revalidate: 1,
  }
}

export default Home