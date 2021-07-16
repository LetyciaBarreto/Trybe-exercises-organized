// imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// Copiar
// n = 5
// *
// **
// ***
// ****
// *****

 let n = 5;
 let j = "";
 for( i=0; i < n; i++){
     j += "*"
     for (l = 0; l < (n-(n-i)); ++l){
         j += "*"
     }
     j += "\n"
 }
 console.log(j)

// Agora inverta o lado do triângulo. Por exemplo:
// Copiar
// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n = 5;
let j = "";
let s ="*";
let k =  n;

for( i=0; i < n ; i++) {
    for(l=0; l < n; l++){
        if ( l < k){
            j = j+ " ";
        } else{
            j = j+ s;
        }
}
console.log(j);
k -=1;
j ="";
}
