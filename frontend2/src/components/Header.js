import React, { Component } from 'react';
import { Box, Menu, Heading } from 'grommet';
import * as Icons from 'grommet-icons';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import WholesalerTv from '-!react-svg-loader!./WholesalerTv.svg';

/* eslint-disable */
class Header extends Component {
  constructor(props) {
    super(props);
    this.handlePageHistory = this.handlePageHistory.bind(this);
    this.handlePageHistory('/');
  }

  handlePageHistory = (path) => {
    console.log("handlePageHistory", path);
    this.props.history.push(path);
  }

  render() {
    return (
    <Box
      tag="header"
      background="brand"
      pad="small"
      elevation="small"
      justify="between"
      direction="row"
      align="center"
      height="30px"
    >
      <Heading level={3} margin="none">
        <WholesalerTv/>
        {/* { this.props.authenticated
          ? <strong>Welcome {this.props.user && this.props.user.email} </strong>
          : <strong>Wholesaler TV</strong> 
        } */}
      </Heading>
      <Menu
        dropAlign={{ top: 'top', left: 'left' }}
        items={[
          { label: 'Home', onClick: () => this.handlePageHistory('/') },
          { label: 'Account', onClick: () => this.handlePageHistory('/account') },
          { label: 'Ranking', onClick: () => this.handlePageHistory('/ranking') },
          { label: 'Asset', onClick: () => this.handlePageHistory('/boscoin') },
        ]}
        icon={<Icons.Menu color="white" />}
      />
    </Box>
    );
  }
}

const mapStateToProps = state => ({
  user: state.account.user,
  authenticated: state.account.authenticate,
  checked: state.account.checked,
});

export default connect(mapStateToProps)(withRouter(Header));
