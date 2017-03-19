import React, {Component} from "react";
import {Link} from "react-router";
import "../../css/homepage/frame_header.css";

class Frame_header extends Component {
    render() {
        return (
            <div id="top">
                <div id="left1">
                    <Link to={'/'}>
                        <img src="../../../image/logo.gif" alt="logo"/>
                    </Link>
                </div>
                <div id="daohang">
                    <div className="menuHolder">
                        <div className="menuWindow">
                            <ul className="p1">
                                <li className="s1">
                                    <a href="#url">
                                    <div className="logo">网站导航</div>
                                    </a>
                                    <ul className="p2">
                                        <li className="s2">
                                            <a href="#">
                                                <span><div className="logo">首页</div></span></a>
                                        </li>
                                        <li className="s2">
                                            <Link to="/newscenter">
                                                <span><div className="logo">新闻中心</div></span>
                                            </Link>
                                            <ul className="p3 a3">
                                                <li>
                                                    <a href="#">
                                                    <div className="logo">西邮热点</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                    <div className="logo">媒体聚焦</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                    <div className="logo">公告通知</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="s2">
                                            <Link to="/elegantShow">
                                                <span><div className="logo">风采展示</div></span>
                                            </Link>
                                            <ul className="p3 a6">
                                                <li>
                                                    <a href="#">
                                                    <div className="logo">明星导师</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                    <div className="logo">学生风采</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                    <div className="logo">项目展示</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                    <div className="logo">孵化基地</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                    <div className="logo">大创中心</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                    <div className="logo">创新实验室</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                    <div className="logo">创新社团</div>
                                                    </a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li className="s2">
                                            <Link to="innovationdata">
                                                <span><div className="logo">创新数据</div></span>
                                            </Link>
                                            <ul className="p3 a3">
                                                <li><a href="#">
                                                    <div className="logo">历年数据</div>
                                                </a></li>
                                                <li><a href="#">
                                                    <div className="logo">历年孵化项目</div>
                                                </a></li>
                                                <li><a href="#">
                                                    <div className="logo">创业图书馆</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li className="s2">
                                            <Link to="onlineclass">
                                                <span><div className="logo">在线课堂</div></span>
                                            </Link>
                                            <ul className="p3 a3">
                                                <li><a href="#">
                                                    <div className="logo">尔雅基础教程</div>
                                                </a></li>
                                                <li><a href="#">
                                                    <div className="logo">西邮开放实验</div>
                                                </a></li>
                                                <li><a href="#">
                                                    <div className="logo">创业模拟沙盘</div>
                                                </a></li>
                                                <li><a href="#">
                                                    <div className="logo">大学生职业规划评测</div>
                                                </a></li>
                                                <li><a href="#">
                                                    <div className="logo">创业基础慕课</div>
                                                </a></li>
                                                <li><a href="#">
                                                    <div className="logo">创新创业实训课程</div>
                                                </a></li>
                                                <li><a href="#">
                                                    <div className="logo">spoc微课</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li className="s2 b6">
                                            <Link to="/community">
                                                <span><div className="logo">互动社区</div></span>
                                            </Link>
                                            <ul className="p3 a5">
                                                <li><a href="#">
                                                    <div className="logo">创业竞赛交流专区</div>
                                                </a></li>
                                                <li><a href="#">
                                                    <div className="logo">创业团队交流专区</div>
                                                </a></li>
                                                <li><a href="#">
                                                    <div className="logo">创业项目交流专区</div>
                                                </a></li>
                                                <li><a href="#">
                                                    <div className="logo">创新技能交流专区</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
module.exports = Frame_header;