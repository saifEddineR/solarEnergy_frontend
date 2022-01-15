import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// get Post List 
export const getAllPosts = createAsyncThunk(
  'posts/getAllPosts',
  async(userInput,{rejectWithValue})=>{
    try {
      const {data} = await axios.get('/api/post/getposts')
      return data
    } catch (errors) {
      return rejectWithValue(errors.response.data)
    }
  }
)


const postsSlice = createSlice({
  name:'posts',
  initialState:{
    postList:[],
    loading:false,
    errors:null,
  },
  extraReducers:{
    // ! postList handler
    [getAllPosts.pending]:(state)=>{
      state.loading = true
    },
    [getAllPosts.fulfilled]:(state,action)=>{
      state.loading = false
      state.postList = action.payload
      state.errors = null
    },
    [getAllPosts.rejected]:(state,action)=>{
      state.loading = false
      state.errors = action.payload
    },
  },
})

export default postsSlice.reducer