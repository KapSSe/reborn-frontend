(function() {
var exports = {};
exports.id = 582;
exports.ids = [582];
exports.modules = {

/***/ 9045:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3703);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(883);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5030);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1422);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3445);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8303);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1844);
/* harmony import */ var _components_donations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1122);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1911);



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
  const imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__/* .getStrapiMedia */ .$)(article.attributes.image);
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    page: "article-page",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
      seo: seo
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nav__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
      homepage: homepage,
      categories: categories,
      langSwithes: langSwithes,
      lang: lang
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "article-page__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "article-page-item__wrapper",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "article-page-item__filter"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "article-page-item__bg",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
            image: article.attributes.image
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "article-page-item__content",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
            className: "article-page-item__title",
            children: article.attributes.title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "article-page-item__desc",
            children: article.attributes.description
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "uk-grid uk-grid-collapse",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "article-page-article uk-width-3-4",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {
            source: article.attributes.content,
            escapeHtml: false
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_donations__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
      sectionContacts: sectionContacts,
      sectionDonation: sectionDonation
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
      sectionFooter: sectionFooter,
      socials: socials,
      categories: categories,
      lang: lang
    })]
  });
};

async function getStaticPaths() {
  const lang = "en";
  const articlesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .fetchAPI */ .I)("/articles", {
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
  const lang = "en";
  const articlesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .fetchAPI */ .I)("/articles", {
    locale: lang,
    filters: {
      slug: params.slug
    },
    populate: "*"
  });
  const categoriesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .fetchAPI */ .I)("/categories", {
    locale: lang,
    populate: "*"
  });
  const homepageRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .fetchAPI */ .I)("/homepage", {
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
  const donationsRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .fetchAPI */ .I)("/section-donation", {
    locale: lang,
    populate: "*"
  });
  const contactsRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .fetchAPI */ .I)("/section-contact", {
    locale: lang,
    populate: "*"
  });
  const footerRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .fetchAPI */ .I)("/section-footer", {
    locale: lang,
    populate: "*"
  });
  const socialsRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .fetchAPI */ .I)("/socials", {
    locale: lang,
    populate: "*"
  });
  const langSwitchesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__/* .fetchAPI */ .I)("/lang-switches", {
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,61,544,422,75,672,442], function() { return __webpack_exec__(9045); });
module.exports = __webpack_exports__;

})();