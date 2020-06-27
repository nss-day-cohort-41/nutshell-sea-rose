
import authenticationAPI from "./authenticationProvider.js"


const authenticationSubmitButton = document.querySelector('#authentication-submit-button');
const createAccountSubmitButton = document.querySelector('#create-account-submit-button');


authenticationSubmitButton.addEventListener('click', e => {
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password")
    authenticationAPI.signInUser(usernameInput.value, passwordInput.value);
    
});

createAccountSubmitButton.addEventListener('click', e => {
	const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password")
    const emailInput = document.querySelector("#email")
    authenticationAPI.createNewUser(usernameInput.value, emailInput.value, passwordInput.value);
    alert(usernameInput.value, emailInput.value, passwordInput.value)


});



export default {};




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