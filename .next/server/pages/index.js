(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./components/about.js":
/*!*****************************!*\
  !*** ./components/about.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\about.js";

const About = ({
  about
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "about",
    id: "about",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "about__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "about__title",
        children: about.attributes.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "about__description",
        children: about.attributes.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/articles.js":
/*!********************************!*\
  !*** ./components/articles.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\articles.js";

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
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "articles__pagination",
        onClick: updatePaginationState,
        children: projects.attributes.projectsData.paginationButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }, undefined);
    }
  };

  const renderArticles = () => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "articles__projects uk-grid uk-child-width-1-2",
      children: paginatedCategoryData.map((project, k) => {
        if (lang === "uk") {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "articles__projects-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: `/article/${project.attributes.slug}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "uk-link-reset",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "projects-item__wrapper",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "projects-item__filter"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "projects-item__bg",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                      image: project.attributes.image
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                    className: "projects-item__labels",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      className: "projects-item-label",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: "projects-item-label__text",
                        children: currentSelectedType.value
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 29
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 27
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      className: "projects-item-label",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                        image: projects.attributes[iconKeyMap[currentSelectedStatus.key]]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 131,
                        columnNumber: 29
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: "projects-item-label__text",
                        children: currentSelectedStatus.label
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 29
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "projects-item__content",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                      className: "projects-item__title",
                      children: project.attributes.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 27
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "projects-item__desc",
                      children: project.attributes.description
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "project-item__next",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                      image: projects.attributes.iconNext
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 19
            }, undefined)
          }, k, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 17
          }, undefined);
        } else {
          console.log('else articles');
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "articles__projects-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: `${lang}/article/${project.attributes.slug}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "uk-link-reset",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "projects-item__wrapper",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "projects-item__filter"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "projects-item__bg",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                      image: project.attributes.image
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                    className: "projects-item__labels",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      className: "projects-item-label",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: "projects-item-label__text",
                        children: currentSelectedType.value
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 172,
                        columnNumber: 29
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 171,
                      columnNumber: 27
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      className: "projects-item-label",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                        image: projects.attributes[iconKeyMap[currentSelectedStatus.key]]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 177,
                        columnNumber: 29
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: "projects-item-label__text",
                        children: currentSelectedStatus.label
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 184,
                        columnNumber: 29
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "projects-item__content",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                      className: "projects-item__title",
                      children: project.attributes.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 190,
                      columnNumber: 27
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "projects-item__desc",
                      children: project.attributes.description
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "project-item__next",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                      image: projects.attributes.iconNext
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 19
            }, undefined)
          }, k, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 17
          }, undefined);
        }
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "articles",
    id: "projects",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "articles__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "articles__header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "articles__title",
          children: projects.attributes.projectsData.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "articles__statuses",
          children: projects.attributes.projectsData.statuses.map((status, i) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: `articles__statuses-item ${i === selectedStatus ? "articles__statuses-item_active" : ""}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: setSelectedStatus.bind(undefined, i),
                children: status.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 19
              }, undefined)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 17
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "articles__types",
        children: projects.attributes.projectsData.types.map((type, j) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: `articles__types-item ${j === selectedType ? "articles__types-item_active" : ""}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "types__button",
              onClick: setSelectedType.bind(undefined, j),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                image: getIcon(type.key)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: type.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 17
            }, undefined)
          }, j, false, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, undefined), renderArticles(), renderPaginationButton()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 212,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ }),

/***/ "./components/contacts.js":
/*!********************************!*\
  !*** ./components/contacts.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./components/image.js");

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\contacts.js";


const Contacts = ({
  sectionContacts
}) => {
  const copyText = () => {
    if (false) {}
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "contacts",
    id: "contacts",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "contacts__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "contacts__heading",
        children: sectionContacts.attributes.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-grid uk-grid-medium",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "uk-width-2-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "contacts__address-block",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "address-block address-block__text",
              children: sectionContacts.attributes.addressLink
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              onClick: copyText,
              className: "address-block address-block__copy",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_1__.default, {
                image: sectionContacts.attributes.buttonIcon
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "uk-width-1-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "contacts__button-block",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "button-block__button",
              href: "mailto:" + sectionContacts.attributes.addressLink,
              children: sectionContacts.attributes.buttonText
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Contacts);

/***/ }),

/***/ "./components/donations.js":
/*!*********************************!*\
  !*** ./components/donations.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\donations.js";




const Donations = ({
  sectionDonation,
  sectionContacts
}) => {
  const {
    0: selectedDonation,
    1: setSelectedDonation
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: selectedDonationBank,
    1: setSelectedDonationBank
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: selectedDonationCrypto,
    1: setSelectedDonationCrypto
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);

  const copyText = text => {
    if (false) {}
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "donations",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "donations__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "donations__title",
        children: sectionDonation.attributes.donationsData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "donations__menu",
        children: sectionDonation.attributes.donationsData.types.map((type, i) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: `donations__menu-item ${i === selectedDonation ? "donations__menu-item_active" : ""}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: setSelectedDonation.bind(undefined, i),
              children: type.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 17
            }, undefined)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "donations__desc",
        children: selectedDonation === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "donations__mobilepay",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "donations__mobilepay-desc",
            children: sectionDonation.attributes.donationsData.types[selectedDonation].desc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: sectionDonation.attributes.donationsData.donationLink,
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "donations__button",
              children: sectionDonation.attributes.donationsData.types[selectedDonation].button
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, undefined) : selectedDonation === 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "donations__banks",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "donations__submenu",
            children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes.map((subtype, j) => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: `donations__submenu-item ${j === selectedDonationBank ? "donations__submenu-item_active" : ""}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  onClick: setSelectedDonationBank.bind(undefined, j),
                  children: subtype.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 23
                }, undefined)
              }, j, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 21
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, undefined), selectedDonationBank >= 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "donations__banks-desc",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.name.key
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.name.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.code.key
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.code.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              onClick: copyText.bind(undefined, sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.code.value),
              className: "donations donations__copy",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                image: sectionContacts.attributes.buttonIcon
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.bank.key
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.bank.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.account.key
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.account.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              onClick: copyText.bind(undefined, sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.account.value),
              className: "donations donations__copy",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                image: sectionContacts.attributes.buttonIcon
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.currency.key
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.currency.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "donations__banks-guide",
              children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].guide
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 17
          }, undefined) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, undefined) : selectedDonation === 2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "donations__crypto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "donations__submenu",
            children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes.map((subtype, k) => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: `donations__submenu-item ${k === selectedDonationCrypto ? "donations__submenu-item_active" : ""}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  onClick: setSelectedDonationCrypto.bind(undefined, k),
                  children: subtype.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 23
                }, undefined)
              }, k, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 21
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 15
          }, undefined), selectedDonationBank >= 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "donations__crypto-desc",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationCrypto].wallet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              onClick: copyText.bind(undefined, sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationCrypto].wallet),
              className: "donations donations__copy",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                image: sectionContacts.attributes.buttonIcon
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 17
          }, undefined) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 13
        }, undefined) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Donations);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\footer.js";



const Footer = ({
  sectionFooter,
  socials,
  categories,
  lang
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "footer",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "footer__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "footer__navigation-footer",
        children: categories.map(category => {
          if (category.attributes.isHomePage) {
            if (lang === "uk") {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "navigation-footer__item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: `/#${category.attributes.slug}`,
                  passHref: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "uk-link-reset navigation-footer__link",
                    children: category.attributes.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 21
                }, undefined)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 19
              }, undefined);
            } else {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "navigation-footer__item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: `/${lang}/#${category.attributes.slug}`,
                  passHref: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "uk-link-reset navigation-footer__link",
                    children: category.attributes.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 21
                }, undefined)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 19
              }, undefined);
            }
          } else {
            if (lang === "uk") {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "navigation-footer__item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: `/${category.attributes.slug}`,
                  passHref: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "uk-link-reset navigation-footer__link",
                    children: category.attributes.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 21
                }, undefined)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 19
              }, undefined);
            } else {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "navigation-footer__item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: `/${lang}/${category.attributes.slug}`,
                  passHref: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "uk-link-reset navigation-footer__link",
                    children: category.attributes.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 21
                }, undefined)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 19
              }, undefined);
            }
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "footer__social-footer",
        children: socials.map(social => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "social-footer__item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: social.attributes.link,
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "social-footer__icon",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_1__.default, {
                    image: social.attributes.icon
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 17
            }, undefined)
          }, social.id, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "footer__description",
        children: sectionFooter.attributes.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/image.js":
/*!*****************************!*\
  !*** ./components/image.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\image.js";



const Image = ({
  image,
  style
}) => {
  const {
    url,
    alternativeText,
    width,
    height
  } = image.data.attributes;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
    layout: "responsive",
    width: width || "100%",
    height: height || "100%",
    objectFit: "contain",
    src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image),
    alt: alternativeText || ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\layout.js";

const Layout = ({
  children,
  page
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: page,
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 1,
  columnNumber: 40
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/mission.js":
/*!*******************************!*\
  !*** ./components/mission.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\mission.js";




const Mission = ({
  sectionMission,
  missions,
  missionSlides
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "mission",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mission__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "mission__title",
        children: sectionMission.attributes.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-grid uk-grid-medium",
        children: missions.map((missionItem, i) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "uk-width-1-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mission-card",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mission-card__image",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_1__.default, {
                  image: missionItem.attributes.image
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "mission-card__title",
                children: missionItem.attributes.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mission-card__description",
                children: missionItem.attributes.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 17
            }, undefined)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mission__slider",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-position-relative uk-visible-toggle uk-light uk-slider uk-slider-container",
        tabIndex: "-1",
        "data-uk-slider": true,
        "data-autoplay": missionSlides[0].attributes.autoplay,
        "data-autoplay-interval": missionSlides[0].attributes.autoplayInterval,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m",
          style: {
            willChange: "transform",
            transform: "translate3d(0px, 0px, 0px)"
          },
          children: missionSlides[0].attributes.slides.data.map((slide, i) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              tabIndex: "-1",
              className: "uk-active",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                layout: "responsive",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                src: (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.getStrapiURL)(slide.attributes.url),
                alt: slide.attributes.alternativeText || ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 19
              }, undefined)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "uk-position-center-left uk-position-small uk-icon uk-slidenav-previous uk-slidenav",
          href: "#",
          "data-uk-slidenav-previous": true,
          "data-uk-slider-item": "previous",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "uk-position-center-right uk-position-small uk-icon uk-slidenav-previous uk-slidenav uk-slidenav-next",
          href: "#",
          "data-uk-slidenav-next": true,
          "data-uk-slider-item": "next",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Mission);

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\nav.js";





const Nav = ({
  homepage,
  categories,
  langSwithes,
  lang
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  const renderLogoLink = () => {
    if (lang === "uk") {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "uk-link-reset navbar__logo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
            image: homepage.attributes.logo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/${lang}`,
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "uk-link-reset navbar__logo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
            image: homepage.attributes.logo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined);
    }
  };

  const createLangUrl = newLang => {
    var _router$query;

    const path = router.pathname;
    const slug = router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.slug;

    if (lang === "uk") {
      if (slug) {
        return `/${newLang}${path.replace("[slug]", slug)}`;
      } else {
        return `/${newLang}${path}`;
      }
    } else {
      if (slug) {
        return `/${path.replace("[slug]", slug).split("/").splice(2).join("/")}`;
      } else {
        return `/${path.split("/").splice(2).join("/")}`;
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "navbar",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "uk-navbar-container uk-margin-auto uk-container-large uk-navbar",
      "data-uk-navbar": true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "uk-navbar-left navbar__left",
        children: [renderLogoLink(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "uk-navbar-nav navbar__center",
          children: categories.map(category => {
            if (category.attributes.isHomePage) {
              if (lang === "uk") {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `/#${category.attributes.slug}`,
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "uk-link-reset navbar__menu-item",
                      children: category.attributes.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 23
                  }, undefined)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 21
                }, undefined);
              } else {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `/${lang}/#${category.attributes.slug}`,
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "uk-link-reset navbar__menu-item",
                      children: category.attributes.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 23
                  }, undefined)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 21
                }, undefined);
              }
            } else {
              if (lang === "uk") {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `/${category.attributes.slug}`,
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "uk-link-reset navbar__menu-item",
                      children: category.attributes.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 23
                  }, undefined)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 21
                }, undefined);
              } else {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `/${lang}/${category.attributes.slug}`,
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "uk-link-reset navbar__menu-item",
                      children: category.attributes.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 23
                  }, undefined)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 21
                }, undefined);
              }
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "uk-navbar-right navbar__right",
        children: langSwithes.map((currentLang, i) => {
          if (currentLang.attributes.lang === lang) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "navbar__menu-item navbar__menu-item_active",
                children: currentLang.attributes.langLabel
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, undefined)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, undefined);
          } else {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: createLangUrl(currentLang.attributes.lang),
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "uk-link-reset navbar__menu-item",
                  children: currentLang.attributes.langLabel
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 19
              }, undefined)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, undefined);
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/partners.js":
/*!********************************!*\
  !*** ./components/partners.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./components/image.js");

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\partners.js";


const Partners = ({
  sectionPartner,
  partners
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "partners",
    id: "partners",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "partners__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "partners__title",
        children: sectionPartner.attributes.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-grid uk-grid-medium",
        children: partners.map((partner, i) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "uk-width-1-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_1__.default, {
              image: partner.attributes.image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 17
            }, undefined)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Partners);

/***/ }),

