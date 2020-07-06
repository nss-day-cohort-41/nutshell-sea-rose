// by Zach McWhirter

const user = sessionStorage.getItem("user")

// This will be the html represention
const renderMessageToDom = (msgObject) => {
    const renderMessage = `
        <section class="messageCard">
            <div class="messageCard__div">
                <p ><font color="firebrick"; font-weight:bold> <u>${user}:</u></font> ${msgObject.message}</p>
                <button id="editButton--${msgObject.id}">Edit</button>
            </div>`

    return renderMessage
}

export default renderMessageToDom; 