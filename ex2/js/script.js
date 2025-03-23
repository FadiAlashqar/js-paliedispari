// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Inizializziamo le varibile che conterrano i valori inseriti dall'utente:
let EvenOdd = prompt('Scegli tra pari e dispari')
let userNum = prompt('Scegli un numero da 1 - 5')

// Definisco la funzione per generare il numero del computer:
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNumbers(1, 5)
let Num = randomNumbers(1, 5)


// Definisco la funzione per stabilere il vincitore:
function DeclareWinner(Random, User) {
    
    if ((Random + User) % 2 === 0) {
        console.log('Ha vinto Pari')
    }
    else(
        console.log('Ha vinto Dispari')
    )
}

