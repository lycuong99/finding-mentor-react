import { getFirestore, collection, addDoc, setDoc, doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";
import app from '../firebase';

const db = getFirestore(app);

export const initCourseData = async (id, curriculum) => {


    console.log("Wrie course to fb");
    console.log(db);

    await setDoc(doc(db, "courses", id), {
        id: id,
        curriculum: curriculum,
        questions: []
    });
}

export const deleteCourseFirebase = async (id) => {
    await deleteDoc(doc(db, "courses", id));
}

export const getCurriculum = async (courseId) => {
    const docRef = doc(db, "courses", courseId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log(docSnap.data().curriculum);
        return docSnap.data().curriculum;

    } else {
        initCourseData(courseId, []);
        return null;
    }
}


export const updateCurriculum = async (courseId, curriculum) => {
    const docRef = doc(db, "courses", courseId);
    console.log('Update curriculm');
    console.log(curriculum);
    await updateDoc(docRef, {
        curriculum: curriculum
    });
}

export const getQuestions = async (courseId) => {
    const docRef = doc(db, "courses", courseId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().questions;
    } else {
        initCourseData(courseId, []);
        return null;
    }
}


export const updateQuestions = async (courseId, questions) => {
    const docRef = doc(db, "courses", courseId);

    await updateDoc(docRef, {
        questions: questions
    });
}

