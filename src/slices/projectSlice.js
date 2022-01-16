import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// register a new user
export const getProjects = createAsyncThunk(
  'project/getProjects',
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/project');
      return data;
    } catch (errors) {
      return rejectWithValue(errors);
    }
  }
);

// add new project
export const addProject = createAsyncThunk(
  'project/addProject',
  async (info, { rejectWithValue }) => {
    try {
      // const { data } = await axios.get('/api/project');
      // return data;
    } catch (errors) {
      return rejectWithValue(errors);
    }
  }
);

// edit project
export const editProject = createAsyncThunk(
  'project/EditProject',
  async (info, { rejectWithValue }) => {
    try {
      // const { data } = await axios.get('/api/project');
      // return data;
    } catch (errors) {
      return rejectWithValue(errors);
    }
  }
);

// delete project
export const deleteProject = createAsyncThunk(
  'project/deleteProject',
  async (info, { rejectWithValue }) => {
    try {
      // const { data } = await axios.get('/api/project');
      // return data;
    } catch (errors) {
      return rejectWithValue(errors);
    }
  }
);

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projectList: [],
    errors: null,
  },
  extraReducers: {},
});

export default projectSlice.reducer;
