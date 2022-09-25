import Nav from "./nav"
import Link from "next/link"
import NextImage from "./image"
import ReactMarkdown from "react-markdown"

const Welcome = ({
  welcome,
  homepage,
  categories,
  sectionDonation,
  langSwithes,
  lang,
}) => {
  return (
    <section className="welcome">
      <div className="background">
        <NextImage image={welcome.attributes.background} />
      </div>
      <Nav
        homepage={homepage}
        categories={categories}
        langSwithes={langSwithes}
        lang={lang}
      />
      <div className="welcome__block uk-container uk-container-large">
        <h1 className="welcome__heading">
          <span className="welcome__headingType">
            {welcome.attributes.headingType}
            <br />
          </span>
          {welcome.attributes.headingTitle}
        </h1>
        <div className="welcome__desription">
          <ReactMarkdown
            source={welcome.attributes.description}
            escapeHtml={false}
          />
        </div>
        <button className="button welcome__button">
          <Link href={sectionDonation.attributes.donationsData.donationLink}>
            {welcome.attributes.button}
          </Link>
        </button>
      </div>
    </section>
  )
}

export default Welcome
