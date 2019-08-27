
import React, { Component } from 'react';
import {
  Box,
  Heading,
  Button,
} from 'grommet';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { BosTextInput } from './Components';
import BosInHistory from './BosInHistory';

axios.defaults.withCredentials = true;

/* eslint-disable */
class BosIn extends Component {
  constructor( props ){
    super( props );
    this.state = {
      bos_account: ''
    }
    this.getAccount = this.getAccount.bind(this);
    this.handlePageHistory = this.handlePageHistory.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handlePageHistory = (path) => {
    console.log("handlePageHistory  ", path);
    this.props.history.push(path);
  }

  updateState = (addr) => {
    this.setState({
      bos_account: addr
    })
  }

  getAccount = () => {
    console.log(this.props.user);
    const { handlePageHistory, updateState } = this;
    console.log('http://127.0.0.1:3000/api/users/'+ this.props.user.email);
    axios.get('http://127.0.0.1:3000/api/users/'+ this.props.user.email)
    .then(function(res){
      if (res.status == 200){
        if (res.data.authenticated && res.data.emailChecked) {
          console.log(res);
          updateState(res.data.bos_account);
        } else if (res.data.emailChecked != true) {
          this.handlePageHistory('/boscoin');
        }
      }
    })
    .catch(function (error) {
      handlePageHistory('/boscoin');
      console.log(error);
    })
  }

  render() {
    const { getAccount} = this;

    return (
      <Box
      flex={false}
      >
        <Box
          align="center"
          direction="column"
          justify="center"
          gap="medium"
          pad="xlarge"
        >
          <Box align="center">
          <Heading level={3} margin='none'>
            <strong>Boscoin 입금</strong>
          </Heading> 
          </Box>
          <Box direction="row" gap="medium">
          <div align="center">
            <Button 
              label='입금주소 생성' 
              primary={true} 
              onClick={ getAccount } 
            />
          </div><BosTextInput text = {this.state.bos_account} />
          </Box>
          <BosInHistory />
        </Box>
      </Box>
    )
  };
}

const mapStateToProps = state => ({
  user: state.account.user,
  authenticated: state.account.authenticate,
  checked: state.account.checked,
});

export default connect(mapStateToProps)(withRouter(BosIn));
