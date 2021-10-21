import jwt_decode from "jwt-decode";

export default class JwtToken {
    static clear = () => localStorage.removeItem('fm_jwt_decode');

    static setJWTDecode = (token) => {
        localStorage.setItem('fm_jwt_token', token);
        localStorage.setItem('fm_jwt_decode', JSON.stringify(jwt_decode(token)))
    }
    static getJWTDecodeObj = () => JSON.parse(localStorage.getItem("fm_jwt_decode"));
    static getJWTDecode = () => localStorage.getItem("fm_jwt_decode");
    static getJWTToken = () => localStorage.getItem("fm_jwt_token");
}