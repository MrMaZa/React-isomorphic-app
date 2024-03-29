import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {createLogger} from "redux-logger";
import fetchQuestionsSaga from "./sagas/fetch-questions-saga";
import fetchQuestionSaga from "./sagas/fetch-question-saga";
import * as reducers from './reducers';
import {routerMiddleware, routerReducer as router} from "react-router-redux";


export default function (history, defaultState) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = routerMiddleware(history);
    const middlewareChain = [middleware, sagaMiddleware];
    if (process.env.NODE_ENV === 'development') {
        const logger = createLogger();
        middlewareChain.push(logger);
    }
    const store = createStore(combineReducers({
        ...reducers,
        router
    }), defaultState, applyMiddleware(...middlewareChain));
    sagaMiddleware.run(fetchQuestionsSaga);
    sagaMiddleware.run(fetchQuestionSaga);
    return store
}