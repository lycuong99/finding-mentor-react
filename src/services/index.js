// import history from '../history';
// import fm from '../apis/fm';
// import UserStorage from "../ultils/UserStorage";

import fm from "../apis/fm";
import authHeader from "../ultils/authHeader";



export const updateMajor = async (majorId) => {
    try {

        const response = await fm.put("/Student/Major/" + majorId, {}, {
            headers: authHeader(),
        });

    } catch (error) {

    }

}

export const getMenteeListInfo = async (courseId) => {
    try {
        const response = await fm.get(`/Course/${courseId}/Mentees`, {
            headers: authHeader(),
        });
        return response.data;
    } catch (error) {
        return null;
    }

}


export const getMentorInfo = async (mentorId) => {
    try {
        const response = await fm.get(`Mentor/Information/${mentorId}`, {
            headers: authHeader(),
        });
        return response.data;
    } catch (error) {
        return null;
    }

}