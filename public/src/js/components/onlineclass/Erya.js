import React, {Component} from "react";
import {Link} from "react-router";
import "../../../css/onlineclass/erya.css";
import "../../../jquery/jquery-3.1.1.min.js";
import "../../../jquery/bootstrap.min.js";

export default class Erya extends Component{
    render(){
        return(
            <div id="main_box">
                <div id="top_header">
                    <div id="div1">分类规则</div>
                    <div id="div2">搜索框</div>
                    <div id="div3">上传</div>
                    <div id="div4">登录</div>
                </div>
                <div id="alert">
                    <h4>登录</h4><hr/>


                </div>
                <div id="container">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}