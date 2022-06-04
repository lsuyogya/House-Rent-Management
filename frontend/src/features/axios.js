import axios from 'axios';

const baseURL = `${process.env.REACT_APP_Base_Url_Backend}`;

let header = {};
// if (localStorage.authToken) {
// headers.Authorization = `Authorization ${localStorage.authToken}`;
if (
	localStorage.authToken != 'undefined' &&
	localStorage.authToken != undefined
) {
	header.Authorization = `Token ${localStorage.authToken}`;
} else {
	header = {};
}
// headers.Authorization = 'Token 53243b1f01f12ddd85403c6ea6ad78fa199e366b';
// }
const axiosInstance = axios.create({
	baseURL: baseURL,
	headers: header,
});

export default axiosInstance;
