const url = "http://localhost:3000";

const messageAPI = {

    getAllMessages: () => {
        return fetch("http://localhost:3000/messages")
        .then(response => response.json());
    },
    submitMessage: (newMsg) => {
        return fetch(`${url}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMsg)
        })
    },
    updateMessage: (id, updatedMessage) => {
        return fetch(`${url}/messages/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedMessage)
        })
    }
}

<<<<<<< HEAD
export default messageAPI
=======
export default messageAPI 
>>>>>>> 21443830b258b06e12b1b4232bb941f8d466c2c6
