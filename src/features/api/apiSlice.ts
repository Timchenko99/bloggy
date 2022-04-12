import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../../types';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://bloggy-api.herokuapp.com'
    }),
    tagTypes: ['Post', 'Comment'],
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: ['Post']
        }),
        getPost: builder.query<IPost, any>({
            query: postId => `/posts/${postId}?_embed=comments`,
            providesTags: ['Post','Comment']
        }),
        addNewPost: builder.mutation({
            query: initialPost => ({
                url: '/posts',
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: initialPost
            }),
            invalidatesTags: ['Post']
        }),
        editPost: builder.mutation<any, IPost>({
            query: post => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: post
            }),
            invalidatesTags: ['Post']

        }),
        deletePost: builder.mutation<any, number>({
            query: postId => ({
                url: `/posts/${postId}`,
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            }),
            invalidatesTags: ['Post']

        }),
        addNewComment: builder.mutation({
            query: initialComment => ({
                url: '/comments',
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: initialComment
            }),
            invalidatesTags: ['Comment']

        })
    })
})

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddNewPostMutation,
    useEditPostMutation,
    useDeletePostMutation,
    useAddNewCommentMutation
} = apiSlice
