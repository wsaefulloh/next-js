"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 84:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(834);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_5__, _components_Layout_layout__WEBPACK_IMPORTED_MODULE_4__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_5__, _components_Layout_layout__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






function Home(props) {
    const { dataUsers  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        pageTitle: "Home Page",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row row-cols-2",
            children: dataUsers.map((home)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col p-3",
                    onClick: async ()=>{
                        var ref;
                        const token = (ref = js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].get('rememberMe')) === null || ref === void 0 ? void 0 : ref.toString();
                        if ((token === null || token === void 0 ? void 0 : token.length) == 0) {
                            alert('login dulu');
                            router.push('/');
                        } else {
                            axios__WEBPACK_IMPORTED_MODULE_1___default()({
                                method: "GET",
                                url: `${"https://wahyu-nest-js.herokuapp.com/"}/users/search/detail/profile`,
                                headers: {
                                    'token': `${token}`
                                }
                            }).then((res)=>{
                                const role = res.data.response.role.name_role;
                                if (role != undefined && role == 'admin') {
                                    router.push(`/users/${home.id}`);
                                } else {
                                    alert('anda bukan admin');
                                }
                            }).catch((err)=>{
                                console.log(err);
                            });
                        }
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "card-custom col d-flex p-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                src: home.photo,
                                width: 80,
                                height: 80,
                                alt: "profile"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row ms-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "m-0 p-0",
                                        children: home.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "m-0 p-0",
                                        children: home.position
                                    })
                                ]
                            })
                        ]
                    })
                }, home.id));
            })
        })
    }));
};
async function getServerSideProps() {
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${"https://wahyu-nest-js.herokuapp.com/"}/users/search/role/2`);
    const dataUsers = res.data.response;
    return {
        props: {
            dataUsers
        }
    };
}

});

/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 18:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,834], () => (__webpack_exec__(84)));
module.exports = __webpack_exports__;

})();