import React from 'react';
import {render} from 'react-dom';
import Main_view from "./components/Main_view";
import HomePage from "./components/homepage/HomePage";
import Community from "./components/community/Community";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import InnovationData from "./components/innovationData/InnovationData";
import NewsCenter from "./components/newscenter/NewsCenter";
import NewsWall from "./components/newscenter/NewsWall";
import XUHotNews from "./components/newscenter/XUHotNews";
import AdmissionInfo from "./components/newscenter/AdmissionInfo";
import OnlineClass from "./components/onlineclass/OnlineClass";
import TalentShow from "./components/talentShow/TelentShow";


render(
    <Router history={browserHistory}>
        <Route path="/" component={Main_view}>
            <IndexRoute component={HomePage}/>
            <Route path="/community" component={Community}/>
            <Route path="/innovationdata" component={InnovationData}/>
            <Route path="/newscenter" component={NewsCenter}>
                <IndexRoute component={NewsWall}/>
                <Route path="/newscenter/xuhotnews" component={XUHotNews}/>
                <Route path="/newscenter/admission" component={AdmissionInfo}/>
            </Route>
            <Route path="/onlineclass" component={OnlineClass}/>
            <Route path="/talentshow" component={TalentShow}/>
        </Route>
    </Router>,
    document.getElementById('react-root'));

