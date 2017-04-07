import React, {Component} from "react";
import {IndexLink, Link} from "react-router";
import Navigation from "./Navigation";
import "../../../css/innovationData/innovationdata.css";

export default class InnovationList extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="innovationlist-main">
                    <div className="innovationlist-column-list">
                        <div className="innovationlist-row-list"><IndexLink to="/innovationdata">
                            竞赛数据
                        </IndexLink></div>
                        <div className="innovationlist-row-list"><Link to="/innovationdata/incubation">
                            孵化数据
                        </Link></div>
                        <div className="innovationlist-row-list"><Link to="/innovationdata/awarditems">
                            森图数据
                        </Link></div>
                    </div>

                    <div className="innovationlist-row-view">{this.props.children}</div>
                </div>
            </div>
        )
    }
}