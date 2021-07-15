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

  //Exe 03
let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum3 = 0;
let med = 0;

for(i = 0; i < numbers3.length; i++) {
 sum3 += numbers3[i];
 med = sum3 / numbers3.length;
  }
  console.log(med);