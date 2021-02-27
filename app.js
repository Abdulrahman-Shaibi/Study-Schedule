// variables 
const table = document.querySelector('.table-wrap');
const submit = document.querySelector('.cta-btn');
const showTable = document.querySelector('.show-schedule');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const printer = document.querySelector('.print');

//Event Listener
submit.addEventListener('click', function(e) {
  submitTable();
  e.preventDefault();
});

printer.addEventListener('click', printTable);


//Functions 1
function submitTable(){

  // Form Variables
  const employed = document.getElementById('employed');
  const notEmplyed = document.getElementById('notEmplyed');
  const subject1 = document.getElementById('subject1').value;
  const subject2 = document.getElementById('subject2').value;
  const subject3 = document.getElementById('subject3').value;
  const subject4 = document.getElementById('subject4').value;
  const subject5 = document.getElementById('subject5').value;
  
  //Condition
  if(!subject1 || !subject2 || !subject3 || !subject4 || !subject5){
     error.style.display = "block"; 
     setTimeout(RemoveError, 3000);   
  }
  else if(subject1 || subject2 || subject3 || subject4 || subject5){
    error.style.display = "none";
    form.style.display = "none";
    submit.style.display = "none";
    loader.style.display = "flex";
    setTimeout(RemoveLoader, 4000);

    if(employed.checked){
      document.querySelectorAll(".cellWork").forEach(cell => cell.innerText = "working time");
    }else if(!employed.checked){
      document.querySelectorAll(".cellWork").forEach(cell => cell.innerText = "Zzzz Sleeping");
    }
    
    subjAsrmt ();


    setTimeout(ShowTable, 4500);
    setTimeout(ShowPrint, 4500);
  }
}


//Function 2 
function RemoveError(){
  error.remove();
}

//Function 3 
function RemoveLoader(){
  loader.remove();
}

//Function 4
function ShowTable(){
  table.className = "table-wrap show-schedule";
}

//Function 5
function printTable(){
  window.print();
}

//Function 6
function ShowPrint(){
  printer.style.display = "flex";
}

//Function Subject Assortment
function subjAsrmt (){
  const rest = document.querySelectorAll('#rest');
  rest.forEach(rest => {
    rest.contentEditable = "true";
  })

  const editCell = document.querySelectorAll('.editCell');
  editCell.forEach(editCell => {
    editCell.contentEditable = "true";
  })

  // subject1  Entries
  subject1 = document.querySelectorAll("#sun").forEach(cell => cell.innerText = subject1.value);

  // subject2  Entries
  subject2 = document.querySelectorAll("#mon").forEach(cell => cell.innerText = subject2.value);

  // subject3  Entries
  subject3 = document.querySelectorAll("#tue").forEach(cell => cell.innerText = subject3.value);

  // subject4  Entries
  subject4 = document.querySelectorAll("#wed").forEach(cell => cell.innerText = subject4.value);

  // subject5  Entries
  subject5 = document.querySelectorAll("#thu").forEach(cell => cell.innerText = subject5.value);  
}

//Function Edit td cell
