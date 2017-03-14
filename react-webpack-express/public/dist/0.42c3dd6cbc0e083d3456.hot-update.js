webpackHotUpdate(0,{

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _header = __webpack_require__(341);

	var _header2 = _interopRequireDefault(_header);

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
	                _react2.default.createElement(_header2.default, null),
	                this.props.children
	            );
	        }
	    }]);

	    return Main_view;
	}(_react.Component);

	module.exports = Main_view;

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(236);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(238)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(236, function() {
				var newContent = __webpack_require__(236);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(237)();
	// imports


	// module
	exports.push([module.id, "\n* {\n    margin: 0px ;\n    padding: 0px;\n}\n\nbody {\n    /*background: #b1b1b1;*/\n    margin: 0px;\n    padding: 0px;\n    font-size: 14px;\n    color: #000;\n}\n/**/\n.logo{\n    transform: scale(1,-1);\n    transform:rotateY(180deg);\n}\n\n.menuHolder {\n    width: 100px;\n    height: 100px;\n    position: relative;\n    float: right;\n    z-index: 100;\n    transform: scale(-1,1);\n}\n\n.menuHolder ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    position: absolute;\n    /* left: 0;\n     top: 0;\n     width: 0;\n     height: 0;*/\n}\n\n.menuHolder ul li {\n    border-radius: 0 0 300px 0;\n    width: 0;\n    height: 0;\n}\n\n.menuHolder ul li a {\n    color: #000;\n    text-decoration: none;\n    font: bold 13px/30px arial, sans-serif;\n    text-align: center;\n    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.4);\n    -webkit-transform-origin: 0 0;\n    -moz-transform-origin: 0 0;\n    -ms-transform-origin: 0 0;\n    -o-transform-origin: 0 0;\n    transform-origin: 0 0;\n}\n\n.menuHolder ul.p1 li {\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.menuHolder ul.p2 {\n    z-index: -1;\n}\n\n.menuHolder ul.p3 {\n    z-index: -1;\n}\n\n.menuHolder li.s1 > a {\n    position: absolute;\n    display: block;\n    width: 100px;\n    height: 100px;\n    background: #c8c8c8;\n    border-radius: 0 0 100px 0;\n}\n\n.menuHolder li.s2 > a {\n    position: absolute;\n    display: block;\n    width: 100px;\n    padding-left: 100px;\n    height: 200px;\n    background: #ddd;\n    border-radius: 0 0 200px 0;\n}\n\n.menuHolder ul.p3 li a {\n    position: absolute;\n    display: block;\n    width: 100px;\n    padding-left: 200px;\n    height: 300px;\n    background: #999;\n    border-radius: 0 0 300px 0;\n}\n\n.menuHolder ul ul {\n    -webkit-transform-origin: 0 0;\n    -moz-transform-origin: 0 0;\n    -ms-transform-origin: 0 0;\n    -o-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotateZ(90deg);\n    -ms-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    transform: rotate(90deg);\n    -webkit-transition: 1s;\n    -moz-transition: 1s;\n    -ms-transition: 1s;\n    -o-transition: 1s;\n    transition: 1s;\n}\n\n.menuHolder li.s2:nth-of-type(6) > a {\n    background: #888;\n    -webkit-transform: rotate(75deg);\n    -moz-transform: rotateZ(75deg);\n    -ms-transform: rotate(75deg);\n    -o-transform: rotate(75deg);\n    transform: rotate(75deg);\n}\n\n.menuHolder li.s2:nth-of-type(5) > a {\n    background: #999;\n    -webkit-transform: rotate(60deg);\n    -moz-transform: rotateZ(60deg);\n    -ms-transform: rotate(60deg);\n    -o-transform: rotate(60deg);\n    transform: rotate(60deg);\n}\n\n.menuHolder li.s2:nth-of-type(4) > a {\n    background: #aaa;\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotateZ(45deg);\n    -ms-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n\n.menuHolder li.s2:nth-of-type(3) > a {\n    background: #bbb;\n    -webkit-transform: rotate(30deg);\n    -moz-transform: rotateZ(30deg);\n    -ms-transform: rotate(30deg);\n    -o-transform: rotate(30deg);\n    transform: rotate(30deg);\n}\n\n.menuHolder li.s2:nth-of-type(2) > a {\n    background: #ccc;\n    -webkit-transform: rotate(15deg);\n    -moz-transform: rotateZ(15deg);\n    -ms-transform: rotate(15deg);\n    -o-transform: rotate(15deg);\n    transform: rotate(15deg);\n}\n\n.menuHolder .a6 li:nth-of-type(6) > a {\n    background: #444;\n    -webkit-transform: rotate(75deg);\n    -moz-transform: rotateZ(75deg);\n    -ms-transform: rotate(75deg);\n    -o-transform: rotate(75deg);\n    transform: rotate(75deg);\n}\n\n.menuHolder .a6 li:nth-of-type(5) > a {\n    background: #555;\n    -webkit-transform: rotate(60deg);\n    -moz-transform: rotateZ(60deg);\n    -ms-transform: rotate(60deg);\n    -o-transform: rotate(60deg);\n    transform: rotate(60deg);\n}\n\n.menuHolder .a6 li:nth-of-type(4) > a {\n    background: #666;\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotateZ(45deg);\n    -ms-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n\n.menuHolder .a6 li:nth-of-type(3) > a {\n    background: #777;\n    -webkit-transform: rotate(30deg);\n    -moz-transform: rotateZ(30deg);\n    -ms-transform: rotate(30deg);\n    -o-transform: rotate(30deg);\n    transform: rotate(30deg);\n}\n\n.menuHolder .a6 li:nth-of-type(2) > a {\n    background: #888;\n    -webkit-transform: rotate(15deg);\n    -moz-transform: rotateZ(15deg);\n    -ms-transform: rotate(15deg);\n    -o-transform: rotate(15deg);\n    transform: rotate(15deg);\n}\n\n.menuHolder .a5 li:nth-of-type(5) > a {\n    background: #555;\n    -webkit-transform: rotate(72deg);\n    -moz-transform: rotateZ(72deg);\n    -ms-transform: rotate(72deg);\n    -o-transform: rotate(72deg);\n    transform: rotate(72deg);\n}\n\n.menuHolder .a5 li:nth-of-type(4) > a {\n    background: #666;\n    -webkit-transform: rotate(54deg);\n    -moz-transform: rotateZ(54deg);\n    -ms-transform: rotate(54deg);\n    -o-transform: rotate(54deg);\n    transform: rotate(54deg);\n}\n\n.menuHolder .a5 li:nth-of-type(3) > a {\n    background: #777;\n    -webkit-transform: rotate(36deg);\n    -moz-transform: rotateZ(36deg);\n    -ms-transform: rotate(36deg);\n    -o-transform: rotate(36deg);\n    transform: rotate(36deg);\n}\n\n.menuHolder .a5 li:nth-of-type(2) > a {\n    background: #888;\n    -webkit-transform: rotate(18deg);\n    -moz-transform: rotateZ(18deg);\n    -ms-transform: rotate(18deg);\n    -o-transform: rotate(18deg);\n    transform: rotate(18deg);\n}\n\n.menuHolder .a3 li:nth-of-type(3) > a {\n    background: #777;\n    -webkit-transform: rotate(60deg);\n    -moz-transform: rotateZ(60deg);\n    -ms-transform: rotate(60deg);\n    -o-transform: rotate(60deg);\n    transform: rotate(60deg);\n}\n\n.menuHolder .a3 li:nth-of-type(2) > a {\n    background: #888;\n    -webkit-transform: rotate(30deg);\n    -moz-transform: rotateZ(30deg);\n    -ms-transform: rotate(30deg);\n    -o-transform: rotate(30deg);\n    transform: rotate(30deg);\n}\n\n.menuHolder li.s1:hover ul.p2 {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotateZ(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n\n.menuHolder li.s2:hover ul.p3 {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotateZ(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n\n.menuHolder ul li:hover > a {\n    background: #f00;\n    color: #fff;\n}\n\n.menuHolder li.s2:hover > a {\n    background: #d00;\n    color: #fff;\n}\n\n.menuHolder .a6 li:hover > a {\n    background: #b00;\n    color: #fff;\n}\n\n.menuHolder .a5 li:hover > a {\n    background: #b00;\n    color: #fff;\n}\n\n.menuHolder .a3 li:hover > a {\n    background: #b00;\n    color: #fff;\n}\n\n.menuWindow {\n    width: 110px;\n    height: 110px;\n    overflow: hidden;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 100;\n    -webkit-transition: 0s 1s;\n    -moz-transition: 0s 1s;\n    -ms-transition: 0s 1s;\n    -o-transition: 0s 1s;\n    transition: 0s 1s;\n}\n\n.menuHolder:hover .menuWindow {\n    width: 310px;\n    height: 310px;\n    -webkit-transition: 0s 0s;\n    -moz-transition: 0s 0s;\n    -ms-transition: 0s 0s;\n    -o-transition: 0s 0s;\n    transition: 0s 0s;\n}\n\n.menuHolder span {\n    display: block;\n    -webkit-transform: rotate(5deg);\n    -moz-transform: rotateZ(5deg);\n    -ms-transform: rotate(5deg);\n    -o-transform: rotate(5deg);\n    transform: rotate(5deg);\n}\n\n.menuHolder ~ img.close {\n    width: 0;\n    height: 0;\n    position: fixed;\n    z-index: -1;\n    left: 0;\n    top: 0;\n}\n\n.menuHolder:hover ~ img.close {\n    width: 100%;\n    height: 100%;\n}\n\n/*轮播结束*/\n#top{\n    height: 100px;\n    width: 100%;\n    /*background-color: #5AABEC;*/\n    border: 1px solid #000;\n}\n#left1{\n    height: 100px;\n    width: 800px;\n    /*border: 1px solid #000;*/\n    float: left;\n}\n#left1 img{\n    width: 100%;\n    height: 100%;\n    margin:-0.5% 0;\n}\n\n\n\n", ""]);

	// exports


/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(180);

	__webpack_require__(235);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Frame_header = function (_Component) {
	    _inherits(Frame_header, _Component);

	    function Frame_header() {
	        _classCallCheck(this, Frame_header);

	        return _possibleConstructorReturn(this, (Frame_header.__proto__ || Object.getPrototypeOf(Frame_header)).apply(this, arguments));
	    }

	    _createClass(Frame_header, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { id: "top" },
	                _react2.default.createElement(
	                    "div",
	                    { id: "left1" },
	                    _react2.default.createElement("img", { src: "../../../image/logo.gif", alt: "logo" })
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { id: "daohang" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "menuHolder" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "menuWindow" },
	                            _react2.default.createElement(
	                                "ul",
	                                { className: "p1" },
	                                _react2.default.createElement(
	                                    "li",
	                                    { className: "s1" },
	                                    _react2.default.createElement(
	                                        "a",
	                                        { href: "#url" },
	                                        _react2.default.createElement(
	                                            "div",
	                                            { className: "logo" },
	                                            "\u7F51\u7AD9\u5BFC\u822A"
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        "ul",
	                                        { className: "p2" },
	                                        _react2.default.createElement(
	                                            "li",
	                                            { className: "s2" },
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#" },
	                                                _react2.default.createElement(
	                                                    "span",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "logo" },
	                                                        "\u9996\u9875"
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            { className: "s2" },
	                                            _react2.default.createElement(
	                                                _reactRouter.Link,
	                                                { to: "/newscenter" },
	                                                _react2.default.createElement(
	                                                    "span",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "logo" },
	                                                        "\u65B0\u95FB\u4E2D\u5FC3"
	                                                    )
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                "ul",
	                                                { className: "p3 a3" },
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u897F\u90AE\u70ED\u70B9"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u5A92\u4F53\u805A\u7126"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u516C\u544A\u901A\u77E5"
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            { className: "s2" },
	                                            _react2.default.createElement(
	                                                _reactRouter.Link,
	                                                { to: "/talentshow" },
	                                                _react2.default.createElement(
	                                                    "span",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "logo" },
	                                                        "\u98CE\u91C7\u5C55\u793A"
	                                                    )
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                "ul",
	                                                { className: "p3 a6" },
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u660E\u661F\u5BFC\u5E08"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u5B66\u751F\u98CE\u91C7"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u9879\u76EE\u5C55\u793A"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u5B75\u5316\u57FA\u5730"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u5927\u521B\u4E2D\u5FC3"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u521B\u65B0\u5B9E\u9A8C\u5BA4"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u521B\u65B0\u793E\u56E2"
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            { className: "s2" },
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#url" },
	                                                _react2.default.createElement(
	                                                    "span",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "logo" },
	                                                        "\u521B\u65B0\u6570\u636E"
	                                                    )
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                "ul",
	                                                { className: "p3 a3" },
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u5386\u5E74\u6570\u636E"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u5386\u5E74\u5B75\u5316\u9879\u76EE"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u521B\u4E1A\u56FE\u4E66\u9986"
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            { className: "s2" },
	                                            _react2.default.createElement(
	                                                "a",
	                                                { href: "#url" },
	                                                _react2.default.createElement(
	                                                    "span",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        { className: "logo" },
	                                                        "\u5728\u7EBF\u8BFE\u5802"
	                                                    )
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                "ul",
	                                                { className: "p3 a3" },
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u5C14\u96C5\u57FA\u7840\u6559\u7A0B"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u897F\u90AE\u5F00\u653E\u5B9E\u9A8C"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u521B\u4E1A\u6A21\u62DF\u6C99\u76D8"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u5927\u5B66\u751F\u804C\u4E1A\u89C4\u5212\u8BC4\u6D4B"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u521B\u4E1A\u57FA\u7840\u6155\u8BFE"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u521B\u65B0\u521B\u4E1A\u5B9E\u8BAD\u8BFE\u7A0B"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "spoc\u5FAE\u8BFE"
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            "li",
	                                            { className: "s2 b6" },
	                                            _react2.default.createElement(
	                                                _reactRouter.Link,
	                                                { to: "/community" },
	                                                _react2.default.createElement(
	                                                    "span",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "div",
	                                                        {
	                                                            className: "logo" },
	                                                        "\u4E92\u52A8\u793E\u533A"
	                                                    )
	                                                )
	                                            ),
	                                            _react2.default.createElement(
	                                                "ul",
	                                                { className: "p3 a5" },
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u521B\u4E1A\u7ADE\u8D5B\u4EA4\u6D41\u4E13\u533A"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u521B\u4E1A\u56E2\u961F\u4EA4\u6D41\u4E13\u533A"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u521B\u4E1A\u9879\u76EE\u4EA4\u6D41\u4E13\u533A"
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        _react2.default.createElement(
	                                                            "div",
	                                                            { className: "logo" },
	                                                            "\u521B\u65B0\u6280\u80FD\u4EA4\u6D41\u4E13\u533A"
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Frame_header;
	}(_react.Component);

	module.exports = Frame_header;

/***/ }

})
//# sourceMappingURL=0.42c3dd6cbc0e083d3456.hot-update.js.map