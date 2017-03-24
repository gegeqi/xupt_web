import React, {Component} from "react";

export default class InnovationCommunities extends Component {

  constructor() {
    super();
    this.state = {
      allItems: [
        {
          title: "2017年中国在线少儿英语行业研究所",
          content: "本报告聚焦于我国少儿英语行业，从定性和定量两个角度，全面解读了当前行业的发展状况、发展经验和特点，并展望了未来的发展趋势。",
          time: "发布时间：2017-10-2"
        }, {
          title: "2017年中国在线少儿英语行业研究所",
          content: "本报告聚焦于我国少儿英语行业，从定性和定量两个角度，全面解读了当前行业的发展状况、发展经验和特点，并展望了未来的发展趋势。",
          time: "发布时间：2017-10-2"
        }, {
          title: "2017年中国在线少儿英语行业研究所",
          content: "本报告聚焦于我国少儿英语行业，从定性和定量两个角度，全面解读了当前行业的发展状况、发展经验和特点，并展望了未来的发展趋势。",
          time: "发布时间：2017-10-2"
        }, {
          title: "2017年中国在线少儿英语行业研究所",
          content: "本报告聚焦于我国少儿英语行业，从定性和定量两个角度，全面解读了当前行业的发展状况、发展经验和特点，并展望了未来的发展趋势。",
          time: "发布时间：2017-10-2"
        }, {
          title: "2017年中国在线少儿英语行业研究所",
          content: "本报告聚焦于我国少儿英语行业，从定性和定量两个角度，全面解读了当前行业的发展状况、发展经验和特点，并展望了未来的发展趋势。",
          time: "发布时间：2017-10-2"
        }, {
          title: "2017年中国在线少儿英语行业研究所",
          content: "本报告聚焦于我国少儿英语行业，从定性和定量两个角度，全面解读了当前行业的发展状况、发展经验和特点，并展望了未来的发展趋势。",
          time: "发布时间：2017-10-2"
        }, {
          title: "2017年中国在线少儿英语行业研究所",
          content: "本报告聚焦于我国少儿英语行业，从定性和定量两个角度，全面解读了当前行业的发展状况、发展经验和特点，并展望了未来的发展趋势。",
          time: "发布时间：2017-10-2"
        }
      ]
    }
  }

  componentWillMount() {
    var totalNum = this.state.allItems.length;

  }

  render() {

    const item = this.state.allItems.map((item, index) => {
      return <div key={index} className="elegant-list-item">
        <div><img src="" alt="little image"/></div>
        <div>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <time>{item.time}</time>
        </div>
      </div>
    });

    return (
        <div className="elegant-list">
          {item}
        </div>
    )
  }
}