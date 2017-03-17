import React, {Component} from "react";
import BaseMooc from "./BaseMooc";
import ERP from "./ERP";
import Erya from "./Erya";
import Laboratory from "./Laboratory";
import OccupationalPlanning from "./OccupationalPlanning";
import SkillsTraining from "./SkillsTraining";
import Spoc from "./Spoc";


export default class Notice extends Component {
    render() {
        return (
            <div>
                <BaseMooc/>
                <ERP/>
                <Erya/>
                <Laboratory/>
                <OccupationalPlanning/>
                <SkillsTraining/>
                <Spoc/>
            </div>
        )
    }
}