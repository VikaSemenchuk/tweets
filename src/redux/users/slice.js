import { createSlice } from '@reduxjs/toolkit';
import { getUsers, updateUser } from './operations';

const initialState = {
  users: [],
  currentPage: 1,
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(getUsers.pending, onPending)
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, onRejected)
      .addCase(updateUser.pending, onPending)
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = state.users.map(el => {
          return el.id === payload.id
            ? {
                ...el,
                following: payload.following,
                followers: payload.followers,
              }
            : el;
        });
      })
      .addCase(updateUser.rejected, onRejected),
});

function onPending(state) {
  state.isLoading = true;
  state.error = null;
}

function onRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const { setUsers, setFollowers, setFollowing, setIsLoading, setError } =
  usersSlice.actions;

export const { setPage } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
