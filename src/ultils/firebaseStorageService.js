import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, listAll } from "firebase/storage";
import _ from "lodash";
import app from '../firebase';

const storage = getStorage(app);

const deleteImage = (ref, id) => {
    listAll(ref)
        .then((res) => {
            res.items.forEach((itemRef) => {
                // All the items under listRef.
                console.log(itemRef);
                if (_.includes(itemRef.name, id)) {
                    deleteObject(itemRef);
                    return;
                }
            });
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });
}

const getTailImage = (image) => {
    return image.name.substring(image.name.lastIndexOf('.'));
}

const getRefNameFromURL = (imageURL) => {
    let result = null;
    if (_.includes(imageURL, 'https://firebasestorage.googleapis.com/v0/b/finding-mentor-fad7e.appspot.com')) {
        const regex = /(https:\/\/firebasestorage\.googleapis\.com\/v0\/b\/finding-mentor-fad7e\.appspot\.com)\/o\/(?<name>([\w\.]+))\?alt=(?<alt>[\w]+)&token=(?<token>[\w\-]+)/gm;

        let groups = imageURL.match(regex).groups;
        let test = 'https://firebasestorage.googleapis.com/v0/b/finding-mentor-fad7e.appspot.com/o/1635994464940.png?alt=media&token=2186f434-3821-48dc-a4ba-7bcedf751a9d';
        result = groups.name;
    }
    return result;
}

const uploadCourseImage = (image, id, successFunc) => {
    if (!image) {
        successFunc(null);
        return;
    }
    const imageRef = ref(storage, `course/${id}${getTailImage(image)}`);

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
    const imageRef = ref(storage, `avatar/${id}${getTailImage(image)}`);

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

const deleteCourseImage = (id) => {
    const listRef = ref(storage, 'course/');
    deleteImage(listRef, id);
}

const deleteAvatarImage = (id) => {
    const listRef = ref(storage, 'avatar/');
    deleteImage(listRef, id);
}



export { updateAvatarImage, uploadCourseImage, deleteCourseImage };