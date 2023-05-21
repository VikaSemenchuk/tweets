import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
//   filter: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
        state.users = action.payload;
    },
    // setFilter(state, action) {
    //     state.filter = action.payload;
    // },
  },
});

export const {setContacts} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;