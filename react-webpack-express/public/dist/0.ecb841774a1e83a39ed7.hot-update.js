webpackHotUpdate(0,{

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Frame_header = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Frame_header\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Frame_header2 = _interopRequireDefault(_Frame_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Main_view = function (_Component) {
	    _inherits(Main_view, _Component);

	    function Main_view() {
	        _classCallCheck(this, Main_view);

	        return _possibleConstructorReturn(this, (Main_view.__proto__ || Object.getPrototypeOf(Main_view)).apply(this, arguments));
	    }

	    _createClass(Main_view, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_Frame_header2.default, null),
	                this.props.children
	            );
	        }
	    }]);

	    return Main_view;
	}(_react.Component);

	module.exports = Main_view;

/***/ }

})
//# sourceMappingURL=0.ecb841774a1e83a39ed7.hot-update.js.map