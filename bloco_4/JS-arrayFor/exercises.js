//Exe 01
 let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 for(i = 0; i < numbers1.length; i++) {
   console.log(numbers1[i]);
 }

//Exe 02
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for(i = 0; i < numbers2.length; i++) {
 sum += numbers2[i];
  }
  console.log(sum);

  //Exe 03 e 4
let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum3 = 0;
let med = 0;

for(i = 0; i < numbers3.length; i++) {
 sum3 += numbers3[i];
 med = sum3 / numbers3.length;
 console.log(med);
  };
  if(med > 20) {
    console.log('valor maior que 20')
   } else {
     console.log('valor menor ou igual a 20');
   }
// Exe 5
let numbers5 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers5[0];
for(i = 1; i < numbers5.length; i++) {
  if(numbers5[i] > maior){
  maior = numbers5[i];
}
  }
  console.log(maior);