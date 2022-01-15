import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getAllPosts } from '../slices/postSlice'
import { loadUser } from '../slices/userSlice'

const Post = () => {
  const dispatch = useDispatch()
  const {loading,postList,errors} = useSelector(state=>state.posts)
  useEffect(()=>{
    dispatch(getAllPosts())
    dispatch(loadUser())
  },[])
  return (
    <div>
      {loading && <p>Loading...</p>}

      {postList && postList.map(post=>(
        <div key={post._id}>
          <h3>{post.owner.name}</h3>
          <h4>{post.title}</h4>
          <p>{post.desc}</p>
      
        </div>
      ))}
    </div>
  )
}

export default Post
