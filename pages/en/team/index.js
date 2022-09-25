/* eslint-disable prettier/prettier */
import { fetchAPI } from "../../../lib/api"

import Layout from "../../../components/layout"
import Nav from "../../../components/nav"
import Team from "../../../components/team"
import Footer from "../../../components/footer"

const TeamPage = ({ categories, homepage, sectionFooter, sectionTeam, team, socials, langSwithes, lang }) => {

  return (
    <Layout page="team-page">
      <Nav homepage={homepage} categories={categories} langSwithes={langSwithes} lang={lang} />
      <Team sectionTeam={sectionTeam} team={team} />
      <Footer sectionFooter={sectionFooter} socials={socials} categories={categories} lang={lang}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const lang = "en"

  const homepageRes = await fetchAPI("/homepage", {
    locale: lang,
    populate: {
      seo: { populate: "*" },
      logo:{ populate: "*" }
    },
  })
  const categoriesRes = await fetchAPI("/categories", { locale: lang, populate: "*" })
  const teamsRes = await fetchAPI("/teams", { locale: lang, populate: "*" })
  const sectionTeamRes = await fetchAPI("/section-team", { locale: lang, populate: "*" })
  const footerRes = await fetchAPI("/section-footer", { locale: lang, populate: "*" })
  const socialsRes = await fetchAPI("/socials", { locale: lang, populate: "*" })
  const langSwitchesRes = await fetchAPI("/lang-switches", { populate: "*" })

  return {
    props: {
      categories: categoriesRes.data,
      homepage: homepageRes.data,
      team: teamsRes.data,
      sectionTeam: sectionTeamRes.data,
      sectionFooter: footerRes.data,
      socials :socialsRes.data,
      langSwithes: langSwitchesRes.data,
      lang: lang
    },
    revalidate: 1,
  }
}

export default TeamPage