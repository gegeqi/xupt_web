import React, {Component} from "react";
import Competition from "./Competition";
import Incubation from "./Incubation";
import Library from "./Library";

export default class XiyouHotSpot extends Component {
    render() {
        return (
            <div>
                <Competition/>
                <Incubation/>
                <Library/>
            </div>
        )
    }
}