import API from "./authenticationProvider.js"

const userLogin = document.querySelector("#loginUsername")
const passwordLogin = document.querySelector("#loginPassword")
const submitLoginButton = document.querySelector("#loginButton")

const sessionStorageLogIn = () => {
    submitLoginButton.addEventListener('click', event => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(userArray => {
                let user = userArray.find(function (user) {
                    return user.user === userLogin.value
                })
                sessionStorage.id = user.id
                console.log(sessionStorage)
            })
    })
}

export default sessionStorageLogIn