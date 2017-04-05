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
            if (scrollWrap.scrollTop >= con.scrollHeight) {
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

            if (scrollWrap.scrollTop >= con.scrollHeight) {
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
                    <img className="hot-news-img" src="../../../../image/newscenter/02.jpg"/>
                    <div className="XU-hot-news-list" ref="scrollWrap" onMouseOver={this.onMouseOver.bind(this)}
                         onMouseOut={this.onMouseOut.bind(this)}>
                        <div ref="con1">
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
                                className="hot-news-row-span">3-28</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="XU-hot-notice">
                    <div className="view-box-p">通知公告</div>
                    <img className="hot-notice-img" src="../../../../image/newscenter/01.jpg"/>
                    <div className="XU-hot-notice-list">
                        <div className="hot-news-list hot-notice-row1">我是通知公告,我是通知公告,yee!!<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row2">我是通知公告,我是通知公告,yee!!<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row3">我是通知公告,我是通知公告,yee!!<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row4">我是通知公告,我是通知公告,yee!!<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row5">我是通知公告,我是通知公告,yee!!<span
                            className="hot-news-row-span">3-28</span></div>
                        <div className="hot-news-list hot-notice-row6 hot-last-view">我是通知公告,我是通知公告,yee!!<span
                            className="hot-news-row-span">3-28</span></div>
                    </div>

                </div>

                <div className="XU-hot-view">
                    <div className="view-box-p">风采视频</div>
                    <img className="hot-view-img" src="" alt=""/>
                    <div className="XU-hot-view-list">
                        <div className="hot-news-list hot-view-row1">
                            <video className="hot-video" src="http://ofmz75843.bkt.clouddn.com/%E8%BD%AF%E5%B7%A5%E6%9D%AF%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D%E8%A7%86%E9%A2%91.mp4" controls="controls">
                            </video>
                        </div>
                        <div className="hot-news-list hot-view-row2">
                            <video className="hot-video" src="http://ofmz75843.bkt.clouddn.com/%E8%BD%AF%E5%B7%A5%E6%9D%AF%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D%E8%A7%86%E9%A2%91.mp4" controls="controls">
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

module.exports = NewsWall;