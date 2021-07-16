// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Copiar
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******
let number = 7;
let imput = "";
let simbol = "*";
let div = (number+1) / 2;
let Cr = div;
let Cl = div;
let i ;
let l ;
 
for ( i = 0; i <= div; i++ ){
    imput=" "
    for (l = 1; l <=number; l++){
            if( l == Cr || l == Cl || i == div){
                imput= imput + simbol;
            } else {
            imput= imput + " "
        }
    }
    console.log(imput)
    Cr-=1   
    Cl+=1
}
