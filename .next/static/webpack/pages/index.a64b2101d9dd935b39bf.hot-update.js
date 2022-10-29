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
            "uk-scrollspy": "cls: uk-animation-slide-bottom; repeat: true",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9taXNzaW9uLmpzIl0sIm5hbWVzIjpbIk1pc3Npb24iLCJzZWN0aW9uTWlzc2lvbiIsIm1pc3Npb25zIiwibWlzc2lvblNsaWRlcyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsIm1hcCIsIm1pc3Npb25JdGVtIiwiaSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJhdXRvcGxheSIsImF1dG9wbGF5SW50ZXJ2YWwiLCJ3aWxsQ2hhbmdlIiwidHJhbnNmb3JtIiwic2xpZGVzIiwiZGF0YSIsInNsaWRlIiwiZ2V0U3RyYXBpVVJMIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlEO0FBQUEsTUFBOUNDLGNBQThDLFFBQTlDQSxjQUE4QztBQUFBLE1BQTlCQyxRQUE4QixRQUE5QkEsUUFBOEI7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9CO0FBQy9ELHNCQUNFO0FBQVMsYUFBUyxFQUFDLFNBQW5CO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsa0RBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsZ0JBQWQ7QUFBQSxrQkFBZ0NGLGNBQWMsQ0FBQ0csVUFBZixDQUEwQkM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLHFDQUFmO0FBQUEsa0JBQ0dILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLFdBQUQsRUFBY0MsQ0FBZCxFQUFvQjtBQUNoQyw4QkFDRTtBQUNFLDRCQUFhLDhDQURmO0FBRUUscUJBQVMsRUFBQyxpQ0FGWjtBQUFBLG1DQUtFO0FBQUssdUJBQVMsRUFBQyxjQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLHFCQUFmO0FBQUEsdUNBQ0UsOERBQUMsMkNBQUQ7QUFBVyx1QkFBSyxFQUFFRCxXQUFXLENBQUNILFVBQVosQ0FBdUJLO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUU7QUFBSSx5QkFBUyxFQUFDLHFCQUFkO0FBQUEsMEJBQ0dGLFdBQVcsQ0FBQ0gsVUFBWixDQUF1QkM7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQU9FO0FBQUcseUJBQVMsRUFBQywyQkFBYjtBQUFBLDBCQUNHRSxXQUFXLENBQUNILFVBQVosQ0FBdUJNO0FBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEYsYUFHT0YsQ0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBbUJELFNBcEJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBMkJFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsNkJBQ0U7QUFDRSxpQkFBUyxFQUFDLCtFQURaO0FBRUUsZ0JBQVEsRUFBQyxJQUZYO0FBR0UsOEJBSEY7QUFJRSx5QkFBZUwsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQkMsVUFBakIsQ0FBNEJPLFFBSjdDO0FBS0Usa0NBQXdCUixhQUFhLENBQUMsQ0FBRCxDQUFiLENBQWlCQyxVQUFqQixDQUE0QlEsZ0JBTHREO0FBQUEsZ0NBT0U7QUFDRSxtQkFBUyxFQUFDLDhFQURaO0FBRUUsZUFBSyxFQUFFO0FBQ0xDLHNCQUFVLEVBQUUsV0FEUDtBQUVMQyxxQkFBUyxFQUFFO0FBRk4sV0FGVDtBQUFBLG9CQU9HWCxhQUFhLENBQUMsQ0FBRCxDQUFiLENBQWlCQyxVQUFqQixDQUE0QlcsTUFBNUIsQ0FBbUNDLElBQW5DLENBQXdDVixHQUF4QyxDQUE0QyxVQUFDVyxLQUFELEVBQVFULENBQVIsRUFBYztBQUN6RCxnQ0FDRTtBQUFJLHNCQUFRLEVBQUMsSUFBYjtBQUFrQix1QkFBUyxFQUFDLFdBQTVCO0FBQUEscUNBQ0UsOERBQUMsbURBQUQ7QUFDRSxzQkFBTSxFQUFDLFlBRFQ7QUFFRSxxQkFBSyxFQUFDLE1BRlI7QUFHRSxzQkFBTSxFQUFDLE1BSFQ7QUFJRSx5QkFBUyxFQUFDLE9BSlo7QUFLRSxtQkFBRyxFQUFFVSxzREFBWSxDQUFDRCxLQUFLLENBQUNiLFVBQU4sQ0FBaUJlLEdBQWxCLENBTG5CO0FBTUUsbUJBQUcsRUFBRUYsS0FBSyxDQUFDYixVQUFOLENBQWlCZ0IsZUFBakIsSUFBb0M7QUFOM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQTZDWixDQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBWUQsV0FiQTtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUE4QkU7QUFDRSxtQkFBUyxFQUFDLG9GQURaO0FBRUUsY0FBSSxFQUFDLEdBRlA7QUFHRSwyQ0FIRjtBQUlFLGlDQUFvQixVQUp0QjtBQUFBLG9CQU1HO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5QkYsZUFzQ0U7QUFDRSxtQkFBUyxFQUFDLHNHQURaO0FBRUUsY0FBSSxFQUFDLEdBRlA7QUFHRSx1Q0FIRjtBQUlFLGlDQUFvQixNQUp0QjtBQUFBLG9CQU1HO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStFRCxDQWhGRDs7S0FBTVIsTztBQWtGTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNjRiMjEwMWQ5ZGQ5MzViMzliZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuXG5jb25zdCBNaXNzaW9uID0gKHsgc2VjdGlvbk1pc3Npb24sIG1pc3Npb25zLCBtaXNzaW9uU2xpZGVzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtaXNzaW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pc3Npb25fX2NvbnRlbnQgdWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWlzc2lvbl9fdGl0bGVcIj57c2VjdGlvbk1pc3Npb24uYXR0cmlidXRlcy50aXRsZX08L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pc3Npb24tZ3JpZCB1ay1ncmlkIHVrLWdyaWQtbWVkaXVtXCI+XG4gICAgICAgICAge21pc3Npb25zLm1hcCgobWlzc2lvbkl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICB1ay1zY3JvbGxzcHk9XCJjbHM6IHVrLWFuaW1hdGlvbi1zbGlkZS1ib3R0b207IHJlcGVhdDogdHJ1ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWlzc2lvbi1ncmlkX19pdGVtIHVrLXdpZHRoLTEtM1wiXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXNzaW9uLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlzc2lvbi1jYXJkX19pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXttaXNzaW9uSXRlbS5hdHRyaWJ1dGVzLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWlzc2lvbi1jYXJkX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7bWlzc2lvbkl0ZW0uYXR0cmlidXRlcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtaXNzaW9uLWNhcmRfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIHttaXNzaW9uSXRlbS5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlzc2lvbl9fc2xpZGVyXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1wb3NpdGlvbi1yZWxhdGl2ZSB1ay12aXNpYmxlLXRvZ2dsZSB1ay1saWdodCB1ay1zbGlkZXIgdWstc2xpZGVyLWNvbnRhaW5lclwiXG4gICAgICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICAgICAgZGF0YS11ay1zbGlkZXJcbiAgICAgICAgICBkYXRhLWF1dG9wbGF5PXttaXNzaW9uU2xpZGVzWzBdLmF0dHJpYnV0ZXMuYXV0b3BsYXl9XG4gICAgICAgICAgZGF0YS1hdXRvcGxheS1pbnRlcnZhbD17bWlzc2lvblNsaWRlc1swXS5hdHRyaWJ1dGVzLmF1dG9wbGF5SW50ZXJ2YWx9XG4gICAgICAgID5cbiAgICAgICAgICA8dWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXNsaWRlci1pdGVtcyB1ay1jaGlsZC13aWR0aC0xLTIgdWstY2hpbGQtd2lkdGgtMS0zQG0gdWstY2hpbGQtd2lkdGgtMS00QGxcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lsbENoYW5nZTogXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttaXNzaW9uU2xpZGVzWzBdLmF0dHJpYnV0ZXMuc2xpZGVzLmRhdGEubWFwKChzbGlkZSwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSB0YWJJbmRleD1cIi0xXCIgY2xhc3NOYW1lPVwidWstYWN0aXZlXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtnZXRTdHJhcGlVUkwoc2xpZGUuYXR0cmlidXRlcy51cmwpfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3NsaWRlLmF0dHJpYnV0ZXMuYWx0ZXJuYXRpdmVUZXh0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstcG9zaXRpb24tY2VudGVyLWxlZnQgdWstcG9zaXRpb24tc21hbGwgdWstaWNvbiB1ay1zbGlkZW5hdi1wcmV2aW91cyB1ay1zbGlkZW5hdlwiXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBkYXRhLXVrLXNsaWRlbmF2LXByZXZpb3VzXG4gICAgICAgICAgICBkYXRhLXVrLXNsaWRlci1pdGVtPVwicHJldmlvdXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXBvc2l0aW9uLWNlbnRlci1yaWdodCB1ay1wb3NpdGlvbi1zbWFsbCB1ay1pY29uIHVrLXNsaWRlbmF2LXByZXZpb3VzIHVrLXNsaWRlbmF2IHVrLXNsaWRlbmF2LW5leHRcIlxuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgZGF0YS11ay1zbGlkZW5hdi1uZXh0XG4gICAgICAgICAgICBkYXRhLXVrLXNsaWRlci1pdGVtPVwibmV4dFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWlzc2lvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==