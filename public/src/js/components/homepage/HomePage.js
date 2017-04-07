import React, {Component} from "react";
import Frame_lunbo from "./Frame_lunbo";
import NewsWall from "./NewsWall";
import HonorWall from "./HonorWall";
import WallRotation from  "../wheel/honor_star_Rotation"

import "../../../css/wheel/honor_star_Rotation.css"

class HomePage extends Component {
    constructor(){
        super();
        this.state = {
            starImagesSrc : [
                {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492150708&di=01f0bf71444862bb353a1a2fd1e43579&imgtype=jpg&er=1&src=http%3A%2F%2Fphotocdn.sohu.com%2F20110513%2FImg307485752.jpg"},
                {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492150928&di=6e16fc42441be48ab006e8da667e5f8d&imgtype=jpg&er=1&src=http%3A%2F%2Fupload.univs.cn%2F2012%2F0904%2F1346767039315.jpg"},
                {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492150774&di=1ebf56216376703dd1358ee0512b9e6b&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.hkwb.net%2Fatt%2Fsite2%2F20140624%2F330fe087fc5dfed87a885d8fdc8d221b.jpg"},
                {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492150801&di=a0a8c5550080dfa160248ce4d7424f67&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.hdchurch.org%2Fsites%2Fdefault%2Ffiles%2F2014%2F07%2F113%2F%25E5%25A4%25A7%25E5%25AD%25A6%25E7%2594%259F%25E5%259B%25A2%25E5%25A5%2591%25E8%25AF%2597%25E7%258F%25AD%25E4%25B8%258E%25E6%259D%25A8%25E7%2589%25A7%25E5%25B8%2588%25E5%2590%2588%25E5%25BD%25B1%25E7%2595%2599%25E5%25BF%25B5.jpg"},
                {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492150834&di=53d247d3f108d0a0108854636d5318ed&imgtype=jpg&er=1&src=http%3A%2F%2Ffzdxb.cuepa.cn%2Fnewspics%2F2016%2F01%2Fs_eca9aeca4e6991205ef1d9df4c24dc59450348.jpg"},
                {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492150878&di=b87f8cdd62c78e0478affa66b65f8156&imgtype=jpg&er=1&src=http%3A%2F%2Ftw.dgut.edu.cn%2Fuploads%2Fallimg%2F130831%2F26_130831210233_1_lit.jpg"},
            ],
            honorImagesSrc : [
                {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491452500&di=6ae9c4f22d259ab7d0932cada3ba2cbb&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F89%2F85%2F70i58PIC3uX_1024.jpg"},
                {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491452553&di=29b0d81c7afcc687098d6f48a426f3ae&imgtype=jpg&er=1&src=http%3A%2F%2Farch.njtech.edu.cn%2Fppts%2FmyEditor%2Fuploadfile%2F20100126133859447.jpg"},
                {src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2038569967,1021965653&fm=23&gp=0.jpg"},
                {src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=11830560,31045081&fm=23&gp=0.jpg"},
                {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491452642&di=9fe5aed652f0c1fd5fd1c85a6a0ab467&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.xauat-hqc.com%2Fupload%2F2014-11%2F17%2Fyouxiuyundongyuanrongyuzhengshu.jpg"},
                {src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1373802216,3598748352&fm=23&gp=0.jpg"},
                {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491464224&di=caa78a56167698d604694d72751cd5c1&imgtype=jpg&er=1&src=http%3A%2F%2Fy3.ifengimg.com%2Fcmpp%2F2014%2F11%2F19%2F11%2Fbc6dfdd3-de68-4523-a7a7-a7b2c31fc800.jpg"}
            ]
        };
    }
    render() {
        return (
            <div>
                <Frame_lunbo/>
                <NewsWall/>
                <div className="allWallWrap">
                    <div id="starWallTile"className="wallTile">西邮明星</div>
                    <WallRotation imagesSrc = {this.state.starImagesSrc} />
                </div>
                <div className="allWallWrap">
                    <div id="honorWallTile"className="wallTile">荣誉墙</div>
                    <HonorWall imagesSrc = {this.state.honorImagesSrc}/>
                </div>
            </div>
        )
    }
}
module.exports = HomePage;