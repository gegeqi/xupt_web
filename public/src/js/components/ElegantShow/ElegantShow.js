import React, {Component} from "react";
import {IndexLink, Link} from "react-router";

import "../../../css/elegantshow/elegantShow.css";

export default class ElegantShow extends Component {
  render() {
    return (
        <div className="elegant">
          <div className="elegant-slide">
            <ul>
              <Link to="/elegantShow/starTeacher" className="link-style" activeClassName="active"
              >
                <li>明星导师</li>
              </Link>
              <Link to="/elegantShow/studentMien" className="link-style" activeClassName="active">
                <li>优秀学生</li>
              </Link>
              <Link to="/elegantShow/itemShow" className="link-style" activeClassName="active">
                <li>项目展示</li>
              </Link>
              <Link to="/elegantShow/incubationBase" className="link-style" activeClassName="active">
                <li>孵化基地</li>
              </Link>
              <Link to="/elegantShow/pioneerCenter" className="link-style" activeClassName="active">
                <li>大创中心</li>
              </Link>
              <Link to="/elegantShow/innovationLab" className="link-style" activeClassName="active">
                <li>创新实验室</li>
              </Link>
              <IndexLink to="/elegantShow" className="link-style" activeClassName="active">
                <li>创新社团</li>
              </IndexLink>
            </ul>
          </div>
          <div className="elegant-container">
            {this.props.children}
          </div>
        </div>
    )
  }
}