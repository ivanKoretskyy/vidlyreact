import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Contacts from '../Contacts/Contacts';
import Login from '../Login/Login';
import User from '../User/User';

export interface MainProps {

}

export interface MainState {

}

class Main extends React.Component<MainProps, MainState> {
  // state = { :  }
  render() {
    return (
      <div>
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/login' component={Login} />
          <Route path='/user' component={User} />
          <Redirect from='/' to='dashboard' />
        </Switch>
      </div>
    );
  }
}

export default Main;