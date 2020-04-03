/**
 * Snack 3: Generatore di “nomi cognomi” casuali: 
 *  prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) 
 *  e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), 
 *  Gatsby vuole generare una falsa lista di 5 invitati.
 */

var names = ['Michele', 'Fabio', 'Roberto'];
var surnames = ['Forghieri', 'Papagni', 'Marazzini'];
var invitedList = [];

// generare lista di 5 invitati
for (var i = 1; i <= 5; i++) {
    var invitedName = names[randomNumber(0, names.length)];             // prende nome[i] con i generato casualmente tra 0 e lunghezza array nomi
    var invitedSurname = surnames[randomNumber(0, surnames.length)];    // prende cognome[i] con i generato casualmente tra 0 e lunghezza array cognomi
    var invitedPerson = invitedName + ' ' + invitedSurname;             // concatena nome + cognome
    invitedList.push(invitedPerson);                                    // push in array invitati
}

console.log(invitedList);

// funzione genera numero random
function randomNumber (min, max) {
    return ( Math.floor (Math.random () * ((max - 1 ) - min) + min));
}