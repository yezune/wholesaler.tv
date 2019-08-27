import React, { Component } from 'react';
import { Box } from 'grommet';
import { connect } from 'react-redux';
import {
  BrowserRouter, Route,
} from 'react-router-dom';
import AccountLogIndex from '../components/AccountIndex';
import AccountLogInOut from '../components/AccountLogInOut';
import AccountSignUp from '../components/AccountSignUp';

/* eslint-disable */
class AccountMain extends Component {

  render() {
    return (
      <BrowserRouter>
        <Box flex={true}>
          <Route exact path="/account" component={AccountLogIndex} />
          <Route exact path="/signUp" component={AccountSignUp} />
          <Route exact path="/logIn" component={AccountLogInOut} />
        </Box>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.account.authenticate,
  balance: state.account.balance,
});

export default connect(mapStateToProps)(AccountMain);
