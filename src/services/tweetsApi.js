import axios from 'axios';

const tweetsAPI = axios.create({
    baseURL: 'https://646692002ea3cae8dc1a29d6.mockapi.io/api/v1/',
});

export const APIUsers = async () => {
    const response = await tweetsAPI.get(`tweets`);
    console.log('response :>> ', response);
    const {data} = response;
    console.log('data :>> ', data);
    return data;
}
