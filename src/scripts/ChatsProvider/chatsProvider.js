const messageAPI = {

    getAllMessages: () => {
        return fetch("http://localhost:3000/messages")
        .then(response => response.json());
    },
}

export default messageAPI