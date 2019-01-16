import { combineReducers } from 'redux-immutable';
import { reducer as  homeReducer } from '../pages/home/store'
import { reducer as headerReducer} from '../commont/header/store/';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as messageReducer } from '../pages/message/store'

const reducer = combineReducers({
    home: homeReducer,
    header: headerReducer,
    login: loginReducer,
    message: messageReducer
});

export default reducer;