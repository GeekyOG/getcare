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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ef2cf8b9b1eb\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzUxOGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJlZjJjZjhiOWIxZWJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/layout/navbar/TabNavigation.tsx":
/*!****************************************************!*\
  !*** ./components/layout/navbar/TabNavigation.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TabNavigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction TabNavigation() {\n    _s();\n    const routes = [\n        {\n            path: \"/therapist\",\n            title: \"For Therapist\"\n        },\n        {\n            path: \"/creatives\",\n            title: \"For Creatives\"\n        },\n        {\n            path: \"/about-us\",\n            title: \"About Us\"\n        },\n        {\n            path: \"/contact-us\",\n            title: \"Contact Us\"\n        },\n        {\n            path: \"/faqs\",\n            title: \"FAQs\"\n        }\n    ];\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const getActiveLinkClassName = (pathname)=>{\n        const commonActiveClassName = \"rounded-[12px] bg-white font-bold \";\n        if (pathname === \"/therapist\") {\n            return (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commonActiveClassName, \"text-secondary-750\");\n        } else if (pathname === \"/creatives\" || pathname === \"/about-us\") {\n            return (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commonActiveClassName, \"text-primary-550\");\n        } else if (pathname === \"/contact-us\") {\n            return (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commonActiveClassName, \"text-secondary-650\");\n        }\n        return commonActiveClassName;\n    };\n    const getActiveTabClassName = ()=>{\n        if (pathname === \"/creatives\") {\n            return \"bg-secondary-100\";\n        } else if (pathname === \"/contact-us\") {\n            return \"bg-secondary-100\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"hidden h-14 items-center gap-2.5 rounded-xl bg-neutral-100 p-2 -tracking-[0.42px] lg:flex\", getActiveTabClassName()),\n        children: routes.map((route)=>{\n            const isActivePath = pathname === route.path;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-full items-center justify-center px-3 text-sm/[140%] tracking-1 text-neutral-400 transition-all\", isActivePath ? getActiveLinkClassName(pathname) : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: route.path,\n                    children: route.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\onoju\\\\Downloads\\\\get-care-web-6\\\\components\\\\layout\\\\navbar\\\\TabNavigation.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, this)\n            }, route.path, false, {\n                fileName: \"C:\\\\Users\\\\onoju\\\\Downloads\\\\get-care-web-6\\\\components\\\\layout\\\\navbar\\\\TabNavigation.tsx\",\n                lineNumber: 51,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\onoju\\\\Downloads\\\\get-care-web-6\\\\components\\\\layout\\\\navbar\\\\TabNavigation.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(TabNavigation, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = TabNavigation;\nvar _c;\n$RefreshReg$(_c, \"TabNavigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9UYWJOYXZpZ2F0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFd0I7QUFDSztBQUNpQjtBQUUvQixTQUFTRzs7SUFDdEIsTUFBTUMsU0FBUztRQUNiO1lBQUVDLE1BQU07WUFBY0MsT0FBTztRQUFnQjtRQUM3QztZQUFFRCxNQUFNO1lBQWNDLE9BQU87UUFBZ0I7UUFDN0M7WUFBRUQsTUFBTTtZQUFhQyxPQUFPO1FBQVc7UUFDdkM7WUFBRUQsTUFBTTtZQUFlQyxPQUFPO1FBQWE7UUFDM0M7WUFBRUQsTUFBTTtZQUFTQyxPQUFPO1FBQU87S0FDaEM7SUFFRCxNQUFNQyxXQUFXTCw0REFBV0E7SUFFNUIsTUFBTU0seUJBQXlCLENBQUNEO1FBQzlCLE1BQU1FLHdCQUF3QjtRQUU5QixJQUFJRixhQUFhLGNBQWM7WUFDN0IsT0FBT1AsZ0RBQUlBLENBQUNTLHVCQUF1QjtRQUNyQyxPQUFPLElBQUlGLGFBQWEsZ0JBQWdCQSxhQUFhLGFBQWE7WUFDaEUsT0FBT1AsZ0RBQUlBLENBQUNTLHVCQUF1QjtRQUNyQyxPQUFPLElBQUlGLGFBQWEsZUFBZTtZQUNyQyxPQUFPUCxnREFBSUEsQ0FBQ1MsdUJBQXVCO1FBQ3JDO1FBRUEsT0FBT0E7SUFDVDtJQUVBLE1BQU1DLHdCQUF3QjtRQUM1QixJQUFJSCxhQUFhLGNBQWM7WUFDN0IsT0FBTztRQUNULE9BQU8sSUFBSUEsYUFBYSxlQUFlO1lBQ3JDLE9BQU87UUFDVDtJQUNGO0lBRUEscUJBQ0UsOERBQUNJO1FBQ0NDLFdBQVdaLGdEQUFJQSxDQUNiLDZGQUNBVTtrQkFHRE4sT0FBT1MsR0FBRyxDQUFDLENBQUNDO1lBQ1gsTUFBTUMsZUFBZVIsYUFBYU8sTUFBTVQsSUFBSTtZQUU1QyxxQkFDRSw4REFBQ007Z0JBRUNDLFdBQVdaLGdEQUFJQSxDQUNiLDBHQUNBZSxlQUFlUCx1QkFBdUJELFlBQVk7MEJBR3BELDRFQUFDTixrREFBSUE7b0JBQUNlLE1BQU1GLE1BQU1ULElBQUk7OEJBQUdTLE1BQU1SLEtBQUs7Ozs7OztlQU4vQlEsTUFBTVQsSUFBSTs7Ozs7UUFTckI7Ozs7OztBQUdOO0dBekR3QkY7O1FBU0xELHdEQUFXQTs7O0tBVE5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9UYWJOYXZpZ2F0aW9uLnRzeD81ZDJmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJOYXZpZ2F0aW9uKCkge1xuICBjb25zdCByb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAnL3RoZXJhcGlzdCcsIHRpdGxlOiAnRm9yIFRoZXJhcGlzdCcgfSxcbiAgICB7IHBhdGg6ICcvY3JlYXRpdmVzJywgdGl0bGU6ICdGb3IgQ3JlYXRpdmVzJyB9LFxuICAgIHsgcGF0aDogJy9hYm91dC11cycsIHRpdGxlOiAnQWJvdXQgVXMnIH0sXG4gICAgeyBwYXRoOiAnL2NvbnRhY3QtdXMnLCB0aXRsZTogJ0NvbnRhY3QgVXMnIH0sXG4gICAgeyBwYXRoOiAnL2ZhcXMnLCB0aXRsZTogJ0ZBUXMnIH0sXG4gIF07XG5cbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuXG4gIGNvbnN0IGdldEFjdGl2ZUxpbmtDbGFzc05hbWUgPSAocGF0aG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGNvbW1vbkFjdGl2ZUNsYXNzTmFtZSA9ICdyb3VuZGVkLVsxMnB4XSBiZy13aGl0ZSBmb250LWJvbGQgJztcblxuICAgIGlmIChwYXRobmFtZSA9PT0gJy90aGVyYXBpc3QnKSB7XG4gICAgICByZXR1cm4gY2xzeChjb21tb25BY3RpdmVDbGFzc05hbWUsICd0ZXh0LXNlY29uZGFyeS03NTAnKTtcbiAgICB9IGVsc2UgaWYgKHBhdGhuYW1lID09PSAnL2NyZWF0aXZlcycgfHwgcGF0aG5hbWUgPT09ICcvYWJvdXQtdXMnKSB7XG4gICAgICByZXR1cm4gY2xzeChjb21tb25BY3RpdmVDbGFzc05hbWUsICd0ZXh0LXByaW1hcnktNTUwJyk7XG4gICAgfSBlbHNlIGlmIChwYXRobmFtZSA9PT0gJy9jb250YWN0LXVzJykge1xuICAgICAgcmV0dXJuIGNsc3goY29tbW9uQWN0aXZlQ2xhc3NOYW1lLCAndGV4dC1zZWNvbmRhcnktNjUwJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbW1vbkFjdGl2ZUNsYXNzTmFtZTtcbiAgfTtcblxuICBjb25zdCBnZXRBY3RpdmVUYWJDbGFzc05hbWUgPSAoKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2NyZWF0aXZlcycpIHtcbiAgICAgIHJldHVybiAnYmctc2Vjb25kYXJ5LTEwMCc7XG4gICAgfSBlbHNlIGlmIChwYXRobmFtZSA9PT0gJy9jb250YWN0LXVzJykge1xuICAgICAgcmV0dXJuICdiZy1zZWNvbmRhcnktMTAwJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICdoaWRkZW4gaC0xNCBpdGVtcy1jZW50ZXIgZ2FwLTIuNSByb3VuZGVkLXhsIGJnLW5ldXRyYWwtMTAwIHAtMiAtdHJhY2tpbmctWzAuNDJweF0gbGc6ZmxleCcsXG4gICAgICAgIGdldEFjdGl2ZVRhYkNsYXNzTmFtZSgpLFxuICAgICAgKX1cbiAgICA+XG4gICAgICB7cm91dGVzLm1hcCgocm91dGUpID0+IHtcbiAgICAgICAgY29uc3QgaXNBY3RpdmVQYXRoID0gcGF0aG5hbWUgPT09IHJvdXRlLnBhdGg7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e3JvdXRlLnBhdGh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICdmbGV4IGgtZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtMyB0ZXh0LXNtL1sxNDAlXSB0cmFja2luZy0xIHRleHQtbmV1dHJhbC00MDAgdHJhbnNpdGlvbi1hbGwnLFxuICAgICAgICAgICAgICBpc0FjdGl2ZVBhdGggPyBnZXRBY3RpdmVMaW5rQ2xhc3NOYW1lKHBhdGhuYW1lKSA6ICcnLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPXtyb3V0ZS5wYXRofT57cm91dGUudGl0bGV9PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY2xzeCIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsIlRhYk5hdmlnYXRpb24iLCJyb3V0ZXMiLCJwYXRoIiwidGl0bGUiLCJwYXRobmFtZSIsImdldEFjdGl2ZUxpbmtDbGFzc05hbWUiLCJjb21tb25BY3RpdmVDbGFzc05hbWUiLCJnZXRBY3RpdmVUYWJDbGFzc05hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJyb3V0ZSIsImlzQWN0aXZlUGF0aCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/layout/navbar/TabNavigation.tsx\n"));

/***/ })

});