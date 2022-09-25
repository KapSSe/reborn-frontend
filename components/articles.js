/* eslint-disable prettier/prettier */
import { useState, useEffect } from "react"
import NextImage from "./image"
import Link from "next/link"

const Articles = ({ articles, projects, missions, lang }) => {
  const [selectedStatus, setSelectedStatus] = useState(0)
  const [selectedType, setSelectedType] = useState(0)
  const [paginationState, setPaginationState] = useState({})
  const [paginationLimit, setPaginationLimit] = useState(0)
  const [categoriesData, setCategoriesData] = useState({})
  const [paginatedCategoryData, setPaginatedCategoryData] = useState([])

  const currentSelectedStatus = projects.attributes.projectsData.statuses[selectedStatus]
  const currentSelectedType = projects.attributes.projectsData.types[selectedType]
  
  const paginationDelta = 2

  const iconKeyMap = {
    inProgress: "iconInProgress",
    done: "iconDone",
  }

  useEffect(() => {
    const _categoriesData = {}
    const _paginationState = {}
    
    articles.reduce((acc, article) => {
      const status = article.attributes.status;
      const type = article.attributes.type;

      _categoriesData[status] = _categoriesData[status] || {}
      _categoriesData[status][type] = _categoriesData[status][type] || []
      _categoriesData[status][type] = [..._categoriesData[status][type], article]

      _paginationState[status] = _paginationState[status] || {}
      _paginationState[status][type] = _categoriesData[status][type].length > paginationDelta ? paginationDelta : _categoriesData[status][type].length
    }, undefined)

    setCategoriesData(_categoriesData)
    setPaginationState(_paginationState)
  }, [articles])

  useEffect(() => {
    setPaginationLimit(categoriesData?.[currentSelectedStatus.key]?.[currentSelectedType.key]?.length || [].length)
  }, [selectedType, selectedStatus, categoriesData, paginationState, currentSelectedStatus.key, currentSelectedType.key])

  useEffect(() => {
  }, [paginationState])

  useEffect(() => {
    const data = categoriesData?.[currentSelectedStatus.key]?.[currentSelectedType.key] || []
    const paginationCount = paginationState?.[currentSelectedStatus.key]?.[currentSelectedType.key]
    const newPaginatedCategoryData = data.filter((item, i) => i < paginationCount)

    setPaginatedCategoryData(newPaginatedCategoryData)
  }, [selectedType, selectedStatus, categoriesData, paginationLimit, paginationState, currentSelectedStatus.key, currentSelectedType.key])

  const updatePaginationState = () => {
    const paginationCount = paginationState?.[currentSelectedStatus.key]?.[currentSelectedType.key]
    if (paginationCount < paginationLimit) {
      const itemsLeft = paginationLimit - paginationCount
      if (itemsLeft >= paginationDelta) {
        setPaginationState((prevPaginationState) => ({
          ...prevPaginationState,
          [currentSelectedStatus.key]: {
            ...prevPaginationState[currentSelectedStatus.key],
            [currentSelectedType.key]: paginationCount + paginationDelta
            }
          }
        ))
      } else {
        setPaginationState((prevPaginationState) => ({
          ...prevPaginationState,
          [currentSelectedStatus.key]: {
            ...prevPaginationState[currentSelectedStatus.key],
            [currentSelectedType.key]: paginationCount + itemsLeft
            }
          }
        ))
      }
    }
  }

  const getIcon = (type) => {
    let image
    missions.forEach((element) => {
      if (element.attributes.type === type) {
        image = element.attributes.image
      }
    })
    return image
  }

  const renderPaginationButton = () => {
    const maxPosition = categoriesData?.[currentSelectedStatus.key]?.[currentSelectedType.key]?.length
    const currentPosition = paginatedCategoryData.length
    if (currentPosition < maxPosition) {
        return (
          <button
          className="articles__pagination"
          onClick={updatePaginationState}
        >
          {projects.attributes.projectsData.paginationButton}
        </button>
      )
    }
  }

  const renderArticles = () => {
    return (
      <ul className="articles__projects uk-grid uk-child-width-1-2">
        {paginatedCategoryData.map((project, k) => {
            if (lang === "uk") {
              return (
                <li key={k} className="articles__projects-item">
                  <Link href={`/article/${project.attributes.slug}`}>
                    <a className="uk-link-reset">
                      <div className="projects-item__wrapper">
                        <div className="projects-item__filter"></div>
                        <div className="projects-item__bg">
                          <NextImage image={project.attributes.image} />
                        </div>
                        <ul className="projects-item__labels">
                          <li className="projects-item-label">
                            <span className="projects-item-label__text">
                              {currentSelectedType.value}
                            </span>
                          </li>
                          <li className="projects-item-label">
                            <NextImage
                              image={
                                projects.attributes[
                                  iconKeyMap[currentSelectedStatus.key]
                                ]
                              }
                            />
                            <span className="projects-item-label__text">
                              {currentSelectedStatus.label}
                            </span>
                          </li>
                        </ul>
                        <div className="projects-item__content">
                          <h3 className="projects-item__title">
                            {project.attributes.title}
                          </h3>
                          <span className="projects-item__desc">
                            {project.attributes.description}
                          </span>
                        </div>
                        <div className="project-item__next">
                          <NextImage image={projects.attributes.iconNext} />
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              )
            } else {
              console.log('else articles')
              return (
                <li key={k} className="articles__projects-item">
                  <Link href={`${lang}/article/${project.attributes.slug}`}>
                    <a className="uk-link-reset">
                      <div className="projects-item__wrapper">
                        <div className="projects-item__filter"></div>
                        <div className="projects-item__bg">
                          <NextImage image={project.attributes.image} />
                        </div>
                        <ul className="projects-item__labels">
                          <li className="projects-item-label">
                            <span className="projects-item-label__text">
                              {currentSelectedType.value}
                            </span>
                          </li>
                          <li className="projects-item-label">
                            <NextImage
                              image={
                                projects.attributes[
                                  iconKeyMap[currentSelectedStatus.key]
                                ]
                              }
                            />
                            <span className="projects-item-label__text">
                              {currentSelectedStatus.label}
                            </span>
                          </li>
                        </ul>
                        <div className="projects-item__content">
                          <h3 className="projects-item__title">
                            {project.attributes.title}
                          </h3>
                          <span className="projects-item__desc">
                            {project.attributes.description}
                          </span>
                        </div>
                        <div className="project-item__next">
                          <NextImage image={projects.attributes.iconNext} />
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              )
            }
        })}
      </ul>
    )
  }

  return (
    <section className="articles" id="projects">
      <div className="articles__content uk-container uk-container-large">
        <div className="articles__header">
          <h2 className="articles__title">
            {projects.attributes.projectsData.title}
          </h2>
          <ul className="articles__statuses">
            {projects.attributes.projectsData.statuses.map((status, i) => {
              return (
                <li
                  key={i}
                  className={`articles__statuses-item ${
                    i === selectedStatus ? "articles__statuses-item_active" : ""
                  }`}
                >
                  <button onClick={setSelectedStatus.bind(this, i)}>
                    {status.value}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="articles__types">
          {projects.attributes.projectsData.types.map((type, j) => {
            return (
              <li
                key={j}
                className={`articles__types-item ${
                  j === selectedType ? "articles__types-item_active" : ""
                }`}
              >
                <button
                  className="types__button"
                  onClick={setSelectedType.bind(this,j)}
                >
                  <NextImage image={getIcon(type.key)} />
                  <span>{type.value}</span>
                </button>
              </li>
            )
          })}
        </ul>
        {renderArticles()}
        {renderPaginationButton()}
      </div>
    </section>
  )
}

export default Articles
