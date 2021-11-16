import { getFirestore, collection, addDoc, setDoc, doc, deleteDoc } from "firebase/firestore";
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

    // db.collection("courses").add({
    //     name: "Tokyo",
    //     country: "Japan"
    // }).then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    // }).catch((error) => {
    //     console.error("Error adding document: ", error);
    // });

    // db.collection("courses").doc('345').set({
    //     id: id,
    //     curriculum: curriculum,
    //     questions: []
    // }).then(() => {
    //     console.log("Course successfully crate!");
    // }).catch((error) => {
    //     console.error("Error writing Course: ", error);
    // });
}

export const deleteCourseFirebase = async (id) => {
    await deleteDoc(doc(db, "courses", id));
}

