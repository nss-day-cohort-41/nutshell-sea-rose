// Setting url that will be used for all fetch calls
const url = "http://localhost:3000";
/* 
const API = {
  
    getSingleUser: (id) => {
    //return fetch(`${url}/users/${id}`)
    return fetch(`http://localhost:3000/Users/${id}`)
		.then(response => response.json());
    },
}



export default API;
 */


const API = {
  allUsers: [],
  getSingleUser(id) {
  //return fetch(`${url}/users/${id}`)
  return fetch(`http://localhost:3000/Users/${id}`)
  .then(response => response.json()).then((userArray)=> {
    API.allUsers = userArray;
  })
  }}


  export default API;