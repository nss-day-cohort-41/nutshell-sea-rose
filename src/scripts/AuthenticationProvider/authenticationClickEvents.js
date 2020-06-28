import API from "./authenticationProvider.js"

const userLogin = document.querySelector("#loginUsername")
const passwordLogin = document.querySelector("#loginPassword")
const submitLoginButton = document.querySelector("#loginButton")

const sessionStorageLogIn = () => {
    submitLoginButton.addEventListener('click', event => {
        API.getAllUsers()
            .then(userArray => {
                let user = userArray.find((user) => {
                    if (passwordLogin.value === user.password && user.user === userLogin.value) {
                        return user.user === userLogin.value
                    } 
                })
                sessionStorage.id = user.id
                sessionStorage.user = user.user
                console.log(sessionStorage)
            })
    })
}

export default sessionStorageLogIn