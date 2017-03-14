webpackHotUpdate(0,{

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BaseMooc = __webpack_require__(293);

	var _BaseMooc2 = _interopRequireDefault(_BaseMooc);

	var _ERP = __webpack_require__(296);

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

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(294);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseMooc = function (_Component) {
	    _inherits(BaseMooc, _Component);

	    function BaseMooc() {
	        _classCallCheck(this, BaseMooc);

	        return _possibleConstructorReturn(this, (BaseMooc.__proto__ || Object.getPrototypeOf(BaseMooc)).apply(this, arguments));
	    }

	    _createClass(BaseMooc, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                "i am base mooc!!"
	            );
	        }
	    }]);

	    return BaseMooc;
	}(_react.Component);

	exports.default = BaseMooc;

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(295);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(238)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(295, function() {
				var newContent = __webpack_require__(295);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(237)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(297);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ERP = function (_Component) {
	    _inherits(ERP, _Component);

	    function ERP() {
	        _classCallCheck(this, ERP);

	        return _possibleConstructorReturn(this, (ERP.__proto__ || Object.getPrototypeOf(ERP)).apply(this, arguments));
	    }

	    _createClass(ERP, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                "i am ERP!!"
	            );
	        }
	    }]);

	    return ERP;
	}(_react.Component);

	exports.default = ERP;

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(298);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(238)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(298, function() {
				var newContent = __webpack_require__(298);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(237)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }

})
//# sourceMappingURL=0.d3ab8d36ee6263024ad2.hot-update.js.map