import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Box,
  Button,
  Text,
} from 'grommet';


/* eslint-disable */
class BosInOutIndex extends Component {
  constructor(props) {
    super(props);
    this.handlePageHistory = this.handlePageHistory.bind(this);
  }

  handlePageHistory = (path) => {
    console.log("handlePageHistory", path);
    if (this.props.authenticated == true) {   
      this.props.history.push(path);
    }
  }

  render() {
    return (
      <Box>
        <Box align="center">
          <p />
          <Text>Bos In & Out</Text>
          <Box direction="row" align="center" gap="small" pad="medium">
            <Button primary label="Bos in" onClick = { () => this.handlePageHistory('/boscoinIn') } />
            <Button label="Bos out" onClick = { () => this.handlePageHistory('/boscoinOut') } />
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

export default connect(mapStateToProps)(withRouter(BosInOutIndex));
