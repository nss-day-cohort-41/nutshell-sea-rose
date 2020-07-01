const messageAPI = {

    getAllMessages: () => {
        return fetch("http://localhost:3000/messages")
        .then(response => response.json());
    },
    submitMessage: (newMsg) => {
        return fetch("http://localhost:3000/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMsg)
        })
        

    }
}

// NEXT UP:
// updateMessage function




export default messageAPI