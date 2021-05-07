/*
Creare un oggetto che descriva uno studente, con le seguenti proprietà:
nome,
cognome
età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/

var studente = {
    nome: 'Vito',
    cognome: 'Battaglia',
    eta: 32
}


for (var key in studente) {
    console.log(key, studente[key]);
}


var studenti = [
    {
        nome: 'Vito',
        cognome: 'Battaglia',
        eta: 32
    },
    {
        nome: 'Marco',
        cognome: 'Rossi',
        eta: 24
    },
    {
        nome: 'Giuseppe',
        cognome: 'Bianchi',
        eta: 35
    },
    {
        nome: 'Silvia',
        cognome: 'Verdi',
        eta: 28
    },
]


for (var i = 0; i < studenti.length; i++){

    var datiStudente = studenti[i];

    console.log(datiStudente.nome, datiStudente.cognome);
    
}


console.log("Nuovo Studente Aggiunto");



var insertNome = prompt("Inserisci il nome del nuovo studente");
var insertCognome = prompt("Inserisci il cognome del nuovo studente");
var insertEta = prompt("Inserisci l'età del nuovo studente");


var newStudente = {
    nome : insertNome,
    cognome : insertCognome,
    eta : insertEta 
}

console.log(newStudente);