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
  // var lista = document.getElementById("lista").innerHTML;
  // lista = lista + "<li>" + cognomi[i] + " </li>";
  document.getElementById("lista").innerHTML += "<li>" + cognomi[i] + " </li>";
}
