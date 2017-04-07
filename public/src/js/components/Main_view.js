import React, {Component} from "react";
import Frame_header from "./header";
import Footer from "./Footer";
class Main_view extends Component {

    render() {
        return (
            <div style={{backgroundColor: '#F2ECD4'}}>
                <Frame_header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
module.exports = Main_view;