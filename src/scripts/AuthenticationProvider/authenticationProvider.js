//Setting url will be used for all fetch calls
const url = "http://localhost:3000";

// These will be altered to become our fetch calls when we are ready for them
const authenticationAPI = {
	signInUser(username, password) {
		alert(`username: ${username}, password: ${password}`);
	},
	createNewUser(username, email, password) {
		alert(`username: ${username},  password: ${password},email: ${email}`);
	}
}


export default authenticationAPI;

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