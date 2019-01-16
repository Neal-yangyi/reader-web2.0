import { service } from "../utils/request";

export function getUserInfoByUsername(username) {
    // return service({
    //
    //     url: '/user/findByUsername',
    //     method: 'get',
    //     params: {
    //         username
    //     }
    // })
    return service('/user/findByUsername', {
        // headers: {
        //     'Authorization': 'Bearer f9f2768a-99cf-4b19-86be-dcfd947e916b',
        // },
        params: {
            username
        }
    })
}