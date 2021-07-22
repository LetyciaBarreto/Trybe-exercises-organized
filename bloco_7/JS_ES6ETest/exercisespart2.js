const fatorial = num => {
  let fator = 1;
  for (let i = 2; i <= num; i++){
    fator *= i;
  }
  return fator;
}
console.log(fatorial(4));

const returnLongest = logenstWord => {
  let word = logenstWord.split(' ');
  let maiorWord = 0;
  result = '';
  for(let i of word){
    if(i.length > maiorWord){
      maiorWord = i.length;
      result = i;
    }

  }
  return result;
}
console.log(returnLongest("Antonio foi no banheiro e não sabemos o que aconteceu"));