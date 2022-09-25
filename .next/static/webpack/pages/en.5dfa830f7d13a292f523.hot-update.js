self["webpackHotUpdate_N_E"]("pages/en",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcnRpY2xlcy5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlcyIsImFydGljbGVzIiwicHJvamVjdHMiLCJtaXNzaW9ucyIsImxhbmciLCJ1c2VTdGF0ZSIsInNlbGVjdGVkU3RhdHVzIiwic2V0U2VsZWN0ZWRTdGF0dXMiLCJzZWxlY3RlZFR5cGUiLCJzZXRTZWxlY3RlZFR5cGUiLCJwYWdpbmF0aW9uU3RhdGUiLCJzZXRQYWdpbmF0aW9uU3RhdGUiLCJwYWdpbmF0aW9uTGltaXQiLCJzZXRQYWdpbmF0aW9uTGltaXQiLCJjYXRlZ29yaWVzRGF0YSIsInNldENhdGVnb3JpZXNEYXRhIiwicGFnaW5hdGVkQ2F0ZWdvcnlEYXRhIiwic2V0UGFnaW5hdGVkQ2F0ZWdvcnlEYXRhIiwiY3VycmVudFNlbGVjdGVkU3RhdHVzIiwiYXR0cmlidXRlcyIsInByb2plY3RzRGF0YSIsInN0YXR1c2VzIiwiY3VycmVudFNlbGVjdGVkVHlwZSIsInR5cGVzIiwicGFnaW5hdGlvbkRlbHRhIiwiaWNvbktleU1hcCIsImluUHJvZ3Jlc3MiLCJkb25lIiwidXNlRWZmZWN0IiwiX2NhdGVnb3JpZXNEYXRhIiwiX3BhZ2luYXRpb25TdGF0ZSIsInJlZHVjZSIsImFjYyIsImFydGljbGUiLCJzdGF0dXMiLCJ0eXBlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwia2V5IiwiZGF0YSIsInBhZ2luYXRpb25Db3VudCIsIm5ld1BhZ2luYXRlZENhdGVnb3J5RGF0YSIsImZpbHRlciIsIml0ZW0iLCJpIiwidXBkYXRlUGFnaW5hdGlvblN0YXRlIiwiaXRlbXNMZWZ0IiwicHJldlBhZ2luYXRpb25TdGF0ZSIsImdldEljb24iLCJpbWFnZSIsImZvckVhY2giLCJlbGVtZW50IiwicmVuZGVyUGFnaW5hdGlvbkJ1dHRvbiIsIm1heFBvc2l0aW9uIiwiY3VycmVudFBvc2l0aW9uIiwicGFnaW5hdGlvbkJ1dHRvbiIsInJlbmRlckFydGljbGVzIiwibWFwIiwicHJvamVjdCIsImsiLCJzbHVnIiwidmFsdWUiLCJsYWJlbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uTmV4dCIsImNvbnNvbGUiLCJsb2ciLCJiaW5kIiwiaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE0QztBQUFBOztBQUFBLE1BQXpDQyxRQUF5QyxRQUF6Q0EsUUFBeUM7QUFBQSxNQUEvQkMsUUFBK0IsUUFBL0JBLFFBQStCO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDZkMsK0NBQVEsQ0FBQyxDQUFELENBRE87QUFBQSxNQUNwREMsY0FEb0Q7QUFBQSxNQUNwQ0MsaUJBRG9DOztBQUFBLG1CQUVuQkYsK0NBQVEsQ0FBQyxDQUFELENBRlc7QUFBQSxNQUVwREcsWUFGb0Q7QUFBQSxNQUV0Q0MsZUFGc0M7O0FBQUEsbUJBR2JKLCtDQUFRLENBQUMsRUFBRCxDQUhLO0FBQUEsTUFHcERLLGVBSG9EO0FBQUEsTUFHbkNDLGtCQUhtQzs7QUFBQSxtQkFJYk4sK0NBQVEsQ0FBQyxDQUFELENBSks7QUFBQSxNQUlwRE8sZUFKb0Q7QUFBQSxNQUluQ0Msa0JBSm1DOztBQUFBLG1CQUtmUiwrQ0FBUSxDQUFDLEVBQUQsQ0FMTztBQUFBLE1BS3BEUyxjQUxvRDtBQUFBLE1BS3BDQyxpQkFMb0M7O0FBQUEsbUJBTURWLCtDQUFRLENBQUMsRUFBRCxDQU5QO0FBQUEsTUFNcERXLHFCQU5vRDtBQUFBLE1BTTdCQyx3QkFONkI7O0FBUTNELE1BQU1DLHFCQUFxQixHQUFHaEIsUUFBUSxDQUFDaUIsVUFBVCxDQUFvQkMsWUFBcEIsQ0FBaUNDLFFBQWpDLENBQTBDZixjQUExQyxDQUE5QjtBQUNBLE1BQU1nQixtQkFBbUIsR0FBR3BCLFFBQVEsQ0FBQ2lCLFVBQVQsQ0FBb0JDLFlBQXBC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LENBQW9CQyxZQUFwQixDQUFpQ0csS0FBakMsQ0FBdUNrQyxHQUF2QyxDQUEyQyxVQUFDdEIsSUFBRCxFQUFPa0MsQ0FBUCxFQUFhO0FBQ3ZELDhCQUNFO0FBRUUscUJBQVMsaUNBQ1BBLENBQUMsS0FBSzdELFlBQU4sR0FBcUIsNkJBQXJCLEdBQXFELEVBRDlDLENBRlg7QUFBQSxtQ0FNRTtBQUNFLHVCQUFTLEVBQUMsZUFEWjtBQUVFLHFCQUFPLEVBQUVDLGVBQWUsQ0FBQzJELElBQWhCLENBQXFCLEtBQXJCLEVBQTBCQyxDQUExQixDQUZYO0FBQUEsc0NBSUUsOERBQUMsMkNBQUQ7QUFBVyxxQkFBSyxFQUFFckIsT0FBTyxDQUFDYixJQUFJLENBQUNHLEdBQU47QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQUtFO0FBQUEsMEJBQU9ILElBQUksQ0FBQzBCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORixhQUNPUSxDQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFnQkQsU0FqQkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGLEVBMENHYixjQUFjLEVBMUNqQixFQTJDR0osc0JBQXNCLEVBM0N6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpREQsQ0E5UEQ7O0dBQU1wRCxROztLQUFBQSxRO0FBZ1FOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VuLjVkZmE4MzBmN2QxM2EyOTJmNTIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuL2ltYWdlXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5jb25zdCBBcnRpY2xlcyA9ICh7IGFydGljbGVzLCBwcm9qZWN0cywgbWlzc2lvbnMsIGxhbmcgfSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRTdGF0dXMsIHNldFNlbGVjdGVkU3RhdHVzXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtzZWxlY3RlZFR5cGUsIHNldFNlbGVjdGVkVHlwZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbcGFnaW5hdGlvblN0YXRlLCBzZXRQYWdpbmF0aW9uU3RhdGVdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtwYWdpbmF0aW9uTGltaXQsIHNldFBhZ2luYXRpb25MaW1pdF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbY2F0ZWdvcmllc0RhdGEsIHNldENhdGVnb3JpZXNEYXRhXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbcGFnaW5hdGVkQ2F0ZWdvcnlEYXRhLCBzZXRQYWdpbmF0ZWRDYXRlZ29yeURhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3QgY3VycmVudFNlbGVjdGVkU3RhdHVzID0gcHJvamVjdHMuYXR0cmlidXRlcy5wcm9qZWN0c0RhdGEuc3RhdHVzZXNbc2VsZWN0ZWRTdGF0dXNdXG4gIGNvbnN0IGN1cnJlbnRTZWxlY3RlZFR5cGUgPSBwcm9qZWN0cy5hdHRyaWJ1dGVzLnByb2plY3RzRGF0YS50eXBlc1tzZWxlY3RlZFR5cGVdXG4gIFxuICBjb25zdCBwYWdpbmF0aW9uRGVsdGEgPSAyXG5cbiAgY29uc3QgaWNvbktleU1hcCA9IHtcbiAgICBpblByb2dyZXNzOiBcImljb25JblByb2dyZXNzXCIsXG4gICAgZG9uZTogXCJpY29uRG9uZVwiLFxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBfY2F0ZWdvcmllc0RhdGEgPSB7fVxuICAgIGNvbnN0IF9wYWdpbmF0aW9uU3RhdGUgPSB7fVxuICAgIFxuICAgIGFydGljbGVzLnJlZHVjZSgoYWNjLCBhcnRpY2xlKSA9PiB7XG4gICAgICBjb25zdCBzdGF0dXMgPSBhcnRpY2xlLmF0dHJpYnV0ZXMuc3RhdHVzO1xuICAgICAgY29uc3QgdHlwZSA9IGFydGljbGUuYXR0cmlidXRlcy50eXBlO1xuXG4gICAgICBfY2F0ZWdvcmllc0RhdGFbc3RhdHVzXSA9IF9jYXRlZ29yaWVzRGF0YVtzdGF0dXNdIHx8IHt9XG4gICAgICBfY2F0ZWdvcmllc0RhdGFbc3RhdHVzXVt0eXBlXSA9IF9jYXRlZ29yaWVzRGF0YVtzdGF0dXNdW3R5cGVdIHx8IFtdXG4gICAgICBfY2F0ZWdvcmllc0RhdGFbc3RhdHVzXVt0eXBlXSA9IFsuLi5fY2F0ZWdvcmllc0RhdGFbc3RhdHVzXVt0eXBlXSwgYXJ0aWNsZV1cblxuICAgICAgX3BhZ2luYXRpb25TdGF0ZVtzdGF0dXNdID0gX3BhZ2luYXRpb25TdGF0ZVtzdGF0dXNdIHx8IHt9XG4gICAgICBfcGFnaW5hdGlvblN0YXRlW3N0YXR1c11bdHlwZV0gPSBfY2F0ZWdvcmllc0RhdGFbc3RhdHVzXVt0eXBlXS5sZW5ndGggPiBwYWdpbmF0aW9uRGVsdGEgPyBwYWdpbmF0aW9uRGVsdGEgOiBfY2F0ZWdvcmllc0RhdGFbc3RhdHVzXVt0eXBlXS5sZW5ndGhcbiAgICB9LCB1bmRlZmluZWQpXG5cbiAgICBzZXRDYXRlZ29yaWVzRGF0YShfY2F0ZWdvcmllc0RhdGEpXG4gICAgc2V0UGFnaW5hdGlvblN0YXRlKF9wYWdpbmF0aW9uU3RhdGUpXG4gIH0sIFthcnRpY2xlc10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYWdpbmF0aW9uTGltaXQoY2F0ZWdvcmllc0RhdGE/LltjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5XT8uW2N1cnJlbnRTZWxlY3RlZFR5cGUua2V5XT8ubGVuZ3RoIHx8IFtdLmxlbmd0aClcbiAgfSwgW3NlbGVjdGVkVHlwZSwgc2VsZWN0ZWRTdGF0dXMsIGNhdGVnb3JpZXNEYXRhLCBwYWdpbmF0aW9uU3RhdGUsIGN1cnJlbnRTZWxlY3RlZFN0YXR1cy5rZXksIGN1cnJlbnRTZWxlY3RlZFR5cGUua2V5XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICB9LCBbcGFnaW5hdGlvblN0YXRlXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBjYXRlZ29yaWVzRGF0YT8uW2N1cnJlbnRTZWxlY3RlZFN0YXR1cy5rZXldPy5bY3VycmVudFNlbGVjdGVkVHlwZS5rZXldIHx8IFtdXG4gICAgY29uc3QgcGFnaW5hdGlvbkNvdW50ID0gcGFnaW5hdGlvblN0YXRlPy5bY3VycmVudFNlbGVjdGVkU3RhdHVzLmtleV0/LltjdXJyZW50U2VsZWN0ZWRUeXBlLmtleV1cbiAgICBjb25zdCBuZXdQYWdpbmF0ZWRDYXRlZ29yeURhdGEgPSBkYXRhLmZpbHRlcigoaXRlbSwgaSkgPT4gaSA8IHBhZ2luYXRpb25Db3VudClcblxuICAgIHNldFBhZ2luYXRlZENhdGVnb3J5RGF0YShuZXdQYWdpbmF0ZWRDYXRlZ29yeURhdGEpXG4gIH0sIFtzZWxlY3RlZFR5cGUsIHNlbGVjdGVkU3RhdHVzLCBjYXRlZ29yaWVzRGF0YSwgcGFnaW5hdGlvbkxpbWl0LCBwYWdpbmF0aW9uU3RhdGUsIGN1cnJlbnRTZWxlY3RlZFN0YXR1cy5rZXksIGN1cnJlbnRTZWxlY3RlZFR5cGUua2V5XSlcblxuICBjb25zdCB1cGRhdGVQYWdpbmF0aW9uU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnaW5hdGlvbkNvdW50ID0gcGFnaW5hdGlvblN0YXRlPy5bY3VycmVudFNlbGVjdGVkU3RhdHVzLmtleV0/LltjdXJyZW50U2VsZWN0ZWRUeXBlLmtleV1cbiAgICBpZiAocGFnaW5hdGlvbkNvdW50IDwgcGFnaW5hdGlvbkxpbWl0KSB7XG4gICAgICBjb25zdCBpdGVtc0xlZnQgPSBwYWdpbmF0aW9uTGltaXQgLSBwYWdpbmF0aW9uQ291bnRcbiAgICAgIGlmIChpdGVtc0xlZnQgPj0gcGFnaW5hdGlvbkRlbHRhKSB7XG4gICAgICAgIHNldFBhZ2luYXRpb25TdGF0ZSgocHJldlBhZ2luYXRpb25TdGF0ZSkgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2UGFnaW5hdGlvblN0YXRlLFxuICAgICAgICAgIFtjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5XToge1xuICAgICAgICAgICAgLi4ucHJldlBhZ2luYXRpb25TdGF0ZVtjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5XSxcbiAgICAgICAgICAgIFtjdXJyZW50U2VsZWN0ZWRUeXBlLmtleV06IHBhZ2luYXRpb25Db3VudCArIHBhZ2luYXRpb25EZWx0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFBhZ2luYXRpb25TdGF0ZSgocHJldlBhZ2luYXRpb25TdGF0ZSkgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2UGFnaW5hdGlvblN0YXRlLFxuICAgICAgICAgIFtjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5XToge1xuICAgICAgICAgICAgLi4ucHJldlBhZ2luYXRpb25TdGF0ZVtjdXJyZW50U2VsZWN0ZWRTdGF0dXMua2V5XSxcbiAgICAgICAgICAgIFtjdXJyZW50U2VsZWN0ZWRUeXBlLmtleV06IHBhZ2luYXRpb25Db3VudCArIGl0ZW1zTGVmdFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRJY29uID0gKHR5cGUpID0+IHtcbiAgICBsZXQgaW1hZ2VcbiAgICBtaXNzaW9ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5hdHRyaWJ1dGVzLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgaW1hZ2UgPSBlbGVtZW50LmF0dHJpYnV0ZXMuaW1hZ2VcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBpbWFnZVxuICB9XG5cbiAgY29uc3QgcmVuZGVyUGFnaW5hdGlvbkJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBtYXhQb3NpdGlvbiA9IGNhdGVnb3JpZXNEYXRhPy5bY3VycmVudFNlbGVjdGVkU3RhdHVzLmtleV0/LltjdXJyZW50U2VsZWN0ZWRUeXBlLmtleV0/Lmxlbmd0aFxuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHBhZ2luYXRlZENhdGVnb3J5RGF0YS5sZW5ndGhcbiAgICBpZiAoY3VycmVudFBvc2l0aW9uIDwgbWF4UG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZXNfX3BhZ2luYXRpb25cIlxuICAgICAgICAgIG9uQ2xpY2s9e3VwZGF0ZVBhZ2luYXRpb25TdGF0ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9qZWN0cy5hdHRyaWJ1dGVzLnByb2plY3RzRGF0YS5wYWdpbmF0aW9uQnV0dG9ufVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb25zdCByZW5kZXJBcnRpY2xlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT1cImFydGljbGVzX19wcm9qZWN0cyB1ay1ncmlkIHVrLWNoaWxkLXdpZHRoLTEtMlwiPlxuICAgICAgICB7cGFnaW5hdGVkQ2F0ZWdvcnlEYXRhLm1hcCgocHJvamVjdCwgaykgPT4ge1xuICAgICAgICAgICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2t9IGNsYXNzTmFtZT1cImFydGljbGVzX19wcm9qZWN0cy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FydGljbGUvJHtwcm9qZWN0LmF0dHJpYnV0ZXMuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1pdGVtX19maWx0ZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fYmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17cHJvamVjdC5hdHRyaWJ1dGVzLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fbGFiZWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9qZWN0cy1pdGVtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbS1sYWJlbF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTZWxlY3RlZFR5cGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMuYXR0cmlidXRlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uS2V5TWFwW2N1cnJlbnRTZWxlY3RlZFN0YXR1cy5rZXldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW0tbGFiZWxfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U2VsZWN0ZWRTdGF0dXMubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5hdHRyaWJ1dGVzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0cy1pdGVtX19kZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuYXR0cmlidXRlcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaXRlbV9fbmV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtwcm9qZWN0cy5hdHRyaWJ1dGVzLmljb25OZXh0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWxzZSBhcnRpY2xlcycpXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17a30gY2xhc3NOYW1lPVwiYXJ0aWNsZXNfX3Byb2plY3RzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake2xhbmd9L2FydGljbGUvJHtwcm9qZWN0LmF0dHJpYnV0ZXMuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1pdGVtX19maWx0ZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fYmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17cHJvamVjdC5hdHRyaWJ1dGVzLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fbGFiZWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9qZWN0cy1pdGVtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbS1sYWJlbF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTZWxlY3RlZFR5cGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMuYXR0cmlidXRlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uS2V5TWFwW2N1cnJlbnRTZWxlY3RlZFN0YXR1cy5rZXldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2plY3RzLWl0ZW0tbGFiZWxfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U2VsZWN0ZWRTdGF0dXMubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvamVjdHMtaXRlbV9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5hdHRyaWJ1dGVzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0cy1pdGVtX19kZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuYXR0cmlidXRlcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaXRlbV9fbmV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtwcm9qZWN0cy5hdHRyaWJ1dGVzLmljb25OZXh0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFydGljbGVzXCIgaWQ9XCJwcm9qZWN0c1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlc19fY29udGVudCB1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZXNfX2hlYWRlclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhcnRpY2xlc19fdGl0bGVcIj5cbiAgICAgICAgICAgIHtwcm9qZWN0cy5hdHRyaWJ1dGVzLnByb2plY3RzRGF0YS50aXRsZX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhcnRpY2xlc19fc3RhdHVzZXNcIj5cbiAgICAgICAgICAgIHtwcm9qZWN0cy5hdHRyaWJ1dGVzLnByb2plY3RzRGF0YS5zdGF0dXNlcy5tYXAoKHN0YXR1cywgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXJ0aWNsZXNfX3N0YXR1c2VzLWl0ZW0gJHtcbiAgICAgICAgICAgICAgICAgICAgaSA9PT0gc2VsZWN0ZWRTdGF0dXMgPyBcImFydGljbGVzX19zdGF0dXNlcy1pdGVtX2FjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZXRTZWxlY3RlZFN0YXR1cy5iaW5kKHRoaXMsIGkpfT5cbiAgICAgICAgICAgICAgICAgICAge3N0YXR1cy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYXJ0aWNsZXNfX3R5cGVzXCI+XG4gICAgICAgICAge3Byb2plY3RzLmF0dHJpYnV0ZXMucHJvamVjdHNEYXRhLnR5cGVzLm1hcCgodHlwZSwgaikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtqfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFydGljbGVzX190eXBlcy1pdGVtICR7XG4gICAgICAgICAgICAgICAgICBqID09PSBzZWxlY3RlZFR5cGUgPyBcImFydGljbGVzX190eXBlcy1pdGVtX2FjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHlwZXNfX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZXRTZWxlY3RlZFR5cGUuYmluZCh0aGlzLGopfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2dldEljb24odHlwZS5rZXkpfSAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3R5cGUudmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7cmVuZGVyQXJ0aWNsZXMoKX1cbiAgICAgICAge3JlbmRlclBhZ2luYXRpb25CdXR0b24oKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==