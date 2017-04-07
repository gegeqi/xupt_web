import React, {Component} from "react";
import {Link} from "react-router";
import Frame_lunbo from "./Frame_lunbo";
import "../../../css/onlineclass/baseMooc.css";

export default class BaseMooc extends Component {
    mouseoverHandler0(){
        $("#myCarousel").carousel(0);
    };
    mouseoverHandler1() {
        $("#myCarousel").carousel(1);
    };
    mouseoverHandler2() {
        $("#myCarousel").carousel(2);
    };
    mouseoverHandler3(){
        $("#myCarousel").carousel(3);
    };
    mouseoverHandler4(){
        $("#myCarousel").carousel(4);
    };
    mouseoverHandler5(){
        $("#myCarousel").carousel(5);
    };
    render() {
        return (
            // <div>i am base mooc!!</div>
            <div id="top_box">
                <div id="left">
                    <ul id="left_ul myCarousel">
                        <Link to='/onlineclass/erya'>
                            <li onMouseOver={this.mouseoverHandler0}>
                                <a href="#">网课一链接</a>
                            </li>
                        </Link>
                        <li onMouseOver={this.mouseoverHandler1}><a href="#">网课二链接</a></li>
                        <li onMouseOver={this.mouseoverHandler2}><a href="#">网课三链接</a></li>
                        <li onMouseOver={this.mouseoverHandler3}><a href="#">网课四链接</a></li>
                        <li onMouseOver={this.mouseoverHandler4}><a href="#">网课n链接</a></li>
                        <li onMouseOver={this.mouseoverHandler5}><a href="#">SPOC链接</a></li>
                    </ul>
                </div>
                <div id="right">
                    <Frame_lunbo/>
                </div>
            </div>
        )
    };
}
