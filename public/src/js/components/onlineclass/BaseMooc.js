import React, {Component} from "react";
import {Link} from "react-router";
import Frame_lunbo from "./Frame_lunbo";
import "../../../css/onlineclass/baseMooc.css";

export default class BaseMooc extends Component {
    render() {
        return (
            // <div>i am base mooc!!</div>
            <div id="top_box">
                <div id="left">
                    <ul id="left_ul">
                        <Link to='/onlineclass/erya'>
                            <li class="left1" data-slide="0"><a href="#">网课一链接</a></li>
                        </Link>
                        <li data-slide="1"><a href="#">网课二链接</a></li>
                        <li data-slide="2"><a href="#">网课三链接</a></li>
                        <li data-slide="3"><a href="#">网课四链接</a></li>
                        <li data-slide="4"><a href="#">网课n链接</a></li>
                        <li data-slide="5"><a href="#">SPOC链接</a></li>
                    </ul>
                </div>
                <div id="right">
                    <Frame_lunbo/>
                </div>
            </div>
        )
    }
}
