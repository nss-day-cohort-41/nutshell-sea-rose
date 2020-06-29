// Setting url that will be used for all fetch calls
const API = {

    getAllUsers: () => {
      return fetch("http://localhost:3000/users")
      .then(response => response.json());
    },
  
    // getSingleUser: (id) => {
    // //return fetch(`${url}/users/${id}`)
    // return fetch(`http://localhost:3000/Users/${id}`)
	// 	.then(response => response.json());
	// },
	createUser: (newUser) => {
		
		console.log(username, email, password);
		return fetch("http://localhost:3000/users"), {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newUser)
		}.then(response => response.json())
		
	}
	
}

export default API;
 
