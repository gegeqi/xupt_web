import React, {Component} from "react";
import {Link} from "react-router";
import "../../../css/newscenter/NewsCenter.css";

export default class NewsWall extends Component{
    constructor() {
        super();
        this.state = {
            allNews: [{title: "西安邮电大学运动会顺利举办1", date: "2011-06-11"}, {
                title: "西安邮电大学运动会顺利举办2",
                date: "2011-06-11"
            }, {title: "西安邮电大学运动会顺利举办3", date: "2011-06-11"}, {
                title: "西安邮电大学运动会顺利举办4",
                date: "2011-06-11"
            }, {title: "西安邮电大学运动会顺利举办5", date: "2011-06-11"}, {
                title: "西安邮电大学运动会顺利举办6",
                date: "2011-06-11"
            }, {title: "西安邮电大学运动会顺利举办", date: "2011-06-11"}, {
                title: "西安邮电大学运动会顺利举办",
                date: "2011-06-11"
            }, {title: "西安邮电大学运动会顺利举办", date: "2011-06-11"}, {
                title: "西安邮电大学运动会顺利举办",
                date: "2011-06-11"
            }, {title: "西安邮电大学运动会顺利举办", date: "2011-06-11"}, {title: "西安邮电大学运动会顺利举办", date: "2011-06-11"}], //获取数据的存放数组
            totalNum: null,//总记录数
            current: 1, //当前页码
            pageSize: 5, //每页显示的条数5条
            newsList: [],
            totalPage: null,//总页数
        }
    }

    componentWillMount() {
        var totalNum = this.state.allNews.length;
        var totalPage = Math.ceil(totalNum / this.state.pageSize);

        const newsList = this.generateNewsList(this.state.current, this.state.allNews, this.state.pageSize);

        this.setState({totalNum, totalPage, newsList});
    }

    collectPageNumber(totalPage) {
        var array = [];
        for (var i = 1; i <= totalPage; i++) {
            array.push(i);
        }
        return array;
    }

    generateNewsList(current, allNews, pageSize) {

        var newsList = allNews.map((ele, index)=> {
            const frontNews = pageSize * (current - 1)
            const endNews = pageSize * current - 1;
            if (index >= frontNews && index <= endNews) {
                return ele;
            }
            return null;
        }).filter(ele => ele != null);

        return newsList;
    }

    changeCurrent(index) {
        const current = index;
        const newsList = this.generateNewsList(current, this.state.allNews, this.state.pageSize);
        this.setState({current, newsList});
    }

    chooseBeforePage(){
        var current = this.state.current;
        if(current > 1){
            current -= 1;
        }
        const newsList = this.generateNewsList(current, this.state.allNews, this.state.pageSize);
        this.setState({current, newsList});
    }

    chooseAfterPage(){
        var current = this.state.current;
        const totalPage = this.state.totalPage;
        if(current < totalPage){
            current += 1;
        }
        const newsList = this.generateNewsList(current, this.state.allNews, this.state.pageSize);
        this.setState({current, newsList});
    }

    chooseFirstPage() {
        var current = 1;
        const newsList = this.generateNewsList(current, this.state.allNews, this.state.pageSize);
        this.setState({current, newsList});
    }

    chooseLastPage() {
        var current = this.state.totalPage;
        const newsList = this.generateNewsList(current, this.state.allNews, this.state.pageSize);
        this.setState({current, newsList});
    }


    render() {
        const pageList = this.state.newsList.map((ele, index)=> {
            return <div key={index} className="news_link">
                <Link to="/newscenter/admission">
                    <div className="news row">
                        <div className="newsTitle col-md-9">{ele.title}</div>
                        <div className="newsTime col-md-3">{ele.date}</div>
                    </div>
                </Link>
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
            <div className="newsWrap row">
                <div className="col-md-12 pageList">
                    {pageList}
                </div>
                <div className="pageFoot">
                    <div className="pageFootLeft">
                        <nav>
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
                        </nav>
                    </div>
                    <div className="pageMessage">
                        共{this.state.totalPage}页{this.state.totalNum}条
                    </div>
                </div>
            </div>
        )
    }
}



