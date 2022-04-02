import axios from "axios";

const baseURL = "http://localhost:8000";

let headers = {};
if (localStorage.authToken) {
	// headers.Authorization = `Authorization ${localStorage.authToken}`;
}

const axiosInstance = axios.create({
	baseURL: baseURL,
	headers: headers,
});

export default axiosInstance;
