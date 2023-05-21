import axios from 'axios';

const tweetsAPI = axios.create({
    baseURL: `https://646692002ea3cae8dc1a29d6.mockapi.io/api/v1/tweets/`,
});

export const getUsersAPI = async () => {
    const response = await tweetsAPI.get();
    // console.log('response :>> ', response);
    const {data} = response;
    // console.log('data :>> ', data);
    return data;
}

export const putUserAPI = async updatedUser => {
    const { data } = await tweetsAPI.put(`${updatedUser.id}`, updatedUser);
    return data;
  };
