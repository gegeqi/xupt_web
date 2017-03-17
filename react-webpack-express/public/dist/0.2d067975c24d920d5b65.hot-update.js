webpackHotUpdate(0,{

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(194);

	__webpack_require__(180);

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
	                                                "a",
	                                                { href: "#url" },
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
	                                                            "\u6253\u5370"
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
	                                                            "\u7F16\u8F91"
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
	                                                            "\u4FDD\u7BA1"
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
	                                                { to: "/community" },
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
	                                                            "\u652F\u6301"
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
	                                                            "\u9500\u552E"
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
	                                                            "\u8D2D\u4E70"
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
	                                                            "\u6444\u5F71\u5E08"
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
	                                                            "\u96F6\u552E\u5546"
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
	                                                            "\u5E38\u89C4"
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
	                                                            "\u5357\u533A"
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
	                                                            "\u5317\u533A"
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
	                                                            "\u4E2D\u5FC3\u533A"
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
	                                                            "\u90AE\u7BB1"
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
	                                                            "\u90AE\u9012"
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
	                                                            "\u7535\u8BDD"
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
	                                                            "\u6570\u7801\u5355\u53CD\u673A\u8EAB"
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
	                                                            "\u955C\u5934"
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
	                                                            "\u95EA\u5149\u67AA"
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
	                                                            "\u4E09\u89D2\u67B6"
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
	                                                            "\u8FC7\u6EE4\u5668"
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
//# sourceMappingURL=0.2d067975c24d920d5b65.hot-update.js.map