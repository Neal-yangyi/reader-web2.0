import { fromJS } from 'immutable'
import * as constants from './constants'
import {getAccount, getToken, getUserId} from "../../../utils/auth";

//immutable库
//immutable对象
const defaultState = fromJS({
    login: false,
    token: getToken(),
    account: getAccount(),
    userId: getUserId(),
    unreadNum: null
});

const getLoginInfo = (state, action) => {
    return state.merge({
        token: action.token,
        account: action.account,
        login: action.value,
        userId: action.userId
    })
};

const logout = (state, action) => {
  return state.merge({
      token: null,
      account: null,
      login: action.value,
      userId: null,
      unreadNum: null
  })
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_LOGIN:
            return getLoginInfo(state, action);
        case constants.LOGOUT:
            return logout(state, action);
        case constants.UNREAD_MESSAGE_NUM:
            return state.set('unreadNum', action.num);
        default:
            return state
    }
}