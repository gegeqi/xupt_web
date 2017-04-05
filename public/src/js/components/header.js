import React, {Component} from "react";
import {Link} from "react-router";
import "../../css/homepage/frame_header.css";

class Frame_header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar-fixed-top">
                    <div className="nav-box">
                        <ul className="nav nav-pills">
                            <li role="presentation"><Link to="/" className="header-link">首页
                            </Link>
                            </li>
                            <li role="presentation"><Link to="/newscenter" className="header-link">新闻中心
                            </Link>
                                <ul>
                                    <li>西邮热点</li>
                                    <li>媒体聚焦</li>
                                    <li>公告通知</li>
                                </ul>
                            </li>
                            <li role="presentation"><Link to="/elegantShow" className="header-link">风采展示
                            </Link>
                                <ul>
                                    <li>明星导师</li>
                                    <li>优秀学生</li>
                                    <li>项目展示</li>
                                    <li>孵化基地</li>
                                    <li>大创中心</li>
                                    <li>创新社团</li>
                                    <li>创新实验室</li>
                                </ul>
                            </li>
                            <li role="presentation"><Link to="/innovationdata" className="header-link">创新数据</Link>
                                <ul>
                                    <li>竞赛数据</li>
                                    <li>孵化数据</li>
                                    <li>森图数据</li>
                                </ul>
                            </li>
                            <li role="presentation"><Link to="/onlineclass" className="header-link">在线课堂</Link>
                                <ul>
                                    <li>超星尔雅</li>
                                    <li>西邮开放实验</li>
                                    <li>创业模拟沙盘课程</li>
                                    <li>大学生职业规划测评</li>
                                    <li>创业基础慕课</li>
                                    <li>创新创业spoc课程</li>
                                    <li>创新创业实训技能课程</li>
                                </ul>
                            </li>
                            <li role="presentation"><Link to="/community" className="header-link">互动社区</Link>
                                <ul>
                                    <li>创业竞赛交流专区</li>
                                    <li>创业团队交流专区</li>
                                    <li>创业项目交流专区</li>
                                    <li>创业技能交流专区</li>
                                </ul>
                            </li>
                            <li role="presentation"><Link to="#" className="header-link">文件下载</Link>
                            </li>
                            <li role="presentation"><Link to="#" className="header-link">个人中心</Link>
                            </li>
                            <li role="presentation"><Link to="#" className="header-link">登录</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
module.exports = Frame_header;