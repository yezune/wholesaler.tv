import React, { Component } from 'react';
import {
  Box, Heading, Button, Text,
} from 'grommet';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BosTextInput } from './Components';

/* eslint-disable */
class AccountSignUp extends Component {
  constructor( props ){
    super( props );
    this.state = {
      user: {
        id: '',
        password: '',
      },
    }
    this.handleId = this.handleId.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  handleId = (e) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        id: e.target.value,
      }
    });
  }

  handlePassword = (e) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        password: e.target.value,
      }
    });
  }

  logIn = () => {
    const { user } = this.state;
    axios.post('http://127.0.0.1:3000/api/signUp', { uid: user.id, password: user.password })
    .then(function (response) {
      const { token } = response;
      console.log('Response status : ', response.status, ' Response token : ', token);
      if (response.status == 200) {
        console.log(response.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { user } = this.state;
    const { handleId, handlePassword, logIn } = this;

    return (
      <Box flex>
        <Box
          align="center"
          direction="row-responsive"
          justify="center"
          gap="medium"
          pad="xlarge"
        >
          <Box
            flex={false}
            align="center"
            pad="medium"
            background={{ color: '#FFFFFF', opacity: 'strong' }}
            round="xsmall"
            gap="small"
            overflow="auto"
          >
            <div align="center" direction="row">
              <Text>SNS 간편가입</Text>
              <Box direction="column" align="center" gap="small" pad="medium">
                <Box
                  justify="center"
                  align="center"
                  height="50px"
                  width="300px"
                >
                  <Button primary label="Telegram 계정으로 간편가입" fill onClick={() => {}} />
                </Box>
                <Box
                  justify="center"
                  align="center"
                  height="50px"
                  width="300px"
                >
                  <Button primary label="Google 계정으로 간편가입" fill onClick={() => {}} />
                </Box>
              </Box>
            </div>
            <form className="form-login"  align="center">
              <Heading level={3} margin="none">
                <strong>직접 가입</strong>
              </Heading>
              <Box pad={{ top: 'medium' }} gap="small">
                <span>
                  ID <BosTextInput id="Id" text={user.id} action={ handleId }/>
                </span>
                <div>
                  PASSWORD <BosTextInput id="Password" text = { user.password } action = { handlePassword }/>
                </div>
                <div align="center">
                  <Button label="Sign Up" primary onClick = { logIn } />
                </div>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    );
  }
}

const { object, bool, number } = PropTypes;

const mapStateToProps = state => ({
  user: state.account.user,
  authenticated: state.account.authenticate,
  balance: state.account.balance,
});

export default connect(mapStateToProps)(AccountSignUp);
