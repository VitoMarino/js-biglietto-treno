// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// 1. Il prezzo del biglietto è definito in base ai km (0.276€ al km)
// 2. Va applicato uno sconto del 21% per i minorenni
// 3. Va applicato uno sconto del 42% per gli over 65.
// 4. L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]

const numerokm = prompt("Quanti km vuoi percorrere?");
const età = prompt("Quanti anni hai?");
let prezzo = 0.276;
let percentualeSconto1 = 21;
let percentualeSconto2 = 42;

if (numerokm * prezzo && età <= 17); {
    let prezzo = (prezzo/100 * percentualeSconto1);
    console.log = (prezzo);

} else (numerokm * prezzo && età >= 65); {
    let prezzo = (prezzo/100 * percentualeSconto2);
    console.log = (prezzo);
}