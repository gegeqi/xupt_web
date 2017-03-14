webpackHotUpdate(0,{

/***/ 0:
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

	var _InnovationData = __webpack_require__(252);

	var _InnovationData2 = _interopRequireDefault(_InnovationData);

	var _NewsCenter = __webpack_require__(262);

	var _NewsCenter2 = _interopRequireDefault(_NewsCenter);

	var _OnlineClass = __webpack_require__(263);

	var _OnlineClass2 = _interopRequireDefault(_OnlineClass);

	var _TelentShow = __webpack_require__(264);

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

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NEAMC = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"NEAMC\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _NEAMC2 = _interopRequireDefault(_NEAMC);

	var _Notice = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Notice\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Notice2 = _interopRequireDefault(_Notice);

	var _XiyouHotSpot = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"XiyouHotSpot\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _XiyouHotSpot2 = _interopRequireDefault(_XiyouHotSpot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NewsCenter = function (_Component) {
	    _inherits(NewsCenter, _Component);

	    function NewsCenter() {
	        _classCallCheck(this, NewsCenter);

	        return _possibleConstructorReturn(this, (NewsCenter.__proto__ || Object.getPrototypeOf(NewsCenter)).apply(this, arguments));
	    }

	    _createClass(NewsCenter, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_NEAMC2.default, null),
	                _react2.default.createElement(_Notice2.default, null),
	                _react2.default.createElement(_XiyouHotSpot2.default, null)
	            );
	        }
	    }]);

	    return NewsCenter;
	}(_react.Component);

	exports.default = NewsCenter;

/***/ }

})
//# sourceMappingURL=0.1801ea8f55e54cb81580.hot-update.js.map