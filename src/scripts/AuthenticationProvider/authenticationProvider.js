//Setting url will be used for all fetch calls
const url = "http://localhost:3000/users"
	

// These will be altered to become our fetch calls when we are ready for them


const authenticationAPI = {
	signInUser() {
		console.log((`${url}.value`))
		
	},
	createNewUser(username, email, password) {
		return fetch(`username: ${username}, password: ${password},email: ${email}`)
		.then(response => response.json());
	} 
}






// url.forEach(user => {

//     for (const value of Object.values(user)) {
//       console.log(value)
//     }
// })


// const auththenticationAPI = {
//     getSingleUser: (id) => {
//         return fetch(`${url}/users/${id}`)
//         .then(response => response.json());
//     },

//     addAUser: (userObj) => {
// 		return fetch( {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			body: JSON.stringify(userObj)
// 		}).then(response => response.json());
//     }   
// }

export default authenticationAPI;