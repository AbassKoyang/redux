import { createSlice, createAsyncThunk, createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import {sub} from 'date-fns';
import axios from 'axios';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const postsAdapter = createEntityAdapter({
    sortComparer: (a,b) => b.date.localeCompare(a.date)
})

const initialState = postsAdapter.getInitialState({
    status: 'idle',
    error: null,
    count: 0,
})

export const fetchPost = createAsyncThunk('posts/fetchPost', async () => {
    try {
        const response = await axios.get(POSTS_URL);
        return response.data;
    } catch (error) {
        console.log(error)
        return error.message;
    }
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
    try {
        const response = await axios.post(POSTS_URL, initialPost);
        return response.data;
    } catch (error) {
        console.log(error)
        return error.message;
    }
})

export const updatePost = createAsyncThunk('posts/updatePost', async (initialPost) => {
    const {id} = initialPost;
    try {
        const response = await axios.put(`${POSTS_URL}/${id}`, initialPost);
        return response.data;
    } catch (error) {
        console.log(error)
        // return error.message;
        return initialPost; // only for testing redux!
    }
})
export const deletePost = createAsyncThunk('posts/deletePost', async (initialPost) => {
    const {id} = initialPost;
    try {
        const response = await axios.delete(`${POSTS_URL}/${id}`, initialPost);
        if (response?.status === 200) {
           return initialPost; 
        }
        return `${response?.status}: ${response?.statusText}`;
    } catch (error) {
        console.log(error)
        return error.message;
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        reactionAdded(state, action){
            const {postId, reaction} = action.payload
            const existingPost = state.entities[postId]
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        },
        increaseCount(state, action){
            state.count = state.count + 1;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchPost.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchPost.fulfilled, (state, action) => {
            state.status = 'succeeded';
            //Adding date and reactions
            let min = 1;
            const loadedPost = action.payload.map(post => {
                post.date = sub(new Date(), {minutes: min++}).toISOString();
                post.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0,
                }
                // console.log('returnedpost:', post)
                return post;
            })
            //Add fetched post to array
            postsAdapter.upsertMany(state, loadedPost);
        })
        .addCase(fetchPost.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(addNewPost.fulfilled, (state, action) => {
            action.payload.userId = Number(action.payload.userId);
            action.payload.date = new Date().toISOString();
            action.payload.reactions = {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
            }
            console.log(action.payload);
            postsAdapter.addOne(state, action.payload);
        })
        .addCase(updatePost.fulfilled, (state, action) => {
            if (!action.payload?.id) {
                console.log('Update could not be completed');
                console.log(action.payload);
                return;
            }
            action.payload.date = new Date().toISOString();
            postsAdapter.upsertOne(state, action.payload)
        })
        .addCase(deletePost.fulfilled, (state, action) => {
            if (!action.payload?.id) {
                console.log('Delete could not be completed');
                console.log(action.payload);
                return;
            }
            const {id} = action.payload;
            postsAdapter.removeOne(state, id);
        })
    }
})

export const {reactionAdded, increaseCount} = postsSlice.actions;

//getSlectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds,
    //pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors(state => state.posts);

export const getPostStatus = (state) => state.posts.status;
export const getPostError = (state) => state.posts.error;
export const getCount = (state) => state.posts.count;
export const selectPostByUser= createSelector([selectAllPosts, (state, userId) => userId],
    (posts, userId) => posts.filter(post => post.userId === userId));
export default postsSlice.reducer;