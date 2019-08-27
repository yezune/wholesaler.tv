import React, { Component } from 'react';
import { Box } from 'grommet';
import { connect } from 'react-redux';
import {
  BrowserRouter, Route,
} from 'react-router-dom';
import BosInOutIndex from '../components/BosInOutIndex';
import BosIn from '../components/BosIn';
import BosOut from '../components/BosOut';

/* eslint-disable */
class BosInOutMain extends Component {
  constructor(props, context) {
    super(props, context);
    this.props.history.push('/boscoin');
  }

  render() {
    return (
      <BrowserRouter>
        <Box flex={true}>
          <Route exact path='/boscoin' component={BosInOutIndex} />
          <Route exact path='/boscoinIn' component={BosIn} />
          <Route exact path='/boscoinOut' component={BosOut} />
        </Box>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.account.authenticate,
  balance: state.account.balance,
});

export default connect(mapStateToProps)(BosInOutMain);
