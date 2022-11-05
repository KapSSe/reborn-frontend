self["webpackHotUpdate_N_E"]("pages/index",{

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
    window.prompt("Copy text?", sectionContacts.attributes.addressLink); // if (typeof window !== "undefined") {
    //   window.navigator.clipboard
    //     .writeText(sectionContacts.attributes.addressLink)
    //     .then(() => {})
    // }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "contacts",
    id: "contacts",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-container uk-container-large",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "contacts__content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "contacts__heading",
          children: sectionContacts.attributes.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "contacts__grid uk-grid uk-grid-medium",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "uk-width-2-3 contacts__grid_text",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "contacts__address-block",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "address-block address-block__text",
                children: sectionContacts.attributes.addressLink
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                onClick: copyText,
                className: "address-block address-block__copy",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_1__.default, {
                  image: sectionContacts.attributes.buttonIcon
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "uk-width-1-3 contacts__grid_button",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "contacts__button-block",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "button button-block__button",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "mailto:" + sectionContacts.attributes.addressLink,
                  children: sectionContacts.attributes.buttonText
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0cy5qcyJdLCJuYW1lcyI6WyJDb250YWN0cyIsInNlY3Rpb25Db250YWN0cyIsImNvcHlUZXh0Iiwid2luZG93IiwicHJvbXB0IiwiYXR0cmlidXRlcyIsImFkZHJlc3NMaW5rIiwidGl0bGUiLCJidXR0b25JY29uIiwiYnV0dG9uVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXlCO0FBQUEsTUFBdEJDLGVBQXNCLFFBQXRCQSxlQUFzQjs7QUFDeEMsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkMsVUFBTSxDQUFDQyxNQUFQLENBQWMsWUFBZCxFQUE0QkgsZUFBZSxDQUFDSSxVQUFoQixDQUEyQkMsV0FBdkQsRUFEcUIsQ0FFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBUEQ7O0FBU0Esc0JBQ0U7QUFBUyxhQUFTLEVBQUMsVUFBbkI7QUFBOEIsTUFBRSxFQUFDLFVBQWpDO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsaUNBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsbUJBQWQ7QUFBQSxvQkFDR0wsZUFBZSxDQUFDSSxVQUFoQixDQUEyQkU7QUFEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUssbUJBQVMsRUFBQyx1Q0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxrQ0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyx5QkFBZjtBQUFBLHNDQUNFO0FBQU0seUJBQVMsRUFBQyxtQ0FBaEI7QUFBQSwwQkFDR04sZUFBZSxDQUFDSSxVQUFoQixDQUEyQkM7QUFEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQ0UsdUJBQU8sRUFBRUosUUFEWDtBQUVFLHlCQUFTLEVBQUMsbUNBRlo7QUFBQSx1Q0FJRSw4REFBQywyQ0FBRDtBQUFXLHVCQUFLLEVBQUVELGVBQWUsQ0FBQ0ksVUFBaEIsQ0FBMkJHO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFjRTtBQUFLLHFCQUFTLEVBQUMsb0NBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsd0JBQWY7QUFBQSxxQ0FDRTtBQUFRLHlCQUFTLEVBQUMsNkJBQWxCO0FBQUEsdUNBQ0U7QUFBRyxzQkFBSSxFQUFFLFlBQVlQLGVBQWUsQ0FBQ0ksVUFBaEIsQ0FBMkJDLFdBQWhEO0FBQUEsNEJBQ0dMLGVBQWUsQ0FBQ0ksVUFBaEIsQ0FBMkJJO0FBRDlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0E3Q0Q7O0tBQU1ULFE7QUE4Q04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWJiODM5YzJkOGNiNmEyY2I3NzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxuXG5jb25zdCBDb250YWN0cyA9ICh7IHNlY3Rpb25Db250YWN0cyB9KSA9PiB7XG4gIGNvbnN0IGNvcHlUZXh0ID0gKCkgPT4ge1xuICAgIHdpbmRvdy5wcm9tcHQoXCJDb3B5IHRleHQ/XCIsIHNlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLmFkZHJlc3NMaW5rKVxuICAgIC8vIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8gICB3aW5kb3cubmF2aWdhdG9yLmNsaXBib2FyZFxuICAgIC8vICAgICAud3JpdGVUZXh0KHNlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLmFkZHJlc3NMaW5rKVxuICAgIC8vICAgICAudGhlbigoKSA9PiB7fSlcbiAgICAvLyB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3RzXCIgaWQ9XCJjb250YWN0c1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdHNfX2NvbnRlbnRcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29udGFjdHNfX2hlYWRpbmdcIj5cbiAgICAgICAgICAgIHtzZWN0aW9uQ29udGFjdHMuYXR0cmlidXRlcy50aXRsZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdHNfX2dyaWQgdWstZ3JpZCB1ay1ncmlkLW1lZGl1bVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay13aWR0aC0yLTMgY29udGFjdHNfX2dyaWRfdGV4dFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RzX19hZGRyZXNzLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkcmVzcy1ibG9jayBhZGRyZXNzLWJsb2NrX190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICB7c2VjdGlvbkNvbnRhY3RzLmF0dHJpYnV0ZXMuYWRkcmVzc0xpbmt9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvcHlUZXh0fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkcmVzcy1ibG9jayBhZGRyZXNzLWJsb2NrX19jb3B5XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtzZWN0aW9uQ29udGFjdHMuYXR0cmlidXRlcy5idXR0b25JY29ufSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay13aWR0aC0xLTMgY29udGFjdHNfX2dyaWRfYnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdHNfX2J1dHRvbi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1ibG9ja19fYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIm1haWx0bzpcIiArIHNlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLmFkZHJlc3NMaW5rfT5cbiAgICAgICAgICAgICAgICAgICAge3NlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLmJ1dHRvblRleHR9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBDb250YWN0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==