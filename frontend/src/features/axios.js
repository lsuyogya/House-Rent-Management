import axios from "axios";

const baseURL = "http://localhost:8000";

let headers = {};
if (localStorage.token) {
	headers.Authorization = `Authorization ${localStorage.token}`;
}

const axiosInstance = axios.create({
	baseURL: baseURL,
	headers: headers,
});

export default axiosInstance;
