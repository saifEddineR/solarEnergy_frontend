import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import setToken from '../utils/setToken';

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
  async ({ input, file }, { rejectWithValue, dispatch }) => {
    try {
      const formData = new FormData();
      formData.append('info', JSON.stringify({ ...input }));
      formData.append('project', file);
      await axios.post('/api/project/add', formData, setToken());
      dispatch(getProjects());
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
  async (projectId, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`/api/project/${projectId}`, setToken());
      dispatch(getProjects());
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
  extraReducers: {
    [getProjects.pending]: (state) => {
      state.loading = true;
    },
    [getProjects.fulfilled]: (state, action) => {
      state.loading = false;
      state.projectList = action.payload;
    },
    [getProjects.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default projectSlice.reducer;
