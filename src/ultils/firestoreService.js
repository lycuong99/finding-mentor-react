import { getFirestore, collection, addDoc, setDoc, doc, deleteDoc, getDoc, updateDoc, onSnapshot, increment, query, orderBy } from "firebase/firestore";
import app from '../firebase';
import UserStorage from './UserStorage';

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
        console.log(docSnap.data());
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

// QUESTION

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


export const addQuestion = async (courseId, question) => {

    try {
        const questionRef = doc(collection(db, `courses/${courseId}/questions`));
        console.log('add Question');
        console.log(UserStorage.getUserId());
        await setDoc(questionRef, {
            ...question,
            id: questionRef.id,
            answerCount: 0,
            dateCreated: new Date(),
            createBy: UserStorage.getUserId()
        });
        return true;
    } catch (e) {
        return false;
    }
}

export const addAnswer = async (courseId, questionId, newAnswer) => {
    console.log('ADD answer', courseId, questionId, UserStorage.getUserId());
    try {
        const ref = doc(collection(db, `courses/${courseId}/questions/${questionId}/answers`));

        await setDoc(ref, {
            ...newAnswer,
            id: ref.id,
            createBy: UserStorage.getUserId()
        });

        const questionRef = doc(db, `courses/${courseId}/questions`, questionId);
        console.log('UPDATE COUNT');
        await updateDoc(questionRef, {
            answerCount: increment(1)
        });
        return true;
    } catch (e) {
        return false;
    }
}


export const getQuestionsOnSnapshot = (courseId, subFunction) => {
    const docRef = collection(db, `courses/${courseId}/questions`);
    const q = query(docRef, orderBy("dateCreated", "desc"));
    // const response = await fm.get(`/Course/${courseId}/Mentees`, {
    //     headers: authHeader(),
    // });
    const unsub = onSnapshot(q, (querySnapshot) => {
        let i = 0;
        let questions = [];
        querySnapshot.forEach((doc) => {
            console.log(`${i++}:`, doc.data());
            questions.push(doc.data());
        });
        if (subFunction) {
            subFunction(questions);
        }
    });

    return unsub;
}

export const getAnswersOnSnapshot = (courseId, questionId, subFunction) => {
    const answersRef = collection(db, `courses/${courseId}/questions/${questionId}/answers`);
    const q = query(answersRef, orderBy("dateCreated", "desc"));
    const unsub = onSnapshot(q, (querySnapshot) => {
        let i = 0;

        const answers = [];
        querySnapshot.forEach((doc) => {
            console.log(`${i++}:`, doc.data());
            answers.push(doc.data());
        });

        subFunction(answers);
    });

    return unsub;
}


export const updateQuestions = async (courseId, questions) => {
    const docRef = doc(db, "courses", courseId);

    await updateDoc(docRef, {
        questions: questions
    });
}

