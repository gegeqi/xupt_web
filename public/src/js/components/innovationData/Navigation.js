import React, {Component} from "react";

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation-main">
                <div className="navigation-img"></div>
                <div className="navigation-row">排序筛选规则</div>
                <div className="navigation-row ">搜索框</div>
                <div className="navigation-row">上传</div>
                <div className="navigation-row">登录</div>
            </div>
        )
    }
}