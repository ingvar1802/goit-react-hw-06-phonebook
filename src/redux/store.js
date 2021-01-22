import { createStore, combineReducers } from 'redux';
import phoneBookReducer from './phoneBook-reducer';

const rootReducer = combineReducers({
    phonebook: phoneBookReducer,
});

const store = createStore(rootReducer);

export default store;