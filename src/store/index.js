// src/TaskManager/store/index.js
import { createStore, combineReducers } from 'redux';
import tareasReducer from './tareasReducer';

const rootReducer = combineReducers({
    tareas: tareasReducer
});

const store = createStore(rootReducer);

export default store;
