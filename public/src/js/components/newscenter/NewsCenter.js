import React, {Component} from "react";
import {Link} from "react-router";
import "../../../css/newscenter/NewsCenter.css";
import Rotation from "../wheel/Rotation"

export default class NewsCenter extends Component {
    constructor(props){
        super(props);
        this.state = {
            imagesSrc: [
                {src: "../../../image/innovationData/1.jpg"},
                {src: "../../../image/innovationData/2.jpg"},
                {src: "../../../image/innovationData/3.jpg"},
                {src: "../../../image/innovationData/4.jpg"},
                {src: "../../../image/innovationData/5.jpg"},
                {src: "../../../image/innovationData/6.jpg"},
                {src: "../../../image/innovationData/7.jpg"},
                {src: "../../../image/innovationData/8.jpg"},
                {src: "../../../image/innovationData/9.jpg"}
            ]
        };
    }
    render() {
        return (
            <div>
                <div className="topRotation">
                    <Rotation imagesSrc={this.state.imagesSrc}/>
                </div>
                <div className="newsCenter row">
                    <div className="newsNavigation col-md-3">
                        <Link to='/newscenter'><li>西邮热点</li></Link>
                        <Link to='/newscenter/xuhotnews'><li>媒体聚焦</li></Link>
                        <Link to='/newscenter/admission'><li>通知公告</li></Link>
                    </div>
                    <div className="col-md-9 row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}