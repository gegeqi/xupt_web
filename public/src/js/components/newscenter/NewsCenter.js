import React, {Component} from "react";
import {Link} from "react-router";
import "../../../css/newscenter/NewsCenter.css";

export default class NewsCenter extends Component {
    render() {
        return (
            <div>
                <div className="newsCenter row">
                    <div className="newsNavigation col-md-3">
                        <Link to='/newscenter'><li>西邮概况</li></Link>
                        <Link to='/newscenter/xuhotnews'><li>西邮热点</li></Link>
                        <Link to='/newscenter/admission'><li>招生信息</li></Link>
                    </div>
                    <div className="col-md-9 row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}