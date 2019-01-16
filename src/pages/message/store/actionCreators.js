import * as constants from './constants'
import {getUnreadMessageNum} from "../../../api/message";
import {getUserId} from "../../../utils/auth";

const unReadNum = (num) => ({
    type: constants.UNREAD_MESSAGE_NUM,
    num: num
});

export const getUnReadNum = () => {
    return (dispatch) => {
        console.log('action message');
        getUnreadMessageNum(getUserId()).then(res => {

            dispatch(unReadNum(res.data))
        })
    }
};