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
                <li role="presentation"><a href="#" className="header-link">首页</a></li>
                <li role="presentation"><Link to="/newscenter" className="header-link">新闻中心
                </Link></li>
                <li role="presentation"><Link to="/elegantShow" className="header-link">风采展示
                </Link>
                </li>

                <li role="presentation"><Link to="/innovationdata" className="header-link">创新数据</Link></li>
                <li role="presentation"><Link to="/onlineclass" className="header-link">在线课堂</Link></li>
                <li role="presentation"><Link to="/community" className="header-link">互动社区</Link></li>
                <li role="presentation"><Link to="#" className="header-link">文件下载</Link></li>
                <li role="presentation"><Link to="#" className="header-link">个人中心</Link></li>
                <li role="presentation"><Link to="#" className="header-link">登录</Link></li>
              </ul>
            </div>
          </nav>
        </div>
    );
  }

}
module.exports = Frame_header;