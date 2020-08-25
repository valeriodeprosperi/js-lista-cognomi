// chieder cognome utente
var cognomeUtente = prompt("inserisci il tuo cognome");
// creo array cognomi
var cognomi = ["rossi","bianchi","ninti","partisi"];
console.log(cognomi);
// inserisco cognomeUtente in array cognomi
cognomi.push(cognomeUtente);
cognomi.sort();
console.log(cognomi);
