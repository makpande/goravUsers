import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Nav from './components/nav';
import Users from './components/users';
import Professions from './components/professions';
import UserShow from './components/user_show';
import ProfessionShow from './components/profession_show';

export default (
  <Route path="/" component={App}>

    <Route path="/users" component={Users}/>
    <Route path="/professions" component={Professions}/>
    <Route path="users/:id" component={UserShow}/>
    <Route path="professions/:id" component={ProfessionShow}/>
    <Route path="users/professions/:id" component={ProfessionShow}/>
  </Route>
);
