import { service, serviceForm } from "../utils/request";
import qs from 'qs'

export function loginByUsername(username, password) {
    const data = {
        username,
        password,
        'grant_type': 'password',
        'scope': 'select',
        'client_id': 'client_2',
        'client_secret': '123456'
    };
    return serviceForm({
        url: '/oauth/token',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function logout() {
    return service({
        url: '/oauth/removeToken',
        method: 'get'
    })
}