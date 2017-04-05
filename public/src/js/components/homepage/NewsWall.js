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
<<<<<<< HEAD
            if (scrollWrap.scrollTop >= con.scrollHeight/2) {
                scrollWrap.scrollTop = 0;
            }
            scrollWrap.scrollTop += 2;
=======
            if (scrollWrap.scrollTop == con.offsetHeight) {
                scrollWrap.scrollTop = 0;
            }
            scrollWrap.scrollTop += 1;
>>>>>>> upstream/dev
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

<<<<<<< HEAD
            if (scrollWrap.scrollTop >= con.scrollHeight/2) {
=======
            if (scrollWrap.scrollTop == con.offsetHeight) {
>>>>>>> upstream/dev
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
<<<<<<< HEAD
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
=======
                            <div className="hot-news-list hot-news-row1">新闻001,新闻001,新闻001<span
                                className="hot-news-row-span">3-28</span>
                            </div>
                            <div className="hot-news-list hot-news-row2">新闻001,新闻001,新闻002<span
                                className="hot-news-row-span">3-28</span>
                            </div>
                            <div className="hot-news-list hot-news-row3">新闻001,新闻001,新闻003<span
                                className="hot-news-row-span">3-28</span>
                            </div>
                            <div className="hot-news-list hot-news-row4">新闻001,新闻001,新闻004<span
                                className="hot-news-row-span">3-28</span>
                            </div>
                            <div className="hot-news-list hot-news-row5">新闻001,新闻001,新闻005<span
                                className="hot-news-row-span">3-28</span>
                            </div>
                            <div className="hot-news-list hot-news-row6">新闻001,新闻001,新闻006<span
>>>>>>> upstream/dev
                                className="hot-news-row-span">3-28</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="XU-hot-notice">
                    <div className="view-box-p">通知公告</div>
                    <img className="hot-notice-img" src=""/>
                    <div className="XU-hot-notice-list">
<<<<<<< HEAD
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
=======
                        <div className="hot-news-list hot-notice-row1">我是通知公告,yee!!我是通知公告,yee!!<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row2">我是通知公告,yee!!我是通知公告,yee!!<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row3">我是通知公告,yee!!我是通知公告,yee!!<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row4">我是通知公告,yee!!我是通知公告,yee!!<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row5">我是通知公告,yee!!我是通知公告,yee!!<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row6 hot-last-view">我是通知公告,yee!!我是通知公告,yee!!<span
>>>>>>> upstream/dev
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