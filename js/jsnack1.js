/**
 * Snack 1: 
 *  L’utente inserisce due parole in successione, con due prompt. 
 *  Il software stampa la parola più lunga. 
 *  Utilizza una funzione per determinare e ritornare la parola più lunga.
 */

 var firstWord = prompt('Inserisci la prima parola').trim();
 var secondWord = prompt('Inserisci la seconda parola').trim();
 var result = wordLength(firstWord, secondWord);

 // stampa la parola più lunga
 if (result == 1) {
    console.log('La parola più lunga è', firstWord);
 } else if (result == 2) {
    console.log('La parola più lunga è', secondWord);
 }  else {
     console.log('Le parole sono di uguale lunghezza');
     
 }

 // funzione per determinare e restituire la parola più lunga
function wordLength(word1, word2) {
    var res;
    if (word1.length > word2.length) {
        res = 1;
    } else if (word1.length < word2.length) {
        res = 2;
    }   else {
        res = 0;
    }

    return res;
}
