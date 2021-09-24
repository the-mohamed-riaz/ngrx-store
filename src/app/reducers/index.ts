// import {
//   Action,
//   createReducer,
//   on
// } from '@ngrx/store';
// import { login, logout } from '../action/auth.actions';
// import * as _state from '../store/state';


// const _authReducer = createReducer(
//   _state.initialState,
//   on(login, (state, action:_state.i_state) => ({...sav})),
//   on(logout, (state) => state)
// );

// export function AuthReducer(state: _state.i_state | undefined, action: Action) {
//   return _authReducer(state, action)
// }

// import { login_item } from "../models/login-model";
// import { LoginAction, loginActionTypes } from "../action/auth.actions";

// const initialState: Array<login_item> = [
//   {
//     user_email: 'riaz',
//     password: 'riaz1234'
//   }
// ];

// export function LoginReducer(
//   state: Array<login_item> = initialState, action: LoginAction
// ) {
//   switch (action.type) {
//     case loginActionTypes.DO_LOGIN:
//       return [...state, action.paylod];
//     default:
//       return state;
//   }
// }

import { Action, createReducer, on } from "@ngrx/store";
import { Do_login_action } from '../action/auth.actions';
import { login_item } from '../models/login-model';

const initialState: Array<login_item> = [
  {
    user_email: 'riaz',
    password: 'riaz1234'
  }
];

const reducer = createReducer(
  initialState,
  on(Do_login_action, (state, action) => {
    return [...state, action.payload]
  })
)

export function LoginReducer(state: Array<login_item> | undefined, action: Action) {
  return reducer(state, action);
}