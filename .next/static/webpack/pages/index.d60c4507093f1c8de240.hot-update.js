self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/mission.js":
/*!*******************************!*\
  !*** ./components/mission.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\mission.js",
    _this = undefined;





var Mission = function Mission(_ref) {
  var sectionMission = _ref.sectionMission,
      missions = _ref.missions,
      missionSlides = _ref.missionSlides;
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mission-grid uk-grid uk-grid-medium",
        children: missions.map(function (missionItem, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "uk-scrollspy": "cls: uk-animation-slide-bottom",
            className: "mission-grid__item uk-width-1-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mission-card",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mission-card__image",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_1__.default, {
                  image: missionItem.attributes.image
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "mission-card__title",
                children: missionItem.attributes.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mission-card__description",
                children: missionItem.attributes.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 17
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mission__slider",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-position-relative uk-visible-toggle uk-light uk-slider uk-slider-container",
        tabIndex: "-1",
        "data-uk-slider": true,
        "data-autoplay": missionSlides[0].attributes.autoplay,
        "data-autoplay-interval": missionSlides[0].attributes.autoplayInterval,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-4@l",
          style: {
            willChange: "transform",
            transform: "translate3d(0px, 0px, 0px)"
          },
          children: missionSlides[0].attributes.slides.data.map(function (slide, i) {
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
                lineNumber: 52,
                columnNumber: 19
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "uk-position-center-left uk-position-small uk-icon uk-slidenav-previous uk-slidenav",
          href: "#",
          "data-uk-slidenav-previous": true,
          "data-uk-slider-item": "previous",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "uk-position-center-right uk-position-small uk-icon uk-slidenav-previous uk-slidenav uk-slidenav-next",
          href: "#",
          "data-uk-slidenav-next": true,
          "data-uk-slider-item": "next",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = Mission;
/* harmony default export */ __webpack_exports__["default"] = (Mission);

var _c;

