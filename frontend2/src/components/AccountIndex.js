import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Box,
  Button,
  Text,
} from 'grommet';


/* eslint-disable */
class AccountIndex extends Component {
  constructor(props) {
    super(props);
    this.handlePageHistory = this.handlePageHistory.bind(this);
    if (this.props.authenticated == true) {
      this.handlePageHistory('/logIn');
    }
  }

  handlePageHistory = (path) => {
    console.log("handleOnClick", path);
    this.props.history.push(path);
  }

  render() {
    return (
      <Box>
        <Box align="center">
          <p />
          <Text>Login is required.</Text>
          <Box direction="row" align="center" gap="small" pad="medium">
            <Button primary label="Log in" onClick = { () => this.handlePageHistory('/logIn') } />
            <Button label="Sign up" onClick = { () => this.handlePageHistory('/signUp') } />
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.account.authenticate,
  balance: state.account.balance,
});

export default connect(mapStateToProps)(withRouter(AccountIndex));
