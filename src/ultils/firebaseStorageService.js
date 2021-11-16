import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from '../firebase';

const storage = getStorage(app);




const uploadCourseImage = (image, id, successFunc) => {
    if (!image) {
        successFunc(null);
        return;
    }
    const imageRef = ref(storage, `course/${id}`);

    uploadBytes(imageRef, image).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        // console.log(snapshot);
        getDownloadURL(snapshot.ref)
            .then((url) => {
                // console.log(url);
                successFunc(url);
            })
            .catch((error) => {
                // Handle any errors
                successFunc(null);
                console.log(error);
            });
    });
}
const updateAvatarImage = (image, id, successFunc) => {
    if (!image) {
        successFunc(null);
        return;
    }
    const imageRef = ref(storage, `avatar/${id}`);

    uploadBytes(imageRef, image).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        // console.log(snapshot);
        getDownloadURL(snapshot.ref)
            .then((url) => {
                // console.log(url);
                successFunc(url);
            })
            .catch((error) => {
                // Handle any errors
                successFunc(null);
                console.log(error);
            });
    });
}


export { updateAvatarImage, uploadCourseImage, };