$RefreshReg$(_c, "Mission");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9taXNzaW9uLmpzIl0sIm5hbWVzIjpbIk1pc3Npb24iLCJzZWN0aW9uTWlzc2lvbiIsIm1pc3Npb25zIiwibWlzc2lvblNsaWRlcyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsIm1hcCIsIm1pc3Npb25JdGVtIiwiaSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJhdXRvcGxheSIsImF1dG9wbGF5SW50ZXJ2YWwiLCJ3aWxsQ2hhbmdlIiwidHJhbnNmb3JtIiwic2xpZGVzIiwiZGF0YSIsInNsaWRlIiwiZ2V0U3RyYXBpVVJMIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlEO0FBQUEsTUFBOUNDLGNBQThDLFFBQTlDQSxjQUE4QztBQUFBLE1BQTlCQyxRQUE4QixRQUE5QkEsUUFBOEI7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9CO0FBQy9ELHNCQUNFO0FBQVMsYUFBUyxFQUFDLFNBQW5CO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsa0RBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsZ0JBQWQ7QUFBQSxrQkFBZ0NGLGNBQWMsQ0FBQ0csVUFBZixDQUEwQkM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLHFDQUFmO0FBQUEsa0JBQ0dILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLFdBQUQsRUFBY0MsQ0FBZCxFQUFvQjtBQUNoQyw4QkFDRTtBQUNFLDRCQUFhLGdDQURmO0FBRUUscUJBQVMsRUFBQyxpQ0FGWjtBQUFBLG1DQUtFO0FBQUssdUJBQVMsRUFBQyxjQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLHFCQUFmO0FBQUEsdUNBQ0UsOERBQUMsMkNBQUQ7QUFBVyx1QkFBSyxFQUFFRCxXQUFXLENBQUNILFVBQVosQ0FBdUJLO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUU7QUFBSSx5QkFBUyxFQUFDLHFCQUFkO0FBQUEsMEJBQ0dGLFdBQVcsQ0FBQ0gsVUFBWixDQUF1QkM7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQU9FO0FBQUcseUJBQVMsRUFBQywyQkFBYjtBQUFBLDBCQUNHRSxXQUFXLENBQUNILFVBQVosQ0FBdUJNO0FBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEYsYUFHT0YsQ0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBbUJELFNBcEJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBMkJFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsNkJBQ0U7QUFDRSxpQkFBUyxFQUFDLCtFQURaO0FBRUUsZ0JBQVEsRUFBQyxJQUZYO0FBR0UsOEJBSEY7QUFJRSx5QkFBZUwsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQkMsVUFBakIsQ0FBNEJPLFFBSjdDO0FBS0Usa0NBQXdCUixhQUFhLENBQUMsQ0FBRCxDQUFiLENBQWlCQyxVQUFqQixDQUE0QlEsZ0JBTHREO0FBQUEsZ0NBT0U7QUFDRSxtQkFBUyxFQUFDLDhFQURaO0FBRUUsZUFBSyxFQUFFO0FBQ0xDLHNCQUFVLEVBQUUsV0FEUDtBQUVMQyxxQkFBUyxFQUFFO0FBRk4sV0FGVDtBQUFBLG9CQU9HWCxhQUFhLENBQUMsQ0FBRCxDQUFiLENBQWlCQyxVQUFqQixDQUE0QlcsTUFBNUIsQ0FBbUNDLElBQW5DLENBQXdDVixHQUF4QyxDQUE0QyxVQUFDVyxLQUFELEVBQVFULENBQVIsRUFBYztBQUN6RCxnQ0FDRTtBQUFJLHNCQUFRLEVBQUMsSUFBYjtBQUFrQix1QkFBUyxFQUFDLFdBQTVCO0FBQUEscUNBQ0UsOERBQUMsbURBQUQ7QUFDRSxzQkFBTSxFQUFDLFlBRFQ7QUFFRSxxQkFBSyxFQUFDLE1BRlI7QUFHRSxzQkFBTSxFQUFDLE1BSFQ7QUFJRSx5QkFBUyxFQUFDLE9BSlo7QUFLRSxtQkFBRyxFQUFFVSxzREFBWSxDQUFDRCxLQUFLLENBQUNiLFVBQU4sQ0FBaUJlLEdBQWxCLENBTG5CO0FBTUUsbUJBQUcsRUFBRUYsS0FBSyxDQUFDYixVQUFOLENBQWlCZ0IsZUFBakIsSUFBb0M7QUFOM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQTZDWixDQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBWUQsV0FiQTtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUE4QkU7QUFDRSxtQkFBUyxFQUFDLG9GQURaO0FBRUUsY0FBSSxFQUFDLEdBRlA7QUFHRSwyQ0FIRjtBQUlFLGlDQUFvQixVQUp0QjtBQUFBLG9CQU1HO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5QkYsZUFzQ0U7QUFDRSxtQkFBUyxFQUFDLHNHQURaO0FBRUUsY0FBSSxFQUFDLEdBRlA7QUFHRSx1Q0FIRjtBQUlFLGlDQUFvQixNQUp0QjtBQUFBLG9CQU1HO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStFRCxDQWhGRDs7S0FBTVIsTztBQWtGTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNjBjNDUwNzA5M2YxYzhkZTI0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuXG5jb25zdCBNaXNzaW9uID0gKHsgc2VjdGlvbk1pc3Npb24sIG1pc3Npb25zLCBtaXNzaW9uU2xpZGVzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtaXNzaW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pc3Npb25fX2NvbnRlbnQgdWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWlzc2lvbl9fdGl0bGVcIj57c2VjdGlvbk1pc3Npb24uYXR0cmlidXRlcy50aXRsZX08L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pc3Npb24tZ3JpZCB1ay1ncmlkIHVrLWdyaWQtbWVkaXVtXCI+XG4gICAgICAgICAge21pc3Npb25zLm1hcCgobWlzc2lvbkl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICB1ay1zY3JvbGxzcHk9XCJjbHM6IHVrLWFuaW1hdGlvbi1zbGlkZS1ib3R0b21cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pc3Npb24tZ3JpZF9faXRlbSB1ay13aWR0aC0xLTNcIlxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlzc2lvbi1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pc3Npb24tY2FyZF9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17bWlzc2lvbkl0ZW0uYXR0cmlidXRlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1pc3Npb24tY2FyZF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAge21pc3Npb25JdGVtLmF0dHJpYnV0ZXMudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWlzc2lvbi1jYXJkX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICB7bWlzc2lvbkl0ZW0uYXR0cmlidXRlcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pc3Npb25fX3NsaWRlclwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidWstcG9zaXRpb24tcmVsYXRpdmUgdWstdmlzaWJsZS10b2dnbGUgdWstbGlnaHQgdWstc2xpZGVyIHVrLXNsaWRlci1jb250YWluZXJcIlxuICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgICAgIGRhdGEtdWstc2xpZGVyXG4gICAgICAgICAgZGF0YS1hdXRvcGxheT17bWlzc2lvblNsaWRlc1swXS5hdHRyaWJ1dGVzLmF1dG9wbGF5fVxuICAgICAgICAgIGRhdGEtYXV0b3BsYXktaW50ZXJ2YWw9e21pc3Npb25TbGlkZXNbMF0uYXR0cmlidXRlcy5hdXRvcGxheUludGVydmFsfVxuICAgICAgICA+XG4gICAgICAgICAgPHVsXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1zbGlkZXItaXRlbXMgdWstY2hpbGQtd2lkdGgtMS0yIHVrLWNoaWxkLXdpZHRoLTEtM0BtIHVrLWNoaWxkLXdpZHRoLTEtNEBsXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpbGxDaGFuZ2U6IFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWlzc2lvblNsaWRlc1swXS5hdHRyaWJ1dGVzLnNsaWRlcy5kYXRhLm1hcCgoc2xpZGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgdGFiSW5kZXg9XCItMVwiIGNsYXNzTmFtZT1cInVrLWFjdGl2ZVwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Z2V0U3RyYXBpVVJMKHNsaWRlLmF0dHJpYnV0ZXMudXJsKX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtzbGlkZS5hdHRyaWJ1dGVzLmFsdGVybmF0aXZlVGV4dCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXBvc2l0aW9uLWNlbnRlci1sZWZ0IHVrLXBvc2l0aW9uLXNtYWxsIHVrLWljb24gdWstc2xpZGVuYXYtcHJldmlvdXMgdWstc2xpZGVuYXZcIlxuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgZGF0YS11ay1zbGlkZW5hdi1wcmV2aW91c1xuICAgICAgICAgICAgZGF0YS11ay1zbGlkZXItaXRlbT1cInByZXZpb3VzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1wb3NpdGlvbi1jZW50ZXItcmlnaHQgdWstcG9zaXRpb24tc21hbGwgdWstaWNvbiB1ay1zbGlkZW5hdi1wcmV2aW91cyB1ay1zbGlkZW5hdiB1ay1zbGlkZW5hdi1uZXh0XCJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgIGRhdGEtdWstc2xpZGVuYXYtbmV4dFxuICAgICAgICAgICAgZGF0YS11ay1zbGlkZXItaXRlbT1cIm5leHRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pc3Npb25cbiJdLCJzb3VyY2VSb290IjoiIn0=