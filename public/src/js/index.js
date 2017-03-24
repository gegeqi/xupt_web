import React from 'react';
import {render} from 'react-dom';
import Main_view from "./components/Main_view";
import HomePage from "./components/homepage/HomePage";
import Community from "./components/community/Community";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import InnovationData from "./components/innovationData/InnovationData";
import Competition from "./components/innovationData/Competition";
import AwardItems from "./components/innovationData/AwardItems";
import Incubation from "./components/innovationData/Incubation";
import NewsCenter from "./components/newscenter/NewsCenter";
import NewsWall from "./components/newscenter/NewsWall";
import XUHotNews from "./components/newscenter/XUHotNews";
import AdmissionInfo from "./components/newscenter/AdmissionInfo";
import OnlineClass from "./components/onlineclass/OnlineClass";
import ElegantShow from "./components/ElegantShow/ElegantShow";
import InnovationCommunities from "./components/ElegantShow/InnovationCommunities";
import IncubationBase from "./components/ElegantShow/IncubationBase";
import ItemShow from "./components/ElegantShow/ItemShow";
import InnovationLab from "./components/ElegantShow/InnovationLab";
import PioneerCenter from "./components/ElegantShow/PioneerCenter";
import StarTeacher from "./components/ElegantShow/StarTeacher";
import StudentMien from "./components/ElegantShow/StudentMien";

render(
    <Router history={browserHistory}>
        <Route path="/" component={Main_view}>
            <IndexRoute component={HomePage}/>
            <Route path="/community" component={Community}/>
            <Route path="/innovationdata" component={InnovationData}>
                <IndexRoute component={Competition}/>
                <Route path="/innovationdata/incubation" component={Incubation}/>
                <Route path="/innovationdata/awarditems" component={AwardItems}/>
            </Route>
            <Route path="/newscenter" component={NewsCenter}>
                <IndexRoute component={NewsWall}/>
                <Route path="/newscenter/xuhotnews" component={XUHotNews}/>
                <Route path="/newscenter/admission" component={AdmissionInfo}/>
            </Route>
            <Route path="/onlineclass" component={OnlineClass}/>
            <Route path="/elegantShow" component={ElegantShow}>
                <IndexRoute component={InnovationCommunities}/>
                <Route path='/elegantShow/' component={IncubationBase}/>
                <Route path='/elegantShow/itemShow' component={ItemShow}/>
                <Route path='/elegantShow/innovationLab' component={InnovationLab}/>
                <Route path='/elegantShow/pioneerCenter' component={PioneerCenter}/>
                <Route path='/elegantShow/starTeacher' component={StarTeacher}/>
                <Route path='/elegantShow/studentMien' component={StudentMien}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('react-root'));

