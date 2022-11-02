exports.id = 90;
exports.ids = [90];
exports.modules = {

/***/ 434:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const About = ({
  about
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
    className: "about",
    id: "about",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "about__content uk-container uk-container-large",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "about__title",
        children: about.attributes.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "about__description",
        children: about.attributes.description
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (About);

/***/ }),

/***/ 1055:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5030);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable prettier/prettier */




const Articles = ({
  articles,
  projects,
  missions,
  lang
}) => {
  const {
    0: selectedStatus,
    1: setSelectedStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: selectedType,
    1: setSelectedType
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: paginationState,
    1: setPaginationState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    0: paginationLimit,
    1: setPaginationLimit
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: categoriesData,
    1: setCategoriesData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    0: paginatedCategoryData,
    1: setPaginatedCategoryData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const currentSelectedStatus = projects.attributes.projectsData.statuses[selectedStatus];
  const currentSelectedType = projects.attributes.projectsData.types[selectedType];
  const paginationDelta = 2;
  const iconKeyMap = {
    inProgress: "iconInProgress",
    done: "iconDone"
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const _categoriesData = {};
    const _paginationState = {};
    articles.reduce((acc, article) => {
      const status = article.attributes.status;
      const type = article.attributes.type;
      _categoriesData[status] = _categoriesData[status] || {};
      _categoriesData[status][type] = _categoriesData[status][type] || [];
      _categoriesData[status][type] = [..._categoriesData[status][type], article];
      _paginationState[status] = _paginationState[status] || {};
      _paginationState[status][type] = _categoriesData[status][type].length > paginationDelta ? paginationDelta : _categoriesData[status][type].length;
    }, undefined);
    setCategoriesData(_categoriesData);
    setPaginationState(_paginationState);
  }, [articles]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var _categoriesData$curre, _categoriesData$curre2;

    setPaginationLimit((categoriesData === null || categoriesData === void 0 ? void 0 : (_categoriesData$curre = categoriesData[currentSelectedStatus.key]) === null || _categoriesData$curre === void 0 ? void 0 : (_categoriesData$curre2 = _categoriesData$curre[currentSelectedType.key]) === null || _categoriesData$curre2 === void 0 ? void 0 : _categoriesData$curre2.length) || [].length);
  }, [selectedType, selectedStatus, categoriesData, paginationState, currentSelectedStatus.key, currentSelectedType.key]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {}, [paginationState]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var _categoriesData$curre3, _paginationState$curr;

    const data = (categoriesData === null || categoriesData === void 0 ? void 0 : (_categoriesData$curre3 = categoriesData[currentSelectedStatus.key]) === null || _categoriesData$curre3 === void 0 ? void 0 : _categoriesData$curre3[currentSelectedType.key]) || [];
    const paginationCount = paginationState === null || paginationState === void 0 ? void 0 : (_paginationState$curr = paginationState[currentSelectedStatus.key]) === null || _paginationState$curr === void 0 ? void 0 : _paginationState$curr[currentSelectedType.key];
    const newPaginatedCategoryData = data.filter((item, i) => i < paginationCount);
    setPaginatedCategoryData(newPaginatedCategoryData);
  }, [selectedType, selectedStatus, categoriesData, paginationLimit, paginationState, currentSelectedStatus.key, currentSelectedType.key]);

  const updatePaginationState = () => {
    var _paginationState$curr2;

    const paginationCount = paginationState === null || paginationState === void 0 ? void 0 : (_paginationState$curr2 = paginationState[currentSelectedStatus.key]) === null || _paginationState$curr2 === void 0 ? void 0 : _paginationState$curr2[currentSelectedType.key];

    if (paginationCount < paginationLimit) {
      const itemsLeft = paginationLimit - paginationCount;

      if (itemsLeft >= paginationDelta) {
        setPaginationState(prevPaginationState => _objectSpread(_objectSpread({}, prevPaginationState), {}, {
          [currentSelectedStatus.key]: _objectSpread(_objectSpread({}, prevPaginationState[currentSelectedStatus.key]), {}, {
            [currentSelectedType.key]: paginationCount + paginationDelta
          })
        }));
      } else {
        setPaginationState(prevPaginationState => _objectSpread(_objectSpread({}, prevPaginationState), {}, {
          [currentSelectedStatus.key]: _objectSpread(_objectSpread({}, prevPaginationState[currentSelectedStatus.key]), {}, {
            [currentSelectedType.key]: paginationCount + itemsLeft
          })
        }));
      }
    }
  };

  const getIcon = type => {
    let image;
    missions.forEach(element => {
      if (element.attributes.type === type) {
        image = element.attributes.image;
      }
    });
    return image;
  };

  const renderPaginationButton = () => {
    var _categoriesData$curre4, _categoriesData$curre5;

    const maxPosition = categoriesData === null || categoriesData === void 0 ? void 0 : (_categoriesData$curre4 = categoriesData[currentSelectedStatus.key]) === null || _categoriesData$curre4 === void 0 ? void 0 : (_categoriesData$curre5 = _categoriesData$curre4[currentSelectedType.key]) === null || _categoriesData$curre5 === void 0 ? void 0 : _categoriesData$curre5.length;
    const currentPosition = paginatedCategoryData.length;

    if (currentPosition < maxPosition) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "articles__pagination",
        onClick: updatePaginationState,
        children: projects.attributes.projectsData.paginationButton
      });
    }
  };

  const renderArticles = () => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
      className: "articles__projects uk-grid uk-child-width-1-2",
      children: paginatedCategoryData.map((project, k) => {
        if (lang === "uk") {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: "articles__projects-item",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
              href: `/article/${project.attributes.slug}`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "uk-link-reset",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "projects-item__wrapper",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "projects-item__filter"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "projects-item__bg",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                      image: project.attributes.image
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "projects-item__labels",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                      className: "projects-item-label",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "projects-item-label__text",
                        children: currentSelectedType.value
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                      className: "projects-item-label",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                        image: projects.attributes[iconKeyMap[currentSelectedStatus.key]]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "projects-item-label__text",
                        children: currentSelectedStatus.label
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "projects-item__content",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                      className: "projects-item__title",
                      children: project.attributes.title
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                      className: "projects-item__desc",
                      children: project.attributes.description
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "project-item__next",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                      image: projects.attributes.iconNext
                    })
                  })]
                })
              })
            })
          }, k);
        } else {
          console.log('else articles');
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: "articles__projects-item",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
              href: `${lang}/article/${project.attributes.slug}`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "uk-link-reset",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "projects-item__wrapper",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "projects-item__filter"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "projects-item__bg",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                      image: project.attributes.image
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "projects-item__labels",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                      className: "projects-item-label",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "projects-item-label__text",
                        children: currentSelectedType.value
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                      className: "projects-item-label",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                        image: projects.attributes[iconKeyMap[currentSelectedStatus.key]]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "projects-item-label__text",
                        children: currentSelectedStatus.label
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "projects-item__content",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                      className: "projects-item__title",
                      children: project.attributes.title
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                      className: "projects-item__desc",
                      children: project.attributes.description
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "project-item__next",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                      image: projects.attributes.iconNext
                    })
                  })]
                })
              })
            })
          }, k);
        }
      })
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
    className: "articles",
    id: "projects",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "articles__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "articles__header",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
          className: "articles__title",
          children: projects.attributes.projectsData.title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
          className: "articles__statuses",
          children: projects.attributes.projectsData.statuses.map((status, i) => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: `articles__statuses-item ${i === selectedStatus ? "articles__statuses-item_active" : ""}`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: setSelectedStatus.bind(undefined, i),
                children: status.value
              })
            }, i);
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "articles__types",
        children: projects.attributes.projectsData.types.map((type, j) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: `articles__types-item ${j === selectedType ? "articles__types-item_active" : ""}`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
              className: "types__button",
              onClick: setSelectedType.bind(undefined, j),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                image: getIcon(type.key)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: type.value
              })]
            })
          }, j);
        })
      }), renderArticles(), renderPaginationButton()]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Articles);

