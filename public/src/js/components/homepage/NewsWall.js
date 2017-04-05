import React, {Component} from "react";
import "../../../css/homepage/newsWall.css";

class NewsWall extends Component {

    constructor() {
        super();
        this.state = {
            timer: null,
            scrollWrap: null,
            con: null
        }
    }

    componentDidMount() {
        var scrollWrap = this.refs.scrollWrap;
        var con = this.refs.con1;
        con.innerHTML += con.innerHTML;

        var timer = setInterval(function () {
            if (scrollWrap.scrollTop >= con.scrollHeight/2) {
                scrollWrap.scrollTop = 0;
            }
            scrollWrap.scrollTop += 2;
        }, 20);

        this.setState({timer, scrollWrap, con});
    }

    onMouseOver() {
        clearInterval(this.state.timer);
    }

    onMouseOut() {
        var scrollWrap = this.state.scrollWrap;
        var con = this.state.con;
        var timer = setInterval(function () {

            if (scrollWrap.scrollTop >= con.scrollHeight/2) {
                scrollWrap.scrollTop = 0;
            }
            scrollWrap.scrollTop += 2;
        }, 20);
        this.setState({timer})
    }

    render() {
        return (
            <div className="newswall-view-box">
                <div className="XU-hot-news">
                    <div className="view-box-p">热点新闻</div>
                    <img className="hot-news-img" src=""/>
                    <div className="XU-hot-news-list" ref="scrollWrap" onMouseOver={this.onMouseOver.bind(this)}
                         onMouseOut={this.onMouseOut.bind(this)}>
                        <div ref="con1">
                            <div className="hot-news-list hot-news-row1">我校积极参与陕西省地方立法工作...<span
                                className="hot-news-row-span">3-28</span>
                            </div>
                            <div className="hot-news-list hot-news-row2">我校积极参与陕西省地方立法工作...<span
                                className="hot-news-row-span">3-28</span>
                            </div>
                            <div className="hot-news-list hot-news-row3">我校积极参与陕西省地方立法工作...<span
                                className="hot-news-row-span">3-28</span>
                            </div>
                            <div className="hot-news-list hot-news-row4">我校积极参与陕西省地方立法工作...<span
                                className="hot-news-row-span">3-28</span>
                            </div>
                            <div className="hot-news-list hot-news-row5">我校积极参与陕西省地方立法工作...<span
                                className="hot-news-row-span">3-28</span>
                            </div>
                            <div className="hot-news-list hot-news-row6">我校积极参与陕西省地方立法工作...<span
                                className="hot-news-row-span">3-28</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="XU-hot-notice">
                    <div className="view-box-p">通知公告</div>
                    <img className="hot-notice-img" src=""/>
                    <div className="XU-hot-notice-list">
                        <div className="hot-news-list hot-notice-row1">我校积极参与陕西省地方立法工作...<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row2">我校积极参与陕西省地方立法工作...<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row3">我校积极参与陕西省地方立法工作...<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row4">我校积极参与陕西省地方立法工作...<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row5">我校积极参与陕西省地方立法工作...<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row6 hot-last-view">我校积极参与陕西省地方立法工作...<span
                            className="hot-news-row-span">3-28</span></div>
                    </div>

                </div>

                <div className="XU-hot-view">
                    <div className="view-box-p">风采视频</div>
                    <img className="hot-view-img" src=""/>
                    <div className="XU-hot-view-list">
                        <div className="hot-news-list hot-view-row1"></div>
                        <div className="hot-news-list hot-view-row2"></div>
                    </div>
                </div>
            </div>
        )
    }


}

module.exports = NewsWall;