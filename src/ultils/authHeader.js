import JwtToken from './UserStorage';

export default function authHeader() {
    // return authorization header with jwt token
    let token = JwtToken.getJWTToken();

    if (token) {
        return { 'Authorization': 'Bearer ' +token };
    } else {
        return {};
    }
}