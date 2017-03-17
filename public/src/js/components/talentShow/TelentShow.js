import React, {Component} from "react";
import IncubationBase from "./IncubationBase";
import InnovationCommunities from "./InnovationCommunities";
import InnovationLab from "./InnovationLab";
import ItemShow from "./ItemShow";
import PioneerCenter from "./PioneerCenter";
import StarTeacher from "./StarTeacher";
import StudentMien from "./StudentMien";

export default class TelentShow extends Component {
    render() {
        return (
            <div>
                <IncubationBase/>
                <InnovationCommunities/>
                <InnovationLab/>
                <ItemShow/>
                <PioneerCenter/>
                <StarTeacher/>
                <StudentMien/>
            </div>
        )
    }
}