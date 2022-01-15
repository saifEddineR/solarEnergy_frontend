import axios from 'axios';
import { ESTEEM_DATA, ESTEEM_ALL, ESTEEM_SAVE_STORE } from './types';

export const esteemData = (userInput, files) => (dispatch) => {
  let filesArray = Object.values(files);
  let formData = new FormData();
  filesArray.map((file) => formData.append('photos', file));
  formData.append('userInput', JSON.stringify(userInput));
  formData.append('photos', filesArray);
  axios
    .post('/esteem', formData)
    .then((res) => dispatch({ type: ESTEEM_DATA, payload: res.data }))
    .catch((err) => console.log('errors:', err.data));
};

export const getEsteem = () => (dispatch) => {
  axios
    .get('/esteem')
    .then((res) => dispatch({ type: ESTEEM_ALL, payload: res.data }))
    .catch((err) => console.log('errors:', err.data));
};

export const saveEsteem = (data) => {
  return { type: ESTEEM_SAVE_STORE, payload: data };
};
