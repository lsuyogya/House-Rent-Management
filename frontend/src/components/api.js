export const Login = async (cred) => {
	try {
		const url = "apiURL here";
		const loginCall = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/JSON" },
			body: JSON.stringify(cred),
		});
		// console.log(loginCall.json())
		return loginCall.json();
	} catch (e) {
		alert("login failed.\n" + e);
	}
};
