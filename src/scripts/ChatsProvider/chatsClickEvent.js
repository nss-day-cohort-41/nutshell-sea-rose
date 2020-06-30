import messageAPI from "./chatsProvider.js"

//Wriiten by Zach McWhirter

const sendMessageButton = document.querySelector("#sendMessageButton");
const newMessageField = document.querySelector("#newMessageField")

// Click event for posting a message in the chat
const postMessage = () => {
    sendMessageButton.addEventListener("click", event => {
        
        // let currentMessage;
        // messageAPI.getAllMessages()
        //     .then(messageArray => {
        //         let currentMessage = messageArray.find((currentMessage) => {

                    
        //         })

        //     })
    })
}
console.log(postMessage(sendMessageButton), "Message posted to chat!")
export default postMessage