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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2a2d155fc7ba\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzUxOGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyYTJkMTU1ZmM3YmFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/ElevationScroll.tsx":
/*!****************************************!*\
  !*** ./components/ElevationScroll.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n/**\n * ElevationScroll component adds elevation to a scrollable component when scrolled beyond a specified threshold.\n * @param children - The scrollable component to apply elevation to.\n * @param threshold - The scroll position threshold in pixels. Defaults to 50\n * @param elevation - The boxShadow value to apply when scrolled beyond the threshold. Defaults to 0px 2px 4px rgba(0, 0, 0, 0.1)\n * @param shrinkPadding - The padding to apply when scrolled\n * @returns The scrollable component with elevation applied when scrolled beyond the threshold.\n */ const ElevationScroll = (param)=>{\n    let { children, threshold = 50, elevation = \"0px 24px 32px 0px rgba(204, 204, 204, 0.08)\" } = param;\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollTop = window.scrollY || document.documentElement.scrollTop;\n            setIsScrolled(scrollTop > threshold);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        threshold\n    ]);\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(children, {\n        style: {\n            boxShadow: isScrolled ? elevation : \"none\",\n            // padding: isScrolled ? '10px 0' : '',\n            transition: \"all 0.2s ease-in-out\"\n        }\n    });\n};\n_s(ElevationScroll, \"UCaI8lpZVGvPrsRoIFYRt2wv0+o=\");\n_c = ElevationScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ElevationScroll);\nvar _c;\n$RefreshReg$(_c, \"ElevationScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRWxldmF0aW9uU2Nyb2xsLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBT2U7QUFTZjs7Ozs7OztDQU9DLEdBQ0QsTUFBTUcsa0JBQWtEO1FBQUMsRUFDdkRDLFFBQVEsRUFFUkMsWUFBWSxFQUFFLEVBQ2RDLFlBQVksNkNBQTZDLEVBQzFEOztJQUNDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUU3Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxlQUFlO1lBQ25CLE1BQU1DLFlBQVlDLE9BQU9DLE9BQU8sSUFBSUMsU0FBU0MsZUFBZSxDQUFDSixTQUFTO1lBQ3RFRixjQUFjRSxZQUFZTDtRQUM1QjtRQUVBTSxPQUFPSSxnQkFBZ0IsQ0FBQyxVQUFVTjtRQUVsQyxPQUFPO1lBQ0xFLE9BQU9LLG1CQUFtQixDQUFDLFVBQVVQO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDSjtLQUFVO0lBRWQscUJBQU9MLHlEQUFrQixDQUFDSSxVQUFVO1FBQ2xDYyxPQUFPO1lBQ0xDLFdBQVdaLGFBQWFELFlBQVk7WUFDcEMsdUNBQXVDO1lBQ3ZDYyxZQUFZO1FBQ2Q7SUFDRjtBQUNGO0dBNUJNakI7S0FBQUE7QUE4Qk4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbGV2YXRpb25TY3JvbGwudHN4P2U2MmIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHtcbiAgSlNYRWxlbWVudENvbnN0cnVjdG9yLFxuICBSZWFjdEVsZW1lbnQsXG4gIHVzZUVmZmVjdCxcbiAgdXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIEVsZXZhdGlvblNjcm9sbFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0RWxlbWVudDx1bmtub3duLCBzdHJpbmcgfCBKU1hFbGVtZW50Q29uc3RydWN0b3I8dW5rbm93bj4+O1xuICB0aHJlc2hvbGQ/OiBudW1iZXI7XG4gIGVsZXZhdGlvbj86IHN0cmluZztcbiAgc2hyaW5rUGFkZGluZz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogRWxldmF0aW9uU2Nyb2xsIGNvbXBvbmVudCBhZGRzIGVsZXZhdGlvbiB0byBhIHNjcm9sbGFibGUgY29tcG9uZW50IHdoZW4gc2Nyb2xsZWQgYmV5b25kIGEgc3BlY2lmaWVkIHRocmVzaG9sZC5cbiAqIEBwYXJhbSBjaGlsZHJlbiAtIFRoZSBzY3JvbGxhYmxlIGNvbXBvbmVudCB0byBhcHBseSBlbGV2YXRpb24gdG8uXG4gKiBAcGFyYW0gdGhyZXNob2xkIC0gVGhlIHNjcm9sbCBwb3NpdGlvbiB0aHJlc2hvbGQgaW4gcGl4ZWxzLiBEZWZhdWx0cyB0byA1MFxuICogQHBhcmFtIGVsZXZhdGlvbiAtIFRoZSBib3hTaGFkb3cgdmFsdWUgdG8gYXBwbHkgd2hlbiBzY3JvbGxlZCBiZXlvbmQgdGhlIHRocmVzaG9sZC4gRGVmYXVsdHMgdG8gMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpXG4gKiBAcGFyYW0gc2hyaW5rUGFkZGluZyAtIFRoZSBwYWRkaW5nIHRvIGFwcGx5IHdoZW4gc2Nyb2xsZWRcbiAqIEByZXR1cm5zIFRoZSBzY3JvbGxhYmxlIGNvbXBvbmVudCB3aXRoIGVsZXZhdGlvbiBhcHBsaWVkIHdoZW4gc2Nyb2xsZWQgYmV5b25kIHRoZSB0aHJlc2hvbGQuXG4gKi9cbmNvbnN0IEVsZXZhdGlvblNjcm9sbDogUmVhY3QuRkM8RWxldmF0aW9uU2Nyb2xsUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG5cbiAgdGhyZXNob2xkID0gNTAsXG4gIGVsZXZhdGlvbiA9ICcwcHggMjRweCAzMnB4IDBweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMDgpJyxcbn0pID0+IHtcbiAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHNldElzU2Nyb2xsZWQoc2Nyb2xsVG9wID4gdGhyZXNob2xkKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW3RocmVzaG9sZF0pO1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICBzdHlsZToge1xuICAgICAgYm94U2hhZG93OiBpc1Njcm9sbGVkID8gZWxldmF0aW9uIDogJ25vbmUnLFxuICAgICAgLy8gcGFkZGluZzogaXNTY3JvbGxlZCA/ICcxMHB4IDAnIDogJycsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMnMgZWFzZS1pbi1vdXQnLFxuICAgIH0sXG4gIH0gYXMgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVsZXZhdGlvblNjcm9sbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRWxldmF0aW9uU2Nyb2xsIiwiY2hpbGRyZW4iLCJ0aHJlc2hvbGQiLCJlbGV2YXRpb24iLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xvbmVFbGVtZW50Iiwic3R5bGUiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ElevationScroll.tsx\n"));

/***/ })

});