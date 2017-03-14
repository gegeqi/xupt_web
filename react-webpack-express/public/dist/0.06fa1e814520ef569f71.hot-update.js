webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _Frame_header = __webpack_require__(178);

	var _Frame_header2 = _interopRequireDefault(_Frame_header);

	var _Frame_lunbo = __webpack_require__(183);

	var _Frame_lunbo2 = _interopRequireDefault(_Frame_lunbo);

	var _FirstPage = __webpack_require__(271);

	var _FirstPage2 = _interopRequireDefault(_FirstPage);

	var _reactRouter = __webpack_require__(189);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Frame_header2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/frame_lunbo', component: _Frame_lunbo2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/firstPage', component: _FirstPage2.default })
	), document.getElementById('react-root'));
	/*import IndexPage from './components/IndexPage';
	 import Tab1 from './components/Tab1';
	 import Tab2 from './components/Tab2';*/

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Frame_header = __webpack_require__(178);

	var _Frame_lunbo = __webpack_require__(183);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FirstPage = function (_Component) {
	    _inherits(FirstPage, _Component);

	    function FirstPage() {
	        _classCallCheck(this, FirstPage);

	        return _possibleConstructorReturn(this, (FirstPage.__proto__ || Object.getPrototypeOf(FirstPage)).apply(this, arguments));
	    }

	    _createClass(FirstPage, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _Frame_header.frame_header,
	                _Frame_lunbo.frame_lunbo
	            );
	        }
	    }]);

	    return FirstPage;
	}(_react.Component);

/***/ }

})
//# sourceMappingURL=0.06fa1e814520ef569f71.hot-update.js.map