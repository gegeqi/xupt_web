import React, {Component} from "react";
import "../../../css/homepage/honorWall.css";

export default class HonorWall extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var tab1=document.getElementById("showImages1");
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
                var tooltip = "<div id='tooltip1'><img src='"+ $(this).attr("src") +"' width='500px' height='300px' alt='产品预览图'/>"+imgTitle+"<\/div>"; //创建 div 元素
                $("body").append(tooltip);	//把它追加到文档中
                $("#tooltip1")
                    .css({
                        "top": (e.pageY-300-y) + "px",
                        "left":  (e.pageX+x)  + "px"
                    }).show("fast");	  //设置x坐标和y坐标，并且显示
            }).mouseout(function(){
                this.title = this.myTitle;
                $("#tooltip1").remove();	 //移除
            }).mousemove(function(e){
                $("#tooltip1")
                    .css({
                        "top": (e.pageY-300-y) + "px",
                        "left":  (e.pageX+x)  + "px"
                    });
            });
        });
    }

    render() {
        const honorImages = this.props.imagesSrc.map((ele,index)=>{
            return <div key={index} className="honorli honorImage">
                <a href="#"><img src={ele.src}/></a>
            </div>
        });

        return (

                <div id="honorWall1">
                    <div id="honorwrap1">
                        <div id="showImages1">
                            {honorImages}
                        </div>
                        <div id="copyImages1" className="copyImage"></div>
                    </div>
                </div>
        )
    }
}