/***/ }),

/***/ 629:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);




const Contacts = ({
  sectionContacts
}) => {
  const copyText = () => {
    if (false) {}
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
    className: "contacts",
    id: "contacts",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "uk-container uk-container-large",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "contacts__content",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          className: "contacts__heading",
          children: sectionContacts.attributes.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "contacts__grid uk-grid uk-grid-medium",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "uk-width-2-3 contacts__grid_text",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "contacts__address-block",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "address-block address-block__text",
                children: sectionContacts.attributes.addressLink
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: copyText,
                className: "address-block address-block__copy",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                  image: sectionContacts.attributes.buttonIcon
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "uk-width-1-3 contacts__grid_button",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "contacts__button-block",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "button button-block__button",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  href: "mailto:" + sectionContacts.attributes.addressLink,
                  children: sectionContacts.attributes.buttonText
                })
              })
            })
          })]
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Contacts);

/***/ }),

/***/ 2233:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(883);






const Mission = ({
  sectionMission,
  missions,
  missionSlides
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
    className: "mission",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "mission__content uk-container uk-container-large",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "mission__title",
        children: sectionMission.attributes.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mission-grid uk-grid uk-grid-medium",
        children: missions.map((missionItem, i) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mission-grid__item uk-width-1-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "mission-card",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mission-card__image",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                  image: missionItem.attributes.image
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mission-card__title",
                children: missionItem.attributes.title
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mission-card__description",
                children: missionItem.attributes.description
              })]
            })
          }, i);
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "mission__slider",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "uk-position-relative uk-visible-toggle uk-light uk-slider uk-slider-container",
        tabIndex: "-1",
        "data-uk-slider": true,
        "data-autoplay": missionSlides[0].attributes.autoplay,
        "data-autoplay-interval": missionSlides[0].attributes.autoplayInterval,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
          className: "uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-4@l",
          style: {
            willChange: "transform",
            transform: "translate3d(0px, 0px, 0px)"
          },
          children: missionSlides[0].attributes.slides.data.map((slide, i) => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              tabIndex: "-1",
              className: "uk-active",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                layout: "responsive",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                src: (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .getStrapiURL */ .p)(slide.attributes.url),
                alt: slide.attributes.alternativeText || ""
              })
            }, i);
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: "uk-position-center-left uk-position-small uk-icon uk-slidenav-previous uk-slidenav",
          href: "#",
          "data-uk-slidenav-previous": true,
          "data-uk-slider-item": "previous",
          children: " "
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: "uk-position-center-right uk-position-small uk-icon uk-slidenav-previous uk-slidenav uk-slidenav-next",
          href: "#",
          "data-uk-slidenav-next": true,
          "data-uk-slider-item": "next",
          children: " "
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Mission);

