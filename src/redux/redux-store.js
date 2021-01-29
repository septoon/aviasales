import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import ticketsReducer from './tickets-reducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    ticketsList: ticketsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store

export default store