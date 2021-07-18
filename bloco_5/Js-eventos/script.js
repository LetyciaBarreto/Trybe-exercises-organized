function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function dataOfTheMonth(){
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let daysList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index++){
    const data = dezDaysList[index];
    const dataList = document.createElement( 'li');
   if(data === 24 || data === 31){
    dataList.className = 'day holiday';
    dataList.innerHTML = data;
    daysList.appendChild(dataList);

   } else if( data === 4 || data === 11 ||data === 18) {
    dataList.className = 'day friday';
    dataList.innerHTML = data;
    daysList.appendChild(dataList);

   } else if( data === 25){
    dataList.className = 'day holiday friday';
    dataList.innerHTML = data;
    daysList.appendChild(dataList);
    
   }
   else {
    dataList.className = 'day';
    dataList.innerHTML = data;
    daysList.appendChild(dataList);
  }
}
}
 dataOfTheMonth();

// Escreva seu código abaixo.

function holidayButton(string) {
  const holyButton = document.createElement('button');
  holyButton.innerHTML = string;
  holyButton.id = 'btn-holiday';
  const getButtonContainer = document.querySelector('.buttons-container');
  getButtonContainer.appendChild(holyButton);
}
holidayButton('Feriados');

function changeColorHoliday() {
  const getButton = document.querySelector('#btn-holiday');
  const getHoliday = document.querySelectorAll('.holiday');
  getButton.addEventListener('click', () =>{
    for(let i =0; i < getHoliday.length; i++){
      if(getHoliday[i].style.backgroundColor === 'white'){
        getHoliday[i].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        getHoliday[i].style.backgroundColor = 'white';
      }
    }
  })
};
changeColorHoliday();

function buttonFriday(strings){
  const fridayButton = document.createElement('button');
  fridayButton.innerHTML = strings;
  fridayButton.id = 'btn-friday';
  const getContainerId = document.querySelector('.buttons-container');
  getContainerId.appendChild(fridayButton);
}

buttonFriday('Sexta-feira')

function fridayChange(array){
  const getFriday = document.querySelector('#btn-friday');
const daysFridays = document.querySelectorAll('.friday');
// const fridayChanges = 'Sextou'
getFriday.addEventListener('click', () => {
  for(let index =0; index < daysFridays.length; index++) {

  if(daysFridays[index].innerHTML !== 'Sextou'){
    daysFridays[index].innerHTML = 'Sextou';
  } else {
    daysFridays[index].innerHTML = array[index];
  }
  }
})
};
fridayChange([4, 11, 18, 25]);

function zoomDay() {
  const days = document.querySelector('#days');
  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};
function zoomDayOut() {
  const days = document.querySelector('#days');
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};
zoomDay();
zoomDayOut();

function createTasks(task){

  const getClass = document.querySelector('.my-tasks');
  const tasks = document.createElement('span');
  tasks.innerHTML = task;
  getClass.appendChild(tasks);
};

createTasks('estudar');

function createLegend(cor) {
  const getClass = document.querySelector('.my-tasks');
  const createDiv = document.createElement('div');
  createDiv.className = 'task';
  createDiv.style.backgroundColor = cor;
  getClass.appendChild(createDiv);
}
 createLegend('blue');


function selectTask() {
  const getClassTask = document.querySelector('.task');
  const getSelectTask = document.getElementsByClassName('task select');
  getClassTask.addEventListener('click', (event) => {
    if ( getSelectTask.length === 0) {
      event.target.className = 'task select';
    } else {
      event.target.className = 'task';
    }
  });
};
selectTask();

