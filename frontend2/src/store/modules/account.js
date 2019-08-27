// action type
const UPDATE_BALANCE = 'account/UPDATE_BALANCE';
const UPDATE_AUTHENTICATED = 'account/AUTHENTICATED';
const UPDATE_USER = 'account/UPDATE_USER';

// action creators
export function updateBalance(balance) {
  return { type: UPDATE_BALANCE, balance };
}
export function updateAuth(authenticate) {
  return { type: UPDATE_AUTHENTICATED, authenticate };
}
export function updateUser(user) {
  return { type: UPDATE_USER, user }
}

// initial state
const initialState = {
  user: {
    email: '',
    balance: 0,
  },
  authenticate: false,
  checked: false,
};

// reducers
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BALANCE:
      return {
        ...state,
        user: {
          ...state.user,
          balance: action.balance,
        },
      };
    case UPDATE_AUTHENTICATED:
      console.log(action);
      return {
        authenticate: action.authenticate,
        checked: true,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
