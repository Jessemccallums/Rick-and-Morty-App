import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducer'
import  ThunkMiddleware  from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))
)

