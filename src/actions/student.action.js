import fm from '../apis/fm';
import {
    ENROLL_COURSE, ENROLL_COURSE_FAIL, ENROLL_CLEAR_STATUS
} from '../constants/actionTypes';
import authHeader from '../ultils/authHeader';
import UserStorage from '../ultils/UserStorage';
import { uploadCourseImage, initCourseData, deleteCourseFirebase, deleteCourseImage } from '../ultils';
import { useDispatch } from 'react-redux';

export const enrollCourse = (courseId, studentId, dateStart) => async (dispatch) => {
    try {
        fm.post(`Student/EnrollToCourse`, {
            courseId,
            studentId,
            startDate: dateStart
        }, {
            headers: authHeader(),
        });

        dispatch({ type: ENROLL_COURSE });
    } catch (error) {
        console.log(error);
        dispatch({ type: ENROLL_COURSE_FAIL, payload: 'Balance is not enough!' });
    }

}

export const closeSnackBarEnroll = () => {
    return {
        type: ENROLL_CLEAR_STATUS
    }
}