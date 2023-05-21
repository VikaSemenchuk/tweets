import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  followers: 'null',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
        state.users = action.payload;
    },
    setFollowers(state, action) {
        state.followers = action.payload;
    },
  },
});

export const {setUsers, setFollowers} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;

