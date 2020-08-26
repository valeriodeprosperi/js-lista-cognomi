// chieder cognome utente
var cognomeUtente = prompt("inserisci il tuo cognome");
// creo array cognomi
var cognomi = ["rossi","bianchi","ninti","partisi"];
console.log(cognomi);
// inserisco cognomeUtente in array cognomi
cognomi.push(cognomeUtente);
cognomi.sort();
console.log(cognomi);
for (var i = 0; i < cognomi.length; i++) {
  console.log(cognomi[i]);
  // inserimento cogmoe lista utenti ordinata forma ampia e forma contratta
  // var lista = document.getElementById("lista").innerHTML;
  // lista = lista + "<li>" + cognomi[i] + " </li>";
  document.getElementById("lista").innerHTML += "<li>" + cognomi[i] + " </li>";
}
// scrivo la posizione dell'utente nella lista ordinata
// for (var i = 0; i < cognomi.length; i++) {
//  if(cognomi[i] == cognomeUtente){
//    var posizione = i + 1;
//  }
// }
var posizione = cognomi.indexOf(cognomeUtente) + 1;
document.getElementById("posizione").innerHTML = "la posizione è : " + posizione;
