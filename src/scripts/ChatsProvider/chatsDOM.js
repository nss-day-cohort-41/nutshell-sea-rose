

// by Zach McWhirter

// This will be the html 
const renderMessageToDom = (msgObject) => {
        const renderMessage = `
        <section class="outerChat___Container">
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
        </section>`

        return renderMessage
    
}

export default renderMessageToDom;