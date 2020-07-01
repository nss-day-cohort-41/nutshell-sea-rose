// Setting url that will be used for all fetch calls
const API = {

	getAllUsers: () => {
		return fetch("http://localhost:3000/users")
			.then(response => response.json());
	},

	createUser: (newUser) => {

		console.log(newUser);
		return fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newUser)
		}).then(response => response.json())

	}

}

export default API;