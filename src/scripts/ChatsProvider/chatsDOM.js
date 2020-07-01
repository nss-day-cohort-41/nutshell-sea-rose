

// by Zach McWhirter

// This will be the html 
const renderMessageToDom = (msgObject) => {
        const renderMessage = `<section class="messageCard">
        <div>
            <p><font color="gray"; font-weight:bold;> Username:</font> ${msgObject.message}</p>
            <button id="editButton--${msgObject.id}">Edit</button>
        </div>`      
            

        return renderMessage
    
}

export default renderMessageToDom;

/* <section class="outerChat___Container">
        <section class="postedMessage__Container">
        </section>
            <article class="newMessage__Container">
                <form id="message__Form" action="">
                    <input type="hidden" id="messageId" value="" />
                    <fieldset>
                        <label for="chat__Message">Chat:</label>
                        <textarea placeholder="Your Message Here..." name="newMessage" class="input__field" id="newMessageContent" cols="40" rows="2">${msgObject.message}</textarea>
                    </fieldset>
                </form>
                    <button type="submit" id="sendMessageButton">Send Message</button>   
            </article>
        </section> */

                // <form id="message__Form" action="">
                //     <input type="hidden" id="messageId" value="" />
                    
                //         <label for="chat__Message"></label>
               
                    
                // </form>