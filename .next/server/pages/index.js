(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6124:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3445);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8303);
/* harmony import */ var _components_welcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6531);
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
/* harmony import */ var _components_mission__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2233);
/* harmony import */ var _components_partners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70);
/* harmony import */ var _components_donations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1122);
/* harmony import */ var _components_win__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96);
/* harmony import */ var _components_contacts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(629);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1911);
/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1055);
/* harmony import */ var _components_scrollTop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3632);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(883);



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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    page: "home-page",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      seo: homepage.attributes.seo
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_welcome__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      welcome: welcome,
      homepage: homepage,
      categories: categories,
      sectionDonation: sectionDonation,
      langSwithes: langSwithes,
      lang: lang
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_about__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      about: about
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_mission__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
      sectionMission: sectionMission,
      missions: missions,
      missionSlides: missionSlides,
      lang: lang
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_articles__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
      articles: articles,
      categories: categories,
      projects: projects,
      missions: missions,
      lang: lang
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partners__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
      sectionPartner: sectionPartner,
      partners: partners
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_donations__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
      sectionContacts: sectionContacts,
      sectionDonation: sectionDonation,
      lang: lang
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_win__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
      sectionWin: sectionWin
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_contacts__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
      sectionContacts: sectionContacts
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
      sectionFooter: sectionFooter,
      socials: socials,
      categories: categories,
      lang: lang
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_scrollTop__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
      projects: projects
    })]
  });
};

async function getStaticProps() {
  const lang = "uk"; // Run API calls in parallel

  const [articlesRes, sectionProjectRes, sectionDonationRes, sectionSocialsRes, sectionFooterRes, sectionContactsRes, sectionWinRes, sectionPartnerRes, partnersRes, sectionMissionRes, missionsRes, missionSlidesRes, categoriesRes, welcomeRes, aboutRes, langSwitchesRes, homepageRes] = await Promise.all([(0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/articles", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/section-project", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/section-donation", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/socials", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/section-footer", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/section-contact", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/section-win", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/section-partner", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/partners", {
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/section-mission", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/missions", {
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
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/missions-slides", {
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/categories", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/section-welcome", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/section-about", {
    locale: lang,
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/lang-switches", {
    populate: "*"
  }), (0,_lib_api__WEBPACK_IMPORTED_MODULE_14__/* .fetchAPI */ .I)("/homepage", {
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

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ 3703:
/***/ (function(module) {

"use strict";
module.exports = require("react-markdown");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,61,544,422,75,672,442,90], function() { return __webpack_exec__(6124); });
module.exports = __webpack_exports__;

})();