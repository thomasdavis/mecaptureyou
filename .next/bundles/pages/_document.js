
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

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

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(243);


/***/ })

},[570]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/ZjExOGVmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcic7XG5pbXBvcnQgUGFyYWxsYXggZnJvbSAncGFyYWxsYXgtanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlbmRlclBhZ2UgfSkge1xuICAgIGNvbnN0IHsgaHRtbCwgaGVhZCwgZXJyb3JIdG1sLCBjaHVua3MgfSA9IHJlbmRlclBhZ2UoKTtcbiAgICBjb25zdCBzdHlsZXMgPSBmbHVzaCgpO1xuICAgIHJldHVybiB7IGh0bWwsIGhlYWQsIGVycm9ySHRtbCwgY2h1bmtzLCBzdHlsZXMgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgc2NlbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NlbmUnKTtcbiAgICB2YXIgcGFyYWxsYXggPSBuZXcgUGFyYWxsYXgoc2NlbmUpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5NZSBDYXB0dXJlIFlvdTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0XCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ub3JtYWxpemUvNy4wLjAvbm9ybWFsaXplLm1pbi5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICB3aWR0aDogMzgwcHg7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3RfZGV0YWlscyB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgd2lkdGg6IDM4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNsaWRlMSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoZWFkZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0X2RldGFpbHNcIj5cbiAgICAgICAgICAgICAgPGgxPk1lIENhcHR1cmUgWW91PC9oMT5cbiAgICAgICAgICAgICAgPGRpdj5MaWZlc3R5bGUgUGF5IE5vdGhpbmcgUG9saXNoIFBob3RvZ3JhcGVyPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+QmFzZWQgaW4gQWJib3RzZm9yZDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PmhlbGxvQG1lY2FwdHVyZXlvdS5jb208L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNsaWRlMVwiIHNyYz1cIi9zdGF0aWMvbWVjYXB1MDQuanBnXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PmFzZGFzZGFzZGFzZDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJzY2VuZVwiPlxuICAgICAgICAgICAgPGRpdiBkYXRhLWRlcHRoPVwiMC4wMFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbWVjYXB1MDQuanBnXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYXRhLWRlcHRoPVwiMC4yMFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbWVjYXB1MDMuanBnXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9fZG9jdW1lbnQuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQU9BO0FBQUE7QUFDQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUtBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7O0FBR0E7QUFBQTtBQUFBO0FBQUE7O0FBbUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBSUE7QUFKQTtBQUFBOzs7O0FBckZBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBSkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        