/***/ "./components/scrollTop.js":
/*!*********************************!*\
  !*** ./components/scrollTop.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./components/image.js");

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\scrollTop.js";


const ScrollTop = ({
  projects
}) => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    onClick: scrollTop,
    className: "scroll-top",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_1__.default, {
      image: projects.attributes.iconNext
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ScrollTop);

/***/ }),

/***/ "./components/seo.js":
/*!***************************!*\
  !*** ./components/seo.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\seo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Seo = ({
  seo
}) => {
  const {
    defaultSeo,
    siteName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.GlobalContext);

  const seoWithDefaults = _objectSpread(_objectSpread({}, defaultSeo), seo);

  const fullSeo = _objectSpread(_objectSpread({}, seoWithDefaults), {}, {
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    // Get full image URL
    shareImage: (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__.getStrapiMedia)(seoWithDefaults.shareImage)
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [fullSeo.metaTitle && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:title",
        content: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:title",
        content: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.metaDescription && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.shareImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.article && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:type",
      content: "article"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 27
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Seo);

/***/ }),

/***/ "./components/welcome.js":
/*!*******************************!*\
  !*** ./components/welcome.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\welcome.js";





const Welcome = ({
  welcome,
  homepage,
  categories,
  sectionDonation,
  langSwithes,
  lang
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "welcome",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "background",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
        image: welcome.attributes.background
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav__WEBPACK_IMPORTED_MODULE_1__.default, {
      homepage: homepage,
      categories: categories,
      langSwithes: langSwithes,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "welcome__block uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "welcome__heading",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "welcome__headingType",
          children: [welcome.attributes.headingType, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), welcome.attributes.headingTitle]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "welcome__desription",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_4___default()), {
          source: welcome.attributes.description,
          escapeHtml: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "button welcome__button",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: sectionDonation.attributes.donationsData.donationLink,
          children: welcome.attributes.button
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ }),

/***/ "./components/win.js":
/*!***************************!*\
  !*** ./components/win.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./components/image.js");

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\win.js";


const Win = ({
  sectionWin
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "win",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "win__background",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_1__.default, {
        image: sectionWin.attributes.background
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "win__block",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "win__heading",
        children: [" ", sectionWin.attributes.title, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Win);

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; }
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */

function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */

