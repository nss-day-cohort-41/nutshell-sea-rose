//code written by JR to add functionality to the "New Article" button.

const newArticleButton = document.querySelector("#button__newsFormSave");
newArticleButton.addEventListener("click", event => {
    if (event.target.id.startsWith("button__newsFormSave")) {
        alert("Edit!")
    }
})

export default newArticleButton;