import { getProducts, getProjects, getServices } from './authActions';
import axios from 'axios';

// product related actions
export const addProduct = (data) => (dispatch) => {
  axios
    .post('/products', data, {
      headers: { 'auth-token': localStorage.getItem('token') },
    })
    .then((res) => dispatch(getProducts()))
    .catch((err) => console.log(err));
};
export const editProduct = (_id, data) => (dispatch) => {
  axios
    .put(`/products/${_id}`, data, {
      headers: { 'auth-token': localStorage.getItem('token') },
    })
    .then((res) => {
      dispatch(getProducts());
    })
    .catch((err) => console.log(err));
};
export const deleteProduct = (_id) => (dispatch) => {
  axios
    .delete(`/products/${_id}`, {
      headers: { 'auth-token': localStorage.getItem('token') },
    })
    .then((res) => dispatch(getProducts()))
    .catch((err) => console.log(err));
};

// project related actions
export const addProject = (data, file) => (dispatch) => {
  let formData = new FormData();
  formData.append('project', file);
  formData.append('data', JSON.stringify(data));
  axios
    .post('/projects', formData, {
      headers: { 'auth-token': localStorage.getItem('token') },
    })
    .then((res) => dispatch(getProjects()))
    .catch((err) => console.log(err));
};
export const editProject = (_id, data) => (dispatch) => {
  axios
    .put(`/projects/${_id}`, data, {
      headers: { 'auth-token': localStorage.getItem('token') },
    })
    .then((res) => {
      dispatch(getProjects());
    })
    .catch((err) => console.log(err));
};
export const deleteProject = (_id) => (dispatch) => {
  axios
    .delete(`/projects/${_id}`, {
      headers: { 'auth-token': localStorage.getItem('token') },
    })
    .then((res) => dispatch(getProjects()))
    .catch((err) => console.log(err));
};

// project related actions
export const addServices = (data) => (dispatch) => {
  axios
    .post('/services', data, {
      headers: { 'auth-token': localStorage.getItem('token') },
    })
    .then((res) => dispatch(getServices()))
    .catch((err) => console.log(err));
};
export const editServices = (_id, data) => (dispatch) => {
  axios
    .put(`/services/${_id}`, data, {
      headers: { 'auth-token': localStorage.getItem('token') },
    })
    .then((res) => {
      dispatch(getServices());
    })
    .catch((err) => console.log(err));
};
export const deleteService = (_id) => (dispatch) => {
  axios
    .delete(`/services/${_id}`, {
      headers: { 'auth-token': localStorage.getItem('token') },
    })
    .then((res) => dispatch(getServices()))
    .catch((err) => console.log(err));
};
