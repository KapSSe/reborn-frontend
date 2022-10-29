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
                  lineNumber: 16,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "mission-card__title",
                children: missionItem.attributes.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mission-card__description",
                children: missionItem.attributes.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
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
                lineNumber: 48,
                columnNumber: 19
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "uk-position-center-left uk-position-small uk-icon uk-slidenav-previous uk-slidenav",
          href: "#",
          "data-uk-slidenav-previous": true,
          "data-uk-slider-item": "previous",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "uk-position-center-right uk-position-small uk-icon uk-slidenav-previous uk-slidenav uk-slidenav-next",
          href: "#",
          "data-uk-slidenav-next": true,
          "data-uk-slider-item": "next",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9taXNzaW9uLmpzIl0sIm5hbWVzIjpbIk1pc3Npb24iLCJzZWN0aW9uTWlzc2lvbiIsIm1pc3Npb25zIiwibWlzc2lvblNsaWRlcyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsIm1hcCIsIm1pc3Npb25JdGVtIiwiaSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJhdXRvcGxheSIsImF1dG9wbGF5SW50ZXJ2YWwiLCJ3aWxsQ2hhbmdlIiwidHJhbnNmb3JtIiwic2xpZGVzIiwiZGF0YSIsInNsaWRlIiwiZ2V0U3RyYXBpVVJMIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlEO0FBQUEsTUFBOUNDLGNBQThDLFFBQTlDQSxjQUE4QztBQUFBLE1BQTlCQyxRQUE4QixRQUE5QkEsUUFBOEI7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9CO0FBQy9ELHNCQUNFO0FBQVMsYUFBUyxFQUFDLFNBQW5CO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsa0RBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsZ0JBQWQ7QUFBQSxrQkFBZ0NGLGNBQWMsQ0FBQ0csVUFBZixDQUEwQkM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLHFDQUFmO0FBQUEsa0JBQ0dILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLFdBQUQsRUFBY0MsQ0FBZCxFQUFvQjtBQUNoQyw4QkFDRTtBQUFLLHFCQUFTLEVBQUMsaUNBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxxQkFBZjtBQUFBLHVDQUNFLDhEQUFDLDJDQUFEO0FBQVcsdUJBQUssRUFBRUQsV0FBVyxDQUFDSCxVQUFaLENBQXVCSztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUkseUJBQVMsRUFBQyxxQkFBZDtBQUFBLDBCQUNHRixXQUFXLENBQUNILFVBQVosQ0FBdUJDO0FBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkYsZUFPRTtBQUFHLHlCQUFTLEVBQUMsMkJBQWI7QUFBQSwwQkFDR0UsV0FBVyxDQUFDSCxVQUFaLENBQXVCTTtBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQXNERixDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBZUQsU0FoQkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUF1QkU7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw2QkFDRTtBQUNFLGlCQUFTLEVBQUMsK0VBRFo7QUFFRSxnQkFBUSxFQUFDLElBRlg7QUFHRSw4QkFIRjtBQUlFLHlCQUFlTCxhQUFhLENBQUMsQ0FBRCxDQUFiLENBQWlCQyxVQUFqQixDQUE0Qk8sUUFKN0M7QUFLRSxrQ0FBd0JSLGFBQWEsQ0FBQyxDQUFELENBQWIsQ0FBaUJDLFVBQWpCLENBQTRCUSxnQkFMdEQ7QUFBQSxnQ0FPRTtBQUNFLG1CQUFTLEVBQUMsOEVBRFo7QUFFRSxlQUFLLEVBQUU7QUFDTEMsc0JBQVUsRUFBRSxXQURQO0FBRUxDLHFCQUFTLEVBQUU7QUFGTixXQUZUO0FBQUEsb0JBT0dYLGFBQWEsQ0FBQyxDQUFELENBQWIsQ0FBaUJDLFVBQWpCLENBQTRCVyxNQUE1QixDQUFtQ0MsSUFBbkMsQ0FBd0NWLEdBQXhDLENBQTRDLFVBQUNXLEtBQUQsRUFBUVQsQ0FBUixFQUFjO0FBQ3pELGdDQUNFO0FBQUksc0JBQVEsRUFBQyxJQUFiO0FBQWtCLHVCQUFTLEVBQUMsV0FBNUI7QUFBQSxxQ0FDRSw4REFBQyxtREFBRDtBQUNFLHNCQUFNLEVBQUMsWUFEVDtBQUVFLHFCQUFLLEVBQUMsTUFGUjtBQUdFLHNCQUFNLEVBQUMsTUFIVDtBQUlFLHlCQUFTLEVBQUMsT0FKWjtBQUtFLG1CQUFHLEVBQUVVLHNEQUFZLENBQUNELEtBQUssQ0FBQ2IsVUFBTixDQUFpQmUsR0FBbEIsQ0FMbkI7QUFNRSxtQkFBRyxFQUFFRixLQUFLLENBQUNiLFVBQU4sQ0FBaUJnQixlQUFqQixJQUFvQztBQU4zQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBNkNaLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFZRCxXQWJBO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQThCRTtBQUNFLG1CQUFTLEVBQUMsb0ZBRFo7QUFFRSxjQUFJLEVBQUMsR0FGUDtBQUdFLDJDQUhGO0FBSUUsaUNBQW9CLFVBSnRCO0FBQUEsb0JBTUc7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlCRixlQXNDRTtBQUNFLG1CQUFTLEVBQUMsc0dBRFo7QUFFRSxjQUFJLEVBQUMsR0FGUDtBQUdFLHVDQUhGO0FBSUUsaUNBQW9CLE1BSnRCO0FBQUEsb0JBTUc7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkVELENBNUVEOztLQUFNUixPO0FBOEVOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRjMjU3ZDRkODVkOWY5NTM5YzVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuL2ltYWdlXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi4vbGliL2FwaVwiXG5cbmNvbnN0IE1pc3Npb24gPSAoeyBzZWN0aW9uTWlzc2lvbiwgbWlzc2lvbnMsIG1pc3Npb25TbGlkZXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1pc3Npb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlzc2lvbl9fY29udGVudCB1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtaXNzaW9uX190aXRsZVwiPntzZWN0aW9uTWlzc2lvbi5hdHRyaWJ1dGVzLnRpdGxlfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlzc2lvbi1ncmlkIHVrLWdyaWQgdWstZ3JpZC1tZWRpdW1cIj5cbiAgICAgICAgICB7bWlzc2lvbnMubWFwKChtaXNzaW9uSXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXNzaW9uLWdyaWRfX2l0ZW0gdWstd2lkdGgtMS0zXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pc3Npb24tY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXNzaW9uLWNhcmRfX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e21pc3Npb25JdGVtLmF0dHJpYnV0ZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtaXNzaW9uLWNhcmRfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHttaXNzaW9uSXRlbS5hdHRyaWJ1dGVzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1pc3Npb24tY2FyZF9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAge21pc3Npb25JdGVtLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXNzaW9uX19zbGlkZXJcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXBvc2l0aW9uLXJlbGF0aXZlIHVrLXZpc2libGUtdG9nZ2xlIHVrLWxpZ2h0IHVrLXNsaWRlciB1ay1zbGlkZXItY29udGFpbmVyXCJcbiAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgICAgICBkYXRhLXVrLXNsaWRlclxuICAgICAgICAgIGRhdGEtYXV0b3BsYXk9e21pc3Npb25TbGlkZXNbMF0uYXR0cmlidXRlcy5hdXRvcGxheX1cbiAgICAgICAgICBkYXRhLWF1dG9wbGF5LWludGVydmFsPXttaXNzaW9uU2xpZGVzWzBdLmF0dHJpYnV0ZXMuYXV0b3BsYXlJbnRlcnZhbH1cbiAgICAgICAgPlxuICAgICAgICAgIDx1bFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstc2xpZGVyLWl0ZW1zIHVrLWNoaWxkLXdpZHRoLTEtMiB1ay1jaGlsZC13aWR0aC0xLTNAbSB1ay1jaGlsZC13aWR0aC0xLTRAbFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWxsQ2hhbmdlOiBcInRyYW5zZm9ybVwiLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweClcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge21pc3Npb25TbGlkZXNbMF0uYXR0cmlidXRlcy5zbGlkZXMuZGF0YS5tYXAoKHNsaWRlLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIHRhYkluZGV4PVwiLTFcIiBjbGFzc05hbWU9XCJ1ay1hY3RpdmVcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2dldFN0cmFwaVVSTChzbGlkZS5hdHRyaWJ1dGVzLnVybCl9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17c2xpZGUuYXR0cmlidXRlcy5hbHRlcm5hdGl2ZVRleHQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1wb3NpdGlvbi1jZW50ZXItbGVmdCB1ay1wb3NpdGlvbi1zbWFsbCB1ay1pY29uIHVrLXNsaWRlbmF2LXByZXZpb3VzIHVrLXNsaWRlbmF2XCJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgIGRhdGEtdWstc2xpZGVuYXYtcHJldmlvdXNcbiAgICAgICAgICAgIGRhdGEtdWstc2xpZGVyLWl0ZW09XCJwcmV2aW91c1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstcG9zaXRpb24tY2VudGVyLXJpZ2h0IHVrLXBvc2l0aW9uLXNtYWxsIHVrLWljb24gdWstc2xpZGVuYXYtcHJldmlvdXMgdWstc2xpZGVuYXYgdWstc2xpZGVuYXYtbmV4dFwiXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBkYXRhLXVrLXNsaWRlbmF2LW5leHRcbiAgICAgICAgICAgIGRhdGEtdWstc2xpZGVyLWl0ZW09XCJuZXh0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNaXNzaW9uXG4iXSwic291cmNlUm9vdCI6IiJ9