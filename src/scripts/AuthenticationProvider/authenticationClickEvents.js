
import authenticationAPI from "./authenticationProvider.js"

const authenticationAPI = {
	createUser(username, password) {
		alert(`username: ${username}, password: ${password}`);
	}
}









// const loginSubmitButton = document.querySelector("#login__button")

//    const registerLoginListener = () => {
//         loginSubmitButton.addEventListener("click", event => {
//             console.log("I click first", event.target.id)
//             const userLogin = document.querySelector("#loginUsername").value
//             const passwordLogin = document.querySelector("#loginPassword").value
//             auththenticationAPI.getSingleUser(userLogin)
//             .then((loginArray) => {
//                 // clearInputs()
//                 console.log(userLogin)
//                 console.log(loginArray)
//                 console.log("click last")
//             })
//         })  
//    }

// export default registerLoginListener