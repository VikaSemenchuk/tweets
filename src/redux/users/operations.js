import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersAPI, putUserAPI } from 'services/tweetsApi';

export const getUsers = createAsyncThunk('users/getUsers',
async (_, thunkApi) =>{
    try {
       const users = await getUsersAPI();
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

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (newUserInfo, thunkAPI) => {
      try {
        const response = await putUserAPI(newUserInfo);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );