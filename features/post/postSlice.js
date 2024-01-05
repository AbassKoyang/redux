import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns';

const initialState = [
    {id: 1, title: 'Learning Redux Toolkit',
     content: "I've heard good things about redux, and now I'm learning it.",
     date: sub(new Date(), {minutes: 10}).toISOString()},
    {id: 2, title: 'Learning Redux Toolkit',
     content: "I've heard good things about redux, and now I'm learning it.",
     date: sub(new Date(), {minutes: 10}).toISOString()},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded:{
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(title, content, userId){
                return {
                    payload:{
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                    }
                }
            }
        },
    }
})

export const {postAdded} = postsSlice.actions;
export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;