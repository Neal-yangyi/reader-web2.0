import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    unreadNum: null
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.UNREAD_MESSAGE_NUM:
            return state.set('unreadNum', action.num);
        default:
            return state
    }
}