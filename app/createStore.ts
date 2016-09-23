import * as Redux from 'redux';
import thunk from 'redux-thunk';
import { Dispatch, RootState } from '../utils/redux';
import { flashMessageReducer, stateKey as flashMessageStateKey } from '../reducers/flash_message';

console.log('create store');

const rootReducer = Redux.combineReducers<RootState>({
    [flashMessageStateKey]: flashMessageReducer
});

debugger;

export interface Store extends Redux.Store<RootState>{
    dispatch: Dispatch;
};

export default (initialState = {}) => {
    const middleWare = Redux.applyMiddleware(thunk);
    return Redux.createStore<RootState>(rootReducer, initialState as RootState, middleWare);
};