import React, {Component} from "react";
import {Link} from "react-router";
import "../../../css/newscenter/NewsCenter.css";

export default class NewsCenter extends Component {
    render() {
        return (
            <div>
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