import {createStore, compose, applyMiddleware} from 'redux'
import { combineReducers } from 'redux';
import { pointsReduser } from './reducers/pointsReducer';
import createSagaMidlleware from 'redux-saga'
import { rootSaga } from './reducers/saga';


const sagaMidlleWare = createSagaMidlleware()
const rootReducer = combineReducers({
    points: pointsReduser,
})

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = () => createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMidlleWare)),
);
export const store = configureStore({})

sagaMidlleWare.run(rootSaga)

