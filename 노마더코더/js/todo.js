const todoForm = document.getElementById('todo-form');
const toDoinput = document.querySelector('#todo-form input')
const todoList = document.getElementById('todo-list');

let toDos =[];

function saveTodo(){
    localStorage.setItem('todos', JSON.stringify(toDos));
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodo();
}

function paintTodo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = '✖';
    button.addEventListener('click',deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoinput.value;
    toDoinput.value ='';
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener('submit', handleTodoSubmit);

const saveToDos = localStorage.getItem('todos');


if(saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
    
}

