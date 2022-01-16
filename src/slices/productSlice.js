import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// get all the products
export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/product');
      return data;
    } catch (errors) {
      return rejectWithValue(errors);
    }
  }
);

// add new product
export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (info, { rejectWithValue }) => {
    try {
      // const { data } = await axios.get('/api/product');
      // return data;
    } catch (errors) {
      return rejectWithValue(errors);
    }
  }
);
// edit product
export const editProduct = createAsyncThunk(
  'product/EditProduct',
  async (info, { rejectWithValue }) => {
    try {
      // const { data } = await axios.get('/api/product');
      // return data;
    } catch (errors) {
      return rejectWithValue(errors);
    }
  }
);
// delete Product
export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (info, { rejectWithValue }) => {
    try {
      // const { data } = await axios.get('/api/product');
      // return data;
    } catch (errors) {
      return rejectWithValue(errors);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
    errors: null,
  },
  extraReducers: {},
});

export default productSlice.reducer;
