import React, {Component} from "react";
import "../../../css/onlineclass/frame_lunbo.css";
import "../../../jquery/jquery-3.1.1.min.js";
import "../../../jquery/bootstrap.min.js";

class Frame_lunbo extends Component {
    render() {
        return (
            <div >
                <div id="wrap_bg">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" ref="myCarousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                            <li data-target="#myCarousel" data-slide-to="4"></li>
                            <li data-target="#myCarousel" data-slide-to="5"></li>
                        </ol>

                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <img
                                    src="../../../../image/onlineclass/carous0.jpg"
                                    alt="星空1"/>
                                <div className="carousel-caption">
                                    标题1
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="../../../../image/onlineclass/carous1.jpg"
                                    alt="星空2"/>
                                <div className="carousel-caption">
                                    标题2
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="../../../../image/onlineclass/carous2.jpg"
                                    alt="星空3"/>
                                <div className="carousel-caption">
                                    标题3
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="../../../../image/onlineclass/carous3.jpg"
                                    alt="星空2"/>
                                <div className="carousel-caption">
                                    标题4
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="../../../../image/onlineclass/carous4.jpg"
                                    width="400px" alt="星空3"/>
                                <div className="carousel-caption">
                                    标题5
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="../../../../image/onlineclass/carous2.jpg"
                                    alt="星空2"/>
                                <div className="carousel-caption">
                                    标题6
                                </div>
                            </div>

                        </div>

                        <a className="left carousel-control" href="#myCarousel" role="button"
                           data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" role="button"
                           data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    };
}

module.exports = Frame_lunbo;