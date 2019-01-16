import * as constants from './constants';
import {loginByUsername, logout } from "../../../api/login";
import { removeAccount, removeToken, removeUserId, setAccount, setToken, setUserId} from "../../../utils/auth";
import {getUserInfoByUsername} from "../../../api/user";
import {getUnreadMessageNum} from "../../../api/message";

const changeLogin = (token, account, userId) => ({
    type: constants.CHANGE_LOGIN,
    token: token,
    account: account,
    userId: userId,
    value: true
});

const changeLogout =() => ({
    type: constants.LOGOUT,
    value: false
});

export const logOut = () => {
    return (dispatch) => {
        logout().then(() => {
            removeToken();
            removeAccount();
            removeUserId();
            dispatch(changeLogout());
        })
    }
};

const unReadNum = (num) => ({
    type: constants.UNREAD_MESSAGE_NUM,
    num: num
});

export const login = (account, password) => {
    return (dispatch) => {
        loginByUsername(account, password).then((res1) => {
            const result = res1.data;
            if(result) {
                setToken(result.access_token);
                setAccount(account);
                getUserInfoByUsername(account).then((res2) => {
                    setUserId(res2.data.id);
                    dispatch(changeLogin(result.access_token, account, res2.data.id));
                    getUnreadMessageNum(res2.data.id).then(res3 => {
                        dispatch(unReadNum(res3.data))
                    })
                });
            } else {
                alert('登录失败')
            }
        });
    }
};
