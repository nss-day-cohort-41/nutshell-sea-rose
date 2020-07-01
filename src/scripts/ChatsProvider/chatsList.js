import messageAPI from "./chatsProvider.js"
import renderMessageToDom from "./chatsDOM.js"
//Wriiten by Zach McWhirter

//Places the rendered html code to the chat message container
const postedMessageContainer = document.querySelector(".postedMessage__Container");

const makeMessageList = () => {
    postedMessageContainer.innerHTML = "";
    messageAPI.getAllMessages()
    .then((messageArray) => {
        const allMessages = messageArray.map(msg => {
            const htmlComponent = `<p>${msg.message}</p>`
            return htmlComponent;
        });
        messageArray.forEach(msg => {
            postedMessageContainer.innerHTML += renderMessageToDom(msg)
        })
    })
}

export default makeMessageList