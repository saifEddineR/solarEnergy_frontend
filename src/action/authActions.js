import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
  CHECK_USER,
  GET_PRODUCTS,
  GET_PROJECTS,
  GET_SERVICES,
} from './types';

import axios from 'axios';

export const registerInfo = (info) => (dispatch) => {
  axios
    .post('/login', info)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      })
    );
};

export const loadUser = () => (dispatch) => {
  axios
    .get('/login')
    .then((res) => {
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOAD_USER_FAIL,
        payload: err.response.data.msg,
      });
    });
};

export const loginUser = (data) => (dispatch) => {
  axios
    .post('/login', data)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.errors,
      });
    });
};

export const checkUser = () => (dispatch) => {
  axios
    .get('/login/auth', { headers: { 'auth-token': localStorage.getItem('token') } })
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: CHECK_USER,
      });
    })
    .catch((err) => console.log(err));
};
export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
// get data from database (projects, products, services) _________
export const getProducts = () => (dispatch) => {
  axios
    .get('/products')
    .then((res) => dispatch({ type: GET_PRODUCTS, payload: res.data }))
    .catch((err) => console.log(err));
};
export const getProjects = () => (dispatch) => {
  axios
    .get('/projects')
    .then((res) => dispatch({ type: GET_PROJECTS, payload: res.data }))
    .catch((err) => console.log(err));
};
export const getServices = () => (dispatch) => {
  axios
    .get('/services')
    .then((res) => dispatch({ type: GET_SERVICES, payload: res.data }))
    .catch((err) => console.log('services get request', err));
};
