import { service } from "../utils/request";

export function getIndexNovel() {
    return service({
        url: '/index',
        method: 'get'
    })
}