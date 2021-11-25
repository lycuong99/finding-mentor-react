import axios from "axios";

const testAPI = 'https://localhost:44307/api/';
const official = "http://beclean.store:2020/api/";
export default axios.create({
    baseURL:official
});