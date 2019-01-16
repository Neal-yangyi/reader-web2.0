import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    loginDialog: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN_DIALOG:
            return state.set('loginDialog', !state.get('loginDialog'));
        default:
            return state
    }
}