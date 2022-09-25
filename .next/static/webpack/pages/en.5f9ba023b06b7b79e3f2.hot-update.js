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
  var sectionContacts = _ref.sectionContacts,
      lang = _ref.lang;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0cy5qcyJdLCJuYW1lcyI6WyJDb250YWN0cyIsInNlY3Rpb25Db250YWN0cyIsImxhbmciLCJjb3B5VGV4dCIsIndpbmRvdyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImF0dHJpYnV0ZXMiLCJhZGRyZXNzTGluayIsInRoZW4iLCJ0aXRsZSIsImJ1dHRvbkljb24iLCJidXR0b25UZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBK0I7QUFBQSxNQUE1QkMsZUFBNEIsUUFBNUJBLGVBQTRCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUM5QyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLGNBQW1DO0FBQ2pDQyxZQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFNBQWpCLENBQ0dDLFNBREgsQ0FDYU4sZUFBZSxDQUFDTyxVQUFoQixDQUEyQkMsV0FEeEMsRUFFR0MsSUFGSCxDQUVRLFlBQU0sQ0FBRSxDQUZoQjtBQUdEO0FBQ0YsR0FORDs7QUFRQSxzQkFDRTtBQUFTLGFBQVMsRUFBQyxVQUFuQjtBQUE4QixNQUFFLEVBQUMsVUFBakM7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxtREFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxtQkFBZDtBQUFBLGtCQUNHVCxlQUFlLENBQUNPLFVBQWhCLENBQTJCRztBQUQ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUMsd0JBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyx5QkFBZjtBQUFBLG9DQUNFO0FBQU0sdUJBQVMsRUFBQyxtQ0FBaEI7QUFBQSx3QkFDR1YsZUFBZSxDQUFDTyxVQUFoQixDQUEyQkM7QUFEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQ0UscUJBQU8sRUFBRU4sUUFEWDtBQUVFLHVCQUFTLEVBQUMsbUNBRlo7QUFBQSxxQ0FJRSw4REFBQywyQ0FBRDtBQUFXLHFCQUFLLEVBQUVGLGVBQWUsQ0FBQ08sVUFBaEIsQ0FBMkJJO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFjRTtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyx3QkFBZjtBQUFBLG1DQUNFO0FBQ0UsdUJBQVMsRUFBQyxzQkFEWjtBQUVFLGtCQUFJLEVBQUUsWUFBWVgsZUFBZSxDQUFDTyxVQUFoQixDQUEyQkMsV0FGL0M7QUFBQSx3QkFJR1IsZUFBZSxDQUFDTyxVQUFoQixDQUEyQks7QUFKOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtDRCxDQTNDRDs7S0FBTWIsUTtBQTRDTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbi41ZjliYTAyM2IwNmI3Yjc5ZTNmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5cbmNvbnN0IENvbnRhY3RzID0gKHsgc2VjdGlvbkNvbnRhY3RzLCBsYW5nIH0pID0+IHtcbiAgY29uc3QgY29weVRleHQgPSAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IuY2xpcGJvYXJkXG4gICAgICAgIC53cml0ZVRleHQoc2VjdGlvbkNvbnRhY3RzLmF0dHJpYnV0ZXMuYWRkcmVzc0xpbmspXG4gICAgICAgIC50aGVuKCgpID0+IHt9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFjdHNcIiBpZD1cImNvbnRhY3RzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RzX19jb250ZW50IHVrLWNvbnRhaW5lciB1ay1jb250YWluZXItbGFyZ2VcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbnRhY3RzX19oZWFkaW5nXCI+XG4gICAgICAgICAge3NlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLnRpdGxlfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWdyaWQgdWstZ3JpZC1tZWRpdW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXdpZHRoLTItM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0c19fYWRkcmVzcy1ibG9ja1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGRyZXNzLWJsb2NrIGFkZHJlc3MtYmxvY2tfX3RleHRcIj5cbiAgICAgICAgICAgICAgICB7c2VjdGlvbkNvbnRhY3RzLmF0dHJpYnV0ZXMuYWRkcmVzc0xpbmt9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvcHlUZXh0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZHJlc3MtYmxvY2sgYWRkcmVzcy1ibG9ja19fY29weVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtzZWN0aW9uQ29udGFjdHMuYXR0cmlidXRlcy5idXR0b25JY29ufSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstd2lkdGgtMS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RzX19idXR0b24tYmxvY2tcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tYmxvY2tfX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgaHJlZj17XCJtYWlsdG86XCIgKyBzZWN0aW9uQ29udGFjdHMuYXR0cmlidXRlcy5hZGRyZXNzTGlua31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzZWN0aW9uQ29udGFjdHMuYXR0cmlidXRlcy5idXR0b25UZXh0fVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RzXG4iXSwic291cmNlUm9vdCI6IiJ9