
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import majorReducer from './majorReducer';
import mentorReducer from './mentorReducer';
import courseReducer from './courseReducer';
import testReducer from './testReducer';
import studentReducer from './studentReducer';
import userReducer from './userReducer';
export default combineReducers(
    {
        auth: authReducer,
        mentor: mentorReducer,
        major: majorReducer,
        course: courseReducer,
        test: testReducer,
        mentee: studentReducer,
        user: userReducer
    }
);