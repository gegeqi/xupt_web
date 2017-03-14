webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _Main_view = __webpack_require__(178);

	var _Main_view2 = _interopRequireDefault(_Main_view);

	var _HomePage = __webpack_require__(184);

	var _HomePage2 = _interopRequireDefault(_HomePage);

	var _reactRouter = __webpack_require__(194);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: _Main_view2.default },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomePage2.default })
	    )
	), document.getElementById('react-root'));

/***/ }
])
//# sourceMappingURL=0.b16198e76d7fb2463485.hot-update.js.map