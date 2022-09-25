import NextImage from "./image"

const ScrollTop = ({ projects }) => {
  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <button onClick={scrollTop} className="scroll-top">
      <NextImage image={projects.attributes.iconNext} />
    </button>
  )
}

export default ScrollTop
