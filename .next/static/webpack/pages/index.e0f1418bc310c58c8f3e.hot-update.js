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
            className: "mission-grid__item uk-width-1-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mission-card",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mission-card__image",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_1__.default, {
                  image: missionItem.attributes.image
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "mission-card__title",
                children: missionItem.attributes.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mission-card__description",
                children: missionItem.attributes.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 17,
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
                lineNumber: 51,
                columnNumber: 19
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "uk-position-center-left uk-position-small uk-icon uk-slidenav-previous uk-slidenav",
          href: "#",
          "data-uk-slidenav-previous": true,
          "data-uk-slider-item": "previous",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "uk-position-center-right uk-position-small uk-icon uk-slidenav-previous uk-slidenav uk-slidenav-next",
          href: "#",
          "data-uk-slidenav-next": true,
          "data-uk-slider-item": "next",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9taXNzaW9uLmpzIl0sIm5hbWVzIjpbIk1pc3Npb24iLCJzZWN0aW9uTWlzc2lvbiIsIm1pc3Npb25zIiwibWlzc2lvblNsaWRlcyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsIm1hcCIsIm1pc3Npb25JdGVtIiwiaSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJhdXRvcGxheSIsImF1dG9wbGF5SW50ZXJ2YWwiLCJ3aWxsQ2hhbmdlIiwidHJhbnNmb3JtIiwic2xpZGVzIiwiZGF0YSIsInNsaWRlIiwiZ2V0U3RyYXBpVVJMIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlEO0FBQUEsTUFBOUNDLGNBQThDLFFBQTlDQSxjQUE4QztBQUFBLE1BQTlCQyxRQUE4QixRQUE5QkEsUUFBOEI7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9CO0FBQy9ELHNCQUNFO0FBQVMsYUFBUyxFQUFDLFNBQW5CO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsa0RBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsZ0JBQWQ7QUFBQSxrQkFBZ0NGLGNBQWMsQ0FBQ0csVUFBZixDQUEwQkM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLHFDQUFmO0FBQUEsa0JBQ0dILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLFdBQUQsRUFBY0MsQ0FBZCxFQUFvQjtBQUNoQyw4QkFDRTtBQUNFLHFCQUFTLEVBQUMsaUNBRFo7QUFBQSxtQ0FJRTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxxQkFBZjtBQUFBLHVDQUNFLDhEQUFDLDJDQUFEO0FBQVcsdUJBQUssRUFBRUQsV0FBVyxDQUFDSCxVQUFaLENBQXVCSztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUkseUJBQVMsRUFBQyxxQkFBZDtBQUFBLDBCQUNHRixXQUFXLENBQUNILFVBQVosQ0FBdUJDO0FBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkYsZUFPRTtBQUFHLHlCQUFTLEVBQUMsMkJBQWI7QUFBQSwwQkFDR0UsV0FBVyxDQUFDSCxVQUFaLENBQXVCTTtBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGLGFBRU9GLENBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQWtCRCxTQW5CQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQTBCRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNFO0FBQ0UsaUJBQVMsRUFBQywrRUFEWjtBQUVFLGdCQUFRLEVBQUMsSUFGWDtBQUdFLDhCQUhGO0FBSUUseUJBQWVMLGFBQWEsQ0FBQyxDQUFELENBQWIsQ0FBaUJDLFVBQWpCLENBQTRCTyxRQUo3QztBQUtFLGtDQUF3QlIsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQkMsVUFBakIsQ0FBNEJRLGdCQUx0RDtBQUFBLGdDQU9FO0FBQ0UsbUJBQVMsRUFBQyw4RUFEWjtBQUVFLGVBQUssRUFBRTtBQUNMQyxzQkFBVSxFQUFFLFdBRFA7QUFFTEMscUJBQVMsRUFBRTtBQUZOLFdBRlQ7QUFBQSxvQkFPR1gsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQkMsVUFBakIsQ0FBNEJXLE1BQTVCLENBQW1DQyxJQUFuQyxDQUF3Q1YsR0FBeEMsQ0FBNEMsVUFBQ1csS0FBRCxFQUFRVCxDQUFSLEVBQWM7QUFDekQsZ0NBQ0U7QUFBSSxzQkFBUSxFQUFDLElBQWI7QUFBa0IsdUJBQVMsRUFBQyxXQUE1QjtBQUFBLHFDQUNFLDhEQUFDLG1EQUFEO0FBQ0Usc0JBQU0sRUFBQyxZQURUO0FBRUUscUJBQUssRUFBQyxNQUZSO0FBR0Usc0JBQU0sRUFBQyxNQUhUO0FBSUUseUJBQVMsRUFBQyxPQUpaO0FBS0UsbUJBQUcsRUFBRVUsc0RBQVksQ0FBQ0QsS0FBSyxDQUFDYixVQUFOLENBQWlCZSxHQUFsQixDQUxuQjtBQU1FLG1CQUFHLEVBQUVGLEtBQUssQ0FBQ2IsVUFBTixDQUFpQmdCLGVBQWpCLElBQW9DO0FBTjNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUE2Q1osQ0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQVlELFdBYkE7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBOEJFO0FBQ0UsbUJBQVMsRUFBQyxvRkFEWjtBQUVFLGNBQUksRUFBQyxHQUZQO0FBR0UsMkNBSEY7QUFJRSxpQ0FBb0IsVUFKdEI7QUFBQSxvQkFNRztBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJGLGVBc0NFO0FBQ0UsbUJBQVMsRUFBQyxzR0FEWjtBQUVFLGNBQUksRUFBQyxHQUZQO0FBR0UsdUNBSEY7QUFJRSxpQ0FBb0IsTUFKdEI7QUFBQSxvQkFNRztBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4RUQsQ0EvRUQ7O0tBQU1SLE87QUFpRk4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTBmMTQxOGJjMzEwYzU4YzhmM2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IGdldFN0cmFwaVVSTCB9IGZyb20gXCIuLi9saWIvYXBpXCJcblxuY29uc3QgTWlzc2lvbiA9ICh7IHNlY3Rpb25NaXNzaW9uLCBtaXNzaW9ucywgbWlzc2lvblNsaWRlcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWlzc2lvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXNzaW9uX19jb250ZW50IHVrLWNvbnRhaW5lciB1ay1jb250YWluZXItbGFyZ2VcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1pc3Npb25fX3RpdGxlXCI+e3NlY3Rpb25NaXNzaW9uLmF0dHJpYnV0ZXMudGl0bGV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXNzaW9uLWdyaWQgdWstZ3JpZCB1ay1ncmlkLW1lZGl1bVwiPlxuICAgICAgICAgIHttaXNzaW9ucy5tYXAoKG1pc3Npb25JdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWlzc2lvbi1ncmlkX19pdGVtIHVrLXdpZHRoLTEtM1wiXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXNzaW9uLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlzc2lvbi1jYXJkX19pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXttaXNzaW9uSXRlbS5hdHRyaWJ1dGVzLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWlzc2lvbi1jYXJkX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7bWlzc2lvbkl0ZW0uYXR0cmlidXRlcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtaXNzaW9uLWNhcmRfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIHttaXNzaW9uSXRlbS5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlzc2lvbl9fc2xpZGVyXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1wb3NpdGlvbi1yZWxhdGl2ZSB1ay12aXNpYmxlLXRvZ2dsZSB1ay1saWdodCB1ay1zbGlkZXIgdWstc2xpZGVyLWNvbnRhaW5lclwiXG4gICAgICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICAgICAgZGF0YS11ay1zbGlkZXJcbiAgICAgICAgICBkYXRhLWF1dG9wbGF5PXttaXNzaW9uU2xpZGVzWzBdLmF0dHJpYnV0ZXMuYXV0b3BsYXl9XG4gICAgICAgICAgZGF0YS1hdXRvcGxheS1pbnRlcnZhbD17bWlzc2lvblNsaWRlc1swXS5hdHRyaWJ1dGVzLmF1dG9wbGF5SW50ZXJ2YWx9XG4gICAgICAgID5cbiAgICAgICAgICA8dWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXNsaWRlci1pdGVtcyB1ay1jaGlsZC13aWR0aC0xLTIgdWstY2hpbGQtd2lkdGgtMS0zQG0gdWstY2hpbGQtd2lkdGgtMS00QGxcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lsbENoYW5nZTogXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttaXNzaW9uU2xpZGVzWzBdLmF0dHJpYnV0ZXMuc2xpZGVzLmRhdGEubWFwKChzbGlkZSwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSB0YWJJbmRleD1cIi0xXCIgY2xhc3NOYW1lPVwidWstYWN0aXZlXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtnZXRTdHJhcGlVUkwoc2xpZGUuYXR0cmlidXRlcy51cmwpfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3NsaWRlLmF0dHJpYnV0ZXMuYWx0ZXJuYXRpdmVUZXh0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstcG9zaXRpb24tY2VudGVyLWxlZnQgdWstcG9zaXRpb24tc21hbGwgdWstaWNvbiB1ay1zbGlkZW5hdi1wcmV2aW91cyB1ay1zbGlkZW5hdlwiXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBkYXRhLXVrLXNsaWRlbmF2LXByZXZpb3VzXG4gICAgICAgICAgICBkYXRhLXVrLXNsaWRlci1pdGVtPVwicHJldmlvdXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXBvc2l0aW9uLWNlbnRlci1yaWdodCB1ay1wb3NpdGlvbi1zbWFsbCB1ay1pY29uIHVrLXNsaWRlbmF2LXByZXZpb3VzIHVrLXNsaWRlbmF2IHVrLXNsaWRlbmF2LW5leHRcIlxuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgZGF0YS11ay1zbGlkZW5hdi1uZXh0XG4gICAgICAgICAgICBkYXRhLXVrLXNsaWRlci1pdGVtPVwibmV4dFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWlzc2lvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==