import { service } from "../utils/request";

export function getUnreadMessageNum(userId) {
    return service({
        url: '/message/unReadNum',
        method: 'get',
        params: {
            userId
        }
    })
}