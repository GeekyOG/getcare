"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"024015c17885\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzUxOGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIwMjQwMTVjMTc4ODVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/ElevationScroll.tsx":
/*!****************************************!*\
  !*** ./components/ElevationScroll.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n/**\n * ElevationScroll component adds elevation to a scrollable component when scrolled beyond a specified threshold.\n * @param children - The scrollable component to apply elevation to.\n * @param threshold - The scroll position threshold in pixels. Defaults to 50\n * @param elevation - The boxShadow value to apply when scrolled beyond the threshold. Defaults to 0px 2px 4px rgba(0, 0, 0, 0.1)\n * @param shrinkPadding - The padding to apply when scrolled\n * @returns The scrollable component with elevation applied when scrolled beyond the threshold.\n */ const ElevationScroll = (param)=>{\n    let { children, threshold = 50, elevation = \"0px 24px 32px 0px rgba(204, 204, 204, 0.08)\" } = param;\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollTop = window.scrollY || document.documentElement.scrollTop;\n            setIsScrolled(scrollTop > threshold);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        threshold\n    ]);\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(children, {\n        style: {\n            boxShadow: isScrolled ? elevation : \"none\",\n            padding: isScrolled ? \"10px 0\" : \"\",\n            transition: \"all 0.2s ease-in-out\"\n        }\n    });\n};\n_s(ElevationScroll, \"UCaI8lpZVGvPrsRoIFYRt2wv0+o=\");\n_c = ElevationScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ElevationScroll);\nvar _c;\n$RefreshReg$(_c, \"ElevationScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRWxldmF0aW9uU2Nyb2xsLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBT2U7QUFTZjs7Ozs7OztDQU9DLEdBQ0QsTUFBTUcsa0JBQWtEO1FBQUMsRUFDdkRDLFFBQVEsRUFFUkMsWUFBWSxFQUFFLEVBQ2RDLFlBQVksNkNBQTZDLEVBQzFEOztJQUNDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUU3Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxlQUFlO1lBQ25CLE1BQU1DLFlBQVlDLE9BQU9DLE9BQU8sSUFBSUMsU0FBU0MsZUFBZSxDQUFDSixTQUFTO1lBQ3RFRixjQUFjRSxZQUFZTDtRQUM1QjtRQUVBTSxPQUFPSSxnQkFBZ0IsQ0FBQyxVQUFVTjtRQUVsQyxPQUFPO1lBQ0xFLE9BQU9LLG1CQUFtQixDQUFDLFVBQVVQO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDSjtLQUFVO0lBRWQscUJBQU9MLHlEQUFrQixDQUFDSSxVQUFVO1FBQ2xDYyxPQUFPO1lBQ0xDLFdBQVdaLGFBQWFELFlBQVk7WUFDcENjLFNBQVNiLGFBQWEsV0FBVztZQUNqQ2MsWUFBWTtRQUNkO0lBQ0Y7QUFDRjtHQTVCTWxCO0tBQUFBO0FBOEJOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRWxldmF0aW9uU2Nyb2xsLnRzeD9lNjJiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0LCB7XG4gIEpTWEVsZW1lbnRDb25zdHJ1Y3RvcixcbiAgUmVhY3RFbGVtZW50LFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBFbGV2YXRpb25TY3JvbGxQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQ8dW5rbm93biwgc3RyaW5nIHwgSlNYRWxlbWVudENvbnN0cnVjdG9yPHVua25vd24+PjtcbiAgdGhyZXNob2xkPzogbnVtYmVyO1xuICBlbGV2YXRpb24/OiBzdHJpbmc7XG4gIHNocmlua1BhZGRpbmc/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEVsZXZhdGlvblNjcm9sbCBjb21wb25lbnQgYWRkcyBlbGV2YXRpb24gdG8gYSBzY3JvbGxhYmxlIGNvbXBvbmVudCB3aGVuIHNjcm9sbGVkIGJleW9uZCBhIHNwZWNpZmllZCB0aHJlc2hvbGQuXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBUaGUgc2Nyb2xsYWJsZSBjb21wb25lbnQgdG8gYXBwbHkgZWxldmF0aW9uIHRvLlxuICogQHBhcmFtIHRocmVzaG9sZCAtIFRoZSBzY3JvbGwgcG9zaXRpb24gdGhyZXNob2xkIGluIHBpeGVscy4gRGVmYXVsdHMgdG8gNTBcbiAqIEBwYXJhbSBlbGV2YXRpb24gLSBUaGUgYm94U2hhZG93IHZhbHVlIHRvIGFwcGx5IHdoZW4gc2Nyb2xsZWQgYmV5b25kIHRoZSB0aHJlc2hvbGQuIERlZmF1bHRzIHRvIDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKVxuICogQHBhcmFtIHNocmlua1BhZGRpbmcgLSBUaGUgcGFkZGluZyB0byBhcHBseSB3aGVuIHNjcm9sbGVkXG4gKiBAcmV0dXJucyBUaGUgc2Nyb2xsYWJsZSBjb21wb25lbnQgd2l0aCBlbGV2YXRpb24gYXBwbGllZCB3aGVuIHNjcm9sbGVkIGJleW9uZCB0aGUgdGhyZXNob2xkLlxuICovXG5jb25zdCBFbGV2YXRpb25TY3JvbGw6IFJlYWN0LkZDPEVsZXZhdGlvblNjcm9sbFByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuXG4gIHRocmVzaG9sZCA9IDUwLFxuICBlbGV2YXRpb24gPSAnMHB4IDI0cHggMzJweCAwcHggcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjA4KScsXG59KSA9PiB7XG4gIGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBzZXRJc1Njcm9sbGVkKHNjcm9sbFRvcCA+IHRocmVzaG9sZCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFt0aHJlc2hvbGRdKTtcblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIGJveFNoYWRvdzogaXNTY3JvbGxlZCA/IGVsZXZhdGlvbiA6ICdub25lJyxcbiAgICAgIHBhZGRpbmc6IGlzU2Nyb2xsZWQgPyAnMTBweCAwJyA6ICcnLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzIGVhc2UtaW4tb3V0JyxcbiAgICB9LFxuICB9IGFzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50Pik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbGV2YXRpb25TY3JvbGw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkVsZXZhdGlvblNjcm9sbCIsImNoaWxkcmVuIiwidGhyZXNob2xkIiwiZWxldmF0aW9uIiwiaXNTY3JvbGxlZCIsInNldElzU2Nyb2xsZWQiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsb25lRWxlbWVudCIsInN0eWxlIiwiYm94U2hhZG93IiwicGFkZGluZyIsInRyYW5zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ElevationScroll.tsx\n"));

/***/ })

});