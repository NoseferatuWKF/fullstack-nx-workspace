(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../node_modules/css-loader/dist/cjs.js?!./app/app.module.css":
/*!*****************************************************************************************************************!*\
  !*** C:/Repo/fullstack-nx-workspace/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./app/app.module.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app_links__1EJCP {\n  margin-left: 1rem;\n}\n.app_resume-picture__NZEl- {\n  border-radius: 50% 0 0 0;\n  box-shadow: 5px 8px 10px 4px rgb(10 10 10 / 10%), 3px 3px 6px 0px rgb(10 10 10 / 10%);\n  z-index: 100;\n}\n.app_tech-stack__3o9I3 {\n  display: flex;\n  flex-flow: wrap;\n  gap: 1rem;\n}\n", ""]);
// Exports
exports.locals = {
	"links": "app_links__1EJCP",
	"resume-picture": "app_resume-picture__NZEl-",
	"tech-stack": "app_tech-stack__3o9I3"
};
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*********************************************************************************************************!*\
  !*** C:/Repo/fullstack-nx-workspace/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./app/app.module.css":
/*!****************************!*\
  !*** ./app/app.module.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./app.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!./app/app.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module.css */ "./app/app.module.css");
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_module_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_dp_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/dp.jpg */ "./assets/dp.jpg");
/* harmony import */ var _assets_dp_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_dp_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/linkedin.svg */ "./assets/linkedin.svg");
/* harmony import */ var _assets_github_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/github-logo.svg */ "./assets/github-logo.svg");
/* harmony import */ var _assets_angular_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/angular.svg */ "./assets/angular.svg");
/* harmony import */ var _assets_react_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/react.svg */ "./assets/react.svg");
/* harmony import */ var _assets_nodejs_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/nodejs.svg */ "./assets/nodejs.svg");
/* harmony import */ var _assets_unity_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/unity.svg */ "./assets/unity.svg");
/* harmony import */ var _assets_aws_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/aws.svg */ "./assets/aws.svg");
/* harmony import */ var _assets_django_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/django.svg */ "./assets/django.svg");
/* harmony import */ var _assets_docker_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/docker.svg */ "./assets/docker.svg");
/* harmony import */ var _assets_dotnet_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/dotnet.svg */ "./assets/dotnet.svg");
/* harmony import */ var _assets_graphql_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/graphql.svg */ "./assets/graphql.svg");
/* harmony import */ var _assets_mongodb_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/mongodb.svg */ "./assets/mongodb.svg");
/* harmony import */ var _assets_mysql_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/mysql.svg */ "./assets/mysql.svg");
/* harmony import */ var _assets_postgresql_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/postgresql.svg */ "./assets/postgresql.svg");
/* harmony import */ var _assets_nestjs_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/nestjs.svg */ "./assets/nestjs.svg");
/* harmony import */ var _assets_spring_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/spring.svg */ "./assets/spring.svg");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-tooltip */ "../../../node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__);
var _jsxFileName = "C:\\Repo\\fullstack-nx-workspace\\apps\\portfolio\\src\\app\\app.tsx";




















