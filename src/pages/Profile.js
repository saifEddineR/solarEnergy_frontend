import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from '../slices/userSlice';

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return <div>profile</div>;
};

export default Profile;
