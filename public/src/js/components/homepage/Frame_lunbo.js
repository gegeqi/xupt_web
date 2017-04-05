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
                                    src="../../../../image/homepage/bg2.jpg"
                                    alt="bg0"/>
                                <div className="carousel-caption">
                                    标题1
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="../../../../image/homepage/bg1.jpg"
                                    alt="bg1"/>
                                <div className="carousel-caption">
                                    标题2
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="../../../../image/homepage/bg0.jpg"
                                    width="400px" alt="bg2"/>
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