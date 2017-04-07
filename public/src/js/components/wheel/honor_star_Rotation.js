import React, {Component} from "react";

export default class WallRotation extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        var tab1=document.getElementById("showImages");
        var tab2=document.getElementById("copyImages");
        tab2.innerHTML=tab1.innerHTML;
        this.makeBigImage();
    }

    makeBigImage(){
        $(function(){
            var x = 10;
            var y = 20;
            $(".wallRotationImage img").mouseover(function(e){
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
        const wallRotationImages = this.props.imagesSrc.map((ele,index)=>{
            return <div key={index} className="wallRotationLi wallRotationImage">
                <a href="#"><img src={ele.src}/></a>
            </div>
        });

        return (

                <div id="wallRotationWall">
                    <div id="wallRotationWrap">
                        <div id="showImages">
                            {wallRotationImages}
                        </div>
                        <div id="copyImages" className="copyImage"></div>
                    </div>
                </div>
        )
    }
}
