import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id: '0', name: 'Abass Koyang'},
    {id: '1', name: 'Ahmad Koyang'},
    {id: '2', name: 'Abass Ahmad'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;