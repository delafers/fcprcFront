import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk"

let RootReducer = combineReducers({
    
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store