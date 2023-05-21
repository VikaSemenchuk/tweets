import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './operations';


const initialState = {
  users: [],
  followers: 'null',
  following: false,
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // setUsers(state, action) {
    //     state.users = action.payload;
    // },
    // setFollowers(state, action) {
    //     state.followers = action.payload;
    // },
    // setFollowing(state, action) {
    //     state.following = action.payload;
    // },
    // setIsLoading(state, action) {
    //     state.isLoading = action.payload;
    // },
    // setError(state, action) {
    //     state.error = action.payload;
    // },
  },
  extraReducers: builder => builder
  .addCase(getUsers.pending, (state) => {
    state.isLoading = true;
    state.error = null;
  }).addCase(getUsers.fulfilled, (state, action) => {
    state.isLoading = false;
    state.users = action.payload;
  }).addCase(getUsers.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  }),
});

export const {setUsers, setFollowers, setFollowing, setIsLoading, setError} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;

