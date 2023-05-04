const form = document.querySelector("[data-form]");
const lists = document.querySelector("[data-list]");
const input = document.querySelector("[data-input]");
const removeAllBtn = document.querySelector(".removeAll_btn");

//local storage
class Storage {
    static addToStorage(todoArr) {
        let storage = localStorage.setItem("todo", JSON.stringify(todoArr));
        return storage;
    }

    static getStorage() {
        let storage = localStorage.getItem("todo") === null ?
            [] : JSON.parse(localStorage.getItem("todo"));
        return storage;
    }
}

//empty array
let todoArr = Storage.getStorage();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let id = Math.random() * 1000;
    const todo = new Todo(id, input.value);
    todoArr = [...todoArr, todo];
    UI.displayData();
    UI.clearInput();
    //removeTodo
    UI.removeTodo();
    //add to storage
    Storage.addToStorage(todoArr);
    UI.removeBtn();
});

class Todo {
    constructor(id, todo) {
        this.id = id;
        this.todo = todo;
    }
}

class UI {
    static displayData() {
        let displayData = todoArr.map((item) => {
            return `
                    <div class="todo">
                    <p class="todo_text">${item.todo}</p>
                    <div class="icon">
                    <span class="remove" data-id=${item.id}>🗑️</span>
                    <span class="edit" data-id=${item.id}>🖊️</span>
                    </div>
                    </div>`
        })
        lists.innerHTML = (displayData).join(" ");
    }

    static clearInput() {
        input.value = "";
    }

    static removeTodo() {
        lists.addEventListener('click', (e) => {
            if (e.target.classList.contains("remove")) {
                e.target.parentElement.parentElement.remove();
                let btnId = e.target.dataset.id;
                UI.removeArrayTodo(btnId);
                UI.removeBtn();
            }
        })
    }
    static removeArrayTodo(id) {
        todoArr = todoArr.filter((item) => item.id !== +id);
        Storage.addToStorage(todoArr);
    }

    static editBtn() {
        let iconChange = true;
        lists.addEventListener("click", (e) => {
            if (e.target.classList.contains("edit")) {
                let p = e.target.parentElement.parentElement.firstElementChild;
                const btnId = e.target.dataset.id;
                if (iconChange) {
                    p.setAttribute("contenteditable", "true");
                    p.focus();
                    e.target.textContent = "Save";
                    p.style.color = "blue";
                } else {
                    e.target.textContent = "🖊️";
                    p.style.color = "black";
                    p.removeAttribute("contenteditable");
                    const newArr = todoArr.findIndex((item) => item.id === +btnId);
                    todoArr[newArr].todo = p.textContent;
                    Storage.addToStorage(todoArr);
                }
            }
            iconChange = !iconChange;
        })
    }

    static removeAll() {
        removeAllBtn.addEventListener("click", () => {
            todoArr.length = 0;
            localStorage.clear();
            UI.displayData();
            UI.removeBtn();
        })
    }

    static removeBtn() {
        if(todoArr.length <= 0) {
            removeAllBtn.style.display = "none";
        } else {
            removeAllBtn.style.display = "flex";
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    UI.displayData();
    UI.removeTodo();
    UI.editBtn();
    UI.removeAll();
    UI.removeBtn();
})