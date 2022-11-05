self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/donations.js":
/*!*********************************!*\
  !*** ./components/donations.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\donations.js",
    _this = undefined,
    _s = $RefreshSig$();





var Donations = function Donations(_ref) {
  _s();

  var sectionDonation = _ref.sectionDonation,
      sectionContacts = _ref.sectionContacts;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      selectedDonation = _useState[0],
      setSelectedDonation = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      selectedDonationBank = _useState2[0],
      setSelectedDonationBank = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      selectedDonationCrypto = _useState3[0],
      setSelectedDonationCrypto = _useState3[1];

  var copyText = function copyText(text) {
    window.prompt("Copy text?", sectionContacts.attributes.addressLink);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "donations",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-container uk-container-large",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "donations__content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "donations__title",
          children: sectionDonation.attributes.donationsData.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "donations__menu",
          children: sectionDonation.attributes.donationsData.types.map(function (type, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "donations__menu-item ".concat(i === selectedDonation ? "donations__menu-item_active" : ""),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: setSelectedDonation.bind(_this, i),
                children: type.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 19
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "donations__desc",
          children: selectedDonation === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "donations__mobilepay",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "donations__mobilepay-desc",
              children: sectionDonation.attributes.donationsData.types[selectedDonation].desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: sectionDonation.attributes.donationsData.donationLink,
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "button donations__button",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: sectionDonation.attributes.donationsData.types[selectedDonation].button
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, _this) : selectedDonation === 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "donations__banks",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: "donations__submenu",
              children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes.map(function (subtype, j) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "donations__submenu-item ".concat(j === selectedDonationBank ? "donations__submenu-item_active" : ""),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    onClick: setSelectedDonationBank.bind(_this, j),
                    children: subtype.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 25
                  }, _this)
                }, j, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, _this), selectedDonationBank >= 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "donations__banks-desc",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.name.key
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.name.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.code.key
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.code.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                onClick: copyText.bind(_this, sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.code.value),
                className: "donations donations__copy",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                  image: sectionContacts.attributes.buttonIcon
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.bank.key
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.bank.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.account.key
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.account.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                onClick: copyText.bind(_this, sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.account.value),
                className: "donations donations__copy",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                  image: sectionContacts.attributes.buttonIcon
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.currency.key
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].desc.currency.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "donations__banks-guide",
                children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationBank].guide
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 19
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, _this) : selectedDonation === 2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "donations__crypto",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: "donations__submenu",
              children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes.map(function (subtype, k) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "donations__submenu-item ".concat(k === selectedDonationCrypto ? "donations__submenu-item_active" : ""),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    onClick: setSelectedDonationCrypto.bind(_this, k),
                    children: subtype.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 25
                  }, _this)
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 17
            }, _this), selectedDonationBank >= 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "donations__crypto-desc",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationCrypto].wallet
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                onClick: copyText.bind(_this, sectionDonation.attributes.donationsData.types[selectedDonation].subtypes[selectedDonationCrypto].wallet),
                className: "donations donations__copy",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                  image: sectionContacts.attributes.buttonIcon
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 19
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 15
          }, _this) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(Donations, "gBWlQHWJ92EKB2eJKHLGsLBXkuw=");

_c = Donations;
/* harmony default export */ __webpack_exports__["default"] = (Donations);

var _c;

