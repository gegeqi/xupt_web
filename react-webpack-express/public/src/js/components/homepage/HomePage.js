import React, {Component} from "react";
import Frame_lunbo from "./Frame_lunbo";
import HonorWall from "./HonorWall";
import NewsWall from "./NewsWall";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Frame_lunbo/>
                <NewsWall/>
                <HonorWall/>
            </div>
        )
    }
}
module.exports = HomePage;