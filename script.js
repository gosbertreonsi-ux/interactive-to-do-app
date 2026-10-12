const addTask=document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const category = document.getElementById("category");
const priority = document.getElementById("priority");
const dueDate = document.getElementById("dueDate");
const tasksContainer = document.getElementById("tasksContainer");

const taskCounter=
document.getElementById("taskCounter");


let total=0;

addTask.addEventListener("click",createTask);


function createTask(){
    let taskText = taskInput.value.trim();
    
    if(taskText===""){
        alert("Enter a task");
        return;
    }
    
    total++;
    
    taskCounter.textContent = `${total} Tasks`;
    
    const card = document.createElement("div");
    card.classList.add("task-card");
    card.innerHTML=`
    <div class="task-top">
    
    <h3>${taskText}</h3>
    <div class="priority ${priority.value}"> ${priority.value} </div>
    
    </div>

    <p>📂 ${category.value}</p>
    <p>📅 ${dueDate.value}</p>
    
    <div class="actions">
    
    <button class="complete">Done</button>
    <button class="delete">Delete</button>
    
    </div>
    `;
    
    tasksContainer.appendChild(card);
    taskInput.value="";
    dueDate.value="";
    
    const deleteBtn = card.querySelector(".delete");
    deleteBtn.addEventListener("click",()=>{
        card.remove();
        total--;
        taskCounter.textContent=`${total} Tasks`;
    });
    
    const completeBtn = card.querySelector(".complete");
    completeBtn.addEventListener("click",()=>{
        card.style.opacity=".6";
        card.style.textDecoration="line-through";
    });

}