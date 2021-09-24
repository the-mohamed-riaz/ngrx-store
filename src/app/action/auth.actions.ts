// import { Action } from "@ngrx/store";
// import { login_item } from "../models/login-model";

// export enum loginActionTypes {
//   DO_LOGIN = '[LOGIN] do login'
// }

// export class Do_login_action implements Action {
//   readonly type = loginActionTypes.DO_LOGIN;
//   constructor(public paylod: login_item) {
//   }
// }

// export type LoginAction = Do_login_action;

import { createAction, props } from "@ngrx/store";
import { login_item } from "../models/login-model";

export const Do_login_action = createAction(
  '[LOGIN] Do Login',
  props<{ payload: login_item }>()
);