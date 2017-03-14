import React from 'react';
<<<<<<< HEAD
import {render} from 'react-dom';
import Main_view from "./components/Main_view";
import HomePage from "./components/homepage/HomePage";
import Community from "./components/community/Community";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import InnovationData from "./components/innovationData/InnovationData";
import NewsCenter from "./components/newscenter/NewsCenter";
import OnlineClass from "./components/onlineclass/OnlineClass";
import TalentShow from "./components/talentShow/TelentShow";

render(
    <Router history={browserHistory}>
        <Route path="/" component={Main_view}>
            <IndexRoute component={HomePage}/>
            <Route path="/community" component={Community}/>
            <Route path="/innovationdata" component={InnovationData}/>
            <Route path="/newscenter" component={NewsCenter}/>
            <Route path="/onlineclass" component={OnlineClass}/>
            <Route path="/talentshow" component={TalentShow}/>
        </Route>
    </Router>,
    document.getElementById('react-root')
=======
import { render } from 'react-dom';
import IndexPage from './components/IndexPage';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import { Router, Route, browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/" component={IndexPage}>
      <Route path="/tab1" component={Tab1} />
      <Route path="/tab2" component={Tab2} />
    </Route>
  </Router>,
  document.getElementById('react-root')
>>>>>>> upstream/dev
);
