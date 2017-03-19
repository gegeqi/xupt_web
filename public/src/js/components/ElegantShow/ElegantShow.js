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
            <div className="row">
                <div className="col-sm-2" style={{border:"1px solid"}}>
                    <ul>
                        <li>明星导师</li>
                        <li>优秀学生</li>
                        <li>项目展示</li>
                        <li>孵化基地</li>
                        <li>大创中心</li>
                        <li>创新实验室</li>
                        <li>创新社团</li>
                    </ul>
                </div>
                <div className="col-sm-8" style={{border:"1px solid"}}>
                    <IncubationBase/>
                    <InnovationCommunities/>
                    <InnovationLab/>
                    <ItemShow/>
                    <PioneerCenter/>
                    <StarTeacher/>
                    <StudentMien/>
                </div>
            </div>
        )
    }
}