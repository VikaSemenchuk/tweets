import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIUsers } from 'services/tweetsApi';

export const getUsers = createAsyncThunk('users/getUsers',
async (_, thunkApi) =>{
    try {
       const users = await APIUsers();
       return users;
        // return usersAPI
        // dispatch(setUsers(usersAPI));
        // console.log('users :>> ', usersAPI);
        // // console.log('users :>> ', users);
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    // };
})