import axios from "axios";

export default axios.create({
    baseURL: "http://beclean.store:2020/api/"
});