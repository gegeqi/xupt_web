import React, {Component} from "react";
import "../../css/common.css";

export default class Pagination extends Component {

  constructor() {
    super();
    this.state = {
      totalNum: null,//总记录数
      current: 1, //当前页码
      newList: [],
      totalPage: null,//总页数
    }
  }

  componentWillMount() {
    var list = this.props.list;
    var totalNum = list.length;
    var totalPage = Math.ceil(totalNum / this.props.pageSize);

    const newList = this.generateNewsList(this.state.current, list, this.props.pageSize);

    this.setState({totalNum, totalPage, newList});
  }

  collectPageNumber(totalPage) {
    var array = [];
    for (var i = 1; i <= totalPage; i++) {
      array.push(i);
    }
    return array;
  }

  generateNewsList(current, list, pageSize) {

    var newList = list.map((ele, index)=> {
      const frontNews = pageSize * (current - 1);
      const endNews = pageSize * current - 1;
      if (index >= frontNews && index <= endNews) {
        return ele;
      }
      return null;
    }).filter(ele => ele != null);

    return newList;
  }

  changeCurrent(index) {
    const current = index;
    const newList = this.generateNewsList(current, this.props.list, this.props.pageSize);
    this.setState({current, newList});
  }

  chooseBeforePage() {
    var current = this.state.current;
    if (current > 1) {
      current -= 1;
    }
    const newList = this.generateNewsList(current, this.props.list, this.props.pageSize);
    this.setState({current, newList});
  }

  chooseAfterPage() {
    var current = this.state.current;
    const totalPage = this.state.totalPage;
    if (current < totalPage) {
      current += 1;
    }
    const newList = this.generateNewsList(current, this.props.list, this.props.pageSize);
    this.setState({current, newList});
  }

  chooseFirstPage() {
    var current = 1;
    const newList = this.generateNewsList(current, this.props.list, this.props.pageSize);
    this.setState({current, newList});
  }

  chooseLastPage() {
    var current = this.state.totalPage;
    const newList = this.generateNewsList(current, this.props.list, this.props.pageSize);
    this.setState({current, newList});
  }


  render() {

    const pageList = this.state.newList.map((item, index)=> {
      return <div key={index}>
        {this.props.item(item)}
      </div>
    });

    const pageNumbers = this.collectPageNumber(this.state.totalPage).map((ele, index)=> {
      return <div key={index} className="pagination">
        <li onClick={this.changeCurrent.bind(this, ele)}>
          <a href="#">{ele}</a>
        </li>
      </div>
    });

    return (
        <div>
          <div className={this.props.listStyle}>
            {pageList}
          </div>
          <div className="pagination-middle">
            <nav className="Page navigation">
              <div className="pagination">
                <li onClick={this.chooseFirstPage.bind(this)}>
                  <a href="#">
                    <span>首页</span>
                  </a>
                </li>
              </div>
              <div className="pagination" onClick={this.chooseBeforePage.bind(this)}>
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
              </div>
              {pageNumbers}
              <div className="pagination" onClick={this.chooseAfterPage.bind(this)}>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </div>
              <div className="pagination">
                <li onClick={this.chooseLastPage.bind(this)}>
                  <a href="#">
                    <span aria-hidden="true">末页</span>
                  </a>
                </li>
              </div>
              <div className="pagination">
                <li className="page-message">
                    <span aria-hidden="true">共{this.state.totalPage}页{this.state.totalNum}条</span>
                </li>
              </div>
            </nav>
          </div>
        </div>
    )
  }
}