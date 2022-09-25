self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/articles.js":
/*!********************************!*\
  !*** ./components/articles.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\articles.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable prettier/prettier */




var Articles = function Articles(_ref) {
  _s();

  var articles = _ref.articles,
      projects = _ref.projects,
      missions = _ref.missions,
      lang = _ref.lang;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      selectedStatus = _useState[0],
      setSelectedStatus = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      selectedType = _useState2[0],
      setSelectedType = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
      paginationState = _useState3[0],
      setPaginationState = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      paginationLimit = _useState4[0],
      setPaginationLimit = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
      categoriesData = _useState5[0],
      setCategoriesData = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      paginatedCategoryData = _useState6[0],
      setPaginatedCategoryData = _useState6[1];

  var currentSelectedStatus = projects.attributes.projectsData.statuses[selectedStatus];
  var currentSelectedType = projects.attributes.projectsData.types[selectedType];
  var paginationDelta = 2;
  var iconKeyMap = {
    inProgress: "iconInProgress",
    done: "iconDone"
  };
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var _categoriesData = {};
    var _paginationState = {};
    articles.reduce(function (acc, article) {
      var status = article.attributes.status;
      var type = article.attributes.type;
      _categoriesData[status] = _categoriesData[status] || {};
      _categoriesData[status][type] = _categoriesData[status][type] || [];
      _categoriesData[status][type] = [].concat((0,C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(_categoriesData[status][type]), [article]);
      _paginationState[status] = _paginationState[status] || {};
      _paginationState[status][type] = _categoriesData[status][type].length > paginationDelta ? paginationDelta : _categoriesData[status][type].length;
    }, undefined);
    setCategoriesData(_categoriesData);
    setPaginationState(_paginationState);
  }, [articles]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var _categoriesData$curre, _categoriesData$curre2;

    setPaginationLimit((categoriesData === null || categoriesData === void 0 ? void 0 : (_categoriesData$curre = categoriesData[currentSelectedStatus.key]) === null || _categoriesData$curre === void 0 ? void 0 : (_categoriesData$curre2 = _categoriesData$curre[currentSelectedType.key]) === null || _categoriesData$curre2 === void 0 ? void 0 : _categoriesData$curre2.length) || [].length);
  }, [selectedType, selectedStatus, categoriesData, paginationState, currentSelectedStatus.key, currentSelectedType.key]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {}, [paginationState]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var _categoriesData$curre3, _paginationState$curr;

    var data = (categoriesData === null || categoriesData === void 0 ? void 0 : (_categoriesData$curre3 = categoriesData[currentSelectedStatus.key]) === null || _categoriesData$curre3 === void 0 ? void 0 : _categoriesData$curre3[currentSelectedType.key]) || [];
    var paginationCount = paginationState === null || paginationState === void 0 ? void 0 : (_paginationState$curr = paginationState[currentSelectedStatus.key]) === null || _paginationState$curr === void 0 ? void 0 : _paginationState$curr[currentSelectedType.key];
    var newPaginatedCategoryData = data.filter(function (item, i) {
      return i < paginationCount;
    });
    setPaginatedCategoryData(newPaginatedCategoryData);
  }, [selectedType, selectedStatus, categoriesData, paginationLimit, paginationState, currentSelectedStatus.key, currentSelectedType.key]);

  var updatePaginationState = function updatePaginationState() {
    var _paginationState$curr2;

    var paginationCount = paginationState === null || paginationState === void 0 ? void 0 : (_paginationState$curr2 = paginationState[currentSelectedStatus.key]) === null || _paginationState$curr2 === void 0 ? void 0 : _paginationState$curr2[currentSelectedType.key];

    if (paginationCount < paginationLimit) {
      var itemsLeft = paginationLimit - paginationCount;

      if (itemsLeft >= paginationDelta) {
        setPaginationState(function (prevPaginationState) {
          return _objectSpread(_objectSpread({}, prevPaginationState), {}, (0,C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, currentSelectedStatus.key, _objectSpread(_objectSpread({}, prevPaginationState[currentSelectedStatus.key]), {}, (0,C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, currentSelectedType.key, paginationCount + paginationDelta))));
        });
      } else {
        setPaginationState(function (prevPaginationState) {
          return _objectSpread(_objectSpread({}, prevPaginationState), {}, (0,C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, currentSelectedStatus.key, _objectSpread(_objectSpread({}, prevPaginationState[currentSelectedStatus.key]), {}, (0,C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, currentSelectedType.key, paginationCount + itemsLeft))));
        });
      }
    }
  };

  var getIcon = function getIcon(type) {
    var image;
    missions.forEach(function (element) {
      if (element.attributes.type === type) {
        image = element.attributes.image;
      }
    });
    return image;
  };

  var renderPaginationButton = function renderPaginationButton() {
    var _categoriesData$curre4, _categoriesData$curre5;

    var maxPosition = categoriesData === null || categoriesData === void 0 ? void 0 : (_categoriesData$curre4 = categoriesData[currentSelectedStatus.key]) === null || _categoriesData$curre4 === void 0 ? void 0 : (_categoriesData$curre5 = _categoriesData$curre4[currentSelectedType.key]) === null || _categoriesData$curre5 === void 0 ? void 0 : _categoriesData$curre5.length;
    var currentPosition = paginatedCategoryData.length;

    if (currentPosition < maxPosition) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "articles__pagination",
        onClick: updatePaginationState,
        children: projects.attributes.projectsData.paginationButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }, _this);
    }
  };

  var renderArticles = function renderArticles() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "articles__projects uk-grid uk-child-width-1-2",
      children: paginatedCategoryData.map(function (project, k) {
        if (lang === "uk") {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "articles__projects-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/article/".concat(project.attributes.slug),
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
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "projects-item__bg",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
                      image: project.attributes.image
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
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
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      className: "projects-item-label",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
                        image: projects.attributes[iconKeyMap[currentSelectedStatus.key]]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 131,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: "projects-item-label__text",
                        children: currentSelectedStatus.label
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "projects-item__content",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                      className: "projects-item__title",
                      children: project.attributes.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "projects-item__desc",
                      children: project.attributes.description
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "project-item__next",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
                      image: projects.attributes.iconNext
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 19
            }, _this)
          }, k, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 17
          }, _this);
        } else {
          console.log('else articles');
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "articles__projects-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "".concat(lang, "/article/").concat(project.attributes.slug),
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
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "projects-item__bg",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
                      image: project.attributes.image
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
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
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 171,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      className: "projects-item-label",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
                        image: projects.attributes[iconKeyMap[currentSelectedStatus.key]]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 177,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: "projects-item-label__text",
                        children: currentSelectedStatus.label
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 184,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "projects-item__content",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                      className: "projects-item__title",
                      children: project.attributes.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 190,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "projects-item__desc",
                      children: project.attributes.description
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "project-item__next",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
                      image: projects.attributes.iconNext
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 19
            }, _this)
          }, k, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 17
          }, _this);
        }
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "articles",
    id: "projects-".concat(lang),
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "articles__statuses",
          children: projects.attributes.projectsData.statuses.map(function (status, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "articles__statuses-item ".concat(i === selectedStatus ? "articles__statuses-item_active" : ""),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: setSelectedStatus.bind(_this, i),
                children: status.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 19
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "articles__types",
        children: projects.attributes.projectsData.types.map(function (type, j) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "articles__types-item ".concat(j === selectedType ? "articles__types-item_active" : ""),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "types__button",
              onClick: setSelectedType.bind(_this, j),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_4__.default, {
                image: getIcon(type.key)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: type.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 17
            }, _this)
          }, j, false, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, _this), renderArticles(), renderPaginationButton()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 212,
    columnNumber: 5
  }, _this);
};

