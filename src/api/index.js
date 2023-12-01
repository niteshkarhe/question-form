import axios from 'axios';

export const api = axios.create({
    withCredentials: false,
    baseURL: 'http://127.0.0.1:8080/api/',
    headers: {
        accept_version: `v1`
    }
});