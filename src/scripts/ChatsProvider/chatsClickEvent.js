import messageAPI from "./chatsProvider.js"
import makeMessageList from "./chatsList.js";

//Written by Zach McWhirter

//Factory Function for creating a new chat message
const makeNewMessage = (userId, message) => {
    const newMessageTemplate = {
        userId: userId,
        message: message
    };
    return newMessageTemplate
}


const sendMessageButton = document.querySelector("#sendMessageButton");
let newMessageContent = document.querySelector("#newMessageContent")



// Click event for posting a message in the chat
const postMessage = () => {

    sendMessageButton.addEventListener("click", event => {
        //prevents auto refresh
        event.preventDefault();

        newMessageContent = document.querySelector("#newMessageContent").value;
        
        const userId = sessionStorage.getItem("id");
        console.log(userId);
        // console.log(user)
        const newMessage = makeNewMessage(userId, newMessageContent);

        console.log(newMessage)
        messageAPI.submitMessage(newMessage)
        .then(()=> {
            makeMessageList() 
        })
    })
}

export default postMessage