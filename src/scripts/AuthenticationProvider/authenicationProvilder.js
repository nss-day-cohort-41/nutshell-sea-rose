// Setting url that will be used for all fetch calls
const url = "http://localhost:3000";

const API = {
    getSingleUser: (id) => {
		return fetch(`${url}/user/${id}`)
		.then(response => response.json());
    },
}

export default API;