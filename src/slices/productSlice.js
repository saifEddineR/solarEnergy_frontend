import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import setToken from '../utils/setToken';

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
  async (info, { rejectWithValue, dispatch }) => {
    try {
      await axios.post('/api/product/add', info, setToken());
      dispatch(getProducts());
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
  async (productId, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`/api/product/${productId}`, setToken());
      dispatch(getProducts());
    } catch (errors) {
      return rejectWithValue(errors);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    productList: [],
    errors: null,
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.productList = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default productSlice.reducer;
