let idCounter = 0;

const addTask = () => {
    let input = document.getElementById("todoInput");
    let ourTasks = document.getElementById("ourTasks");

    let nodeToAppend = document.createDocumentFragment();
    let divPart = nodeToAppend.appendChild(document.createElement("div"));

    divPart.textContent = input.value;

    let removeButton = divPart.appendChild(document.createElement("button"));

    removeButton.className="remove";

    removeButton.id = idCounter;

    ourTasks.appendChild(nodeToAppend);
    idCounter++;
}


document.getElementsByClassName("remove").on("click", () => {
    console.log("KURWAAAAAAAAAA");
});