import React, {Component} from "react";
import Frame_header from "./header";
class Main_view extends Component{

    render() {
        return(
            <div>
                <Frame_header/>
                {this.props.children}
            </div>
        )
    }
}
module.exports = Main_view;