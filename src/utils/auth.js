import Cookies from 'js-cookie'

const TokenKey = 'User-Token';
const AccountKey = 'account';
const UserIdKey = 'userId';

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function getAccount() {
    return Cookies.get(AccountKey)
}

export function setAccount(account) {
    return Cookies.set(AccountKey, account)
}

export function removeAccount() {
    return Cookies.remove(AccountKey)
}

export function getUserId() {
    return Cookies.get(UserIdKey)
}

export function setUserId(userId) {
    return Cookies.set(UserIdKey, userId)
}

export function removeUserId() {
    return Cookies.remove(UserIdKey)
}