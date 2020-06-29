import API from "./authenticationProvider.js"

// Written by Nick Glover
const userLogin = document.querySelector("#loginUsername")
const passwordLogin = document.querySelector("#loginPassword")
const submitLoginButton = document.querySelector("#loginButton")
const createAccountButton = document.querySelector("#create-account-button")


// Login event for the webpage
const sessionStorageLogIn = () => {
    submitLoginButton.addEventListener('click', event => {
        API.getAllUsers()
            .then(userArray => {
                let user = userArray.find((user) => {
                    
                    // Validation for password and username
                    if (passwordLogin.value === user.password && user.user === userLogin.value) {
                        return user.user === userLogin.value

                    } 
                    // else if(user) {
                    //     // user IS NOT signed in, so only sign in and create account buttons are visible.
                    //     authenticationSubmitButton.disabled = false;
                    //     createAccountSubmitButton.disabled = false;
                    //     signOutButton.disabled = true;
                    // } else {
                    //     // user IS signed in, so only sign out button is visible.
                    //     authenticationSubmitButton.disabled = true;
                    //     createAccountSubmitButton.disabled = true;
                    //     signOutButton.disabled = false;
                    // }
                })

                // We decided to use a key value pairs for our session storage.
                sessionStorage.id = user.id
                sessionStorage.user = user.user
                console.log(sessionStorage)
                
            })
    })
}

const createNewUserAccount = () => {
    createAccountButton.addEventListener("click", event => {
        API.createUser()
    })
}

export default sessionStorageLogIn