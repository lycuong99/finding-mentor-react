import _ from 'lodash';

export * from './firebaseStorageService';
export * from './firestoreService';

const formatName = (fullname) => {
    return _.join(_.split(_.trim(fullname), /\s+/i), '+');
}
export const getAvatarLetter = (fullname) => {
    //formatName
    return `https://ui-avatars.com/api/?name=${formatName(fullname)}`;
}