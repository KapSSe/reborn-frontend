const About = ({ about }) => {
  return (
    <section className="about" id="about">
      <div className="about__content uk-container uk-container-large">
        <h2 className="about__title">{about.attributes.title}</h2>
        <p className="about__description">{about.attributes.description}</p>
      </div>
    </section>
  )
}

export default About
