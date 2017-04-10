import React, {Component} from "react";
import Pagination from "../Pagination";

export default class Incubation extends Component {

    constructor() {
        super();
        this.state = {
            allItems: [
                {
                    title: "我不是周立波",
                    content: "【周立波持枪持毒案开审，律师到庭后一言不发】周立波持枪持毒案在美国正式开庭审理，如果罪名成立，或将面临2年以上徒刑。最新现场消息，纽约时间4月7日中午12点50分左右，周立波代理律师莫虎现身，面对媒体发问，只字不语",
                    time: "2017-4-8",
                    image: "sj_icon_18.png"
                },
                {
                    title: "我不是周立波",
                    content: "【周立波持枪持毒案开审，律师到庭后一言不发】周立波持枪持毒案在美国正式开庭审理，如果罪名成立，或将面临2年以上徒刑。最新现场消息，纽约时间4月7日中午12点50分左右，周立波代理律师莫虎现身，面对媒体发问，只字不语",
                    time: "2017-4-8",
                    image: "sj_icon_17.png"
                },
                {
                    title: "我不是周立波",
                    content: "【周立波持枪持毒案开审，律师到庭后一言不发】周立波持枪持毒案在美国正式开庭审理，如果罪名成立，或将面临2年以上徒刑。最新现场消息，纽约时间4月7日中午12点50分左右，周立波代理律师莫虎现身，面对媒体发问，只字不语",
                    time: "2017-4-8",
                    image: "sj_icon_16.png"
                },
                {
                    title: "我不是周立波",
                    content: "【周立波持枪持毒案开审，律师到庭后一言不发】周立波持枪持毒案在美国正式开庭审理，如果罪名成立，或将面临2年以上徒刑。最新现场消息，纽约时间4月7日中午12点50分左右，周立波代理律师莫虎现身，面对媒体发问，只字不语",
                    time: "2017-4-8",
                    image: "sj_icon_15.png"
                },
                {
                    title: "我不是周立波",
                    content: "【周立波持枪持毒案开审，律师到庭后一言不发】周立波持枪持毒案在美国正式开庭审理，如果罪名成立，或将面临2年以上徒刑。最新现场消息，纽约时间4月7日中午12点50分左右，周立波代理律师莫虎现身，面对媒体发问，只字不语",
                    time: "2017-4-8",
                    image: "sj_icon_14.png"
                },
                {
                    title: "我不是周立波",
                    content: "【周立波持枪持毒案开审，律师到庭后一言不发】周立波持枪持毒案在美国正式开庭审理，如果罪名成立，或将面临2年以上徒刑。最新现场消息，纽约时间4月7日中午12点50分左右，周立波代理律师莫虎现身，面对媒体发问，只字不语",
                    time: "2017-4-8",
                    image: "sj_icon_13.png"
                },
                {
                    title: "我不是周立波",
                    content: "【周立波持枪持毒案开审，律师到庭后一言不发】周立波持枪持毒案在美国正式开庭审理，如果罪名成立，或将面临2年以上徒刑。最新现场消息，纽约时间4月7日中午12点50分左右，周立波代理律师莫虎现身，面对媒体发问，只字不语",
                    time: "2017-4-8",
                    image: "sj_icon_12.png"
                }
            ]
        }
    }

    render() {
        const item = function (item) {
            return (
                <div className="competition-list-item">
                    <div><img src={"../../../../image/article-icon/" + item.image} alt="little image"/></div>
                    <div>
                        <h3 className="competition-h3">{item.title}</h3>
                        <p className="competition-p">{item.content}</p>
                        发布时间：
                        <time className="competition-time">{item.time}</time>
                    </div>
                </div>
            )
        };

        return (
            <Pagination list={this.state.allItems} item={item} listStyle="competition-list" pageSize="5"/>
        )
    }
}