async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = _objectSpread({
    headers: {
      "Content-Type": "application/json"
    }
  }, options); // Build request URL


  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`; // Trigger API call

  const response = await fetch(requestUrl, mergedOptions); // Handle response

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }

  const data = await response.json();
  return data;
}

/***/ }),

/***/ "./lib/media.js":
/*!**********************!*\
  !*** ./lib/media.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiMedia": function() { return /* binding */ getStrapiMedia; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./lib/api.js");

function getStrapiMedia(media) {
  const {
    url
  } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? (0,_api__WEBPACK_IMPORTED_MODULE_0__.getStrapiURL)(url) : url;
  return imageUrl;
}

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["localhost"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, pageProps);
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": function() { return /* binding */ GlobalContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // Store Strapi Global object in context

const GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({});

const MyApp = ({
  Component,
  pageProps
}) => {
  const {
    global
  } = pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,_lib_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(global.attributes.favicon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {
      value: global.attributes,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


MyApp.getInitialProps = async ctx => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx); // Fetch global site settings from Strapi

  const globalRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__.fetchAPI)("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*"
      }
    }
  }); // Pass the data to our page via props

  return _objectSpread(_objectSpread({}, appProps), {}, {
    pageProps: {
      global: globalRes.data
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/seo */ "./components/seo.js");
/* harmony import */ var _components_welcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/welcome */ "./components/welcome.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/about */ "./components/about.js");
/* harmony import */ var _components_mission__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/mission */ "./components/mission.js");
/* harmony import */ var _components_partners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/partners */ "./components/partners.js");
/* harmony import */ var _components_donations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/donations */ "./components/donations.js");
/* harmony import */ var _components_win__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/win */ "./components/win.js");
/* harmony import */ var _components_contacts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/contacts */ "./components/contacts.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/articles */ "./components/articles.js");
/* harmony import */ var _components_scrollTop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/scrollTop */ "./components/scrollTop.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\pages\\index.js";

/* eslint-disable prettier/prettier */















const Home = ({
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
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    page: "home-page",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_3__.default, {
      seo: homepage.attributes.seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_welcome__WEBPACK_IMPORTED_MODULE_4__.default, {
      welcome: welcome,
      homepage: homepage,
      categories: categories,
      sectionDonation: sectionDonation,
      langSwithes: langSwithes,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_about__WEBPACK_IMPORTED_MODULE_5__.default, {
      about: about
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mission__WEBPACK_IMPORTED_MODULE_6__.default, {
      sectionMission: sectionMission,
      missions: missions,
      missionSlides: missionSlides,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_articles__WEBPACK_IMPORTED_MODULE_12__.default, {
      articles: articles,
      categories: categories,
      projects: projects,
      missions: missions,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_partners__WEBPACK_IMPORTED_MODULE_7__.default, {
      sectionPartner: sectionPartner,
      partners: partners
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_donations__WEBPACK_IMPORTED_MODULE_8__.default, {
      sectionContacts: sectionContacts,
      sectionDonation: sectionDonation,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_win__WEBPACK_IMPORTED_MODULE_9__.default, {
      sectionWin: sectionWin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contacts__WEBPACK_IMPORTED_MODULE_10__.default, {
      sectionContacts: sectionContacts
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_11__.default, {
      sectionFooter: sectionFooter,
      socials: socials,
      categories: categories,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_scrollTop__WEBPACK_IMPORTED_MODULE_13__.default, {
      projects: projects
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined);
};

async function getStaticProps() {
  const lang = "uk"; // Run API calls in parallel

  const [articlesRes, sectionProjectRes, sectionDonationRes, sectionSocialsRes, sectionFooterRes, sectionContactsRes, sectionWinRes, sectionPartnerRes, partnersRes, sectionMissionRes, missionsRes, missionSlidesRes, categoriesRes, welcomeRes, aboutRes, langSwitchesRes, homepageRes] = await Promise.all([(0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/articles", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/section-project", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/section-donation", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/socials", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/section-footer", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/section-contact", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/section-win", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/section-partner", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/partners", {
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/section-mission", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/missions", {
    locale: lang,
    populate: {
      title: {
        populate: "*"
      },
      description: {
        populate: "*"
      },
      image: {
        populate: "*"
      }
    }
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/missions-slides", {
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/categories", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/section-welcome", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/section-about", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/lang-switches", {
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__.fetchAPI)("/homepage", {
    locale: lang,
    populate: {
      seo: {
        populate: "*"
      },
      logo: {
        populate: "*"
      }
    }
  })]);
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
      lang: lang
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-markdown");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9hYm91dC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2FydGljbGVzLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9kb25hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL21pc3Npb24uanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9uYXYuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9wYXJ0bmVycy5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL3Njcm9sbFRvcC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL3Nlby5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL3dlbGNvbWUuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy93aW4uanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9saWIvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInFzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInJlYWN0LW1hcmtkb3duXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2lnbm9yZWR8QzpcXFVzZXJzXFxzdGFza1xcd29ya1xccmVib3JuLXVrcmFpbmVcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQWJvdXQiLCJhYm91dCIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiQXJ0aWNsZXMiLCJhcnRpY2xlcyIsInByb2plY3RzIiwibWlzc2lvbnMiLCJsYW5nIiwic2VsZWN0ZWRTdGF0dXMiLCJzZXRTZWxlY3RlZFN0YXR1cyIsInVzZVN0YXRlIiwic2VsZWN0ZWRUeXBlIiwic2V0U2VsZWN0ZWRUeXBlIiwicGFnaW5hdGlvblN0YXRlIiwic2V0UGFnaW5hdGlvblN0YXRlIiwicGFnaW5hdGlvbkxpbWl0Iiwic2V0UGFnaW5hdGlvbkxpbWl0IiwiY2F0ZWdvcmllc0RhdGEiLCJzZXRDYXRlZ29yaWVzRGF0YSIsInBhZ2luYXRlZENhdGVnb3J5RGF0YSIsInNldFBhZ2luYXRlZENhdGVnb3J5RGF0YSIsImN1cnJlbnRTZWxlY3RlZFN0YXR1cyIsInByb2plY3RzRGF0YSIsInN0YXR1c2VzIiwiY3VycmVudFNlbGVjdGVkVHlwZSIsInR5cGVzIiwicGFnaW5hdGlvbkRlbHRhIiwiaWNvbktleU1hcCIsImluUHJvZ3Jlc3MiLCJkb25lIiwidXNlRWZmZWN0IiwiX2NhdGVnb3JpZXNEYXRhIiwiX3BhZ2luYXRpb25TdGF0ZSIsInJlZHVjZSIsImFjYyIsImFydGljbGUiLCJzdGF0dXMiLCJ0eXBlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwia2V5IiwiZGF0YSIsInBhZ2luYXRpb25Db3VudCIsIm5ld1BhZ2luYXRlZENhdGVnb3J5RGF0YSIsImZpbHRlciIsIml0ZW0iLCJpIiwidXBkYXRlUGFnaW5hdGlvblN0YXRlIiwiaXRlbXNMZWZ0IiwicHJldlBhZ2luYXRpb25TdGF0ZSIsImdldEljb24iLCJpbWFnZSIsImZvckVhY2giLCJlbGVtZW50IiwicmVuZGVyUGFnaW5hdGlvbkJ1dHRvbiIsIm1heFBvc2l0aW9uIiwiY3VycmVudFBvc2l0aW9uIiwicGFnaW5hdGlvbkJ1dHRvbiIsInJlbmRlckFydGljbGVzIiwibWFwIiwicHJvamVjdCIsImsiLCJzbHVnIiwidmFsdWUiLCJsYWJlbCIsImljb25OZXh0IiwiY29uc29sZSIsImxvZyIsImJpbmQiLCJqIiwiQ29udGFjdHMiLCJzZWN0aW9uQ29udGFjdHMiLCJjb3B5VGV4dCIsImFkZHJlc3NMaW5rIiwiYnV0dG9uSWNvbiIsImJ1dHRvblRleHQiLCJEb25hdGlvbnMiLCJzZWN0aW9uRG9uYXRpb24iLCJzZWxlY3RlZERvbmF0aW9uIiwic2V0U2VsZWN0ZWREb25hdGlvbiIsInNlbGVjdGVkRG9uYXRpb25CYW5rIiwic2V0U2VsZWN0ZWREb25hdGlvbkJhbmsiLCJzZWxlY3RlZERvbmF0aW9uQ3J5cHRvIiwic2V0U2VsZWN0ZWREb25hdGlvbkNyeXB0byIsInRleHQiLCJkb25hdGlvbnNEYXRhIiwibmFtZSIsImRlc2MiLCJkb25hdGlvbkxpbmsiLCJidXR0b24iLCJzdWJ0eXBlcyIsInN1YnR5cGUiLCJjb2RlIiwiYmFuayIsImFjY291bnQiLCJjdXJyZW5jeSIsImd1aWRlIiwid2FsbGV0IiwiRm9vdGVyIiwic2VjdGlvbkZvb3RlciIsInNvY2lhbHMiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJpc0hvbWVQYWdlIiwiaWQiLCJzb2NpYWwiLCJsaW5rIiwiaWNvbiIsIkltYWdlIiwic3R5bGUiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJ3aWR0aCIsImhlaWdodCIsImdldFN0cmFwaU1lZGlhIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJwYWdlIiwiTWlzc2lvbiIsInNlY3Rpb25NaXNzaW9uIiwibWlzc2lvblNsaWRlcyIsIm1pc3Npb25JdGVtIiwiYXV0b3BsYXkiLCJhdXRvcGxheUludGVydmFsIiwid2lsbENoYW5nZSIsInRyYW5zZm9ybSIsInNsaWRlcyIsInNsaWRlIiwiZ2V0U3RyYXBpVVJMIiwiTmF2IiwiaG9tZXBhZ2UiLCJsYW5nU3dpdGhlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInJlbmRlckxvZ29MaW5rIiwibG9nbyIsImNyZWF0ZUxhbmdVcmwiLCJuZXdMYW5nIiwicGF0aCIsInBhdGhuYW1lIiwicXVlcnkiLCJyZXBsYWNlIiwic3BsaXQiLCJzcGxpY2UiLCJqb2luIiwiY3VycmVudExhbmciLCJsYW5nTGFiZWwiLCJQYXJ0bmVycyIsInNlY3Rpb25QYXJ0bmVyIiwicGFydG5lcnMiLCJwYXJ0bmVyIiwiU2Nyb2xsVG9wIiwic2Nyb2xsVG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJTZW8iLCJzZW8iLCJkZWZhdWx0U2VvIiwic2l0ZU5hbWUiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInNlb1dpdGhEZWZhdWx0cyIsImZ1bGxTZW8iLCJtZXRhVGl0bGUiLCJzaGFyZUltYWdlIiwibWV0YURlc2NyaXB0aW9uIiwiV2VsY29tZSIsIndlbGNvbWUiLCJiYWNrZ3JvdW5kIiwiaGVhZGluZ1R5cGUiLCJoZWFkaW5nVGl0bGUiLCJXaW4iLCJzZWN0aW9uV2luIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIiwiZmV0Y2hBUEkiLCJ1cmxQYXJhbXNPYmplY3QiLCJvcHRpb25zIiwibWVyZ2VkT3B0aW9ucyIsImhlYWRlcnMiLCJxdWVyeVN0cmluZyIsInFzIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImVycm9yIiwic3RhdHVzVGV4dCIsIkVycm9yIiwianNvbiIsIm1lZGlhIiwiaW1hZ2VVcmwiLCJzdGFydHNXaXRoIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyIiwiX2V4dGVuZHMyIiwiX3JlYWN0IiwiX2hlYWQiLCJfdG9CYXNlIiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIk1hcCIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImRlZmF1bHRMb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiZGVmYXVsdCIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsIlNldCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0IiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJpbWciLCJwbGFjZWhvbGRlciIsImhhbmRsZUxvYWQiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcmVmIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwiY2xhc3NOYW1lIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJpbWdBdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInJvbGUiLCJ0b0Jhc2U2NCIsIk9iamVjdCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJoYXNQcmVmZXRjaCIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsInBhdGhuYW1lUGFydHMiLCJzb21lIiwidG9Mb3dlckNhc2UiLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieSIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJmb3JtYXRVcmwiLCJxdWVyeXN0cmluZyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJhdXRoIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsImFwcEdldEluaXRpYWxQcm9wcyIsInJlbmRlciIsImNyZWF0ZUNvbnRleHQiLCJNeUFwcCIsImZhdmljb24iLCJhcHBQcm9wcyIsImdsb2JhbFJlcyIsInBvcHVsYXRlIiwiSG9tZSIsImdldFN0YXRpY1Byb3BzIiwiYXJ0aWNsZXNSZXMiLCJzZWN0aW9uUHJvamVjdFJlcyIsInNlY3Rpb25Eb25hdGlvblJlcyIsInNlY3Rpb25Tb2NpYWxzUmVzIiwic2VjdGlvbkZvb3RlclJlcyIsInNlY3Rpb25Db250YWN0c1JlcyIsInNlY3Rpb25XaW5SZXMiLCJzZWN0aW9uUGFydG5lclJlcyIsInBhcnRuZXJzUmVzIiwic2VjdGlvbk1pc3Npb25SZXMiLCJtaXNzaW9uc1JlcyIsIm1pc3Npb25TbGlkZXNSZXMiLCJjYXRlZ29yaWVzUmVzIiwid2VsY29tZVJlcyIsImFib3V0UmVzIiwibGFuZ1N3aXRjaGVzUmVzIiwiaG9tZXBhZ2VSZXMiLCJy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QUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsd0dBQStCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0M7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7O0FDaEJBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiY29uc3QgQWJvdXQgPSAoeyBhYm91dCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWJvdXRcIiBpZD1cImFib3V0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X19jb250ZW50IHVrLWNvbnRhaW5lciB1ay1jb250YWluZXItbGFyZ2VcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFib3V0X190aXRsZVwiPnthYm91dC5hdHRyaWJ1dGVzLnRpdGxlfTwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFib3V0X19kZXNjcmlwdGlvblwiPnthYm91dC5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dFxuIiwiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuY29uc3QgQXJ0aWNsZXMgPSAoeyBhcnRpY2xlcywgcHJvamVjdHMsIG1pc3Npb25zLCBsYW5nIH0pID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkU3RhdHVzLCBzZXRTZWxlY3RlZFN0YXR1c10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbc2VsZWN0ZWRUeXBlLCBzZXRTZWxlY3RlZFR5cGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3BhZ2luYXRpb25TdGF0ZSwgc2V0UGFnaW5hdGlvblN0YXRlXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbcGFnaW5hdGlvbkxpbWl0LCBzZXRQYWdpbmF0aW9uTGltaXRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2NhdGVnb3JpZXNEYXRhLCBzZXRDYXRlZ29yaWVzRGF0YV0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW3BhZ2luYXRlZENhdGVnb3J5RGF0YSwgc2V0UGFnaW5hdGVkQ2F0ZWdvcnlEYXRhXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IGN1cnJlbnRTZWxlY3RlZFN0YXR1cyA9IHByb2plY3RzLmF0dHJpYnV0ZXMucHJvamVjdHNEYXRhLnN0YXR1c2VzW3NlbGVjdGVkU3RhdHVzXVxuICBjb25zdCBjdXJyZW50U2VsZWN0ZWRUeXBlID0gcHJvamVjdHMuYXR0cmlidXRlcy5wcm9qZWN0c0RhdGEudHlwZXNbc2VsZWN0ZWRUeXBlXVxuICBcbiAgY29uc3QgcGFnaW5hdGlvbkRlbHRhID0gMlxuXG4gIGNvbnN0IGljb25LZXlNYXAgPSB7XG4gICAgaW5Qcm9ncmVzczogXCJpY29uSW5Qcm9ncmVzc1wiLFxuICAgIGRvbmU6IFwiaWNvbkRvbmVcIixcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgX2NhdGVnb3JpZXNEYXRhID0ge31cbiAgICBjb25zdCBfcGFnaW5hdGlvblN0YXRlID0ge31cbiAgICBcbiAgICBhcnRpY2xlcy5yZWR1Y2UoKGFjYywgYXJ0aWNsZSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdHVzID0gYXJ0aWNsZS5hdHRyaWJ1dGVzLnN0YXR1cztcbiAgICAgIGNvbnN0IHR5cGUgPSBhcnRpY2xlLmF0dHJpYnV0ZXMudHlwZTtcblxuICAgICAgX2NhdGVnb3JpZXNEYXRhW3N0YXR1c10gPSBfY2F0ZWdvcmllc0RhdGFbc3RhdHVzXSB8fCB7fVxuICAgICAgX2NhdGVnb3JpZXNEYXRhW3N0YXR1c11bdHlwZV0gPSBfY2F0ZWdvcmllc0RhdGFbc3RhdHVzXVt0eXBlXSB8fCBbXVxuICAgICAgX2NhdGVnb3JpZXNEYXRhW3N0YXR1c11bdHlwZV0gPSBbLi4uX2NhdGVnb3JpZXNEYXRhW3N0YXR1c11bdHlwZV0sIGFydGljbGVdXG5cbiAgICAgIF9wYWdpbmF0aW9uU3RhdGVbc3RhdHVzXSA9IF9wYWdpbmF0aW9uU3RhdGVbc3RhdHVzXSB8fCB7fVxuICAgICAgX3BhZ2luYXRpb25TdGF0ZVtzdGF0dXNdW3R5cGVdID0gX2NhdGVnb3JpZXNEYXRhW3N0YXR1c11bdHlwZV0ubGVuZ3RoID4gcGFnaW5hdGlvbkRlbHRhID8gcGFnaW5hdGlvbkRlbHRhIDogX2NhdGVnb3JpZXNEYXRhW3N0YXR1c11bdHlwZV0ubGVuZ3RoXG4gICAgfSwgdW5kZWZpbmVkKVxuXG4gICAgc2V0Q2F0ZWdvcmllc0RhdGEoX2NhdGVnb3JpZXNEYXRhKVxuICAgIHNldFBhZ2luYXRpb25TdGF0ZShfcGFnaW5hdGlvblN0YXRlKVxuICB9LCBbYXJ0aWNsZXNdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGFnaW5hdGlvbkxpbWl0KGNhdGVnb3JpZXNEYXRhPy5bY3VycmVudFNlbGVjdGVkU3RhdHVzLmtleV0/LltjdXJyZW50U2VsZWN0ZWRUeXBlLmtleV0/Lmxlbmd0aCB8fCBbXS5sZW5ndGgpXG4gIH0sIFtzZWxlY3RlZFR5cGUsIHNlbGVjdGVkU3RhdHVzLCBjYXRlZ29yaWVzRGF0YSwgcGFnaW5hdGlvblN0YXRlLCBjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5LCBjdXJyZW50U2VsZWN0ZWRUeXBlLmtleV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgfSwgW3BhZ2luYXRpb25TdGF0ZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gY2F0ZWdvcmllc0RhdGE/LltjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5XT8uW2N1cnJlbnRTZWxlY3RlZFR5cGUua2V5XSB8fCBbXVxuICAgIGNvbnN0IHBhZ2luYXRpb25Db3VudCA9IHBhZ2luYXRpb25TdGF0ZT8uW2N1cnJlbnRTZWxlY3RlZFN0YXR1cy5rZXldPy5bY3VycmVudFNlbGVjdGVkVHlwZS5rZXldXG4gICAgY29uc3QgbmV3UGFnaW5hdGVkQ2F0ZWdvcnlEYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0sIGkpID0+IGkgPCBwYWdpbmF0aW9uQ291bnQpXG5cbiAgICBzZXRQYWdpbmF0ZWRDYXRlZ29yeURhdGEobmV3UGFnaW5hdGVkQ2F0ZWdvcnlEYXRhKVxuICB9LCBbc2VsZWN0ZWRUeXBlLCBzZWxlY3RlZFN0YXR1cywgY2F0ZWdvcmllc0RhdGEsIHBhZ2luYXRpb25MaW1pdCwgcGFnaW5hdGlvblN0YXRlLCBjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5LCBjdXJyZW50U2VsZWN0ZWRUeXBlLmtleV0pXG5cbiAgY29uc3QgdXBkYXRlUGFnaW5hdGlvblN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2luYXRpb25Db3VudCA9IHBhZ2luYXRpb25TdGF0ZT8uW2N1cnJlbnRTZWxlY3RlZFN0YXR1cy5rZXldPy5bY3VycmVudFNlbGVjdGVkVHlwZS5rZXldXG4gICAgaWYgKHBhZ2luYXRpb25Db3VudCA8IHBhZ2luYXRpb25MaW1pdCkge1xuICAgICAgY29uc3QgaXRlbXNMZWZ0ID0gcGFnaW5hdGlvbkxpbWl0IC0gcGFnaW5hdGlvbkNvdW50XG4gICAgICBpZiAoaXRlbXNMZWZ0ID49IHBhZ2luYXRpb25EZWx0YSkge1xuICAgICAgICBzZXRQYWdpbmF0aW9uU3RhdGUoKHByZXZQYWdpbmF0aW9uU3RhdGUpID0+ICh7XG4gICAgICAgICAgLi4ucHJldlBhZ2luYXRpb25TdGF0ZSxcbiAgICAgICAgICBbY3VycmVudFNlbGVjdGVkU3RhdHVzLmtleV06IHtcbiAgICAgICAgICAgIC4uLnByZXZQYWdpbmF0aW9uU3RhdGVbY3VycmVudFNlbGVjdGVkU3RhdHVzLmtleV0sXG4gICAgICAgICAgICBbY3VycmVudFNlbGVjdGVkVHlwZS5rZXldOiBwYWdpbmF0aW9uQ291bnQgKyBwYWdpbmF0aW9uRGVsdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRQYWdpbmF0aW9uU3RhdGUoKHByZXZQYWdpbmF0aW9uU3RhdGUpID0+ICh7XG4gICAgICAgICAgLi4ucHJldlBhZ2luYXRpb25TdGF0ZSxcbiAgICAgICAgICBbY3VycmVudFNlbGVjdGVkU3RhdHVzLmtleV06IHtcbiAgICAgICAgICAgIC4uLnByZXZQYWdpbmF0aW9uU3RhdGVbY3VycmVudFNlbGVjdGVkU3RhdHVzLmtleV0sXG4gICAgICAgICAgICBbY3VycmVudFNlbGVjdGVkVHlwZS5rZXldOiBwYWdpbmF0aW9uQ291bnQgKyBpdGVtc0xlZnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0SWNvbiA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IGltYWdlXG4gICAgbWlzc2lvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuYXR0cmlidXRlcy50eXBlID09PSB0eXBlKSB7XG4gICAgICAgIGltYWdlID0gZWxlbWVudC5hdHRyaWJ1dGVzLmltYWdlXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaW1hZ2VcbiAgfVxuXG4gIGNvbnN0IHJlbmRlclBhZ2luYXRpb25CdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgbWF4UG9zaXRpb24gPSBjYXRlZ29yaWVzRGF0YT8uW2N1cnJlbnRTZWxlY3RlZFN0YXR1cy5rZXldPy5bY3VycmVudFNlbGVjdGVkVHlwZS5rZXldPy5sZW5ndGhcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBwYWdpbmF0ZWRDYXRlZ29yeURhdGEubGVuZ3RoXG4gICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA8IG1heFBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGVzX19wYWdpbmF0aW9uXCJcbiAgICAgICAgICBvbkNsaWNrPXt1cGRhdGVQYWdpbmF0aW9uU3RhdGV9XG4gICAgICAgID5cbiAgICAgICAgICB7cHJvamVjdHMuYXR0cmlidXRlcy5wcm9qZWN0c0RhdGEucGFnaW5hdGlvbkJ1dHRvbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVuZGVyQXJ0aWNsZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJhcnRpY2xlc19fcHJvamVjdHMgdWstZ3JpZCB1ay1jaGlsZC13aWR0aC0xLTJcIj5cbiAgICAgICAge3BhZ2luYXRlZENhdGVnb3J5RGF0YS5tYXAoKHByb2plY3QsIGspID0+IHtcbiAgICAgICAgICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtrfSBjbGFzc05hbWU9XCJhcnRpY2xlc19fcHJvamVjdHMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hcnRpY2xlLyR7cHJvamVjdC5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fZmlsdGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX2JnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3Byb2plY3QuYXR0cmlidXRlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX2xhYmVsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW0tbGFiZWxfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U2VsZWN0ZWRUeXBlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzLmF0dHJpYnV0ZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbktleU1hcFtjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0cy1pdGVtLWxhYmVsX190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNlbGVjdGVkU3RhdHVzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuYXR0cmlidXRlcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWl0ZW1fX25leHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17cHJvamVjdHMuYXR0cmlidXRlcy5pY29uTmV4dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vsc2UgYXJ0aWNsZXMnKVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2t9IGNsYXNzTmFtZT1cImFydGljbGVzX19wcm9qZWN0cy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtsYW5nfS9hcnRpY2xlLyR7cHJvamVjdC5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fZmlsdGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX2JnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3Byb2plY3QuYXR0cmlidXRlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX2xhYmVsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW0tbGFiZWxfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U2VsZWN0ZWRUeXBlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzLmF0dHJpYnV0ZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbktleU1hcFtjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0cy1pdGVtLWxhYmVsX190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNlbGVjdGVkU3RhdHVzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuYXR0cmlidXRlcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWl0ZW1fX25leHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17cHJvamVjdHMuYXR0cmlidXRlcy5pY29uTmV4dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpY2xlc1wiIGlkPVwicHJvamVjdHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZXNfX2NvbnRlbnQgdWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVzX19oZWFkZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYXJ0aWNsZXNfX3RpdGxlXCI+XG4gICAgICAgICAgICB7cHJvamVjdHMuYXR0cmlidXRlcy5wcm9qZWN0c0RhdGEudGl0bGV9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYXJ0aWNsZXNfX3N0YXR1c2VzXCI+XG4gICAgICAgICAgICB7cHJvamVjdHMuYXR0cmlidXRlcy5wcm9qZWN0c0RhdGEuc3RhdHVzZXMubWFwKChzdGF0dXMsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFydGljbGVzX19zdGF0dXNlcy1pdGVtICR7XG4gICAgICAgICAgICAgICAgICAgIGkgPT09IHNlbGVjdGVkU3RhdHVzID8gXCJhcnRpY2xlc19fc3RhdHVzZXMtaXRlbV9hY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2V0U2VsZWN0ZWRTdGF0dXMuYmluZCh0aGlzLCBpKX0+XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0dXMudmFsdWV9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFydGljbGVzX190eXBlc1wiPlxuICAgICAgICAgIHtwcm9qZWN0cy5hdHRyaWJ1dGVzLnByb2plY3RzRGF0YS50eXBlcy5tYXAoKHR5cGUsIGopID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17an1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcnRpY2xlc19fdHlwZXMtaXRlbSAke1xuICAgICAgICAgICAgICAgICAgaiA9PT0gc2VsZWN0ZWRUeXBlID8gXCJhcnRpY2xlc19fdHlwZXMtaXRlbV9hY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR5cGVzX19idXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2V0U2VsZWN0ZWRUeXBlLmJpbmQodGhpcyxqKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtnZXRJY29uKHR5cGUua2V5KX0gLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt0eXBlLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAge3JlbmRlckFydGljbGVzKCl9XG4gICAgICAgIHtyZW5kZXJQYWdpbmF0aW9uQnV0dG9uKCl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXNcbiIsImltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxuXG5jb25zdCBDb250YWN0cyA9ICh7IHNlY3Rpb25Db250YWN0cyB9KSA9PiB7XG4gIGNvbnN0IGNvcHlUZXh0ID0gKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB3aW5kb3cubmF2aWdhdG9yLmNsaXBib2FyZFxuICAgICAgICAud3JpdGVUZXh0KHNlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLmFkZHJlc3NMaW5rKVxuICAgICAgICAudGhlbigoKSA9PiB7fSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3RzXCIgaWQ9XCJjb250YWN0c1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0c19fY29udGVudCB1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb250YWN0c19faGVhZGluZ1wiPlxuICAgICAgICAgIHtzZWN0aW9uQ29udGFjdHMuYXR0cmlidXRlcy50aXRsZX1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1ncmlkIHVrLWdyaWQtbWVkaXVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay13aWR0aC0yLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdHNfX2FkZHJlc3MtYmxvY2tcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkcmVzcy1ibG9jayBhZGRyZXNzLWJsb2NrX190ZXh0XCI+XG4gICAgICAgICAgICAgICAge3NlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLmFkZHJlc3NMaW5rfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb3B5VGV4dH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRyZXNzLWJsb2NrIGFkZHJlc3MtYmxvY2tfX2NvcHlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17c2VjdGlvbkNvbnRhY3RzLmF0dHJpYnV0ZXMuYnV0dG9uSWNvbn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXdpZHRoLTEtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0c19fYnV0dG9uLWJsb2NrXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWJsb2NrX19idXR0b25cIlxuICAgICAgICAgICAgICAgIGhyZWY9e1wibWFpbHRvOlwiICsgc2VjdGlvbkNvbnRhY3RzLmF0dHJpYnV0ZXMuYWRkcmVzc0xpbmt9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2VjdGlvbkNvbnRhY3RzLmF0dHJpYnV0ZXMuYnV0dG9uVGV4dH1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBDb250YWN0c1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuY29uc3QgRG9uYXRpb25zID0gKHsgc2VjdGlvbkRvbmF0aW9uLCBzZWN0aW9uQ29udGFjdHMgfSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWREb25hdGlvbiwgc2V0U2VsZWN0ZWREb25hdGlvbl0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbc2VsZWN0ZWREb25hdGlvbkJhbmssIHNldFNlbGVjdGVkRG9uYXRpb25CYW5rXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtzZWxlY3RlZERvbmF0aW9uQ3J5cHRvLCBzZXRTZWxlY3RlZERvbmF0aW9uQ3J5cHRvXSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgY29weVRleHQgPSAodGV4dCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB3aW5kb3cubmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCkudGhlbigoKSA9PiB7fSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRvbmF0aW9uc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGlvbnNfX2NvbnRlbnQgdWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZG9uYXRpb25zX190aXRsZVwiPlxuICAgICAgICAgIHtzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnRpdGxlfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZG9uYXRpb25zX19tZW51XCI+XG4gICAgICAgICAge3NlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXMubWFwKCh0eXBlLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZG9uYXRpb25zX19tZW51LWl0ZW0gJHtcbiAgICAgICAgICAgICAgICAgIGkgPT09IHNlbGVjdGVkRG9uYXRpb24gPyBcImRvbmF0aW9uc19fbWVudS1pdGVtX2FjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZXRTZWxlY3RlZERvbmF0aW9uLmJpbmQodGhpcywgaSl9PlxuICAgICAgICAgICAgICAgICAge3R5cGUubmFtZX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGlvbnNfX2Rlc2NcIj5cbiAgICAgICAgICB7c2VsZWN0ZWREb25hdGlvbiA9PT0gMCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9uYXRpb25zX19tb2JpbGVwYXlcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZG9uYXRpb25zX19tb2JpbGVwYXktZGVzY1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgIF0uZGVzY1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e3NlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEuZG9uYXRpb25MaW5rfVxuICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkb25hdGlvbnNfX2J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgXS5idXR0b25cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBzZWxlY3RlZERvbmF0aW9uID09PSAxID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGlvbnNfX2JhbmtzXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkb25hdGlvbnNfX3N1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICB7c2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICBdLnN1YnR5cGVzLm1hcCgoc3VidHlwZSwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtqfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRvbmF0aW9uc19fc3VibWVudS1pdGVtICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBqID09PSBzZWxlY3RlZERvbmF0aW9uQmFua1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZG9uYXRpb25zX19zdWJtZW51LWl0ZW1fYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NldFNlbGVjdGVkRG9uYXRpb25CYW5rLmJpbmQodGhpcywgail9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3N1YnR5cGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3NlbGVjdGVkRG9uYXRpb25CYW5rID49IDAgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGlvbnNfX2JhbmtzLWRlc2NcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25CYW5rXS5kZXNjLm5hbWUua2V5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25CYW5rXS5kZXNjLm5hbWUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZGVzYy5jb2RlLmtleVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZGVzYy5jb2RlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvcHlUZXh0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgIF0uc3VidHlwZXNbc2VsZWN0ZWREb25hdGlvbkJhbmtdLmRlc2MuY29kZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb25hdGlvbnMgZG9uYXRpb25zX19jb3B5XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17c2VjdGlvbkNvbnRhY3RzLmF0dHJpYnV0ZXMuYnV0dG9uSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgIF0uc3VidHlwZXNbc2VsZWN0ZWREb25hdGlvbkJhbmtdLmRlc2MuYmFuay5rZXlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgIF0uc3VidHlwZXNbc2VsZWN0ZWREb25hdGlvbkJhbmtdLmRlc2MuYmFuay52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25CYW5rXS5kZXNjLmFjY291bnQua2V5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25CYW5rXS5kZXNjLmFjY291bnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29weVRleHQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZGVzYy5hY2NvdW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbmF0aW9ucyBkb25hdGlvbnNfX2NvcHlcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtzZWN0aW9uQ29udGFjdHMuYXR0cmlidXRlcy5idXR0b25JY29ufSAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZGVzYy5jdXJyZW5jeS5rZXlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgIF0uc3VidHlwZXNbc2VsZWN0ZWREb25hdGlvbkJhbmtdLmRlc2MuY3VycmVuY3kudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkb25hdGlvbnNfX2JhbmtzLWd1aWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgIF0uc3VidHlwZXNbc2VsZWN0ZWREb25hdGlvbkJhbmtdLmd1aWRlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogc2VsZWN0ZWREb25hdGlvbiA9PT0gMiA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9uYXRpb25zX19jcnlwdG9cIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRvbmF0aW9uc19fc3VibWVudVwiPlxuICAgICAgICAgICAgICAgIHtzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgIF0uc3VidHlwZXMubWFwKChzdWJ0eXBlLCBrKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2t9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZG9uYXRpb25zX19zdWJtZW51LWl0ZW0gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPT09IHNlbGVjdGVkRG9uYXRpb25DcnlwdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImRvbmF0aW9uc19fc3VibWVudS1pdGVtX2FjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZXRTZWxlY3RlZERvbmF0aW9uQ3J5cHRvLmJpbmQodGhpcywgayl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3N1YnR5cGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3NlbGVjdGVkRG9uYXRpb25CYW5rID49IDAgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGlvbnNfX2NyeXB0by1kZXNjXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQ3J5cHRvXS53YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29weVRleHQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQ3J5cHRvXS53YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9uYXRpb25zIGRvbmF0aW9uc19fY29weVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3NlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLmJ1dHRvbkljb259IC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvbmF0aW9uc1xuIiwiaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuY29uc3QgRm9vdGVyID0gKHsgc2VjdGlvbkZvb3Rlciwgc29jaWFscywgY2F0ZWdvcmllcywgbGFuZyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fY29udGVudCB1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXJfX25hdmlnYXRpb24tZm9vdGVyXCI+XG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhdGVnb3J5LmF0dHJpYnV0ZXMuaXNIb21lUGFnZSkge1xuICAgICAgICAgICAgICBpZiAobGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWZvb3Rlcl9faXRlbVwiIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyMke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmlnYXRpb24tZm9vdGVyX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWZvb3Rlcl9faXRlbVwiIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfS8jJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZpZ2F0aW9uLWZvb3Rlcl9fbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAobGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWZvb3Rlcl9faXRlbVwiIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXQgbmF2aWdhdGlvbi1mb290ZXJfX2xpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tZm9vdGVyX19pdGVtXCIga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2xhbmd9LyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXQgbmF2aWdhdGlvbi1mb290ZXJfX2xpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyX19zb2NpYWwtZm9vdGVyXCI+XG4gICAgICAgICAge3NvY2lhbHMubWFwKChzb2NpYWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzb2NpYWwtZm9vdGVyX19pdGVtXCIga2V5PXtzb2NpYWwuaWR9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3NvY2lhbC5hdHRyaWJ1dGVzLmxpbmt9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWZvb3Rlcl9faWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3NvY2lhbC5hdHRyaWJ1dGVzLmljb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9vdGVyX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIHtzZWN0aW9uRm9vdGVyLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcbiIsImltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uL2xpYi9tZWRpYVwiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuY29uc3QgSW1hZ2UgPSAoeyBpbWFnZSwgc3R5bGUgfSkgPT4ge1xuICBjb25zdCB7IHVybCwgYWx0ZXJuYXRpdmVUZXh0LCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZS5kYXRhLmF0dHJpYnV0ZXNcblxuICByZXR1cm4gKFxuICAgIDxOZXh0SW1hZ2VcbiAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgd2lkdGg9e3dpZHRoIHx8IFwiMTAwJVwifVxuICAgICAgaGVpZ2h0PXtoZWlnaHQgfHwgXCIxMDAlXCJ9XG4gICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgIHNyYz17Z2V0U3RyYXBpTWVkaWEoaW1hZ2UpfVxuICAgICAgYWx0PXthbHRlcm5hdGl2ZVRleHQgfHwgXCJcIn1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlXG4iLCJjb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgcGFnZSB9KSA9PiA8ZGl2IGNsYXNzTmFtZT17cGFnZX0+e2NoaWxkcmVufTwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsImltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuLi9saWIvYXBpXCJcblxuY29uc3QgTWlzc2lvbiA9ICh7IHNlY3Rpb25NaXNzaW9uLCBtaXNzaW9ucywgbWlzc2lvblNsaWRlcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWlzc2lvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXNzaW9uX19jb250ZW50IHVrLWNvbnRhaW5lciB1ay1jb250YWluZXItbGFyZ2VcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1pc3Npb25fX3RpdGxlXCI+e3NlY3Rpb25NaXNzaW9uLmF0dHJpYnV0ZXMudGl0bGV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1ncmlkIHVrLWdyaWQtbWVkaXVtXCI+XG4gICAgICAgICAge21pc3Npb25zLm1hcCgobWlzc2lvbkl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstd2lkdGgtMS0zXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pc3Npb24tY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXNzaW9uLWNhcmRfX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e21pc3Npb25JdGVtLmF0dHJpYnV0ZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtaXNzaW9uLWNhcmRfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHttaXNzaW9uSXRlbS5hdHRyaWJ1dGVzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1pc3Npb24tY2FyZF9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAge21pc3Npb25JdGVtLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXNzaW9uX19zbGlkZXJcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXBvc2l0aW9uLXJlbGF0aXZlIHVrLXZpc2libGUtdG9nZ2xlIHVrLWxpZ2h0IHVrLXNsaWRlciB1ay1zbGlkZXItY29udGFpbmVyXCJcbiAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgICAgICBkYXRhLXVrLXNsaWRlclxuICAgICAgICAgIGRhdGEtYXV0b3BsYXk9e21pc3Npb25TbGlkZXNbMF0uYXR0cmlidXRlcy5hdXRvcGxheX1cbiAgICAgICAgICBkYXRhLWF1dG9wbGF5LWludGVydmFsPXttaXNzaW9uU2xpZGVzWzBdLmF0dHJpYnV0ZXMuYXV0b3BsYXlJbnRlcnZhbH1cbiAgICAgICAgPlxuICAgICAgICAgIDx1bFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstc2xpZGVyLWl0ZW1zIHVrLWNoaWxkLXdpZHRoLTEtMiB1ay1jaGlsZC13aWR0aC0xLTNAcyB1ay1jaGlsZC13aWR0aC0xLTRAbVwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWxsQ2hhbmdlOiBcInRyYW5zZm9ybVwiLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweClcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge21pc3Npb25TbGlkZXNbMF0uYXR0cmlidXRlcy5zbGlkZXMuZGF0YS5tYXAoKHNsaWRlLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIHRhYkluZGV4PVwiLTFcIiBjbGFzc05hbWU9XCJ1ay1hY3RpdmVcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2dldFN0cmFwaVVSTChzbGlkZS5hdHRyaWJ1dGVzLnVybCl9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17c2xpZGUuYXR0cmlidXRlcy5hbHRlcm5hdGl2ZVRleHQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1wb3NpdGlvbi1jZW50ZXItbGVmdCB1ay1wb3NpdGlvbi1zbWFsbCB1ay1pY29uIHVrLXNsaWRlbmF2LXByZXZpb3VzIHVrLXNsaWRlbmF2XCJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgIGRhdGEtdWstc2xpZGVuYXYtcHJldmlvdXNcbiAgICAgICAgICAgIGRhdGEtdWstc2xpZGVyLWl0ZW09XCJwcmV2aW91c1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstcG9zaXRpb24tY2VudGVyLXJpZ2h0IHVrLXBvc2l0aW9uLXNtYWxsIHVrLWljb24gdWstc2xpZGVuYXYtcHJldmlvdXMgdWstc2xpZGVuYXYgdWstc2xpZGVuYXYtbmV4dFwiXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBkYXRhLXVrLXNsaWRlbmF2LW5leHRcbiAgICAgICAgICAgIGRhdGEtdWstc2xpZGVyLWl0ZW09XCJuZXh0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNaXNzaW9uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5jb25zdCBOYXYgPSAoeyBob21lcGFnZSwgY2F0ZWdvcmllcywgbGFuZ1N3aXRoZXMsIGxhbmcgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHJlbmRlckxvZ29MaW5rID0gKCkgPT4ge1xuICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZiYXJfX2xvZ29cIj5cbiAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2hvbWVwYWdlLmF0dHJpYnV0ZXMubG9nb30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke2xhbmd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZiYXJfX2xvZ29cIj5cbiAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2hvbWVwYWdlLmF0dHJpYnV0ZXMubG9nb30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb25zdCBjcmVhdGVMYW5nVXJsID0gKG5ld0xhbmcpID0+IHtcbiAgICBjb25zdCBwYXRoID0gcm91dGVyLnBhdGhuYW1lXG4gICAgY29uc3Qgc2x1ZyA9IHJvdXRlcj8ucXVlcnk/LnNsdWdcbiAgICBpZiAobGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICBpZiAoc2x1Zykge1xuICAgICAgICByZXR1cm4gYC8ke25ld0xhbmd9JHtwYXRoLnJlcGxhY2UoXCJbc2x1Z11cIiwgc2x1Zyl9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtuZXdMYW5nfSR7cGF0aH1gXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzbHVnKSB7XG4gICAgICAgIHJldHVybiBgLyR7cGF0aC5yZXBsYWNlKFwiW3NsdWddXCIsIHNsdWcpLnNwbGl0KFwiL1wiKS5zcGxpY2UoMikuam9pbihcIi9cIil9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtwYXRoLnNwbGl0KFwiL1wiKS5zcGxpY2UoMikuam9pbihcIi9cIil9YFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPVwidWstbmF2YmFyLWNvbnRhaW5lciB1ay1tYXJnaW4tYXV0byB1ay1jb250YWluZXItbGFyZ2UgdWstbmF2YmFyXCJcbiAgICAgICAgZGF0YS11ay1uYXZiYXJcbiAgICAgID5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1sZWZ0IG5hdmJhcl9fbGVmdFwiPlxuICAgICAgICAgIHtyZW5kZXJMb2dvTGluaygpfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2IG5hdmJhcl9fY2VudGVyXCI+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5hdHRyaWJ1dGVzLmlzSG9tZVBhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAobGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8jJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfS8jJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfS8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1yaWdodCBuYXZiYXJfX3JpZ2h0XCI+XG4gICAgICAgICAge2xhbmdTd2l0aGVzLm1hcCgoY3VycmVudExhbmcsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmcgPT09IGxhbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtIG5hdmJhcl9fbWVudS1pdGVtX2FjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nTGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2NyZWF0ZUxhbmdVcmwoY3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nKX1cbiAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmdMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIiwiaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5cbmNvbnN0IFBhcnRuZXJzID0gKHsgc2VjdGlvblBhcnRuZXIsIHBhcnRuZXJzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYXJ0bmVyc1wiIGlkPVwicGFydG5lcnNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lcnNfX2NvbnRlbnQgdWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFydG5lcnNfX3RpdGxlXCI+e3NlY3Rpb25QYXJ0bmVyLmF0dHJpYnV0ZXMudGl0bGV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1ncmlkIHVrLWdyaWQtbWVkaXVtXCI+XG4gICAgICAgICAge3BhcnRuZXJzLm1hcCgocGFydG5lciwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay13aWR0aC0xLTNcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3BhcnRuZXIuYXR0cmlidXRlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRuZXJzXG4iLCJpbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuL2ltYWdlXCJcblxuY29uc3QgU2Nyb2xsVG9wID0gKHsgcHJvamVjdHMgfSkgPT4ge1xuICBjb25zdCBzY3JvbGxUb3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gb25DbGljaz17c2Nyb2xsVG9wfSBjbGFzc05hbWU9XCJzY3JvbGwtdG9wXCI+XG4gICAgICA8TmV4dEltYWdlIGltYWdlPXtwcm9qZWN0cy5hdHRyaWJ1dGVzLmljb25OZXh0fSAvPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFRvcFxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vcGFnZXMvX2FwcFwiXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxuXG5jb25zdCBTZW8gPSAoeyBzZW8gfSkgPT4ge1xuICBjb25zdCB7IGRlZmF1bHRTZW8sIHNpdGVOYW1lIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpXG4gIGNvbnN0IHNlb1dpdGhEZWZhdWx0cyA9IHtcbiAgICAuLi5kZWZhdWx0U2VvLFxuICAgIC4uLnNlbyxcbiAgfVxuICBjb25zdCBmdWxsU2VvID0ge1xuICAgIC4uLnNlb1dpdGhEZWZhdWx0cyxcbiAgICAvLyBBZGQgdGl0bGUgc3VmZml4XG4gICAgbWV0YVRpdGxlOiBgJHtzZW9XaXRoRGVmYXVsdHMubWV0YVRpdGxlfSB8ICR7c2l0ZU5hbWV9YCxcbiAgICAvLyBHZXQgZnVsbCBpbWFnZSBVUkxcbiAgICBzaGFyZUltYWdlOiBnZXRTdHJhcGlNZWRpYShzZW9XaXRoRGVmYXVsdHMuc2hhcmVJbWFnZSksXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAge2Z1bGxTZW8ubWV0YVRpdGxlICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8dGl0bGU+e2Z1bGxTZW8ubWV0YVRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YVRpdGxlfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17ZnVsbFNlby5tZXRhVGl0bGV9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtmdWxsU2VvLm1ldGFEZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZnVsbFNlby5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZnVsbFNlby5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtmdWxsU2VvLnNoYXJlSW1hZ2UgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtmdWxsU2VvLnNoYXJlSW1hZ2V9IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtmdWxsU2VvLnNoYXJlSW1hZ2V9IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImltYWdlXCIgY29udGVudD17ZnVsbFNlby5zaGFyZUltYWdlfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7ZnVsbFNlby5hcnRpY2xlICYmIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJhcnRpY2xlXCIgLz59XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgIDwvSGVhZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZW9cbiIsImltcG9ydCBOYXYgZnJvbSBcIi4vbmF2XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxuXG5jb25zdCBXZWxjb21lID0gKHtcbiAgd2VsY29tZSxcbiAgaG9tZXBhZ2UsXG4gIGNhdGVnb3JpZXMsXG4gIHNlY3Rpb25Eb25hdGlvbixcbiAgbGFuZ1N3aXRoZXMsXG4gIGxhbmcsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid2VsY29tZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3dlbGNvbWUuYXR0cmlidXRlcy5iYWNrZ3JvdW5kfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8TmF2XG4gICAgICAgIGhvbWVwYWdlPXtob21lcGFnZX1cbiAgICAgICAgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc31cbiAgICAgICAgbGFuZ1N3aXRoZXM9e2xhbmdTd2l0aGVzfVxuICAgICAgICBsYW5nPXtsYW5nfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZV9fYmxvY2sgdWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwid2VsY29tZV9faGVhZGluZ1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndlbGNvbWVfX2hlYWRpbmdUeXBlXCI+XG4gICAgICAgICAgICB7d2VsY29tZS5hdHRyaWJ1dGVzLmhlYWRpbmdUeXBlfVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHt3ZWxjb21lLmF0dHJpYnV0ZXMuaGVhZGluZ1RpdGxlfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVfX2Rlc3JpcHRpb25cIj5cbiAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgc291cmNlPXt3ZWxjb21lLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gd2VsY29tZV9fYnV0dG9uXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17c2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS5kb25hdGlvbkxpbmt9PlxuICAgICAgICAgICAge3dlbGNvbWUuYXR0cmlidXRlcy5idXR0b259XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lXG4iLCJpbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuL2ltYWdlXCJcblxuY29uc3QgV2luID0gKHsgc2VjdGlvbldpbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid2luXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbl9fYmFja2dyb3VuZFwiPlxuICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtzZWN0aW9uV2luLmF0dHJpYnV0ZXMuYmFja2dyb3VuZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5fX2Jsb2NrXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3aW5fX2hlYWRpbmdcIj4ge3NlY3Rpb25XaW4uYXR0cmlidXRlcy50aXRsZX0gPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgV2luXG4iLCJpbXBvcnQgcXMgZnJvbSBcInFzXCJcblxuLyoqXG4gKiBHZXQgZnVsbCBTdHJhcGkgVVJMIGZyb20gcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUGF0aCBvZiB0aGUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBGdWxsIFN0cmFwaSBVUkxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaVVSTChwYXRoID0gXCJcIikge1xuICByZXR1cm4gYCR7XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIlxuICB9JHtwYXRofWBcbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpIEFQSSBlbmRwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIEFQSSByb3V0ZVxuICogQHBhcmFtIHtPYmplY3R9IHVybFBhcmFtc09iamVjdCBVUkwgcGFyYW1zIG9iamVjdCwgd2lsbCBiZSBzdHJpbmdpZmllZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBwYXNzZWQgdG8gZmV0Y2hcbiAqIEByZXR1cm5zIFBhcnNlZCBBUEkgY2FsbCByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBUEkocGF0aCwgdXJsUGFyYW1zT2JqZWN0ID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIC4uLm9wdGlvbnMsXG4gIH1cblxuICAvLyBCdWlsZCByZXF1ZXN0IFVSTFxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBgJHtnZXRTdHJhcGlVUkwoXG4gICAgYC9hcGkke3BhdGh9JHtxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogXCJcIn1gXG4gICl9YFxuXG4gIC8vIFRyaWdnZXIgQVBJIGNhbGxcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsLCBtZXJnZWRPcHRpb25zKVxuXG4gIC8vIEhhbmRsZSByZXNwb25zZVxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXJyb3Igb2NjdXJlZCBwbGVhc2UgdHJ5IGFnYWluYClcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgcmV0dXJuIGRhdGFcbn1cbiIsImltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuL2FwaVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlNZWRpYShtZWRpYSkge1xuICBjb25zdCB7IHVybCB9ID0gbWVkaWEuZGF0YS5hdHRyaWJ1dGVzXG4gIGNvbnN0IGltYWdlVXJsID0gdXJsLnN0YXJ0c1dpdGgoXCIvXCIpID8gZ2V0U3RyYXBpVVJMKHVybCkgOiB1cmxcbiAgcmV0dXJuIGltYWdlVXJsXG59XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PUltYWdlO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgX3RvQmFzZT1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjRcIik7dmFyIF9pbWFnZUNvbmZpZz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7O2dsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQ9dHJ1ZTt9Y29uc3QgVkFMSURfTE9BRElOR19WQUxVRVM9WydsYXp5JywnZWFnZXInLHVuZGVmaW5lZF07Y29uc3QgbG9hZGVycz1uZXcgTWFwKFtbJ2ltZ2l4JyxpbWdpeExvYWRlcl0sWydjbG91ZGluYXJ5JyxjbG91ZGluYXJ5TG9hZGVyXSxbJ2FrYW1haScsYWthbWFpTG9hZGVyXSxbJ2RlZmF1bHQnLGRlZmF1bHRMb2FkZXJdXSk7Y29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUz1bJ2ZpbGwnLCdmaXhlZCcsJ2ludHJpbnNpYycsJ3Jlc3BvbnNpdmUnLHVuZGVmaW5lZF07ZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYyl7cmV0dXJuIHNyYy5kZWZhdWx0IT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpe3JldHVybiBzcmMuc3JjIT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpe3JldHVybiB0eXBlb2Ygc3JjPT09J29iamVjdCcmJihpc1N0YXRpY1JlcXVpcmUoc3JjKXx8aXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7fWNvbnN0e2RldmljZVNpemVzOmNvbmZpZ0RldmljZVNpemVzLGltYWdlU2l6ZXM6Y29uZmlnSW1hZ2VTaXplcyxsb2FkZXI6Y29uZmlnTG9hZGVyLHBhdGg6Y29uZmlnUGF0aCxkb21haW5zOmNvbmZpZ0RvbWFpbnN9PXByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTfHxfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0Oy8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXM9Wy4uLmNvbmZpZ0RldmljZVNpemVzLC4uLmNvbmZpZ0ltYWdlU2l6ZXNdO2NvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsYik9PmEtYik7YWxsU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTtmdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKXtpZihzaXplcyYmKGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKSl7Ly8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbmNvbnN0IHZpZXdwb3J0V2lkdGhSZT0vKF58XFxzKSgxP1xcZD9cXGQpdncvZztjb25zdCBwZXJjZW50U2l6ZXM9W107Zm9yKGxldCBtYXRjaDttYXRjaD12aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7bWF0Y2gpe3BlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7fWlmKHBlcmNlbnRTaXplcy5sZW5ndGgpe2NvbnN0IHNtYWxsZXN0UmF0aW89TWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSowLjAxO3JldHVybnt3aWR0aHM6YWxsU2l6ZXMuZmlsdGVyKHM9PnM+PWNvbmZpZ0RldmljZVNpemVzWzBdKnNtYWxsZXN0UmF0aW8pLGtpbmQ6J3cnfTt9cmV0dXJue3dpZHRoczphbGxTaXplcyxraW5kOid3J307fWlmKHR5cGVvZiB3aWR0aCE9PSdudW1iZXInfHxsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJyl7cmV0dXJue3dpZHRoczpjb25maWdEZXZpY2VTaXplcyxraW5kOid3J307fWNvbnN0IHdpZHRocz1bLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4vLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbi8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4vLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4vLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG5bd2lkdGgsd2lkdGgqMi8qLCB3aWR0aCAqIDMqL10ubWFwKHc9PmFsbFNpemVzLmZpbmQocD0+cD49dyl8fGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aC0xXSkpXTtyZXR1cm57d2lkdGhzLGtpbmQ6J3gnfTt9ZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aCxxdWFsaXR5LHNpemVzLGxvYWRlcn0pe2lmKHVub3B0aW1pemVkKXtyZXR1cm57c3JjLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTt9Y29uc3R7d2lkdGhzLGtpbmR9PWdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpO2NvbnN0IGxhc3Q9d2lkdGhzLmxlbmd0aC0xO3JldHVybntzaXplczohc2l6ZXMmJmtpbmQ9PT0ndyc/JzEwMHZ3JzpzaXplcyxzcmNTZXQ6d2lkdGhzLm1hcCgodyxpKT0+YCR7bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3fSl9ICR7a2luZD09PSd3Jz93OmkrMX0ke2tpbmR9YCkuam9pbignLCAnKSwvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbi8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG5zcmM6bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3aWR0aHNbbGFzdF19KX07fWZ1bmN0aW9uIGdldEludCh4KXtpZih0eXBlb2YgeD09PSdudW1iZXInKXtyZXR1cm4geDt9aWYodHlwZW9mIHg9PT0nc3RyaW5nJyl7cmV0dXJuIHBhcnNlSW50KHgsMTApO31yZXR1cm4gdW5kZWZpbmVkO31mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpe2NvbnN0IGxvYWQ9bG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtpZihsb2FkKXtyZXR1cm4gbG9hZCgoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Jvb3Q6Y29uZmlnUGF0aH0sbG9hZGVyUHJvcHMpKTt9dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO30vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoaW1nLHBsYWNlaG9sZGVyKXtpZihwbGFjZWhvbGRlcj09PSdibHVyJyYmaW1nKXtjb25zdCBoYW5kbGVMb2FkPSgpPT57aWYoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Y29uc3QgcD0nZGVjb2RlJ2luIGltZz9pbWcuZGVjb2RlKCk6UHJvbWlzZS5yZXNvbHZlKCk7cC5jYXRjaCgoKT0+e30pLnRoZW4oKCk9PntpbWcuc3R5bGUuZmlsdGVyPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZFNpemU9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J25vbmUnO30pO319O2lmKGltZy5jb21wbGV0ZSl7Ly8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4vLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4vLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuaGFuZGxlTG9hZCgpO31lbHNle2ltZy5vbmxvYWQ9aGFuZGxlTG9hZDt9fX1mdW5jdGlvbiBJbWFnZShfcmVmKXtsZXR7c3JjLHNpemVzLHVub3B0aW1pemVkPWZhbHNlLHByaW9yaXR5PWZhbHNlLGxvYWRpbmcsY2xhc3NOYW1lLHF1YWxpdHksd2lkdGgsaGVpZ2h0LG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbixsb2FkZXI9ZGVmYXVsdEltYWdlTG9hZGVyLHBsYWNlaG9sZGVyPSdlbXB0eScsYmx1ckRhdGFVUkx9PV9yZWYsYWxsPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLFtcInNyY1wiLFwic2l6ZXNcIixcInVub3B0aW1pemVkXCIsXCJwcmlvcml0eVwiLFwibG9hZGluZ1wiLFwiY2xhc3NOYW1lXCIsXCJxdWFsaXR5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJvYmplY3RGaXRcIixcIm9iamVjdFBvc2l0aW9uXCIsXCJsb2FkZXJcIixcInBsYWNlaG9sZGVyXCIsXCJibHVyRGF0YVVSTFwiXSk7bGV0IHJlc3Q9YWxsO2xldCBsYXlvdXQ9c2l6ZXM/J3Jlc3BvbnNpdmUnOidpbnRyaW5zaWMnO2lmKCdsYXlvdXQnaW4gcmVzdCl7Ly8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbmlmKHJlc3QubGF5b3V0KWxheW91dD1yZXN0LmxheW91dDsvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG5kZWxldGUgcmVzdFsnbGF5b3V0J107fWxldCBzdGF0aWNTcmM9Jyc7aWYoaXNTdGF0aWNJbXBvcnQoc3JjKSl7Y29uc3Qgc3RhdGljSW1hZ2VEYXRhPWlzU3RhdGljUmVxdWlyZShzcmMpP3NyYy5kZWZhdWx0OnNyYztpZighc3RhdGljSW1hZ2VEYXRhLnNyYyl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO31ibHVyRGF0YVVSTD1ibHVyRGF0YVVSTHx8c3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO3N0YXRpY1NyYz1zdGF0aWNJbWFnZURhdGEuc3JjO2lmKCFsYXlvdXR8fGxheW91dCE9PSdmaWxsJyl7aGVpZ2h0PWhlaWdodHx8c3RhdGljSW1hZ2VEYXRhLmhlaWdodDt3aWR0aD13aWR0aHx8c3RhdGljSW1hZ2VEYXRhLndpZHRoO2lmKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0fHwhc3RhdGljSW1hZ2VEYXRhLndpZHRoKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO319fXNyYz10eXBlb2Ygc3JjPT09J3N0cmluZyc/c3JjOnN0YXRpY1NyYztjb25zdCB3aWR0aEludD1nZXRJbnQod2lkdGgpO2NvbnN0IGhlaWdodEludD1nZXRJbnQoaGVpZ2h0KTtjb25zdCBxdWFsaXR5SW50PWdldEludChxdWFsaXR5KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIXNyYyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3dpZHRoLGhlaWdodCxxdWFsaXR5fSl9YCk7fWlmKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZpc05hTih3aWR0aEludCl8fHR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4oaGVpZ2h0SW50KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7fWlmKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYocHJpb3JpdHkmJmxvYWRpbmc9PT0nbGF6eScpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTt9aWYocGxhY2Vob2xkZXI9PT0nYmx1cicpe2lmKGxheW91dCE9PSdmaWxsJyYmKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7ZGVjb2Rpbmc6XCJhc3luY1wiLHN0eWxlOmltZ1N0eWxlLGNsYXNzTmFtZTpjbGFzc05hbWV9KSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGltZ0F0dHJpYnV0ZXMse2RlY29kaW5nOlwiYXN5bmNcIixjbGFzc05hbWU6Y2xhc3NOYW1lLHJlZjplbGVtZW50PT57c2V0UmVmKGVsZW1lbnQpO3JlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQscGxhY2Vob2xkZXIpO30sc3R5bGU6aW1nU3R5bGV9KSkscHJpb3JpdHk/LyojX19QVVJFX18qLyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4vLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbi8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbi8vXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6J19fbmltZy0nK2ltZ0F0dHJpYnV0ZXMuc3JjK2ltZ0F0dHJpYnV0ZXMuc3JjU2V0K2ltZ0F0dHJpYnV0ZXMuc2l6ZXMscmVsOlwicHJlbG9hZFwiLGFzOlwiaW1hZ2VcIixocmVmOmltZ0F0dHJpYnV0ZXMuc3JjU2V0P3VuZGVmaW5lZDppbWdBdHRyaWJ1dGVzLnNyYy8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzcmNzZXQ6aW1nQXR0cmlidXRlcy5zcmNTZXQvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzaXplczppbWdBdHRyaWJ1dGVzLnNpemVzfSkpOm51bGwpO30vL0JVSUxUIElOIExPQURFUlNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpe3JldHVybiBzcmNbMF09PT0nLyc/c3JjLnNsaWNlKDEpOnNyYzt9ZnVuY3Rpb24gaW1naXhMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbmNvbnN0IHBhcmFtcz1bJ2F1dG89Zm9ybWF0JywnZml0PW1heCcsJ3c9Jyt3aWR0aF07bGV0IHBhcmFtc1N0cmluZz0nJztpZihxdWFsaXR5KXtwYXJhbXMucHVzaCgncT0nK3F1YWxpdHkpO31pZihwYXJhbXMubGVuZ3RoKXtwYXJhbXNTdHJpbmc9Jz8nK3BhcmFtcy5qb2luKCcmJyk7fXJldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gO31mdW5jdGlvbiBha2FtYWlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRofSl7cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDt9ZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG5jb25zdCBwYXJhbXM9WydmX2F1dG8nLCdjX2xpbWl0Jywnd18nK3dpZHRoLCdxXycrKHF1YWxpdHl8fCdhdXRvJyldO2xldCBwYXJhbXNTdHJpbmc9cGFyYW1zLmpvaW4oJywnKSsnLyc7cmV0dXJuYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7fWZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbWlzc2luZ1ZhbHVlcz1bXTsvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbmlmKCFzcmMpbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtpZighd2lkdGgpbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO2lmKG1pc3NpbmdWYWx1ZXMubGVuZ3RoPjApe3Rocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtzcmMsd2lkdGgscXVhbGl0eX0pfWApO31pZihzcmMuc3RhcnRzV2l0aCgnLy8nKSl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIXNyYy5zdGFydHNXaXRoKCcvJykmJmNvbmZpZ0RvbWFpbnMpe2xldCBwYXJzZWRTcmM7dHJ5e3BhcnNlZFNyYz1uZXcgVVJMKHNyYyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmArYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTt9fX1yZXR1cm5gJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eXx8NzV9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wcztleHBvcnRzLk5leHRXZWJWaXRhbHNNZXRyaWM9X3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7Q29tcG9uZW50LGN0eH0pe2NvbnN0IHBhZ2VQcm9wcz1hd2FpdCgwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsY3R4KTtyZXR1cm57cGFnZVByb3BzfTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50e3JlbmRlcigpe2NvbnN0e0NvbXBvbmVudCxwYWdlUHJvcHN9PXRoaXMucHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LHBhZ2VQcm9wcyk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIiwiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgXCIuLi9hc3NldHMvY3NzL3N0eWxlLmNzc1wiXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcblxuLy8gU3RvcmUgU3RyYXBpIEdsb2JhbCBvYmplY3QgaW4gY29udGV4dFxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBnbG9iYWwgfSA9IHBhZ2VQcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIGhyZWY9e2dldFN0cmFwaU1lZGlhKGdsb2JhbC5hdHRyaWJ1dGVzLmZhdmljb24pfVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2dsb2JhbC5hdHRyaWJ1dGVzfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59XG5cbi8vIGdldEluaXRpYWxQcm9wcyBkaXNhYmxlcyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiBmb3IgcGFnZXMgdGhhdCBkb24ndFxuLy8gaGF2ZSBnZXRTdGF0aWNQcm9wcy4gU28gYXJ0aWNsZSwgY2F0ZWdvcnkgYW5kIGhvbWUgcGFnZXMgc3RpbGwgZ2V0IFNTRy5cbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Rpc2N1c3Npb25zLzEwOTQ5XG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIC8vIENhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2BcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgLy8gRmV0Y2ggZ2xvYmFsIHNpdGUgc2V0dGluZ3MgZnJvbSBTdHJhcGlcbiAgY29uc3QgZ2xvYmFsUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvZ2xvYmFsXCIsIHtcbiAgICBwb3B1bGF0ZToge1xuICAgICAgZmF2aWNvbjogXCIqXCIsXG4gICAgICBkZWZhdWx0U2VvOiB7XG4gICAgICAgIHBvcHVsYXRlOiBcIipcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbiAgLy8gUGFzcyB0aGUgZGF0YSB0byBvdXIgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHBhZ2VQcm9wczogeyBnbG9iYWw6IGdsb2JhbFJlcy5kYXRhIH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vY29tcG9uZW50cy9zZW9cIlxuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvd2VsY29tZVwiXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWJvdXRcIlxuaW1wb3J0IE1pc3Npb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvbWlzc2lvblwiXG5pbXBvcnQgUGFydG5lcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFydG5lcnNcIlxuaW1wb3J0IERvbmF0aW9ucyBmcm9tIFwiLi4vY29tcG9uZW50cy9kb25hdGlvbnNcIlxuaW1wb3J0IFdpbiBmcm9tIFwiLi4vY29tcG9uZW50cy93aW5cIlxuaW1wb3J0IENvbnRhY3RzIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhY3RzXCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCJcbmltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9hcnRpY2xlc1wiXG5pbXBvcnQgU2Nyb2xsVG9wIGZyb20gXCIuLi9jb21wb25lbnRzL3Njcm9sbFRvcFwiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9saWIvYXBpXCJcblxuY29uc3QgSG9tZSA9IChcbiAgICAgIHsgIFxuICAgICAgICBsYW5nU3dpdGhlcyxcbiAgICAgICAgYWJvdXQsXG4gICAgICAgIGNhdGVnb3JpZXMsXG4gICAgICAgIGhvbWVwYWdlLFxuICAgICAgICB3ZWxjb21lLFxuICAgICAgICBzZWN0aW9uTWlzc2lvbixcbiAgICAgICAgbWlzc2lvbnMsXG4gICAgICAgIG1pc3Npb25TbGlkZXMsXG4gICAgICAgIHNlY3Rpb25QYXJ0bmVyLFxuICAgICAgICBwYXJ0bmVycyxcbiAgICAgICAgc2VjdGlvbldpbixcbiAgICAgICAgc2VjdGlvbkNvbnRhY3RzLFxuICAgICAgICBzZWN0aW9uRm9vdGVyLFxuICAgICAgICBzb2NpYWxzLFxuICAgICAgICBzZWN0aW9uRG9uYXRpb24sXG4gICAgICAgIGFydGljbGVzLFxuICAgICAgICBwcm9qZWN0cyxcbiAgICAgICAgbGFuZ1xuICAgICAgfVxuICApID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcGFnZT1cImhvbWUtcGFnZVwiPlxuICAgICAgPFNlbyBzZW89e2hvbWVwYWdlLmF0dHJpYnV0ZXMuc2VvfSAvPlxuICAgICAgPFdlbGNvbWUgd2VsY29tZT17d2VsY29tZX0gaG9tZXBhZ2U9e2hvbWVwYWdlfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBzZWN0aW9uRG9uYXRpb249e3NlY3Rpb25Eb25hdGlvbn0gbGFuZ1N3aXRoZXM9e2xhbmdTd2l0aGVzfSBsYW5nPXtsYW5nfS8+XG4gICAgICA8QWJvdXQgYWJvdXQ9e2Fib3V0fS8+XG4gICAgICA8TWlzc2lvbiBzZWN0aW9uTWlzc2lvbj17c2VjdGlvbk1pc3Npb259IG1pc3Npb25zPXttaXNzaW9uc30gbWlzc2lvblNsaWRlcz17bWlzc2lvblNsaWRlc30gbGFuZz17bGFuZ30gLz5cbiAgICAgIDxBcnRpY2xlcyBhcnRpY2xlcz17YXJ0aWNsZXN9IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IHByb2plY3RzPXtwcm9qZWN0c30gbWlzc2lvbnM9e21pc3Npb25zfSBsYW5nPXtsYW5nfS8+XG4gICAgICA8UGFydG5lcnMgc2VjdGlvblBhcnRuZXI9e3NlY3Rpb25QYXJ0bmVyfSBwYXJ0bmVycz17cGFydG5lcnN9Lz5cbiAgICAgIDxEb25hdGlvbnMgc2VjdGlvbkNvbnRhY3RzPXtzZWN0aW9uQ29udGFjdHN9IHNlY3Rpb25Eb25hdGlvbj17c2VjdGlvbkRvbmF0aW9ufSBsYW5nPXtsYW5nfS8+XG4gICAgICA8V2luIHNlY3Rpb25XaW49e3NlY3Rpb25XaW59Lz5cbiAgICAgIDxDb250YWN0cyBzZWN0aW9uQ29udGFjdHM9e3NlY3Rpb25Db250YWN0c30vPlxuICAgICAgPEZvb3RlciBzZWN0aW9uRm9vdGVyPXtzZWN0aW9uRm9vdGVyfSBzb2NpYWxzPXtzb2NpYWxzfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBsYW5nPXtsYW5nfS8+XG4gICAgICA8U2Nyb2xsVG9wIHByb2plY3RzPXtwcm9qZWN0c30vPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgbGFuZyA9IFwidWtcIlxuICAvLyBSdW4gQVBJIGNhbGxzIGluIHBhcmFsbGVsXG4gIGNvbnN0IFtcbiAgICAgIGFydGljbGVzUmVzLFxuICAgICAgc2VjdGlvblByb2plY3RSZXMsXG4gICAgICBzZWN0aW9uRG9uYXRpb25SZXMsXG4gICAgICBzZWN0aW9uU29jaWFsc1JlcyxcbiAgICAgIHNlY3Rpb25Gb290ZXJSZXMsXG4gICAgICBzZWN0aW9uQ29udGFjdHNSZXMsXG4gICAgICBzZWN0aW9uV2luUmVzLFxuICAgICAgc2VjdGlvblBhcnRuZXJSZXMsXG4gICAgICBwYXJ0bmVyc1JlcyxcbiAgICAgIHNlY3Rpb25NaXNzaW9uUmVzLFxuICAgICAgbWlzc2lvbnNSZXMsXG4gICAgICBtaXNzaW9uU2xpZGVzUmVzLFxuICAgICAgY2F0ZWdvcmllc1JlcyxcbiAgICAgIHdlbGNvbWVSZXMsXG4gICAgICBhYm91dFJlcyxcbiAgICAgIGxhbmdTd2l0Y2hlc1JlcyxcbiAgICAgIGhvbWVwYWdlUmVzLFxuICAgIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBmZXRjaEFQSShcIi9hcnRpY2xlc1wiLCB7ICBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICAgIGZldGNoQVBJKFwiL3NlY3Rpb24tcHJvamVjdFwiLCB7IGxvY2FsZTogbGFuZywgIHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICAgIGZldGNoQVBJKFwiL3NlY3Rpb24tZG9uYXRpb25cIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICAgIGZldGNoQVBJKFwiL3NvY2lhbHNcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICAgIGZldGNoQVBJKFwiL3NlY3Rpb24tZm9vdGVyXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zZWN0aW9uLWNvbnRhY3RcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICAgIGZldGNoQVBJKFwiL3NlY3Rpb24td2luXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zZWN0aW9uLXBhcnRuZXJcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICAgIGZldGNoQVBJKFwiL3BhcnRuZXJzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvc2VjdGlvbi1taXNzaW9uXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9taXNzaW9uc1wiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IHtcbiAgICAgICAgdGl0bGU6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgICBpbWFnZTogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIH0gfSksXG4gICAgICBmZXRjaEFQSShcIi9taXNzaW9ucy1zbGlkZXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zZWN0aW9uLXdlbGNvbWVcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICAgIGZldGNoQVBJKFwiL3NlY3Rpb24tYWJvdXRcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICAgIGZldGNoQVBJKFwiL2xhbmctc3dpdGNoZXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9ob21lcGFnZVwiLCB7XG4gICAgICAgIGxvY2FsZTogbGFuZyxcbiAgICAgICAgcG9wdWxhdGU6IHtcbiAgICAgICAgICBzZW86IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgICAgbG9nbzogeyBwb3B1bGF0ZTogXCIqXCJ9XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFydGljbGVzOiBhcnRpY2xlc1Jlcy5kYXRhLFxuICAgICAgcHJvamVjdHM6IHNlY3Rpb25Qcm9qZWN0UmVzLmRhdGEsXG4gICAgICBzZWN0aW9uRG9uYXRpb246IHNlY3Rpb25Eb25hdGlvblJlcy5kYXRhLFxuICAgICAgc29jaWFsczogc2VjdGlvblNvY2lhbHNSZXMuZGF0YSxcbiAgICAgIHNlY3Rpb25Gb290ZXI6IHNlY3Rpb25Gb290ZXJSZXMuZGF0YSxcbiAgICAgIHNlY3Rpb25Db250YWN0czogc2VjdGlvbkNvbnRhY3RzUmVzLmRhdGEsXG4gICAgICBzZWN0aW9uV2luOiBzZWN0aW9uV2luUmVzLmRhdGEsXG4gICAgICBzZWN0aW9uUGFydG5lcjogc2VjdGlvblBhcnRuZXJSZXMuZGF0YSxcbiAgICAgIHBhcnRuZXJzOiBwYXJ0bmVyc1Jlcy5kYXRhLFxuICAgICAgc2VjdGlvbk1pc3Npb246IHNlY3Rpb25NaXNzaW9uUmVzLmRhdGEsXG4gICAgICBtaXNzaW9uczogbWlzc2lvbnNSZXMuZGF0YSxcbiAgICAgIG1pc3Npb25TbGlkZXM6IG1pc3Npb25TbGlkZXNSZXMuZGF0YSxcbiAgICAgIGFib3V0OiBhYm91dFJlcy5kYXRhLFxuICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcmllc1Jlcy5kYXRhLFxuICAgICAgbGFuZ1N3aXRoZXM6IGxhbmdTd2l0Y2hlc1Jlcy5kYXRhLFxuICAgICAgaG9tZXBhZ2U6IGhvbWVwYWdlUmVzLmRhdGEsXG4gICAgICB3ZWxjb21lOiB3ZWxjb21lUmVzLmRhdGEsXG4gICAgICBsYW5nOiBsYW5nXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXJrZG93blwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9