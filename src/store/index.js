import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    //引用了redux-thunk中间件
    //让ajax请求在action中定义
    //让action能返回一个方法而不是对象(使用redux-thunk的意义)
    applyMiddleware(thunk)
));

export default store;