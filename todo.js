let button=document.getElementById('add');
let todoList=document.getElementById('todoList');
let input=document.getElementById('input');

let todos = []; // Adding Array

button.addEventListener('click',()=>{
    todos.push(input.value)
    addtodo(input.value);
    input.value='';   // emptying the entered value.
})

function addtodo(todo){
    let para=document.createElement('p');
    para.innerText=todo;
    todoList.appendChild(para);    // appending in <div> tag.

    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through';
        remove(todo);  // Removing the items from array.

    })

    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para);
        remove(todo);  // Removing the items from array.

    })


 function remove(todo){
   let index = todos.indexOf(todo);
   if(index>-1)
    todos.splice(index,1);

 }
}