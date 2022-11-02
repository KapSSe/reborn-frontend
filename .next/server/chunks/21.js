exports.id = 21;
exports.ids = [21];
exports.modules = {

/***/ 9021:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5030);





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
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "team-members uk-grid uk-child-width-1-4",
        children: team.map((teamMember, i) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "team-member",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "team-member__wrapper",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "team-member__image",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                  image: teamMember.attributes.image
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "team-member__title",
                children: teamMember.attributes.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "team-member__description",
                children: teamMember.attributes.desc
              })]
            })
          }, i);
        })
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "team-structure",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: "team-structure__desc",
          children: sectionTeam.attributes.structureDesc
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "team-structure__scheme",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
            image: sectionTeam.attributes.structureSchemeImg
          })
        })]
      });
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
    className: "team",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "team__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "team-header",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
          onClick: handleItemSelection.bind(undefined, "team"),
          className: `team-header__heading ${selectedItem === "team" ? "team-header__heading_active" : null}`,
          children: sectionTeam.attributes.titleTeam
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
          onClick: handleItemSelection.bind(undefined, "structure"),
          className: `team-header__heading ${selectedItem === "structure" ? "team-header__heading_active" : null}`,
          children: sectionTeam.attributes.titleStructure
        })]
      }), renderContent()]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Team);

/***/ })

};
;