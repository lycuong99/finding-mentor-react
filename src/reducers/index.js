
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import majorReducer from './majorReducer';
import mentorReducer from './mentorReducer';

export default combineReducers(
    {
        auth: authReducer,
        mentor: mentorReducer,
        major: majorReducer
    }
);