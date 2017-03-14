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
	        _react2.default.createElement(_reactRouter.Route, { path: 'innovationData', component: _InnovationData2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'newscenter', component: _NewsCenter2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'onlineclass', component: _OnlineClass2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'talentshow', component: _TelentShow2.default })
	    )
	), document.getElementById('react-root'));

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Competition = __webpack_require__(281);

	var _Competition2 = _interopRequireDefault(_Competition);

	var _Incubation = __webpack_require__(284);

	var _Incubation2 = _interopRequireDefault(_Incubation);

	var _Library = __webpack_require__(287);

	var _Library2 = _interopRequireDefault(_Library);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var XiyouHotSpot = function (_Component) {
	    _inherits(XiyouHotSpot, _Component);

	    function XiyouHotSpot() {
	        _classCallCheck(this, XiyouHotSpot);

	        return _possibleConstructorReturn(this, (XiyouHotSpot.__proto__ || Object.getPrototypeOf(XiyouHotSpot)).apply(this, arguments));
	    }

	    _createClass(XiyouHotSpot, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_Competition2.default, null),
	                _react2.default.createElement(_Incubation2.default, null),
	                _react2.default.createElement(_Library2.default, null)
	            );
	        }
	    }]);

	    return XiyouHotSpot;
	}(_react.Component);

	exports.default = XiyouHotSpot;

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(282);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Competition = function (_Component) {
	    _inherits(Competition, _Component);

	    function Competition() {
	        _classCallCheck(this, Competition);

	        return _possibleConstructorReturn(this, (Competition.__proto__ || Object.getPrototypeOf(Competition)).apply(this, arguments));
	    }

	    _createClass(Competition, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                "i am competition!!"
	            );
	        }
	    }]);

	    return Competition;
	}(_react.Component);

	exports.default = Competition;

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(283);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(238)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(283, function() {
				var newContent = __webpack_require__(283);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(237)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(285);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Incubation = function (_Component) {
	    _inherits(Incubation, _Component);

	    function Incubation() {
	        _classCallCheck(this, Incubation);

	        return _possibleConstructorReturn(this, (Incubation.__proto__ || Object.getPrototypeOf(Incubation)).apply(this, arguments));
	    }

	    _createClass(Incubation, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                "i am incubation!!"
	            );
	        }
	    }]);

	    return Incubation;
	}(_react.Component);

	exports.default = Incubation;

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(286);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(238)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(286, function() {
				var newContent = __webpack_require__(286);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(237)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(288);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Library = function (_Component) {
	    _inherits(Library, _Component);

	    function Library() {
	        _classCallCheck(this, Library);

	        return _possibleConstructorReturn(this, (Library.__proto__ || Object.getPrototypeOf(Library)).apply(this, arguments));
	    }

	    _createClass(Library, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                "i am library sentu!!"
	            );
	        }
	    }]);

	    return Library;
	}(_react.Component);

	exports.default = Library;

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(289);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(238)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(289, function() {
				var newContent = __webpack_require__(289);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(237)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BaseMooc = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"BaseMooc\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _BaseMooc2 = _interopRequireDefault(_BaseMooc);

	var _ERP = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ERP\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _ERP2 = _interopRequireDefault(_ERP);

	var _Erya = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Erya\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Erya2 = _interopRequireDefault(_Erya);

	var _Laboratory = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Laboratory\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Laboratory2 = _interopRequireDefault(_Laboratory);

	var _OccupationalPlanning = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"OccupationalPlanning\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _OccupationalPlanning2 = _interopRequireDefault(_OccupationalPlanning);

	var _SkillsTraining = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"SkillsTraining\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _SkillsTraining2 = _interopRequireDefault(_SkillsTraining);

	var _Spoc = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Spoc\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Spoc2 = _interopRequireDefault(_Spoc);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Notice = function (_Component) {
	    _inherits(Notice, _Component);

	    function Notice() {
	        _classCallCheck(this, Notice);

	        return _possibleConstructorReturn(this, (Notice.__proto__ || Object.getPrototypeOf(Notice)).apply(this, arguments));
	    }

	    _createClass(Notice, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_BaseMooc2.default, null),
	                _react2.default.createElement(_ERP2.default, null),
	                _react2.default.createElement(_Erya2.default, null),
	                _react2.default.createElement(_Laboratory2.default, null),
	                _react2.default.createElement(_OccupationalPlanning2.default, null),
	                _react2.default.createElement(_SkillsTraining2.default, null),
	                _react2.default.createElement(_Spoc2.default, null)
	            );
	        }
	    }]);

	    return Notice;
	}(_react.Component);

	exports.default = Notice;

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _IncubationBase = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"IncubationBase\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _IncubationBase2 = _interopRequireDefault(_IncubationBase);

	var _InnovationCommunities = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"InnovationCommunities\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _InnovationCommunities2 = _interopRequireDefault(_InnovationCommunities);

	var _InnovationLab = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"InnovationLab\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _InnovationLab2 = _interopRequireDefault(_InnovationLab);

	var _ItemShow = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ItemShow\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _ItemShow2 = _interopRequireDefault(_ItemShow);

	var _PioneerCenter = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"PioneerCenter\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _PioneerCenter2 = _interopRequireDefault(_PioneerCenter);

	var _StarTeacher = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"StarTeacher\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _StarTeacher2 = _interopRequireDefault(_StarTeacher);

	var _StudentMien = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"StudentMien\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _StudentMien2 = _interopRequireDefault(_StudentMien);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TelentShow = function (_Component) {
	    _inherits(TelentShow, _Component);

	    function TelentShow() {
	        _classCallCheck(this, TelentShow);

	        return _possibleConstructorReturn(this, (TelentShow.__proto__ || Object.getPrototypeOf(TelentShow)).apply(this, arguments));
	    }

	    _createClass(TelentShow, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_IncubationBase2.default, null),
	                _react2.default.createElement(_InnovationCommunities2.default, null),
	                _react2.default.createElement(_InnovationLab2.default, null),
	                _react2.default.createElement(_ItemShow2.default, null),
	                _react2.default.createElement(_PioneerCenter2.default, null),
	                _react2.default.createElement(_StarTeacher2.default, null),
	                _react2.default.createElement(_StudentMien2.default, null)
	            );
	        }
	    }]);

	    return TelentShow;
	}(_react.Component);

	exports.default = TelentShow;

/***/ }

})
//# sourceMappingURL=0.1044b639eb8a350ab386.hot-update.js.map