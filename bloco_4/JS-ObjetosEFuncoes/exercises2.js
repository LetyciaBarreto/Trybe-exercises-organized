function palindromo(word) {
  for (let i in word) {
  if(word[i] != word[(word.length -1) - i]){
    return false;
  }
  }
  return true;
}
console.log(palindromo('arara'));

function indiceMaior(array){
 let maior = 0;
  for (let i in array){
      if(array[maior] < array[i]) {
        maior = i;
      }
  }
  return maior;
}
console.log(indiceMaior([2,3,6,7,10,1]));

function indiceMenor(array){
  let menor = 0;
   for (let i in array){
       if(array[menor] > array[i]) {
         menor = i;
       }
   }
   return menor;
 }
 console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]));

 function maiorName(names) {
   let maiorName = names[0];
   for( let i in names) {
     if(maiorName.length < names[i].length){
       maiorName = names[i];
     }
   }
   return maiorName;
 }
 console.log(maiorName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

 function repet(array){
  let numRepet = 0;
  let contNum = 0;
  let indexNum = 0;
  for( let i in array) {
    let verificaNum = array[i];
    for(let i2 in array) {
      if (verificaNum === array[i2]) {
        contNum += 1;
      }
    }
    if ( contNum > numRepet) {
      numRepet = contNum;
      indexNum = i;
    }
    contNum = 0;
  }
  return array[indexNum];
 }
 console.log(repet([2, 3, 2, 5, 8, 2, 3])); 


 function sum(n){
   let sumN = 0;
   for( let i = 0; i <= n; i++) {
     sumN += i;
   }
   return sumN;
 }
 console.log(sum(5));

 function compareStrings(word, ending){
   word = word.split('');
   ending = ending.split('');
   control = true;
   for(let i = 0; i < ending.length; i++){
     if(word[word.length - ending.length + i] != ending[i]){
       control = false;
     }
   }
   return control;
 }
 console.log(compareStrings('trybe', 'be'));


 //retornar nesta lógica
//  function RomanNum(array) {
//    const roman = {
//      I: 1,
//      V: 5,
//      X: 10,
//      L: 50,
//      C: 100,
//      D: 500,
//      M: 1000,
//    }
//    let NumRoman = [];

//    for(let i = 0; i <= array; i++){
//      NumRoman = roman[array[i]]
//    }
//    for(let j = 0; j <= NumRoman; j++) {
//      if(NumRoman[j] < NumRoman[j + 1]){
//        NumRoman[j + 1] = NumRoman[j + 1] - NumRoman[j]
//      } else {
//       NumRoman[j] = NumRoman[j + 1] + NumRoman[j]
//      }
//    }
//  }

//  console.log(RomanNum('XI'));

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
 function arrayVector(vector) {
   const newArray = [];
   for( let i = 0; i < vector.length; i++) {
     const numbers = vector[i];
     for (let index2 = 0; index2 < numbers.length; index2++){
       const current = numbers[index2];
       if((current % 2) === 0){
         newArray.push(current);
       }
     }
   }
   return newArray;
 }
 console.log(arrayVector(vector));
