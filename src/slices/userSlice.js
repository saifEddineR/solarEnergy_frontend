import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// register a new user
export const register = createAsyncThunk(
  'user/register',
  async ({ info, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/user/register', info);
      return data;
    } catch (errors) {
      return rejectWithValue(errors);
    }
  }
);
// login as a user
export const login = createAsyncThunk(
  'user/login',
  async ({ info, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/user/login', info);
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data);
    }
  }
);
//load user information
export const loadUser = createAsyncThunk(
  'user/loadUser',
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/user/loaduser', {
        headers: { token: localStorage.getItem('token') },
      });
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: JSON.parse(localStorage.getItem('userDisplayInfo')) || {},
    isAuth: Boolean(localStorage.getItem('isAuth')) || false,
    loading: false,
    token: localStorage.getItem('token') || null,
    errors: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('isAuth');
      localStorage.removeItem('userDisplayInfo');
      state.isAuth = false;
      state.token = null;
      state.userInfo = {};
    },
  },
  extraReducers: {
    // ! register handler
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.userInfo = { role: action.payload.role };
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('isAuth', true);
      state.isAuth = true;
      state.errors = null;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    // ! login handler
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.errors = null;
      state.token = action.payload.token;
      state.userInfo = { role: action.payload.role };
      state.isAuth = true;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('isAuth', true);
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    // ! load user info handler
    [loadUser.pending]: (state) => {
      state.loading = true;
    },
    [loadUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.errors = null;
      state.userInfo = action.payload;
      localStorage.setItem('userDisplayInfo', JSON.stringify({ ...action.payload }));
    },
    [loadUser.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
