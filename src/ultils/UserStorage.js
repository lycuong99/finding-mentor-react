import jwt_decode from "jwt-decode";

const USER_ID_KEY = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier';
const USER_ROLE = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
export default class JwtToken {
    static clear = () => localStorage.removeItem('fm_jwt_decode');

    static setJWTDecode = (token) => {
        localStorage.setItem('fm_jwt_token', token);
        localStorage.setItem('fm_jwt_decode', JSON.stringify(jwt_decode(token)));
        let obj = jwt_decode(token);

        let userId = obj[USER_ID_KEY];
        console.log(userId);
        localStorage.setItem('fm_userId', userId);
        localStorage.setItem('fm_userRoles', obj[USER_ROLE]);
    }
    static getJWTDecodeObj = () => JSON.parse(localStorage.getItem("fm_jwt_decode"));
    static getJWTDecode = () => localStorage.getItem("fm_jwt_decode");
    static getJWTToken = () => localStorage.getItem("fm_jwt_token");
    static getUserId = () => localStorage.getItem('fm_userId');
}