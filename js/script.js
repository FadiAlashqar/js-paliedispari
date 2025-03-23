// Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

//definisco la funzione:
function enterWord (Word, WordReverse){
   if (Word === WordReverse) {
        console.log('La parola è palindroma')
   }
   else{
        console.log('La parola non è palindroma')
   }
};

// inizilizzo la variabile dove andrà inserita la parola:
let userWord = prompt('Inserisci una parola')
let reversedWord = userWord.split("").reverse().join("");

//chiamo la funzione:
enterWord(userWord, reversedWord);

