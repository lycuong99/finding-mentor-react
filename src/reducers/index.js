
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mentorReducer from './mentorReducer';

export default combineReducers(
    {
        auth: authReducer,
        mentor: mentorReducer
    }
);