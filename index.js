const inputTask = document.getElementById('input-task');
const addTask = document.getElementById('btn');
const container = document.getElementById('task-container')

addTask.addEventListener("click", function() {
   const taskDiv = document.createElement('div');
   taskDiv.classList.add('task-div')
   const para = document.createElement('p')
   para.classList.add('added-tasks');
   const delBtn = document.createElement('button');
   const delText = document.createTextNode('Delete');
   delBtn.appendChild(delText);
   delBtn.classList.add('delete-btn');
   container.appendChild(taskDiv);
   taskDiv.appendChild(para)
   taskDiv.appendChild(delBtn)
   para.innerText= inputTask.value;
   inputTask.value = '';

   para.addEventListener('click', function() {
      para.style.textDecoration = 'line-through'
   })

   delBtn.addEventListener('click', function() {
      container.removeChild(taskDiv)
   })
   
  
});
 