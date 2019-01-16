import axios from 'axios'
import store from '../store'
import {getToken} from "./auth";

// create an axios instance
const service = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        if (store.getState().get('login').get('token')) {
            config.headers.common['Authorization'] = getToken();
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error); // for debug
        return Promise.reject(error)
    }
);

const serviceForm = axios.create({
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    baseURL: 'http://localhost:8080', // api 的 base_url
    timeout: 5000 // request timeout
});

serviceForm.interceptors.request.use(
    config => {
        if (store.getState().get('login').get('token')) {
            config.headers['Authorization'] = 'Bearer ' + getToken()
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error); // for debug
        return Promise.reject(error)
    }
);

// response interceptor
// service.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.response.status === 417) {
//             return error.response
//         }
//         console.log('err' + error); // for debug
//         message.error(error.message);
//         return Promise.reject(error)
//     }
// );

export default service;
export {
    service,
    serviceForm
}