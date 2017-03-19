import React, {Component} from "react";
import NewsCategory from "./NewsCategory";
import NewsWall from "./NewsWall";
import "../../../css/index-page.css";

export default class NewsCenter extends Component {
    render() {
        return (
            <div classID="news">
                <NewsCategory/>
                <NewsWall/>
            </div>
        )
    }
}