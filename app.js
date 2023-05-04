const input = document.querySelector('.input');
const addButton = document.querySelector('.addButton');
const alertMessage = document.querySelector('.message');
const toDoListOfItems = document.querySelector('.toDoList');
const clearAllButton = document.querySelector('.clearButton');


addButton.addEventListener('click', addItem);

// ----------------> For Add Item Function
let arrayOfListOfToDoItems = []

function addItem() {
    const itemID = new Date().getTime().toString();
  
    if(input.value !== '') {
        let toDoItem = document.createElement("div");
        let attr = document.createAttribute("data-id");
        attr.value = itemID;

        toDoItem.setAttributeNode(attr);
        toDoItem.classList.add("toDoItem");
        toDoItem.innerHTML =   `<div class="addItem">
                                    <p class="m-0">${input.value}</p>
                                </div>
                                <div class="editDeleteButtons">
                                    <button type="button" class="editBtn">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                        </button>
                                    <button type="button" class="deleteBtn">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>`;
                                
        input.value = '';
        toDoListOfItems.appendChild(toDoItem);
        clearAllButton.classList.remove('hide');
        // console.log(toDoItem.getAttribute('data-id'))
        // arrayOfListOfToDoItems.push({id:itemID, item:toDoItem,});

        // -------> For Alert Message Function
        messageAlert("Item added on the list successfully", "#016b01", "rgba(0, 218, 0, 0.3)");

        // -------> For Delete Button Function
        const deleteBtns = document.querySelectorAll('.deleteBtn');
        deleteBtns.forEach( (dltBtn) => {
            dltBtn.addEventListener('click', deleteTodoListItem);
        })

        // -------> For Clear-All Button
        clearAllButton.addEventListener('click', clearAllTodoListItem);
    }
    else {
        messageAlert("Please! enter the value before", "#8E0E00", "rgba(190, 19, 0, 0.3)");
    }
}
// console.log(arrayOfListOfToDoItems)

// -------> For Alert Message Function
function messageAlert(innerText, fontColor, alertBackground){
    alertMessage.innerHTML = innerText;
    alertMessage.style.color = fontColor;
    alertMessage.style.backgroundColor = alertBackground;
    alertMessage.classList.remove('hide');
    setTimeout( function () {
        alertMessage.innerHTML = '';
        alertMessage.classList.add('hide');
    }, 1000);
}

// -------> For Delete Button Function
function deleteTodoListItem(i) {
    const toDoDeleteItem = i.currentTarget.parentElement.parentElement;
    toDoListOfItems.removeChild(toDoDeleteItem);
    
    // console.log(toDoListOfItems.children)
    if(toDoListOfItems.children.length === 0){
        clearAllButton.classList.add('hide');
    }

    messageAlert("Item deleted on the list successfully", "#8E0E00", "rgba(190, 19, 0, 0.3)");
}

// -------> For Clear-All Button
function clearAllTodoListItem() {
    const toDoListOfChildrens = document.querySelectorAll('.toDoItem');
    
    // console.log(toDoListOfChildrens)
    toDoListOfChildrens.forEach((child) => {
        toDoListOfItems.removeChild(child);
    });
    clearAllButton.classList.add('hide');
    
    messageAlert("All item deleted on the list successfully", "#8E0E00", "rgba(190, 19, 0, 0.3)");
}