import React, {Component} from "react";

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation-main">
                <div className="navigation-img"></div>
                <div className="navigation-row">时间:<select name="time">
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                </select></div>
                <div className="navigation-row">类型:<select name="sort">
                    <option value="2018">挑战杯</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                </select></div>
                <div className="navigation-row">获奖等级:<select name="grade">
                    <option value="2018">国家一等奖</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                </select></div>
                <div className="navigation-row">所属院系:<select name="academy">
                    <option value="2018">经管院</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                </select></div>
                <div className="navigation-row">孵化情况:<select name="incubate">
                    <option value="2018">已孵化</option>
                    <option value="2017">2017</option>
                </select></div>

            </div>
        )
    }
}