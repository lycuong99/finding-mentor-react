import {
    TEST_ADD_COURSE,
    TEST_FETCH_COURSES,
    TEST_FETCH_COURSE,
    TEST_UPDATE_COURSE
} from '../constants/actionTypes';

import { getCourses, addCourse as addCourseToDB } from '../database';

export const addCourse = (course) => {
    let date = new Date();


    return {
        type: TEST_ADD_COURSE,
        payload: { ...course, id: date.getTime().toString() }
    }
}

export const fetchCourses_test = (keySearch) => {
    if (!keySearch) {
        return {
            type: TEST_FETCH_COURSES,
            payload: ''
        }
    }
    return {
        type: TEST_FETCH_COURSES,
        payload: keySearch
    }
}

export const fetchCourse_test = (id) => {

    return {
        type: TEST_FETCH_COURSE,
        payload: id
    }
}

export const deleteCourse = (course) => {
    let date = new Date();
    return {
        type: TEST_ADD_COURSE,
        payload: { ...course, id: date.getTime().toString() }
    }
}

export const updateCourse_test = (course) => {
    let date = new Date();
    return {
        type: TEST_UPDATE_COURSE,
        payload: { ...course }
    }
}