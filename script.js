const toDoItems = document.getElementById("to-do-list");
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        addItem();
    }
})

input.addEventListener("click", (event) => {
    if(event.key === "Enter") {
        addItem();
    }
})

function addItem() {
    const item = document.createElement("div");
    const text = document.createElement("p");
    
    item.className = "item";
    text.textContent = input.value;
        
    // for checkBox and trash 
    const buttons = document.createElement("div");
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i");
    
    buttons.className = "buttons";
    
    checkIcon.className = "fa-solid fa-square-check done";
    checkIcon.addEventListener("click", () => {
        checkIcon.style.color = "limegreen";
    })
    buttons.appendChild(checkIcon);
    
    trashIcon.className = "fa-solid fa-trash remove";
    trashIcon.addEventListener("click", () => {
        
        trashIcon.style.color = "red";
    })
    buttons.appendChild(trashIcon);
    
    item.appendChild(text);
    item.appendChild(buttons);
    
    // console.log(item);
    toDoItems.appendChild(item);
    // console.log(toDoItems);
    
    // Functions for checkbox and trash
    checkIcon.addEventListener("click", () => {
        checkIcon.style.color = "limegreen";
    })

    trashIcon.addEventListener("click", () => {
        toDoItems.removeChild(item);
    })
    input.value = "";
}
