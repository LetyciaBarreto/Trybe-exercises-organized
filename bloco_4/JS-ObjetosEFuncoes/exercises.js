let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info['recorrente'] = 'Sim'
console.log(`Bem-vinda ${info.personagem}`);

console.table(info);
  
for( let index in info) {
  console.log(index);
  console.log(info[index]);
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let keys in info) {
  if(
    keys ==='recorrente' &&
    info[keys] ==='Sim' &&
    info2[keys] === 'Sim'
  ){
    console.log('Ambos recorrentes');
  } else {
    console.log(info[keys] + 'e' + info2[keys]);
  }
}
