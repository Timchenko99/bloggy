import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/posts/postSlice';
import { apiSlice } from '../features/api/apiSlice';

export default configureStore({
    reducer: {
        post: postReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})