$RefreshReg$(_c, "Donations");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kb25hdGlvbnMuanMiXSwibmFtZXMiOlsiRG9uYXRpb25zIiwic2VjdGlvbkRvbmF0aW9uIiwic2VjdGlvbkNvbnRhY3RzIiwidXNlU3RhdGUiLCJzZWxlY3RlZERvbmF0aW9uIiwic2V0U2VsZWN0ZWREb25hdGlvbiIsInNlbGVjdGVkRG9uYXRpb25CYW5rIiwic2V0U2VsZWN0ZWREb25hdGlvbkJhbmsiLCJzZWxlY3RlZERvbmF0aW9uQ3J5cHRvIiwic2V0U2VsZWN0ZWREb25hdGlvbkNyeXB0byIsImNvcHlUZXh0IiwidGV4dCIsIndpbmRvdyIsInByb21wdCIsImF0dHJpYnV0ZXMiLCJhZGRyZXNzTGluayIsImRvbmF0aW9uc0RhdGEiLCJ0aXRsZSIsInR5cGVzIiwibWFwIiwidHlwZSIsImkiLCJiaW5kIiwibmFtZSIsImRlc2MiLCJkb25hdGlvbkxpbmsiLCJidXR0b24iLCJzdWJ0eXBlcyIsInN1YnR5cGUiLCJqIiwia2V5IiwidmFsdWUiLCJjb2RlIiwiYnV0dG9uSWNvbiIsImJhbmsiLCJhY2NvdW50IiwiY3VycmVuY3kiLCJndWlkZSIsImsiLCJ3YWxsZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUEwQztBQUFBOztBQUFBLE1BQXZDQyxlQUF1QyxRQUF2Q0EsZUFBdUM7QUFBQSxNQUF0QkMsZUFBc0IsUUFBdEJBLGVBQXNCOztBQUFBLGtCQUNWQywrQ0FBUSxDQUFDLENBQUQsQ0FERTtBQUFBLE1BQ25EQyxnQkFEbUQ7QUFBQSxNQUNqQ0MsbUJBRGlDOztBQUFBLG1CQUVGRiwrQ0FBUSxDQUFDLENBQUQsQ0FGTjtBQUFBLE1BRW5ERyxvQkFGbUQ7QUFBQSxNQUU3QkMsdUJBRjZCOztBQUFBLG1CQUdFSiwrQ0FBUSxDQUFDLENBQUQsQ0FIVjtBQUFBLE1BR25ESyxzQkFIbUQ7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RUV1QixRQUZGLENBRVduQixzQkFGWCxFQUVtQytCLE1BSjVCLENBRFg7QUFPRSx5QkFBUyxFQUFDLDJCQVBaO0FBQUEsdUNBU0UsOERBQUMsMkNBQUQ7QUFDRSx1QkFBSyxFQUFFckMsZUFBZSxDQUFDWSxVQUFoQixDQUEyQm1CO0FBRHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxHQXVCRyxJQTlDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREUsR0FpREE7QUFqTk47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThPRCxDQXZQRDs7R0FBTWpDLFM7O0tBQUFBLFM7QUF5UE4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWIxNDFhZTgyNTFlNjE1YjNiMGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmNvbnN0IERvbmF0aW9ucyA9ICh7IHNlY3Rpb25Eb25hdGlvbiwgc2VjdGlvbkNvbnRhY3RzIH0pID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkRG9uYXRpb24sIHNldFNlbGVjdGVkRG9uYXRpb25dID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3NlbGVjdGVkRG9uYXRpb25CYW5rLCBzZXRTZWxlY3RlZERvbmF0aW9uQmFua10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbc2VsZWN0ZWREb25hdGlvbkNyeXB0bywgc2V0U2VsZWN0ZWREb25hdGlvbkNyeXB0b10gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IGNvcHlUZXh0ID0gKHRleHQpID0+IHtcbiAgICAgIHdpbmRvdy5wcm9tcHQoXCJDb3B5IHRleHQ/XCIsIHNlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLmFkZHJlc3NMaW5rKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkb25hdGlvbnNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbmF0aW9uc19fY29udGVudFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJkb25hdGlvbnNfX3RpdGxlXCI+XG4gICAgICAgICAgICB7c2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50aXRsZX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkb25hdGlvbnNfX21lbnVcIj5cbiAgICAgICAgICAgIHtzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzLm1hcCgodHlwZSwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZG9uYXRpb25zX19tZW51LWl0ZW0gJHtcbiAgICAgICAgICAgICAgICAgICAgaSA9PT0gc2VsZWN0ZWREb25hdGlvbiA/IFwiZG9uYXRpb25zX19tZW51LWl0ZW1fYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NldFNlbGVjdGVkRG9uYXRpb24uYmluZCh0aGlzLCBpKX0+XG4gICAgICAgICAgICAgICAgICAgIHt0eXBlLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9uYXRpb25zX19kZXNjXCI+XG4gICAgICAgICAgICB7c2VsZWN0ZWREb25hdGlvbiA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGlvbnNfX21vYmlsZXBheVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRvbmF0aW9uc19fbW9iaWxlcGF5LWRlc2NcIj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIF0uZGVzY1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj17c2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS5kb25hdGlvbkxpbmt9XG4gICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGRvbmF0aW9uc19fYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIF0uYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IHNlbGVjdGVkRG9uYXRpb24gPT09IDEgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9uYXRpb25zX19iYW5rc1wiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkb25hdGlvbnNfX3N1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgIHtzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzLm1hcCgoc3VidHlwZSwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtqfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZG9uYXRpb25zX19zdWJtZW51LWl0ZW0gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaiA9PT0gc2VsZWN0ZWREb25hdGlvbkJhbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZG9uYXRpb25zX19zdWJtZW51LWl0ZW1fYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2V0U2VsZWN0ZWREb25hdGlvbkJhbmsuYmluZCh0aGlzLCBqKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJ0eXBlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZERvbmF0aW9uQmFuayA+PSAwID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGlvbnNfX2JhbmtzLWRlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZGVzYy5uYW1lLmtleVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25CYW5rXS5kZXNjLm5hbWUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIF0uc3VidHlwZXNbc2VsZWN0ZWREb25hdGlvbkJhbmtdLmRlc2MuY29kZS5rZXlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZGVzYy5jb2RlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29weVRleHQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25CYW5rXS5kZXNjLmNvZGUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbmF0aW9ucyBkb25hdGlvbnNfX2NvcHlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3NlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLmJ1dHRvbkljb259XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZGVzYy5iYW5rLmtleVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25CYW5rXS5kZXNjLmJhbmsudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIF0uc3VidHlwZXNbc2VsZWN0ZWREb25hdGlvbkJhbmtdLmRlc2MuYWNjb3VudC5rZXlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZGVzYy5hY2NvdW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29weVRleHQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25CYW5rXS5kZXNjLmFjY291bnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbmF0aW9ucyBkb25hdGlvbnNfX2NvcHlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3NlY3Rpb25Db250YWN0cy5hdHRyaWJ1dGVzLmJ1dHRvbkljb259XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZGVzYy5jdXJyZW5jeS5rZXlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRvbmF0aW9uLmF0dHJpYnV0ZXMuZG9uYXRpb25zRGF0YS50eXBlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb25hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgXS5zdWJ0eXBlc1tzZWxlY3RlZERvbmF0aW9uQmFua10uZGVzYy5jdXJyZW5jeS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZG9uYXRpb25zX19iYW5rcy1ndWlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIF0uc3VidHlwZXNbc2VsZWN0ZWREb25hdGlvbkJhbmtdLmd1aWRlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogc2VsZWN0ZWREb25hdGlvbiA9PT0gMiA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGlvbnNfX2NyeXB0b1wiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkb25hdGlvbnNfX3N1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgIHtzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzLm1hcCgoc3VidHlwZSwgaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZG9uYXRpb25zX19zdWJtZW51LWl0ZW0gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgayA9PT0gc2VsZWN0ZWREb25hdGlvbkNyeXB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJkb25hdGlvbnNfX3N1Ym1lbnUtaXRlbV9hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZXRTZWxlY3RlZERvbmF0aW9uQ3J5cHRvLmJpbmQodGhpcywgayl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJ0eXBlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZERvbmF0aW9uQmFuayA+PSAwID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGlvbnNfX2NyeXB0by1kZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Eb25hdGlvbi5hdHRyaWJ1dGVzLmRvbmF0aW9uc0RhdGEudHlwZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIF0uc3VidHlwZXNbc2VsZWN0ZWREb25hdGlvbkNyeXB0b10ud2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29weVRleHQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRG9uYXRpb24uYXR0cmlidXRlcy5kb25hdGlvbnNEYXRhLnR5cGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBdLnN1YnR5cGVzW3NlbGVjdGVkRG9uYXRpb25DcnlwdG9dLndhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9uYXRpb25zIGRvbmF0aW9uc19fY29weVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17c2VjdGlvbkNvbnRhY3RzLmF0dHJpYnV0ZXMuYnV0dG9uSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9uYXRpb25zXG4iXSwic291cmNlUm9vdCI6IiJ9