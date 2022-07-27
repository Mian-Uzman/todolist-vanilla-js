class Todos {
    todo = [];
    constructor() {
        this.input = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.addEventToButton();
    }

    addEventToButton() {
        this.addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.addTodo();
        });
    }


    showInitialValues() {
        console.log(this.input);
        console.log(this.addBtn);
        console.log(this.todoList);
    }
    addTodo() {
        const typedText = this.input.value.trim();
        if (typedText === '') {
            alert('Todo should not be empty')
        } else {
            const li = document.createElement('li')
            li.className = 'list-group-item d-flex justify-content-between p-3'
            li.innerHTML = `<span>
                        <input type="checkbox">
                       <p class="d-inline">${typedText}</p>
                    </span>
                    <div>
                        <i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                        <i class="bi bi-trash" id="deleteBtn"></i>
                    </div>`
            todolist.append(li)
            this.input.value = '';
            const editBtn = li.querySelector('div>i:first-child')
            const deleteBtn = li.querySelector('div>i:last-child')

            deleteBtn.addEventListener('click', () => {
                this.removeTodo(deleteBtn)
            })

            editBtn.addEventListener('click', () => {
                this.editTodo(editBtn)
            })
        }


    }
    removeTodo(deleteBtn) {
        deleteBtn.parentNode.parentNode.remove()
    }

    editTodo(editBtn) {
        const editItem = editBtn.parentNode.parentNode.firstElementChild.lastElementChild.innerHTML
        const editText = `${editItem}`;
        const editInput = document.getElementById('todoEdit')
        editInput.value = editText

        const modalEditBtn = document.getElementById('modalEditBtn')
        modalEditBtn.addEventListener('click', function editListener() {
            editBtn.parentNode.parentNode.firstElementChild.lastElementChild.innerHTML = editInput.value
            modalEditBtn.removeEventListener('click', editListener);
        })
    }
}
const todo = new Todos();
// todo.showInitialValues();
