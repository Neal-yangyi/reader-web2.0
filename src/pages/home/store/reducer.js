import { fromJS } from 'immutable'
import * as constants from './constants'

//immutable库
//immutable对象
const defaultState = fromJS({
    indexNovel: {}
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.GET_INDEX_NOVEL:
            return state.set('indexNovel', fromJS(action.data));
        default:
            return state
    }
}