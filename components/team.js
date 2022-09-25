import { useState } from "react"
import NextImage from "./image"

const Team = ({ sectionTeam, team }) => {
  const [selectedItem, setSelectedItem] = useState("team")

  const handleItemSelection = (type) => {
    setSelectedItem(type)
  }

  const renderContent = () => {
    if (selectedItem === "team") {
      return (
        <div className="team-members uk-grid uk-child-width-1-4">
          {team.map((teamMember, i) => {
            return (
              <div className="team-member" key={i}>
                <div className="team-member__wrapper">
                  <div className="team-member__image">
                    <NextImage image={teamMember.attributes.image} />
                  </div>
                  <h3 className="team-member__title">
                    {teamMember.attributes.name}
                  </h3>
                  <p className="team-member__description">
                    {teamMember.attributes.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div className="team-structure">
          <p className="team-structure__desc">
            {sectionTeam.attributes.structureDesc}
          </p>
          <div className="team-structure__scheme">
            <NextImage image={sectionTeam.attributes.structureSchemeImg} />
          </div>
        </div>
      )
    }
  }

  return (
    <section className="team">
      <div className="team__content uk-container uk-container-large">
        <div className="team-header">
          <h2
            onClick={handleItemSelection.bind(this, "team")}
            className={`team-header__heading ${
              selectedItem === "team" ? "team-header__heading_active" : null
            }`}
          >
            {sectionTeam.attributes.titleTeam}
          </h2>
          <h2
            onClick={handleItemSelection.bind(this, "structure")}
            className={`team-header__heading ${
              selectedItem === "structure"
                ? "team-header__heading_active"
                : null
            }`}
          >
            {sectionTeam.attributes.titleStructure}
          </h2>
        </div>
        {renderContent()}
      </div>
    </section>
  )
}

export default Team
