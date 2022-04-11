import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'posts',
    initialState: { posts: [] },
    reducers: {
        addPost: state => {
            state.posts = []
        }
    }
})

export const { addPost } = postSlice.actions;

export default postSlice.reducer
