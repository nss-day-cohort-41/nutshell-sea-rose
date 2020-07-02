

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


export default editMessageFunction;