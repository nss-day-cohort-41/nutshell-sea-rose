import messageAPI from "./chatsProvider.js"
import renderMessageToDom from "./chatsDOM.js"
//Wriiten by Zach McWhirter

//Places the rendered html code to the chat message container
const postedMessageContainer = document.querySelector(".postedMessage__Container");

const makeMessageList = () => {
    postedMessageContainer.innerHTML = "";
    messageAPI.getAllMessages()
    .then((messageArray) => {
        messageArray.forEach(msg => {
            postedMessageContainer.innerHTML += renderMessageToDom(msg)
        })
    })
}

<<<<<<< HEAD
export default makeMessageList
=======
export default makeMessageList 
>>>>>>> 21443830b258b06e12b1b4232bb941f8d466c2c6
