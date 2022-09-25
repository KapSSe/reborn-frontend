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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("team"),
      selectedItem = _useState[0],
      setSelectedItem = _useState[1];

  var handleItemSelection = function handleItemSelection(type) {
    setSelectedItem(type);
  };

  var renderContent = function renderContent() {
    if (selectedItem === "team") {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                  lineNumber: 20,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "team-member__title",
                children: teamMember.attributes.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "team-member__description",
                children: teamMember.attributes.desc
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
            lineNumber: 17,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "team-structure",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "team-structure__scheme",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
            image: sectionTeam.attributes.structureSchemeImg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "team",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "team__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "team-header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          onClick: handleItemSelection.bind(_this, "team"),
          className: "team-header__heading ".concat(selectedItem === "team" ? "team-header__heading_active" : null),
          children: sectionTeam.attributes.titleTeam
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          onClick: handleItemSelection.bind(_this, "structure"),
          className: "team-header__heading ".concat(selectedItem === "structure" ? "team-header__heading_active" : null),
          children: sectionTeam.attributes.titleStructure
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), renderContent()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(Team, "+XGRBCMjVxtjAifAJJSmZ/M+PsE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWFtLmpzIl0sIm5hbWVzIjpbIlRlYW0iLCJzZWN0aW9uVGVhbSIsInRlYW0iLCJ1c2VTdGF0ZSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsImhhbmRsZUl0ZW1TZWxlY3Rpb24iLCJ0eXBlIiwicmVuZGVyQ29udGVudCIsIm1hcCIsInRlYW1NZW1iZXIiLCJpIiwiYXR0cmlidXRlcyIsImltYWdlIiwibmFtZSIsImRlc2MiLCJzdHJ1Y3R1cmVTY2hlbWVJbWciLCJiaW5kIiwidGl0bGVUZWFtIiwidGl0bGVTdHJ1Y3R1cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTJCO0FBQUE7O0FBQUEsTUFBeEJDLFdBQXdCLFFBQXhCQSxXQUF3QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDRUMsK0NBQVEsQ0FBQyxNQUFELENBRFY7QUFBQSxNQUMvQkMsWUFEK0I7QUFBQSxNQUNqQkMsZUFEaUI7O0FBR3RDLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3BDRixtQkFBZSxDQUFDRSxJQUFELENBQWY7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixRQUFJSixZQUFZLEtBQUssTUFBckIsRUFBNkI7QUFDM0IsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDLHlDQUFmO0FBQUEsa0JBQ0dGLElBQUksQ0FBQ08sR0FBTCxDQUFTLFVBQUNDLFVBQUQsRUFBYUMsQ0FBYixFQUFtQjtBQUMzQiw4QkFDRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxzQkFBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxvQkFBZjtBQUFBLHVDQUNFLDhEQUFDLDJDQUFEO0FBQVcsdUJBQUssRUFBRUQsVUFBVSxDQUFDRSxVQUFYLENBQXNCQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUkseUJBQVMsRUFBQyxvQkFBZDtBQUFBLDBCQUNHSCxVQUFVLENBQUNFLFVBQVgsQ0FBc0JFO0FBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkYsZUFPRTtBQUFHLHlCQUFTLEVBQUMsMEJBQWI7QUFBQSwwQkFDR0osVUFBVSxDQUFDRSxVQUFYLENBQXNCRztBQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQWtDSixDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBZUQsU0FoQkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxQkQsS0F0QkQsTUFzQk87QUFDTCwwQkFDRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsd0JBQWY7QUFBQSxpQ0FDRSw4REFBQywyQ0FBRDtBQUFXLGlCQUFLLEVBQUVWLFdBQVcsQ0FBQ1csVUFBWixDQUF1Qkk7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRDtBQUNGLEdBaENEOztBQWtDQSxzQkFDRTtBQUFTLGFBQVMsRUFBQyxNQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLCtDQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxnQ0FDRTtBQUNFLGlCQUFPLEVBQUVWLG1CQUFtQixDQUFDVyxJQUFwQixDQUF5QixLQUF6QixFQUErQixNQUEvQixDQURYO0FBRUUsbUJBQVMsaUNBQ1BiLFlBQVksS0FBSyxNQUFqQixHQUEwQiw2QkFBMUIsR0FBMEQsSUFEbkQsQ0FGWDtBQUFBLG9CQU1HSCxXQUFXLENBQUNXLFVBQVosQ0FBdUJNO0FBTjFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFTRTtBQUNFLGlCQUFPLEVBQUVaLG1CQUFtQixDQUFDVyxJQUFwQixDQUF5QixLQUF6QixFQUErQixXQUEvQixDQURYO0FBRUUsbUJBQVMsaUNBQ1BiLFlBQVksS0FBSyxXQUFqQixHQUNJLDZCQURKLEdBRUksSUFIRyxDQUZYO0FBQUEsb0JBUUdILFdBQVcsQ0FBQ1csVUFBWixDQUF1Qk87QUFSMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQXFCR1gsYUFBYSxFQXJCaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBcEVEOztHQUFNUixJOztLQUFBQSxJO0FBc0VOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlYW0uNWQ2YTg3ZmIyYjcwNDM0ZWY2NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxuXG5jb25zdCBUZWFtID0gKHsgc2VjdGlvblRlYW0sIHRlYW0gfSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRJdGVtLCBzZXRTZWxlY3RlZEl0ZW1dID0gdXNlU3RhdGUoXCJ0ZWFtXCIpXG5cbiAgY29uc3QgaGFuZGxlSXRlbVNlbGVjdGlvbiA9ICh0eXBlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRJdGVtKHR5cGUpXG4gIH1cblxuICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEl0ZW0gPT09IFwidGVhbVwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVycyB1ay1ncmlkIHVrLWNoaWxkLXdpZHRoLTEtNFwiPlxuICAgICAgICAgIHt0ZWFtLm1hcCgodGVhbU1lbWJlciwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlclwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlcl9fd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlcl9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17dGVhbU1lbWJlci5hdHRyaWJ1dGVzLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXJfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0ZWFtTWVtYmVyLmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlcl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAge3RlYW1NZW1iZXIuYXR0cmlidXRlcy5kZXNjfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1zdHJ1Y3R1cmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tc3RydWN0dXJlX19zY2hlbWVcIj5cbiAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3NlY3Rpb25UZWFtLmF0dHJpYnV0ZXMuc3RydWN0dXJlU2NoZW1lSW1nfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRlYW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbV9fY29udGVudCB1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1oZWFkZXJcIj5cbiAgICAgICAgICA8aDJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUl0ZW1TZWxlY3Rpb24uYmluZCh0aGlzLCBcInRlYW1cIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZWFtLWhlYWRlcl9faGVhZGluZyAke1xuICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPT09IFwidGVhbVwiID8gXCJ0ZWFtLWhlYWRlcl9faGVhZGluZ19hY3RpdmVcIiA6IG51bGxcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWN0aW9uVGVhbS5hdHRyaWJ1dGVzLnRpdGxlVGVhbX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxoMlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSXRlbVNlbGVjdGlvbi5iaW5kKHRoaXMsIFwic3RydWN0dXJlXCIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGVhbS1oZWFkZXJfX2hlYWRpbmcgJHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID09PSBcInN0cnVjdHVyZVwiXG4gICAgICAgICAgICAgICAgPyBcInRlYW0taGVhZGVyX19oZWFkaW5nX2FjdGl2ZVwiXG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VjdGlvblRlYW0uYXR0cmlidXRlcy50aXRsZVN0cnVjdHVyZX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3JlbmRlckNvbnRlbnQoKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZWFtXG4iXSwic291cmNlUm9vdCI6IiJ9