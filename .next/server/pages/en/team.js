(function() {
var exports = {};
exports.id = "pages/en/team";
exports.ids = ["pages/en/team"];
exports.modules = {

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

/***/ "./components/team.js":
/*!****************************!*\
  !*** ./components/team.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./components/image.js");

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\team.js";



const Team = ({
  sectionTeam,
  team
}) => {
  const {
    0: selectedItem,
    1: setSelectedItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("team");

  const handleItemSelection = type => {
    setSelectedItem(type);
  };

  const renderContent = () => {
    if (selectedItem === "team") {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "team-members uk-grid uk-child-width-1-4",
        children: team.map((teamMember, i) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "team-member",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "team-member__wrapper",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "team-member__image",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                  image: teamMember.attributes.image
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "team-member__title",
                children: teamMember.attributes.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "team-member__description",
                children: teamMember.attributes.desc
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 17
            }, undefined)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "team-structure",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "team-structure__desc",
          children: sectionTeam.attributes.structureDesc
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "team-structure__scheme",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
            image: sectionTeam.attributes.structureSchemeImg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "team",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "team__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "team-header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          onClick: handleItemSelection.bind(undefined, "team"),
          className: `team-header__heading ${selectedItem === "team" ? "team-header__heading_active" : null}`,
          children: sectionTeam.attributes.titleTeam
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          onClick: handleItemSelection.bind(undefined, "structure"),
          className: `team-header__heading ${selectedItem === "structure" ? "team-header__heading_active" : null}`,
          children: sectionTeam.attributes.titleStructure
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), renderContent()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Team);

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

/***/ "./pages/en/team/index.js":
/*!********************************!*\
  !*** ./pages/en/team/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/api */ "./lib/api.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/nav */ "./components/nav.js");
/* harmony import */ var _components_team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/team */ "./components/team.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/footer */ "./components/footer.js");

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\pages\\en\\team\\index.js";

/* eslint-disable prettier/prettier */






const TeamPage = ({
  categories,
  homepage,
  sectionFooter,
  sectionTeam,
  team,
  socials,
  langSwithes,
  lang
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    page: "team-page",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_3__.default, {
      homepage: homepage,
      categories: categories,
      langSwithes: langSwithes,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_team__WEBPACK_IMPORTED_MODULE_4__.default, {
      sectionTeam: sectionTeam,
      team: team
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_5__.default, {
      sectionFooter: sectionFooter,
      socials: socials,
      categories: categories,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

async function getStaticProps() {
  const lang = "en";
  const homepageRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)("/homepage", {
    locale: lang,
    populate: {
      seo: {
        populate: "*"
      },
      logo: {
        populate: "*"
      }
    }
  });
  const categoriesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)("/categories", {
    locale: lang,
    populate: "*"
  });
  const teamsRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)("/teams", {
    locale: lang,
    populate: "*"
  });
  const sectionTeamRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)("/section-team", {
    locale: lang,
    populate: "*"
  });
  const footerRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)("/section-footer", {
    locale: lang,
    populate: "*"
  });
  const socialsRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)("/socials", {
    locale: lang,
    populate: "*"
  });
  const langSwitchesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.fetchAPI)("/lang-switches", {
    populate: "*"
  });
  return {
    props: {
      categories: categoriesRes.data,
      homepage: homepageRes.data,
      team: teamsRes.data,
      sectionTeam: sectionTeamRes.data,
      sectionFooter: footerRes.data,
      socials: socialsRes.data,
      langSwithes: langSwitchesRes.data,
      lang: lang
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (TeamPage);

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

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/en/team/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2ltYWdlLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvbmF2LmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2NvbXBvbmVudHMvdGVhbS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9saWIvYXBpLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2xpYi9tZWRpYS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vcGFnZXMvZW4vdGVhbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInFzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL215LW5leHQtYmxvZy9pZ25vcmVkfEM6XFxVc2Vyc1xcc3Rhc2tcXHdvcmtcXHJlYm9ybi11a3JhaW5lXFxmcm9udGVuZFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkZvb3RlciIsInNlY3Rpb25Gb290ZXIiLCJzb2NpYWxzIiwiY2F0ZWdvcmllcyIsImxhbmciLCJtYXAiLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJpc0hvbWVQYWdlIiwic2x1ZyIsIm5hbWUiLCJpZCIsInNvY2lhbCIsImxpbmsiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJJbWFnZSIsImltYWdlIiwic3R5bGUiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJ3aWR0aCIsImhlaWdodCIsImRhdGEiLCJnZXRTdHJhcGlNZWRpYSIsIkxheW91dCIsImNoaWxkcmVuIiwicGFnZSIsIk5hdiIsImhvbWVwYWdlIiwibGFuZ1N3aXRoZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZW5kZXJMb2dvTGluayIsImxvZ28iLCJjcmVhdGVMYW5nVXJsIiwibmV3TGFuZyIsInBhdGgiLCJwYXRobmFtZSIsInF1ZXJ5IiwicmVwbGFjZSIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsImN1cnJlbnRMYW5nIiwiaSIsImxhbmdMYWJlbCIsIlRlYW0iLCJzZWN0aW9uVGVhbSIsInRlYW0iLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJ1c2VTdGF0ZSIsImhhbmRsZUl0ZW1TZWxlY3Rpb24iLCJ0eXBlIiwicmVuZGVyQ29udGVudCIsInRlYW1NZW1iZXIiLCJkZXNjIiwic3RydWN0dXJlRGVzYyIsInN0cnVjdHVyZVNjaGVtZUltZyIsImJpbmQiLCJ0aXRsZVRlYW0iLCJ0aXRsZVN0cnVjdHVyZSIsImdldFN0cmFwaVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCIsImZldGNoQVBJIiwidXJsUGFyYW1zT2JqZWN0Iiwib3B0aW9ucyIsIm1lcmdlZE9wdGlvbnMiLCJoZWFkZXJzIiwicXVlcnlTdHJpbmciLCJxcyIsInJlcXVlc3RVcmwiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwiRXJyb3IiLCJqc29uIiwibWVkaWEiLCJpbWFnZVVybCIsInN0YXJ0c1dpdGgiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJkZWZhdWx0IiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJyZW1vdmVQbGFjZWhvbGRlciIsImltZyIsInBsYWNlaG9sZGVyIiwiaGFuZGxlTG9hZCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJjbGFzc05hbWUiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwiaXNMYXp5Iiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJvdmVyZmxvdyIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiYWx0Iiwicm9sZSIsInRvQmFzZTY0IiwiT2JqZWN0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWYiLCJlbGVtZW50Iiwia2V5IiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZnV0dXJlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidmFsdWUiLCJoYXNQcmVmZXRjaCIsImRvY3VtZW50Iiwid2luZG93IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNvbWUiLCJ0b0xvd2VyQ2FzZSIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJfcGF0aG5hbWUiLCJfcXVlcnkiLCJfYXMiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiaXNSZWFkeSIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiZ3NzcCIsImdpcCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwiYXV0aCIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiVGVhbVBhZ2UiLCJnZXRTdGF0aWNQcm9wcyIsImhvbWVwYWdlUmVzIiwicG9wdWxhdGUiLCJzZW8iLCJjYXRlZ29yaWVzUmVzIiwidGVhbXNSZXMiLCJzZWN0aW9uVGVhbVJlcyIsImZvb3RlclJlcyIsInNvY2lhbHNSZXMiLCJsYW5nU3dpdGNoZXNSZXMiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDLGVBQUY7QUFBaUJDLFNBQWpCO0FBQTBCQyxZQUExQjtBQUFzQ0M7QUFBdEMsQ0FBRCxLQUFrRDtBQUMvRCxzQkFDRTtBQUFTLGFBQVMsRUFBQyxRQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGlEQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLDJCQUFkO0FBQUEsa0JBQ0dELFVBQVUsQ0FBQ0UsR0FBWCxDQUFnQkMsUUFBRCxJQUFjO0FBQzVCLGNBQUlBLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkMsVUFBeEIsRUFBb0M7QUFDbEMsZ0JBQUlKLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLGtDQUNFO0FBQUkseUJBQVMsRUFBQyx5QkFBZDtBQUFBLHVDQUNFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBRyxLQUFJRSxRQUFRLENBQUNDLFVBQVQsQ0FBb0JFLElBQUssRUFBMUM7QUFBNkMsMEJBQVEsTUFBckQ7QUFBQSx5Q0FDRTtBQUFHLDZCQUFTLEVBQUMsdUNBQWI7QUFBQSw4QkFDR0gsUUFBUSxDQUFDQyxVQUFULENBQW9CRztBQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtB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RDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvZW4vdGVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmNvbnN0IEZvb3RlciA9ICh7IHNlY3Rpb25Gb290ZXIsIHNvY2lhbHMsIGNhdGVnb3JpZXMsIGxhbmcgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2NvbnRlbnQgdWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyX19uYXZpZ2F0aW9uLWZvb3RlclwiPlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeS5hdHRyaWJ1dGVzLmlzSG9tZVBhZ2UpIHtcbiAgICAgICAgICAgICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1mb290ZXJfX2l0ZW1cIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8jJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZpZ2F0aW9uLWZvb3Rlcl9fbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1mb290ZXJfX2l0ZW1cIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgLyR7bGFuZ30vIyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXQgbmF2aWdhdGlvbi1mb290ZXJfX2xpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1mb290ZXJfX2l0ZW1cIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmlnYXRpb24tZm9vdGVyX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWZvb3Rlcl9faXRlbVwiIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfS8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmlnYXRpb24tZm9vdGVyX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFsLWZvb3RlclwiPlxuICAgICAgICAgIHtzb2NpYWxzLm1hcCgoc29jaWFsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic29jaWFsLWZvb3Rlcl9faXRlbVwiIGtleT17c29jaWFsLmlkfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzb2NpYWwuYXR0cmlidXRlcy5saW5rfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1mb290ZXJfX2ljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtzb2NpYWwuYXR0cmlidXRlcy5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvb3Rlcl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICB7c2VjdGlvbkZvb3Rlci5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iLCJpbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5cbmNvbnN0IEltYWdlID0gKHsgaW1hZ2UsIHN0eWxlIH0pID0+IHtcbiAgY29uc3QgeyB1cmwsIGFsdGVybmF0aXZlVGV4dCwgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2UuZGF0YS5hdHRyaWJ1dGVzXG5cbiAgcmV0dXJuIChcbiAgICA8TmV4dEltYWdlXG4gICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgIHdpZHRoPXt3aWR0aCB8fCBcIjEwMCVcIn1cbiAgICAgIGhlaWdodD17aGVpZ2h0IHx8IFwiMTAwJVwifVxuICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICBzcmM9e2dldFN0cmFwaU1lZGlhKGltYWdlKX1cbiAgICAgIGFsdD17YWx0ZXJuYXRpdmVUZXh0IHx8IFwiXCJ9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVxuIiwiY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHBhZ2UgfSkgPT4gPGRpdiBjbGFzc05hbWU9e3BhZ2V9PntjaGlsZHJlbn08L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5jb25zdCBOYXYgPSAoeyBob21lcGFnZSwgY2F0ZWdvcmllcywgbGFuZ1N3aXRoZXMsIGxhbmcgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHJlbmRlckxvZ29MaW5rID0gKCkgPT4ge1xuICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZiYXJfX2xvZ29cIj5cbiAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2hvbWVwYWdlLmF0dHJpYnV0ZXMubG9nb30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke2xhbmd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZiYXJfX2xvZ29cIj5cbiAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2hvbWVwYWdlLmF0dHJpYnV0ZXMubG9nb30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb25zdCBjcmVhdGVMYW5nVXJsID0gKG5ld0xhbmcpID0+IHtcbiAgICBjb25zdCBwYXRoID0gcm91dGVyLnBhdGhuYW1lXG4gICAgY29uc3Qgc2x1ZyA9IHJvdXRlcj8ucXVlcnk/LnNsdWdcbiAgICBpZiAobGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICBpZiAoc2x1Zykge1xuICAgICAgICByZXR1cm4gYC8ke25ld0xhbmd9JHtwYXRoLnJlcGxhY2UoXCJbc2x1Z11cIiwgc2x1Zyl9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtuZXdMYW5nfSR7cGF0aH1gXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzbHVnKSB7XG4gICAgICAgIHJldHVybiBgLyR7cGF0aC5yZXBsYWNlKFwiW3NsdWddXCIsIHNsdWcpLnNwbGl0KFwiL1wiKS5zcGxpY2UoMikuam9pbihcIi9cIil9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtwYXRoLnNwbGl0KFwiL1wiKS5zcGxpY2UoMikuam9pbihcIi9cIil9YFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPVwidWstbmF2YmFyLWNvbnRhaW5lciB1ay1tYXJnaW4tYXV0byB1ay1jb250YWluZXItbGFyZ2UgdWstbmF2YmFyXCJcbiAgICAgICAgZGF0YS11ay1uYXZiYXJcbiAgICAgID5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1sZWZ0IG5hdmJhcl9fbGVmdFwiPlxuICAgICAgICAgIHtyZW5kZXJMb2dvTGluaygpfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2IG5hdmJhcl9fY2VudGVyXCI+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5hdHRyaWJ1dGVzLmlzSG9tZVBhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAobGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8jJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfS8jJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfS8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1yaWdodCBuYXZiYXJfX3JpZ2h0XCI+XG4gICAgICAgICAge2xhbmdTd2l0aGVzLm1hcCgoY3VycmVudExhbmcsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmcgPT09IGxhbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtIG5hdmJhcl9fbWVudS1pdGVtX2FjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nTGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2NyZWF0ZUxhbmdVcmwoY3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nKX1cbiAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmdMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5cbmNvbnN0IFRlYW0gPSAoeyBzZWN0aW9uVGVhbSwgdGVhbSB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSB1c2VTdGF0ZShcInRlYW1cIilcblxuICBjb25zdCBoYW5kbGVJdGVtU2VsZWN0aW9uID0gKHR5cGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZEl0ZW0odHlwZSlcbiAgfVxuXG4gIGNvbnN0IHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkSXRlbSA9PT0gXCJ0ZWFtXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXJzIHVrLWdyaWQgdWstY2hpbGQtd2lkdGgtMS00XCI+XG4gICAgICAgICAge3RlYW0ubWFwKCh0ZWFtTWVtYmVyLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyX193cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyX19pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXt0ZWFtTWVtYmVyLmF0dHJpYnV0ZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlcl9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3RlYW1NZW1iZXIuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICB7dGVhbU1lbWJlci5hdHRyaWJ1dGVzLmRlc2N9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLXN0cnVjdHVyZVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlYW0tc3RydWN0dXJlX19kZXNjXCI+XG4gICAgICAgICAgICB7c2VjdGlvblRlYW0uYXR0cmlidXRlcy5zdHJ1Y3R1cmVEZXNjfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tc3RydWN0dXJlX19zY2hlbWVcIj5cbiAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3NlY3Rpb25UZWFtLmF0dHJpYnV0ZXMuc3RydWN0dXJlU2NoZW1lSW1nfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRlYW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbV9fY29udGVudCB1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1oZWFkZXJcIj5cbiAgICAgICAgICA8aDJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUl0ZW1TZWxlY3Rpb24uYmluZCh0aGlzLCBcInRlYW1cIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZWFtLWhlYWRlcl9faGVhZGluZyAke1xuICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPT09IFwidGVhbVwiID8gXCJ0ZWFtLWhlYWRlcl9faGVhZGluZ19hY3RpdmVcIiA6IG51bGxcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWN0aW9uVGVhbS5hdHRyaWJ1dGVzLnRpdGxlVGVhbX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxoMlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSXRlbVNlbGVjdGlvbi5iaW5kKHRoaXMsIFwic3RydWN0dXJlXCIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGVhbS1oZWFkZXJfX2hlYWRpbmcgJHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID09PSBcInN0cnVjdHVyZVwiXG4gICAgICAgICAgICAgICAgPyBcInRlYW0taGVhZGVyX19oZWFkaW5nX2FjdGl2ZVwiXG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VjdGlvblRlYW0uYXR0cmlidXRlcy50aXRsZVN0cnVjdHVyZX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3JlbmRlckNvbnRlbnQoKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZWFtXG4iLCJpbXBvcnQgcXMgZnJvbSBcInFzXCJcblxuLyoqXG4gKiBHZXQgZnVsbCBTdHJhcGkgVVJMIGZyb20gcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUGF0aCBvZiB0aGUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBGdWxsIFN0cmFwaSBVUkxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaVVSTChwYXRoID0gXCJcIikge1xuICByZXR1cm4gYCR7XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIlxuICB9JHtwYXRofWBcbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpIEFQSSBlbmRwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIEFQSSByb3V0ZVxuICogQHBhcmFtIHtPYmplY3R9IHVybFBhcmFtc09iamVjdCBVUkwgcGFyYW1zIG9iamVjdCwgd2lsbCBiZSBzdHJpbmdpZmllZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBwYXNzZWQgdG8gZmV0Y2hcbiAqIEByZXR1cm5zIFBhcnNlZCBBUEkgY2FsbCByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBUEkocGF0aCwgdXJsUGFyYW1zT2JqZWN0ID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIC4uLm9wdGlvbnMsXG4gIH1cblxuICAvLyBCdWlsZCByZXF1ZXN0IFVSTFxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBgJHtnZXRTdHJhcGlVUkwoXG4gICAgYC9hcGkke3BhdGh9JHtxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogXCJcIn1gXG4gICl9YFxuXG4gIC8vIFRyaWdnZXIgQVBJIGNhbGxcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsLCBtZXJnZWRPcHRpb25zKVxuXG4gIC8vIEhhbmRsZSByZXNwb25zZVxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXJyb3Igb2NjdXJlZCBwbGVhc2UgdHJ5IGFnYWluYClcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgcmV0dXJuIGRhdGFcbn1cbiIsImltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuL2FwaVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlNZWRpYShtZWRpYSkge1xuICBjb25zdCB7IHVybCB9ID0gbWVkaWEuZGF0YS5hdHRyaWJ1dGVzXG4gIGNvbnN0IGltYWdlVXJsID0gdXJsLnN0YXJ0c1dpdGgoXCIvXCIpID8gZ2V0U3RyYXBpVVJMKHVybCkgOiB1cmxcbiAgcmV0dXJuIGltYWdlVXJsXG59XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PUltYWdlO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgX3RvQmFzZT1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjRcIik7dmFyIF9pbWFnZUNvbmZpZz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7O2dsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQ9dHJ1ZTt9Y29uc3QgVkFMSURfTE9BRElOR19WQUxVRVM9WydsYXp5JywnZWFnZXInLHVuZGVmaW5lZF07Y29uc3QgbG9hZGVycz1uZXcgTWFwKFtbJ2ltZ2l4JyxpbWdpeExvYWRlcl0sWydjbG91ZGluYXJ5JyxjbG91ZGluYXJ5TG9hZGVyXSxbJ2FrYW1haScsYWthbWFpTG9hZGVyXSxbJ2RlZmF1bHQnLGRlZmF1bHRMb2FkZXJdXSk7Y29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUz1bJ2ZpbGwnLCdmaXhlZCcsJ2ludHJpbnNpYycsJ3Jlc3BvbnNpdmUnLHVuZGVmaW5lZF07ZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYyl7cmV0dXJuIHNyYy5kZWZhdWx0IT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpe3JldHVybiBzcmMuc3JjIT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpe3JldHVybiB0eXBlb2Ygc3JjPT09J29iamVjdCcmJihpc1N0YXRpY1JlcXVpcmUoc3JjKXx8aXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7fWNvbnN0e2RldmljZVNpemVzOmNvbmZpZ0RldmljZVNpemVzLGltYWdlU2l6ZXM6Y29uZmlnSW1hZ2VTaXplcyxsb2FkZXI6Y29uZmlnTG9hZGVyLHBhdGg6Y29uZmlnUGF0aCxkb21haW5zOmNvbmZpZ0RvbWFpbnN9PXByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTfHxfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0Oy8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXM9Wy4uLmNvbmZpZ0RldmljZVNpemVzLC4uLmNvbmZpZ0ltYWdlU2l6ZXNdO2NvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsYik9PmEtYik7YWxsU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTtmdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKXtpZihzaXplcyYmKGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKSl7Ly8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbmNvbnN0IHZpZXdwb3J0V2lkdGhSZT0vKF58XFxzKSgxP1xcZD9cXGQpdncvZztjb25zdCBwZXJjZW50U2l6ZXM9W107Zm9yKGxldCBtYXRjaDttYXRjaD12aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7bWF0Y2gpe3BlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7fWlmKHBlcmNlbnRTaXplcy5sZW5ndGgpe2NvbnN0IHNtYWxsZXN0UmF0aW89TWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSowLjAxO3JldHVybnt3aWR0aHM6YWxsU2l6ZXMuZmlsdGVyKHM9PnM+PWNvbmZpZ0RldmljZVNpemVzWzBdKnNtYWxsZXN0UmF0aW8pLGtpbmQ6J3cnfTt9cmV0dXJue3dpZHRoczphbGxTaXplcyxraW5kOid3J307fWlmKHR5cGVvZiB3aWR0aCE9PSdudW1iZXInfHxsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJyl7cmV0dXJue3dpZHRoczpjb25maWdEZXZpY2VTaXplcyxraW5kOid3J307fWNvbnN0IHdpZHRocz1bLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4vLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbi8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4vLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4vLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG5bd2lkdGgsd2lkdGgqMi8qLCB3aWR0aCAqIDMqL10ubWFwKHc9PmFsbFNpemVzLmZpbmQocD0+cD49dyl8fGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aC0xXSkpXTtyZXR1cm57d2lkdGhzLGtpbmQ6J3gnfTt9ZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aCxxdWFsaXR5LHNpemVzLGxvYWRlcn0pe2lmKHVub3B0aW1pemVkKXtyZXR1cm57c3JjLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTt9Y29uc3R7d2lkdGhzLGtpbmR9PWdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpO2NvbnN0IGxhc3Q9d2lkdGhzLmxlbmd0aC0xO3JldHVybntzaXplczohc2l6ZXMmJmtpbmQ9PT0ndyc/JzEwMHZ3JzpzaXplcyxzcmNTZXQ6d2lkdGhzLm1hcCgodyxpKT0+YCR7bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3fSl9ICR7a2luZD09PSd3Jz93OmkrMX0ke2tpbmR9YCkuam9pbignLCAnKSwvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbi8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG5zcmM6bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3aWR0aHNbbGFzdF19KX07fWZ1bmN0aW9uIGdldEludCh4KXtpZih0eXBlb2YgeD09PSdudW1iZXInKXtyZXR1cm4geDt9aWYodHlwZW9mIHg9PT0nc3RyaW5nJyl7cmV0dXJuIHBhcnNlSW50KHgsMTApO31yZXR1cm4gdW5kZWZpbmVkO31mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpe2NvbnN0IGxvYWQ9bG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtpZihsb2FkKXtyZXR1cm4gbG9hZCgoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Jvb3Q6Y29uZmlnUGF0aH0sbG9hZGVyUHJvcHMpKTt9dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO30vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoaW1nLHBsYWNlaG9sZGVyKXtpZihwbGFjZWhvbGRlcj09PSdibHVyJyYmaW1nKXtjb25zdCBoYW5kbGVMb2FkPSgpPT57aWYoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Y29uc3QgcD0nZGVjb2RlJ2luIGltZz9pbWcuZGVjb2RlKCk6UHJvbWlzZS5yZXNvbHZlKCk7cC5jYXRjaCgoKT0+e30pLnRoZW4oKCk9PntpbWcuc3R5bGUuZmlsdGVyPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZFNpemU9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J25vbmUnO30pO319O2lmKGltZy5jb21wbGV0ZSl7Ly8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4vLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4vLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuaGFuZGxlTG9hZCgpO31lbHNle2ltZy5vbmxvYWQ9aGFuZGxlTG9hZDt9fX1mdW5jdGlvbiBJbWFnZShfcmVmKXtsZXR7c3JjLHNpemVzLHVub3B0aW1pemVkPWZhbHNlLHByaW9yaXR5PWZhbHNlLGxvYWRpbmcsY2xhc3NOYW1lLHF1YWxpdHksd2lkdGgsaGVpZ2h0LG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbixsb2FkZXI9ZGVmYXVsdEltYWdlTG9hZGVyLHBsYWNlaG9sZGVyPSdlbXB0eScsYmx1ckRhdGFVUkx9PV9yZWYsYWxsPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLFtcInNyY1wiLFwic2l6ZXNcIixcInVub3B0aW1pemVkXCIsXCJwcmlvcml0eVwiLFwibG9hZGluZ1wiLFwiY2xhc3NOYW1lXCIsXCJxdWFsaXR5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJvYmplY3RGaXRcIixcIm9iamVjdFBvc2l0aW9uXCIsXCJsb2FkZXJcIixcInBsYWNlaG9sZGVyXCIsXCJibHVyRGF0YVVSTFwiXSk7bGV0IHJlc3Q9YWxsO2xldCBsYXlvdXQ9c2l6ZXM/J3Jlc3BvbnNpdmUnOidpbnRyaW5zaWMnO2lmKCdsYXlvdXQnaW4gcmVzdCl7Ly8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbmlmKHJlc3QubGF5b3V0KWxheW91dD1yZXN0LmxheW91dDsvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG5kZWxldGUgcmVzdFsnbGF5b3V0J107fWxldCBzdGF0aWNTcmM9Jyc7aWYoaXNTdGF0aWNJbXBvcnQoc3JjKSl7Y29uc3Qgc3RhdGljSW1hZ2VEYXRhPWlzU3RhdGljUmVxdWlyZShzcmMpP3NyYy5kZWZhdWx0OnNyYztpZighc3RhdGljSW1hZ2VEYXRhLnNyYyl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO31ibHVyRGF0YVVSTD1ibHVyRGF0YVVSTHx8c3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO3N0YXRpY1NyYz1zdGF0aWNJbWFnZURhdGEuc3JjO2lmKCFsYXlvdXR8fGxheW91dCE9PSdmaWxsJyl7aGVpZ2h0PWhlaWdodHx8c3RhdGljSW1hZ2VEYXRhLmhlaWdodDt3aWR0aD13aWR0aHx8c3RhdGljSW1hZ2VEYXRhLndpZHRoO2lmKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0fHwhc3RhdGljSW1hZ2VEYXRhLndpZHRoKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO319fXNyYz10eXBlb2Ygc3JjPT09J3N0cmluZyc/c3JjOnN0YXRpY1NyYztjb25zdCB3aWR0aEludD1nZXRJbnQod2lkdGgpO2NvbnN0IGhlaWdodEludD1nZXRJbnQoaGVpZ2h0KTtjb25zdCBxdWFsaXR5SW50PWdldEludChxdWFsaXR5KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIXNyYyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3dpZHRoLGhlaWdodCxxdWFsaXR5fSl9YCk7fWlmKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZpc05hTih3aWR0aEludCl8fHR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4oaGVpZ2h0SW50KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7fWlmKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYocHJpb3JpdHkmJmxvYWRpbmc9PT0nbGF6eScpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTt9aWYocGxhY2Vob2xkZXI9PT0nYmx1cicpe2lmKGxheW91dCE9PSdmaWxsJyYmKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7ZGVjb2Rpbmc6XCJhc3luY1wiLHN0eWxlOmltZ1N0eWxlLGNsYXNzTmFtZTpjbGFzc05hbWV9KSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGltZ0F0dHJpYnV0ZXMse2RlY29kaW5nOlwiYXN5bmNcIixjbGFzc05hbWU6Y2xhc3NOYW1lLHJlZjplbGVtZW50PT57c2V0UmVmKGVsZW1lbnQpO3JlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQscGxhY2Vob2xkZXIpO30sc3R5bGU6aW1nU3R5bGV9KSkscHJpb3JpdHk/LyojX19QVVJFX18qLyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4vLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbi8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbi8vXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6J19fbmltZy0nK2ltZ0F0dHJpYnV0ZXMuc3JjK2ltZ0F0dHJpYnV0ZXMuc3JjU2V0K2ltZ0F0dHJpYnV0ZXMuc2l6ZXMscmVsOlwicHJlbG9hZFwiLGFzOlwiaW1hZ2VcIixocmVmOmltZ0F0dHJpYnV0ZXMuc3JjU2V0P3VuZGVmaW5lZDppbWdBdHRyaWJ1dGVzLnNyYy8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzcmNzZXQ6aW1nQXR0cmlidXRlcy5zcmNTZXQvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzaXplczppbWdBdHRyaWJ1dGVzLnNpemVzfSkpOm51bGwpO30vL0JVSUxUIElOIExPQURFUlNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpe3JldHVybiBzcmNbMF09PT0nLyc/c3JjLnNsaWNlKDEpOnNyYzt9ZnVuY3Rpb24gaW1naXhMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbmNvbnN0IHBhcmFtcz1bJ2F1dG89Zm9ybWF0JywnZml0PW1heCcsJ3c9Jyt3aWR0aF07bGV0IHBhcmFtc1N0cmluZz0nJztpZihxdWFsaXR5KXtwYXJhbXMucHVzaCgncT0nK3F1YWxpdHkpO31pZihwYXJhbXMubGVuZ3RoKXtwYXJhbXNTdHJpbmc9Jz8nK3BhcmFtcy5qb2luKCcmJyk7fXJldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gO31mdW5jdGlvbiBha2FtYWlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRofSl7cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDt9ZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG5jb25zdCBwYXJhbXM9WydmX2F1dG8nLCdjX2xpbWl0Jywnd18nK3dpZHRoLCdxXycrKHF1YWxpdHl8fCdhdXRvJyldO2xldCBwYXJhbXNTdHJpbmc9cGFyYW1zLmpvaW4oJywnKSsnLyc7cmV0dXJuYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7fWZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbWlzc2luZ1ZhbHVlcz1bXTsvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbmlmKCFzcmMpbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtpZighd2lkdGgpbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO2lmKG1pc3NpbmdWYWx1ZXMubGVuZ3RoPjApe3Rocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtzcmMsd2lkdGgscXVhbGl0eX0pfWApO31pZihzcmMuc3RhcnRzV2l0aCgnLy8nKSl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIXNyYy5zdGFydHNXaXRoKCcvJykmJmNvbmZpZ0RvbWFpbnMpe2xldCBwYXJzZWRTcmM7dHJ5e3BhcnNlZFNyYz1uZXcgVVJMKHNyYyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmArYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTt9fX1yZXR1cm5gJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eXx8NzV9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2FwaVwiXG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbmF2XCJcbmltcG9ydCBUZWFtIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3RlYW1cIlxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXJcIlxuXG5jb25zdCBUZWFtUGFnZSA9ICh7IGNhdGVnb3JpZXMsIGhvbWVwYWdlLCBzZWN0aW9uRm9vdGVyLCBzZWN0aW9uVGVhbSwgdGVhbSwgc29jaWFscywgbGFuZ1N3aXRoZXMsIGxhbmcgfSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwYWdlPVwidGVhbS1wYWdlXCI+XG4gICAgICA8TmF2IGhvbWVwYWdlPXtob21lcGFnZX0gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gbGFuZ1N3aXRoZXM9e2xhbmdTd2l0aGVzfSBsYW5nPXtsYW5nfSAvPlxuICAgICAgPFRlYW0gc2VjdGlvblRlYW09e3NlY3Rpb25UZWFtfSB0ZWFtPXt0ZWFtfSAvPlxuICAgICAgPEZvb3RlciBzZWN0aW9uRm9vdGVyPXtzZWN0aW9uRm9vdGVyfSBzb2NpYWxzPXtzb2NpYWxzfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBsYW5nPXtsYW5nfS8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBsYW5nID0gXCJlblwiXG5cbiAgY29uc3QgaG9tZXBhZ2VSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9ob21lcGFnZVwiLCB7XG4gICAgbG9jYWxlOiBsYW5nLFxuICAgIHBvcHVsYXRlOiB7XG4gICAgICBzZW86IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICBsb2dvOnsgcG9wdWxhdGU6IFwiKlwiIH1cbiAgICB9LFxuICB9KVxuICBjb25zdCBjYXRlZ29yaWVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pXG4gIGNvbnN0IHRlYW1zUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvdGVhbXNcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KVxuICBjb25zdCBzZWN0aW9uVGVhbVJlcyA9IGF3YWl0IGZldGNoQVBJKFwiL3NlY3Rpb24tdGVhbVwiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pXG4gIGNvbnN0IGZvb3RlclJlcyA9IGF3YWl0IGZldGNoQVBJKFwiL3NlY3Rpb24tZm9vdGVyXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSlcbiAgY29uc3Qgc29jaWFsc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL3NvY2lhbHNcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KVxuICBjb25zdCBsYW5nU3dpdGNoZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9sYW5nLXN3aXRjaGVzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcmllc1Jlcy5kYXRhLFxuICAgICAgaG9tZXBhZ2U6IGhvbWVwYWdlUmVzLmRhdGEsXG4gICAgICB0ZWFtOiB0ZWFtc1Jlcy5kYXRhLFxuICAgICAgc2VjdGlvblRlYW06IHNlY3Rpb25UZWFtUmVzLmRhdGEsXG4gICAgICBzZWN0aW9uRm9vdGVyOiBmb290ZXJSZXMuZGF0YSxcbiAgICAgIHNvY2lhbHMgOnNvY2lhbHNSZXMuZGF0YSxcbiAgICAgIGxhbmdTd2l0aGVzOiBsYW5nU3dpdGNoZXNSZXMuZGF0YSxcbiAgICAgIGxhbmc6IGxhbmdcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVhbVBhZ2UiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==