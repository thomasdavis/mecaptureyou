webpackHotUpdate(1,{

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(34);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(36);

var _inherits3 = _interopRequireDefault(_inherits2);

var _document = __webpack_require__(446);

var _document2 = _interopRequireDefault(_document);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(240);

var _server2 = _interopRequireDefault(_server);

var _parallaxJs = __webpack_require__(451);

var _parallaxJs2 = _interopRequireDefault(_parallaxJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasdavis/repos/mecaptureyou/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scene = document.getElementById('scene');
      var parallax = new _parallaxJs2.default(scene);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'Me Capture You'), _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'initial-scale=1.0, width=device-width',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=Montserrat',
        rel: 'stylesheet',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('link', {
        href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css',
        rel: 'stylesheet',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, '\n            body {\n              padding: 0;\n              margin: 0;\n              font-family: Montserrat, sans-serif;\n            }\n            a {\n              color: inherit;\n              text-decoration: none;\n            }\n            .container {\n            }\n            .header {\n              text-align: center;\n            }\n            .divider {\n              height: 3px;\n              width: 100%;\n              background: #444;\n            }\n            .logo {\n              width: 420px;\n              margin-top: 80px;\n            }\n            .contact_details {\n              width: 380px;\n              margin: auto;\n              text-align: center;\n              margin-top: 40px;\n              margin-bottom: 40px;\n              line-height: 23px;\n              font-size: 18px;\n              padding-left: 20px;\n            }\n            .slide1 {\n              width: 100%;\n            }\n          ')), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('div', { className: 'container header', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('img', { className: 'logo', src: '/static/logo.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement('div', { className: 'contact_details', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Lifestyle Photograper'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'Based in Abbotsford'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'hello@mecaptureyou.com'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, '041987212')), _react2.default.createElement('a', { href: '', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, 'View Gallery on Flickr'))), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      var styles = (0, _server2.default)();
      return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasdavis/repos/mecaptureyou/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasdavis/repos/mecaptureyou/pages/_document.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS4wYmU4YWQ5ZWQyZDZhNDhiN2RmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2RvY3VtZW50LmpzPzQ0ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvY3VtZW50LCB7IEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmx1c2ggZnJvbSAnc3R5bGVkLWpzeC9zZXJ2ZXInO1xuaW1wb3J0IFBhcmFsbGF4IGZyb20gJ3BhcmFsbGF4LWpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyByZW5kZXJQYWdlIH0pIHtcbiAgICBjb25zdCB7IGh0bWwsIGhlYWQsIGVycm9ySHRtbCwgY2h1bmtzIH0gPSByZW5kZXJQYWdlKCk7XG4gICAgY29uc3Qgc3R5bGVzID0gZmx1c2goKTtcbiAgICByZXR1cm4geyBodG1sLCBoZWFkLCBlcnJvckh0bWwsIGNodW5rcywgc3R5bGVzIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHNjZW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjZW5lJyk7XG4gICAgdmFyIHBhcmFsbGF4ID0gbmV3IFBhcmFsbGF4KHNjZW5lKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TWUgQ2FwdHVyZSBZb3U8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzcuMC4wL25vcm1hbGl6ZS5taW4uY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0X2RldGFpbHMge1xuICAgICAgICAgICAgICB3aWR0aDogMzgwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2xpZGUxIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGhlYWRlclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfZGV0YWlsc1wiPlxuICAgICAgICAgICAgICA8ZGl2PkxpZmVzdHlsZSBQaG90b2dyYXBlcjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PkJhc2VkIGluIEFiYm90c2ZvcmQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5oZWxsb0BtZWNhcHR1cmV5b3UuY29tPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+MDQxOTg3MjEyPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGEgaHJlZj1cIlwiPjxoMz5WaWV3IEdhbGxlcnkgb24gRmxpY2tyPC9oMz48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL19kb2N1bWVudC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQU9BO0FBQUE7QUFDQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUtBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7O0FBR0E7QUFBQTtBQUFBO0FBQUE7O0FBdUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFJQTtBQUpBO0FBQUE7Ozs7QUE3RUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFKQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==