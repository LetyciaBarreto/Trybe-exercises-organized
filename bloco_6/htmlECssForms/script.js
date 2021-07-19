const States = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
}

const state = document.getElementById('state');
for ( let i in States){
  const newstate = document.createElement('option');
  newstate.innerText = States[i];
  state.appendChild(newstate)
}

function dateValidation(input) {
  if(input.value.length === 0) {
    return{
      message: 'A data não foi preenchida!'
    }
  }

  let regexDate = /^\d\d\/\d\d\/\d\d\d\d$/;
  if(!regexDate.test(input.value)) {
    return{
      message: 'Data inválida'
    };
  }
  let splitted = input.value.split('/');
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2]
  if(day < 0 || day > 30) {
    return {
      message:'Dia inválido'
    };
  }
  if(month< 0 || month > 12) {
    return {
      message:'Mês inválido'
    };
  }
  if(year < 0) {
    return {
      message:'Ano inválido'
    };
  }
  return true;
}
