import React, {Component} from "react";
import "../../../css/wheel/rotation.css";

export default class Rotation extends Component {

    componentDidMount(){
        var tab1=document.getElementById("showImages");
        var tab2=document.getElementById("copyImages");
        tab2.innerHTML=tab1.innerHTML;
    }

    render() {
        const rotationImages = this.props.imagesSrc.map((ele,index)=>{
            return <div key={index} className="rotationLi rotationImage">
                <a href="#"><img src={ele.src}/></a>
            </div>
        });

        return (

                <div id="rotationWall">
                    <div id="rotationWrap">
                        <div id="showImages">
                            {rotationImages}
                        </div>
                        <div id="copyImages" className="copyImage"></div>
                    </div>
                </div>
        )
    }
}