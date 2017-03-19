import React, {Component} from "react";
import BaseMooc from "./BaseMooc";
import ERP from "./ERP";
import Erya from "./Erya";

export default class Notice extends Component {
    render() {
        return (
            <div>
                <BaseMooc/>
                <ERP/>
            </div>
        )
    }
}


