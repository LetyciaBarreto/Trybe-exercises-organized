const myName = 'letycia';
const birthCity = 'Campos';
let birthYear = '1994';
birthYear = '2030';
console.log(myName, birthCity, birthYear);

// Exe 01
// var a = 10;
// var b = 15;
// console.log("Soma = "+ (a + b));
// console.log("Subtração = "+ (a - b));
// console.log("Multiplicação = "+ (a * b));
// console.log("Divisão = "+ (a / b));
// console.log("Módulo= "+ (a % b));

// Exe 02
// const a = 10;
// const b = 5;

//  if(a > b) {
//    console.log('a é maior que b');
//  } else {
//    console.log(' b é maior que a');
//  }

// Exe 03
const a = 25;
const b = 55;
const c = 15;

 if(a > b && a > c) {
   console.log('a é o maior número');
 } else if(b > a && b > c) {
   console.log(' b é o maior número');
 }else {
  console.log(' c é o maior número');
 };
// Exe 04
 const num = -10;
 if( num > 0 ) {
   console.log('positive');
 }else if( num < 0 ) {
  console.log('negative');
} else {
  console.log('zero');
}
// Exe 05
const ang1 = 50;
const ang2 = 50;
const ang3 = 80;
const sumAngules = ang1 + ang2 + ang3;
const allAngules = ((ang1 || ang2 || ang3) < 0 )
if(allAngules){
if(sumAngules == 180) {
console.log('true');
} else {
  console.log('negative');
};
} else {
  console.log('ERROR inválido');
}

// EXe 06
var peca = "rEi";
switch (peca.toLocaleLowerCase()){
    case ("peao"):
        console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo");
        break;
    case("rei"):
        console.log( "horizontal, vertical e diagonal");
        break;
    case ("rainha"):
        console.log("orizontal, vertical e diagonais mas não pode pular outras peças");
        break;
    case ("torre"):
        console.log("vertical ou horizontal, mas não pode pular outras peças.");
        break;
    case ("bispo"):
            console.log("diagonal. Não pode pular outras peças.");
            break;
    case("cavalo"):
    console.log("O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
    break;
    default:
        console.log("ERROR")

}

// Exe 07
const nota = 101;
if(nota< 0 || nota> 100){
  console.log('ERROR');
}else if(nota >=90){
  console.log('A');
} else if(nota >=80){
  console.log('B');
}
  else if(nota >=70){
    console.log('C');
  }
  else if(nota >=60){
    console.log('D');
  }
  else if(nota >=50){
    console.log('E');
  }
  else if(nota <50){
    console.log('F');
  }

// Par
// Exe 08
  // const num1 = 5;
  // const num2 = 4;
  // const num3 = 7;
  // let trueOrFalse = false;

  // if(num1 % 2 === 0 ||num2 % 2 === 0|| num3 % 2 === 0) {
  //   trueOrFalse = true;
  // };
  // console.log(trueOrFalse);

  //impar 
// Exe 09
const num1 = 2;
  const num2 = 4;
  const num3 = 7;
  let trueOrFalse = false;

  if(num1 % 2 !== 0 ||num2 % 2 !== 0|| num3 % 2 !== 0) {
    trueOrFalse = true;
  };
  console.log(trueOrFalse);


// Exe 10
  const custoProduto = 20;
  const valorDeVenda = 40;
  if ((custoProduto && valorDeVenda) > 0) {
    const impostoSobreOcusto = custoProduto/100 * 20;
    const valorTotalDeCusto = custoProduto + impostoSobreOcusto;
    const lucro = valorDeVenda - valorTotalDeCusto;
    console.log(lucro);
    
  }else{
console.log('ERROR VALOR INVALIDO');
  };
    