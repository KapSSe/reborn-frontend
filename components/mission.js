import NextImage from "./image"
import Image from "next/image"
import { getStrapiURL } from "../lib/api"

const Mission = ({ sectionMission, missions, missionSlides }) => {
  return (
    <section className="mission">
      <div className="mission__content uk-container uk-container-large">
        <h2 className="mission__title">{sectionMission.attributes.title}</h2>
        <div className="uk-grid uk-grid-medium">
          {missions.map((missionItem, i) => {
            return (
              <div className="uk-width-1-3" key={i}>
                <div className="mission-card">
                  <div className="mission-card__image">
                    <NextImage image={missionItem.attributes.image} />
                  </div>
                  <h3 className="mission-card__title">
                    {missionItem.attributes.title}
                  </h3>
                  <p className="mission-card__description">
                    {missionItem.attributes.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="mission__slider">
        <div
          className="uk-position-relative uk-visible-toggle uk-light uk-slider uk-slider-container"
          tabIndex="-1"
          data-uk-slider
          data-autoplay={missionSlides[0].attributes.autoplay}
          data-autoplay-interval={missionSlides[0].attributes.autoplayInterval}
        >
          <ul
            className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m"
            style={{
              willChange: "transform",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            {missionSlides[0].attributes.slides.data.map((slide, i) => {
              return (
                <li tabIndex="-1" className="uk-active" key={i}>
                  <Image
                    layout="responsive"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    src={getStrapiURL(slide.attributes.url)}
                    alt={slide.attributes.alternativeText || ""}
                  />
                </li>
              )
            })}
          </ul>

          <a
            className="uk-position-center-left uk-position-small uk-icon uk-slidenav-previous uk-slidenav"
            href="#"
            data-uk-slidenav-previous
            data-uk-slider-item="previous"
          >
            {" "}
          </a>
          <a
            className="uk-position-center-right uk-position-small uk-icon uk-slidenav-previous uk-slidenav uk-slidenav-next"
            href="#"
            data-uk-slidenav-next
            data-uk-slider-item="next"
          >
            {" "}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Mission
