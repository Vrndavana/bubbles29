import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000'
    });
}



// AxiosWithAuth.js is created to capture the token set in local storage when a user attempts to login