function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
    className: "container is-fluid section",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
      className: "tile is-ancestor",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("aside", {
        className: "tile is-parent is-vertical is-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("section", {
          className: "tile card-image",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("figure", {
            className: "tile",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
              className: _app_module_css__WEBPACK_IMPORTED_MODULE_0___default.a['resume-picture'],
              src: _assets_dp_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
              alt: "DP"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("article", {
            className: "tile is-child",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("a", {
              className: "panel-block notification button",
              href: "https://www.linkedin.com/in/wan-kamal-farouq/",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                className: "image is-24x24",
                src: _assets_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
                alt: "linkedIn"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("a", {
                className: _app_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.links,
                children: "LinkedIn"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("a", {
              className: "panel-block notification button",
              href: "https://github.com/NoseferatuWKF",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                className: "image is-24x24",
                src: _assets_github_logo_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
                alt: "github"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("a", {
                className: _app_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.links,
                children: "Github"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("section", {
          className: "tile is-child card",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("article", {
            className: "card-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("p", {
              className: "title",
              children: "Wan Kamal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("p", {
              className: "subtitle",
              children: "Generalist | Software Developer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("section", {
          className: "tile is-child card",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("article", {
            className: "card-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("p", {
              className: "title",
              children: "Skillset"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
              className: "section",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("p", {
                className: "subtitle",
                children: "Programming Languages"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  className: "is-size-7 is-uppercase has-text-weight-semibold",
                  children: ["Javascript / Typescript", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("progress", {
                    className: "progress is-small is-link ",
                    value: "100",
                    max: "100"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  className: "is-size-7 is-uppercase has-text-weight-semibold",
                  children: ["C#", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("progress", {
                    className: "progress is-small is-link",
                    value: "75",
                    max: "100"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  className: "is-size-7 is-uppercase has-text-weight-semibold",
                  children: ["Java", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("progress", {
                    className: "progress is-small is-link",
                    value: "75",
                    max: "100"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  className: "is-size-7 is-uppercase has-text-weight-semibold",
                  children: ["Python", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("progress", {
                    className: "progress is-small is-link",
                    value: "60",
                    max: "100"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
              className: "section",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("p", {
                className: "subtitle",
                children: "Tech Stack"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("ul", {
                className: _app_module_css__WEBPACK_IMPORTED_MODULE_0___default.a['tech-stack'],
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                    className: "image is-24x24",
                    "data-tip": true,
                    "data-for": "angular",
                    src: _assets_angular_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
                    alt: "angular"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                    className: "image is-24x24",
                    "data-tip": true,
                    "data-for": "react",
                    src: _assets_react_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
                    alt: "react"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                    className: "image is-24x24",
                    "data-tip": true,
                    "data-for": "nodejs",
                    src: _assets_nodejs_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
                    alt: "nodejs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                    className: "image is-24x24",
                    "data-tip": true,
                    "data-for": "nestjs",
                    src: _assets_nestjs_svg__WEBPACK_IMPORTED_MODULE_16__["default"],
                    alt: "nestjs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                    className: "image is-24x24",
                    "data-tip": true,
                    "data-for": "spring",
                    src: _assets_spring_svg__WEBPACK_IMPORTED_MODULE_17__["default"],
                    alt: "spring"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                    className: "image is-24x24",
                    "data-tip": true,
                    "data-for": "unity",
                    src: _assets_unity_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
                    alt: "unity"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                    className: "image is-24x24",
                    "data-tip": true,
                    "data-for": "django",
                    src: _assets_django_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
                    alt: "django"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                    className: "image is-24x24",
                    "data-tip": true,
                    "data-for": "dotnet",
                    src: _assets_dotnet_svg__WEBPACK_IMPORTED_MODULE_11__["default"],
                    alt: "dotnet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                    className: "image is-24x24",
                    "data-tip": true,
                    "data-for": "docker",
                    src: _assets_docker_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
                    alt: "docker"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                    className: "image is-24x24",
                    "data-tip": true,
                    "data-for": "graphql",
                    src: _assets_graphql_svg__WEBPACK_IMPORTED_MODULE_12__["default"],
                    alt: "graphql"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                    className: "image is-24x24",
                    "data-tip": true,
                    "data-for": "aws",
                    src: _assets_aws_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
                    alt: "aws"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                    className: "image is-24x24",
                    "data-tip": true,
                    "data-for": "mongodb",
                    src: _assets_mongodb_svg__WEBPACK_IMPORTED_MODULE_13__["default"],
                    alt: "mongodb"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                    className: "image is-24x24",
                    "data-tip": true,
                    "data-for": "mysql",
                    src: _assets_mysql_svg__WEBPACK_IMPORTED_MODULE_14__["default"],
                    alt: "mysql"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("img", {
                    className: "image is-24x24",
                    "data-tip": true,
                    "data-for": "postgresql",
                    src: _assets_postgresql_svg__WEBPACK_IMPORTED_MODULE_15__["default"],
                    alt: "postgresql"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("section", {
          className: "tile is-child card",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("article", {
            className: "card-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("p", {
              className: "title",
              children: "What I am Learning now"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
              className: "section",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("ul", {
                className: _app_module_css__WEBPACK_IMPORTED_MODULE_0___default.a['tech-stack'],
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "FaunaDB"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "Web Assembly"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "Three.js"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "Blender"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 250,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "FL Studio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "Flask"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "GraphQL Federation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "Web Transport"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "Flutter"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("section", {
          className: "tile is-child card",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("article", {
            className: "card-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("p", {
              className: "title",
              children: "Interests"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
              className: "section",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("ul", {
                className: _app_module_css__WEBPACK_IMPORTED_MODULE_0___default.a['tech-stack'],
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "Technology"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 277,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 276,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "Automotive"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 279,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "Food"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 282,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "Arts & Music"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 286,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 285,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "Sports"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 289,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 288,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "Polyphia"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 292,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("span", {
                    className: "tag is-link",
                    children: "MotoGP"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 295,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 294,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("main", {
        className: "tile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
          className: "tile is-parent",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("section", {
            className: "tile is-child card",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("article", {
              className: "card-content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("p", {
                className: "title",
                children: "Journey so far..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("article", {
                className: "message is-link",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
                  className: "message-header",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("p", {
                    children: "Wavelet Solutions Sdn Bhd"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 309,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 308,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
                  className: "message-body",
                  children: "..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 311,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("article", {
                className: "message is-link",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
                  className: "message-header",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("p", {
                    children: "Prudential Assurance Malaysia Berhad"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 315,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 314,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
                  className: "message-body",
                  children: "..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 317,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 313,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("article", {
                className: "message is-link",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
                  className: "message-header",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("p", {
                    children: "BMW Malaysia"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 321,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 320,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
                  className: "message-body",
                  children: "..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 323,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 319,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 304,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "angular",
        place: "top",
        effect: "solid",
        children: "Angular"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "react",
        place: "top",
        effect: "solid",
        children: "React"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "nodejs",
        place: "top",
        effect: "solid",
        children: "Node.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "nestjs",
        place: "top",
        effect: "solid",
        children: "Nest.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "spring",
        place: "top",
        effect: "solid",
        children: "Spring Boot"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "unity",
        place: "top",
        effect: "solid",
        children: "Unity"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "django",
        place: "top",
        effect: "solid",
        children: "Django"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "dotnet",
        place: "top",
        effect: "solid",
        children: ".NET"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "docker",
        place: "top",
        effect: "solid",
        children: "Docker"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "graphql",
        place: "top",
        effect: "solid",
        children: "GraphQL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "aws",
        place: "top",
        effect: "solid",
        children: "Amazon Web Services"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "mongodb",
        place: "top",
        effect: "solid",
        children: "MongoDB"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "mysql",
        place: "top",
        effect: "solid",
        children: "MySQL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(react_tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "postgresql",
        place: "top",
        effect: "solid",
        children: "PostgreSQL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./assets/angular.svg":
/*!****************************!*\
  !*** ./assets/angular.svg ***!
  \****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgAngular(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: "256px",
    height: "272px",
    viewBox: "0 0 256 272",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    preserveAspectRatio: "xMidYMid",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M0.0996108949,45.522179 L125.908171,0.697276265 L255.103502,44.7252918 L234.185214,211.175097 L125.908171,271.140856 L19.3245136,211.971984 L0.0996108949,45.522179 Z",
    fill: "#E23237"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M255.103502,44.7252918 L125.908171,0.697276265 L125.908171,271.140856 L234.185214,211.274708 L255.103502,44.7252918 L255.103502,44.7252918 Z",
    fill: "#B52E31"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M126.107393,32.27393 L126.107393,32.27393 L47.7136187,206.692607 L76.9992218,206.194553 L92.7377432,166.848249 L126.207004,166.848249 L126.306615,166.848249 L163.063035,166.848249 L180.29572,206.692607 L208.286381,207.190661 L126.107393,32.27393 L126.107393,32.27393 Z M126.306615,88.155642 L152.803113,143.5393 L127.402335,143.5393 L126.107393,143.5393 L102.997665,143.5393 L126.306615,88.155642 L126.306615,88.155642 Z",
    fill: "#FFFFFF"
  }))));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgAngular);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI3MnB4IiB2aWV3Qm94PSIwIDAgMjU2IDI3MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+Cgk8Zz4KCQk8cGF0aCBkPSJNMC4wOTk2MTA4OTQ5LDQ1LjUyMjE3OSBMMTI1LjkwODE3MSwwLjY5NzI3NjI2NSBMMjU1LjEwMzUwMiw0NC43MjUyOTE4IEwyMzQuMTg1MjE0LDIxMS4xNzUwOTcgTDEyNS45MDgxNzEsMjcxLjE0MDg1NiBMMTkuMzI0NTEzNiwyMTEuOTcxOTg0IEwwLjA5OTYxMDg5NDksNDUuNTIyMTc5IFoiIGZpbGw9IiNFMjMyMzciPjwvcGF0aD4KCQk8cGF0aCBkPSJNMjU1LjEwMzUwMiw0NC43MjUyOTE4IEwxMjUuOTA4MTcxLDAuNjk3Mjc2MjY1IEwxMjUuOTA4MTcxLDI3MS4xNDA4NTYgTDIzNC4xODUyMTQsMjExLjI3NDcwOCBMMjU1LjEwMzUwMiw0NC43MjUyOTE4IEwyNTUuMTAzNTAyLDQ0LjcyNTI5MTggWiIgZmlsbD0iI0I1MkUzMSI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0xMjYuMTA3MzkzLDMyLjI3MzkzIEwxMjYuMTA3MzkzLDMyLjI3MzkzIEw0Ny43MTM2MTg3LDIwNi42OTI2MDcgTDc2Ljk5OTIyMTgsMjA2LjE5NDU1MyBMOTIuNzM3NzQzMiwxNjYuODQ4MjQ5IEwxMjYuMjA3MDA0LDE2Ni44NDgyNDkgTDEyNi4zMDY2MTUsMTY2Ljg0ODI0OSBMMTYzLjA2MzAzNSwxNjYuODQ4MjQ5IEwxODAuMjk1NzIsMjA2LjY5MjYwNyBMMjA4LjI4NjM4MSwyMDcuMTkwNjYxIEwxMjYuMTA3MzkzLDMyLjI3MzkzIEwxMjYuMTA3MzkzLDMyLjI3MzkzIFogTTEyNi4zMDY2MTUsODguMTU1NjQyIEwxNTIuODAzMTEzLDE0My41MzkzIEwxMjcuNDAyMzM1LDE0My41MzkzIEwxMjYuMTA3MzkzLDE0My41MzkzIEwxMDIuOTk3NjY1LDE0My41MzkzIEwxMjYuMzA2NjE1LDg4LjE1NTY0MiBMMTI2LjMwNjYxNSw4OC4xNTU2NDIgWiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgoJPC9nPgo8L3N2Zz4=");


/***/ }),

/***/ "./assets/aws.svg":
/*!************************!*\
  !*** ./assets/aws.svg ***!
  \************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _g;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgAws(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    height: 1465,
    viewBox: "-.1 1.1 304.9 179.8",
    width: 2500,
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "m86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2s-7.4-11.2-7.4-19.2c0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8s7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3s-7.3 2-10.8 3.4c-1.6.7-2.8 1.1-3.5 1.3s-1.2.3-1.6.3c-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1c3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8s6.8-3.4 9.5-6.4c1.6-1.9 2.8-4 3.4-6.4s1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7s-6.3-.6-9.4-.6c-6.7 0-11.6 1.3-14.9 4s-4.9 6.5-4.9 11.5c0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9l-23.5-77.3c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9s2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6s-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9s-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1s-1.5-2-1.9-4l-15.5-64.5-15.4 64.4c-.5 2-1.1 3.3-1.9 4s-2.2 1-4 1zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8s-8.9-2.5-11.5-4c-1.6-.9-2.7-1.9-3.1-2.8s-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3s1.5.6 2.5 1c3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3s5.2-5.4 5.2-9.5c0-2.8-.9-5.1-2.7-7s-5.2-3.6-10.1-5.2l-14.5-4.5c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1s4.2-6 7.2-8.2c3-2.3 6.4-4 10.4-5.2s8.2-1.7 12.6-1.7c2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6s3.2 1.2 4.2 1.8c1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8s-4.7 4.8-4.7 8.9c0 2.8 1 5.2 3 7.1s5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6s4.6 8.8 4.6 14c0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z",
    fill: "#252f3e"
  })), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    clipRule: "evenodd",
    fill: "#f90",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "m273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "m287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"
  }))));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgAws);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE0NjUiIHZpZXdCb3g9Ii0uMSAxLjEgMzA0LjkgMTc5LjgiIHdpZHRoPSIyNTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im04Ni40IDY2LjRjMCAzLjcuNCA2LjcgMS4xIDguOS44IDIuMiAxLjggNC42IDMuMiA3LjIuNS44LjcgMS42LjcgMi4zIDAgMS0uNiAyLTEuOSAzbC02LjMgNC4yYy0uOS42LTEuOC45LTIuNi45LTEgMC0yLS41LTMtMS40LTEuNC0xLjUtMi42LTMuMS0zLjYtNC43LTEtMS43LTItMy42LTMuMS01LjktNy44IDkuMi0xNy42IDEzLjgtMjkuNCAxMy44LTguNCAwLTE1LjEtMi40LTIwLTcuMnMtNy40LTExLjItNy40LTE5LjJjMC04LjUgMy0xNS40IDkuMS0yMC42czE0LjItNy44IDI0LjUtNy44YzMuNCAwIDYuOS4zIDEwLjYuOHM3LjUgMS4zIDExLjUgMi4ydi03LjNjMC03LjYtMS42LTEyLjktNC43LTE2LTMuMi0zLjEtOC42LTQuNi0xNi4zLTQuNi0zLjUgMC03LjEuNC0xMC44IDEuM3MtNy4zIDItMTAuOCAzLjRjLTEuNi43LTIuOCAxLjEtMy41IDEuM3MtMS4yLjMtMS42LjNjLTEuNCAwLTIuMS0xLTIuMS0zLjF2LTQuOWMwLTEuNi4yLTIuOC43LTMuNXMxLjQtMS40IDIuOC0yLjFjMy41LTEuOCA3LjctMy4zIDEyLjYtNC41IDQuOS0xLjMgMTAuMS0xLjkgMTUuNi0xLjkgMTEuOSAwIDIwLjYgMi43IDI2LjIgOC4xIDUuNSA1LjQgOC4zIDEzLjYgOC4zIDI0LjZ2MzIuNHptLTQwLjYgMTUuMmMzLjMgMCA2LjctLjYgMTAuMy0xLjhzNi44LTMuNCA5LjUtNi40YzEuNi0xLjkgMi44LTQgMy40LTYuNHMxLTUuMyAxLTguN3YtNC4yYy0yLjktLjctNi0xLjMtOS4yLTEuN3MtNi4zLS42LTkuNC0uNmMtNi43IDAtMTEuNiAxLjMtMTQuOSA0cy00LjkgNi41LTQuOSAxMS41YzAgNC43IDEuMiA4LjIgMy43IDEwLjYgMi40IDIuNSA1LjkgMy43IDEwLjUgMy43em04MC4zIDEwLjhjLTEuOCAwLTMtLjMtMy44LTEtLjgtLjYtMS41LTItMi4xLTMuOWwtMjMuNS03Ny4zYy0uNi0yLS45LTMuMy0uOS00IDAtMS42LjgtMi41IDIuNC0yLjVoOS44YzEuOSAwIDMuMi4zIDMuOSAxIC44LjYgMS40IDIgMiAzLjlsMTYuOCA2Ni4yIDE1LjYtNjYuMmMuNS0yIDEuMS0zLjMgMS45LTMuOXMyLjItMSA0LTFoOGMxLjkgMCAzLjIuMyA0IDEgLjguNiAxLjUgMiAxLjkgMy45bDE1LjggNjcgMTcuMy02N2MuNi0yIDEuMy0zLjMgMi0zLjkuOC0uNiAyLjEtMSAzLjktMWg5LjNjMS42IDAgMi41LjggMi41IDIuNSAwIC41LS4xIDEtLjIgMS42cy0uMyAxLjQtLjcgMi41bC0yNC4xIDc3LjNjLS42IDItMS4zIDMuMy0yLjEgMy45cy0yLjEgMS0zLjggMWgtOC42Yy0xLjkgMC0zLjItLjMtNC0xcy0xLjUtMi0xLjktNGwtMTUuNS02NC41LTE1LjQgNjQuNGMtLjUgMi0xLjEgMy4zLTEuOSA0cy0yLjIgMS00IDF6bTEyOC41IDIuN2MtNS4yIDAtMTAuNC0uNi0xNS40LTEuOHMtOC45LTIuNS0xMS41LTRjLTEuNi0uOS0yLjctMS45LTMuMS0yLjhzLS42LTEuOS0uNi0yLjh2LTUuMWMwLTIuMS44LTMuMSAyLjMtMy4xLjYgMCAxLjIuMSAxLjguM3MxLjUuNiAyLjUgMWMzLjQgMS41IDcuMSAyLjcgMTEgMy41IDQgLjggNy45IDEuMiAxMS45IDEuMiA2LjMgMCAxMS4yLTEuMSAxNC42LTMuM3M1LjItNS40IDUuMi05LjVjMC0yLjgtLjktNS4xLTIuNy03cy01LjItMy42LTEwLjEtNS4ybC0xNC41LTQuNWMtNy4zLTIuMy0xMi43LTUuNy0xNi0xMC4yLTMuMy00LjQtNS05LjMtNS0xNC41IDAtNC4yLjktNy45IDIuNy0xMS4xczQuMi02IDcuMi04LjJjMy0yLjMgNi40LTQgMTAuNC01LjJzOC4yLTEuNyAxMi42LTEuN2MyLjIgMCA0LjUuMSA2LjcuNCAyLjMuMyA0LjQuNyA2LjUgMS4xIDIgLjUgMy45IDEgNS43IDEuNnMzLjIgMS4yIDQuMiAxLjhjMS40LjggMi40IDEuNiAzIDIuNS42LjguOSAxLjkuOSAzLjN2NC43YzAgMi4xLS44IDMuMi0yLjMgMy4yLS44IDAtMi4xLS40LTMuOC0xLjItNS43LTIuNi0xMi4xLTMuOS0xOS4yLTMuOS01LjcgMC0xMC4yLjktMTMuMyAyLjhzLTQuNyA0LjgtNC43IDguOWMwIDIuOCAxIDUuMiAzIDcuMXM1LjcgMy44IDExIDUuNWwxNC4yIDQuNWM3LjIgMi4zIDEyLjQgNS41IDE1LjUgOS42czQuNiA4LjggNC42IDE0YzAgNC4zLS45IDguMi0yLjYgMTEuNi0xLjggMy40LTQuMiA2LjQtNy4zIDguOC0zLjEgMi41LTYuOCA0LjMtMTEuMSA1LjYtNC41IDEuNC05LjIgMi4xLTE0LjMgMi4xeiIgZmlsbD0iIzI1MmYzZSIvPjxnIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2Y5MCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJtMjczLjUgMTQzLjdjLTMyLjkgMjQuMy04MC43IDM3LjItMTIxLjggMzcuMi01Ny42IDAtMTA5LjUtMjEuMy0xNDguNy01Ni43LTMuMS0yLjgtLjMtNi42IDMuNC00LjQgNDIuNCAyNC42IDk0LjcgMzkuNSAxNDguOCAzOS41IDM2LjUgMCA3Ni42LTcuNiAxMTMuNS0yMy4yIDUuNS0yLjUgMTAuMiAzLjYgNC44IDcuNnoiLz48cGF0aCBkPSJtMjg3LjIgMTI4LjFjLTQuMi01LjQtMjcuOC0yLjYtMzguNS0xLjMtMy4yLjQtMy43LTIuNC0uOC00LjUgMTguOC0xMy4yIDQ5LjctOS40IDUzLjMtNSAzLjYgNC41LTEgMzUuNC0xOC42IDUwLjItMi43IDIuMy01LjMgMS4xLTQuMS0xLjkgNC05LjkgMTIuOS0zMi4yIDguNy0zNy41eiIvPjwvZz48L3N2Zz4=");


/***/ }),

/***/ "./assets/django.svg":
/*!***************************!*\
  !*** ./assets/django.svg ***!
  \***************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _g;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgDjango(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    id: "Layer_1",
    xmlns: "&ns_svg;",
    xmlnsXlink: "&ns_xlink;",
    width: 504.09,
    height: 215.994,
    viewBox: "0 0 504.09 215.994",
    overflow: "visible",
    enableBackground: "new 0 0 504.09 215.994",
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#092E20",
    d: "M504.09,187.994c0,15.464-12.536,28-28,28H28c-15.464,0-28-12.536-28-28V28C0,12.536,12.536,0,28,0h448.09 c15.464,0,28,12.536,28,28V187.994z"
  })), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#FFFFFF",
    d: "M86.945,33.919h23.872v110.496c-12.246,2.325-21.237,3.255-31.002,3.255 c-29.142,0-44.333-13.174-44.333-38.443c0-24.336,16.122-40.147,41.078-40.147c3.875,0,6.82,0.311,10.386,1.239V33.919z  M86.945,89.539c-2.79-0.929-5.115-1.239-8.06-1.239c-12.091,0-19.067,7.441-19.067,20.46c0,12.713,6.666,19.688,18.912,19.688 c2.634,0,4.805-0.155,8.215-0.618V89.539z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#FFFFFF",
    d: "M148.793,70.783v55.341c0,19.065-1.395,28.21-5.58,36.117c-3.876,7.596-8.992,12.399-19.532,17.67 l-22.167-10.541c10.541-4.96,15.656-9.297,18.911-15.966c3.411-6.819,4.497-14.727,4.497-35.498V70.783H148.793z M124.922,34.046 h23.871v24.493h-23.871V34.046z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#FFFFFF",
    d: "M163.212,76.209c10.542-4.961,20.617-7.13,31.623-7.13c12.246,0,20.306,3.255,23.872,9.611 c2.014,3.564,2.634,8.214,2.634,18.137v48.517c-10.697,1.552-24.182,2.636-34.102,2.636c-19.996,0-28.988-6.977-28.988-22.476 c0-16.744,11.936-24.493,41.234-26.975v-5.271c0-4.339-2.17-5.888-8.216-5.888c-8.835,0-18.756,2.479-28.058,7.285V76.209z  M200.57,114.187c-15.812,1.552-20.927,4.031-20.927,10.231c0,4.65,2.946,6.821,9.456,6.821c3.566,0,6.82-0.311,11.471-1.084 V114.187z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#FFFFFF",
    d: "M232.968,74.505c14.105-3.722,25.731-5.426,37.512-5.426c12.246,0,21.082,2.788,26.354,8.216 c4.96,5.113,6.509,10.693,6.509,22.632v46.813h-23.871v-45.884c0-9.145-3.1-12.557-11.625-12.557c-3.255,0-6.2,0.311-11.007,1.706 v56.734h-23.871V74.505z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#FFFFFF",
    d: "M312.623,159.761c8.372,4.339,16.742,6.354,25.577,6.354c15.655,0,22.321-6.354,22.321-21.546 c0-0.154,0-0.31,0-0.467c-4.65,2.326-9.301,3.257-15.5,3.257c-20.927,0-34.26-13.797-34.26-35.652 c0-27.128,19.688-42.473,54.564-42.473c10.232,0,19.688,1.084,31.159,3.407l-8.174,17.222c-6.356-1.241-0.509-0.167-5.312-0.632 v2.48l0.309,10.074l0.154,13.022c0.155,3.253,0.155,6.51,0.311,9.764c0,2.945,0,4.342,0,6.512c0,20.462-1.705,30.073-6.82,37.977 c-7.441,11.627-20.307,17.362-38.598,17.362c-9.301,0-17.36-1.396-25.732-4.651V159.761z M360.057,88.455c-0.31,0-0.619,0-0.774,0 h-1.706c-4.649-0.155-10.074,1.084-13.796,3.409c-5.734,3.257-8.681,9.146-8.681,17.518c0,11.937,5.892,18.756,16.432,18.756 c3.255,0,5.891-0.62,8.99-1.55v-1.705v-6.51c0-2.79-0.154-5.892-0.154-9.146l-0.154-11.006l-0.156-7.905V88.455z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#FFFFFF",
    d: "M433.543,68.77c23.871,0,38.443,15.037,38.443,39.371c0,24.957-15.19,40.613-39.373,40.613 c-23.873,0-38.599-15.036-38.599-39.216C394.015,84.424,409.207,68.77,433.543,68.77z M433.076,129.533 c9.147,0,14.573-7.596,14.573-20.773c0-13.019-5.271-20.771-14.415-20.771c-9.457,0-14.884,7.598-14.884,20.771 C418.351,121.938,423.777,129.533,433.076,129.533z"
  })))));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgDjango);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDUxNDQ4KSAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCIgWw0KCTwhRU5USVRZIG5zX3N2ZyAiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KCTwhRU5USVRZIG5zX3hsaW5rICJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCl0+DQo8c3ZnICB2ZXJzaW9uPSIxLjAiIGlkPSJMYXllcl8xIiB4bWxucz0iJm5zX3N2ZzsiIHhtbG5zOnhsaW5rPSImbnNfeGxpbms7IiB3aWR0aD0iNTA0LjA5IiBoZWlnaHQ9IjIxNS45OTQiDQoJIHZpZXdCb3g9IjAgMCA1MDQuMDkgMjE1Ljk5NCIgb3ZlcmZsb3c9InZpc2libGUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwNC4wOSAyMTUuOTk0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiMwOTJFMjAiIGQ9Ik01MDQuMDksMTg3Ljk5NGMwLDE1LjQ2NC0xMi41MzYsMjgtMjgsMjhIMjhjLTE1LjQ2NCwwLTI4LTEyLjUzNi0yOC0yOFYyOEMwLDEyLjUzNiwxMi41MzYsMCwyOCwwaDQ0OC4wOQ0KCWMxNS40NjQsMCwyOCwxMi41MzYsMjgsMjhWMTg3Ljk5NHoiLz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNODYuOTQ1LDMzLjkxOWgyMy44NzJ2MTEwLjQ5NmMtMTIuMjQ2LDIuMzI1LTIxLjIzNywzLjI1NS0zMS4wMDIsMy4yNTUNCgkJCWMtMjkuMTQyLDAtNDQuMzMzLTEzLjE3NC00NC4zMzMtMzguNDQzYzAtMjQuMzM2LDE2LjEyMi00MC4xNDcsNDEuMDc4LTQwLjE0N2MzLjg3NSwwLDYuODIsMC4zMTEsMTAuMzg2LDEuMjM5VjMzLjkxOXoNCgkJCSBNODYuOTQ1LDg5LjUzOWMtMi43OS0wLjkyOS01LjExNS0xLjIzOS04LjA2LTEuMjM5Yy0xMi4wOTEsMC0xOS4wNjcsNy40NDEtMTkuMDY3LDIwLjQ2YzAsMTIuNzEzLDYuNjY2LDE5LjY4OCwxOC45MTIsMTkuNjg4DQoJCQljMi42MzQsMCw0LjgwNS0wLjE1NSw4LjIxNS0wLjYxOFY4OS41Mzl6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNDguNzkzLDcwLjc4M3Y1NS4zNDFjMCwxOS4wNjUtMS4zOTUsMjguMjEtNS41OCwzNi4xMTdjLTMuODc2LDcuNTk2LTguOTkyLDEyLjM5OS0xOS41MzIsMTcuNjcNCgkJCWwtMjIuMTY3LTEwLjU0MWMxMC41NDEtNC45NiwxNS42NTYtOS4yOTcsMTguOTExLTE1Ljk2NmMzLjQxMS02LjgxOSw0LjQ5Ny0xNC43MjcsNC40OTctMzUuNDk4VjcwLjc4M0gxNDguNzkzeiBNMTI0LjkyMiwzNC4wNDYNCgkJCWgyMy44NzF2MjQuNDkzaC0yMy44NzFWMzQuMDQ2eiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTYzLjIxMiw3Ni4yMDljMTAuNTQyLTQuOTYxLDIwLjYxNy03LjEzLDMxLjYyMy03LjEzYzEyLjI0NiwwLDIwLjMwNiwzLjI1NSwyMy44NzIsOS42MTENCgkJCWMyLjAxNCwzLjU2NCwyLjYzNCw4LjIxNCwyLjYzNCwxOC4xMzd2NDguNTE3Yy0xMC42OTcsMS41NTItMjQuMTgyLDIuNjM2LTM0LjEwMiwyLjYzNmMtMTkuOTk2LDAtMjguOTg4LTYuOTc3LTI4Ljk4OC0yMi40NzYNCgkJCWMwLTE2Ljc0NCwxMS45MzYtMjQuNDkzLDQxLjIzNC0yNi45NzV2LTUuMjcxYzAtNC4zMzktMi4xNy01Ljg4OC04LjIxNi01Ljg4OGMtOC44MzUsMC0xOC43NTYsMi40NzktMjguMDU4LDcuMjg1Vjc2LjIwOXoNCgkJCSBNMjAwLjU3LDExNC4xODdjLTE1LjgxMiwxLjU1Mi0yMC45MjcsNC4wMzEtMjAuOTI3LDEwLjIzMWMwLDQuNjUsMi45NDYsNi44MjEsOS40NTYsNi44MjFjMy41NjYsMCw2LjgyLTAuMzExLDExLjQ3MS0xLjA4NA0KCQkJVjExNC4xODd6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMzIuOTY4LDc0LjUwNWMxNC4xMDUtMy43MjIsMjUuNzMxLTUuNDI2LDM3LjUxMi01LjQyNmMxMi4yNDYsMCwyMS4wODIsMi43ODgsMjYuMzU0LDguMjE2DQoJCQljNC45Niw1LjExMyw2LjUwOSwxMC42OTMsNi41MDksMjIuNjMydjQ2LjgxM2gtMjMuODcxdi00NS44ODRjMC05LjE0NS0zLjEtMTIuNTU3LTExLjYyNS0xMi41NTdjLTMuMjU1LDAtNi4yLDAuMzExLTExLjAwNywxLjcwNg0KCQkJdjU2LjczNGgtMjMuODcxVjc0LjUwNXoiLz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTMxMi42MjMsMTU5Ljc2MWM4LjM3Miw0LjMzOSwxNi43NDIsNi4zNTQsMjUuNTc3LDYuMzU0YzE1LjY1NSwwLDIyLjMyMS02LjM1NCwyMi4zMjEtMjEuNTQ2DQoJCQljMC0wLjE1NCwwLTAuMzEsMC0wLjQ2N2MtNC42NSwyLjMyNi05LjMwMSwzLjI1Ny0xNS41LDMuMjU3Yy0yMC45MjcsMC0zNC4yNi0xMy43OTctMzQuMjYtMzUuNjUyDQoJCQljMC0yNy4xMjgsMTkuNjg4LTQyLjQ3Myw1NC41NjQtNDIuNDczYzEwLjIzMiwwLDE5LjY4OCwxLjA4NCwzMS4xNTksMy40MDdsLTguMTc0LDE3LjIyMmMtNi4zNTYtMS4yNDEtMC41MDktMC4xNjctNS4zMTItMC42MzINCgkJCXYyLjQ4bDAuMzA5LDEwLjA3NGwwLjE1NCwxMy4wMjJjMC4xNTUsMy4yNTMsMC4xNTUsNi41MSwwLjMxMSw5Ljc2NGMwLDIuOTQ1LDAsNC4zNDIsMCw2LjUxMmMwLDIwLjQ2Mi0xLjcwNSwzMC4wNzMtNi44MiwzNy45NzcNCgkJCWMtNy40NDEsMTEuNjI3LTIwLjMwNywxNy4zNjItMzguNTk4LDE3LjM2MmMtOS4zMDEsMC0xNy4zNi0xLjM5Ni0yNS43MzItNC42NTFWMTU5Ljc2MXogTTM2MC4wNTcsODguNDU1Yy0wLjMxLDAtMC42MTksMC0wLjc3NCwwDQoJCQloLTEuNzA2Yy00LjY0OS0wLjE1NS0xMC4wNzQsMS4wODQtMTMuNzk2LDMuNDA5Yy01LjczNCwzLjI1Ny04LjY4MSw5LjE0Ni04LjY4MSwxNy41MThjMCwxMS45MzcsNS44OTIsMTguNzU2LDE2LjQzMiwxOC43NTYNCgkJCWMzLjI1NSwwLDUuODkxLTAuNjIsOC45OS0xLjU1di0xLjcwNXYtNi41MWMwLTIuNzktMC4xNTQtNS44OTItMC4xNTQtOS4xNDZsLTAuMTU0LTExLjAwNmwtMC4xNTYtNy45MDVWODguNDU1eiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDMzLjU0Myw2OC43N2MyMy44NzEsMCwzOC40NDMsMTUuMDM3LDM4LjQ0MywzOS4zNzFjMCwyNC45NTctMTUuMTksNDAuNjEzLTM5LjM3Myw0MC42MTMNCgkJCWMtMjMuODczLDAtMzguNTk5LTE1LjAzNi0zOC41OTktMzkuMjE2QzM5NC4wMTUsODQuNDI0LDQwOS4yMDcsNjguNzcsNDMzLjU0Myw2OC43N3ogTTQzMy4wNzYsMTI5LjUzMw0KCQkJYzkuMTQ3LDAsMTQuNTczLTcuNTk2LDE0LjU3My0yMC43NzNjMC0xMy4wMTktNS4yNzEtMjAuNzcxLTE0LjQxNS0yMC43NzFjLTkuNDU3LDAtMTQuODg0LDcuNTk4LTE0Ljg4NCwyMC43NzENCgkJCUM0MTguMzUxLDEyMS45MzgsNDIzLjc3NywxMjkuNTMzLDQzMy4wNzYsMTI5LjUzM3oiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==");


/***/ }),

/***/ "./assets/docker.svg":
/*!***************************!*\
  !*** ./assets/docker.svg ***!
  \***************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgDocker(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 2500,
    height: 2100,
    viewBox: "0 0 256 215",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M38.617 173.984v-16.362c0-2.15 1.344-3.877 3.57-3.877h.616c2.225 0 3.563 1.729 3.563 3.877v34.447c0 8.4-4.15 15.084-11.382 19.342a21.374 21.374 0 0 1-10.945 2.985h-1.537c-8.402 0-15.077-4.153-19.342-11.38a21.314 21.314 0 0 1-2.984-10.947v-1.535c0-8.403 4.152-15.083 11.378-19.349a21.298 21.298 0 0 1 10.948-2.985h1.537c5.686 0 10.51 2.204 14.578 5.784zM7.924 191.3c0 6.068 2.941 10.63 8.258 13.54 2.15 1.176 4.484 1.808 6.937 1.808 5.956 0 10.374-2.81 13.421-7.857 1.417-2.348 2.077-4.917 2.077-7.648 0-5.26-2.49-9.365-6.729-12.414-2.57-1.848-5.463-2.775-8.618-2.775-6.492 0-11.164 3.28-13.968 9.106-.946 1.97-1.378 4.061-1.378 6.24zm65.324-23.1h1.074c8.978 0 15.806 4.355 20.133 12.192 1.73 3.135 2.656 6.557 2.656 10.142v1.535c0 8.4-4.142 15.093-11.385 19.343-3.353 1.967-7.057 2.984-10.943 2.984h-1.535c-8.402 0-15.079-4.153-19.342-11.38a21.316 21.316 0 0 1-2.987-10.947v-1.535c0-8.404 4.169-15.062 11.377-19.347 3.351-1.991 7.058-2.987 10.952-2.987zm-14.58 23.1c0 5.89 2.89 10.223 7.865 13.27 2.336 1.43 4.909 2.078 7.638 2.078 5.82 0 10.122-2.951 13.116-7.863 1.428-2.342 2.074-4.915 2.074-7.642 0-5.477-2.638-9.661-7.148-12.693-2.471-1.663-5.222-2.496-8.198-2.496-6.492 0-11.164 3.28-13.967 9.106-.948 1.97-1.38 4.061-1.38 6.24zm70.656-14.727c-1.17-.548-3.36-.73-4.624-.778-6.474-.244-11.158 3.402-13.906 9.113-.949 1.97-1.382 4.055-1.382 6.235 0 6.637 3.485 11.284 9.409 14.117 2.164 1.034 4.958 1.23 7.323 1.23 2.08 0 5.02-1.274 6.866-2.151l.32-.152h1.433l.158.032c1.762.367 3.092 1.484 3.092 3.38v.767c0 4.718-8.622 5.798-11.912 6.028-11.61.803-20.293-5.573-23.603-16.647-.575-1.923-.834-3.833-.834-5.837v-1.533c0-8.403 4.17-15.059 11.377-19.34 3.351-1.99 7.057-2.99 10.95-2.99h1.536c4.13 0 7.934 1.173 11.344 3.502l.28.194.177.292c.368.61.685 1.316.685 2.042v.767c0 1.978-1.48 3.042-3.266 3.386l-.148.026h-.458c-1.156 0-3.785-1.197-4.817-1.683zm25.134 5.247c3.01-3.014 6.03-6.022 9.085-8.986.851-.827 4.074-4.327 5.343-4.327h1.388l.158.033c1.768.367 3.092 1.486 3.092 3.386v.766c0 1.296-1.518 2.802-2.355 3.689-1.78 1.887-3.654 3.712-5.476 5.56l-9.362 9.504c4.031 4.04 8.058 8.083 12.056 12.154a313.304 313.304 0 0 1 3.301 3.396c.385.405.953.909 1.276 1.47.347.526.56 1.119.56 1.752v.8l-.045.185c-.435 1.768-1.557 3.194-3.516 3.194h-.617c-1.282 0-2.73-1.45-3.608-2.279-1.81-1.706-3.557-3.5-5.331-5.243l-5.949-5.84v9.334c0 2.15-1.346 3.878-3.569 3.878h-.61c-2.226 0-3.57-1.728-3.57-3.878v-52.596c0-2.15 1.345-3.87 3.57-3.87h.61c2.223 0 3.569 1.72 3.569 3.87v24.048zm96.577-13.313h.77c2.324 0 3.875 1.566 3.875 3.877 0 3.208-3.067 4.029-5.72 4.029-3.48 0-6.803 2.107-9.202 4.47-2.991 2.949-4.3 6.726-4.3 10.878v18.759c0 2.15-1.343 3.876-3.57 3.876h-.612c-2.227 0-3.569-1.725-3.569-3.876v-19.836c0-7.617 3.708-13.835 9.89-18.196 3.691-2.605 7.919-3.98 12.438-3.98zm-55.074 37.176c2.82.985 6.035.844 8.928.34 1.48-.629 5.264-2.28 6.656-2.038l.217.037.2.098c.85.412 1.661.995 2.095 1.86 1.014 2.027.527 4.065-1.465 5.216l-.663.383c-7.35 4.242-15.168 3.654-22.495-.308-3.503-1.894-6.183-4.705-8.16-8.132l-.462-.801c-4.719-8.172-4.082-16.768 1.24-24.539 1.837-2.686 4.238-4.761 7.045-6.384l1.062-.613c6.922-3.996 14.341-3.722 21.45-.215 3.823 1.886 6.92 4.697 9.054 8.394l.384.666c1.55 2.686-.458 5.026-2.531 6.626-2.406 1.856-4.835 4.09-7.141 6.08-5.142 4.439-10.276 8.888-15.414 13.33zm-6.655-4.674c5.75-4.93 11.502-9.865 17.237-14.816 1.96-1.69 4.109-3.444 6.053-5.221-1.56-1.966-4.166-3.383-6.38-4.228-4.47-1.703-8.877-1.131-12.976 1.235-5.365 3.098-7.65 8.031-7.45 14.17.08 2.418.73 4.748 2.013 6.805.452.725.957 1.406 1.503 2.055zM147.488 45.732h22.866v23.375h11.561c5.34 0 10.831-.951 15.887-2.664 2.485-.843 5.273-2.015 7.724-3.49-3.228-4.214-4.876-9.535-5.36-14.78-.66-7.135.78-16.421 5.608-22.005l2.404-2.78 2.864 2.303c7.211 5.793 13.276 13.889 14.345 23.118 8.683-2.554 18.878-1.95 26.531 2.467l3.14 1.812-1.652 3.226C246.933 68.946 233.4 72.86 220.17 72.167c-19.797 49.309-62.898 72.653-115.157 72.653-27 0-51.77-10.093-65.876-34.047l-.231-.39-2.055-4.182c-4.768-10.544-6.352-22.095-5.278-33.637l.323-3.457H51.45V45.732h22.865V22.866h45.733V0h27.44v45.732",
    fill: "#364548"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H35.37c-1.17 12.567 1.036 24.14 6.075 34.045l1.667 3.05a56.536 56.536 0 0 0 3.455 5.184c6.025.387 11.58.52 16.662.408h.002c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.078 2.323-16.806 2.738.4.007-.416.06-.418.06-.229.015-.517.048-.747.06-2.648.149-5.506.18-8.428.18-3.196 0-6.343-.06-9.862-.24l-.09.06c12.21 13.724 31.302 21.955 55.234 21.955 50.648 0 93.608-22.452 112.632-72.857 13.496 1.385 26.467-2.057 32.367-13.575-9.398-5.423-21.484-3.694-28.443-.196",
    fill: "#22A0C8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H44.048c-.598 19.246 6.544 33.855 19.18 42.687h.003c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.526 2.443-17.254 2.858-.002 0-.163-.155-.165-.155 17.237 8.842 42.23 8.81 70.885-2.197 32.13-12.344 62.029-35.86 82.89-62.757-.314.142-.62.287-.917.436",
    fill: "#37B1D9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M35.645 88.186c.91 6.732 2.88 13.035 5.8 18.776l1.667 3.05a56.432 56.432 0 0 0 3.455 5.184c6.026.387 11.581.52 16.664.408 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.496 2.383-17.224 2.799-.231.014-.634.017-.867.03-2.646.148-5.475.239-8.398.239-3.195 0-6.463-.061-9.98-.24 12.21 13.724 31.42 21.985 55.352 21.985 43.36 0 81.084-16.458 102.979-52.822H35.645",
    fill: "#1B81A5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M45.367 88.186c2.592 11.82 8.821 21.099 17.864 27.418 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.615 2.383-17.344 2.799 17.236 8.84 42.157 8.713 70.81-2.293 17.334-6.66 34.017-16.574 48.984-28.515H45.367",
    fill: "#1D91B4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M55.26 49.543h19.818v19.818H55.26V49.543zm1.651 1.652h1.564V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71H68.86V51.195zm3.002 0h1.565V67.71h-1.565V51.195zM78.126 26.677h19.819v19.817h-19.82V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.625V28.329zm3.002 0h1.626v16.514H85.72V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.002 0h1.566v16.514h-1.566V28.329z",
    fill: "#23A3C2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M78.126 49.543h19.819v19.818h-19.82V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.625V51.195zm3.002 0h1.626V67.71H85.72V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.002 0h1.566V67.71h-1.566V51.195z",
    fill: "#34BBDE"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M100.993 49.543h19.818v19.818h-19.818V49.543zm1.651 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.002 0h1.628V67.71h-1.628V51.195zm3.003 0h1.564V67.71h-1.564V51.195z",
    fill: "#23A3C2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M100.993 26.677h19.818v19.817h-19.818V26.677zm1.651 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.002 0h1.628v16.514h-1.628V28.329zm3.003 0h1.564v16.514h-1.564V28.329zM123.859 49.543h19.818v19.818h-19.818V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.002 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.564V67.71h-1.564V51.195z",
    fill: "#34BBDE"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M123.859 26.677h19.818v19.817h-19.818V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.002 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.564v16.514h-1.564V28.329z",
    fill: "#23A3C2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M123.859 3.81h19.818V23.63h-19.818V3.81zm1.652 1.651h1.563v16.516h-1.563V5.46zm2.94 0h1.626v16.516h-1.626V5.46zm3.002 0h1.626v16.516h-1.626V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.564v16.516h-1.564V5.46z",
    fill: "#34BBDE"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M146.725 49.543h19.818v19.818h-19.818V49.543zm1.65 1.652h1.565V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.004 0h1.627V67.71h-1.627V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.002 0h1.564V67.71h-1.564V51.195z",
    fill: "#23A3C2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M96.704 101.492a5.468 5.468 0 1 1-.002 10.935 5.468 5.468 0 0 1 .002-10.935",
    fill: "#D3ECEC"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M96.704 103.043c.5 0 .977.094 1.417.265a1.598 1.598 0 0 0 .798 2.98c.605 0 1.13-.335 1.402-.831a3.915 3.915 0 1 1-3.617-2.414M0 90.162h254.327c-5.537-1.404-17.52-3.302-15.544-10.56-10.07 11.652-34.353 8.175-40.482 2.43-6.824 9.898-46.554 6.135-49.325-1.576-8.556 10.041-35.067 10.041-43.623 0-2.773 7.711-42.502 11.474-49.327 1.575-6.128 5.746-30.41 9.223-40.48-2.428C17.522 86.86 5.539 88.758 0 90.163",
    fill: "#364548"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M111.237 140.89c-13.54-6.425-20.971-15.16-25.106-24.694-5.03 1.435-11.075 2.353-18.1 2.747-2.646.148-5.43.224-8.35.224-3.368 0-6.917-.1-10.643-.297 12.417 12.41 27.692 21.964 55.976 22.138 2.088 0 4.16-.04 6.223-.118",
    fill: "#BDD9D7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M91.16 124.994c-1.873-2.543-3.69-5.739-5.026-8.8-5.03 1.437-11.077 2.355-18.103 2.75 4.826 2.619 11.727 5.046 23.13 6.05",
    fill: "#D3ECEC"
  }))));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgDocker);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyMTAwIiB2aWV3Qm94PSIwIDAgMjU2IDIxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zOC42MTcgMTczLjk4NHYtMTYuMzYyYzAtMi4xNSAxLjM0NC0zLjg3NyAzLjU3LTMuODc3aC42MTZjMi4yMjUgMCAzLjU2MyAxLjcyOSAzLjU2MyAzLjg3N3YzNC40NDdjMCA4LjQtNC4xNSAxNS4wODQtMTEuMzgyIDE5LjM0MmEyMS4zNzQgMjEuMzc0IDAgMCAxLTEwLjk0NSAyLjk4NWgtMS41MzdjLTguNDAyIDAtMTUuMDc3LTQuMTUzLTE5LjM0Mi0xMS4zOGEyMS4zMTQgMjEuMzE0IDAgMCAxLTIuOTg0LTEwLjk0N3YtMS41MzVjMC04LjQwMyA0LjE1Mi0xNS4wODMgMTEuMzc4LTE5LjM0OWEyMS4yOTggMjEuMjk4IDAgMCAxIDEwLjk0OC0yLjk4NWgxLjUzN2M1LjY4NiAwIDEwLjUxIDIuMjA0IDE0LjU3OCA1Ljc4NHpNNy45MjQgMTkxLjNjMCA2LjA2OCAyLjk0MSAxMC42MyA4LjI1OCAxMy41NCAyLjE1IDEuMTc2IDQuNDg0IDEuODA4IDYuOTM3IDEuODA4IDUuOTU2IDAgMTAuMzc0LTIuODEgMTMuNDIxLTcuODU3IDEuNDE3LTIuMzQ4IDIuMDc3LTQuOTE3IDIuMDc3LTcuNjQ4IDAtNS4yNi0yLjQ5LTkuMzY1LTYuNzI5LTEyLjQxNC0yLjU3LTEuODQ4LTUuNDYzLTIuNzc1LTguNjE4LTIuNzc1LTYuNDkyIDAtMTEuMTY0IDMuMjgtMTMuOTY4IDkuMTA2LS45NDYgMS45Ny0xLjM3OCA0LjA2MS0xLjM3OCA2LjI0em02NS4zMjQtMjMuMWgxLjA3NGM4Ljk3OCAwIDE1LjgwNiA0LjM1NSAyMC4xMzMgMTIuMTkyIDEuNzMgMy4xMzUgMi42NTYgNi41NTcgMi42NTYgMTAuMTQydjEuNTM1YzAgOC40LTQuMTQyIDE1LjA5My0xMS4zODUgMTkuMzQzLTMuMzUzIDEuOTY3LTcuMDU3IDIuOTg0LTEwLjk0MyAyLjk4NGgtMS41MzVjLTguNDAyIDAtMTUuMDc5LTQuMTUzLTE5LjM0Mi0xMS4zOGEyMS4zMTYgMjEuMzE2IDAgMCAxLTIuOTg3LTEwLjk0N3YtMS41MzVjMC04LjQwNCA0LjE2OS0xNS4wNjIgMTEuMzc3LTE5LjM0NyAzLjM1MS0xLjk5MSA3LjA1OC0yLjk4NyAxMC45NTItMi45ODd6bS0xNC41OCAyMy4xYzAgNS44OSAyLjg5IDEwLjIyMyA3Ljg2NSAxMy4yNyAyLjMzNiAxLjQzIDQuOTA5IDIuMDc4IDcuNjM4IDIuMDc4IDUuODIgMCAxMC4xMjItMi45NTEgMTMuMTE2LTcuODYzIDEuNDI4LTIuMzQyIDIuMDc0LTQuOTE1IDIuMDc0LTcuNjQyIDAtNS40NzctMi42MzgtOS42NjEtNy4xNDgtMTIuNjkzLTIuNDcxLTEuNjYzLTUuMjIyLTIuNDk2LTguMTk4LTIuNDk2LTYuNDkyIDAtMTEuMTY0IDMuMjgtMTMuOTY3IDkuMTA2LS45NDggMS45Ny0xLjM4IDQuMDYxLTEuMzggNi4yNHptNzAuNjU2LTE0LjcyN2MtMS4xNy0uNTQ4LTMuMzYtLjczLTQuNjI0LS43NzgtNi40NzQtLjI0NC0xMS4xNTggMy40MDItMTMuOTA2IDkuMTEzLS45NDkgMS45Ny0xLjM4MiA0LjA1NS0xLjM4MiA2LjIzNSAwIDYuNjM3IDMuNDg1IDExLjI4NCA5LjQwOSAxNC4xMTcgMi4xNjQgMS4wMzQgNC45NTggMS4yMyA3LjMyMyAxLjIzIDIuMDggMCA1LjAyLTEuMjc0IDYuODY2LTIuMTUxbC4zMi0uMTUyaDEuNDMzbC4xNTguMDMyYzEuNzYyLjM2NyAzLjA5MiAxLjQ4NCAzLjA5MiAzLjM4di43NjdjMCA0LjcxOC04LjYyMiA1Ljc5OC0xMS45MTIgNi4wMjgtMTEuNjEuODAzLTIwLjI5My01LjU3My0yMy42MDMtMTYuNjQ3LS41NzUtMS45MjMtLjgzNC0zLjgzMy0uODM0LTUuODM3di0xLjUzM2MwLTguNDAzIDQuMTctMTUuMDU5IDExLjM3Ny0xOS4zNCAzLjM1MS0xLjk5IDcuMDU3LTIuOTkgMTAuOTUtMi45OWgxLjUzNmM0LjEzIDAgNy45MzQgMS4xNzMgMTEuMzQ0IDMuNTAybC4yOC4xOTQuMTc3LjI5MmMuMzY4LjYxLjY4NSAxLjMxNi42ODUgMi4wNDJ2Ljc2N2MwIDEuOTc4LTEuNDggMy4wNDItMy4yNjYgMy4zODZsLS4xNDguMDI2aC0uNDU4Yy0xLjE1NiAwLTMuNzg1LTEuMTk3LTQuODE3LTEuNjgzem0yNS4xMzQgNS4yNDdjMy4wMS0zLjAxNCA2LjAzLTYuMDIyIDkuMDg1LTguOTg2Ljg1MS0uODI3IDQuMDc0LTQuMzI3IDUuMzQzLTQuMzI3aDEuMzg4bC4xNTguMDMzYzEuNzY4LjM2NyAzLjA5MiAxLjQ4NiAzLjA5MiAzLjM4NnYuNzY2YzAgMS4yOTYtMS41MTggMi44MDItMi4zNTUgMy42ODktMS43OCAxLjg4Ny0zLjY1NCAzLjcxMi01LjQ3NiA1LjU2bC05LjM2MiA5LjUwNGM0LjAzMSA0LjA0IDguMDU4IDguMDgzIDEyLjA1NiAxMi4xNTRhMzEzLjMwNCAzMTMuMzA0IDAgMCAxIDMuMzAxIDMuMzk2Yy4zODUuNDA1Ljk1My45MDkgMS4yNzYgMS40Ny4zNDcuNTI2LjU2IDEuMTE5LjU2IDEuNzUydi44bC0uMDQ1LjE4NWMtLjQzNSAxLjc2OC0xLjU1NyAzLjE5NC0zLjUxNiAzLjE5NGgtLjYxN2MtMS4yODIgMC0yLjczLTEuNDUtMy42MDgtMi4yNzktMS44MS0xLjcwNi0zLjU1Ny0zLjUtNS4zMzEtNS4yNDNsLTUuOTQ5LTUuODR2OS4zMzRjMCAyLjE1LTEuMzQ2IDMuODc4LTMuNTY5IDMuODc4aC0uNjFjLTIuMjI2IDAtMy41Ny0xLjcyOC0zLjU3LTMuODc4di01Mi41OTZjMC0yLjE1IDEuMzQ1LTMuODcgMy41Ny0zLjg3aC42MWMyLjIyMyAwIDMuNTY5IDEuNzIgMy41NjkgMy44N3YyNC4wNDh6bTk2LjU3Ny0xMy4zMTNoLjc3YzIuMzI0IDAgMy44NzUgMS41NjYgMy44NzUgMy44NzcgMCAzLjIwOC0zLjA2NyA0LjAyOS01LjcyIDQuMDI5LTMuNDggMC02LjgwMyAyLjEwNy05LjIwMiA0LjQ3LTIuOTkxIDIuOTQ5LTQuMyA2LjcyNi00LjMgMTAuODc4djE4Ljc1OWMwIDIuMTUtMS4zNDMgMy44NzYtMy41NyAzLjg3NmgtLjYxMmMtMi4yMjcgMC0zLjU2OS0xLjcyNS0zLjU2OS0zLjg3NnYtMTkuODM2YzAtNy42MTcgMy43MDgtMTMuODM1IDkuODktMTguMTk2IDMuNjkxLTIuNjA1IDcuOTE5LTMuOTggMTIuNDM4LTMuOTh6bS01NS4wNzQgMzcuMTc2YzIuODIuOTg1IDYuMDM1Ljg0NCA4LjkyOC4zNCAxLjQ4LS42MjkgNS4yNjQtMi4yOCA2LjY1Ni0yLjAzOGwuMjE3LjAzNy4yLjA5OGMuODUuNDEyIDEuNjYxLjk5NSAyLjA5NSAxLjg2IDEuMDE0IDIuMDI3LjUyNyA0LjA2NS0xLjQ2NSA1LjIxNmwtLjY2My4zODNjLTcuMzUgNC4yNDItMTUuMTY4IDMuNjU0LTIyLjQ5NS0uMzA4LTMuNTAzLTEuODk0LTYuMTgzLTQuNzA1LTguMTYtOC4xMzJsLS40NjItLjgwMWMtNC43MTktOC4xNzItNC4wODItMTYuNzY4IDEuMjQtMjQuNTM5IDEuODM3LTIuNjg2IDQuMjM4LTQuNzYxIDcuMDQ1LTYuMzg0bDEuMDYyLS42MTNjNi45MjItMy45OTYgMTQuMzQxLTMuNzIyIDIxLjQ1LS4yMTUgMy44MjMgMS44ODYgNi45MiA0LjY5NyA5LjA1NCA4LjM5NGwuMzg0LjY2NmMxLjU1IDIuNjg2LS40NTggNS4wMjYtMi41MzEgNi42MjYtMi40MDYgMS44NTYtNC44MzUgNC4wOS03LjE0MSA2LjA4LTUuMTQyIDQuNDM5LTEwLjI3NiA4Ljg4OC0xNS40MTQgMTMuMzN6bS02LjY1NS00LjY3NGM1Ljc1LTQuOTMgMTEuNTAyLTkuODY1IDE3LjIzNy0xNC44MTYgMS45Ni0xLjY5IDQuMTA5LTMuNDQ0IDYuMDUzLTUuMjIxLTEuNTYtMS45NjYtNC4xNjYtMy4zODMtNi4zOC00LjIyOC00LjQ3LTEuNzAzLTguODc3LTEuMTMxLTEyLjk3NiAxLjIzNS01LjM2NSAzLjA5OC03LjY1IDguMDMxLTcuNDUgMTQuMTcuMDggMi40MTguNzMgNC43NDggMi4wMTMgNi44MDUuNDUyLjcyNS45NTcgMS40MDYgMS41MDMgMi4wNTV6TTE0Ny40ODggNDUuNzMyaDIyLjg2NnYyMy4zNzVoMTEuNTYxYzUuMzQgMCAxMC44MzEtLjk1MSAxNS44ODctMi42NjQgMi40ODUtLjg0MyA1LjI3My0yLjAxNSA3LjcyNC0zLjQ5LTMuMjI4LTQuMjE0LTQuODc2LTkuNTM1LTUuMzYtMTQuNzgtLjY2LTcuMTM1Ljc4LTE2LjQyMSA1LjYwOC0yMi4wMDVsMi40MDQtMi43OCAyLjg2NCAyLjMwM2M3LjIxMSA1Ljc5MyAxMy4yNzYgMTMuODg5IDE0LjM0NSAyMy4xMTggOC42ODMtMi41NTQgMTguODc4LTEuOTUgMjYuNTMxIDIuNDY3bDMuMTQgMS44MTItMS42NTIgMy4yMjZDMjQ2LjkzMyA2OC45NDYgMjMzLjQgNzIuODYgMjIwLjE3IDcyLjE2N2MtMTkuNzk3IDQ5LjMwOS02Mi44OTggNzIuNjUzLTExNS4xNTcgNzIuNjUzLTI3IDAtNTEuNzctMTAuMDkzLTY1Ljg3Ni0zNC4wNDdsLS4yMzEtLjM5LTIuMDU1LTQuMTgyYy00Ljc2OC0xMC41NDQtNi4zNTItMjIuMDk1LTUuMjc4LTMzLjYzN2wuMzIzLTMuNDU3SDUxLjQ1VjQ1LjczMmgyMi44NjVWMjIuODY2aDQ1LjczM1YwaDI3LjQ0djQ1LjczMiIgZmlsbD0iIzM2NDU0OCIvPjxwYXRoIGQ9Ik0yMjEuNTcgNTQuMzhjMS41MzMtMTEuOTE2LTcuMzg0LTIxLjI3NS0xMi45MTQtMjUuNzE5LTYuMzczIDcuMzY4LTcuMzYzIDI2LjY3OCAyLjYzNSAzNC44MDgtNS41OCA0Ljk1Ni0xNy4zMzcgOS40NDgtMjkuMzc2IDkuNDQ4SDM1LjM3Yy0xLjE3IDEyLjU2NyAxLjAzNiAyNC4xNCA2LjA3NSAzNC4wNDVsMS42NjcgMy4wNWE1Ni41MzYgNTYuNTM2IDAgMCAwIDMuNDU1IDUuMTg0YzYuMDI1LjM4NyAxMS41OC41MiAxNi42NjIuNDA4aC4wMDJjOS45ODctLjIyIDE4LjEzNi0xLjQgMjQuMzEyLTMuNTRhMS43NjEgMS43NjEgMCAwIDEgMS4xNTMgMy4zMjZjLS44MjIuMjg2LTEuNjc4LjU1Mi0yLjU2Mi44MDVoLS4wMDNjLTQuODYzIDEuMzg5LTEwLjA3OCAyLjMyMy0xNi44MDYgMi43MzguNC4wMDctLjQxNi4wNi0uNDE4LjA2LS4yMjkuMDE1LS41MTcuMDQ4LS43NDcuMDYtMi42NDguMTQ5LTUuNTA2LjE4LTguNDI4LjE4LTMuMTk2IDAtNi4zNDMtLjA2LTkuODYyLS4yNGwtLjA5LjA2YzEyLjIxIDEzLjcyNCAzMS4zMDIgMjEuOTU1IDU1LjIzNCAyMS45NTUgNTAuNjQ4IDAgOTMuNjA4LTIyLjQ1MiAxMTIuNjMyLTcyLjg1NyAxMy40OTYgMS4zODUgMjYuNDY3LTIuMDU3IDMyLjM2Ny0xMy41NzUtOS4zOTgtNS40MjMtMjEuNDg0LTMuNjk0LTI4LjQ0My0uMTk2IiBmaWxsPSIjMjJBMEM4Ii8+PHBhdGggZD0iTTIyMS41NyA1NC4zOGMxLjUzMy0xMS45MTYtNy4zODQtMjEuMjc1LTEyLjkxNC0yNS43MTktNi4zNzMgNy4zNjgtNy4zNjMgMjYuNjc4IDIuNjM1IDM0LjgwOC01LjU4IDQuOTU2LTE3LjMzNyA5LjQ0OC0yOS4zNzYgOS40NDhINDQuMDQ4Yy0uNTk4IDE5LjI0NiA2LjU0NCAzMy44NTUgMTkuMTggNDIuNjg3aC4wMDNjOS45ODctLjIyIDE4LjEzNi0xLjQgMjQuMzEyLTMuNTRhMS43NjEgMS43NjEgMCAwIDEgMS4xNTMgMy4zMjZjLS44MjIuMjg2LTEuNjc4LjU1Mi0yLjU2Mi44MDVoLS4wMDNjLTQuODYzIDEuMzg5LTEwLjUyNiAyLjQ0My0xNy4yNTQgMi44NTgtLjAwMiAwLS4xNjMtLjE1NS0uMTY1LS4xNTUgMTcuMjM3IDguODQyIDQyLjIzIDguODEgNzAuODg1LTIuMTk3IDMyLjEzLTEyLjM0NCA2Mi4wMjktMzUuODYgODIuODktNjIuNzU3LS4zMTQuMTQyLS42Mi4yODctLjkxNy40MzYiIGZpbGw9IiMzN0IxRDkiLz48cGF0aCBkPSJNMzUuNjQ1IDg4LjE4NmMuOTEgNi43MzIgMi44OCAxMy4wMzUgNS44IDE4Ljc3NmwxLjY2NyAzLjA1YTU2LjQzMiA1Ni40MzIgMCAwIDAgMy40NTUgNS4xODRjNi4wMjYuMzg3IDExLjU4MS41MiAxNi42NjQuNDA4IDkuOTg3LS4yMiAxOC4xMzYtMS40IDI0LjMxMi0zLjU0YTEuNzYxIDEuNzYxIDAgMCAxIDEuMTUzIDMuMzI2Yy0uODIyLjI4Ni0xLjY3OC41NTItMi41NjIuODA1aC0uMDAzYy00Ljg2MyAxLjM4OS0xMC40OTYgMi4zODMtMTcuMjI0IDIuNzk5LS4yMzEuMDE0LS42MzQuMDE3LS44NjcuMDMtMi42NDYuMTQ4LTUuNDc1LjIzOS04LjM5OC4yMzktMy4xOTUgMC02LjQ2My0uMDYxLTkuOTgtLjI0IDEyLjIxIDEzLjcyNCAzMS40MiAyMS45ODUgNTUuMzUyIDIxLjk4NSA0My4zNiAwIDgxLjA4NC0xNi40NTggMTAyLjk3OS01Mi44MjJIMzUuNjQ1IiBmaWxsPSIjMUI4MUE1Ii8+PHBhdGggZD0iTTQ1LjM2NyA4OC4xODZjMi41OTIgMTEuODIgOC44MjEgMjEuMDk5IDE3Ljg2NCAyNy40MTggOS45ODctLjIyIDE4LjEzNi0xLjQgMjQuMzEyLTMuNTRhMS43NjEgMS43NjEgMCAwIDEgMS4xNTMgMy4zMjZjLS44MjIuMjg2LTEuNjc4LjU1Mi0yLjU2Mi44MDVoLS4wMDNjLTQuODYzIDEuMzg5LTEwLjYxNSAyLjM4My0xNy4zNDQgMi43OTkgMTcuMjM2IDguODQgNDIuMTU3IDguNzEzIDcwLjgxLTIuMjkzIDE3LjMzNC02LjY2IDM0LjAxNy0xNi41NzQgNDguOTg0LTI4LjUxNUg0NS4zNjciIGZpbGw9IiMxRDkxQjQiLz48cGF0aCBkPSJNNTUuMjYgNDkuNTQzaDE5LjgxOHYxOS44MThINTUuMjZWNDkuNTQzem0xLjY1MSAxLjY1MmgxLjU2NFY2Ny43MWgtMS41NjRWNTEuMTk1em0yLjk0IDBoMS42MjdWNjcuNzFoLTEuNjI2VjUxLjE5NXptMy4wMDIgMGgxLjYyN1Y2Ny43MWgtMS42MjdWNTEuMTk1em0zLjAwNCAwaDEuNjI2VjY3LjcxaC0xLjYyNlY1MS4xOTV6bTMuMDAzIDBoMS42MjZWNjcuNzFINjguODZWNTEuMTk1em0zLjAwMiAwaDEuNTY1VjY3LjcxaC0xLjU2NVY1MS4xOTV6TTc4LjEyNiAyNi42NzdoMTkuODE5djE5LjgxN2gtMTkuODJWMjYuNjc3em0xLjY1MiAxLjY1MmgxLjU2M3YxNi41MTRoLTEuNTYzVjI4LjMyOXptMi45NCAwaDEuNjI2djE2LjUxNGgtMS42MjVWMjguMzI5em0zLjAwMiAwaDEuNjI2djE2LjUxNEg4NS43MlYyOC4zMjl6bTMuMDAzIDBoMS42MjZ2MTYuNTE0aC0xLjYyNlYyOC4zMjl6bTMuMDAzIDBoMS42Mjd2MTYuNTE0aC0xLjYyN1YyOC4zMjl6bTMuMDAyIDBoMS41NjZ2MTYuNTE0aC0xLjU2NlYyOC4zMjl6IiBmaWxsPSIjMjNBM0MyIi8+PHBhdGggZD0iTTc4LjEyNiA0OS41NDNoMTkuODE5djE5LjgxOGgtMTkuODJWNDkuNTQzem0xLjY1MiAxLjY1MmgxLjU2M1Y2Ny43MWgtMS41NjNWNTEuMTk1em0yLjk0IDBoMS42MjZWNjcuNzFoLTEuNjI1VjUxLjE5NXptMy4wMDIgMGgxLjYyNlY2Ny43MUg4NS43MlY1MS4xOTV6bTMuMDAzIDBoMS42MjZWNjcuNzFoLTEuNjI2VjUxLjE5NXptMy4wMDMgMGgxLjYyN1Y2Ny43MWgtMS42MjdWNTEuMTk1em0zLjAwMiAwaDEuNTY2VjY3LjcxaC0xLjU2NlY1MS4xOTV6IiBmaWxsPSIjMzRCQkRFIi8+PHBhdGggZD0iTTEwMC45OTMgNDkuNTQzaDE5LjgxOHYxOS44MThoLTE5LjgxOFY0OS41NDN6bTEuNjUxIDEuNjUyaDEuNTYzVjY3LjcxaC0xLjU2M1Y1MS4xOTV6bTIuOTQgMGgxLjYyNlY2Ny43MWgtMS42MjZWNTEuMTk1em0zLjAwMyAwaDEuNjI2VjY3LjcxaC0xLjYyNlY1MS4xOTV6bTMuMDAzIDBoMS42MjZWNjcuNzFoLTEuNjI2VjUxLjE5NXptMy4wMDIgMGgxLjYyOFY2Ny43MWgtMS42MjhWNTEuMTk1em0zLjAwMyAwaDEuNTY0VjY3LjcxaC0xLjU2NFY1MS4xOTV6IiBmaWxsPSIjMjNBM0MyIi8+PHBhdGggZD0iTTEwMC45OTMgMjYuNjc3aDE5LjgxOHYxOS44MTdoLTE5LjgxOFYyNi42Nzd6bTEuNjUxIDEuNjUyaDEuNTYzdjE2LjUxNGgtMS41NjNWMjguMzI5em0yLjk0IDBoMS42MjZ2MTYuNTE0aC0xLjYyNlYyOC4zMjl6bTMuMDAzIDBoMS42MjZ2MTYuNTE0aC0xLjYyNlYyOC4zMjl6bTMuMDAzIDBoMS42MjZ2MTYuNTE0aC0xLjYyNlYyOC4zMjl6bTMuMDAyIDBoMS42Mjh2MTYuNTE0aC0xLjYyOFYyOC4zMjl6bTMuMDAzIDBoMS41NjR2MTYuNTE0aC0xLjU2NFYyOC4zMjl6TTEyMy44NTkgNDkuNTQzaDE5LjgxOHYxOS44MThoLTE5LjgxOFY0OS41NDN6bTEuNjUyIDEuNjUyaDEuNTYzVjY3LjcxaC0xLjU2M1Y1MS4xOTV6bTIuOTQgMGgxLjYyNlY2Ny43MWgtMS42MjZWNTEuMTk1em0zLjAwMiAwaDEuNjI2VjY3LjcxaC0xLjYyNlY1MS4xOTV6bTMuMDAzIDBoMS42MjdWNjcuNzFoLTEuNjI3VjUxLjE5NXptMy4wMDMgMGgxLjYyN1Y2Ny43MWgtMS42MjdWNTEuMTk1em0zLjAwMyAwaDEuNTY0VjY3LjcxaC0xLjU2NFY1MS4xOTV6IiBmaWxsPSIjMzRCQkRFIi8+PHBhdGggZD0iTTEyMy44NTkgMjYuNjc3aDE5LjgxOHYxOS44MTdoLTE5LjgxOFYyNi42Nzd6bTEuNjUyIDEuNjUyaDEuNTYzdjE2LjUxNGgtMS41NjNWMjguMzI5em0yLjk0IDBoMS42MjZ2MTYuNTE0aC0xLjYyNlYyOC4zMjl6bTMuMDAyIDBoMS42MjZ2MTYuNTE0aC0xLjYyNlYyOC4zMjl6bTMuMDAzIDBoMS42Mjd2MTYuNTE0aC0xLjYyN1YyOC4zMjl6bTMuMDAzIDBoMS42Mjd2MTYuNTE0aC0xLjYyN1YyOC4zMjl6bTMuMDAzIDBoMS41NjR2MTYuNTE0aC0xLjU2NFYyOC4zMjl6IiBmaWxsPSIjMjNBM0MyIi8+PHBhdGggZD0iTTEyMy44NTkgMy44MWgxOS44MThWMjMuNjNoLTE5LjgxOFYzLjgxem0xLjY1MiAxLjY1MWgxLjU2M3YxNi41MTZoLTEuNTYzVjUuNDZ6bTIuOTQgMGgxLjYyNnYxNi41MTZoLTEuNjI2VjUuNDZ6bTMuMDAyIDBoMS42MjZ2MTYuNTE2aC0xLjYyNlY1LjQ2em0zLjAwMyAwaDEuNjI3djE2LjUxNmgtMS42MjdWNS40NnptMy4wMDMgMGgxLjYyN3YxNi41MTZoLTEuNjI3VjUuNDZ6bTMuMDAzIDBoMS41NjR2MTYuNTE2aC0xLjU2NFY1LjQ2eiIgZmlsbD0iIzM0QkJERSIvPjxwYXRoIGQ9Ik0xNDYuNzI1IDQ5LjU0M2gxOS44MTh2MTkuODE4aC0xOS44MThWNDkuNTQzem0xLjY1IDEuNjUyaDEuNTY1VjY3LjcxaC0xLjU2NFY1MS4xOTV6bTIuOTQgMGgxLjYyN1Y2Ny43MWgtMS42MjZWNTEuMTk1em0zLjAwNCAwaDEuNjI3VjY3LjcxaC0xLjYyN1Y1MS4xOTV6bTMuMDAyIDBoMS42MjdWNjcuNzFoLTEuNjI3VjUxLjE5NXptMy4wMDQgMGgxLjYyNlY2Ny43MWgtMS42MjZWNTEuMTk1em0zLjAwMiAwaDEuNTY0VjY3LjcxaC0xLjU2NFY1MS4xOTV6IiBmaWxsPSIjMjNBM0MyIi8+PHBhdGggZD0iTTk2LjcwNCAxMDEuNDkyYTUuNDY4IDUuNDY4IDAgMSAxLS4wMDIgMTAuOTM1IDUuNDY4IDUuNDY4IDAgMCAxIC4wMDItMTAuOTM1IiBmaWxsPSIjRDNFQ0VDIi8+PHBhdGggZD0iTTk2LjcwNCAxMDMuMDQzYy41IDAgLjk3Ny4wOTQgMS40MTcuMjY1YTEuNTk4IDEuNTk4IDAgMCAwIC43OTggMi45OGMuNjA1IDAgMS4xMy0uMzM1IDEuNDAyLS44MzFhMy45MTUgMy45MTUgMCAxIDEtMy42MTctMi40MTRNMCA5MC4xNjJoMjU0LjMyN2MtNS41MzctMS40MDQtMTcuNTItMy4zMDItMTUuNTQ0LTEwLjU2LTEwLjA3IDExLjY1Mi0zNC4zNTMgOC4xNzUtNDAuNDgyIDIuNDMtNi44MjQgOS44OTgtNDYuNTU0IDYuMTM1LTQ5LjMyNS0xLjU3Ni04LjU1NiAxMC4wNDEtMzUuMDY3IDEwLjA0MS00My42MjMgMC0yLjc3MyA3LjcxMS00Mi41MDIgMTEuNDc0LTQ5LjMyNyAxLjU3NS02LjEyOCA1Ljc0Ni0zMC40MSA5LjIyMy00MC40OC0yLjQyOEMxNy41MjIgODYuODYgNS41MzkgODguNzU4IDAgOTAuMTYzIiBmaWxsPSIjMzY0NTQ4Ii8+PHBhdGggZD0iTTExMS4yMzcgMTQwLjg5Yy0xMy41NC02LjQyNS0yMC45NzEtMTUuMTYtMjUuMTA2LTI0LjY5NC01LjAzIDEuNDM1LTExLjA3NSAyLjM1My0xOC4xIDIuNzQ3LTIuNjQ2LjE0OC01LjQzLjIyNC04LjM1LjIyNC0zLjM2OCAwLTYuOTE3LS4xLTEwLjY0My0uMjk3IDEyLjQxNyAxMi40MSAyNy42OTIgMjEuOTY0IDU1Ljk3NiAyMi4xMzggMi4wODggMCA0LjE2LS4wNCA2LjIyMy0uMTE4IiBmaWxsPSIjQkREOUQ3Ii8+PHBhdGggZD0iTTkxLjE2IDEyNC45OTRjLTEuODczLTIuNTQzLTMuNjktNS43MzktNS4wMjYtOC44LTUuMDMgMS40MzctMTEuMDc3IDIuMzU1LTE4LjEwMyAyLjc1IDQuODI2IDIuNjE5IDExLjcyNyA1LjA0NiAyMy4xMyA2LjA1IiBmaWxsPSIjRDNFQ0VDIi8+PC9nPjwvc3ZnPg==");


/***/ }),

/***/ "./assets/dotnet.svg":
/*!***************************!*\
  !*** ./assets/dotnet.svg ***!
  \***************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgDotnet(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "255.93pt",
    height: "255.93pt",
    viewBox: "0 0 255.93 255.93",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("clipPath", {
    id: "clip1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M 0 0 L 255.929688 0 L 255.929688 255.929688 L 0 255.929688 Z M 0 0 "
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "surface1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    clipPath: "url(#clip1)",
    clipRule: "nonzero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(40.39917%,16.499329%,47.799683%)",
      fillOpacity: 1
    },
    d: "M 255.933594 255.929688 L 0 255.929688 L 0 -0.00390625 L 255.933594 -0.00390625 L 255.933594 255.929688 "
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 164.703125 97.792969 C 166.019531 96.636719 166.671875 95.1875 166.671875 93.433594 C 166.671875 91.839844 166.144531 90.53125 165.101563 89.503906 C 164.296875 88.691406 162.976563 87.894531 161.148438 87.132813 C 159.523438 86.441406 158.441406 85.84375 157.933594 85.355469 C 157.363281 84.828125 157.074219 84.089844 157.074219 83.144531 C 157.074219 82.265625 157.417969 81.550781 158.105469 80.984375 C 158.78125 80.433594 159.695313 80.15625 160.832031 80.15625 C 162.664063 80.15625 164.277344 80.660156 165.6875 81.679688 L 165.6875 78.226563 C 164.335938 77.558594 162.816406 77.226563 161.109375 77.226563 C 158.890625 77.226563 157.082031 77.8125 155.671875 79 C 154.269531 80.175781 153.558594 81.65625 153.558594 83.429688 C 153.558594 85.019531 154.015625 86.308594 154.921875 87.300781 C 155.671875 88.136719 156.949219 88.941406 158.742188 89.726563 C 160.484375 90.492188 161.65625 91.148438 162.257813 91.691406 C 162.859375 92.230469 163.160156 92.925781 163.160156 93.761719 C 163.160156 95.753906 161.800781 96.753906 159.085938 96.753906 C 157.050781 96.753906 155.199219 96.066406 153.519531 94.699219 L 153.519531 98.386719 C 155.027344 99.25 156.804688 99.675781 158.832031 99.675781 C 161.304688 99.675781 163.273438 99.046875 164.703125 97.792969 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 196.941406 99.160156 L 200.371094 99.160156 L 200.371094 80.652344 L 205.390625 80.652344 L 205.390625 77.75 L 200.371094 77.75 L 200.371094 74.449219 C 200.371094 71.425781 201.5625 69.910156 203.960938 69.910156 C 204.8125 69.910156 205.566406 70.101563 206.238281 70.476563 L 206.238281 67.378906 C 205.640625 67.132813 204.8125 67.007813 203.757813 67.007813 C 201.929688 67.007813 200.390625 67.585938 199.132813 68.742188 C 197.664063 70.074219 196.941406 71.925781 196.941406 74.277344 L 196.941406 77.75 L 193.300781 77.75 L 193.300781 80.652344 L 196.941406 80.652344 L 196.941406 99.160156 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 87.675781 72.3125 C 88.304688 72.3125 88.839844 72.097656 89.273438 71.664063 C 89.710938 71.234375 89.933594 70.707031 89.933594 70.074219 C 89.933594 69.457031 89.710938 68.929688 89.273438 68.5 C 88.839844 68.074219 88.304688 67.863281 87.675781 67.863281 C 87.066406 67.863281 86.535156 68.074219 86.097656 68.5 C 85.664063 68.929688 85.445313 69.457031 85.445313 70.074219 C 85.445313 70.734375 85.664063 71.265625 86.097656 71.6875 C 86.535156 72.105469 87.066406 72.3125 87.675781 72.3125 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 104.84375 99.675781 C 107.105469 99.675781 109.066406 99.175781 110.710938 98.167969 L 110.710938 94.910156 C 109.066406 96.140625 107.316406 96.753906 105.441406 96.753906 C 103.226563 96.753906 101.464844 96.027344 100.144531 94.578125 C 98.828125 93.121094 98.164063 91.15625 98.164063 88.660156 C 98.164063 86.070313 98.894531 83.988281 100.324219 82.4375 C 101.699219 80.917969 103.472656 80.15625 105.652344 80.15625 C 107.46875 80.15625 109.160156 80.710938 110.757813 81.832031 L 110.757813 78.3125 C 109.316406 77.59375 107.664063 77.226563 105.800781 77.226563 C 102.402344 77.226563 99.691406 78.308594 97.679688 80.46875 C 95.660156 82.625 94.65625 85.464844 94.65625 88.96875 C 94.65625 92.097656 95.578125 94.648438 97.414063 96.625 C 99.300781 98.65625 101.773438 99.675781 104.84375 99.675781 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 226.71875 76.121094 L 227.621094 76.121094 C 228.25 76.121094 228.695313 76.230469 228.957031 76.441406 C 229.191406 76.636719 229.304688 76.929688 229.304688 77.347656 C 229.304688 78.179688 228.808594 78.59375 227.804688 78.59375 L 226.71875 78.59375 Z M 226.71875 79.460938 L 227.386719 79.460938 C 227.855469 79.460938 228.28125 79.894531 228.683594 80.769531 L 229.472656 82.507813 L 230.707031 82.507813 L 229.757813 80.578125 C 229.359375 79.777344 228.957031 79.332031 228.554688 79.234375 L 228.554688 79.210938 C 229.136719 79.085938 229.59375 78.851563 229.910156 78.496094 C 230.234375 78.148438 230.398438 77.726563 230.398438 77.226563 C 230.398438 76.664063 230.195313 76.210938 229.800781 75.859375 C 229.335938 75.449219 228.652344 75.25 227.742188 75.25 L 225.699219 75.25 L 225.699219 82.507813 L 226.71875 82.507813 L 226.71875 79.460938 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 210.941406 93.320313 C 210.941406 97.527344 212.808594 99.636719 216.546875 99.636719 C 217.878906 99.636719 218.953125 99.410156 219.765625 98.945313 L 219.765625 96.019531 C 219.136719 96.480469 218.402344 96.714844 217.550781 96.714844 C 216.40625 96.714844 215.597656 96.410156 215.101563 95.796875 C 214.609375 95.199219 214.375 94.171875 214.375 92.734375 L 214.375 80.652344 L 219.765625 80.652344 L 219.765625 77.75 L 214.375 77.75 L 214.375 71.410156 C 213.171875 71.804688 212.035156 72.179688 210.941406 72.523438 L 210.941406 77.75 L 207.265625 77.75 L 207.265625 80.652344 L 210.941406 80.652344 L 210.941406 93.320313 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 224.332031 75.371094 C 225.289063 74.40625 226.496094 73.925781 227.941406 73.925781 C 229.34375 73.925781 230.539063 74.40625 231.511719 75.363281 C 232.480469 76.320313 232.96875 77.523438 232.96875 78.953125 C 232.96875 80.390625 232.480469 81.601563 231.503906 82.554688 C 230.523438 83.53125 229.335938 84.011719 227.941406 84.011719 C 226.539063 84.011719 225.351563 83.535156 224.378906 82.574219 C 223.394531 81.609375 222.898438 80.398438 222.898438 78.953125 C 222.898438 77.535156 223.375 76.339844 224.332031 75.371094 Z M 227.914063 84.589844 C 229.535156 84.589844 230.894531 84.042969 231.996094 82.953125 C 233.105469 81.871094 233.65625 80.527344 233.65625 78.921875 C 233.65625 77.289063 233.101563 75.9375 231.988281 74.867188 C 230.902344 73.824219 229.5625 73.296875 227.960938 73.296875 C 226.332031 73.296875 224.96875 73.847656 223.871094 74.9375 C 222.777344 76.039063 222.226563 77.378906 222.226563 78.96875 C 222.226563 80.59375 222.765625 81.9375 223.84375 83 C 224.921875 84.054688 226.28125 84.589844 227.914063 84.589844 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 85.921875 99.160156 L 89.34375 99.160156 L 89.34375 77.75 L 85.921875 77.75 L 85.921875 99.160156 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 134.148438 82.242188 C 135.425781 80.851563 137.132813 80.15625 139.265625 80.15625 C 141.425781 80.15625 143.105469 80.84375 144.308594 82.222656 C 145.542969 83.660156 146.160156 85.75 146.160156 88.492188 C 146.160156 91.109375 145.585938 93.128906 144.425781 94.558594 C 143.242188 96.019531 141.519531 96.753906 139.265625 96.753906 C 137.085938 96.753906 135.351563 96.03125 134.0625 94.585938 C 132.765625 93.148438 132.121094 91.140625 132.121094 88.574219 C 132.121094 85.84375 132.796875 83.738281 134.148438 82.242188 Z M 139.011719 99.675781 C 142.269531 99.675781 144.863281 98.644531 146.796875 96.582031 C 148.710938 94.523438 149.675781 91.785156 149.675781 88.371094 C 149.675781 84.902344 148.777344 82.175781 146.996094 80.191406 C 145.195313 78.222656 142.703125 77.226563 139.511719 77.226563 C 136.265625 77.226563 133.679688 78.179688 131.742188 80.066406 C 129.648438 82.105469 128.605469 84.980469 128.605469 88.703125 C 128.605469 91.96875 129.527344 94.59375 131.363281 96.582031 C 133.242188 98.644531 135.796875 99.675781 139.011719 99.675781 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 173.574219 88.574219 C 173.574219 85.84375 174.242188 83.738281 175.59375 82.242188 C 176.878906 80.851563 178.589844 80.15625 180.71875 80.15625 C 182.875 80.15625 184.558594 80.84375 185.757813 82.222656 C 186.996094 83.660156 187.617188 85.75 187.617188 88.492188 C 187.617188 91.109375 187.039063 93.128906 185.878906 94.558594 C 184.695313 96.019531 182.976563 96.753906 180.71875 96.753906 C 178.546875 96.753906 176.808594 96.03125 175.503906 94.585938 C 174.21875 93.148438 173.574219 91.140625 173.574219 88.574219 Z M 188.242188 96.582031 C 190.164063 94.523438 191.136719 91.785156 191.136719 88.371094 C 191.136719 84.902344 190.230469 82.175781 188.445313 80.191406 C 186.652344 78.222656 184.160156 77.226563 180.96875 77.226563 C 177.71875 77.226563 175.125 78.179688 173.191406 80.066406 C 171.109375 82.105469 170.058594 84.980469 170.058594 88.703125 C 170.058594 91.96875 170.980469 94.59375 172.816406 96.582031 C 174.695313 98.644531 177.25 99.675781 180.46875 99.675781 C 183.730469 99.675781 186.324219 98.644531 188.242188 96.582031 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 137.851563 151.855469 L 166.246094 151.855469 L 166.246094 143.523438 L 137.851563 143.523438 L 137.851563 117.371094 L 168.496094 117.371094 L 168.496094 109.042969 L 128.644531 109.042969 L 128.644531 187.652344 L 170.304688 187.652344 L 170.304688 179.324219 L 137.851563 179.324219 L 137.851563 151.855469 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 178.957031 117.371094 L 201.644531 117.371094 L 201.644531 187.652344 L 210.855469 187.652344 L 210.855469 117.371094 L 233.5 117.371094 L 233.5 109.042969 L 178.957031 109.042969 L 178.957031 117.371094 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 28.304688 176.527344 C 26.628906 176.527344 25.203125 177.125 24.03125 178.335938 C 22.859375 179.542969 22.277344 181 22.277344 182.722656 C 22.277344 184.402344 22.859375 185.851563 24.03125 187.078125 C 25.203125 188.300781 26.628906 188.917969 28.304688 188.917969 C 30.023438 188.917969 31.488281 188.300781 32.695313 187.078125 C 33.902344 185.851563 34.503906 184.402344 34.503906 182.722656 C 34.503906 181.042969 33.902344 179.585938 32.695313 178.363281 C 31.488281 177.132813 30.023438 176.527344 28.304688 176.527344 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 121.726563 78.546875 C 120.6875 79.398438 119.910156 80.597656 119.410156 82.164063 L 119.324219 82.164063 L 119.324219 77.75 L 115.898438 77.75 L 115.898438 99.160156 L 119.324219 99.160156 L 119.324219 88.242188 C 119.324219 85.757813 119.859375 83.816406 120.933594 82.410156 C 121.882813 81.160156 123.054688 80.535156 124.445313 80.535156 C 125.589844 80.535156 126.457031 80.757813 127.0625 81.222656 L 127.0625 77.667969 C 126.597656 77.472656 125.921875 77.378906 125.011719 77.378906 C 123.796875 77.378906 122.699219 77.765625 121.726563 78.546875 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 51.164063 73.214844 L 51.242188 73.214844 L 62.378906 99.160156 L 64.09375 99.160156 L 75.21875 73.214844 L 75.296875 73.214844 L 75.003906 99.160156 L 78.519531 99.160156 L 78.519531 69.179688 L 74.117188 69.179688 L 63.285156 93.675781 L 63.140625 93.675781 L 52.582031 69.179688 L 47.941406 69.179688 L 47.941406 99.160156 L 51.328125 99.160156 L 51.164063 73.214844 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(100%,100%,100%)",
      fillOpacity: 1
    },
    d: "M 102.078125 175.4375 L 59.875 109.042969 L 47.917969 109.042969 L 47.917969 187.652344 L 57.132813 187.652344 L 57.132813 120.226563 L 100.058594 187.652344 L 111.234375 187.652344 L 111.234375 109.042969 L 102.078125 109.042969 L 102.078125 175.4375 "
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgDotnet);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dotnet.53880b9.svg");


/***/ }),

/***/ "./assets/dp.jpg":
/*!***********************!*\
  !*** ./assets/dp.jpg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dp.d01b73b.jpg";

/***/ }),

/***/ "./assets/github-logo.svg":
/*!********************************!*\
  !*** ./assets/github-logo.svg ***!
  \********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g, _g2, _g3, _g4, _g5, _g6, _g7, _g8, _g9, _g10, _g11, _g12, _g13, _g14, _g15, _g16;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgGithubLogo(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    width: "438.549px",
    height: "438.549px",
    viewBox: "0 0 438.549 438.549",
    style: {
      enableBackground: "new 0 0 438.549 438.549"
    },
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"
  }))), _g2 || (_g2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g3 || (_g3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g4 || (_g4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g5 || (_g5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g6 || (_g6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g7 || (_g7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g8 || (_g8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g9 || (_g9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g10 || (_g10 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g11 || (_g11 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g12 || (_g12 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g13 || (_g13 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g14 || (_g14 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g15 || (_g15 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g16 || (_g16 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgGithubLogo);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQzOC41NDlweCIgaGVpZ2h0PSI0MzguNTQ5cHgiIHZpZXdCb3g9IjAgMCA0MzguNTQ5IDQzOC41NDkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzOC41NDkgNDM4LjU0OTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NQ0KCQljLTM5Ljc4MSwwLTc2LjQ3Miw5LjgwNC0xMTAuMDYzLDI5LjQwOGMtMzMuNTk2LDE5LjYwNS02MC4xOTIsNDYuMjA0LTc5LjgsNzkuOEM5LjgwMywxNDguMTY4LDAsMTg0Ljg1NCwwLDIyNC42Mw0KCQljMCw0Ny43OCwxMy45NCw5MC43NDUsNDEuODI3LDEyOC45MDZjMjcuODg0LDM4LjE2NCw2My45MDYsNjQuNTcyLDEwOC4wNjMsNzkuMjI3YzUuMTQsMC45NTQsOC45NDUsMC4yODMsMTEuNDE5LTEuOTk2DQoJCWMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNg0KCQljLTQuMTg3LDAuNzY3LTkuNDY5LDEuMDkyLTE1Ljg0NiwxYy02LjM3NC0wLjA4OS0xMi45OTEtMC43NTctMTkuODQyLTEuOTk5Yy02Ljg1NC0xLjIzMS0xMy4yMjktNC4wODYtMTkuMTMtOC41NTkNCgkJYy01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5DQoJCWMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5Nw0KCQljLTAuNTcyLTEuMzM1LTAuMDk4LTIuNDMsMS40MjctMy4yODljMS41MjUtMC44NTksNC4yODEtMS4yNzYsOC4yOC0xLjI3Nmw1LjcwOCwwLjg1M2MzLjgwNywwLjc2Myw4LjUxNiwzLjA0MiwxNC4xMzMsNi44NTENCgkJYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQyYzQuMzgsNy44MDYsOS42NTcsMTMuNzU0LDE1Ljg0NiwxNy44NDdjNi4xODQsNC4wOTMsMTIuNDE5LDYuMTM2LDE4LjY5OSw2LjEzNg0KCQljNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxDQoJCWMtMTAuODQ4LTEuMTQtMjAuNjAxLTIuODU3LTI5LjI2NC01LjE0Yy04LjY1OC0yLjI4Ni0xNy42MDUtNS45OTYtMjYuODM1LTExLjE0Yy05LjIzNS01LjEzNy0xNi44OTYtMTEuNTE2LTIyLjk4NS0xOS4xMjYNCgkJYy02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc5Yy0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNmMwLTIzLjAzNSw3LjUyLTQyLjYzNywyMi41NTctNTguODE3DQoJCWMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NA0KCQljNS4wNDYsMy4wNDEsOS4wODksNS42MTgsMTIuMTM1LDcuNzA4YzE3LjcwNS00Ljk0NywzNS45NzYtNy40MjEsNTQuODE4LTcuNDIxczM3LjExNywyLjQ3NCw1NC44MjMsNy40MjFsMTAuODQ5LTYuODQ5DQoJCWM3LjQxOS00LjU3LDE2LjE4LTguNzU4LDI2LjI2Mi0xMi41NjVjMTAuMDg4LTMuODA1LDE3LjgwMi00Ljg1MywyMy4xMzQtMy4xMzhjOC41NjIsMjEuNTA5LDkuMzI1LDQwLjkyMiwyLjI3OSw1OC4yNA0KCQljMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5DQoJCWMtNi4xOTEsNy41MjEtMTMuOTAxLDEzLjg1LTIzLjEzMSwxOC45ODZjLTkuMjMyLDUuMTQtMTguMTgyLDguODUtMjYuODQsMTEuMTM2Yy04LjY2MiwyLjI4Ni0xOC40MTUsNC4wMDQtMjkuMjYzLDUuMTQ2DQoJCWM5Ljg5NCw4LjU2MiwxNC44NDIsMjIuMDc3LDE0Ljg0Miw0MC41Mzl2NjAuMjM3YzAsMy40MjIsMS4xOSw2LjI3OSwzLjU3Miw4LjU2MmMyLjM3OSwyLjI3OSw2LjEzNiwyLjk1LDExLjI3NiwxLjk5NQ0KCQljNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2DQoJCUM0MzguNTM2LDE4NC44NTEsNDI4LjcyOCwxNDguMTY4LDQwOS4xMzIsMTE0LjU3M3oiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");


/***/ }),

/***/ "./assets/graphql.svg":
/*!****************************!*\
  !*** ./assets/graphql.svg ***!
  \****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3, _path4, _path5, _path6, _path7;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgGraphql(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    height: 64,
    width: 64,
    viewBox: "0 0 29.999 30",
    fill: "#e10098",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M4.08 22.864l-1.1-.636L15.248.98l1.1.636z"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2.727 20.53h24.538v1.272H2.727z"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15.486 28.332L3.213 21.246l.636-1.1 12.273 7.086zm10.662-18.47L13.874 2.777l.636-1.1 12.273 7.086z"
  })), _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M3.852 9.858l-.636-1.1L15.5 1.67l.636 1.1z"
  })), _path5 || (_path5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M25.922 22.864l-12.27-21.25 1.1-.636 12.27 21.25zM3.7 7.914h1.272v14.172H3.7zm21.328 0H26.3v14.172h-1.272z"
  })), _path6 || (_path6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15.27 27.793l-.555-.962 10.675-6.163.555.962z"
  })), _path7 || (_path7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M27.985 22.5a2.68 2.68 0 0 1-3.654.981 2.68 2.68 0 0 1-.981-3.654 2.68 2.68 0 0 1 3.654-.981c1.287.743 1.724 2.375.98 3.654M6.642 10.174a2.68 2.68 0 0 1-3.654.981A2.68 2.68 0 0 1 2.007 7.5a2.68 2.68 0 0 1 3.654-.981 2.68 2.68 0 0 1 .981 3.654M2.015 22.5a2.68 2.68 0 0 1 .981-3.654 2.68 2.68 0 0 1 3.654.981 2.68 2.68 0 0 1-.981 3.654c-1.287.735-2.92.3-3.654-.98m21.343-12.326a2.68 2.68 0 0 1 .981-3.654 2.68 2.68 0 0 1 3.654.981 2.68 2.68 0 0 1-.981 3.654 2.68 2.68 0 0 1-3.654-.981M15 30a2.674 2.674 0 1 1 2.674-2.673A2.68 2.68 0 0 1 15 30m0-24.652a2.67 2.67 0 0 1-2.674-2.674 2.67 2.67 0 1 1 5.347 0A2.67 2.67 0 0 1 15 5.347"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgGraphql);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIgdmlld0JveD0iMCAwIDI5Ljk5OSAzMCIgZmlsbD0iI2UxMDA5OCI+PHBhdGggZD0iTTQuMDggMjIuODY0bC0xLjEtLjYzNkwxNS4yNDguOThsMS4xLjYzNnoiLz48cGF0aCBkPSJNMi43MjcgMjAuNTNoMjQuNTM4djEuMjcySDIuNzI3eiIvPjxwYXRoIGQ9Ik0xNS40ODYgMjguMzMyTDMuMjEzIDIxLjI0NmwuNjM2LTEuMSAxMi4yNzMgNy4wODZ6bTEwLjY2Mi0xOC40N0wxMy44NzQgMi43NzdsLjYzNi0xLjEgMTIuMjczIDcuMDg2eiIvPjxwYXRoIGQ9Ik0zLjg1MiA5Ljg1OGwtLjYzNi0xLjFMMTUuNSAxLjY3bC42MzYgMS4xeiIvPjxwYXRoIGQ9Ik0yNS45MjIgMjIuODY0bC0xMi4yNy0yMS4yNSAxLjEtLjYzNiAxMi4yNyAyMS4yNXpNMy43IDcuOTE0aDEuMjcydjE0LjE3MkgzLjd6bTIxLjMyOCAwSDI2LjN2MTQuMTcyaC0xLjI3MnoiLz48cGF0aCBkPSJNMTUuMjcgMjcuNzkzbC0uNTU1LS45NjIgMTAuNjc1LTYuMTYzLjU1NS45NjJ6Ii8+PHBhdGggZD0iTTI3Ljk4NSAyMi41YTIuNjggMi42OCAwIDAgMS0zLjY1NC45ODEgMi42OCAyLjY4IDAgMCAxLS45ODEtMy42NTQgMi42OCAyLjY4IDAgMCAxIDMuNjU0LS45ODFjMS4yODcuNzQzIDEuNzI0IDIuMzc1Ljk4IDMuNjU0TTYuNjQyIDEwLjE3NGEyLjY4IDIuNjggMCAwIDEtMy42NTQuOTgxQTIuNjggMi42OCAwIDAgMSAyLjAwNyA3LjVhMi42OCAyLjY4IDAgMCAxIDMuNjU0LS45ODEgMi42OCAyLjY4IDAgMCAxIC45ODEgMy42NTRNMi4wMTUgMjIuNWEyLjY4IDIuNjggMCAwIDEgLjk4MS0zLjY1NCAyLjY4IDIuNjggMCAwIDEgMy42NTQuOTgxIDIuNjggMi42OCAwIDAgMS0uOTgxIDMuNjU0Yy0xLjI4Ny43MzUtMi45Mi4zLTMuNjU0LS45OG0yMS4zNDMtMTIuMzI2YTIuNjggMi42OCAwIDAgMSAuOTgxLTMuNjU0IDIuNjggMi42OCAwIDAgMSAzLjY1NC45ODEgMi42OCAyLjY4IDAgMCAxLS45ODEgMy42NTQgMi42OCAyLjY4IDAgMCAxLTMuNjU0LS45ODFNMTUgMzBhMi42NzQgMi42NzQgMCAxIDEgMi42NzQtMi42NzNBMi42OCAyLjY4IDAgMCAxIDE1IDMwbTAtMjQuNjUyYTIuNjcgMi42NyAwIDAgMS0yLjY3NC0yLjY3NCAyLjY3IDIuNjcgMCAxIDEgNS4zNDcgMEEyLjY3IDIuNjcgMCAwIDEgMTUgNS4zNDciLz48L3N2Zz4=");


/***/ }),

/***/ "./assets/linkedin.svg":
/*!*****************************!*\
  !*** ./assets/linkedin.svg ***!
  \*****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g, _g2, _g3, _g4, _g5, _g6, _g7, _g8, _g9, _g10, _g11, _g12, _g13, _g14, _g15;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgLinkedin(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 382 382",
    style: {
      enableBackground: "new 0 0 382 382"
    },
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      fill: "#0077B7"
    },
    d: "M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"
  }), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g2 || (_g2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g3 || (_g3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g4 || (_g4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g5 || (_g5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g6 || (_g6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g7 || (_g7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g8 || (_g8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g9 || (_g9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g10 || (_g10 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g11 || (_g11 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g12 || (_g12 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g13 || (_g13 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g14 || (_g14 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g15 || (_g15 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgLinkedin);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM4MiAzODIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4MiAzODI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDc3Qjc7IiBkPSJNMzQ3LjQ0NSwwSDM0LjU1NUMxNS40NzEsMCwwLDE1LjQ3MSwwLDM0LjU1NXYzMTIuODg5QzAsMzY2LjUyOSwxNS40NzEsMzgyLDM0LjU1NSwzODJoMzEyLjg4OQ0KCUMzNjYuNTI5LDM4MiwzODIsMzY2LjUyOSwzODIsMzQ3LjQ0NFYzNC41NTVDMzgyLDE1LjQ3MSwzNjYuNTI5LDAsMzQ3LjQ0NSwweiBNMTE4LjIwNywzMjkuODQ0YzAsNS41NTQtNC41MDIsMTAuMDU2LTEwLjA1NiwxMC4wNTYNCglINjUuMzQ1Yy01LjU1NCwwLTEwLjA1Ni00LjUwMi0xMC4wNTYtMTAuMDU2VjE1MC40MDNjMC01LjU1NCw0LjUwMi0xMC4wNTYsMTAuMDU2LTEwLjA1Nmg0Mi44MDYNCgljNS41NTQsMCwxMC4wNTYsNC41MDIsMTAuMDU2LDEwLjA1NlYzMjkuODQ0eiBNODYuNzQ4LDEyMy40MzJjLTIyLjQ1OSwwLTQwLjY2Ni0xOC4yMDctNDAuNjY2LTQwLjY2NlM2NC4yODksNDIuMSw4Ni43NDgsNDIuMQ0KCXM0MC42NjYsMTguMjA3LDQwLjY2Niw0MC42NjZTMTA5LjIwOCwxMjMuNDMyLDg2Ljc0OCwxMjMuNDMyeiBNMzQxLjkxLDMzMC42NTRjMCw1LjEwNi00LjE0LDkuMjQ2LTkuMjQ2LDkuMjQ2SDI4Ni43Mw0KCWMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2di04NC4xNjhjMC0xMi41NTYsMy42ODMtNTUuMDIxLTMyLjgxMy01NS4wMjFjLTI4LjMwOSwwLTM0LjA1MSwyOS4wNjYtMzUuMjA0LDQyLjExdjk3LjA3OQ0KCWMwLDUuMTA2LTQuMTM5LDkuMjQ2LTkuMjQ2LDkuMjQ2aC00NC40MjZjLTUuMTA2LDAtOS4yNDYtNC4xNC05LjI0Ni05LjI0NlYxNDkuNTkzYzAtNS4xMDYsNC4xNC05LjI0Niw5LjI0Ni05LjI0Nmg0NC40MjYNCgljNS4xMDYsMCw5LjI0Niw0LjE0LDkuMjQ2LDkuMjQ2djE1LjY1NWMxMC40OTctMTUuNzUzLDI2LjA5Ny0yNy45MTIsNTkuMzEyLTI3LjkxMmM3My41NTIsMCw3My4xMzEsNjguNzE2LDczLjEzMSwxMDYuNDcyDQoJTDM0MS45MSwzMzAuNjU0TDM0MS45MSwzMzAuNjU0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=");


/***/ }),

/***/ "./assets/mongodb.svg":
/*!****************************!*\
  !*** ./assets/mongodb.svg ***!
  \****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgMongodb(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 64,
    height: 64,
    viewBox: "0 0 32 32",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z",
    fill: "#599636"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z",
    fill: "#6cac48"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z",
    fill: "#c2bfbf"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgMongodb);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTUuOS4wODdsLjg1NCAxLjYwNGMuMTkyLjI5Ni40LjU1OC42NDUuODAyLjcxNS43MTUgMS4zOTQgMS40NjQgMi4wMDQgMi4yNjYgMS40NDcgMS45IDIuNDIzIDQuMDEgMy4xMiA2LjI5Mi40MTggMS4zOTQuNjQ1IDIuODI0LjY2MiA0LjI3LjA3IDQuMzIzLTEuNDEyIDguMDM1LTQuNCAxMS4xMi0uNDg4LjQ4OC0xLjAxLjk0LTEuNTcgMS4zNDItLjI5NiAwLS40MzYtLjIyNy0uNTU4LS40MzYtLjIyNy0uMzgzLS4zNjYtLjgyLS40MzYtMS4yNTUtLjEwNS0uNTIzLS4xNzQtMS4wNDYtLjE0LTEuNTg2di0uMjQ0QzE2LjA1NyAyNC4yMSAxNS43OTYuMjEgMTUuOS4wODd6IiBmaWxsPSIjNTk5NjM2Ii8+PHBhdGggZD0iTTE1LjkuMDM0Yy0uMDM1LS4wNy0uMDctLjAxNy0uMTA1LjAxNy4wMTcuMzUtLjEwNS42NjItLjI5Ni45Ni0uMjEuMjk2LS40ODguNTIzLS43NjcuNzY3LTEuNTUgMS4zNDItMi43NyAyLjk2My0zLjc0NyA0Ljc3Ni0xLjMgMi40NC0xLjk3IDUuMDU1LTIuMTYgNy44MDgtLjA4Ny45OTMuMzE0IDQuNDk3LjYyNyA1LjUwOC44NTQgMi42ODQgMi4zODggNC45MzMgNC4zNzUgNi44ODUuNDg4LjQ3IDEuMDEuOTA2IDEuNTUgMS4zMjUuMTU3IDAgLjE3NC0uMTQuMjEtLjI0NGE0Ljc4IDQuNzggMCAwIDAgLjE1Ny0uNjhsLjM1LTIuNjE0TDE1LjkuMDM0eiIgZmlsbD0iIzZjYWM0OCIvPjxwYXRoIGQ9Ik0xNi43NTQgMjguODQ1Yy4wMzUtLjQuMjI3LS43MzIuNDM2LTEuMDYzLS4yMS0uMDg3LS4zNjYtLjI2LS40ODgtLjQ1My0uMTA1LS4xNzQtLjE5Mi0uMzgzLS4yNi0uNTc1LS4yNDQtLjczMi0uMjk2LTEuNS0uMzY2LTIuMjQ4di0uNDUzYy0uMDg3LjA3LS4xMDUuNjYyLS4xMDUuNzVhMTcuMzcgMTcuMzcgMCAwIDEtLjMxNCAyLjM1M2MtLjA1Mi4zMTQtLjA4Ny42MjctLjI4LjkwNiAwIC4wMzUgMCAuMDcuMDE3LjEyMi4zMTQuOTI0LjQgMS44NjUuNDUzIDIuODI0di4zNWMwIC40MTgtLjAxNy4zMy4zMy40Ny4xNC4wNTIuMjk2LjA3LjQzNi4xNzQuMTA1IDAgLjEyMi0uMDg3LjEyMi0uMTU3bC0uMDUyLS41NzV2LTEuNjA0Yy0uMDE3LS4yOC4wMzUtLjU1OC4wNy0uODJ6IiBmaWxsPSIjYzJiZmJmIi8+PC9zdmc+");


/***/ }),

/***/ "./assets/mysql.svg":
/*!**************************!*\
  !*** ./assets/mysql.svg ***!
  \**************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgMysql(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 2500,
    height: 2461,
    viewBox: "0 0 256 252",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMinYMin meet",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M235.648 194.212c-13.918-.347-24.705 1.045-33.752 4.872-2.61 1.043-6.786 1.044-7.134 4.35 1.392 1.392 1.566 3.654 2.784 5.567 2.09 3.479 5.741 8.177 9.047 10.614 3.653 2.783 7.308 5.566 11.134 8.002 6.786 4.176 14.442 6.611 21.053 10.787 3.829 2.434 7.654 5.568 11.482 8.177 1.914 1.39 3.131 3.654 5.568 4.523v-.521c-1.219-1.567-1.567-3.828-2.784-5.568-1.738-1.74-3.48-3.306-5.22-5.046-5.045-6.784-11.308-12.7-18.093-17.571-5.567-3.828-17.747-9.047-20.008-15.485 0 0-.175-.173-.348-.347 3.827-.348 8.35-1.74 12.005-2.784 5.915-1.567 11.308-1.218 17.398-2.784 2.783-.696 5.567-1.566 8.35-2.436v-1.565c-3.13-3.132-5.392-7.307-8.698-10.265-8.873-7.657-18.617-15.137-28.707-21.4-5.394-3.48-12.354-5.742-18.095-8.699-2.086-1.045-5.567-1.566-6.784-3.306-3.133-3.827-4.873-8.872-7.134-13.396-5.044-9.57-9.917-20.182-14.267-30.272-3.13-6.786-5.044-13.572-8.872-19.834-17.92-29.577-37.406-47.497-67.33-65.07-6.438-3.653-14.093-5.219-22.27-7.132-4.348-.175-8.699-.522-13.048-.697-2.784-1.218-5.568-4.523-8.004-6.089C34.006 4.573 8.429-8.996 1.122 8.924c-4.698 11.308 6.96 22.442 10.96 28.185 2.96 4.001 6.786 8.524 8.874 13.048 1.218 2.956 1.565 6.09 2.783 9.221 2.785 7.653 5.393 16.18 9.048 23.314 1.914 3.653 4.001 7.48 6.437 10.786 1.392 1.913 3.827 2.784 4.35 5.915-2.435 3.48-2.61 8.7-4.003 13.049-6.263 19.66-3.826 44.017 5.046 58.457 2.783 4.348 9.395 13.92 18.268 10.265 7.83-3.131 6.09-13.048 8.35-21.747.524-2.09.176-3.48 1.219-4.872v.349c2.436 4.87 4.871 9.569 7.133 14.44 5.394 8.524 14.788 17.398 22.617 23.314 4.177 3.13 7.482 8.524 12.702 10.438v-.523h-.349c-1.044-1.566-2.61-2.261-4.001-3.48-3.131-3.13-6.612-6.958-9.047-10.438-7.306-9.744-13.745-20.53-19.486-31.665-2.783-5.392-5.22-11.308-7.481-16.701-1.045-2.09-1.045-5.22-2.784-6.263-2.61 3.827-6.437 7.133-8.351 11.83-3.304 7.481-3.653 16.702-4.871 26.27-.696.176-.349 0-.697.35-5.566-1.394-7.48-7.134-9.569-12.006-5.22-12.352-6.09-32.186-1.565-46.452 1.218-3.654 6.438-15.136 4.35-18.616-1.044-3.306-4.525-5.22-6.438-7.829-2.261-3.306-4.698-7.48-6.263-11.135-4.176-9.743-6.264-20.53-10.787-30.273-2.088-4.524-5.74-9.22-8.699-13.396-3.305-4.697-6.959-8.004-9.569-13.571-.869-1.913-2.088-5.045-.696-7.133.348-1.392 1.043-1.913 2.436-2.261 2.262-1.915 8.7.521 10.96 1.565 6.438 2.608 11.831 5.046 17.225 8.699 2.435 1.74 5.045 5.046 8.176 5.916h3.654c5.568 1.217 11.83.348 17.05 1.913 9.222 2.957 17.572 7.307 25.054 12.005 22.792 14.44 41.58 34.97 54.282 59.501 2.088 4 2.957 7.656 4.871 11.83 3.655 8.526 8.178 17.225 11.83 25.576 3.654 8.176 7.133 16.528 12.353 23.314 2.61 3.652 13.048 5.567 17.746 7.481 3.48 1.565 8.874 2.958 12.005 4.871 5.915 3.652 11.83 7.83 17.398 11.83 2.784 2.088 11.482 6.438 12.005 9.917z",
    fill: "#00546B"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M58.186 43.022c-2.957 0-5.044.35-7.132.871v.348h.348c1.393 2.784 3.827 4.698 5.566 7.133 1.393 2.783 2.61 5.568 4.003 8.352.173-.175.347-.348.347-.348 2.437-1.741 3.654-4.524 3.654-8.7-1.044-1.217-1.218-2.435-2.088-3.653-1.043-1.741-3.306-2.61-4.698-4.003z",
    fill: "#00546B"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgMysql);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNDYxIiB2aWV3Qm94PSIwIDAgMjU2IDI1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48cGF0aCBkPSJNMjM1LjY0OCAxOTQuMjEyYy0xMy45MTgtLjM0Ny0yNC43MDUgMS4wNDUtMzMuNzUyIDQuODcyLTIuNjEgMS4wNDMtNi43ODYgMS4wNDQtNy4xMzQgNC4zNSAxLjM5MiAxLjM5MiAxLjU2NiAzLjY1NCAyLjc4NCA1LjU2NyAyLjA5IDMuNDc5IDUuNzQxIDguMTc3IDkuMDQ3IDEwLjYxNCAzLjY1MyAyLjc4MyA3LjMwOCA1LjU2NiAxMS4xMzQgOC4wMDIgNi43ODYgNC4xNzYgMTQuNDQyIDYuNjExIDIxLjA1MyAxMC43ODcgMy44MjkgMi40MzQgNy42NTQgNS41NjggMTEuNDgyIDguMTc3IDEuOTE0IDEuMzkgMy4xMzEgMy42NTQgNS41NjggNC41MjN2LS41MjFjLTEuMjE5LTEuNTY3LTEuNTY3LTMuODI4LTIuNzg0LTUuNTY4LTEuNzM4LTEuNzQtMy40OC0zLjMwNi01LjIyLTUuMDQ2LTUuMDQ1LTYuNzg0LTExLjMwOC0xMi43LTE4LjA5My0xNy41NzEtNS41NjctMy44MjgtMTcuNzQ3LTkuMDQ3LTIwLjAwOC0xNS40ODUgMCAwLS4xNzUtLjE3My0uMzQ4LS4zNDcgMy44MjctLjM0OCA4LjM1LTEuNzQgMTIuMDA1LTIuNzg0IDUuOTE1LTEuNTY3IDExLjMwOC0xLjIxOCAxNy4zOTgtMi43ODQgMi43ODMtLjY5NiA1LjU2Ny0xLjU2NiA4LjM1LTIuNDM2di0xLjU2NWMtMy4xMy0zLjEzMi01LjM5Mi03LjMwNy04LjY5OC0xMC4yNjUtOC44NzMtNy42NTctMTguNjE3LTE1LjEzNy0yOC43MDctMjEuNC01LjM5NC0zLjQ4LTEyLjM1NC01Ljc0Mi0xOC4wOTUtOC42OTktMi4wODYtMS4wNDUtNS41NjctMS41NjYtNi43ODQtMy4zMDYtMy4xMzMtMy44MjctNC44NzMtOC44NzItNy4xMzQtMTMuMzk2LTUuMDQ0LTkuNTctOS45MTctMjAuMTgyLTE0LjI2Ny0zMC4yNzItMy4xMy02Ljc4Ni01LjA0NC0xMy41NzItOC44NzItMTkuODM0LTE3LjkyLTI5LjU3Ny0zNy40MDYtNDcuNDk3LTY3LjMzLTY1LjA3LTYuNDM4LTMuNjUzLTE0LjA5My01LjIxOS0yMi4yNy03LjEzMi00LjM0OC0uMTc1LTguNjk5LS41MjItMTMuMDQ4LS42OTctMi43ODQtMS4yMTgtNS41NjgtNC41MjMtOC4wMDQtNi4wODlDMzQuMDA2IDQuNTczIDguNDI5LTguOTk2IDEuMTIyIDguOTI0Yy00LjY5OCAxMS4zMDggNi45NiAyMi40NDIgMTAuOTYgMjguMTg1IDIuOTYgNC4wMDEgNi43ODYgOC41MjQgOC44NzQgMTMuMDQ4IDEuMjE4IDIuOTU2IDEuNTY1IDYuMDkgMi43ODMgOS4yMjEgMi43ODUgNy42NTMgNS4zOTMgMTYuMTggOS4wNDggMjMuMzE0IDEuOTE0IDMuNjUzIDQuMDAxIDcuNDggNi40MzcgMTAuNzg2IDEuMzkyIDEuOTEzIDMuODI3IDIuNzg0IDQuMzUgNS45MTUtMi40MzUgMy40OC0yLjYxIDguNy00LjAwMyAxMy4wNDktNi4yNjMgMTkuNjYtMy44MjYgNDQuMDE3IDUuMDQ2IDU4LjQ1NyAyLjc4MyA0LjM0OCA5LjM5NSAxMy45MiAxOC4yNjggMTAuMjY1IDcuODMtMy4xMzEgNi4wOS0xMy4wNDggOC4zNS0yMS43NDcuNTI0LTIuMDkuMTc2LTMuNDggMS4yMTktNC44NzJ2LjM0OWMyLjQzNiA0Ljg3IDQuODcxIDkuNTY5IDcuMTMzIDE0LjQ0IDUuMzk0IDguNTI0IDE0Ljc4OCAxNy4zOTggMjIuNjE3IDIzLjMxNCA0LjE3NyAzLjEzIDcuNDgyIDguNTI0IDEyLjcwMiAxMC40Mzh2LS41MjNoLS4zNDljLTEuMDQ0LTEuNTY2LTIuNjEtMi4yNjEtNC4wMDEtMy40OC0zLjEzMS0zLjEzLTYuNjEyLTYuOTU4LTkuMDQ3LTEwLjQzOC03LjMwNi05Ljc0NC0xMy43NDUtMjAuNTMtMTkuNDg2LTMxLjY2NS0yLjc4My01LjM5Mi01LjIyLTExLjMwOC03LjQ4MS0xNi43MDEtMS4wNDUtMi4wOS0xLjA0NS01LjIyLTIuNzg0LTYuMjYzLTIuNjEgMy44MjctNi40MzcgNy4xMzMtOC4zNTEgMTEuODMtMy4zMDQgNy40ODEtMy42NTMgMTYuNzAyLTQuODcxIDI2LjI3LS42OTYuMTc2LS4zNDkgMC0uNjk3LjM1LTUuNTY2LTEuMzk0LTcuNDgtNy4xMzQtOS41NjktMTIuMDA2LTUuMjItMTIuMzUyLTYuMDktMzIuMTg2LTEuNTY1LTQ2LjQ1MiAxLjIxOC0zLjY1NCA2LjQzOC0xNS4xMzYgNC4zNS0xOC42MTYtMS4wNDQtMy4zMDYtNC41MjUtNS4yMi02LjQzOC03LjgyOS0yLjI2MS0zLjMwNi00LjY5OC03LjQ4LTYuMjYzLTExLjEzNS00LjE3Ni05Ljc0My02LjI2NC0yMC41My0xMC43ODctMzAuMjczLTIuMDg4LTQuNTI0LTUuNzQtOS4yMi04LjY5OS0xMy4zOTYtMy4zMDUtNC42OTctNi45NTktOC4wMDQtOS41NjktMTMuNTcxLS44NjktMS45MTMtMi4wODgtNS4wNDUtLjY5Ni03LjEzMy4zNDgtMS4zOTIgMS4wNDMtMS45MTMgMi40MzYtMi4yNjEgMi4yNjItMS45MTUgOC43LjUyMSAxMC45NiAxLjU2NSA2LjQzOCAyLjYwOCAxMS44MzEgNS4wNDYgMTcuMjI1IDguNjk5IDIuNDM1IDEuNzQgNS4wNDUgNS4wNDYgOC4xNzYgNS45MTZoMy42NTRjNS41NjggMS4yMTcgMTEuODMuMzQ4IDE3LjA1IDEuOTEzIDkuMjIyIDIuOTU3IDE3LjU3MiA3LjMwNyAyNS4wNTQgMTIuMDA1IDIyLjc5MiAxNC40NCA0MS41OCAzNC45NyA1NC4yODIgNTkuNTAxIDIuMDg4IDQgMi45NTcgNy42NTYgNC44NzEgMTEuODMgMy42NTUgOC41MjYgOC4xNzggMTcuMjI1IDExLjgzIDI1LjU3NiAzLjY1NCA4LjE3NiA3LjEzMyAxNi41MjggMTIuMzUzIDIzLjMxNCAyLjYxIDMuNjUyIDEzLjA0OCA1LjU2NyAxNy43NDYgNy40ODEgMy40OCAxLjU2NSA4Ljg3NCAyLjk1OCAxMi4wMDUgNC44NzEgNS45MTUgMy42NTIgMTEuODMgNy44MyAxNy4zOTggMTEuODMgMi43ODQgMi4wODggMTEuNDgyIDYuNDM4IDEyLjAwNSA5LjkxN3oiIGZpbGw9IiMwMDU0NkIiLz48cGF0aCBkPSJNNTguMTg2IDQzLjAyMmMtMi45NTcgMC01LjA0NC4zNS03LjEzMi44NzF2LjM0OGguMzQ4YzEuMzkzIDIuNzg0IDMuODI3IDQuNjk4IDUuNTY2IDcuMTMzIDEuMzkzIDIuNzgzIDIuNjEgNS41NjggNC4wMDMgOC4zNTIuMTczLS4xNzUuMzQ3LS4zNDguMzQ3LS4zNDggMi40MzctMS43NDEgMy42NTQtNC41MjQgMy42NTQtOC43LTEuMDQ0LTEuMjE3LTEuMjE4LTIuNDM1LTIuMDg4LTMuNjUzLTEuMDQzLTEuNzQxLTMuMzA2LTIuNjEtNC42OTgtNC4wMDN6IiBmaWxsPSIjMDA1NDZCIi8+PC9zdmc+");


/***/ }),

/***/ "./assets/nestjs.svg":
/*!***************************!*\
  !*** ./assets/nestjs.svg ***!
  \***************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgNestjs(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: "512px",
    height: "512px",
    viewBox: "0 0 256 255",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    preserveAspectRatio: "xMidYMid",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M150.735739,0 C148.8846,0 147.165687,0.396686115 145.57898,0.925572289 C148.950692,3.17338764 150.801841,6.14846547 151.727441,9.52018849 C151.793738,9.98296798 151.925779,10.3135464 151.991974,10.7763105 C152.058271,11.1729967 152.124118,11.5696685 152.124118,11.9663525 C152.388692,17.7842283 150.603503,18.5114632 149.34739,21.9493092 C147.430118,26.3788568 147.959,31.1389429 150.272949,34.973472 C150.471297,35.4362392 150.735739,35.9651387 151.066323,36.4279315 C148.554016,19.7014919 162.503769,17.1892201 165.082118,11.9663525 C165.280456,7.40458752 161.512066,4.36341631 158.53702,2.24781739 C155.69419,0.528900497 153.115769,0 150.735739,0 Z M171.759482,3.76840811 C171.494928,5.28898963 171.693287,4.89231579 171.627369,5.68567267 C171.561174,6.21455987 171.561174,6.87570033 171.495245,7.40458752 C171.363122,7.93348904 171.230671,8.46237624 171.032435,8.99130129 C170.900322,9.52018849 170.701881,10.049089 170.503553,10.5779752 C170.238979,11.1069012 170.040763,11.5696685 169.776312,12.0985679 C169.577984,12.3631266 169.445758,12.6274551 169.24742,12.8919248 C169.115296,13.0902602 168.982866,13.2885966 168.850753,13.486932 C168.520199,13.9497371 168.189615,14.4125043 167.859071,14.809175 C167.462374,15.2058612 167.13182,15.6686274 166.669009,15.999217 C166.669009,16.0654117 166.669009,16.0654117 166.669009,16.0654117 C166.272343,16.3959758 165.875666,16.7926476 165.412897,17.1231994 C164.024527,18.1809861 162.437851,18.9743419 160.983358,19.9660342 C160.520599,20.296586 160.057779,20.5610567 159.661122,20.9577265 C159.198343,21.2882783 158.801656,21.6188301 158.404999,22.0155141 C157.942189,22.4121859 157.611635,22.80887 157.214948,23.2716618 C156.884394,23.6683469 156.487728,24.1311161 156.223287,24.5939202 C155.892702,25.0566864 155.562158,25.5194802 155.297687,25.9822587 C155.033143,26.5111448 154.834907,26.9739499 154.570456,27.5028381 C154.372128,28.0317243 154.173769,28.4945314 154.041564,29.0234166 C153.843225,29.6184381 153.710999,30.1473386 153.578774,30.6762513 C153.512579,30.940808 153.512579,31.2712462 153.446651,31.5357026 C153.380354,31.8002603 153.380354,32.0645898 153.314537,32.3290595 C153.314537,32.8579457 153.248343,33.4529672 153.248343,33.9818544 C153.248343,34.3785385 153.248343,34.7752092 153.314537,35.1718943 C153.314537,35.7007825 153.380732,36.2296708 153.512866,36.8246902 C153.57906,37.3535764 153.711184,37.8824769 153.84345,38.411403 C154.041789,38.9402891 154.174014,39.4691896 154.372332,39.9980768 C154.504476,40.3286675 154.702886,40.6592183 154.835142,40.9236491 L139.629276,35.0396492 C137.050876,34.3124134 134.53863,33.6513108 131.96023,33.0562893 C130.571882,32.7257385 129.183533,32.3951631 127.795164,32.064598 C123.828405,31.2712544 119.795584,30.6762585 115.762713,30.2795877 C115.6306,30.2795877 115.564384,30.2133828 115.432159,30.2133828 C111.46539,29.8167121 107.564785,29.6183757 103.598046,29.6183757 C100.689082,29.6183757 97.7801182,29.7504898 94.9372865,29.9489275 C90.9044271,30.2134852 86.8715616,30.7422833 82.8387298,31.4033859 C81.8470355,31.5355134 80.8553432,31.7339756 79.8636479,31.932313 C77.814172,32.3289582 75.8308161,32.7917633 73.9135536,33.2545551 C72.9218613,33.5191127 71.930167,33.7834556 70.9384737,34.0478874 C69.9468122,34.4445571 69.0212429,34.9073643 68.095641,35.304035 C67.3684092,35.6345868 66.6411805,35.9651499 65.9139477,36.2957273 C65.7818254,36.3619322 65.6493941,36.3619322 65.5833938,36.4278547 C64.9222554,36.7584055 64.32724,37.0228363 63.7322543,37.353425 C63.5339149,37.4196299 63.4016677,37.4855401 63.2694534,37.5517624 C62.5422226,37.8823152 61.8149939,38.278986 61.2199754,38.6095491 C60.7571755,38.8078855 60.2944062,39.0723419 59.8977303,39.2706905 C59.6993898,39.4028047 59.4349273,39.5352359 59.3027129,39.6012424 C58.7076986,39.9317942 58.1126822,40.2623439 57.5837889,40.5929346 C56.9887725,40.9234854 56.4598792,41.2540372 55.9970792,41.584589 C55.534312,41.9151787 55.071513,42.1796095 54.6748331,42.5101603 C54.6085975,42.5763652 54.5427108,42.5763652 54.4764936,42.6422888 C54.0798177,42.9068454 53.6170484,43.2372949 53.2203726,43.5678846 C53.2203726,43.5678846 53.1541472,43.6340792 53.0882492,43.7000099 C52.7576954,43.9645676 52.4271088,44.2288992 52.0965559,44.49333 C51.9644347,44.5595349 51.8320013,44.6916654 51.699879,44.7578866 C51.3693252,45.0224464 51.0387713,45.3529081 50.7082164,45.6173635 C50.6419911,45.7494899 50.509879,45.8156999 50.4436618,45.8819222 C50.0469849,46.278594 49.650307,46.6091448 49.2536301,47.0058299 C49.1874047,47.0058299 49.1874047,47.0720348 49.1215078,47.137944 C48.7248309,47.4685081 48.328155,47.8651809 47.9314781,48.261865 C47.8652527,48.3280699 47.8652527,48.3939781 47.7993548,48.3939781 C47.4688009,48.7245309 47.138247,49.0551195 46.8076615,49.4517647 C46.6755412,49.5838911 46.4771076,49.7163245 46.3448932,49.8484365 C46.0143394,50.2451216 45.6176614,50.6417934 45.2209856,51.0384785 C45.1547602,51.1705936 45.0226471,51.2368149 44.9564299,51.3690293 C44.4275356,51.8979554 43.9647356,52.4268426 43.4358433,52.955742 C43.3696179,53.0219469 43.303722,53.0878531 43.2375059,53.1540785 C42.1796895,54.2779851 41.0557798,55.4018928 39.8657788,56.3935779 C38.6757491,57.4513625 37.4196229,58.4430548 36.1634702,59.3025112 C34.841222,60.2281111 33.5850989,61.0214342 32.1967287,61.814788 C30.8744805,62.5419983 29.4861114,63.203147 28.0316498,63.7981726 C26.6432786,64.3931777 25.1888181,64.9220905 23.7343535,65.3848495 C20.9576141,65.9798546 18.1147803,67.1037725 15.6686255,67.302111 C15.1397332,67.302111 14.5447168,67.4342445 14.0158235,67.5004392 C13.4208102,67.6325625 12.8919168,67.765003 12.3630245,67.8971366 C11.8341312,68.0954546 11.3052082,68.2938033 10.7763138,68.4921315 C10.2474205,68.6904699 9.71852817,68.9549314 9.18963483,69.2193827 C8.72683488,69.5499263 8.19794359,69.8143878 7.73514159,70.1449417 C7.27237028,70.4754956 6.80957032,70.8721622 6.41289239,71.2688494 C5.95012415,71.5994339 5.48732419,72.0622134 5.09064626,72.4588699 C4.69396833,72.9216903 4.29729245,73.318357 3.96673818,73.781116 C3.63618422,74.3100083 3.23950659,74.7728185 2.97504427,75.301721 C2.64449041,75.764521 2.31393666,76.2934031 2.04947434,76.8222749 C1.78491922,77.417321 1.52058223,77.9462031 1.32224285,78.5412287 C1.1239045,79.070121 0.925566048,79.6651261 0.727227595,80.2601517 C0.59510611,80.7890338 0.462672683,81.3179363 0.396673941,81.8468082 C0.396673941,81.9131051 0.330459836,81.978952 0.330459836,82.0451568 C0.198337328,82.6402029 0.198337328,83.4335669 0.132120563,83.8302541 C0.0659064584,84.2930234 0,84.6896798 0,85.15249 C0,85.4170436 0,85.7474747 0.066214105,86.0119259 C0.13242821,86.4747361 0.198334464,86.8714028 0.330769119,87.2681104 C0.462890603,87.6647259 0.595324236,88.061413 0.793538485,88.4581002 C0.793538485,88.5242949 0.793538485,88.5242949 0.793538485,88.5242949 C0.991876836,88.9210025 1.25633906,89.3176589 1.52077007,89.7143358 C1.78532508,90.1110127 2.04969348,90.5076896 2.38024734,90.9043768 C2.7108011,91.2349306 3.10747903,91.6315768 3.50415543,91.9621512 C3.90083325,92.3588281 4.29751139,92.6893819 4.76027963,93.0199358 C6.34698828,94.4083152 6.74366519,94.8711151 8.7931472,95.9288895 C9.12369799,96.1272382 9.45428561,96.2594639 9.85096252,96.4578023 C9.91718788,96.4578023 9.98308482,96.523997 10.0492999,96.523997 C10.0492999,96.6561101 10.0492999,96.7223457 10.1155253,96.8545918 C10.1817404,97.3834943 10.3138627,97.9123662 10.4460792,98.4412789 C10.5782004,99.0362943 10.7766647,99.5652071 10.9750032,100.027976 C11.1733416,100.424663 11.3055571,100.82132 11.5038965,101.218017 C11.5701117,101.350151 11.6360199,101.482571 11.702235,101.548571 C11.9667896,102.077453 12.2311273,102.540284 12.4955581,103.003033 C12.8261437,103.465812 13.1566965,103.928592 13.4872494,104.391412 C13.8178053,104.788069 14.2144832,105.250858 14.6111591,105.647525 C15.007837,106.044212 15.4045149,106.374776 15.8673159,106.771422 C15.8673159,106.771422 15.9335413,106.837719 15.9994362,106.837719 C16.3961151,107.168304 16.79279,107.498868 17.1894689,107.763278 C17.6522382,108.093853 18.1150382,108.358283 18.6439294,108.622755 C19.1067304,108.887309 19.6356238,109.151648 20.1645161,109.349996 C20.561194,109.548335 21.0239622,109.680571 21.4867642,109.812786 C21.5529896,109.879083 21.6188855,109.879083 21.7513199,109.94493 C22.0158745,110.011227 22.3463025,110.077033 22.610765,110.143248 C22.4124276,113.713309 22.3462094,117.085032 22.8753217,118.275083 C23.4703063,119.597319 26.3792611,115.564468 29.288218,110.936612 C28.8915421,115.498365 28.6270785,120.853432 29.288218,122.44017 C30.0154477,124.09294 33.9821891,118.936181 37.4200362,113.250519 C84.2936988,102.40813 127.068465,134.803175 131.564085,180.552928 C130.704619,173.412785 121.911675,169.446057 117.878845,170.437759 C115.89545,175.330056 112.523727,181.610723 107.102527,185.511359 C107.565306,181.147933 107.36706,176.652313 106.441409,172.288877 C104.986917,178.371226 102.144076,184.056918 98.2434297,188.949215 C91.962756,189.411984 85.682067,186.370805 82.3764353,181.809082 C82.1118796,181.610723 82.0458804,181.214056 81.8475419,180.949615 C81.6492014,180.486785 81.450866,180.024046 81.3186486,179.561236 C81.1203112,179.098467 80.9880958,178.635667 80.9219727,178.172897 C80.8557474,177.710087 80.8557474,177.247308 80.8557474,176.718426 C80.8557474,176.387841 80.8557474,176.057297 80.8557474,175.726754 C80.9219727,175.263923 81.0540858,174.801144 81.1863022,174.338354 C81.3184235,173.875585 81.4508558,173.412785 81.6491022,172.949995 C81.9136578,172.487236 82.1118715,172.024436 82.442457,171.561667 C83.5663647,168.388231 83.5663647,165.809872 81.5168878,164.289298 C81.1202099,164.024744 80.723533,163.826488 80.260733,163.628149 C79.9961753,163.561954 79.6657156,163.429811 79.4012868,163.363606 C79.2029474,163.297411 79.070733,163.231462 78.8723935,163.165257 C78.4095925,163.033134 77.9467915,162.900693 77.4840223,162.834703 C77.0212223,162.70259 76.5584531,162.636365 76.0956531,162.636365 C75.6328828,162.570068 75.1039578,162.504241 74.6411895,162.504241 C74.3106367,162.504241 73.9800511,162.570436 73.6494962,162.570436 C73.1206049,162.570436 72.657805,162.636733 72.1950337,162.768775 C71.7322337,162.835072 71.2694655,162.900888 70.8066655,163.033308 C70.3438942,163.165441 69.8810932,163.297871 69.4182933,163.496138 C68.955525,163.694467 68.5588461,163.892805 68.0960482,164.091143 C67.699402,164.289492 67.302723,164.553913 66.8399241,164.752251 C51.4357286,174.801328 60.6253652,198.337338 71.1372204,205.146917 C67.1704769,205.874148 63.1376441,206.733645 62.0137344,207.593071 C61.947509,207.659265 61.8816131,207.725204 61.8816131,207.725204 C64.7244459,209.444107 67.6994961,210.898589 70.8067576,212.154712 C75.0379626,213.543081 79.5335943,214.799214 81.5169799,215.328127 C81.5169799,215.328127 81.5169799,215.394322 81.5169799,215.394322 C87.0043069,216.51824 92.5577591,216.914917 98.1773067,216.584363 C127.465111,214.534876 151.463911,192.254979 155.827336,162.901092 C155.959459,163.496118 156.09189,164.02499 156.224013,164.620026 C156.422362,165.810015 156.686782,167.066159 156.818998,168.322292 C156.818998,168.322292 156.818998,168.322292 156.818998,168.388589 C156.951121,168.983604 157.017336,169.57861 157.083551,170.107502 C157.083551,170.239625 157.083551,170.30584 157.083551,170.372066 C157.149848,170.967071 157.215685,171.562096 157.215685,172.090979 C157.281879,172.81822 157.347808,173.54544 157.347808,174.272712 C157.347808,174.603266 157.347808,174.93383 157.347808,175.330496 C157.347808,175.661081 157.414003,176.057717 157.414003,176.388301 C157.414003,176.784989 157.347808,177.181635 157.347808,177.578312 C157.347808,177.908907 157.347808,178.23945 157.347808,178.503881 C157.347808,178.966691 157.281511,179.363348 157.281511,179.826137 C157.281511,180.09067 157.281511,180.35504 157.215316,180.685604 C157.215316,181.148414 157.149122,181.611163 157.149122,182.140065 C157.082825,182.338404 157.082825,182.536742 157.082825,182.735091 C157.01663,183.263994 156.950701,183.726783 156.884476,184.255686 C156.884476,184.454035 156.884476,184.652353 156.818281,184.850711 C156.751984,185.511809 156.619953,186.106845 156.553759,186.767942 C156.553759,186.767942 156.553759,186.834239 156.553759,186.834239 L156.553759,186.900434 C156.421635,187.495439 156.289185,188.156557 156.157051,188.751562 C156.157051,188.817757 156.157051,188.883685 156.157051,188.949911 C156.024948,189.544906 155.892497,190.139942 155.760395,190.734926 C155.760395,190.801223 155.6942,190.933275 155.6942,190.999459 C155.562056,191.594495 155.429626,192.1895 155.231431,192.784546 C155.231431,192.850741 155.231431,192.916649 155.231431,192.982864 C155.033092,193.643962 154.834743,194.238987 154.702508,194.834003 C154.636313,194.900197 154.636313,194.966126 154.636313,194.966126 C154.437964,195.627265 154.239646,196.288372 154.041328,196.94949 C153.776775,197.610629 153.578539,198.205634 153.314097,198.866762 C153.049554,199.52789 152.851287,200.189018 152.586846,200.784013 C152.322282,201.445162 152.057933,202.040177 151.793503,202.701275 C151.793503,202.701275 151.727206,202.701275 151.727206,202.701275 C151.462632,203.29628 151.198272,203.957428 150.867698,204.552454 C150.867698,204.552454 150.867698,204.552454 150.867698,204.552454 C150.867698,204.552454 150.867698,204.552454 150.867698,204.552454 C150.801503,204.750762 150.735595,204.883008 150.66938,205.015203 C150.603185,205.0815 150.603185,205.147326 150.537257,205.213562 C146.239965,213.874259 139.893144,221.477182 131.959688,227.427315 C131.430796,227.757869 130.901883,228.154556 130.373001,228.551213 C130.373001,228.551213 130.373001,228.551213 130.373001,228.551213 C130.240867,228.683346 130.042416,228.749571 129.910201,228.881766 C129.447401,229.21233 128.984621,229.542874 128.45575,229.873469 L128.654078,230.270146 L128.720272,230.270146 C129.645831,230.138033 130.571411,230.005592 131.49699,229.873469 L131.563185,229.873469 C133.282118,229.608915 135.001041,229.278454 136.719975,228.9479 C137.182734,228.881603 137.711667,228.749571 138.174426,228.617315 C138.50498,228.551018 138.769441,228.485202 139.099995,228.418977 C139.562795,228.35268 140.025575,228.220638 140.488385,228.154433 C140.885041,228.02231 141.281728,227.956074 141.678395,227.823869 C148.289626,226.237151 154.702549,224.055428 160.850959,221.477069 C150.339123,235.823438 136.257164,247.39312 119.795185,254.996043 C127.398129,254.46714 135.001041,253.211017 142.339513,251.095428 C168.982815,243.228013 191.394896,225.311582 204.815706,201.180557 C202.105101,216.452536 196.022763,230.997254 187.031491,243.690843 C193.444384,239.459613 199.328383,234.567305 204.683491,229.013869 C219.49266,213.543582 229.211203,193.908229 232.516793,172.818332 C234.764629,183.264096 235.425757,194.040455 234.434065,204.684526 C282.167212,138.109348 238.400803,69.0880165 220.087686,50.9071133 C220.021389,50.7749971 219.955562,50.7087769 219.955562,50.5765605 C219.889265,50.6427551 219.889265,50.6427551 219.889265,50.7086879 C219.889265,50.642483 219.889265,50.642483 219.823071,50.5765605 C219.823071,51.3699163 219.756876,52.1632354 219.690947,52.9565922 C219.492599,54.4771768 219.294281,55.9316476 219.029809,57.3861398 C218.699265,58.8406013 218.302578,60.2950424 217.905891,61.7495448 C217.443122,63.1378833 216.91425,64.5923551 216.319214,65.9807345 C215.724199,67.3029602 215.06307,68.6913293 214.33584,70.0135959 C213.608599,71.2697395 212.815255,72.5919754 211.955809,73.7819856 C211.096342,75.0381496 210.170763,76.2281497 209.245173,77.3520369 C208.253471,78.5420881 207.195706,79.5998931 206.137891,80.657688 C205.476783,81.2527034 204.881778,81.7815957 204.220619,82.3104675 C203.691737,82.7732777 203.228958,83.1699649 202.700035,83.6327137 C201.510025,84.5582931 200.320004,85.4177597 198.997768,86.2111238 C197.741625,87.0044571 196.419409,87.797811 195.097153,88.4589494 C193.708784,89.1200673 192.320415,89.7150724 190.932066,90.310098 C189.543697,90.8389699 188.089235,91.3017698 186.634722,91.698457 C185.180271,92.0951134 183.659697,92.4256877 182.205215,92.6901288 C180.684651,92.9546824 179.164056,93.0867955 177.709584,93.2190416 C176.651779,93.2852362 175.593994,93.3511751 174.536179,93.3511751 C173.015584,93.3511751 171.49503,93.2190416 170.040548,93.0866215 C168.519974,92.9544982 166.999369,92.7560165 165.544907,92.4254627 C164.024323,92.1609091 162.569831,91.7643243 161.115359,91.3015754 L161.049164,91.3015754 C162.503636,91.1694521 163.958118,91.0370014 165.41261,90.7726627 C166.933164,90.5081091 168.387636,90.1776678 169.842128,89.7809602 C171.29659,89.3842935 172.751061,88.9214935 174.13942,88.3926115 C175.593882,87.8637089 176.982261,87.2026114 178.304518,86.5414526 C179.692866,85.8803141 180.94901,85.1531038 182.271246,84.35975 C183.527369,83.5002936 184.783512,82.6408475 185.973533,81.7152475 C187.163564,80.7896886 188.287451,79.7980167 189.345287,78.7402117 C190.469194,77.7484989 191.460866,76.6246015 192.452558,75.5006836 C193.44422,74.3106938 194.36981,73.1206631 195.229276,71.9306323 C195.36141,71.7322837 195.49384,71.4678631 195.625974,71.2695144 C196.287071,70.2117093 196.948179,69.1539144 197.543184,68.0960991 C198.270435,66.773853 198.931574,65.4515966 199.526568,64.0632684 C200.121594,62.6748992 200.650497,61.2865198 201.113286,59.8320685 C201.576056,58.4436891 201.90662,56.9892378 202.237194,55.5347783 C202.501758,54.0141855 202.766076,52.5596913 202.898312,51.1052318 C203.030435,49.5846533 203.162855,48.0640596 203.162855,46.6096021 C203.162855,45.5517888 203.096558,44.4940022 203.030752,43.4362145 C202.898619,41.915634 202.700178,40.4611377 202.50185,39.0066772 C202.237286,37.4860854 201.906845,36.031628 201.510147,34.5771296 C201.047388,33.1887901 200.584578,31.734305 200.055696,30.3459676 C199.526763,28.9575902 198.865676,27.5692272 198.204517,26.2469698 C197.477286,24.9247257 196.750065,23.6024816 195.956722,22.3463586 C195.097265,21.0902355 194.237778,19.9002078 193.312209,18.7101669 C192.320548,17.5862582 191.328855,16.4623515 190.27103,15.3384439 C189.742148,14.8095546 189.147122,14.2145341 188.552117,13.685648 C185.577071,11.3716993 182.469779,9.18997737 179.362517,7.20662045 C178.899738,6.94207301 178.503061,6.74382868 178.040261,6.54548 C175.858538,5.15713947 173.809061,4.42987903 171.759594,3.76877541 L171.759482,3.76840811 Z",
    fill: "#E0234E"
  }))));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgNestjs);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "nestjs.cbb7e30.svg");


/***/ }),

/***/ "./assets/nodejs.svg":
/*!***************************!*\
  !*** ./assets/nodejs.svg ***!
  \***************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgNodejs(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: "256px",
    height: "289px",
    viewBox: "0 0 256 289",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    preserveAspectRatio: "xMidYMid",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M127.999999,288.463771 C124.024844,288.463771 120.314699,287.403728 116.869564,285.548656 L81.6231884,264.612838 C76.32298,261.697724 78.9730854,260.637682 80.5631458,260.107661 C87.7184259,257.72257 89.0434775,257.192547 96.4637688,252.952381 C97.2587979,252.422361 98.3188405,252.687372 99.1138718,253.217392 L126.144927,269.383024 C127.20497,269.913045 128.530021,269.913045 129.325053,269.383024 L235.064182,208.165634 C236.124225,207.635611 236.654245,206.575571 236.654245,205.250519 L236.654245,83.0807467 C236.654245,81.7556929 236.124225,80.6956526 235.064182,80.1656324 L129.325053,19.2132506 C128.26501,18.6832305 126.939959,18.6832305 126.144927,19.2132506 L20.4057954,80.1656324 C19.3457551,80.6956526 18.8157349,82.0207041 18.8157349,83.0807467 L18.8157349,205.250519 C18.8157349,206.31056 19.3457551,207.635611 20.4057954,208.165634 L49.2919247,224.861286 C64.9275364,232.811595 74.7329196,223.536234 74.7329196,214.260871 L74.7329196,93.681159 C74.7329196,92.0910985 76.0579711,90.5010358 77.9130428,90.5010358 L91.4285716,90.5010358 C93.0186343,90.5010358 94.6086948,91.8260873 94.6086948,93.681159 L94.6086948,214.260871 C94.6086948,235.196689 83.2132512,247.387164 63.3374737,247.387164 C57.2422362,247.387164 52.4720502,247.387164 38.9565214,240.761906 L11.1304347,224.861286 C4.24016581,220.886129 5.68434189e-14,213.46584 5.68434189e-14,205.515528 L5.68434189e-14,83.3457557 C5.68434189e-14,75.3954465 4.24016581,67.9751552 11.1304347,64.0000006 L116.869564,2.78260752 C123.494824,-0.927535841 132.505176,-0.927535841 139.130436,2.78260752 L244.869565,64.0000006 C251.759834,67.9751552 256,75.3954465 256,83.3457557 L256,205.515528 C256,213.46584 251.759834,220.886129 244.869565,224.861286 L139.130436,286.078676 C135.685299,287.668739 131.710145,288.463771 127.999999,288.463771 L127.999999,288.463771 Z M160.596274,204.455488 C114.219461,204.455488 104.679089,183.254659 104.679089,165.233955 C104.679089,163.643893 106.004141,162.053832 107.859212,162.053832 L121.639752,162.053832 C123.229813,162.053832 124.554864,163.113872 124.554864,164.703935 C126.674947,178.749484 132.770187,185.639753 160.861283,185.639753 C183.122154,185.639753 192.662526,180.604556 192.662526,168.67909 C192.662526,161.788821 190.012423,156.753624 155.296065,153.308489 C126.409938,150.393375 108.389235,144.033126 108.389235,120.977226 C108.389235,99.5113875 126.409938,86.7908901 156.621119,86.7908901 C190.542443,86.7908901 207.238095,98.4513472 209.358178,123.89234 C209.358178,124.687371 209.093167,125.482403 208.563147,126.277434 C208.033127,126.807454 207.238095,127.337474 206.443064,127.337474 L192.662526,127.337474 C191.337475,127.337474 190.012423,126.277434 189.747412,124.952382 C186.567289,110.376813 178.351966,105.606625 156.621119,105.606625 C132.240165,105.606625 129.325053,114.086957 129.325053,120.447205 C129.325053,128.132506 132.770187,130.5176 165.631471,134.757766 C198.227744,138.997931 213.598344,145.093169 213.598344,167.884058 C213.333333,191.20497 194.252589,204.455488 160.596274,204.455488 L160.596274,204.455488 Z",
    fill: "#539E43"
  }))));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgNodejs);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI4OXB4IiB2aWV3Qm94PSIwIDAgMjU2IDI4OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTI3Ljk5OTk5OSwyODguNDYzNzcxIEMxMjQuMDI0ODQ0LDI4OC40NjM3NzEgMTIwLjMxNDY5OSwyODcuNDAzNzI4IDExNi44Njk1NjQsMjg1LjU0ODY1NiBMODEuNjIzMTg4NCwyNjQuNjEyODM4IEM3Ni4zMjI5OCwyNjEuNjk3NzI0IDc4Ljk3MzA4NTQsMjYwLjYzNzY4MiA4MC41NjMxNDU4LDI2MC4xMDc2NjEgQzg3LjcxODQyNTksMjU3LjcyMjU3IDg5LjA0MzQ3NzUsMjU3LjE5MjU0NyA5Ni40NjM3Njg4LDI1Mi45NTIzODEgQzk3LjI1ODc5NzksMjUyLjQyMjM2MSA5OC4zMTg4NDA1LDI1Mi42ODczNzIgOTkuMTEzODcxOCwyNTMuMjE3MzkyIEwxMjYuMTQ0OTI3LDI2OS4zODMwMjQgQzEyNy4yMDQ5NywyNjkuOTEzMDQ1IDEyOC41MzAwMjEsMjY5LjkxMzA0NSAxMjkuMzI1MDUzLDI2OS4zODMwMjQgTDIzNS4wNjQxODIsMjA4LjE2NTYzNCBDMjM2LjEyNDIyNSwyMDcuNjM1NjExIDIzNi42NTQyNDUsMjA2LjU3NTU3MSAyMzYuNjU0MjQ1LDIwNS4yNTA1MTkgTDIzNi42NTQyNDUsODMuMDgwNzQ2NyBDMjM2LjY1NDI0NSw4MS43NTU2OTI5IDIzNi4xMjQyMjUsODAuNjk1NjUyNiAyMzUuMDY0MTgyLDgwLjE2NTYzMjQgTDEyOS4zMjUwNTMsMTkuMjEzMjUwNiBDMTI4LjI2NTAxLDE4LjY4MzIzMDUgMTI2LjkzOTk1OSwxOC42ODMyMzA1IDEyNi4xNDQ5MjcsMTkuMjEzMjUwNiBMMjAuNDA1Nzk1NCw4MC4xNjU2MzI0IEMxOS4zNDU3NTUxLDgwLjY5NTY1MjYgMTguODE1NzM0OSw4Mi4wMjA3MDQxIDE4LjgxNTczNDksODMuMDgwNzQ2NyBMMTguODE1NzM0OSwyMDUuMjUwNTE5IEMxOC44MTU3MzQ5LDIwNi4zMTA1NiAxOS4zNDU3NTUxLDIwNy42MzU2MTEgMjAuNDA1Nzk1NCwyMDguMTY1NjM0IEw0OS4yOTE5MjQ3LDIyNC44NjEyODYgQzY0LjkyNzUzNjQsMjMyLjgxMTU5NSA3NC43MzI5MTk2LDIyMy41MzYyMzQgNzQuNzMyOTE5NiwyMTQuMjYwODcxIEw3NC43MzI5MTk2LDkzLjY4MTE1OSBDNzQuNzMyOTE5Niw5Mi4wOTEwOTg1IDc2LjA1Nzk3MTEsOTAuNTAxMDM1OCA3Ny45MTMwNDI4LDkwLjUwMTAzNTggTDkxLjQyODU3MTYsOTAuNTAxMDM1OCBDOTMuMDE4NjM0Myw5MC41MDEwMzU4IDk0LjYwODY5NDgsOTEuODI2MDg3MyA5NC42MDg2OTQ4LDkzLjY4MTE1OSBMOTQuNjA4Njk0OCwyMTQuMjYwODcxIEM5NC42MDg2OTQ4LDIzNS4xOTY2ODkgODMuMjEzMjUxMiwyNDcuMzg3MTY0IDYzLjMzNzQ3MzcsMjQ3LjM4NzE2NCBDNTcuMjQyMjM2MiwyNDcuMzg3MTY0IDUyLjQ3MjA1MDIsMjQ3LjM4NzE2NCAzOC45NTY1MjE0LDI0MC43NjE5MDYgTDExLjEzMDQzNDcsMjI0Ljg2MTI4NiBDNC4yNDAxNjU4MSwyMjAuODg2MTI5IDUuNjg0MzQxODllLTE0LDIxMy40NjU4NCA1LjY4NDM0MTg5ZS0xNCwyMDUuNTE1NTI4IEw1LjY4NDM0MTg5ZS0xNCw4My4zNDU3NTU3IEM1LjY4NDM0MTg5ZS0xNCw3NS4zOTU0NDY1IDQuMjQwMTY1ODEsNjcuOTc1MTU1MiAxMS4xMzA0MzQ3LDY0LjAwMDAwMDYgTDExNi44Njk1NjQsMi43ODI2MDc1MiBDMTIzLjQ5NDgyNCwtMC45Mjc1MzU4NDEgMTMyLjUwNTE3NiwtMC45Mjc1MzU4NDEgMTM5LjEzMDQzNiwyLjc4MjYwNzUyIEwyNDQuODY5NTY1LDY0LjAwMDAwMDYgQzI1MS43NTk4MzQsNjcuOTc1MTU1MiAyNTYsNzUuMzk1NDQ2NSAyNTYsODMuMzQ1NzU1NyBMMjU2LDIwNS41MTU1MjggQzI1NiwyMTMuNDY1ODQgMjUxLjc1OTgzNCwyMjAuODg2MTI5IDI0NC44Njk1NjUsMjI0Ljg2MTI4NiBMMTM5LjEzMDQzNiwyODYuMDc4Njc2IEMxMzUuNjg1Mjk5LDI4Ny42Njg3MzkgMTMxLjcxMDE0NSwyODguNDYzNzcxIDEyNy45OTk5OTksMjg4LjQ2Mzc3MSBMMTI3Ljk5OTk5OSwyODguNDYzNzcxIFogTTE2MC41OTYyNzQsMjA0LjQ1NTQ4OCBDMTE0LjIxOTQ2MSwyMDQuNDU1NDg4IDEwNC42NzkwODksMTgzLjI1NDY1OSAxMDQuNjc5MDg5LDE2NS4yMzM5NTUgQzEwNC42NzkwODksMTYzLjY0Mzg5MyAxMDYuMDA0MTQxLDE2Mi4wNTM4MzIgMTA3Ljg1OTIxMiwxNjIuMDUzODMyIEwxMjEuNjM5NzUyLDE2Mi4wNTM4MzIgQzEyMy4yMjk4MTMsMTYyLjA1MzgzMiAxMjQuNTU0ODY0LDE2My4xMTM4NzIgMTI0LjU1NDg2NCwxNjQuNzAzOTM1IEMxMjYuNjc0OTQ3LDE3OC43NDk0ODQgMTMyLjc3MDE4NywxODUuNjM5NzUzIDE2MC44NjEyODMsMTg1LjYzOTc1MyBDMTgzLjEyMjE1NCwxODUuNjM5NzUzIDE5Mi42NjI1MjYsMTgwLjYwNDU1NiAxOTIuNjYyNTI2LDE2OC42NzkwOSBDMTkyLjY2MjUyNiwxNjEuNzg4ODIxIDE5MC4wMTI0MjMsMTU2Ljc1MzYyNCAxNTUuMjk2MDY1LDE1My4zMDg0ODkgQzEyNi40MDk5MzgsMTUwLjM5MzM3NSAxMDguMzg5MjM1LDE0NC4wMzMxMjYgMTA4LjM4OTIzNSwxMjAuOTc3MjI2IEMxMDguMzg5MjM1LDk5LjUxMTM4NzUgMTI2LjQwOTkzOCw4Ni43OTA4OTAxIDE1Ni42MjExMTksODYuNzkwODkwMSBDMTkwLjU0MjQ0Myw4Ni43OTA4OTAxIDIwNy4yMzgwOTUsOTguNDUxMzQ3MiAyMDkuMzU4MTc4LDEyMy44OTIzNCBDMjA5LjM1ODE3OCwxMjQuNjg3MzcxIDIwOS4wOTMxNjcsMTI1LjQ4MjQwMyAyMDguNTYzMTQ3LDEyNi4yNzc0MzQgQzIwOC4wMzMxMjcsMTI2LjgwNzQ1NCAyMDcuMjM4MDk1LDEyNy4zMzc0NzQgMjA2LjQ0MzA2NCwxMjcuMzM3NDc0IEwxOTIuNjYyNTI2LDEyNy4zMzc0NzQgQzE5MS4zMzc0NzUsMTI3LjMzNzQ3NCAxOTAuMDEyNDIzLDEyNi4yNzc0MzQgMTg5Ljc0NzQxMiwxMjQuOTUyMzgyIEMxODYuNTY3Mjg5LDExMC4zNzY4MTMgMTc4LjM1MTk2NiwxMDUuNjA2NjI1IDE1Ni42MjExMTksMTA1LjYwNjYyNSBDMTMyLjI0MDE2NSwxMDUuNjA2NjI1IDEyOS4zMjUwNTMsMTE0LjA4Njk1NyAxMjkuMzI1MDUzLDEyMC40NDcyMDUgQzEyOS4zMjUwNTMsMTI4LjEzMjUwNiAxMzIuNzcwMTg3LDEzMC41MTc2IDE2NS42MzE0NzEsMTM0Ljc1Nzc2NiBDMTk4LjIyNzc0NCwxMzguOTk3OTMxIDIxMy41OTgzNDQsMTQ1LjA5MzE2OSAyMTMuNTk4MzQ0LDE2Ny44ODQwNTggQzIxMy4zMzMzMzMsMTkxLjIwNDk3IDE5NC4yNTI1ODksMjA0LjQ1NTQ4OCAxNjAuNTk2Mjc0LDIwNC40NTU0ODggTDE2MC41OTYyNzQsMjA0LjQ1NTQ4OCBaIiBmaWxsPSIjNTM5RTQzIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./assets/postgresql.svg":
/*!*******************************!*\
  !*** ./assets/postgresql.svg ***!
  \*******************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3, _path4;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgPostgresql(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 2424,
    height: 2500,
    viewBox: "0 0 256 264",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMinYMin meet",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99.087-.729.167-1.425.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686h.002",
    fill: "#336791"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28.282.04.563.058.842.058 3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35M196.86 81.599c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863.258 0 .518-.017.78-.054 2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225",
    fill: "#FFF"
  })), _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36zm-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813zm-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016zM66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426zm22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526zm69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473.313.255.656.508 1.032.756 6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772z",
    fill: "#FFF"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgPostgresql);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQyNCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48cGF0aCBkPSJNMjU1LjAwOCAxNTguMDg2Yy0xLjUzNS00LjY0OS01LjU1Ni03Ljg4Ny0xMC43NTYtOC42NjQtMi40NTItLjM2Ni01LjI2LS4yMS04LjU4My40NzUtNS43OTIgMS4xOTUtMTAuMDg5IDEuNjUtMTMuMjI1IDEuNzM4IDExLjgzNy0xOS45ODUgMjEuNDYyLTQyLjc3NSAyNy4wMDMtNjQuMjI4IDguOTYtMzQuNjg5IDQuMTcyLTUwLjQ5Mi0xLjQyMy01Ny42NEMyMzMuMjE3IDEwLjg0NyAyMTEuNjE0LjY4MyAxODUuNTUyLjM3MmMtMTMuOTAzLS4xNy0yNi4xMDggMi41NzUtMzIuNDc1IDQuNTQ5LTUuOTI4LTEuMDQ2LTEyLjMwMi0xLjYzLTE4Ljk5LTEuNzM4LTEyLjUzNy0uMi0yMy42MTQgMi41MzMtMzMuMDc5IDguMTUtNS4yNC0xLjc3Mi0xMy42NS00LjI3LTIzLjM2Mi01Ljg2NC0yMi44NDItMy43NS00MS4yNTItLjgyOC01NC43MTggOC42ODVDNi42MjIgMjUuNjcyLS45MzcgNDUuNjg0LjQ2MSA3My42MzRjLjQ0NCA4Ljg3NCA1LjQwOCAzNS44NzQgMTMuMjI0IDYxLjQ4IDQuNDkyIDE0LjcxOCA5LjI4MiAyNi45NCAxNC4yMzcgMzYuMzMgNy4wMjcgMTMuMzE1IDE0LjU0NiAyMS4xNTYgMjIuOTg3IDIzLjk3MiA0LjczMSAxLjU3NiAxMy4zMjcgMi42OCAyMi4zNjgtNC44NSAxLjE0NiAxLjM4OCAyLjY3NSAyLjc2NyA0LjcwNCA0LjA0OCAyLjU3NyAxLjYyNSA1LjcyOCAyLjk1MyA4Ljg3NSAzLjc0IDExLjM0MSAyLjgzNSAyMS45NjQgMi4xMjYgMzEuMDI3LTEuODQ4LjA1NiAxLjYxMi4wOTkgMy4xNTIuMTM1IDQuNDgyLjA2IDIuMTU3LjEyIDQuMjcyLjE5OSA2LjI1LjUzNyAxMy4zNzQgMS40NDcgMjMuNzczIDQuMTQzIDMxLjA0OS4xNDguNC4zNDcgMS4wMS41NTcgMS42NTcgMS4zNDUgNC4xMTggMy41OTQgMTEuMDEyIDkuMzE2IDE2LjQxMSA1LjkyNSA1LjU5MyAxMy4wOTIgNy4zMDggMTkuNjU2IDcuMzA4IDMuMjkyIDAgNi40MzMtLjQzMiA5LjE4OC0xLjAyMiA5LjgyLTIuMTA1IDIwLjk3My01LjMxMSAyOS4wNDEtMTYuNzk5IDcuNjI4LTEwLjg2IDExLjMzNi0yNy4yMTcgMTIuMDA3LTUyLjk5LjA4Ny0uNzI5LjE2Ny0xLjQyNS4yNDQtMi4wODhsLjE2LTEuMzYyIDEuNzk3LjE1OC40NjMuMDMxYzEwLjAwMi40NTYgMjIuMjMyLTEuNjY1IDI5Ljc0My01LjE1NCA1LjkzNS0yLjc1NCAyNC45NTQtMTIuNzk1IDIwLjQ3Ni0yNi4zNTEiLz48cGF0aCBkPSJNMjM3LjkwNiAxNjAuNzIyYy0yOS43NCA2LjEzNS0zMS43ODUtMy45MzQtMzEuNzg1LTMuOTM0IDMxLjQtNDYuNTkzIDQ0LjUyNy0xMDUuNzM2IDMzLjItMTIwLjIxMS0zMC45MDQtMzkuNDg1LTg0LjM5OS0yMC44MTEtODUuMjkyLTIwLjMyN2wtLjI4Ny4wNTJjLTUuODc2LTEuMjItMTIuNDUxLTEuOTQ2LTE5Ljg0Mi0yLjA2Ny0xMy40NTYtLjIyLTIzLjY2NCAzLjUyOC0zMS40MSA5LjQwMiAwIDAtOTUuNDMtMzkuMzE0LTkwLjk5MSA0OS40NDQuOTQ0IDE4Ljg4MiAyNy4wNjQgMTQyLjg3MyA1OC4yMTggMTA1LjQyMiAxMS4zODctMTMuNjk1IDIyLjM5LTI1LjI3NCAyMi4zOS0yNS4yNzQgNS40NjQgMy42MyAxMi4wMDYgNS40ODIgMTguODY0IDQuODE3bC41MzMtLjQ1MmMtLjE2NiAxLjctLjA5IDMuMzYzLjIxMyA1LjMzMi04LjAyNiA4Ljk2Ny01LjY2NyAxMC41NDEtMjEuNzExIDEzLjg0NC0xNi4yMzUgMy4zNDYtNi42OTggOS4zMDItLjQ3MSAxMC44NiA3LjU0OSAxLjg4NyAyNS4wMTMgNC41NjEgMzYuODEzLTExLjk1OGwtLjQ3IDEuODg1YzMuMTQ0IDIuNTE5IDUuMzUyIDE2LjM4MyA0Ljk4MiAyOC45NTItLjM3IDEyLjU2OC0uNjE3IDIxLjE5NyAxLjg2IDI3LjkzNyAyLjQ3OSA2Ljc0IDQuOTQ4IDIxLjkwNSAyNi4wNCAxNy4zODYgMTcuNjIzLTMuNzc3IDI2Ljc1Ni0xMy41NjQgMjguMDI3LTI5Ljg5LjkwMS0xMS42MDYgMi45NDItOS44OSAzLjA3LTIwLjI2N2wxLjYzNy00LjkxMmMxLjg4Ny0xNS43MzMuMy0yMC44MDkgMTEuMTU3LTE4LjQ0OGwyLjY0LjIzMmM3Ljk5LjM2MyAxOC40NS0xLjI4NiAyNC41ODktNC4xMzkgMTMuMjE4LTYuMTM0IDIxLjA1OC0xNi4zNzcgOC4wMjQtMTMuNjg2aC4wMDIiIGZpbGw9IiMzMzY3OTEiLz48cGF0aCBkPSJNMTA4LjA3NiA4MS41MjVjLTIuNjgtLjM3My01LjEwNy0uMDI4LTYuMzM1LjkwMi0uNjkuNTIzLS45MDQgMS4xMjktLjk2MiAxLjU0Ni0uMTU0IDEuMTA1LjYyIDIuMzI3IDEuMDk2IDIuOTU3IDEuMzQ2IDEuNzg0IDMuMzEyIDMuMDEgNS4yNTggMy4yOC4yODIuMDQuNTYzLjA1OC44NDIuMDU4IDMuMjQ1IDAgNi4xOTYtMi41MjcgNi40NTYtNC4zOTIuMzI1LTIuMzM2LTMuMDY2LTMuODkzLTYuMzU1LTQuMzVNMTk2Ljg2IDgxLjU5OWMtLjI1Ni0xLjgzMS0zLjUxNC0yLjM1My02LjYwNi0xLjkyMy0zLjA4OC40My02LjA4MiAxLjgyNC01LjgzMiAzLjY1OS4yIDEuNDI3IDIuNzc3IDMuODYzIDUuODI3IDMuODYzLjI1OCAwIC41MTgtLjAxNy43OC0uMDU0IDIuMDM2LS4yODIgMy41My0xLjU3NSA0LjI0LTIuMzIgMS4wOC0xLjEzNiAxLjcwNi0yLjQwMiAxLjU5MS0zLjIyNSIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik0yNDcuODAyIDE2MC4wMjVjLTEuMTM0LTMuNDI5LTQuNzg0LTQuNTMyLTEwLjg0OC0zLjI4LTE4LjAwNSAzLjcxNi0yNC40NTMgMS4xNDItMjYuNTctLjQxNyAxMy45OTUtMjEuMzIgMjUuNTA4LTQ3LjA5MiAzMS43MTktNzEuMTM3IDIuOTQyLTExLjM5IDQuNTY3LTIxLjk2OCA0LjctMzAuNTkuMTQ3LTkuNDYzLTEuNDY1LTE2LjQxNy00Ljc4OS0yMC42NjUtMTMuNDAyLTE3LjEyNS0zMy4wNzItMjYuMzExLTU2Ljg4Mi0yNi41NjMtMTYuMzY5LS4xODQtMzAuMTk5IDQuMDA1LTMyLjg4IDUuMTgzLTUuNjQ2LTEuNDA0LTExLjgwMS0yLjI2Ni0xOC41MDItMi4zNzYtMTIuMjg4LS4xOTktMjIuOTEgMi43NDMtMzEuNzA0IDguNzQtMy44Mi0xLjQyMi0xMy42OTItNC44MTEtMjUuNzY1LTYuNzU2LTIwLjg3Mi0zLjM2LTM3LjQ1OC0uODE0LTQ5LjI5NCA3LjU3MS0xNC4xMjMgMTAuMDA2LTIwLjY0MyAyNy44OTItMTkuMzggNTMuMTYuNDI1IDguNTAxIDUuMjY5IDM0LjY1MyAxMi45MTMgNTkuNjk4IDEwLjA2MiAzMi45NjQgMjEgNTEuNjI1IDMyLjUwOCA1NS40NjQgMS4zNDcuNDQ5IDIuOS43NjMgNC42MTMuNzYzIDQuMTk4IDAgOS4zNDUtMS44OTIgMTQuNy04LjMzYTUyOS44MzIgNTI5LjgzMiAwIDAgMSAyMC4yNjEtMjIuOTI2YzQuNTI0IDIuNDI4IDkuNDk0IDMuNzg0IDE0LjU3NyAzLjkyLjAxLjEzMy4wMjMuMjY2LjAzNS4zOThhMTE3LjY2IDExNy42NiAwIDAgMC0yLjU3IDMuMTc1Yy0zLjUyMiA0LjQ3MS00LjI1NSA1LjQwMi0xNS41OTIgNy43MzYtMy4yMjUuNjY2LTExLjc5IDIuNDMxLTExLjkxNiA4LjQzNS0uMTM2IDYuNTYgMTAuMTI1IDkuMzE1IDExLjI5NCA5LjYwNyA0LjA3NCAxLjAyIDcuOTk5IDEuNTIzIDExLjc0MiAxLjUyMyA5LjEwMyAwIDE3LjExNC0yLjk5MiAyMy41MTYtOC43ODEtLjE5NyAyMy4zODYuNzc4IDQ2LjQzIDMuNTg2IDUzLjQ1MSAyLjMgNS43NDggNy45MTggMTkuNzk1IDI1LjY2NCAxOS43OTQgMi42MDQgMCA1LjQ3LS4zMDMgOC42MjMtLjk3OSAxOC41MjEtMy45NyAyNi41NjQtMTIuMTU2IDI5LjY3NS0zMC4yMDMgMS42NjUtOS42NDUgNC41MjItMzIuNjc2IDUuODY2LTQ1LjAzIDIuODM2Ljg4NSA2LjQ4NyAxLjI5IDEwLjQzNCAxLjI4OSA4LjIzMiAwIDE3LjczMS0xLjc0OSAyMy42ODgtNC41MTQgNi42OTItMy4xMDggMTguNzY4LTEwLjczNCAxNi41NzgtMTcuMzZ6bS00NC4xMDYtODMuNDhjLS4wNjEgMy42NDctLjU2MyA2Ljk1OC0xLjA5NSAxMC40MTQtLjU3MyAzLjcxNy0xLjE2NSA3LjU2LTEuMzE0IDEyLjIyNS0uMTQ3IDQuNTQuNDIgOS4yNi45NjggMTMuODI1IDEuMTA4IDkuMjIgMi4yNDUgMTguNzEyLTIuMTU2IDI4LjA3OGEzNi41MDggMzYuNTA4IDAgMCAxLTEuOTUtNC4wMDljLS41NDctMS4zMjYtMS43MzUtMy40NTYtMy4zOC02LjQwNC02LjM5OS0xMS40NzYtMjEuMzg0LTM4LjM1LTEzLjcxMy00OS4zMTYgMi4yODUtMy4yNjQgOC4wODQtNi42MiAyMi42NC00LjgxM3ptLTE3LjY0NC02MS43ODdjMjEuMzM0LjQ3MSAzOC4yMSA4LjQ1MiA1MC4xNTggMjMuNzIgOS4xNjQgMTEuNzExLS45MjcgNjQuOTk4LTMwLjE0IDExMC45NjlhMTcxLjMzIDE3MS4zMyAwIDAgMC0uODg2LTEuMTE3bC0uMzctLjQ2MmM3LjU0OS0xMi40NjcgNi4wNzMtMjQuODAyIDQuNzU5LTM1LjczOC0uNTQtNC40ODgtMS4wNS04LjcyNy0uOTItMTIuNzA5LjEzNC00LjIyLjY5Mi03Ljg0IDEuMjMyLTExLjM0LjY2My00LjMxMyAxLjMzOC04Ljc3NiAxLjE1Mi0xNC4wMzcuMTM5LS41NTIuMTk1LTEuMjA0LjEyMi0xLjk3OC0uNDc1LTUuMDQ1LTYuMjM1LTIwLjE0NC0xNy45NzUtMzMuODEtNi40MjItNy40NzUtMTUuNzg3LTE1Ljg0LTI4LjU3NC0yMS40ODIgNS41LTEuMTQgMTMuMDIxLTIuMjAzIDIxLjQ0Mi0yLjAxNnpNNjYuNjc0IDE3NS43NzhjLTUuOSA3LjA5NC05Ljk3NCA1LjczNC0xMS4zMTQgNS4yODgtOC43My0yLjkxMi0xOC44Ni0yMS4zNjQtMjcuNzkxLTUwLjYyNC03LjcyOC0yNS4zMTgtMTIuMjQ0LTUwLjc3Ny0xMi42MDItNTcuOTE2LTEuMTI4LTIyLjU3OCA0LjM0NS0zOC4zMTMgMTYuMjY4LTQ2Ljc2OSAxOS40MDQtMTMuNzYgNTEuMzA2LTUuNTI0IDY0LjEyNS0xLjM0Ny0uMTg0LjE4Mi0uMzc2LjM1Mi0uNTU4LjUzNy0yMS4wMzYgMjEuMjQ0LTIwLjUzNyA1Ny41NC0yMC40ODUgNTkuNzU5LS4wMDIuODU2LjA3IDIuMDY4LjE2OCAzLjczNS4zNjIgNi4xMDUgMS4wMzYgMTcuNDY3LS43NjQgMzAuMzM0LTEuNjcyIDExLjk1NyAyLjAxNCAyMy42NiAxMC4xMTEgMzIuMTA5YTM2LjI3NSAzNi4yNzUgMCAwIDAgMi42MTcgMi40NjhjLTMuNjA0IDMuODYtMTEuNDM3IDEyLjM5Ni0xOS43NzUgMjIuNDI2em0yMi40NzktMjkuOTkzYy02LjUyNi02LjgxLTkuNDktMTYuMjgyLTguMTMzLTI1Ljk5IDEuOS0xMy41OTIgMS4xOTktMjUuNDMuODIyLTMxLjc5LS4wNTMtLjg5LS4xLTEuNjctLjEyNy0yLjI4NSAzLjA3My0yLjcyNSAxNy4zMTQtMTAuMzU1IDI3LjQ3LTguMDI4IDQuNjM0IDEuMDYxIDcuNDU4IDQuMjE3IDguNjMyIDkuNjQ1IDYuMDc2IDI4LjEwMy44MDQgMzkuODE2LTMuNDMyIDQ5LjIyOS0uODczIDEuOTM5LTEuNjk4IDMuNzcyLTIuNDAyIDUuNjY4bC0uNTQ2IDEuNDY2Yy0xLjM4MiAzLjcwNi0yLjY2OCA3LjE1Mi0zLjQ2NSAxMC40MjQtNi45MzgtLjAyLTEzLjY4Ny0yLjk4NC0xOC44MTktOC4zNHptMS4wNjUgMzcuOWMtMi4wMjYtLjUwNi0zLjg0OC0xLjM4NS00LjkxNy0yLjExNC44OTMtLjQyIDIuNDgyLS45OTIgNS4yMzgtMS41NiAxMy4zMzctMi43NDUgMTUuMzk3LTQuNjgzIDE5Ljg5NS0xMC4zOTQgMS4wMzEtMS4zMSAyLjItMi43OTQgMy44MTktNC42MDJsLjAwMi0uMDAyYzIuNDExLTIuNyAzLjUxNC0yLjI0MiA1LjUxNC0xLjQxMiAxLjYyMS42NyAzLjIgMi43MDIgMy44NCA0LjkzOC4zMDMgMS4wNTYuNjQzIDMuMDYtLjQ3IDQuNjItOS4zOTYgMTMuMTU2LTIzLjA4OCAxMi45ODctMzIuOTIxIDEwLjUyNnptNjkuNzk5IDY0Ljk1MmMtMTYuMzE2IDMuNDk2LTIyLjA5My00LjgyOS0yNS45LTE0LjM0Ni0yLjQ1Ny02LjE0NC0zLjY2NS0zMy44NS0yLjgwOC02NC40NDcuMDExLS40MDctLjA0Ny0uOC0uMTU5LTEuMTdhMTUuNDQ0IDE1LjQ0NCAwIDAgMC0uNDU2LTIuMTYyYy0xLjI3NC00LjQ1Mi00LjM3OS04LjE3Ni04LjEwNC05LjcyLTEuNDgtLjYxMy00LjE5Ni0xLjczOC03LjQ2LS45MDMuNjk2LTIuODY4IDEuOTAzLTYuMTA3IDMuMjEyLTkuNjE0bC41NDktMS40NzVjLjYxOC0xLjY2MyAxLjM5NC0zLjM4NiAyLjIxNC01LjIxIDQuNDMzLTkuODQ4IDEwLjUwNC0yMy4zMzcgMy45MTUtNTMuODEtMi40NjgtMTEuNDE0LTEwLjcxLTE2Ljk4OC0yMy4yMDQtMTUuNjkzLTcuNDkuNzc1LTE0LjM0MyAzLjc5Ny0xNy43NjEgNS41My0uNzM1LjM3Mi0xLjQwNy43MzItMi4wMzUgMS4wODIuOTU0LTExLjUgNC41NTgtMzIuOTkyIDE4LjA0LTQ2LjU5IDguNDg5LTguNTYgMTkuNzk0LTEyLjc4OCAzMy41NjgtMTIuNTYgMjcuMTQuNDQ0IDQ0LjU0NCAxNC4zNzIgNTQuMzY2IDI1Ljk3OSA4LjQ2NCAxMC4wMDEgMTMuMDQ3IDIwLjA3NiAxNC44NzYgMjUuNTEtMTMuNzU1LTEuMzk5LTIzLjExIDEuMzE2LTI3Ljg1MiA4LjA5Ni0xMC4zMTcgMTQuNzQ4IDUuNjQ0IDQzLjM3MiAxMy4zMTUgNTcuMTI5IDEuNDA3IDIuNTIxIDIuNjIxIDQuNyAzLjAwMyA1LjYyNiAyLjQ5OCA2LjA1NCA1LjczMiAxMC4wOTYgOC4wOTMgMTMuMDQ2LjcyNC45MDQgMS40MjYgMS43ODEgMS45NiAyLjU0Ny00LjE2NiAxLjIwMS0xMS42NDkgMy45NzYtMTAuOTY3IDE3Ljg0Ny0uNTUgNi45Ni00LjQ2MSAzOS41NDYtNi40NDggNTEuMDU5LTIuNjIzIDE1LjIxLTguMjIgMjAuODc1LTIzLjk1NyAyNC4yNXptNjguMTA0LTc3LjkzNmMtNC4yNiAxLjk3Ny0xMS4zODkgMy40Ni0xOC4xNjEgMy43NzktNy40OC4zNS0xMS4yODgtLjgzOC0xMi4xODQtMS41NjktLjQyLTguNjQ0IDIuNzk3LTkuNTQ3IDYuMjAyLTEwLjUwMy41MzUtLjE1IDEuMDU3LS4yOTcgMS41NjEtLjQ3My4zMTMuMjU1LjY1Ni41MDggMS4wMzIuNzU2IDYuMDEyIDMuOTY4IDE2LjczNSA0LjM5NiAzMS44NzQgMS4yNzFsLjE2Ni0uMDMzYy0yLjA0MiAxLjkwOS01LjUzNiA0LjQ3MS0xMC40OSA2Ljc3MnoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=");


/***/ }),

/***/ "./assets/react.svg":
/*!**************************!*\
  !*** ./assets/react.svg ***!
  \**************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3, _path4;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgReact(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: "256px",
    height: "230px",
    viewBox: "0 0 256 230",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    preserveAspectRatio: "xMidYMid",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M0.754124112,114.750341 C0.754124112,133.964682 19.5166032,151.90205 49.0972,162.012525 C43.1902309,191.75023 48.0385672,215.718618 64.2325395,225.058104 C80.878267,234.657205 105.676296,228.01262 129.212992,207.438816 C152.155865,227.182074 175.343729,234.952033 191.522612,225.586005 C208.152063,215.959037 213.210383,190.365003 207.140052,159.699094 C237.94981,149.512664 255.183937,134.217604 255.183937,114.750341 C255.183937,95.9814665 236.386646,79.743862 207.205024,69.6979922 C213.73997,37.7647117 208.20272,14.3779364 191.338416,4.65275505 C175.079459,-4.72292197 151.622419,3.44893641 128.342126,23.7092591 C104.122937,2.20452764 80.8973474,-4.36113675 64.049392,5.39238954 C47.8062377,14.7947358 43.1711096,39.1986962 49.0971999,69.4869405 C20.5154295,79.4522024 0.754124112,96.0565259 0.754124112,114.750341 Z",
    fill: "#FFFFFF"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M201.024553,79.6741178 C198.680534,78.8673056 196.251651,78.1039308 193.750774,77.3819828 C194.161823,75.7044085 194.539085,74.048553 194.87452,72.4208515 C200.380632,45.6934862 196.780544,24.1617345 184.487315,17.0725656 C172.699651,10.2749914 153.421826,17.3625515 133.952151,34.3064132 C132.079912,35.9357235 130.202444,37.6607573 128.325782,39.4686441 C127.075343,38.2725027 125.826916,37.1165813 124.581707,36.0109348 C104.176918,17.8934548 83.7242671,10.2585012 71.4431045,17.3681823 C59.6667022,24.1854643 56.1792302,44.4273621 61.135535,69.7570841 C61.6141524,72.2036638 62.1736119,74.7021273 62.8062718,77.2424195 C59.9116418,78.0641131 57.1171595,78.9401037 54.443337,79.872 C30.5209112,88.2124116 15.2429599,101.283896 15.2429599,114.842444 C15.2429599,128.845826 31.6438523,142.891438 56.5609175,151.408012 C58.527271,152.080088 60.5676292,152.715563 62.6703284,153.318862 C61.9877958,156.066288 61.3941493,158.758611 60.895824,161.384572 C56.1699796,186.27469 59.8605624,206.038372 71.6055931,212.812619 C83.7371375,219.808478 104.097282,212.617552 123.922903,195.287579 C125.489873,193.917687 127.062473,192.464943 128.637888,190.942216 C130.679856,192.908569 132.718604,194.769546 134.746495,196.515092 C153.949914,213.040264 172.916437,219.713157 184.650608,212.920007 C196.770086,205.904037 200.708827,184.673131 195.595261,158.842269 C195.204725,156.86948 194.75024,154.854058 194.239849,152.802841 C195.669668,152.380128 197.073345,151.943742 198.44203,151.490061 C224.345691,142.907526 241.199459,129.032848 241.199459,114.842444 C241.199459,101.234828 225.428813,88.0752616 201.024553,79.6741178 L201.024553,79.6741178 L201.024553,79.6741178 Z",
    fill: "#53C1DE"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M195.406228,142.327554 C194.170671,142.73659 192.902938,143.131953 191.611073,143.515249 C188.751435,134.46214 184.891928,124.835494 180.168899,114.889502 C184.675947,105.180405 188.386237,95.6768327 191.165838,86.6824446 C193.477279,87.3513024 195.720748,88.0567605 197.882571,88.8012318 C218.792119,95.9993967 231.546671,106.641998 231.546671,114.842444 C231.546671,123.577414 217.772142,134.916625 195.406228,142.327554 L195.406228,142.327554 L195.406228,142.327554 Z M186.125876,160.71692 C188.387041,172.138985 188.710007,182.46586 187.212216,190.538809 C185.866457,197.79288 183.160056,202.629329 179.813756,204.566322 C172.692813,208.688063 157.464736,203.330363 141.041722,189.197876 C139.159026,187.577816 137.262655,185.847956 135.360251,184.017143 C141.72707,177.053863 148.090269,168.958794 154.300632,159.968427 C165.223968,158.999127 175.544007,157.41446 184.902787,155.251029 C185.363708,157.110397 185.773147,158.93397 186.125876,160.71692 L186.125876,160.71692 L186.125876,160.71692 Z M92.2766379,203.854027 C85.3193904,206.311064 79.7782875,206.381449 76.4287698,204.450086 C69.301392,200.339205 66.3383881,184.470825 70.3800911,163.184817 C70.8430228,160.747085 71.3940362,158.242992 72.0291092,155.683394 C81.2853291,157.730187 91.5297533,159.203041 102.479233,160.090696 C108.731425,168.888007 115.278429,176.974228 121.87611,184.054548 C120.434627,185.446158 118.998774,186.771004 117.570966,188.019431 C108.804223,195.682539 100.018979,201.119472 92.2766379,203.854027 L92.2766379,203.854027 L92.2766379,203.854027 Z M59.6827903,142.274061 C48.6649364,138.508267 39.5659765,133.613901 33.3290683,128.273094 C27.7248202,123.473647 24.8953464,118.708789 24.8953464,114.842444 C24.8953464,106.614649 37.1620299,96.1200565 57.6207133,88.9870479 C60.1030888,88.1215145 62.7016999,87.3058539 65.3984478,86.5396638 C68.2259104,95.7371626 71.9349945,105.353351 76.4110731,115.077329 C71.8770778,124.945696 68.1153056,134.715124 65.2600911,144.020411 C63.3375774,143.467789 61.4749914,142.886209 59.6827903,142.274061 L59.6827903,142.274061 L59.6827903,142.274061 Z M70.6085405,67.9033464 C66.3621178,46.2014643 69.182341,29.8303347 76.2791516,25.7222687 C83.8384918,21.3459356 100.554306,27.585659 118.172255,43.2292097 C119.298413,44.2290778 120.428996,45.2756009 121.562797,46.3583221 C114.997694,53.4076732 108.510618,61.4331626 102.31393,70.1785891 C91.6870133,71.1635758 81.5145828,72.7458288 72.1618351,74.8646158 C71.5738193,72.4992804 71.0529709,70.1753716 70.6085405,67.9033464 L70.6085405,67.9033464 L70.6085405,67.9033464 Z M168.075965,91.970564 C165.840139,88.1086441 163.544785,84.3380235 161.204789,80.6703661 C168.414216,81.5817502 175.321589,82.7915664 181.808264,84.2720629 C179.860813,90.5133951 177.43354,97.0390825 174.576314,103.728867 C172.526706,99.8375868 170.35885,95.9141304 168.075965,91.970564 L168.075965,91.970564 L168.075965,91.970564 Z M128.328999,53.2568484 C132.781348,58.0804274 137.240132,63.465879 141.625716,69.3090337 C137.206347,69.1002922 132.732279,68.9916983 128.22121,68.9916983 C123.752773,68.9916983 119.311686,69.097879 114.919667,69.3030007 C119.309675,63.5141429 123.80707,58.1359308 128.328999,53.2568484 L128.328999,53.2568484 L128.328999,53.2568484 Z M88.3274407,92.0373291 C86.0940267,95.9101084 83.9663912,99.8122483 81.9489584,103.721628 C79.1379858,97.0551705 76.7332349,90.4997203 74.7688924,84.1699041 C81.2157486,82.7272144 88.0905452,81.5475633 95.254121,80.6534737 C92.8811438,84.3549159 90.5668876,88.1532883 88.3274407,92.0365247 L88.3274407,92.0373291 L88.3274407,92.0373291 Z M95.4604493,149.719981 C88.0591736,148.894265 81.0810118,147.775347 74.6357643,146.372474 C76.6314784,139.92964 79.0893197,133.234225 81.9598177,126.424182 C83.9824792,130.330746 86.1185609,134.234495 88.3656497,138.115721 L88.3660518,138.115721 C90.6549694,142.069744 93.0263378,145.942925 95.4604493,149.719981 L95.4604493,149.719981 L95.4604493,149.719981 Z M128.59606,177.108562 C124.02104,172.172367 119.457684,166.712107 115.000911,160.838787 C119.327371,161.008515 123.738293,161.095391 128.22121,161.095391 C132.826797,161.095391 137.379695,160.991623 141.861003,160.792132 C137.460939,166.771231 133.018244,172.239937 128.59606,177.108562 L128.59606,177.108562 L128.59606,177.108562 Z M174.668418,126.077084 C177.688534,132.960729 180.234457,139.621153 182.255912,145.954187 C175.704484,147.44876 168.631001,148.652544 161.178244,149.547036 C163.523872,145.829907 165.839334,141.994532 168.114576,138.049357 C170.416365,134.05793 172.601917,130.060469 174.668418,126.077084 L174.668418,126.077084 L174.668418,126.077084 Z M159.75325,133.226985 C156.221134,139.351277 152.594903,145.197649 148.913571,150.71623 C142.208502,151.195651 135.28142,151.442602 128.22121,151.442602 C121.189556,151.442602 114.34975,151.224207 107.763331,150.796669 C103.933587,145.205694 100.228525,139.342027 96.7189317,133.279673 L96.7197361,133.279673 C93.2193935,127.23381 89.9977754,121.136867 87.0786112,115.074112 C89.9969709,108.997279 93.2101429,102.893499 96.6903755,96.8584949 L96.6895711,96.8597015 C100.179054,90.8086096 103.851538,84.9734988 107.645888,79.4175145 C114.365838,78.9095366 121.256723,78.6444871 128.220808,78.6444871 L128.22121,78.6444871 C135.216666,78.6444871 142.116399,78.9115475 148.834337,79.4239498 C152.570771,84.9393119 156.218319,90.7555192 159.721477,96.8074156 C163.264453,102.927284 166.519051,108.990441 169.462347,114.936962 C166.5279,120.98564 163.280541,127.109933 159.75325,133.226985 L159.75325,133.226985 L159.75325,133.226985 Z M179.665747,25.4350982 C187.232327,29.7985609 190.174818,47.3963991 185.42082,70.472597 C185.117561,71.9450495 184.776095,73.4448515 184.405266,74.9647635 C175.030799,72.8017345 164.851129,71.192132 154.193245,70.1922639 C147.98449,61.3507117 141.550504,53.3127541 135.092386,46.3538978 C136.828682,44.6835633 138.562564,43.0908531 140.289206,41.5878335 C156.970834,27.0704415 172.562099,21.338696 179.665747,25.4350982 L179.665747,25.4350982 L179.665747,25.4350982 Z",
    fill: "#FFFFFF"
  })), _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M128.22121,94.6653008 C139.36455,94.6653008 148.398353,103.698702 148.398353,114.842444 C148.398353,125.985784 139.36455,135.019589 128.22121,135.019589 C117.07787,135.019589 108.044066,125.985784 108.044066,114.842444 C108.044066,103.698702 117.07787,94.6653008 128.22121,94.6653008",
    fill: "#53C1DE"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgReact);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyMzBweCIgdmlld0JveD0iMCAwIDI1NiAyMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPHBhdGggZD0iTTAuNzU0MTI0MTEyLDExNC43NTAzNDEgQzAuNzU0MTI0MTEyLDEzMy45NjQ2ODIgMTkuNTE2NjAzMiwxNTEuOTAyMDUgNDkuMDk3MiwxNjIuMDEyNTI1IEM0My4xOTAyMzA5LDE5MS43NTAyMyA0OC4wMzg1NjcyLDIxNS43MTg2MTggNjQuMjMyNTM5NSwyMjUuMDU4MTA0IEM4MC44NzgyNjcsMjM0LjY1NzIwNSAxMDUuNjc2Mjk2LDIyOC4wMTI2MiAxMjkuMjEyOTkyLDIwNy40Mzg4MTYgQzE1Mi4xNTU4NjUsMjI3LjE4MjA3NCAxNzUuMzQzNzI5LDIzNC45NTIwMzMgMTkxLjUyMjYxMiwyMjUuNTg2MDA1IEMyMDguMTUyMDYzLDIxNS45NTkwMzcgMjEzLjIxMDM4MywxOTAuMzY1MDAzIDIwNy4xNDAwNTIsMTU5LjY5OTA5NCBDMjM3Ljk0OTgxLDE0OS41MTI2NjQgMjU1LjE4MzkzNywxMzQuMjE3NjA0IDI1NS4xODM5MzcsMTE0Ljc1MDM0MSBDMjU1LjE4MzkzNyw5NS45ODE0NjY1IDIzNi4zODY2NDYsNzkuNzQzODYyIDIwNy4yMDUwMjQsNjkuNjk3OTkyMiBDMjEzLjczOTk3LDM3Ljc2NDcxMTcgMjA4LjIwMjcyLDE0LjM3NzkzNjQgMTkxLjMzODQxNiw0LjY1Mjc1NTA1IEMxNzUuMDc5NDU5LC00LjcyMjkyMTk3IDE1MS42MjI0MTksMy40NDg5MzY0MSAxMjguMzQyMTI2LDIzLjcwOTI1OTEgQzEwNC4xMjI5MzcsMi4yMDQ1Mjc2NCA4MC44OTczNDc0LC00LjM2MTEzNjc1IDY0LjA0OTM5Miw1LjM5MjM4OTU0IEM0Ny44MDYyMzc3LDE0Ljc5NDczNTggNDMuMTcxMTA5NiwzOS4xOTg2OTYyIDQ5LjA5NzE5OTksNjkuNDg2OTQwNSBDMjAuNTE1NDI5NSw3OS40NTIyMDI0IDAuNzU0MTI0MTEyLDk2LjA1NjUyNTkgMC43NTQxMjQxMTIsMTE0Ljc1MDM0MSBaIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICA8cGF0aCBkPSJNMjAxLjAyNDU1Myw3OS42NzQxMTc4IEMxOTguNjgwNTM0LDc4Ljg2NzMwNTYgMTk2LjI1MTY1MSw3OC4xMDM5MzA4IDE5My43NTA3NzQsNzcuMzgxOTgyOCBDMTk0LjE2MTgyMyw3NS43MDQ0MDg1IDE5NC41MzkwODUsNzQuMDQ4NTUzIDE5NC44NzQ1Miw3Mi40MjA4NTE1IEMyMDAuMzgwNjMyLDQ1LjY5MzQ4NjIgMTk2Ljc4MDU0NCwyNC4xNjE3MzQ1IDE4NC40ODczMTUsMTcuMDcyNTY1NiBDMTcyLjY5OTY1MSwxMC4yNzQ5OTE0IDE1My40MjE4MjYsMTcuMzYyNTUxNSAxMzMuOTUyMTUxLDM0LjMwNjQxMzIgQzEzMi4wNzk5MTIsMzUuOTM1NzIzNSAxMzAuMjAyNDQ0LDM3LjY2MDc1NzMgMTI4LjMyNTc4MiwzOS40Njg2NDQxIEMxMjcuMDc1MzQzLDM4LjI3MjUwMjcgMTI1LjgyNjkxNiwzNy4xMTY1ODEzIDEyNC41ODE3MDcsMzYuMDEwOTM0OCBDMTA0LjE3NjkxOCwxNy44OTM0NTQ4IDgzLjcyNDI2NzEsMTAuMjU4NTAxMiA3MS40NDMxMDQ1LDE3LjM2ODE4MjMgQzU5LjY2NjcwMjIsMjQuMTg1NDY0MyA1Ni4xNzkyMzAyLDQ0LjQyNzM2MjEgNjEuMTM1NTM1LDY5Ljc1NzA4NDEgQzYxLjYxNDE1MjQsNzIuMjAzNjYzOCA2Mi4xNzM2MTE5LDc0LjcwMjEyNzMgNjIuODA2MjcxOCw3Ny4yNDI0MTk1IEM1OS45MTE2NDE4LDc4LjA2NDExMzEgNTcuMTE3MTU5NSw3OC45NDAxMDM3IDU0LjQ0MzMzNyw3OS44NzIgQzMwLjUyMDkxMTIsODguMjEyNDExNiAxNS4yNDI5NTk5LDEwMS4yODM4OTYgMTUuMjQyOTU5OSwxMTQuODQyNDQ0IEMxNS4yNDI5NTk5LDEyOC44NDU4MjYgMzEuNjQzODUyMywxNDIuODkxNDM4IDU2LjU2MDkxNzUsMTUxLjQwODAxMiBDNTguNTI3MjcxLDE1Mi4wODAwODggNjAuNTY3NjI5MiwxNTIuNzE1NTYzIDYyLjY3MDMyODQsMTUzLjMxODg2MiBDNjEuOTg3Nzk1OCwxNTYuMDY2Mjg4IDYxLjM5NDE0OTMsMTU4Ljc1ODYxMSA2MC44OTU4MjQsMTYxLjM4NDU3MiBDNTYuMTY5OTc5NiwxODYuMjc0NjkgNTkuODYwNTYyNCwyMDYuMDM4MzcyIDcxLjYwNTU5MzEsMjEyLjgxMjYxOSBDODMuNzM3MTM3NSwyMTkuODA4NDc4IDEwNC4wOTcyODIsMjEyLjYxNzU1MiAxMjMuOTIyOTAzLDE5NS4yODc1NzkgQzEyNS40ODk4NzMsMTkzLjkxNzY4NyAxMjcuMDYyNDczLDE5Mi40NjQ5NDMgMTI4LjYzNzg4OCwxOTAuOTQyMjE2IEMxMzAuNjc5ODU2LDE5Mi45MDg1NjkgMTMyLjcxODYwNCwxOTQuNzY5NTQ2IDEzNC43NDY0OTUsMTk2LjUxNTA5MiBDMTUzLjk0OTkxNCwyMTMuMDQwMjY0IDE3Mi45MTY0MzcsMjE5LjcxMzE1NyAxODQuNjUwNjA4LDIxMi45MjAwMDcgQzE5Ni43NzAwODYsMjA1LjkwNDAzNyAyMDAuNzA4ODI3LDE4NC42NzMxMzEgMTk1LjU5NTI2MSwxNTguODQyMjY5IEMxOTUuMjA0NzI1LDE1Ni44Njk0OCAxOTQuNzUwMjQsMTU0Ljg1NDA1OCAxOTQuMjM5ODQ5LDE1Mi44MDI4NDEgQzE5NS42Njk2NjgsMTUyLjM4MDEyOCAxOTcuMDczMzQ1LDE1MS45NDM3NDIgMTk4LjQ0MjAzLDE1MS40OTAwNjEgQzIyNC4zNDU2OTEsMTQyLjkwNzUyNiAyNDEuMTk5NDU5LDEyOS4wMzI4NDggMjQxLjE5OTQ1OSwxMTQuODQyNDQ0IEMyNDEuMTk5NDU5LDEwMS4yMzQ4MjggMjI1LjQyODgxMyw4OC4wNzUyNjE2IDIwMS4wMjQ1NTMsNzkuNjc0MTE3OCBMMjAxLjAyNDU1Myw3OS42NzQxMTc4IEwyMDEuMDI0NTUzLDc5LjY3NDExNzggWiIgZmlsbD0iIzUzQzFERSI+PC9wYXRoPgogICAgPHBhdGggZD0iTTE5NS40MDYyMjgsMTQyLjMyNzU1NCBDMTk0LjE3MDY3MSwxNDIuNzM2NTkgMTkyLjkwMjkzOCwxNDMuMTMxOTUzIDE5MS42MTEwNzMsMTQzLjUxNTI0OSBDMTg4Ljc1MTQzNSwxMzQuNDYyMTQgMTg0Ljg5MTkyOCwxMjQuODM1NDk0IDE4MC4xNjg4OTksMTE0Ljg4OTUwMiBDMTg0LjY3NTk0NywxMDUuMTgwNDA1IDE4OC4zODYyMzcsOTUuNjc2ODMyNyAxOTEuMTY1ODM4LDg2LjY4MjQ0NDYgQzE5My40NzcyNzksODcuMzUxMzAyNCAxOTUuNzIwNzQ4LDg4LjA1Njc2MDUgMTk3Ljg4MjU3MSw4OC44MDEyMzE4IEMyMTguNzkyMTE5LDk1Ljk5OTM5NjcgMjMxLjU0NjY3MSwxMDYuNjQxOTk4IDIzMS41NDY2NzEsMTE0Ljg0MjQ0NCBDMjMxLjU0NjY3MSwxMjMuNTc3NDE0IDIxNy43NzIxNDIsMTM0LjkxNjYyNSAxOTUuNDA2MjI4LDE0Mi4zMjc1NTQgTDE5NS40MDYyMjgsMTQyLjMyNzU1NCBMMTk1LjQwNjIyOCwxNDIuMzI3NTU0IFogTTE4Ni4xMjU4NzYsMTYwLjcxNjkyIEMxODguMzg3MDQxLDE3Mi4xMzg5ODUgMTg4LjcxMDAwNywxODIuNDY1ODYgMTg3LjIxMjIxNiwxOTAuNTM4ODA5IEMxODUuODY2NDU3LDE5Ny43OTI4OCAxODMuMTYwMDU2LDIwMi42MjkzMjkgMTc5LjgxMzc1NiwyMDQuNTY2MzIyIEMxNzIuNjkyODEzLDIwOC42ODgwNjMgMTU3LjQ2NDczNiwyMDMuMzMwMzYzIDE0MS4wNDE3MjIsMTg5LjE5Nzg3NiBDMTM5LjE1OTAyNiwxODcuNTc3ODE2IDEzNy4yNjI2NTUsMTg1Ljg0Nzk1NiAxMzUuMzYwMjUxLDE4NC4wMTcxNDMgQzE0MS43MjcwNywxNzcuMDUzODYzIDE0OC4wOTAyNjksMTY4Ljk1ODc5NCAxNTQuMzAwNjMyLDE1OS45Njg0MjcgQzE2NS4yMjM5NjgsMTU4Ljk5OTEyNyAxNzUuNTQ0MDA3LDE1Ny40MTQ0NiAxODQuOTAyNzg3LDE1NS4yNTEwMjkgQzE4NS4zNjM3MDgsMTU3LjExMDM5NyAxODUuNzczMTQ3LDE1OC45MzM5NyAxODYuMTI1ODc2LDE2MC43MTY5MiBMMTg2LjEyNTg3NiwxNjAuNzE2OTIgTDE4Ni4xMjU4NzYsMTYwLjcxNjkyIFogTTkyLjI3NjYzNzksMjAzLjg1NDAyNyBDODUuMzE5MzkwNCwyMDYuMzExMDY0IDc5Ljc3ODI4NzUsMjA2LjM4MTQ0OSA3Ni40Mjg3Njk4LDIwNC40NTAwODYgQzY5LjMwMTM5MiwyMDAuMzM5MjA1IDY2LjMzODM4ODEsMTg0LjQ3MDgyNSA3MC4zODAwOTExLDE2My4xODQ4MTcgQzcwLjg0MzAyMjgsMTYwLjc0NzA4NSA3MS4zOTQwMzYyLDE1OC4yNDI5OTIgNzIuMDI5MTA5MiwxNTUuNjgzMzk0IEM4MS4yODUzMjkxLDE1Ny43MzAxODcgOTEuNTI5NzUzMywxNTkuMjAzMDQxIDEwMi40NzkyMzMsMTYwLjA5MDY5NiBDMTA4LjczMTQyNSwxNjguODg4MDA3IDExNS4yNzg0MjksMTc2Ljk3NDIyOCAxMjEuODc2MTEsMTg0LjA1NDU0OCBDMTIwLjQzNDYyNywxODUuNDQ2MTU4IDExOC45OTg3NzQsMTg2Ljc3MTAwNCAxMTcuNTcwOTY2LDE4OC4wMTk0MzEgQzEwOC44MDQyMjMsMTk1LjY4MjUzOSAxMDAuMDE4OTc5LDIwMS4xMTk0NzIgOTIuMjc2NjM3OSwyMDMuODU0MDI3IEw5Mi4yNzY2Mzc5LDIwMy44NTQwMjcgTDkyLjI3NjYzNzksMjAzLjg1NDAyNyBaIE01OS42ODI3OTAzLDE0Mi4yNzQwNjEgQzQ4LjY2NDkzNjQsMTM4LjUwODI2NyAzOS41NjU5NzY1LDEzMy42MTM5MDEgMzMuMzI5MDY4MywxMjguMjczMDk0IEMyNy43MjQ4MjAyLDEyMy40NzM2NDcgMjQuODk1MzQ2NCwxMTguNzA4Nzg5IDI0Ljg5NTM0NjQsMTE0Ljg0MjQ0NCBDMjQuODk1MzQ2NCwxMDYuNjE0NjQ5IDM3LjE2MjAyOTksOTYuMTIwMDU2NSA1Ny42MjA3MTMzLDg4Ljk4NzA0NzkgQzYwLjEwMzA4ODgsODguMTIxNTE0NSA2Mi43MDE2OTk5LDg3LjMwNTg1MzkgNjUuMzk4NDQ3OCw4Ni41Mzk2NjM4IEM2OC4yMjU5MTA0LDk1LjczNzE2MjYgNzEuOTM0OTk0NSwxMDUuMzUzMzUxIDc2LjQxMTA3MzEsMTE1LjA3NzMyOSBDNzEuODc3MDc3OCwxMjQuOTQ1Njk2IDY4LjExNTMwNTYsMTM0LjcxNTEyNCA2NS4yNjAwOTExLDE0NC4wMjA0MTEgQzYzLjMzNzU3NzQsMTQzLjQ2Nzc4OSA2MS40NzQ5OTE0LDE0Mi44ODYyMDkgNTkuNjgyNzkwMywxNDIuMjc0MDYxIEw1OS42ODI3OTAzLDE0Mi4yNzQwNjEgTDU5LjY4Mjc5MDMsMTQyLjI3NDA2MSBaIE03MC42MDg1NDA1LDY3LjkwMzM0NjQgQzY2LjM2MjExNzgsNDYuMjAxNDY0MyA2OS4xODIzNDEsMjkuODMwMzM0NyA3Ni4yNzkxNTE2LDI1LjcyMjI2ODcgQzgzLjgzODQ5MTgsMjEuMzQ1OTM1NiAxMDAuNTU0MzA2LDI3LjU4NTY1OSAxMTguMTcyMjU1LDQzLjIyOTIwOTcgQzExOS4yOTg0MTMsNDQuMjI5MDc3OCAxMjAuNDI4OTk2LDQ1LjI3NTYwMDkgMTIxLjU2Mjc5Nyw0Ni4zNTgzMjIxIEMxMTQuOTk3Njk0LDUzLjQwNzY3MzIgMTA4LjUxMDYxOCw2MS40MzMxNjI2IDEwMi4zMTM5Myw3MC4xNzg1ODkxIEM5MS42ODcwMTMzLDcxLjE2MzU3NTggODEuNTE0NTgyOCw3Mi43NDU4Mjg4IDcyLjE2MTgzNTEsNzQuODY0NjE1OCBDNzEuNTczODE5Myw3Mi40OTkyODA0IDcxLjA1Mjk3MDksNzAuMTc1MzcxNiA3MC42MDg1NDA1LDY3LjkwMzM0NjQgTDcwLjYwODU0MDUsNjcuOTAzMzQ2NCBMNzAuNjA4NTQwNSw2Ny45MDMzNDY0IFogTTE2OC4wNzU5NjUsOTEuOTcwNTY0IEMxNjUuODQwMTM5LDg4LjEwODY0NDEgMTYzLjU0NDc4NSw4NC4zMzgwMjM1IDE2MS4yMDQ3ODksODAuNjcwMzY2MSBDMTY4LjQxNDIxNiw4MS41ODE3NTAyIDE3NS4zMjE1ODksODIuNzkxNTY2NCAxODEuODA4MjY0LDg0LjI3MjA2MjkgQzE3OS44NjA4MTMsOTAuNTEzMzk1MSAxNzcuNDMzNTQsOTcuMDM5MDgyNSAxNzQuNTc2MzE0LDEwMy43Mjg4NjcgQzE3Mi41MjY3MDYsOTkuODM3NTg2OCAxNzAuMzU4ODUsOTUuOTE0MTMwNCAxNjguMDc1OTY1LDkxLjk3MDU2NCBMMTY4LjA3NTk2NSw5MS45NzA1NjQgTDE2OC4wNzU5NjUsOTEuOTcwNTY0IFogTTEyOC4zMjg5OTksNTMuMjU2ODQ4NCBDMTMyLjc4MTM0OCw1OC4wODA0Mjc0IDEzNy4yNDAxMzIsNjMuNDY1ODc5IDE0MS42MjU3MTYsNjkuMzA5MDMzNyBDMTM3LjIwNjM0Nyw2OS4xMDAyOTIyIDEzMi43MzIyNzksNjguOTkxNjk4MyAxMjguMjIxMjEsNjguOTkxNjk4MyBDMTIzLjc1Mjc3Myw2OC45OTE2OTgzIDExOS4zMTE2ODYsNjkuMDk3ODc5IDExNC45MTk2NjcsNjkuMzAzMDAwNyBDMTE5LjMwOTY3NSw2My41MTQxNDI5IDEyMy44MDcwNyw1OC4xMzU5MzA4IDEyOC4zMjg5OTksNTMuMjU2ODQ4NCBMMTI4LjMyODk5OSw1My4yNTY4NDg0IEwxMjguMzI4OTk5LDUzLjI1Njg0ODQgWiBNODguMzI3NDQwNyw5Mi4wMzczMjkxIEM4Ni4wOTQwMjY3LDk1LjkxMDEwODQgODMuOTY2MzkxMiw5OS44MTIyNDgzIDgxLjk0ODk1ODQsMTAzLjcyMTYyOCBDNzkuMTM3OTg1OCw5Ny4wNTUxNzA1IDc2LjczMzIzNDksOTAuNDk5NzIwMyA3NC43Njg4OTI0LDg0LjE2OTkwNDEgQzgxLjIxNTc0ODYsODIuNzI3MjE0NCA4OC4wOTA1NDUyLDgxLjU0NzU2MzMgOTUuMjU0MTIxLDgwLjY1MzQ3MzcgQzkyLjg4MTE0MzgsODQuMzU0OTE1OSA5MC41NjY4ODc2LDg4LjE1MzI4ODMgODguMzI3NDQwNyw5Mi4wMzY1MjQ3IEw4OC4zMjc0NDA3LDkyLjAzNzMyOTEgTDg4LjMyNzQ0MDcsOTIuMDM3MzI5MSBaIE05NS40NjA0NDkzLDE0OS43MTk5ODEgQzg4LjA1OTE3MzYsMTQ4Ljg5NDI2NSA4MS4wODEwMTE4LDE0Ny43NzUzNDcgNzQuNjM1NzY0MywxNDYuMzcyNDc0IEM3Ni42MzE0Nzg0LDEzOS45Mjk2NCA3OS4wODkzMTk3LDEzMy4yMzQyMjUgODEuOTU5ODE3NywxMjYuNDI0MTgyIEM4My45ODI0NzkyLDEzMC4zMzA3NDYgODYuMTE4NTYwOSwxMzQuMjM0NDk1IDg4LjM2NTY0OTcsMTM4LjExNTcyMSBMODguMzY2MDUxOCwxMzguMTE1NzIxIEM5MC42NTQ5Njk0LDE0Mi4wNjk3NDQgOTMuMDI2MzM3OCwxNDUuOTQyOTI1IDk1LjQ2MDQ0OTMsMTQ5LjcxOTk4MSBMOTUuNDYwNDQ5MywxNDkuNzE5OTgxIEw5NS40NjA0NDkzLDE0OS43MTk5ODEgWiBNMTI4LjU5NjA2LDE3Ny4xMDg1NjIgQzEyNC4wMjEwNCwxNzIuMTcyMzY3IDExOS40NTc2ODQsMTY2LjcxMjEwNyAxMTUuMDAwOTExLDE2MC44Mzg3ODcgQzExOS4zMjczNzEsMTYxLjAwODUxNSAxMjMuNzM4MjkzLDE2MS4wOTUzOTEgMTI4LjIyMTIxLDE2MS4wOTUzOTEgQzEzMi44MjY3OTcsMTYxLjA5NTM5MSAxMzcuMzc5Njk1LDE2MC45OTE2MjMgMTQxLjg2MTAwMywxNjAuNzkyMTMyIEMxMzcuNDYwOTM5LDE2Ni43NzEyMzEgMTMzLjAxODI0NCwxNzIuMjM5OTM3IDEyOC41OTYwNiwxNzcuMTA4NTYyIEwxMjguNTk2MDYsMTc3LjEwODU2MiBMMTI4LjU5NjA2LDE3Ny4xMDg1NjIgWiBNMTc0LjY2ODQxOCwxMjYuMDc3MDg0IEMxNzcuNjg4NTM0LDEzMi45NjA3MjkgMTgwLjIzNDQ1NywxMzkuNjIxMTUzIDE4Mi4yNTU5MTIsMTQ1Ljk1NDE4NyBDMTc1LjcwNDQ4NCwxNDcuNDQ4NzYgMTY4LjYzMTAwMSwxNDguNjUyNTQ0IDE2MS4xNzgyNDQsMTQ5LjU0NzAzNiBDMTYzLjUyMzg3MiwxNDUuODI5OTA3IDE2NS44MzkzMzQsMTQxLjk5NDUzMiAxNjguMTE0NTc2LDEzOC4wNDkzNTcgQzE3MC40MTYzNjUsMTM0LjA1NzkzIDE3Mi42MDE5MTcsMTMwLjA2MDQ2OSAxNzQuNjY4NDE4LDEyNi4wNzcwODQgTDE3NC42Njg0MTgsMTI2LjA3NzA4NCBMMTc0LjY2ODQxOCwxMjYuMDc3MDg0IFogTTE1OS43NTMyNSwxMzMuMjI2OTg1IEMxNTYuMjIxMTM0LDEzOS4zNTEyNzcgMTUyLjU5NDkwMywxNDUuMTk3NjQ5IDE0OC45MTM1NzEsMTUwLjcxNjIzIEMxNDIuMjA4NTAyLDE1MS4xOTU2NTEgMTM1LjI4MTQyLDE1MS40NDI2MDIgMTI4LjIyMTIxLDE1MS40NDI2MDIgQzEyMS4xODk1NTYsMTUxLjQ0MjYwMiAxMTQuMzQ5NzUsMTUxLjIyNDIwNyAxMDcuNzYzMzMxLDE1MC43OTY2NjkgQzEwMy45MzM1ODcsMTQ1LjIwNTY5NCAxMDAuMjI4NTI1LDEzOS4zNDIwMjcgOTYuNzE4OTMxNywxMzMuMjc5NjczIEw5Ni43MTk3MzYxLDEzMy4yNzk2NzMgQzkzLjIxOTM5MzUsMTI3LjIzMzgxIDg5Ljk5Nzc3NTQsMTIxLjEzNjg2NyA4Ny4wNzg2MTEyLDExNS4wNzQxMTIgQzg5Ljk5Njk3MDksMTA4Ljk5NzI3OSA5My4yMTAxNDI5LDEwMi44OTM0OTkgOTYuNjkwMzc1NSw5Ni44NTg0OTQ5IEw5Ni42ODk1NzExLDk2Ljg1OTcwMTUgQzEwMC4xNzkwNTQsOTAuODA4NjA5NiAxMDMuODUxNTM4LDg0Ljk3MzQ5ODggMTA3LjY0NTg4OCw3OS40MTc1MTQ1IEMxMTQuMzY1ODM4LDc4LjkwOTUzNjYgMTIxLjI1NjcyMyw3OC42NDQ0ODcxIDEyOC4yMjA4MDgsNzguNjQ0NDg3MSBMMTI4LjIyMTIxLDc4LjY0NDQ4NzEgQzEzNS4yMTY2NjYsNzguNjQ0NDg3MSAxNDIuMTE2Mzk5LDc4LjkxMTU0NzUgMTQ4LjgzNDMzNyw3OS40MjM5NDk4IEMxNTIuNTcwNzcxLDg0LjkzOTMxMTkgMTU2LjIxODMxOSw5MC43NTU1MTkyIDE1OS43MjE0NzcsOTYuODA3NDE1NiBDMTYzLjI2NDQ1MywxMDIuOTI3Mjg0IDE2Ni41MTkwNTEsMTA4Ljk5MDQ0MSAxNjkuNDYyMzQ3LDExNC45MzY5NjIgQzE2Ni41Mjc5LDEyMC45ODU2NCAxNjMuMjgwNTQxLDEyNy4xMDk5MzMgMTU5Ljc1MzI1LDEzMy4yMjY5ODUgTDE1OS43NTMyNSwxMzMuMjI2OTg1IEwxNTkuNzUzMjUsMTMzLjIyNjk4NSBaIE0xNzkuNjY1NzQ3LDI1LjQzNTA5ODIgQzE4Ny4yMzIzMjcsMjkuNzk4NTYwOSAxOTAuMTc0ODE4LDQ3LjM5NjM5OTEgMTg1LjQyMDgyLDcwLjQ3MjU5NyBDMTg1LjExNzU2MSw3MS45NDUwNDk1IDE4NC43NzYwOTUsNzMuNDQ0ODUxNSAxODQuNDA1MjY2LDc0Ljk2NDc2MzUgQzE3NS4wMzA3OTksNzIuODAxNzM0NSAxNjQuODUxMTI5LDcxLjE5MjEzMiAxNTQuMTkzMjQ1LDcwLjE5MjI2MzkgQzE0Ny45ODQ0OSw2MS4zNTA3MTE3IDE0MS41NTA1MDQsNTMuMzEyNzU0MSAxMzUuMDkyMzg2LDQ2LjM1Mzg5NzggQzEzNi44Mjg2ODIsNDQuNjgzNTYzMyAxMzguNTYyNTY0LDQzLjA5MDg1MzEgMTQwLjI4OTIwNiw0MS41ODc4MzM1IEMxNTYuOTcwODM0LDI3LjA3MDQ0MTUgMTcyLjU2MjA5OSwyMS4zMzg2OTYgMTc5LjY2NTc0NywyNS40MzUwOTgyIEwxNzkuNjY1NzQ3LDI1LjQzNTA5ODIgTDE3OS42NjU3NDcsMjUuNDM1MDk4MiBaIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICA8cGF0aCBkPSJNMTI4LjIyMTIxLDk0LjY2NTMwMDggQzEzOS4zNjQ1NSw5NC42NjUzMDA4IDE0OC4zOTgzNTMsMTAzLjY5ODcwMiAxNDguMzk4MzUzLDExNC44NDI0NDQgQzE0OC4zOTgzNTMsMTI1Ljk4NTc4NCAxMzkuMzY0NTUsMTM1LjAxOTU4OSAxMjguMjIxMjEsMTM1LjAxOTU4OSBDMTE3LjA3Nzg3LDEzNS4wMTk1ODkgMTA4LjA0NDA2NiwxMjUuOTg1Nzg0IDEwOC4wNDQwNjYsMTE0Ljg0MjQ0NCBDMTA4LjA0NDA2NiwxMDMuNjk4NzAyIDExNy4wNzc4Nyw5NC42NjUzMDA4IDEyOC4yMjEyMSw5NC42NjUzMDA4IiBmaWxsPSIjNTNDMURFIj48L3BhdGg+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./assets/spring.svg":
/*!***************************!*\
  !*** ./assets/spring.svg ***!
  \***************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgSpring(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 64,
    height: 64,
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z",
    fill: "#68bd45"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgSpring);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHBhdGggZD0iTTU4LjIgMy4zNjVhMjkuNTAzIDI5LjUwMyAwIDAgMS0zLjQxOSA2LjA2NEEzMi4wOTQgMzIuMDk0IDAgMSAwIDkuOTY1IDU1LjM3MmwxLjE4NiAxLjA0N2EzMi4wOCAzMi4wOCAwIDAgMCA1Mi42Ny0yMi4yNTNjLjg3NS04LjE3LTEuNTI0LTE4LjUxLTUuNjItMzAuOHpNMTQuNTMgNTUuNTU4YTIuNzQ0IDIuNzQ0IDAgMSAxLS40MDQtMy44NTcgMi43NDQgMi43NDQgMCAwIDEgLjQwNCAzLjg1N3ptNDMuNTM4LTkuNjFjLTcuOTIgMTAuNTUtMjQuODMgNi45OS0zNS42NzIgNy41MDIgMCAwLTEuOTIyLjExMy0zLjg1Ny40MyAwIDAgLjczLS4zMSAxLjY2My0uNjYzIDcuNjE0LTIuNjUgMTEuMjEzLTMuMTYgMTUuODM4LTUuNTQgOC43MDgtNC40MjcgMTcuMzIyLTE0LjEyMiAxOS4xMTItMjQuMi0zLjMxMyA5LjY5NS0xMy4zNzMgMTguMDMyLTIyLjUzIDIxLjQxOC02LjI3NiAyLjMxMy0xNy42MTQgNC41NjYtMTcuNjE0IDQuNTY2bC0uNDU3LS4yNDVjLTcuNzE0LTMuNzUtNy45NTItMjAuNDU3IDYuMDc3LTI1Ljg0NSA2LjE0My0yLjM2NiAxMi4wMi0xLjA2NyAxOC42NTQtMi42NSA3LjA4NC0xLjY4MyAxNS4yOC02Ljk5IDE4LjYxNS0xMy45MTYgMy43MyAxMS4wOCA4LjIyNCAyOC40MjIuMTY2IDM5LjE1eiIgZmlsbD0iIzY4YmQ0NSIvPjwvc3ZnPg==");


/***/ }),

/***/ "./assets/unity.svg":
/*!**************************!*\
  !*** ./assets/unity.svg ***!
  \**************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgUnity(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 2433,
    height: 2500,
    viewBox: "0 0 256 263",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMinYMin meet",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M166.872 131.237l45.91-79.275 22.184 79.275-22.185 79.256-45.909-79.256zm-22.376 12.874l45.916 79.262-79.966-20.486-57.77-58.776h91.82zm45.906-105.033l-45.906 79.275h-91.82l57.77-58.78 79.956-20.495zm65.539 65.18L227.933.06l-104.54 27.925-15.475 27.207-31.401-.225L0 131.244l76.517 76.259h.003l31.388-.232 15.497 27.207 104.528 27.92L255.94 158.22l-15.906-26.982 15.906-26.978z",
    fill: "#222C37"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgUnity);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQzMyIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI2MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48cGF0aCBkPSJNMTY2Ljg3MiAxMzEuMjM3bDQ1LjkxLTc5LjI3NSAyMi4xODQgNzkuMjc1LTIyLjE4NSA3OS4yNTYtNDUuOTA5LTc5LjI1NnptLTIyLjM3NiAxMi44NzRsNDUuOTE2IDc5LjI2Mi03OS45NjYtMjAuNDg2LTU3Ljc3LTU4Ljc3Nmg5MS44MnptNDUuOTA2LTEwNS4wMzNsLTQ1LjkwNiA3OS4yNzVoLTkxLjgybDU3Ljc3LTU4Ljc4IDc5Ljk1Ni0yMC40OTV6bTY1LjUzOSA2NS4xOEwyMjcuOTMzLjA2bC0xMDQuNTQgMjcuOTI1LTE1LjQ3NSAyNy4yMDctMzEuNDAxLS4yMjVMMCAxMzEuMjQ0bDc2LjUxNyA3Ni4yNTloLjAwM2wzMS4zODgtLjIzMiAxNS40OTcgMjcuMjA3IDEwNC41MjggMjcuOTJMMjU1Ljk0IDE1OC4yMmwtMTUuOTA2LTI2Ljk4MiAxNS45MDYtMjYuOTc4eiIgZmlsbD0iIzIyMkMzNyIvPjwvc3ZnPgo=");


/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");
/* harmony import */ var node_modules_bulma_start_css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node_modules/bulma-start/css/main.css */ "../../../node_modules/bulma-start/css/main.css");
/* harmony import */ var node_modules_bulma_start_css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_modules_bulma_start_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Repo\\fullstack-nx-workspace\\apps\\portfolio\\src\\main.tsx";





react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Repo\fullstack-nx-workspace\apps\portfolio\src\main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map