// import axios from 'axios';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FORGOT_REQUEST,
  FORGOT_SUCCESS,
  FORGOT_FAILURE,
  RESET_REQUEST,
  RESET_SUCCESS,
  RESET_FAILURE,
  ONLINE,
  OFFLINE,
} from '../action-type';
import { setUserAuth, setObject } from '../../middleware';
import axios from 'axios';
import { AppURLs } from '../../constants/constant';

//Login

function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    entities: payload,
  };
}

function loginFailure(message) {
  return {
    type: LOGIN_FAILURE,
    error: message,
  };
}

export function login(credentials, cb) {
  return (dispatch, getState) => {
    dispatch(loginRequest());
    return axios
      .post(AppURLs.Login, credentials)
      .then((response) => {
        if (response.data.success) {
          let data = response.data.success.user;
          let extraData = response.data.success.userData
          if (extraData) {
            data.image = extraData.image;
            data.phone = extraData.phone;
            data.isd_code = extraData.isd_code
          }
          dispatch(loginSuccess({ users: { LoginData: data } })),
            setObject('User', data),
            setUserAuth(data).then((res) => {
              cb(true);
            });
        } else {
          cb(false, response.data.message);
        }
      })
      .catch((error) => {

        return dispatch(loginFailure(error));
      });
  };
}

export function removeUserdata(cb) {
  return (dispatch, getState) => {
    getState().entities.user.LoginData = [];
    cb();
  };
}

export function setUserdata(data) {
  return (dispatch, getState) => {
    getState().entities.user.LoginData = data;
  };
}

export function setUserLanguage(data) {
  return (dispatch, getState) => {
    getState().entities.user.language = data;
  };
}

function Online() {
  return {
    type: ONLINE,
  };
}

function Offline() {
  return {
    type: OFFLINE,
  };
}

export function setNetworkdata(data) {
  return (dispatch, getState) => {
    if (data) {
      dispatch(Online());
    } else {
      dispatch(Offline());
    }
  };
}

//SignUp

function RegisterRequest() {
  return {
    type: REGISTER_REQUEST,
  };
}

function RegisterSuccess(payload) {
  return {
    type: REGISTER_SUCCESS,
    entities: payload,
  };
}

function RegisterFailure(message) {
  return {
    type: REGISTER_FAILURE,
    error: message,
  };
}

export function Register(credentials, cb) {
  return (dispatch, getState) => {
    dispatch(RegisterRequest());
    return axios
      .post(AppURLs.Register, credentials)
      .then((response) => {
        debugger
        if (response.data.success) {
          let data = response.data.success.data;
          dispatch(RegisterSuccess({ users: { LoginData: data } })),
            setObject('User', data),
            setUserAuth(data).then((res) => {
              cb(true);
            });
        } else {
          cb(false, response.data.message);
        }
      })
      .catch((error) => {
        debugger
        console.log(error)
        return dispatch(RegisterFailure(error));
      });
  };
}

//Forgot Password

function forgotRequest() {
  return {
    type: FORGOT_REQUEST,
  };
}

function forgotSuccess(payload) {
  return {
    type: FORGOT_SUCCESS,
    entities: payload,
  };
}

function forgotFailure(message) {
  return {
    type: FORGOT_FAILURE,
    error: message,
  };
}

export function Forgot(email, cb) {
  return (dispatch, getState) => {
    dispatch(forgotRequest());
    return axios
      .post(AppURLs.Forget, email)
      .then((response) => {
        let data = response.data.msg;
        if (response.data.status) {
          dispatch(forgotSuccess()), cb(true, data);
        } else {
          cb(false, data);
        }
      })
      .catch((error) => {
        return dispatch(forgotFailure(error));
      });
  };
}

//Reset password

function resetRequest() {
  return {
    type: RESET_REQUEST,
  };
}

function resetSuccess(payload) {
  return {
    type: RESET_SUCCESS,
    entities: payload,
  };
}

function resetFailure(message) {
  return {
    type: RESET_FAILURE,
    error: message,
  };
}

export function Reset(credentials, cb) {
  return (dispatch, getState) => {
    dispatch(resetRequest());
    return axios
      .post(AppURLs.Reset, credentials)
      .then((response) => {
        let data = response.data.success;
        if (data) {
          dispatch(resetSuccess()), cb(true, data.msg);
        } else {
          cb(false, response.data.message);
        }
      })
      .catch((error) => {
        return dispatch(resetFailure(error));
      });
  };
}
