//Setting url will be used for all fetch calls
const url = "http://localhost:3000";

const API = {
    getSingleUser: (id) => {
        return fetch(`${url}/users/${id}`)
        .then(response => response.json());
    },

    addAUser: (userObj) => {
		return fetch(`${url}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(userObj)
		}).then(response => response.json());
    }   
}
export default API;