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
            providesTags: ['Post', 'Comment']
        }),
        getPost: builder.query({
            query: postId => `/posts/${postId}?_embed=comments`
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
            })
        }),
        deletePost: builder.mutation<any, number>({
            query: postId => ({
                url: `/posts/${postId}`,
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
        }),
        addNewComment: builder.mutation({
            query: initialComment => ({
                url: '/comments',
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: initialComment
            })
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
