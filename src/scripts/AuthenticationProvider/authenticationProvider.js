// Setting url that will be used for all fetch calls
const API = {

    getAllUsers: () => {
      return fetch(`http://localhost:3000/users/`)
      .then(response => response.json());
    },
  
    getSingleUser: (id) => {
    //return fetch(`${url}/users/${id}`)
    return fetch(`http://localhost:3000/Users/${id}`)
		.then(response => response.json());
    },
}

export default API;
 