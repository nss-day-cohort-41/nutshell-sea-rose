
<<<<<<< HEAD

=======
>>>>>>> 21443830b258b06e12b1b4232bb941f8d466c2c6
const url = "http://localhost:3000";

const editMessageFunction = (msgId) => {

    const hiddenMessageId = document.querySelector("#messageId")
    const editMessageContent = document.querySelector("#newMessageContent")

    fetch(`${url}/messages/${msgId}`)
        .then(response => response.json())
        .then(msg => {
            hiddenMessageId.value = msg.id
            editMessageContent.value = msg.message
        })
}


<<<<<<< HEAD
export default editMessageFunction;
=======
export default editMessageFunction; 
>>>>>>> 21443830b258b06e12b1b4232bb941f8d466c2c6
