import React from 'react';
import PropTypes from 'prop-types';

import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from '../Components/withAuthorization';

const HomePage = (props, { authUser }) =>
  <div>
    <h1>HomePage: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>

HomePage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
