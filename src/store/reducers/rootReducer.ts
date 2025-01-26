import { combineReducers } from 'redux';
import { notesApi } from './notesApi';

const rootReducer = combineReducers({
  [notesApi.reducerPath]: notesApi.reducer, 
  
});

export default rootReducer;