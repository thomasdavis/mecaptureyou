webpackHotUpdate(1,{

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(35);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(37);

var _inherits3 = _interopRequireDefault(_inherits2);

var _document = __webpack_require__(449);

var _document2 = _interopRequireDefault(_document);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(241);

var _server2 = _interopRequireDefault(_server);

var _parallaxJs = __webpack_require__(621);

var _parallaxJs2 = _interopRequireDefault(_parallaxJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ajax/repos/mecaptureyou/pages/_document.js?entry';


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
      }, '\n            body {\n              padding: 0;\n              margin: 0;\n              font-family: Montserrat, sans-serif;\n            }\n            a {\n              color: inherit;\n              text-decoration: none;\n            }\n            .container {\n              margin: auto;\n              width: 800px;\n            }\n            .header {\n              padding: 50px;\n            }\n            .divider {\n              height: 3px;\n              width: 100%;\n              background: #444;\n            }\n            .logo {\n              width: 380px;\n              float: left;\n            }\n            .contact_details {\n              float: right;\n              width: 380px;\n            }\n            .slide1 {\n              width: 100%;\n            }\n          ')), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('div', { className: 'container header', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('img', { className: 'logo', src: '/static/logo.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), _react2.default.createElement('div', { className: 'contact_details', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Me Capture You'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Lifestyle Pay Nothing Polish Photograper'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Based in Abbotsford'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'hello@mecaptureyou.com')), _react2.default.createElement('div', { style: { clear: 'both' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })), _react2.default.createElement('div', { className: 'divider', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement('div', { className: 'slide', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('img', { className: 'slide1', src: '/static/mecapu04.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, 'asdasdasdasd'), _react2.default.createElement('div', { id: 'scene', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement('div', { 'data-depth': '0.00', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('img', { src: '/static/mecapu04.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), _react2.default.createElement('div', { 'data-depth': '0.20', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('img', { src: '/static/mecapu03.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }))), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/ajax/repos/mecaptureyou/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/ajax/repos/mecaptureyou/pages/_document.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS40ZjQzZjg2YjA0ZTZmYTJmZTQyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2RvY3VtZW50LmpzPzQ0ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvY3VtZW50LCB7IEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmx1c2ggZnJvbSAnc3R5bGVkLWpzeC9zZXJ2ZXInO1xuaW1wb3J0IFBhcmFsbGF4IGZyb20gJ3BhcmFsbGF4LWpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyByZW5kZXJQYWdlIH0pIHtcbiAgICBjb25zdCB7IGh0bWwsIGhlYWQsIGVycm9ySHRtbCwgY2h1bmtzIH0gPSByZW5kZXJQYWdlKCk7XG4gICAgY29uc3Qgc3R5bGVzID0gZmx1c2goKTtcbiAgICByZXR1cm4geyBodG1sLCBoZWFkLCBlcnJvckh0bWwsIGNodW5rcywgc3R5bGVzIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHNjZW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjZW5lJyk7XG4gICAgdmFyIHBhcmFsbGF4ID0gbmV3IFBhcmFsbGF4KHNjZW5lKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TWUgQ2FwdHVyZSBZb3U8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzcuMC4wL25vcm1hbGl6ZS5taW4uY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ0NDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDM4MHB4O1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0X2RldGFpbHMge1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAzODBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbGlkZTEge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaGVhZGVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9kZXRhaWxzXCI+XG4gICAgICAgICAgICAgIDxoMT5NZSBDYXB0dXJlIFlvdTwvaDE+XG4gICAgICAgICAgICAgIDxkaXY+TGlmZXN0eWxlIFBheSBOb3RoaW5nIFBvbGlzaCBQaG90b2dyYXBlcjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PkJhc2VkIGluIEFiYm90c2ZvcmQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5oZWxsb0BtZWNhcHR1cmV5b3UuY29tPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZTFcIiBzcmM9XCIvc3RhdGljL21lY2FwdTA0LmpwZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5hc2Rhc2Rhc2Rhc2Q8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPVwic2NlbmVcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1kZXB0aD1cIjAuMDBcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL21lY2FwdTA0LmpwZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1kZXB0aD1cIjAuMjBcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL21lY2FwdTAzLmpwZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvX2RvY3VtZW50LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBT0E7QUFBQTtBQUNBOzs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFLQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFtQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFJQTtBQUpBO0FBQUE7Ozs7QUFyRkE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFKQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==