_s(Articles, "1CwjAooNHiMJIhxqUwKFJ3gnKlk=");

_c = Articles;
/* harmony default export */ __webpack_exports__["default"] = (Articles);

var _c;

$RefreshReg$(_c, "Articles");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcnRpY2xlcy5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlcyIsImFydGljbGVzIiwicHJvamVjdHMiLCJtaXNzaW9ucyIsImxhbmciLCJ1c2VTdGF0ZSIsInNlbGVjdGVkU3RhdHVzIiwic2V0U2VsZWN0ZWRTdGF0dXMiLCJzZWxlY3RlZFR5cGUiLCJzZXRTZWxlY3RlZFR5cGUiLCJwYWdpbmF0aW9uU3RhdGUiLCJzZXRQYWdpbmF0aW9uU3RhdGUiLCJwYWdpbmF0aW9uTGltaXQiLCJzZXRQYWdpbmF0aW9uTGltaXQiLCJjYXRlZ29yaWVzRGF0YSIsInNldENhdGVnb3JpZXNEYXRhIiwicGFnaW5hdGVkQ2F0ZWdvcnlEYXRhIiwic2V0UGFnaW5hdGVkQ2F0ZWdvcnlEYXRhIiwiY3VycmVudFNlbGVjdGVkU3RhdHVzIiwiYXR0cmlidXRlcyIsInByb2plY3RzRGF0YSIsInN0YXR1c2VzIiwiY3VycmVudFNlbGVjdGVkVHlwZSIsInR5cGVzIiwicGFnaW5hdGlvbkRlbHRhIiwiaWNvbktleU1hcCIsImluUHJvZ3Jlc3MiLCJkb25lIiwidXNlRWZmZWN0IiwiX2NhdGVnb3JpZXNEYXRhIiwiX3BhZ2luYXRpb25TdGF0ZSIsInJlZHVjZSIsImFjYyIsImFydGljbGUiLCJzdGF0dXMiLCJ0eXBlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwia2V5IiwiZGF0YSIsInBhZ2luYXRpb25Db3VudCIsIm5ld1BhZ2luYXRlZENhdGVnb3J5RGF0YSIsImZpbHRlciIsIml0ZW0iLCJpIiwidXBkYXRlUGFnaW5hdGlvblN0YXRlIiwiaXRlbXNMZWZ0IiwicHJldlBhZ2luYXRpb25TdGF0ZSIsImdldEljb24iLCJpbWFnZSIsImZvckVhY2giLCJlbGVtZW50IiwicmVuZGVyUGFnaW5hdGlvbkJ1dHRvbiIsIm1heFBvc2l0aW9uIiwiY3VycmVudFBvc2l0aW9uIiwicGFnaW5hdGlvbkJ1dHRvbiIsInJlbmRlckFydGljbGVzIiwibWFwIiwicHJvamVjdCIsImsiLCJzbHVnIiwidmFsdWUiLCJsYWJlbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uTmV4dCIsImNvbnNvbGUiLCJsb2ciLCJiaW5kIiwiaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE0QztBQUFBOztBQUFBLE1BQXpDQyxRQUF5QyxRQUF6Q0EsUUFBeUM7QUFBQSxNQUEvQkMsUUFBK0IsUUFBL0JBLFFBQStCO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDZkMsK0NBQVEsQ0FBQyxDQUFELENBRE87QUFBQSxNQUNwREMsY0FEb0Q7QUFBQSxNQUNwQ0MsaUJBRG9DOztBQUFBLG1CQUVuQkYsK0NBQVEsQ0FBQyxDQUFELENBRlc7QUFBQSxNQUVwREcsWUFGb0Q7QUFBQSxNQUV0Q0MsZUFGc0M7O0FBQUEsbUJBR2JKLCtDQUFRLENBQUMsRUFBRCxDQUhLO0FBQUEsTUFHcERLLGVBSG9EO0FBQUEsTUFHbkNDLGtCQUhtQzs7QUFBQSxtQkFJYk4sK0NBQVEsQ0FBQyxDQUFELENBSks7QUFBQSxNQUlwRE8sZUFKb0Q7QUFBQSxNQUluQ0Msa0JBSm1DOztBQUFBLG1CQUtmUiwrQ0FBUSxDQUFDLEVBQUQsQ0FMTztBQUFBLE1BS3BEUyxjQUxvRDtBQUFBLE1BS3BDQyxpQkFMb0M7O0FBQUEsbUJBTURWLCtDQUFRLENBQUMsRUFBRCxDQU5QO0FBQUEsTUFNcERXLHFCQU5vRDtBQUFBLE1BTTdCQyx3QkFONkI7O0FBUTNELE1BQU1DLHFCQUFxQixHQUFHaEIsUUFBUSxDQUFDaUIsVUFBVCxDQUFvQkMsWUFBcEIsQ0FBaUNDLFFBQWpDLENBQTBDZixjQUExQyxDQUE5QjtBQUNBLE1BQU1nQixtQkFBbUIsR0FBR3BCLFFBQVEsQ0FBQ2lCLFVBQVQsQ0FBb0JDLFlBQXBC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aUIsVUFBVCxDQUFvQkMsWUFBcEIsQ0FBaUNHLEtBQWpDLENBQXVDa0MsR0FBdkMsQ0FBMkMsVUFBQ3RCLElBQUQsRUFBT2tDLENBQVAsRUFBYTtBQUN2RCw4QkFDRTtBQUVFLHFCQUFTLGlDQUNQQSxDQUFDLEtBQUs3RCxZQUFOLEdBQXFCLDZCQUFyQixHQUFxRCxFQUQ5QyxDQUZYO0FBQUEsbUNBTUU7QUFDRSx1QkFBUyxFQUFDLGVBRFo7QUFFRSxxQkFBTyxFQUFFQyxlQUFlLENBQUMyRCxJQUFoQixDQUFxQixLQUFyQixFQUEwQkMsQ0FBMUIsQ0FGWDtBQUFBLHNDQUlFLDhEQUFDLDJDQUFEO0FBQVcscUJBQUssRUFBRXJCLE9BQU8sQ0FBQ2IsSUFBSSxDQUFDRyxHQUFOO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkYsZUFLRTtBQUFBLDBCQUFPSCxJQUFJLENBQUMwQjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkYsYUFDT1EsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBZ0JELFNBakJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRixFQTBDR2IsY0FBYyxFQTFDakIsRUEyQ0dKLHNCQUFzQixFQTNDekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaURELENBOVBEOztHQUFNcEQsUTs7S0FBQUEsUTtBQWdRTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YmZlZWQ2YjZhYTc4OTE4MmRjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuY29uc3QgQXJ0aWNsZXMgPSAoeyBhcnRpY2xlcywgcHJvamVjdHMsIG1pc3Npb25zLCBsYW5nIH0pID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkU3RhdHVzLCBzZXRTZWxlY3RlZFN0YXR1c10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbc2VsZWN0ZWRUeXBlLCBzZXRTZWxlY3RlZFR5cGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3BhZ2luYXRpb25TdGF0ZSwgc2V0UGFnaW5hdGlvblN0YXRlXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbcGFnaW5hdGlvbkxpbWl0LCBzZXRQYWdpbmF0aW9uTGltaXRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2NhdGVnb3JpZXNEYXRhLCBzZXRDYXRlZ29yaWVzRGF0YV0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW3BhZ2luYXRlZENhdGVnb3J5RGF0YSwgc2V0UGFnaW5hdGVkQ2F0ZWdvcnlEYXRhXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IGN1cnJlbnRTZWxlY3RlZFN0YXR1cyA9IHByb2plY3RzLmF0dHJpYnV0ZXMucHJvamVjdHNEYXRhLnN0YXR1c2VzW3NlbGVjdGVkU3RhdHVzXVxuICBjb25zdCBjdXJyZW50U2VsZWN0ZWRUeXBlID0gcHJvamVjdHMuYXR0cmlidXRlcy5wcm9qZWN0c0RhdGEudHlwZXNbc2VsZWN0ZWRUeXBlXVxuICBcbiAgY29uc3QgcGFnaW5hdGlvbkRlbHRhID0gMlxuXG4gIGNvbnN0IGljb25LZXlNYXAgPSB7XG4gICAgaW5Qcm9ncmVzczogXCJpY29uSW5Qcm9ncmVzc1wiLFxuICAgIGRvbmU6IFwiaWNvbkRvbmVcIixcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgX2NhdGVnb3JpZXNEYXRhID0ge31cbiAgICBjb25zdCBfcGFnaW5hdGlvblN0YXRlID0ge31cbiAgICBcbiAgICBhcnRpY2xlcy5yZWR1Y2UoKGFjYywgYXJ0aWNsZSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdHVzID0gYXJ0aWNsZS5hdHRyaWJ1dGVzLnN0YXR1cztcbiAgICAgIGNvbnN0IHR5cGUgPSBhcnRpY2xlLmF0dHJpYnV0ZXMudHlwZTtcblxuICAgICAgX2NhdGVnb3JpZXNEYXRhW3N0YXR1c10gPSBfY2F0ZWdvcmllc0RhdGFbc3RhdHVzXSB8fCB7fVxuICAgICAgX2NhdGVnb3JpZXNEYXRhW3N0YXR1c11bdHlwZV0gPSBfY2F0ZWdvcmllc0RhdGFbc3RhdHVzXVt0eXBlXSB8fCBbXVxuICAgICAgX2NhdGVnb3JpZXNEYXRhW3N0YXR1c11bdHlwZV0gPSBbLi4uX2NhdGVnb3JpZXNEYXRhW3N0YXR1c11bdHlwZV0sIGFydGljbGVdXG5cbiAgICAgIF9wYWdpbmF0aW9uU3RhdGVbc3RhdHVzXSA9IF9wYWdpbmF0aW9uU3RhdGVbc3RhdHVzXSB8fCB7fVxuICAgICAgX3BhZ2luYXRpb25TdGF0ZVtzdGF0dXNdW3R5cGVdID0gX2NhdGVnb3JpZXNEYXRhW3N0YXR1c11bdHlwZV0ubGVuZ3RoID4gcGFnaW5hdGlvbkRlbHRhID8gcGFnaW5hdGlvbkRlbHRhIDogX2NhdGVnb3JpZXNEYXRhW3N0YXR1c11bdHlwZV0ubGVuZ3RoXG4gICAgfSwgdW5kZWZpbmVkKVxuXG4gICAgc2V0Q2F0ZWdvcmllc0RhdGEoX2NhdGVnb3JpZXNEYXRhKVxuICAgIHNldFBhZ2luYXRpb25TdGF0ZShfcGFnaW5hdGlvblN0YXRlKVxuICB9LCBbYXJ0aWNsZXNdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGFnaW5hdGlvbkxpbWl0KGNhdGVnb3JpZXNEYXRhPy5bY3VycmVudFNlbGVjdGVkU3RhdHVzLmtleV0/LltjdXJyZW50U2VsZWN0ZWRUeXBlLmtleV0/Lmxlbmd0aCB8fCBbXS5sZW5ndGgpXG4gIH0sIFtzZWxlY3RlZFR5cGUsIHNlbGVjdGVkU3RhdHVzLCBjYXRlZ29yaWVzRGF0YSwgcGFnaW5hdGlvblN0YXRlLCBjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5LCBjdXJyZW50U2VsZWN0ZWRUeXBlLmtleV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgfSwgW3BhZ2luYXRpb25TdGF0ZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gY2F0ZWdvcmllc0RhdGE/LltjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5XT8uW2N1cnJlbnRTZWxlY3RlZFR5cGUua2V5XSB8fCBbXVxuICAgIGNvbnN0IHBhZ2luYXRpb25Db3VudCA9IHBhZ2luYXRpb25TdGF0ZT8uW2N1cnJlbnRTZWxlY3RlZFN0YXR1cy5rZXldPy5bY3VycmVudFNlbGVjdGVkVHlwZS5rZXldXG4gICAgY29uc3QgbmV3UGFnaW5hdGVkQ2F0ZWdvcnlEYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0sIGkpID0+IGkgPCBwYWdpbmF0aW9uQ291bnQpXG5cbiAgICBzZXRQYWdpbmF0ZWRDYXRlZ29yeURhdGEobmV3UGFnaW5hdGVkQ2F0ZWdvcnlEYXRhKVxuICB9LCBbc2VsZWN0ZWRUeXBlLCBzZWxlY3RlZFN0YXR1cywgY2F0ZWdvcmllc0RhdGEsIHBhZ2luYXRpb25MaW1pdCwgcGFnaW5hdGlvblN0YXRlLCBjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5LCBjdXJyZW50U2VsZWN0ZWRUeXBlLmtleV0pXG5cbiAgY29uc3QgdXBkYXRlUGFnaW5hdGlvblN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2luYXRpb25Db3VudCA9IHBhZ2luYXRpb25TdGF0ZT8uW2N1cnJlbnRTZWxlY3RlZFN0YXR1cy5rZXldPy5bY3VycmVudFNlbGVjdGVkVHlwZS5rZXldXG4gICAgaWYgKHBhZ2luYXRpb25Db3VudCA8IHBhZ2luYXRpb25MaW1pdCkge1xuICAgICAgY29uc3QgaXRlbXNMZWZ0ID0gcGFnaW5hdGlvbkxpbWl0IC0gcGFnaW5hdGlvbkNvdW50XG4gICAgICBpZiAoaXRlbXNMZWZ0ID49IHBhZ2luYXRpb25EZWx0YSkge1xuICAgICAgICBzZXRQYWdpbmF0aW9uU3RhdGUoKHByZXZQYWdpbmF0aW9uU3RhdGUpID0+ICh7XG4gICAgICAgICAgLi4ucHJldlBhZ2luYXRpb25TdGF0ZSxcbiAgICAgICAgICBbY3VycmVudFNlbGVjdGVkU3RhdHVzLmtleV06IHtcbiAgICAgICAgICAgIC4uLnByZXZQYWdpbmF0aW9uU3RhdGVbY3VycmVudFNlbGVjdGVkU3RhdHVzLmtleV0sXG4gICAgICAgICAgICBbY3VycmVudFNlbGVjdGVkVHlwZS5rZXldOiBwYWdpbmF0aW9uQ291bnQgKyBwYWdpbmF0aW9uRGVsdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRQYWdpbmF0aW9uU3RhdGUoKHByZXZQYWdpbmF0aW9uU3RhdGUpID0+ICh7XG4gICAgICAgICAgLi4ucHJldlBhZ2luYXRpb25TdGF0ZSxcbiAgICAgICAgICBbY3VycmVudFNlbGVjdGVkU3RhdHVzLmtleV06IHtcbiAgICAgICAgICAgIC4uLnByZXZQYWdpbmF0aW9uU3RhdGVbY3VycmVudFNlbGVjdGVkU3RhdHVzLmtleV0sXG4gICAgICAgICAgICBbY3VycmVudFNlbGVjdGVkVHlwZS5rZXldOiBwYWdpbmF0aW9uQ291bnQgKyBpdGVtc0xlZnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0SWNvbiA9ICh0eXBlKSA9PiB7XG4gICAgbGV0IGltYWdlXG4gICAgbWlzc2lvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuYXR0cmlidXRlcy50eXBlID09PSB0eXBlKSB7XG4gICAgICAgIGltYWdlID0gZWxlbWVudC5hdHRyaWJ1dGVzLmltYWdlXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaW1hZ2VcbiAgfVxuXG4gIGNvbnN0IHJlbmRlclBhZ2luYXRpb25CdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgbWF4UG9zaXRpb24gPSBjYXRlZ29yaWVzRGF0YT8uW2N1cnJlbnRTZWxlY3RlZFN0YXR1cy5rZXldPy5bY3VycmVudFNlbGVjdGVkVHlwZS5rZXldPy5sZW5ndGhcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBwYWdpbmF0ZWRDYXRlZ29yeURhdGEubGVuZ3RoXG4gICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA8IG1heFBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGVzX19wYWdpbmF0aW9uXCJcbiAgICAgICAgICBvbkNsaWNrPXt1cGRhdGVQYWdpbmF0aW9uU3RhdGV9XG4gICAgICAgID5cbiAgICAgICAgICB7cHJvamVjdHMuYXR0cmlidXRlcy5wcm9qZWN0c0RhdGEucGFnaW5hdGlvbkJ1dHRvbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVuZGVyQXJ0aWNsZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJhcnRpY2xlc19fcHJvamVjdHMgdWstZ3JpZCB1ay1jaGlsZC13aWR0aC0xLTJcIj5cbiAgICAgICAge3BhZ2luYXRlZENhdGVnb3J5RGF0YS5tYXAoKHByb2plY3QsIGspID0+IHtcbiAgICAgICAgICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtrfSBjbGFzc05hbWU9XCJhcnRpY2xlc19fcHJvamVjdHMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hcnRpY2xlLyR7cHJvamVjdC5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fZmlsdGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX2JnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3Byb2plY3QuYXR0cmlidXRlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX2xhYmVsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW0tbGFiZWxfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U2VsZWN0ZWRUeXBlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzLmF0dHJpYnV0ZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbktleU1hcFtjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0cy1pdGVtLWxhYmVsX190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNlbGVjdGVkU3RhdHVzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuYXR0cmlidXRlcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWl0ZW1fX25leHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17cHJvamVjdHMuYXR0cmlidXRlcy5pY29uTmV4dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vsc2UgYXJ0aWNsZXMnKVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2t9IGNsYXNzTmFtZT1cImFydGljbGVzX19wcm9qZWN0cy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtsYW5nfS9hcnRpY2xlLyR7cHJvamVjdC5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fZmlsdGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX2JnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3Byb2plY3QuYXR0cmlidXRlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX2xhYmVsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW0tbGFiZWxfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U2VsZWN0ZWRUeXBlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzLmF0dHJpYnV0ZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbktleU1hcFtjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0cy1pdGVtLWxhYmVsX190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNlbGVjdGVkU3RhdHVzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW1fX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuYXR0cmlidXRlcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWl0ZW1fX25leHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17cHJvamVjdHMuYXR0cmlidXRlcy5pY29uTmV4dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpY2xlc1wiIGlkPXtgcHJvamVjdHMtJHtsYW5nfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlc19fY29udGVudCB1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZXNfX2hlYWRlclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhcnRpY2xlc19fdGl0bGVcIj5cbiAgICAgICAgICAgIHtwcm9qZWN0cy5hdHRyaWJ1dGVzLnByb2plY3RzRGF0YS50aXRsZX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhcnRpY2xlc19fc3RhdHVzZXNcIj5cbiAgICAgICAgICAgIHtwcm9qZWN0cy5hdHRyaWJ1dGVzLnByb2plY3RzRGF0YS5zdGF0dXNlcy5tYXAoKHN0YXR1cywgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXJ0aWNsZXNfX3N0YXR1c2VzLWl0ZW0gJHtcbiAgICAgICAgICAgICAgICAgICAgaSA9PT0gc2VsZWN0ZWRTdGF0dXMgPyBcImFydGljbGVzX19zdGF0dXNlcy1pdGVtX2FjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZXRTZWxlY3RlZFN0YXR1cy5iaW5kKHRoaXMsIGkpfT5cbiAgICAgICAgICAgICAgICAgICAge3N0YXR1cy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYXJ0aWNsZXNfX3R5cGVzXCI+XG4gICAgICAgICAge3Byb2plY3RzLmF0dHJpYnV0ZXMucHJvamVjdHNEYXRhLnR5cGVzLm1hcCgodHlwZSwgaikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtqfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFydGljbGVzX190eXBlcy1pdGVtICR7XG4gICAgICAgICAgICAgICAgICBqID09PSBzZWxlY3RlZFR5cGUgPyBcImFydGljbGVzX190eXBlcy1pdGVtX2FjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHlwZXNfX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZXRTZWxlY3RlZFR5cGUuYmluZCh0aGlzLGopfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2dldEljb24odHlwZS5rZXkpfSAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3R5cGUudmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7cmVuZGVyQXJ0aWNsZXMoKX1cbiAgICAgICAge3JlbmRlclBhZ2luYXRpb25CdXR0b24oKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==