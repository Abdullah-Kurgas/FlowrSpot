import { Action } from "@ngrx/store";
import { IUser } from "../models/User";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const AUTHTOKEN = 'AUTHTOKEN';

export class AuthToken implements Action {
    readonly type: string = AUTHTOKEN;

    constructor(public payload: string) { }
}

export class Login implements Action {
    readonly type: string = LOGIN;

    constructor(public payload: IUser) { }
}

export class Logout implements Action {
    readonly type: string = LOGOUT;
}

export class Register implements Action {
    readonly type: string = REGISTER;

    constructor(public payload: IUser) { }
}

export type Actions = Login | Register | AuthToken | Logout;

