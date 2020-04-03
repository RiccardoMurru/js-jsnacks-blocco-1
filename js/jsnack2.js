/**
 * Snack 2: 
 * Inserisci un numero, se è pari stampa il numero, 
 * se è dispari stampa il numero successivo
 */


 var number = parseInt( prompt('Inserisci un numero'));
 
 // se pari stampa numero, se dispari stampa numero successivo
 if (isEven(number)) {
     console.log(number);
     
 } else {
     console.log(++number);
     
 }

 // Funzione per stabilire se è pari

 function isEven(num) {
     return (num % 2 == 0);
 }