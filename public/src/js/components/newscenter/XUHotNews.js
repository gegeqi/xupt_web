import React, {Component} from "react";
import "../../../css/newscenter/NewsCenter.css";

export default class XUHotNews extends Component {

  render() {
    return(

        <div className="newsWrap">
          <div>
            <div className="news">
              <div className="newsTitle">西安邮电大学运动会顺利举办</div>
            </div>

            <div className="news">
              <div className="newsTitle">西安邮电大学运动会顺利举办</div>
            </div>

            <div className="news">
              <div className="newsTitle">西安邮电大学运动会顺利举办</div>
            </div>

            <div className="news">
              <div className="newsTitle">西安邮电大学运动会顺利举办</div>
            </div>
            <div className="news">
              <div className="newsTitle">西安邮电大学运动会顺利举办</div>
            </div>

            <div className="foot">
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </div>
    )
  }
}
