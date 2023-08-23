/* pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari. */

/* 
strumenti
    -prompt x2 
    -Numer (1 prompt in numero)
    -const/let
    -Math.random
    -Math.flor/Math.ceil
    -if/else
    -console.log */

//prompt per pari/dispari

const sceltaUtente = prompt('pari o dispari?');
//to do: controlla se l'utente ha scelto correttamente
if (sceltaUtente != 'pari' && sceltaUtente != 'dispari'){
    alert('inserisci pari o dispari');
}

//prompt per il numero da 1 a 9

const numeroUtente = Number(prompt('scegli un numero da 1 a 9'));
//to do: controlla se l'utente ha scelto correttamente
if(numeroUtente < 1 || numeroUtente >9){
    alert('numeri fuori dal range');
}

console.log(sceltaUtente, numeroUtente);

//genero il numero random per il computer

const numeroComputer = Math.floor(Math.random() * 9) + 1;

console.log(numeroComputer);

//sommo il risultato dei due numeri

const sommaNumeri = numeroComputer + numeroUtente;

console.log(sommaNumeri);

//verifico se pari/dispari dividendo per 2
let risultato;

if(sommaNumeri % 2 == 0){
    console.log('pari');
    risultato = 'pari';
}else{
    console.log('dispari');
    risultato = 'dispari';
}
console.log(risultato);
//stabilisco chi vince

if ( risultato === sceltaUtente) {
    console.log('Hai vinto!');
}else{
    console.log('hai perso!');
}
