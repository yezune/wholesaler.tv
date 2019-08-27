import { bindActionCreators } from 'redux';
import * as accountActions from './modules/account';


import store from './index';

const { dispatch } = store;

export const AccountActions = bindActionCreators(accountActions, dispatch);