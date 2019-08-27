/* eslint-disable */
import React, { Component } from 'react';
import {
  Box, Heading, Button,
} from 'grommet';
import axios from 'axios';
import { connect } from 'react-redux';
import { BosTextInput } from './Components';
import { AccountActions } from '../store/actionCreators';

axios.defaults.withCredentials = true;

class AccountLogin extends Component {
  constructor( props ){
    super( props );
    this.state = {
      user: {
        email: '',
        password: '',
      },
      message: '',
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.showMessage = this.showMessage.bind(this);
    this.handlePageHistory = this.handlePageHistory.bind(this);
  }

  handleEmail = (e) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        email: e.target.value,
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

  showMessage = (m) => {
    this.setState({
      ...this.state,
      message: m
    });
  }

  logIn = () => {
    console.log(this.props.authenticated);
    const { showMessage } = this;
    const { user } = this.state;
    axios.post('http://127.0.0.1:3000/api/logIn', { email: user.email, password: user.password })
    .then(function(res){
      if (res.status == 200){
        if (res.data.emailChecked == true) {
          AccountActions.updateAuth(true);
          AccountActions.updateUser(res.data.user);
          console.log(res);
        } else if (res.data.emailChecked != true) {
          showMessage('already logged in using other account');
        }
      }
    })
    .catch(function (error) {
      showMessage('Incorrect email or password')
      console.log(error);
    })
    this.setState({
      ...this.state,
      user: {
        email: '',
        password: '',
      },
    });
  }

  logOut = () => {
    console.log(this.props.authenticated);
    const { showMessage } = this;
    const { user } = this.props;
    axios.post('http://127.0.0.1:3000/api/logOut', { email: user.email })
    .then(function(res){
      if (res.status == 200){
        if (res.data.emailChecked == true && res.data.authenticated == false) {
          AccountActions.updateAuth(false);
          AccountActions.updateUser(res.data.user);
          console.log(res);
        } else if (res.status == 401) {
          showMessage('not log in status');
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handlePageHistory = (path) => {
    console.log("handleOnClick", path);
    this.props.history.push(path);
  }

  render() {
    const { user } = this.state;
    const { handleEmail, handlePassword, logIn, logOut } = this;

    return (
      <Box>
        <HeaderLogIn text="Log in" />
        <Box
          align="center"
          justify="center"
          gap="medium"
          pad="small"
        >
          { this.props.authenticated 
            ? <form className="form-logout">
                <Box pad={{ top: 'medium' }} gap="small">
                  <div>
                    email : { this.props.user && this.props.user.email }
                  </div>
                  <div>
                    balance : { this.props.user && this.props.user.balance.toString() }
                  </div>
                  <div align="center">
                    <Button label="Log out" primary onClick = { logOut } />
                  </div>
                </Box>
              </form>
            : <form className="form-login">
                <Box pad={{ top: 'small' }} gap="small">
                  <div>
                    email :
                    {''}
                    <BosTextInput id="Id" text={user.email} action={ handleEmail }/>
                  </div>
                  <div>
                    password :
                    {''}
                    <BosTextInput id="Password" text = { user.password } action = { handlePassword }/>
                  </div>
                  <div align="center">
                    <Button label="Log in" primary onClick = { logIn } />
                  </div>
                  <div align="center">
                    { this.state.message }
                  </div>
                </Box>
              </form>
          }
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  user: state.account.user,
  authenticated: state.account.authenticate,
  checked: state.account.checked,
});

const HeaderLogIn = ({ text }) => (
  <div align="center">
    <p />
    <p />
    <Heading level={5} margin="none">
      <strong>{text}</strong>
    </Heading>
  </div>
);

export default connect(mapStateToProps)(AccountLogin);
