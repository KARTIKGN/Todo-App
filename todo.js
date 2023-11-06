let todoItems=[
  {
    item:'kartik',
    duedate:'4/12/2023'
  },
  {
    item:'abhishek',
    duedate:'5/10/2023'
  }
];
Display();
function addTodo(){
  let inputeELemnt=document.querySelector('#todo-input');
  let todoItem=inputeELemnt.value;
  let dateElement=document.querySelector('#todo-date');
  let dateItem=dateElement.value;
  todoItems.push({item:todoItem,duedate:dateItem});
  inputeELemnt.value='';
  dateElement.value='';
  Display();
}
function Display(){
  let containerElement=document.querySelector('#todo-container');
  let newHtml='';
  for(let i=0;i<todoItems.length;i++){
    let {item,duedate}=todoItems[i];
    newHtml+=`
      <span>${item}</span>
      <span>${duedate}</span>
      <button class="delet-btn" onclick="todoItems.splice(${i},1); Display()">Delete</button>
    `;
    
  }
  containerElement.innerHTML=newHtml;
  
}