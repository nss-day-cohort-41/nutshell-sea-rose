<<<<<<< HEAD

=======
>>>>>>> 21443830b258b06e12b1b4232bb941f8d466c2c6
// by Zach McWhirter

const user = sessionStorage.getItem("user")

// This will be the html represention
const renderMessageToDom = (msgObject) => {
        const renderMessage = `<section class="messageCard">
<<<<<<< HEAD
        <div>
            <p><font color="gray"; font-weight:bold;> ${user}:</font> ${msgObject.message}</p>
            <button id="editButton--${msgObject.id}">Edit</button>
        </div>`      
            
        return renderMessage
}

export default renderMessageToDom;
=======
        <div >
            <p><font color="black"; font-weight:bold;> ${user}:</font> ${msgObject.message}</p>
            <button id="editButton--${msgObject.id}">Edit</button>
        </div>`      

        return renderMessage
}

export default renderMessageToDom; 
>>>>>>> 21443830b258b06e12b1b4232bb941f8d466c2c6
