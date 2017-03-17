import React, {Component} from "react";
import "../../../css/homepage/frame_lunbo.css";


class Frame_lunbo extends Component {
    render() {
        return (
            <div >
                <div id="wrap_bg">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>

                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <img
                                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1488970748&di=af6c5af9cac6d6e127549943be959aa1&src=http://img01.taopic.com/141213/240473-1412130U43243.jpg"
                                    alt="星空1"/>
                                <div className="carousel-caption">
                                    标题1
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1857176215,2816791989&fm=23&gp=0.jpg"
                                    alt="星空2"/>
                                <div className="carousel-caption">
                                    标题2
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488980553241&di=3624ac429c9384be50e60db82915ced1&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0303%2F6b7f7a3c5ccbe9900094add1d8b5cbc8.jpg"
                                    width="400px" alt="星空3"/>
                                <div className="carousel-caption">
                                    标题3
                                </div>
                            </div>
                        </div>

                        <a className="left carousel-control" href="#carousel-example-generic" role="button"
                           data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" role="button"
                           data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Frame_lunbo;