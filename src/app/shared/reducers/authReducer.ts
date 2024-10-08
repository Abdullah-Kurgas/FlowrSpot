import * as AuthActions from '../actions/authAction';
import { IUser } from '../models/User';

const initialUser = JSON.parse(localStorage.getItem('fsUserData') || 'null');
const initialAuthToken = localStorage.getItem('authToken');

export function authReducer(state: string | null = initialAuthToken, action: any) {
  switch (action.type) {
    case AuthActions.AUTHTOKEN:
      localStorage.setItem('authToken', action.payload);
      return state = action.payload;

      case AuthActions.LOGOUT:
        localStorage.removeItem('authToken');
        return state = null;

    default:
      return state;
  }
};


export function userReducer(state: IUser | null = initialUser, action: any) {
    switch (action.type) {
      case AuthActions.LOGIN:
        localStorage.setItem('fsUserData', JSON.stringify(action.payload));
        return Object.assign({}, state, action.payload);

      case AuthActions.LOGOUT:
      localStorage.removeItem('fsUserData');
      return state = null;
      
      case AuthActions.REGISTER:
        localStorage.setItem('fsUserData', JSON.stringify(action.payload));
        return Object.assign({}, state, action.payload);
      
      default:
        return state;
    }
};
