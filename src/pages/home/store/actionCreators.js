import * as constants from './constants'
import {getIndexNovel} from "../../../api/novel";

const setIndexNovel = (indexNovel) => ({
    type: constants.GET_INDEX_NOVEL,
    data: indexNovel
});

export const indexNovel = () => {
    return (dispatch) => {
        getIndexNovel().then(res => {
            console.log(res.data);
            dispatch(setIndexNovel(res.data))
        })
    }
};