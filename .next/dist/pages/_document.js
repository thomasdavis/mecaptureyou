'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

var _parallaxJs = require('parallax-js');

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