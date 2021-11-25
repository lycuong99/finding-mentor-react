// import history from '../history';
// import fm from '../apis/fm';
// import UserStorage from "../ultils/UserStorage";

import fm from "../apis/fm";
import authHeader from "../ultils/authHeader";
import UserStorage from '../ultils/UserStorage';


export const updateMajor = async (majorId) => {
    try {
        const response = await fm.put("/Student/Major/" + majorId, {}, {
            headers: authHeader(),
        });

    } catch (error) {

    }
}

export const registerMentor = async (mentor) => {
    try {
        const response = await fm.post("/Account/Register/Mentor", {
            ...mentor,
            userId: UserStorage.getUserId()
        }, {
            headers: authHeader(),
        });
        console.log(response);
        UserStorage.setJWTDecode(response.data.token);
        return true;

    } catch (error) {
        return false;
    }
}

export const getUserStudentInfo = async () => {
    if (!UserStorage.getUserId()) return;

    try {
        const response = await fm.get("/Student/User/" + UserStorage.getUserId(), {
            headers: authHeader(),
        });

        return response.data;

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