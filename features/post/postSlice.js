import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: 'Learning Redux Toolkit', content: "I've heard good things about redux, and now I'm learning it."},
    {id: 2, title: 'Learning Redux Toolkit', content: "I've heard good things about redux, and now I'm learning it."}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action){
            state.push(action.payload)
        },
    }
})

export const {postAdded} = postsSlice.actions;
export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;