import Courses from './Courses';
import Mentor from './Mentor';

let CourseDB = Courses;
let MentorDB = Mentor

export { Mentor, CourseDB };

export function addCourse(newCourse) {
    let date = new Date();
    CourseDB = [...CourseDB, { ...newCourse, id: date.getMilliseconds() }];
}

export function getCourse(id) {
    let result = CourseDB.find(course => course.id == id);
    return result;
}

export function deleteCourse(id) {
    let newCourseDB = CourseDB.filter(c => c.id !== id);
    CourseDB = newCourseDB;
}
export const getCourses = () => {
    return CourseDB;
}
