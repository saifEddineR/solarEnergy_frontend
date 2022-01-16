import { configureStore } from '@reduxjs/toolkit';

import user from './slices/userSlice';
import posts from './slices/postSlice';
import products from './slices/productSlice';
import projects from './slices/projectSlice';

export default configureStore({ reducer: { user, posts, products, projects } });
