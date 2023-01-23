/* 
    3) O fatorial de um número n!, é definido como o produto de todos os números inteiros de 1
    a n. Por exemplo: 5! é 5 * 4 * 3 * 2 * 1 = 120
    A maioria das implementações de cálculo de fatoriais usam uma função recursiva para
    determinar o valor fatorial(n). No entanto, a maioria dos sistemas não consegue lidar com
    pilhas de recursividade maiores que 2000.
    Implemente uma função para calcular o fatorial de números arbitrariamente grandes, sem
    utilizar recursividade.
*/

console.clear()
function fatorial(number) {

    let fato = number
    
    if (number < 0) {
        return null
    } else if (number === 0) {
        return 1
    }
  

    for (let index = 1; index <= number - 1; index++) {
        
        let n1 = fato * index
        
        fato = n1
    }

    console.log(fato);   
};

fatorial(5)
