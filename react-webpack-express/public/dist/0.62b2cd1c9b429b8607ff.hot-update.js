webpackHotUpdate(0,{

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NewsWall = function (_Component) {
	    _inherits(NewsWall, _Component);

	    function NewsWall() {
	        _classCallCheck(this, NewsWall);

	        return _possibleConstructorReturn(this, (NewsWall.__proto__ || Object.getPrototypeOf(NewsWall)).apply(this, arguments));
	    }

	    _createClass(NewsWall, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { "class": "htmleaf-container" },
	                _react2.default.createElement(
	                    "div",
	                    { "class": "container mp30" },
	                    _react2.default.createElement(
	                        "div",
	                        { "class": "row" },
	                        _react2.default.createElement(
	                            "div",
	                            { "class": "col-md-4" },
	                            _react2.default.createElement(
	                                "div",
	                                { "class": "panel panel-default" },
	                                _react2.default.createElement(
	                                    "div",
	                                    { "class": "panel-heading" },
	                                    _react2.default.createElement("span", { "class": "glyphicon glyphicon-list-alt" }),
	                                    _react2.default.createElement(
	                                        "b",
	                                        null,
	                                        "News"
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    "div",
	                                    { "class": "panel-body" },
	                                    _react2.default.createElement(
	                                        "div",
	                                        { "class": "row" },
	                                        _react2.default.createElement(
	                                            "div",
	                                            { "class": "col-xs-12" },
	                                            _react2.default.createElement(
	                                                "ul",
	                                                { "class": "demo1" },
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    _react2.default.createElement(
	                                                        "table",
	                                                        { cellpadding: "4" },
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                _react2.default.createElement("img", { src: "images/1.png", width: "60", "class": "img-circle" })
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... ",
	                                                                _react2.default.createElement(
	                                                                    "a",
	                                                                    { href: "#" },
	                                                                    "Read more..."
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    _react2.default.createElement(
	                                                        "table",
	                                                        { cellpadding: "4" },
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                _react2.default.createElement("img", { src: "images/2.png", width: "60", "class": "img-circle" })
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... ",
	                                                                _react2.default.createElement(
	                                                                    "a",
	                                                                    { href: "#" },
	                                                                    "Read more..."
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    _react2.default.createElement(
	                                                        "table",
	                                                        { cellpadding: "4" },
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                _react2.default.createElement("img", { src: "images/3.png", width: "60", "class": "img-circle" })
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... ",
	                                                                _react2.default.createElement(
	                                                                    "a",
	                                                                    { href: "#" },
	                                                                    "Read more..."
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    _react2.default.createElement(
	                                                        "table",
	                                                        { cellpadding: "4" },
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                _react2.default.createElement("img", { src: "images/4.png", width: "60", "class": "img-circle" })
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... ",
	                                                                _react2.default.createElement(
	                                                                    "a",
	                                                                    { href: "#" },
	                                                                    "Read more..."
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    _react2.default.createElement(
	                                                        "table",
	                                                        { cellpadding: "4" },
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                _react2.default.createElement("img", { src: "images/5.png", width: "60", "class": "img-circle" })
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... ",
	                                                                _react2.default.createElement(
	                                                                    "a",
	                                                                    { href: "#" },
	                                                                    "Read more..."
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    _react2.default.createElement(
	                                                        "table",
	                                                        { cellpadding: "4" },
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                _react2.default.createElement("img", { src: "images/6.png", width: "60", "class": "img-circle" })
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... ",
	                                                                _react2.default.createElement(
	                                                                    "a",
	                                                                    { href: "#" },
	                                                                    "Read more..."
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    _react2.default.createElement(
	                                                        "table",
	                                                        { cellpadding: "4" },
	                                                        _react2.default.createElement(
	                                                            "tr",
	                                                            null,
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                _react2.default.createElement("img", { src: "images/7.png", width: "60", "class": "img-circle" })
	                                                            ),
	                                                            _react2.default.createElement(
	                                                                "td",
	                                                                null,
	                                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... ",
	                                                                _react2.default.createElement(
	                                                                    "a",
	                                                                    { href: "#" },
	                                                                    "Read more..."
	                                                                )
	                                                            )
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement("div", { "class": "panel-footer" })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { "class": "col-md-4" },
	                            _react2.default.createElement(
	                                "div",
	                                { "class": "panel panel-default" },
	                                _react2.default.createElement(
	                                    "div",
	                                    { "class": "panel-heading" },
	                                    _react2.default.createElement("span", { "class": "glyphicon glyphicon-list-alt" }),
	                                    _react2.default.createElement(
	                                        "b",
	                                        null,
	                                        "News"
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    "div",
	                                    { "class": "panel-body" },
	                                    _react2.default.createElement(
	                                        "div",
	                                        { "class": "row" },
	                                        _react2.default.createElement(
	                                            "div",
	                                            { "class": "col-xs-12" },
	                                            _react2.default.createElement(
	                                                "ul",
	                                                { "class": "demo2" },
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... ",
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        "Read more..."
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... ",
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        "Read more..."
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... ",
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        "Read more..."
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... ",
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        "Read more..."
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... ",
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        "Read more..."
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim... ",
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        "Read more..."
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement("div", { "class": "panel-footer" })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { "class": "col-md-4" },
	                            _react2.default.createElement(
	                                "div",
	                                { "class": "panel panel-default" },
	                                _react2.default.createElement(
	                                    "div",
	                                    { "class": "panel-heading" },
	                                    _react2.default.createElement("span", { "class": "glyphicon glyphicon-list-alt" }),
	                                    _react2.default.createElement(
	                                        "b",
	                                        null,
	                                        "News"
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    "div",
	                                    { "class": "panel-body" },
	                                    _react2.default.createElement(
	                                        "div",
	                                        { "class": "row" },
	                                        _react2.default.createElement(
	                                            "div",
	                                            { "class": "col-xs-12" },
	                                            _react2.default.createElement(
	                                                "ul",
	                                                { id: "demo3" },
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    "Curabitur porttitor ante eget hendrerit adipiscing. Maecenas at magna accumsan, rhoncus neque id, fringilla dolor. ",
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        "Read more..."
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    "Curabitur porttitor ante eget hendrerit adipiscing. Maecenas at magna accumsan, rhoncus neque id, fringilla dolor. ",
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        "Read more..."
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    "Praesent ornare nisl lorem, ut condimentum lectus gravida ut. Ut velit nunc, vehicula volutpat laoreet vel, consequat eu mauris. ",
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        "Read more..."
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    "Nunc ultrices tortor eu massa placerat posuere. Vivamus viverra sagittis nunc. Nunc et imperdiet magna. Mauris sed eros nulla. ",
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        "Read more..."
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    "Morbi sodales tellus sit amet leo congue bibendum. Ut non mauris eu neque fermentum pharetra. ",
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        "Read more..."
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    "In pharetra suscipit orci sed viverra. Praesent at sollicitudin tortor, id sagittis magna. Fusce massa sem, bibendum id. ",
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        "Read more..."
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    "Maecenas nec ligula sed est suscipit aliquet sed eget ipsum. Suspendisse id auctor nibh. Ut porttitor volutpat augue, non sodales odio dignissi id. ",
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        {
	                                                            href: "#" },
	                                                        "Read more..."
	                                                    )
	                                                ),
	                                                _react2.default.createElement(
	                                                    "li",
	                                                    { "class": "news-item" },
	                                                    "Onec bibendum consectetur diam, nec euismod urna venenatis eget. Cras consequat convallis leo. ",
	                                                    _react2.default.createElement(
	                                                        "a",
	                                                        { href: "#" },
	                                                        "Read more..."
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement("div", { "class": "panel-footer" })
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return NewsWall;
	}(_react.Component);

	module.exports = NewsWall;

/***/ }

})
//# sourceMappingURL=0.62b2cd1c9b429b8607ff.hot-update.js.map