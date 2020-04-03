/**
 * Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3) 
 * e fai la somma di tutti gli elementi che sono in posizione dispari. 
 * Prova prima senza funzione e poi con funzione.
 */


var numbers = [];
var sum;

/*********************
 * Senza funzioni
 * *******************
 *
 *  for (var i = 0; i < numbers.length; i += 2) {
 *      sum += numbers[i];
 *      console.log(numbers[i]);
 *  }
 * 
*/

/*********************
 * Con funzioni
 * *******************
 */


// inserimento numeri casuali in array
arraySize = parseInt( prompt('Inserisci la grandezza dell\'array'));


for (var j = 1; j <= arraySize; j++) {
    numbers.push(randomNumber(1, 50));
}

console.log(numbers);


sum = sumItems(numbers);

console.log('somma dei numeri in posizione dispari:', sum);


// funzione somma degli elementi dispari ( ogni 2 elementi)
function sumItems (item) {
    var result = 0;

    for (var i = 0; i < item.length; i += 2) {
        result += item[i];
        console.log('numero in posizione dispari: ', item[i]);
        
    }
    return result;
}

// funzione genera numero random
function randomNumber (min, max) {
    return ( Math.floor (Math.random () * ((max) - min) + min));
}