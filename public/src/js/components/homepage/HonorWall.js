import React, {Component} from "react";
import "../../../css/homepage/honorWall.css";

class HonorWall extends Component {
    constructor(){
        super();
        this.state = {
            imagesSrc : [
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
    componentDidMount(){
        var tab1=document.getElementById("showImages");
        var tab2=document.getElementById("copyImages1");
        tab2.innerHTML=tab1.innerHTML;
        this.makeBigImage();
    }

    makeBigImage(){
        $(function(){
            var x = 10;
            var y = 20;
            $(".honorImage img").mouseover(function(e){
                this.myTitle = this.title;
                this.title = "";
                var imgTitle = this.myTitle ? "<br/>" + this.myTitle : "";
                var tooltip = "<div id='tooltip'><img src='"+ $(this).attr("src") +"' width='500px' height='300px' alt='产品预览图'/>"+imgTitle+"<\/div>"; //创建 div 元素
                $("body").append(tooltip);	//把它追加到文档中
                $("#tooltip")
                    .css({
                        "top": (e.pageY-300-y) + "px",
                        "left":  (e.pageX+x)  + "px"
                    }).show("fast");	  //设置x坐标和y坐标，并且显示
            }).mouseout(function(){
                this.title = this.myTitle;
                $("#tooltip").remove();	 //移除
            }).mousemove(function(e){
                $("#tooltip")
                    .css({
                        "top": (e.pageY-300-y) + "px",
                        "left":  (e.pageX+x)  + "px"
                    });
            });
        });
    }

    render() {
        const honorImages = this.state.imagesSrc.map((ele,index)=>{
            return <div key={index} className="honorli honorImage">
                <a href="#"><img src={ele.src}/></a>
            </div>
        });

        return (
            <div id="honor">
                <div id="honorWall">
                    <div id="honorwrap">
                        <div id="showImages">
                            {honorImages}
                        </div>
                        <div id="copyImages1" className="copyImage"></div>
                    </div>
                </div>
            </div>
    )
    }
}

module.exports = HonorWall;