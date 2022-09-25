import NextImage from "./image"

const Win = ({ sectionWin }) => {
  return (
    <section className="win">
      <div className="win__background">
        <NextImage image={sectionWin.attributes.background} />
      </div>
      <div className="win__block">
        <h1 className="win__heading"> {sectionWin.attributes.title} </h1>
      </div>
    </section>
  )
}
export default Win
