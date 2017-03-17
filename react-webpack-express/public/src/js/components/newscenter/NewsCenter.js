import React, {Component} from "react";
import NEAMC from "./NEAMC";
import Notice from "./Notice";
import XiyouHotSpot from "./XiyouHotSpot";

export default class NewsCenter extends Component {
    render() {
        return (
            <div>
                <NEAMC/>
                <Notice/>
                <XiyouHotSpot/>
            </div>
        )
    }
}