import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn'
import Checkout  from '../pages/Checkout';



const Routes: React.FC = () => (
  <Switch>
    <Route exact path='/' component={SignIn} />
    <Route path='/checkout' component={Checkout} />
  </Switch>
)

export default Routes