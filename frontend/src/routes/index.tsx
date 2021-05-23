import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn'
import Checkout  from '../pages/Checkout';
import Home from "../pages/Home"



const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path='/signin' component={SignIn} />
    <Route path='/checkout' component={Checkout} />
  </Switch>
)

export default Routes