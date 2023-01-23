/* 
1) Faça uma função que receba uma string e retorne verdadeiro caso ela seja palíndromo,
do contrário ela deve retornar falso. (palíndromos são palavras ou frases que podem ser
lidas da esquerda para a direita ou da direita para a esquerda.)
*/
console.clear()

function palindromo(string){
    const res = string.split("").reverse().join("")
    if(res === string){
        return console.log(true);
    }

    return console.log(false);
}

palindromo('ata')
palindromo('osso')
palindromo('radar')
