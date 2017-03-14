webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _Main_view = __webpack_require__(178);

	var _Main_view2 = _interopRequireDefault(_Main_view);

	var _HomePage = __webpack_require__(239);

	var _HomePage2 = _interopRequireDefault(_HomePage);

	var _Community = __webpack_require__(249);

	var _Community2 = _interopRequireDefault(_Community);

	var _reactRouter = __webpack_require__(180);

	var _InnovationData = __webpack_require__(280);

	var _InnovationData2 = _interopRequireDefault(_InnovationData);

	var _NewsCenter = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/newscenter/NewsCenter\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _NewsCenter2 = _interopRequireDefault(_NewsCenter);

	var _OnlineClass = __webpack_require__(291);

	var _OnlineClass2 = _interopRequireDefault(_OnlineClass);

	var _TelentShow = __webpack_require__(292);

	var _TelentShow2 = _interopRequireDefault(_TelentShow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: _Main_view2.default },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomePage2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/community', component: _Community2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/innovationData', component: _InnovationData2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/newscenter', component: _NewsCenter2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/onlineclass', component: _OnlineClass2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/talentshow', component: _TelentShow2.default })
	    )
	), document.getElementById('react-root'));

/***/ }
])
//# sourceMappingURL=0.509a26e0da342607695b.hot-update.js.map