const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.getElementById("todoList");

const TODOS_KEY = "todos";

let toDos = [];

todoForm.addEventListener("submit", handleTodoSubmit);

function handleTodoSubmit(e){           //input의 입력값을 저장하고 입력칸을 공백으로 만듦 
    e.preventDefault();
    const newTodo = todoInput.value;    // submit하는 텍스트를 저장하고
    todoInput.value = "";               // 텍스트상자 안의 텍스트를 초기화시켰다.
    const newTodoObject = {
        text : newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObject);                // newTodo 에 [](array)를 추가함
    paintTodo(newTodoObject);                 // newTodo 인수가 있는paintTodo를 실행
    saveTodos();
}
function paintTodo(newTodo){  //

    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    const button2 = document.createElement("button");
    span.innerText = newTodo.text;   //span의 안에 텍스트를 넣는다. newTodo를(newTodo는 텍스트에 입력한(#todoForm input) value값)
    button.innerText = "✖";
    button.addEventListener("click",deleteTodo)
    button2.innerText = "✏";
    button2.addEventListener("click",editTodo);
    li.appendChild(span);       // li의 child로 span을 넣는다 >> li span
    li.appendChild(button);  
    li.appendChild(button2);    
    todoList.appendChild(li);   //todo리스트의 child로 li를 넣는다.
}
function editTodo(event){
    alert("제작 중입니다.")
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}
function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  //JSON.stringify = string을 array로 바꿔주는 브라우저의 기능
}

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos != null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

