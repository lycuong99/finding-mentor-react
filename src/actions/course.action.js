import fm from '../apis/fm';
import {
    FETCH_COURSE_BY_ID,
    FETCH_COURSE_BY_ID_FAIL,
    FETCH_COURSES_BY_MENTOR_ID,
    FETCH_COURSE_SEARCH,
    FETCH_RECOMMEND_COURSES_BY_MAJOR,
    FETCH_MY_LEARNING_COURSES,
    CREATE_COURSE,
    DELETE_COURSE,
    UPDATE_COURSE,
    FETCH_COURSES_MENTEES
} from '../constants/actionTypes';
import authHeader from '../ultils/authHeader';
import UserStorage from '../ultils/UserStorage';
import { uploadCourseImage, initCourseData, deleteCourseFirebase, deleteCourseImage } from '../ultils';
import { useDispatch } from 'react-redux';

export const fetchCourses = (key) => async (dispatch) => {
    try {

        const response = await fm.get(`/Course/Name/${key}`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_COURSE_SEARCH, payload: response.data });
    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }
}

export const fetchRecommendCoursesByUserMajor = () => async (dispatch) => {
    try {

        const response = await fm.get(`/Course/RecommendCourse`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_RECOMMEND_COURSES_BY_MAJOR, payload: response.data });
    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}

export const fetchMyLearningCourses = () => async (dispatch) => {
    let userId = UserStorage.getUserId();
    if (!userId) return;

    try {

        const response = await fm.get(`/Course/courseOfStudent/${userId}`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_MY_LEARNING_COURSES, payload: response.data });
    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}

export const fetchCourse = (id) => async (dispatch) => {
    try {

        const response = await fm.get(`/Course/${id}`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_COURSE_BY_ID, payload: response.data });
    } catch (error) {
        // dispatch({ type: FETCH_COURSE_BY_ID_FAIL, payload: { error: "ERROR" } });
    }

}

export const fetchCoursesOfMentor = (mentorId) => async (dispatch) => {
    try {
        const response = await fm.get(`/Course/courseOfMentor/${mentorId}`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_COURSES_BY_MENTOR_ID, payload: { id: mentorId, courses: response.data } });
    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}

export const createCourse = (course, mentorId) => async (dispatch) => {
    try {
        // insert course

        const courseInsertObj = {
            subjectId: course.subjectId,
            imageUrl: '',
            description: course.description,
            name: course.name,
            price: course.price,
            duration: course.duration,
            startDate: course.startDate,
            mentorId: mentorId,
        };

        const response = await fm.post(`/Course/`, courseInsertObj, {
            headers: authHeader(),
        });



        // take id course
        let courseId = response.data;

        //init course info to firebase {curriculum,questions,activity}
        initCourseData(courseId, course.curriculum);

        //upload Image
        uploadCourseImage(course.imageFileData, courseId, (url) => {
            fm.put(`/Course/ImageUrl/${courseId}`, {
                imageUrl: url,
            }, {
                headers: authHeader(),
            });

            dispatch({ type: CREATE_COURSE, payload: { ...courseInsertObj, id: courseId, imageUrl: url } });
        });

    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}

export const updateCourse = (course) => async (dispatch) => {
    try {
        const courseInsertObj = {
            subjectId: course.subjectId,
            imageUrl: course.imageUrl,
            description: course.description,
            name: course.name,
            price: course.price,
            duration: course.duration,
            startDate: course.startDate,
            mentorId: course.mentorId,
        };
        //  check image change or not
        if (course.imageFileData) {

            //upload Image
            uploadCourseImage(course.imageFileData, course.id, async (url) => {

                // update course
                const response = await fm.put(`/Course/${course.id}`, { ...courseInsertObj, imageUrl: url }, {
                    headers: authHeader(),
                });
                dispatch({ type: CREATE_COURSE, payload: { ...courseInsertObj } });
            });
        } else {
            // update course
            const response = await fm.put(`/Course/${course.id}`, courseInsertObj, {
                headers: authHeader(),
            });

            dispatch({ type: UPDATE_COURSE, payload: { ...courseInsertObj } });
        }



    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}
export const deleteCourse = (id) => async (dispatch) => {
    try {

        const response = await fm.delete(`/Course/${id}`, {
            headers: authHeader(),
        });

        deleteCourseFirebase(id);
        deleteCourseImage(id);

        dispatch({ type: DELETE_COURSE, payload: id });
    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}

export const fetchMenteesInCourse = (courseId) => async (dispatch) => {
    try {
        const response = await fm.get(`/Course/${courseId}/Mentees`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_COURSES_MENTEES, payload: response.data });
    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}

