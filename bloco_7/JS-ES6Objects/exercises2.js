const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (objeto, key, value) => {
  objeto[key] = value;
}
addTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);

const listKeys = (objeto) => {
  console.log(Object.keys(objeto));
}
listKeys(lesson1);

const lengthObj = (objeto) => Object.keys(objeto).length;
console.log(lengthObj(lesson1));


const listValues = (objeto) => Object.values(objeto).length;
console.log(listValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});
console.log(allLessons);

const AllStudents = (objeto) => {
  let total = 0;
  const array = Object.keys(objeto);
  for (i in array) {
    total += objeto[array[i]].numeroEstudantes;
  }
return total;
}
console.log(AllStudents(allLessons));

const getValueByNumber = (objeto, index) =>
  Object.values(objeto)[index];
console.log(getValueByNumber(lesson1, 2));

const verifyValues = ( objeto, key, value) => {
  const array = Object.entries(objeto);
  let isEqual = false;
  for ( let i in array) {
    if(array[i][0] === key && array[i][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyValues(lesson2, 'professor', 'Carlos'));


const studentsMath = (objeto) => {
  let total = 0;
  const array = Object.keys(objeto);
  for ( i in array) {
    if(objeto[array[i]].materia === 'Matemática') {
      total += objeto[array[i]].numeroEstudantes;
    }
  }
  return total;
}
console.log(studentsMath(allLessons));

const getInfo = (objeto, value) => {
  const allLessons = [];
  let AllStudents = 0;
  const array = Object.values(objeto);
  for( i in array) {
    if(array[i].professor === value) {
      allLessons.push(array[i].materia)
      AllStudents += array[i].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: AllStudents}
}
const createReport = (allLessons, value) => {
  const report = {};
  report.professor = value
  Object.assign(report, getInfo(allLessons, value));
  return report;
  }
console.log(createReport(allLessons, 'Maria Clara'));