(function() {
var exports = {};
exports.id = "pages/article/[slug]";
exports.ids = ["pages/article/[slug]"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


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

/***/ "./pages/article/[slug].js":
/*!*********************************!*\
  !*** ./pages/article/[slug].js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/image */ "./components/image.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/media */ "./lib/media.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/seo */ "./components/seo.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/nav */ "./components/nav.js");
/* harmony import */ var _components_donations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/donations */ "./components/donations.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/footer */ "./components/footer.js");

var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\pages\\article\\[slug].js";

/* eslint-disable prettier/prettier */
 // import Moment from "react-moment"










const Article = ({
  article,
  categories,
  homepage,
  sectionDonation,
  sectionContacts,
  sectionFooter,
  socials,
  langSwithes,
  lang
}) => {
  const imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__.getStrapiMedia)(article.attributes.image);
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__.default, {
    page: "article-page",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_6__.default, {
      seo: seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_7__.default, {
      homepage: homepage,
      categories: categories,
      langSwithes: langSwithes,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "article-page__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "article-page-item__wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "article-page-item__filter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "article-page-item__bg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_3__.default, {
            image: article.attributes.image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "article-page-item__content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "article-page-item__title",
            children: article.attributes.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "article-page-item__desc",
            children: article.attributes.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-grid uk-grid-collapse",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "article-page-article uk-width-3-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {
            source: article.attributes.content,
            escapeHtml: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_donations__WEBPACK_IMPORTED_MODULE_8__.default, {
      sectionContacts: sectionContacts,
      sectionDonation: sectionDonation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_9__.default, {
      sectionFooter: sectionFooter,
      socials: socials,
      categories: categories
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

async function getStaticPaths() {
  const lang = "uk";
  const articlesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)("/articles", {
    locale: lang,
    fields: ["slug"]
  });
  return {
    paths: articlesRes.data.map(article => ({
      params: {
        slug: article.attributes.slug
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const lang = "uk";
  const articlesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)("/articles", {
    locale: lang,
    filters: {
      slug: params.slug
    },
    populate: "*"
  });
  const categoriesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)("/categories", {
    locale: lang,
    populate: "*"
  });
  const homepageRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)("/homepage", {
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
  const donationsRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)("/section-donation", {
    locale: lang,
    populate: "*"
  });
  const contactsRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)("/section-contact", {
    locale: lang,
    populate: "*"
  });
  const footerRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)("/section-footer", {
    locale: lang,
    populate: "*"
  });
  const socialsRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)("/socials", {
    locale: lang,
    populate: "*"
  });
  const langSwitchesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)("/lang-switches", {
    populate: "*"
  });
  return {
    props: {
      article: articlesRes.data[0],
      categories: categoriesRes.data,
      homepage: homepageRes.data,
      sectionDonation: donationsRes.data,
      sectionContacts: contactsRes.data,
      sectionFooter: footerRes.data,
      socials: socialsRes.data,
      langSwithes: langSwitchesRes.data,
      lang: lang
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Article);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/article/[slug].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9kb25hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9jb21wb25lbnRzL3Nlby5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9saWIvYXBpLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL2xpYi9tZWRpYS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL215LW5leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicXNcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL215LW5leHQtYmxvZy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nL2V4dGVybmFsIFwicmVhY3QtbWFya2Rvd25cIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvaWdub3JlZHxDOlxcVXNlcnNcXHN0YXNrXFx3b3JrXFxyZWJvcm4tdWtyYWluZVxcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJEb25hdGlvbnMiLCJzZWN0aW9uRG9uYXRpb24iLCJzZWN0aW9uQ29udGFjdHMiLCJzZWxlY3RlZERvbmF0aW9uIiwic2V0U2VsZWN0ZWREb25hdGlvbiIsInVzZVN0YXRlIiwic2VsZWN0ZWREb25hdGlvbkJhbmsiLCJzZXRTZWxlY3RlZERvbmF0aW9uQmFuayIsInNlbGVjdGVkRG9uYXRpb25DcnlwdG8iLCJzZXRTZWxlY3RlZERvbmF0aW9uQ3J5cHRvIiwiY29weVRleHQiLCJ0ZXh0IiwiYXR0cmlidXRlcyIsImRvbmF0aW9uc0RhdGEiLCJ0aXRsZSIsInR5cGVzIiwibWFwIiwidHlwZSIsImkiLCJiaW5kIiwibmFtZSIsImRlc2MiLCJkb25hdGlvbkxpbmsiLCJidXR0b24iLCJzdWJ0eXBlcyIsInN1YnR5cGUiLCJqIiwia2V5IiwidmFsdWUiLCJjb2RlIiwiYnV0dG9uSWNvbiIsImJhbmsiLCJhY2NvdW50IiwiY3VycmVuY3kiLCJndWlkZSIsImsiLCJ3YWxsZXQiLCJGb290ZXIiLCJzZWN0aW9uRm9vdGVyIiwic29jaWFscyIsImNhdGVnb3JpZXMiLCJsYW5nIiwiY2F0ZWdvcnkiLCJpc0hvbWVQYWdlIiwic2x1ZyIsImlkIiwic29jaWFsIiwibGluayIsImljb24iLCJkZXNjcmlwdGlvbiIsIkltYWdlIiwiaW1hZ2UiLCJzdHlsZSIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0YSIsImdldFN0cmFwaU1lZGlhIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJwYWdlIiwiTmF2IiwiaG9tZXBhZ2UiLCJsYW5nU3dpdGhlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInJlbmRlckxvZ29MaW5rIiwibG9nbyIsImNyZWF0ZUxhbmdVcmwiLCJuZXdMYW5nIiwicGF0aCIsInBhdGhuYW1lIiwicXVlcnkiLCJyZXBsYWNlIiwic3BsaXQiLCJzcGxpY2UiLCJqb2luIiwiY3VycmVudExhbmciLCJsYW5nTGFiZWwiLCJTZW8iLCJzZW8iLCJkZWZhdWx0U2VvIiwic2l0ZU5hbWUiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInNlb1dpdGhEZWZhdWx0cyIsImZ1bGxTZW8iLCJtZXRhVGl0bGUiLCJzaGFyZUltYWdlIiwibWV0YURlc2NyaXB0aW9uIiwiYXJ0aWNsZSIsImdldFN0cmFwaVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCIsImZldGNoQVBJIiwidXJsUGFyYW1zT2JqZWN0Iiwib3B0aW9ucyIsIm1lcmdlZE9wdGlvbnMiLCJoZWFkZXJzIiwicXVlcnlTdHJpbmciLCJxcyIsInJlcXVlc3RVcmwiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwiRXJyb3IiLCJqc29uIiwibWVkaWEiLCJpbWFnZVVybCIsInN0YXJ0c1dpdGgiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJkZWZhdWx0IiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJyZW1vdmVQbGFjZWhvbGRlciIsImltZyIsInBsYWNlaG9sZGVyIiwiaGFuZGxlTG9hZCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJjbGFzc05hbWUiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwiaXNMYXp5Iiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJvdmVyZmxvdyIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiYWx0Iiwicm9sZSIsInRvQmFzZTY0IiwiT2JqZWN0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWYiLCJlbGVtZW50IiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZnV0dXJlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwiaGFzUHJlZmV0Y2giLCJkb2N1bWVudCIsIndpbmRvdyIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiX3VudXNlZCIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwiY3Jvc3NPcmlnaW4iLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImRlZmluZVByb3BlcnR5IiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJwYXRobmFtZVBhcnRzIiwic29tZSIsInRvTG93ZXJDYXNlIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsInkiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJmb3JtYXRVcmwiLCJxdWVyeXN0cmluZyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJhdXRoIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJpdGVtIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJyZW5kZXIiLCJjcmVhdGVDb250ZXh0IiwiTXlBcHAiLCJmYXZpY29uIiwiYXBwUHJvcHMiLCJnbG9iYWxSZXMiLCJwb3B1bGF0ZSIsIkFydGljbGUiLCJnZXRTdGF0aWNQYXRocyIsImFydGljbGVzUmVzIiwiZmllbGRzIiwicGF0aHMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiZmlsdGVycyIsImNhdGVnb3JpZXNSZXMiLCJob21lcGFnZVJlcyIsImRvbmF0aW9uc1JlcyIsImNvbnRhY3RzUmVzIiwiZm9vdGVyUmVzIiwic29jaWFsc1JlcyIsImxhbmdTd2l0Y2hlc1JlcyIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHVHQUE2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E3QztBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFBRUMsaUJBQUY7QUFBbUJDO0FBQW5CLENBQUQsS0FBMEM7QUFDMUQsUUFBTTtBQUFBLE9BQUNDLGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQTBDQywrQ0FBUSxDQUFDLENBQUQsQ0FBeEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0Msb0JBQUQ7QUFBQSxPQUF1QkM7QUFBdkIsTUFBa0RGLCtDQUFRLENBQUMsQ0FBRCxDQUFoRTtBQUNBLFFBQU07QUFBQSxPQUFDRyxzQkFBRDtBQUFBLE9BQXlCQztBQUF6QixNQUFzREosK0NBQVEsQ0FBQyxDQUFELENBQXBFOztBQUVBLFFBQU1LLFFBQVEsR0FBSUMsSUFBRCxJQUFVO0FBQ3pCLGVBQW1DLEVBRWxDO0FBQ0YsR0FKRDs7QUFNQSxzQkFDRTtBQUFTLGFBQVMsRUFBQyxXQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLG9EQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLGtCQUFkO0FBQUEsa0JBQ0dWLGVBQWUsQ0FBQ1csVUFBaEIsQ0FBMkJDLGFBQTNCLENBQXlDQztBQUQ1QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSSxpQkFBUyxFQUFD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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7QUNoQkEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2FydGljbGUvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuL2ltYWdlXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5jb25zdCBEb25hdGlvbnMgPSAoeyBzZWN0aW9uRG9uYXRpb24sIHNlY3Rpb25Db250YWN0cyB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZERvbmF0aW9uLCBzZXRTZWxlY3RlZERvbmF0aW9uXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtzZWxlY3RlZERvbmF0aW9uQmFuaywgc2V0U2VsZWN0ZWREb25hdGlvbkJhbmtdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3NlbGVjdGVkRG9uYXRpb25DcnlwdG8sIHNldFNlbGVjdGVkRG9uYXRpb25DcnlwdG9dID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBjb3B5VGV4dCA9ICh0ZXh0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KS50aGVuKCgpID0+IHt9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZG9uYXRpb25zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbmF0aW9uc19fY29udGVudCB1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJkb25hdGlvbnNfX3RpdGxlXCI+XG4gICAgICAgICAge3NlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudGl0bGV9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJkb25hdGlvbnNfX21lbnVcIj5cbiAgICAgICAgICB7c2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlcy5tYXAoKHR5cGUsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkb25hdGlvbnNfX21lbnUtaXRlbSAke1xuICAgICAgICAgICAgICAgICAgaSA9PT0gc2VsZWN0ZWREb25hdGlvbiA/IFwiZG9uYXRpb25zX19tZW51LWl0ZW1fYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NldFNlbGVjdGVkRG9uYXRpb24uYmluZCh0aGlzLCBpKX0+XG4gICAgICAgICAgICAgICAgICB7dHlwZS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbmF0aW9uc19fZGVzY1wiPlxuICAgICAgICAgIHtzZWxlY3RlZERvbmF0aW9uID09PSAwID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGlvbnNfX21vYmlsZXBheVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkb25hdGlvbnNfX21vYmlsZXBheS1kZXNjXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgXS5kZXNjXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17c2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS5kb25hdGlvbkxpbmt9XG4gICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRvbmF0aW9uc19fYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICBdLmJ1dHRvblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IHNlbGVjdGVkRG9uYXRpb24gPT09IDEgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbmF0aW9uc19fYmFua3NcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRvbmF0aW9uc19fc3VibWVudVwiPlxuICAgICAgICAgICAgICAgIHtzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgIF0uc3VidHlwZXMubWFwKChzdWJ0eXBlLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2p9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZG9uYXRpb25zX19zdWJtZW51LWl0ZW0gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPT09IHNlbGVjdGVkRG9uYXRpb25CYW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJkb25hdGlvbnNfX3N1Ym1lbnUtaXRlbV9hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2V0U2VsZWN0ZWREb25hdGlvbkJhbmsuYmluZCh0aGlzLCBqKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3VidHlwZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7c2VsZWN0ZWREb25hdGlvbkJhbmsgPj0gMCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbmF0aW9uc19fYmFua3MtZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgIF0uc3VidHlwZXNbc2VsZWN0ZWREb25hdGlvbkJhbmtdLmRlc2MubmFtZS5rZXlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgIF0uc3VidHlwZXNbc2VsZWN0ZWREb25hdGlvbkJhbmtdLmRlc2MubmFtZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25CYW5rXS5kZXNjLmNvZGUua2V5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25CYW5rXS5kZXNjLmNvZGUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29weVRleHQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZGVzYy5jb2RlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbmF0aW9ucyBkb25hdGlvbnNfX2NvcHlcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtzZWN0aW9uQ29udGFjdHMuYXR0cmlidXRlcy5idXR0b25JY29ufSAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZGVzYy5iYW5rLmtleVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZGVzYy5iYW5rLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgIF0uc3VidHlwZXNbc2VsZWN0ZWREb25hdGlvbkJhbmtdLmRlc2MuYWNjb3VudC5rZXlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgIF0uc3VidHlwZXNbc2VsZWN0ZWREb25hdGlvbkJhbmtdLmRlc2MuYWNjb3VudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb3B5VGV4dC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25CYW5rXS5kZXNjLmFjY291bnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9uYXRpb25zIGRvbmF0aW9uc19fY29weVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3NlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLmJ1dHRvbkljb259IC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25CYW5rXS5kZXNjLmN1cnJlbmN5LmtleVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZGVzYy5jdXJyZW5jeS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRvbmF0aW9uc19fYmFua3MtZ3VpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZ3VpZGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBzZWxlY3RlZERvbmF0aW9uID09PSAyID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGlvbnNfX2NyeXB0b1wiPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZG9uYXRpb25zX19zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAge3NlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgXS5zdWJ0eXBlcy5tYXAoKHN1YnR5cGUsIGspID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17a31cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkb25hdGlvbnNfX3N1Ym1lbnUtaXRlbSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgayA9PT0gc2VsZWN0ZWREb25hdGlvbkNyeXB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZG9uYXRpb25zX19zdWJtZW51LWl0ZW1fYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NldFNlbGVjdGVkRG9uYXRpb25DcnlwdG8uYmluZCh0aGlzLCBrKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3VidHlwZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7c2VsZWN0ZWREb25hdGlvbkJhbmsgPj0gMCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbmF0aW9uc19fY3J5cHRvLWRlc2NcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25DcnlwdG9dLndhbGxldFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb3B5VGV4dC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25DcnlwdG9dLndhbGxldFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb25hdGlvbnMgZG9uYXRpb25zX19jb3B5XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17c2VjdGlvbkNvbnRhY3RzLmF0dHJpYnV0ZXMuYnV0dG9uSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9uYXRpb25zXG4iLCJpbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuL2ltYWdlXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5jb25zdCBGb290ZXIgPSAoeyBzZWN0aW9uRm9vdGVyLCBzb2NpYWxzLCBjYXRlZ29yaWVzLCBsYW5nIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19jb250ZW50IHVrLWNvbnRhaW5lciB1ay1jb250YWluZXItbGFyZ2VcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlcl9fbmF2aWdhdGlvbi1mb290ZXJcIj5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnkuYXR0cmlidXRlcy5pc0hvbWVQYWdlKSB7XG4gICAgICAgICAgICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tZm9vdGVyX19pdGVtXCIga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvIyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXQgbmF2aWdhdGlvbi1mb290ZXJfX2xpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tZm9vdGVyX19pdGVtXCIga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2xhbmd9LyMke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmlnYXRpb24tZm9vdGVyX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tZm9vdGVyX19pdGVtXCIga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZpZ2F0aW9uLWZvb3Rlcl9fbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1mb290ZXJfX2l0ZW1cIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgLyR7bGFuZ30vJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZpZ2F0aW9uLWZvb3Rlcl9fbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbC1mb290ZXJcIj5cbiAgICAgICAgICB7c29jaWFscy5tYXAoKHNvY2lhbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNvY2lhbC1mb290ZXJfX2l0ZW1cIiBrZXk9e3NvY2lhbC5pZH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17c29jaWFsLmF0dHJpYnV0ZXMubGlua30gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtZm9vdGVyX19pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17c29jaWFsLmF0dHJpYnV0ZXMuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb290ZXJfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAge3NlY3Rpb25Gb290ZXIuYXR0cmlidXRlcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIiwiaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuXG5jb25zdCBJbWFnZSA9ICh7IGltYWdlLCBzdHlsZSB9KSA9PiB7XG4gIGNvbnN0IHsgdXJsLCBhbHRlcm5hdGl2ZVRleHQsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlLmRhdGEuYXR0cmlidXRlc1xuXG4gIHJldHVybiAoXG4gICAgPE5leHRJbWFnZVxuICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICB3aWR0aD17d2lkdGggfHwgXCIxMDAlXCJ9XG4gICAgICBoZWlnaHQ9e2hlaWdodCB8fCBcIjEwMCVcIn1cbiAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgc3JjPXtnZXRTdHJhcGlNZWRpYShpbWFnZSl9XG4gICAgICBhbHQ9e2FsdGVybmF0aXZlVGV4dCB8fCBcIlwifVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VcbiIsImNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBwYWdlIH0pID0+IDxkaXYgY2xhc3NOYW1lPXtwYWdlfT57Y2hpbGRyZW59PC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuY29uc3QgTmF2ID0gKHsgaG9tZXBhZ2UsIGNhdGVnb3JpZXMsIGxhbmdTd2l0aGVzLCBsYW5nIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCByZW5kZXJMb2dvTGluayA9ICgpID0+IHtcbiAgICBpZiAobGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXQgbmF2YmFyX19sb2dvXCI+XG4gICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtob21lcGFnZS5hdHRyaWJ1dGVzLmxvZ299IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHtsYW5nfWB9IHBhc3NIcmVmPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXQgbmF2YmFyX19sb2dvXCI+XG4gICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtob21lcGFnZS5hdHRyaWJ1dGVzLmxvZ299IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY3JlYXRlTGFuZ1VybCA9IChuZXdMYW5nKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHJvdXRlci5wYXRobmFtZVxuICAgIGNvbnN0IHNsdWcgPSByb3V0ZXI/LnF1ZXJ5Py5zbHVnXG4gICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgaWYgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGAvJHtuZXdMYW5nfSR7cGF0aC5yZXBsYWNlKFwiW3NsdWddXCIsIHNsdWcpfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7bmV3TGFuZ30ke3BhdGh9YFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc2x1Zykge1xuICAgICAgICByZXR1cm4gYC8ke3BhdGgucmVwbGFjZShcIltzbHVnXVwiLCBzbHVnKS5zcGxpdChcIi9cIikuc3BsaWNlKDIpLmpvaW4oXCIvXCIpfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7cGF0aC5zcGxpdChcIi9cIikuc3BsaWNlKDIpLmpvaW4oXCIvXCIpfWBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICA8bmF2XG4gICAgICAgIGNsYXNzTmFtZT1cInVrLW5hdmJhci1jb250YWluZXIgdWstbWFyZ2luLWF1dG8gdWstY29udGFpbmVyLWxhcmdlIHVrLW5hdmJhclwiXG4gICAgICAgIGRhdGEtdWstbmF2YmFyXG4gICAgICA+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbGVmdCBuYXZiYXJfX2xlZnRcIj5cbiAgICAgICAgICB7cmVuZGVyTG9nb0xpbmsoKX1cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2YmFyLW5hdiBuYXZiYXJfX2NlbnRlclwiPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkuYXR0cmlidXRlcy5pc0hvbWVQYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvIyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgLyR7bGFuZ30vIyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXQgbmF2YmFyX19tZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgLyR7bGFuZ30vJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItcmlnaHQgbmF2YmFyX19yaWdodFwiPlxuICAgICAgICAgIHtsYW5nU3dpdGhlcy5tYXAoKGN1cnJlbnRMYW5nLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nID09PSBsYW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXJfX21lbnUtaXRlbSBuYXZiYXJfX21lbnUtaXRlbV9hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRMYW5nLmF0dHJpYnV0ZXMubGFuZ0xhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtjcmVhdGVMYW5nVXJsKGN1cnJlbnRMYW5nLmF0dHJpYnV0ZXMubGFuZyl9XG4gICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXQgbmF2YmFyX19tZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcIi4uL3BhZ2VzL19hcHBcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcblxuY29uc3QgU2VvID0gKHsgc2VvIH0pID0+IHtcbiAgY29uc3QgeyBkZWZhdWx0U2VvLCBzaXRlTmFtZSB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KVxuICBjb25zdCBzZW9XaXRoRGVmYXVsdHMgPSB7XG4gICAgLi4uZGVmYXVsdFNlbyxcbiAgICAuLi5zZW8sXG4gIH1cbiAgY29uc3QgZnVsbFNlbyA9IHtcbiAgICAuLi5zZW9XaXRoRGVmYXVsdHMsXG4gICAgLy8gQWRkIHRpdGxlIHN1ZmZpeFxuICAgIG1ldGFUaXRsZTogYCR7c2VvV2l0aERlZmF1bHRzLm1ldGFUaXRsZX0gfCAke3NpdGVOYW1lfWAsXG4gICAgLy8gR2V0IGZ1bGwgaW1hZ2UgVVJMXG4gICAgc2hhcmVJbWFnZTogZ2V0U3RyYXBpTWVkaWEoc2VvV2l0aERlZmF1bHRzLnNoYXJlSW1hZ2UpLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIHtmdWxsU2VvLm1ldGFUaXRsZSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHRpdGxlPntmdWxsU2VvLm1ldGFUaXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtmdWxsU2VvLm1ldGFUaXRsZX0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YVRpdGxlfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7ZnVsbFNlby5tZXRhRGVzY3JpcHRpb24gJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtmdWxsU2VvLm1ldGFEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7ZnVsbFNlby5zaGFyZUltYWdlICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17ZnVsbFNlby5zaGFyZUltYWdlfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17ZnVsbFNlby5zaGFyZUltYWdlfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJpbWFnZVwiIGNvbnRlbnQ9e2Z1bGxTZW8uc2hhcmVJbWFnZX0gLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAge2Z1bGxTZW8uYXJ0aWNsZSAmJiA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYXJ0aWNsZVwiIC8+fVxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICA8L0hlYWQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VvXG4iLCJpbXBvcnQgcXMgZnJvbSBcInFzXCJcblxuLyoqXG4gKiBHZXQgZnVsbCBTdHJhcGkgVVJMIGZyb20gcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUGF0aCBvZiB0aGUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBGdWxsIFN0cmFwaSBVUkxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaVVSTChwYXRoID0gXCJcIikge1xuICByZXR1cm4gYCR7XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIlxuICB9JHtwYXRofWBcbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpIEFQSSBlbmRwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIEFQSSByb3V0ZVxuICogQHBhcmFtIHtPYmplY3R9IHVybFBhcmFtc09iamVjdCBVUkwgcGFyYW1zIG9iamVjdCwgd2lsbCBiZSBzdHJpbmdpZmllZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBwYXNzZWQgdG8gZmV0Y2hcbiAqIEByZXR1cm5zIFBhcnNlZCBBUEkgY2FsbCByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBUEkocGF0aCwgdXJsUGFyYW1zT2JqZWN0ID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIC4uLm9wdGlvbnMsXG4gIH1cblxuICAvLyBCdWlsZCByZXF1ZXN0IFVSTFxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBgJHtnZXRTdHJhcGlVUkwoXG4gICAgYC9hcGkke3BhdGh9JHtxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogXCJcIn1gXG4gICl9YFxuXG4gIC8vIFRyaWdnZXIgQVBJIGNhbGxcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsLCBtZXJnZWRPcHRpb25zKVxuXG4gIC8vIEhhbmRsZSByZXNwb25zZVxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXJyb3Igb2NjdXJlZCBwbGVhc2UgdHJ5IGFnYWluYClcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgcmV0dXJuIGRhdGFcbn1cbiIsImltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuL2FwaVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlNZWRpYShtZWRpYSkge1xuICBjb25zdCB7IHVybCB9ID0gbWVkaWEuZGF0YS5hdHRyaWJ1dGVzXG4gIGNvbnN0IGltYWdlVXJsID0gdXJsLnN0YXJ0c1dpdGgoXCIvXCIpID8gZ2V0U3RyYXBpVVJMKHVybCkgOiB1cmxcbiAgcmV0dXJuIGltYWdlVXJsXG59XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PUltYWdlO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgX3RvQmFzZT1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjRcIik7dmFyIF9pbWFnZUNvbmZpZz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7O2dsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQ9dHJ1ZTt9Y29uc3QgVkFMSURfTE9BRElOR19WQUxVRVM9WydsYXp5JywnZWFnZXInLHVuZGVmaW5lZF07Y29uc3QgbG9hZGVycz1uZXcgTWFwKFtbJ2ltZ2l4JyxpbWdpeExvYWRlcl0sWydjbG91ZGluYXJ5JyxjbG91ZGluYXJ5TG9hZGVyXSxbJ2FrYW1haScsYWthbWFpTG9hZGVyXSxbJ2RlZmF1bHQnLGRlZmF1bHRMb2FkZXJdXSk7Y29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUz1bJ2ZpbGwnLCdmaXhlZCcsJ2ludHJpbnNpYycsJ3Jlc3BvbnNpdmUnLHVuZGVmaW5lZF07ZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYyl7cmV0dXJuIHNyYy5kZWZhdWx0IT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpe3JldHVybiBzcmMuc3JjIT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpe3JldHVybiB0eXBlb2Ygc3JjPT09J29iamVjdCcmJihpc1N0YXRpY1JlcXVpcmUoc3JjKXx8aXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7fWNvbnN0e2RldmljZVNpemVzOmNvbmZpZ0RldmljZVNpemVzLGltYWdlU2l6ZXM6Y29uZmlnSW1hZ2VTaXplcyxsb2FkZXI6Y29uZmlnTG9hZGVyLHBhdGg6Y29uZmlnUGF0aCxkb21haW5zOmNvbmZpZ0RvbWFpbnN9PXByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTfHxfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0Oy8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXM9Wy4uLmNvbmZpZ0RldmljZVNpemVzLC4uLmNvbmZpZ0ltYWdlU2l6ZXNdO2NvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsYik9PmEtYik7YWxsU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTtmdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKXtpZihzaXplcyYmKGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKSl7Ly8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbmNvbnN0IHZpZXdwb3J0V2lkdGhSZT0vKF58XFxzKSgxP1xcZD9cXGQpdncvZztjb25zdCBwZXJjZW50U2l6ZXM9W107Zm9yKGxldCBtYXRjaDttYXRjaD12aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7bWF0Y2gpe3BlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7fWlmKHBlcmNlbnRTaXplcy5sZW5ndGgpe2NvbnN0IHNtYWxsZXN0UmF0aW89TWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSowLjAxO3JldHVybnt3aWR0aHM6YWxsU2l6ZXMuZmlsdGVyKHM9PnM+PWNvbmZpZ0RldmljZVNpemVzWzBdKnNtYWxsZXN0UmF0aW8pLGtpbmQ6J3cnfTt9cmV0dXJue3dpZHRoczphbGxTaXplcyxraW5kOid3J307fWlmKHR5cGVvZiB3aWR0aCE9PSdudW1iZXInfHxsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJyl7cmV0dXJue3dpZHRoczpjb25maWdEZXZpY2VTaXplcyxraW5kOid3J307fWNvbnN0IHdpZHRocz1bLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4vLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbi8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4vLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4vLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG5bd2lkdGgsd2lkdGgqMi8qLCB3aWR0aCAqIDMqL10ubWFwKHc9PmFsbFNpemVzLmZpbmQocD0+cD49dyl8fGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aC0xXSkpXTtyZXR1cm57d2lkdGhzLGtpbmQ6J3gnfTt9ZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aCxxdWFsaXR5LHNpemVzLGxvYWRlcn0pe2lmKHVub3B0aW1pemVkKXtyZXR1cm57c3JjLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTt9Y29uc3R7d2lkdGhzLGtpbmR9PWdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpO2NvbnN0IGxhc3Q9d2lkdGhzLmxlbmd0aC0xO3JldHVybntzaXplczohc2l6ZXMmJmtpbmQ9PT0ndyc/JzEwMHZ3JzpzaXplcyxzcmNTZXQ6d2lkdGhzLm1hcCgodyxpKT0+YCR7bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3fSl9ICR7a2luZD09PSd3Jz93OmkrMX0ke2tpbmR9YCkuam9pbignLCAnKSwvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbi8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG5zcmM6bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3aWR0aHNbbGFzdF19KX07fWZ1bmN0aW9uIGdldEludCh4KXtpZih0eXBlb2YgeD09PSdudW1iZXInKXtyZXR1cm4geDt9aWYodHlwZW9mIHg9PT0nc3RyaW5nJyl7cmV0dXJuIHBhcnNlSW50KHgsMTApO31yZXR1cm4gdW5kZWZpbmVkO31mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpe2NvbnN0IGxvYWQ9bG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtpZihsb2FkKXtyZXR1cm4gbG9hZCgoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Jvb3Q6Y29uZmlnUGF0aH0sbG9hZGVyUHJvcHMpKTt9dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO30vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoaW1nLHBsYWNlaG9sZGVyKXtpZihwbGFjZWhvbGRlcj09PSdibHVyJyYmaW1nKXtjb25zdCBoYW5kbGVMb2FkPSgpPT57aWYoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Y29uc3QgcD0nZGVjb2RlJ2luIGltZz9pbWcuZGVjb2RlKCk6UHJvbWlzZS5yZXNvbHZlKCk7cC5jYXRjaCgoKT0+e30pLnRoZW4oKCk9PntpbWcuc3R5bGUuZmlsdGVyPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZFNpemU9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J25vbmUnO30pO319O2lmKGltZy5jb21wbGV0ZSl7Ly8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4vLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4vLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuaGFuZGxlTG9hZCgpO31lbHNle2ltZy5vbmxvYWQ9aGFuZGxlTG9hZDt9fX1mdW5jdGlvbiBJbWFnZShfcmVmKXtsZXR7c3JjLHNpemVzLHVub3B0aW1pemVkPWZhbHNlLHByaW9yaXR5PWZhbHNlLGxvYWRpbmcsY2xhc3NOYW1lLHF1YWxpdHksd2lkdGgsaGVpZ2h0LG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbixsb2FkZXI9ZGVmYXVsdEltYWdlTG9hZGVyLHBsYWNlaG9sZGVyPSdlbXB0eScsYmx1ckRhdGFVUkx9PV9yZWYsYWxsPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLFtcInNyY1wiLFwic2l6ZXNcIixcInVub3B0aW1pemVkXCIsXCJwcmlvcml0eVwiLFwibG9hZGluZ1wiLFwiY2xhc3NOYW1lXCIsXCJxdWFsaXR5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJvYmplY3RGaXRcIixcIm9iamVjdFBvc2l0aW9uXCIsXCJsb2FkZXJcIixcInBsYWNlaG9sZGVyXCIsXCJibHVyRGF0YVVSTFwiXSk7bGV0IHJlc3Q9YWxsO2xldCBsYXlvdXQ9c2l6ZXM/J3Jlc3BvbnNpdmUnOidpbnRyaW5zaWMnO2lmKCdsYXlvdXQnaW4gcmVzdCl7Ly8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbmlmKHJlc3QubGF5b3V0KWxheW91dD1yZXN0LmxheW91dDsvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG5kZWxldGUgcmVzdFsnbGF5b3V0J107fWxldCBzdGF0aWNTcmM9Jyc7aWYoaXNTdGF0aWNJbXBvcnQoc3JjKSl7Y29uc3Qgc3RhdGljSW1hZ2VEYXRhPWlzU3RhdGljUmVxdWlyZShzcmMpP3NyYy5kZWZhdWx0OnNyYztpZighc3RhdGljSW1hZ2VEYXRhLnNyYyl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO31ibHVyRGF0YVVSTD1ibHVyRGF0YVVSTHx8c3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO3N0YXRpY1NyYz1zdGF0aWNJbWFnZURhdGEuc3JjO2lmKCFsYXlvdXR8fGxheW91dCE9PSdmaWxsJyl7aGVpZ2h0PWhlaWdodHx8c3RhdGljSW1hZ2VEYXRhLmhlaWdodDt3aWR0aD13aWR0aHx8c3RhdGljSW1hZ2VEYXRhLndpZHRoO2lmKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0fHwhc3RhdGljSW1hZ2VEYXRhLndpZHRoKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO319fXNyYz10eXBlb2Ygc3JjPT09J3N0cmluZyc/c3JjOnN0YXRpY1NyYztjb25zdCB3aWR0aEludD1nZXRJbnQod2lkdGgpO2NvbnN0IGhlaWdodEludD1nZXRJbnQoaGVpZ2h0KTtjb25zdCBxdWFsaXR5SW50PWdldEludChxdWFsaXR5KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIXNyYyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3dpZHRoLGhlaWdodCxxdWFsaXR5fSl9YCk7fWlmKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZpc05hTih3aWR0aEludCl8fHR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4oaGVpZ2h0SW50KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7fWlmKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYocHJpb3JpdHkmJmxvYWRpbmc9PT0nbGF6eScpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTt9aWYocGxhY2Vob2xkZXI9PT0nYmx1cicpe2lmKGxheW91dCE9PSdmaWxsJyYmKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7ZGVjb2Rpbmc6XCJhc3luY1wiLHN0eWxlOmltZ1N0eWxlLGNsYXNzTmFtZTpjbGFzc05hbWV9KSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGltZ0F0dHJpYnV0ZXMse2RlY29kaW5nOlwiYXN5bmNcIixjbGFzc05hbWU6Y2xhc3NOYW1lLHJlZjplbGVtZW50PT57c2V0UmVmKGVsZW1lbnQpO3JlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQscGxhY2Vob2xkZXIpO30sc3R5bGU6aW1nU3R5bGV9KSkscHJpb3JpdHk/LyojX19QVVJFX18qLyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4vLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbi8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbi8vXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6J19fbmltZy0nK2ltZ0F0dHJpYnV0ZXMuc3JjK2ltZ0F0dHJpYnV0ZXMuc3JjU2V0K2ltZ0F0dHJpYnV0ZXMuc2l6ZXMscmVsOlwicHJlbG9hZFwiLGFzOlwiaW1hZ2VcIixocmVmOmltZ0F0dHJpYnV0ZXMuc3JjU2V0P3VuZGVmaW5lZDppbWdBdHRyaWJ1dGVzLnNyYy8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzcmNzZXQ6aW1nQXR0cmlidXRlcy5zcmNTZXQvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzaXplczppbWdBdHRyaWJ1dGVzLnNpemVzfSkpOm51bGwpO30vL0JVSUxUIElOIExPQURFUlNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpe3JldHVybiBzcmNbMF09PT0nLyc/c3JjLnNsaWNlKDEpOnNyYzt9ZnVuY3Rpb24gaW1naXhMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbmNvbnN0IHBhcmFtcz1bJ2F1dG89Zm9ybWF0JywnZml0PW1heCcsJ3c9Jyt3aWR0aF07bGV0IHBhcmFtc1N0cmluZz0nJztpZihxdWFsaXR5KXtwYXJhbXMucHVzaCgncT0nK3F1YWxpdHkpO31pZihwYXJhbXMubGVuZ3RoKXtwYXJhbXNTdHJpbmc9Jz8nK3BhcmFtcy5qb2luKCcmJyk7fXJldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gO31mdW5jdGlvbiBha2FtYWlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRofSl7cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDt9ZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG5jb25zdCBwYXJhbXM9WydmX2F1dG8nLCdjX2xpbWl0Jywnd18nK3dpZHRoLCdxXycrKHF1YWxpdHl8fCdhdXRvJyldO2xldCBwYXJhbXNTdHJpbmc9cGFyYW1zLmpvaW4oJywnKSsnLyc7cmV0dXJuYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7fWZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbWlzc2luZ1ZhbHVlcz1bXTsvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbmlmKCFzcmMpbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtpZighd2lkdGgpbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO2lmKG1pc3NpbmdWYWx1ZXMubGVuZ3RoPjApe3Rocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtzcmMsd2lkdGgscXVhbGl0eX0pfWApO31pZihzcmMuc3RhcnRzV2l0aCgnLy8nKSl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIXNyYy5zdGFydHNXaXRoKCcvJykmJmNvbmZpZ0RvbWFpbnMpe2xldCBwYXJzZWRTcmM7dHJ5e3BhcnNlZFNyYz1uZXcgVVJMKHNyYyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmArYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTt9fX1yZXR1cm5gJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eXx8NzV9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wcztleHBvcnRzLk5leHRXZWJWaXRhbHNNZXRyaWM9X3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7Q29tcG9uZW50LGN0eH0pe2NvbnN0IHBhZ2VQcm9wcz1hd2FpdCgwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsY3R4KTtyZXR1cm57cGFnZVByb3BzfTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50e3JlbmRlcigpe2NvbnN0e0NvbXBvbmVudCxwYWdlUHJvcHN9PXRoaXMucHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LHBhZ2VQcm9wcyk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIiwiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgXCIuLi9hc3NldHMvY3NzL3N0eWxlLmNzc1wiXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcblxuLy8gU3RvcmUgU3RyYXBpIEdsb2JhbCBvYmplY3QgaW4gY29udGV4dFxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBnbG9iYWwgfSA9IHBhZ2VQcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIGhyZWY9e2dldFN0cmFwaU1lZGlhKGdsb2JhbC5hdHRyaWJ1dGVzLmZhdmljb24pfVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2dsb2JhbC5hdHRyaWJ1dGVzfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59XG5cbi8vIGdldEluaXRpYWxQcm9wcyBkaXNhYmxlcyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiBmb3IgcGFnZXMgdGhhdCBkb24ndFxuLy8gaGF2ZSBnZXRTdGF0aWNQcm9wcy4gU28gYXJ0aWNsZSwgY2F0ZWdvcnkgYW5kIGhvbWUgcGFnZXMgc3RpbGwgZ2V0IFNTRy5cbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Rpc2N1c3Npb25zLzEwOTQ5XG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIC8vIENhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2BcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgLy8gRmV0Y2ggZ2xvYmFsIHNpdGUgc2V0dGluZ3MgZnJvbSBTdHJhcGlcbiAgY29uc3QgZ2xvYmFsUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvZ2xvYmFsXCIsIHtcbiAgICBwb3B1bGF0ZToge1xuICAgICAgZmF2aWNvbjogXCIqXCIsXG4gICAgICBkZWZhdWx0U2VvOiB7XG4gICAgICAgIHBvcHVsYXRlOiBcIipcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbiAgLy8gUGFzcyB0aGUgZGF0YSB0byBvdXIgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHBhZ2VQcm9wczogeyBnbG9iYWw6IGdsb2JhbFJlcy5kYXRhIH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cblxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcbi8vIGltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW1hZ2VcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vLi4vbGliL21lZGlhXCJcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZW9cIlxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uYXZcIlxuaW1wb3J0IERvbmF0aW9ucyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9kb25hdGlvbnNcIlxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb290ZXJcIlxuXG5jb25zdCBBcnRpY2xlID0gKHsgYXJ0aWNsZSwgY2F0ZWdvcmllcywgaG9tZXBhZ2UsIHNlY3Rpb25Eb25hdGlvbiwgc2VjdGlvbkNvbnRhY3RzLCBzZWN0aW9uRm9vdGVyLCBzb2NpYWxzLCBsYW5nU3dpdGhlcywgbGFuZyB9KSA9PiB7XG4gIGNvbnN0IGltYWdlVXJsID0gZ2V0U3RyYXBpTWVkaWEoYXJ0aWNsZS5hdHRyaWJ1dGVzLmltYWdlKVxuXG4gIGNvbnN0IHNlbyA9IHtcbiAgICBtZXRhVGl0bGU6IGFydGljbGUuYXR0cmlidXRlcy50aXRsZSxcbiAgICBtZXRhRGVzY3JpcHRpb246IGFydGljbGUuYXR0cmlidXRlcy5kZXNjcmlwdGlvbixcbiAgICBzaGFyZUltYWdlOiBhcnRpY2xlLmF0dHJpYnV0ZXMuaW1hZ2UsXG4gICAgYXJ0aWNsZTogdHJ1ZSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwYWdlPVwiYXJ0aWNsZS1wYWdlXCI+XG4gICAgICA8U2VvIHNlbz17c2VvfSAvPlxuICAgICAgPE5hdiBob21lcGFnZT17aG9tZXBhZ2V9IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IGxhbmdTd2l0aGVzPXtsYW5nU3dpdGhlc30gbGFuZz17bGFuZ30gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXBhZ2VfX2NvbnRlbnQgdWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wYWdlLWl0ZW1fX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wYWdlLWl0ZW1fX2ZpbHRlclwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXBhZ2UtaXRlbV9fYmdcIj5cbiAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17YXJ0aWNsZS5hdHRyaWJ1dGVzLmltYWdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtcGFnZS1pdGVtX19jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJhcnRpY2xlLXBhZ2UtaXRlbV9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS5hdHRyaWJ1dGVzLnRpdGxlfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpY2xlLXBhZ2UtaXRlbV9fZGVzY1wiPlxuICAgICAgICAgICAgICAgIHthcnRpY2xlLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstZ3JpZCB1ay1ncmlkLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtcGFnZS1hcnRpY2xlIHVrLXdpZHRoLTMtNFwiPlxuICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICAgIHNvdXJjZT17YXJ0aWNsZS5hdHRyaWJ1dGVzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8RG9uYXRpb25zIHNlY3Rpb25Db250YWN0cz17c2VjdGlvbkNvbnRhY3RzfSBzZWN0aW9uRG9uYXRpb249e3NlY3Rpb25Eb25hdGlvbn0vPlxuICAgICAgPEZvb3RlciBzZWN0aW9uRm9vdGVyPXtzZWN0aW9uRm9vdGVyfSBzb2NpYWxzPXtzb2NpYWxzfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfS8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBsYW5nID0gXCJ1a1wiXG4gIGNvbnN0IGFydGljbGVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIiwgeyBsb2NhbGU6IGxhbmcsIGZpZWxkczogW1wic2x1Z1wiXSB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGFydGljbGVzUmVzLmRhdGEubWFwKChhcnRpY2xlKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IGFydGljbGUuYXR0cmlidXRlcy5zbHVnLFxuICAgICAgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGxhbmcgPSBcInVrXCJcbiAgY29uc3QgYXJ0aWNsZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9hcnRpY2xlc1wiLCB7XG4gICAgbG9jYWxlOiBsYW5nLFxuICAgIGZpbHRlcnM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxuICAgIH0sXG4gICAgcG9wdWxhdGU6IFwiKlwiLFxuICB9KVxuICBjb25zdCBjYXRlZ29yaWVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pXG4gIGNvbnN0IGhvbWVwYWdlUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvaG9tZXBhZ2VcIiwge1xuICAgIGxvY2FsZTogbGFuZyxcbiAgICBwb3B1bGF0ZToge1xuICAgICAgc2VvOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgbG9nbzp7IHBvcHVsYXRlOiBcIipcIiB9XG4gICAgfSxcbiAgfSlcbiAgY29uc3QgZG9uYXRpb25zUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvc2VjdGlvbi1kb25hdGlvblwiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pXG4gIGNvbnN0IGNvbnRhY3RzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvc2VjdGlvbi1jb250YWN0XCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSlcbiAgY29uc3QgZm9vdGVyUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvc2VjdGlvbi1mb290ZXJcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KVxuICBjb25zdCBzb2NpYWxzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvc29jaWFsc1wiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pXG4gIGNvbnN0IGxhbmdTd2l0Y2hlc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2xhbmctc3dpdGNoZXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhcnRpY2xlOiBhcnRpY2xlc1Jlcy5kYXRhWzBdLFxuICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcmllc1Jlcy5kYXRhLFxuICAgICAgaG9tZXBhZ2U6IGhvbWVwYWdlUmVzLmRhdGEsXG4gICAgICBzZWN0aW9uRG9uYXRpb246IGRvbmF0aW9uc1Jlcy5kYXRhLFxuICAgICAgc2VjdGlvbkNvbnRhY3RzOiBjb250YWN0c1Jlcy5kYXRhLFxuICAgICAgc2VjdGlvbkZvb3RlcjogZm9vdGVyUmVzLmRhdGEsXG4gICAgICBzb2NpYWxzIDpzb2NpYWxzUmVzLmRhdGEsXG4gICAgICBsYW5nU3dpdGhlczogbGFuZ1N3aXRjaGVzUmVzLmRhdGEsXG4gICAgICBsYW5nOiBsYW5nXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGUiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==