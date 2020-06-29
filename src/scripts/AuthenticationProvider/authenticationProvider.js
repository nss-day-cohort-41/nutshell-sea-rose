// Setting url that will be used for all fetch calls
const API = {

    getAllUsers: () => {
      return fetch("http://localhost:3000/users/")
      .then(response => response.json());
    },
  
    // getSingleUser: (id) => {
    // //return fetch(`${url}/users/${id}`)
    // return fetch(`http://localhost:3000/Users/${id}`)
	// 	.then(response => response.json());
	// },
	createUser: (username, email, password) => {
		return fetch(`${url}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(username, email, password)
		}).then(response => response.json())
		

	}
	
	// createUser: (username, email, password) => {
	// 	return fetch(`${url}/users`,
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify({ username: username, email: email, password: password })
		
	// })		.then(response => response.json());
}

export default API;
 
