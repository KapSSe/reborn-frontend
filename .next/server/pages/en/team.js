(function() {
var exports = {};
exports.id = 103;
exports.ids = [103];
exports.modules = {

/***/ 8141:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(883);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3445);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1844);
/* harmony import */ var _components_team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9021);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1911);



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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    page: "team-page",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nav__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      homepage: homepage,
      categories: categories,
      langSwithes: langSwithes,
      lang: lang
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_team__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      sectionTeam: sectionTeam,
      team: team
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      sectionFooter: sectionFooter,
      socials: socials,
      categories: categories,
      lang: lang
    })]
  });
};

async function getStaticProps() {
  const lang = "en";
  const homepageRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .fetchAPI */ .I)("/homepage", {
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
  const categoriesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .fetchAPI */ .I)("/categories", {
    locale: lang,
    populate: "*"
  });
  const teamsRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .fetchAPI */ .I)("/teams", {
    locale: lang,
    populate: "*"
  });
  const sectionTeamRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .fetchAPI */ .I)("/section-team", {
    locale: lang,
    populate: "*"
  });
  const footerRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .fetchAPI */ .I)("/section-footer", {
    locale: lang,
    populate: "*"
  });
  const socialsRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .fetchAPI */ .I)("/socials", {
    locale: lang,
    populate: "*"
  });
  const langSwitchesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__/* .fetchAPI */ .I)("/lang-switches", {
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

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 6850:
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,61,422,75,21], function() { return __webpack_exec__(8141); });
module.exports = __webpack_exports__;

})();