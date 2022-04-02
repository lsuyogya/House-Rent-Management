import axiosInstance from "../axios";

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
