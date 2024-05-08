// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// 1. Il prezzo del biglietto è definito in base ai km (0.276€ al km)
// 2. Va applicato uno sconto del 21% per i minorenni
// 3. Va applicato uno sconto del 42% per gli over 65.
// 4. L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]

const numerokm = parseInt(prompt("Quanti km vuoi percorrere?"));
const età = parseInt(prompt("Quanti anni hai?"));
let prezzo = 0.276;
let percentualeScontoUno = 21;
let percentualeScontoDue = 42;

let sconto = (prezzo/100) * percentualeScontoUno;
let scontoDue = (prezzo/100) * percentualeScontoDue;

if (numerokm * prezzo - sconto && età <= 17) {
    console.log(prezzo, sconto);
} else if (numerokm * prezzo - scontoDue && età >= 65) {
    console.log(prezzo, scontoDue);
} else {
    (numerokm * prezzo)
    console.log(prezzo);
}