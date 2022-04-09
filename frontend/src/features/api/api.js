import axiosInstance from "../axios";
import axios from "axios";

const baseUrl = `${process.env.REACT_APP_Base_Url_Backend}`;

export const getAPI = async (url) => {
	try {
		const response = await axiosInstance.get(url);
		return response.data;
	} catch (e) {
		console.log(e);
	}
};

export const postAPI = async (url, body) => {
	try {
		const response = await axiosInstance.post(url, body);
		return response.data;
	} catch (e) {
		return `Request failed: \n ${e.message}`;
	}
};

export const getUnauthenticatedAPI = async (url) => {
	try {
		const response = await axios.get(`${baseUrl}${url}`);
		return response.data;
	} catch (e) {
		console.log(e);
	}
};

export const postUnauthenticatedAPI = async (url, body) => {
	try {
		const response = await axios.post(`${baseUrl}${url}`, body);
		return response.data;
	} catch (e) {
		return `Request failed: \n ${e.message}`;
	}
};