/***/ }),

/***/ 70:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);




const Partners = ({
  sectionPartner,
  partners
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
    className: "partners",
    id: "partners",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "partners__content uk-container uk-container-large",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "partners__title",
        children: sectionPartner.attributes.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "partners__grid uk-grid uk-grid-medium",
        children: partners.map((partner, i) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "partners__grid-item uk-width-1-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
              image: partner.attributes.image
            })
          }, i);
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Partners);

/***/ }),

/***/ 3632:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);



const ScrollTop = ({
  projects
}) => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
    onClick: scrollTop,
    className: "scroll-top",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      image: projects.attributes.iconNext
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ScrollTop);

/***/ }),

/***/ 6531:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1844);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5030);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3703);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);







const Welcome = ({
  welcome,
  homepage,
  categories,
  sectionDonation,
  langSwithes,
  lang
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
    className: "welcome",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "background",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        image: welcome.attributes.background
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nav__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      homepage: homepage,
      categories: categories,
      langSwithes: langSwithes,
      lang: lang
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "welcome__block uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
        className: "welcome__heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          className: "welcome__headingType",
          children: [welcome.attributes.headingType, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})]
        }), welcome.attributes.headingTitle]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "welcome__desription",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_markdown__WEBPACK_IMPORTED_MODULE_4___default()), {
          source: welcome.attributes.description,
          escapeHtml: false
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "button welcome__button",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: sectionDonation.attributes.donationsData.donationLink,
          children: welcome.attributes.button
        })
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Welcome);

/***/ }),

/***/ 96:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);




const Win = ({
  sectionWin
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
    className: "win",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "win__background",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        image: sectionWin.attributes.background
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "win__block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
        className: "win__heading",
        children: [" ", sectionWin.attributes.title, " "]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Win);

/***/ })

};
;