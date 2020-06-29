import API from "./authenticationProvider.js"

// Written by Nick Glover
const userLogin = document.querySelector("#loginUsername")
const passwordLogin = document.querySelector("#loginPassword")
const submitLoginButton = document.querySelector("#loginButton")

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
                })

                // We decided to use a key value pairs for our session storage.
                sessionStorage.id = user.id
                sessionStorage.user = user.user
                console.log(sessionStorage)
            })
    })
}

export default sessionStorageLogIn