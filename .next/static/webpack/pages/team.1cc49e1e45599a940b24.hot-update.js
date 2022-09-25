self["webpackHotUpdate_N_E"]("pages/team",{

/***/ "./components/team.js":
/*!****************************!*\
  !*** ./components/team.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\team.js",
    _this = undefined,
    _s = $RefreshSig$();




var Team = function Team(_ref) {
  _s();

  var sectionTeam = _ref.sectionTeam,
      team = _ref.team;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      selectedItem = _useState[0],
      setSelectedItem = _useState[1];

  var handleItemSelection = function handleItemSelection(type) {
    console.log(type);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "team",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "team__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "team-header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          onClick: handleItemSelection.bind(_this, 'team'),
          className: "team-header__heading",
          children: sectionTeam.attributes.titleTeam
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          onClick: handleItemSelection.bind(_this, 'structure'),
          className: "team-header__heading",
          children: sectionTeam.attributes.titleStructure
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "team-members uk-grid uk-child-width-1-4",
        children: team.map(function (teamMember, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "team-member",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "team-member__wrapper",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "team-member__image",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                  image: teamMember.attributes.image
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "team-member__title",
                children: teamMember.attributes.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "team-member__description",
                children: teamMember.attributes.desc
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 17
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_s(Team, "JAURefZ3ap1UzJuNSWe6LyvcH8g=");

_c = Team;
/* harmony default export */ __webpack_exports__["default"] = (Team);

var _c;

$RefreshReg$(_c, "Team");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWFtLmpzIl0sIm5hbWVzIjpbIlRlYW0iLCJzZWN0aW9uVGVhbSIsInRlYW0iLCJ1c2VTdGF0ZSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsImhhbmRsZUl0ZW1TZWxlY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsImJpbmQiLCJhdHRyaWJ1dGVzIiwidGl0bGVUZWFtIiwidGl0bGVTdHJ1Y3R1cmUiLCJtYXAiLCJ0ZWFtTWVtYmVyIiwiaSIsImltYWdlIiwibmFtZSIsImRlc2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTJCO0FBQUE7O0FBQUEsTUFBeEJDLFdBQXdCLFFBQXhCQSxXQUF3QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDRUMsK0NBQVEsQ0FBQyxJQUFELENBRFY7QUFBQSxNQUMvQkMsWUFEK0I7QUFBQSxNQUNqQkMsZUFEaUI7O0FBR3RDLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3BDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsTUFBbkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQywrQ0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsZ0NBQ0U7QUFBSSxpQkFBTyxFQUFFRCxtQkFBbUIsQ0FBQ0ksSUFBcEIsQ0FBeUIsS0FBekIsRUFBOEIsTUFBOUIsQ0FBYjtBQUFvRCxtQkFBUyxFQUFDLHNCQUE5RDtBQUFBLG9CQUNHVCxXQUFXLENBQUNVLFVBQVosQ0FBdUJDO0FBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFJLGlCQUFPLEVBQUVOLG1CQUFtQixDQUFDSSxJQUFwQixDQUF5QixLQUF6QixFQUE4QixXQUE5QixDQUFiO0FBQXlELG1CQUFTLEVBQUMsc0JBQW5FO0FBQUEsb0JBQ0dULFdBQVcsQ0FBQ1UsVUFBWixDQUF1QkU7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVNFO0FBQUssaUJBQVMsRUFBQyx5Q0FBZjtBQUFBLGtCQUNHWCxJQUFJLENBQUNZLEdBQUwsQ0FBUyxVQUFDQyxVQUFELEVBQWFDLENBQWIsRUFBbUI7QUFDM0IsOEJBQ0U7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsc0JBQWY7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUMsb0JBQWY7QUFBQSx1Q0FDRSw4REFBQywyQ0FBRDtBQUFXLHVCQUFLLEVBQUVELFVBQVUsQ0FBQ0osVUFBWCxDQUFzQk07QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFJLHlCQUFTLEVBQUMsb0JBQWQ7QUFBQSwwQkFDR0YsVUFBVSxDQUFDSixVQUFYLENBQXNCTztBQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGLGVBT0U7QUFBRyx5QkFBUyxFQUFDLDBCQUFiO0FBQUEsMEJBQ0dILFVBQVUsQ0FBQ0osVUFBWCxDQUFzQlE7QUFEekI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFrQ0gsQ0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQWVELFNBaEJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlDRCxDQXhDRDs7R0FBTWhCLEk7O0tBQUFBLEk7QUEwQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVhbS4xY2M0OWUxZTQ1NTk5YTk0MGIyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5cbmNvbnN0IFRlYW0gPSAoeyBzZWN0aW9uVGVhbSwgdGVhbSB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IGhhbmRsZUl0ZW1TZWxlY3Rpb24gPSAodHlwZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHR5cGUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRlYW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbV9fY29udGVudCB1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1oZWFkZXJcIj5cbiAgICAgICAgICA8aDIgb25DbGljaz17aGFuZGxlSXRlbVNlbGVjdGlvbi5iaW5kKHRoaXMsJ3RlYW0nKX0gY2xhc3NOYW1lPVwidGVhbS1oZWFkZXJfX2hlYWRpbmdcIj5cbiAgICAgICAgICAgIHtzZWN0aW9uVGVhbS5hdHRyaWJ1dGVzLnRpdGxlVGVhbX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxoMiBvbkNsaWNrPXtoYW5kbGVJdGVtU2VsZWN0aW9uLmJpbmQodGhpcywnc3RydWN0dXJlJyl9IGNsYXNzTmFtZT1cInRlYW0taGVhZGVyX19oZWFkaW5nXCI+XG4gICAgICAgICAgICB7c2VjdGlvblRlYW0uYXR0cmlidXRlcy50aXRsZVN0cnVjdHVyZX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlcnMgdWstZ3JpZCB1ay1jaGlsZC13aWR0aC0xLTRcIj5cbiAgICAgICAgICB7dGVhbS5tYXAoKHRlYW1NZW1iZXIsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXJcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXJfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXJfX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3RlYW1NZW1iZXIuYXR0cmlidXRlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7dGVhbU1lbWJlci5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXJfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0ZWFtTWVtYmVyLmF0dHJpYnV0ZXMuZGVzY31cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1cbiJdLCJzb3VyY2VSb290IjoiIn0=