self["webpackHotUpdate_N_E"]("pages/en",{

/***/ "./components/contacts.js":
/*!********************************!*\
  !*** ./components/contacts.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\contacts.js",
    _this = undefined;



var Contacts = function Contacts(_ref) {
  var sectionContacts = _ref.sectionContacts;

  var copyText = function copyText() {
    if (true) {
      window.navigator.clipboard.writeText(sectionContacts.attributes.addressLink).then(function () {});
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "contacts",
    id: "contacts",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "contacts__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "contacts__heading",
        children: sectionContacts.attributes.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-grid uk-grid-medium",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "uk-width-2-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "contacts__address-block",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "address-block address-block__text",
              children: sectionContacts.attributes.addressLink
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              onClick: copyText,
              className: "address-block address-block__copy",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_1__.default, {
                image: sectionContacts.attributes.buttonIcon
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "uk-width-1-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "contacts__button-block",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "button-block__button",
              href: "mailto:" + sectionContacts.attributes.addressLink,
              children: sectionContacts.attributes.buttonText
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = Contacts;
/* harmony default export */ __webpack_exports__["default"] = (Contacts);

var _c;

$RefreshReg$(_c, "Contacts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0cy5qcyJdLCJuYW1lcyI6WyJDb250YWN0cyIsInNlY3Rpb25Db250YWN0cyIsImNvcHlUZXh0Iiwid2luZG93IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiYXR0cmlidXRlcyIsImFkZHJlc3NMaW5rIiwidGhlbiIsInRpdGxlIiwiYnV0dG9uSWNvbiIsImJ1dHRvblRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF5QjtBQUFBLE1BQXRCQyxlQUFzQixRQUF0QkEsZUFBc0I7O0FBQ3hDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsY0FBbUM7QUFDakNDLFlBQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsU0FBakIsQ0FDR0MsU0FESCxDQUNhTCxlQUFlLENBQUNNLFVBQWhCLENBQTJCQyxXQUR4QyxFQUVHQyxJQUZILENBRVEsWUFBTSxDQUFFLENBRmhCO0FBR0Q7QUFDRixHQU5EOztBQVFBLHNCQUNFO0FBQVMsYUFBUyxFQUFDLFVBQW5CO0FBQThCLE1BQUUsRUFBQyxVQUFqQztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLG1EQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLG1CQUFkO0FBQUEsa0JBQ0dSLGVBQWUsQ0FBQ00sVUFBaEIsQ0FBMkJHO0FBRDlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLHlCQUFmO0FBQUEsb0NBQ0U7QUFBTSx1QkFBUyxFQUFDLG1DQUFoQjtBQUFBLHdCQUNHVCxlQUFlLENBQUNNLFVBQWhCLENBQTJCQztBQUQ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFDRSxxQkFBTyxFQUFFTixRQURYO0FBRUUsdUJBQVMsRUFBQyxtQ0FGWjtBQUFBLHFDQUlFLDhEQUFDLDJDQUFEO0FBQVcscUJBQUssRUFBRUQsZUFBZSxDQUFDTSxVQUFoQixDQUEyQkk7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWNFO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLHdCQUFmO0FBQUEsbUNBQ0U7QUFDRSx1QkFBUyxFQUFDLHNCQURaO0FBRUUsa0JBQUksRUFBRSxZQUFZVixlQUFlLENBQUNNLFVBQWhCLENBQTJCQyxXQUYvQztBQUFBLHdCQUlHUCxlQUFlLENBQUNNLFVBQWhCLENBQTJCSztBQUo5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0NELENBM0NEOztLQUFNWixRO0FBNENOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VuLjE2OTZhNzM5NDRkNzViY2ZlNDhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuL2ltYWdlXCJcblxuY29uc3QgQ29udGFjdHMgPSAoeyBzZWN0aW9uQ29udGFjdHMgfSkgPT4ge1xuICBjb25zdCBjb3B5VGV4dCA9ICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgd2luZG93Lm5hdmlnYXRvci5jbGlwYm9hcmRcbiAgICAgICAgLndyaXRlVGV4dChzZWN0aW9uQ29udGFjdHMuYXR0cmlidXRlcy5hZGRyZXNzTGluaylcbiAgICAgICAgLnRoZW4oKCkgPT4ge30pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWN0c1wiIGlkPVwiY29udGFjdHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdHNfX2NvbnRlbnQgdWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29udGFjdHNfX2hlYWRpbmdcIj5cbiAgICAgICAgICB7c2VjdGlvbkNvbnRhY3RzLmF0dHJpYnV0ZXMudGl0bGV9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstZ3JpZCB1ay1ncmlkLW1lZGl1bVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstd2lkdGgtMi0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RzX19hZGRyZXNzLWJsb2NrXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZHJlc3MtYmxvY2sgYWRkcmVzcy1ibG9ja19fdGV4dFwiPlxuICAgICAgICAgICAgICAgIHtzZWN0aW9uQ29udGFjdHMuYXR0cmlidXRlcy5hZGRyZXNzTGlua31cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17Y29weVRleHR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkcmVzcy1ibG9jayBhZGRyZXNzLWJsb2NrX19jb3B5XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3NlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLmJ1dHRvbkljb259IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay13aWR0aC0xLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdHNfX2J1dHRvbi1ibG9ja1wiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1ibG9ja19fYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBocmVmPXtcIm1haWx0bzpcIiArIHNlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLmFkZHJlc3NMaW5rfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3NlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLmJ1dHRvblRleHR9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHNcbiJdLCJzb3VyY2VSb290IjoiIn0=