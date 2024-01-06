import {createSlice} from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const initialState = []

export const fetchUser = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_URL);
        return response.data;
    } catch (error) {
        return error.message
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}, 
    extraReducers(builder){
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;