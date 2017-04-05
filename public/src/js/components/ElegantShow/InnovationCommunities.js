import React, {Component} from "react";

export default class InnovationCommunities extends Component {

  constructor() {
    super();
    this.state = {
      allItems: [
        {
          title: "2017年中国在线少儿英语行业研究所",
          content: "本报告聚焦于我国少儿英语行业，从定性和定量两个角度，全面解读了当前行业的发展状况、发展经验和特点，并展望了未来的发展趋势。",
          time: "2017-10-2",
          image: 'sj_icon_09.png'
        }, {
          title: "2017年中国在线少儿英语行业研究所",
          content: "本报告聚焦于我国少儿英语行业，从定性和定量两个角度，全面解读了当前行业的发展状况、发展经验和特点，并展望了未来的发展趋势。",
          time: "2017-10-2",
          image: "sj_icon_08.png"
        }, {
          title: "2017年中国在线少儿英语行业研究所",
          content: "本报告聚焦于我国少儿英语行业，从定性和定量两个角度，全面解读了当前行业的发展状况、发展经验和特点，并展望了未来的发展趋势。",
          time: "2017-10-2",
          image: 'sj_icon_10.png'
        }, {
          title: "2017年中国在线少儿英语行业研究所",
          content: "本报告聚焦于我国少儿英语行业，从定性和定量两个角度，全面解读了当前行业的发展状况、发展经验和特点，并展望了未来的发展趋势。",
          time: "2017-10-2",
          image: 'sj_icon_11.png'
        }, {
          title: "2017年中国在线少儿英语行业研究所",
          content: "本报告聚焦于我国少儿英语行业，从定性和定量两个角度，全面解读了当前行业的发展状况、发展经验和特点，并展望了未来的发展趋势。",
          time: "2017-10-2",
          image: 'sj_icon_12.png'
        }, {
          title: "2017年中国在线少儿英语行业研究所",
          content: "本报告聚焦于我国少儿英语行业，从定性和定量两个角度，全面解读了当前行业的发展状况、发展经验和特点，并展望了未来的发展趋势。",
          time: "2017-10-2",
          image: 'sj_icon_13.png'
        }, {
          title: "2017年中国在线少儿英语行业研究所",
          content: "本报告聚焦于我国少儿英语行业，从定性和定量两个角度，全面解读了当前行业的发展状况、发展经验和特点，并展望了未来的发展趋势。",
          time: "2017-10-2",
          image: 'sj_icon_14.png'
        }
      ]
    }
  }

  render() {

    const item = this.state.allItems.map((item, index) => {
      return <div key={index} className="elegant-list-item">
        <div><img src={"../../../../image/article-icon/" + item.image} alt="little image"/></div>
        <div>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          发布时间：
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