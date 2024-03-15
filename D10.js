/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
//Lo codifico cosi
let n1 = 10; //dichiaro le mie due varibili...
let n2 = 20; //dichiaro le mie due varibili...
const sum = n1 + n2; //Le vado a sommare...
console.log("Risultato", sum);
//Oppure posso codificarlo cosi:
//const somma = 10 + 20; //do direttamente il valore a somma di 10 +20...assegno direttamente l'operazione
//console.log(somma);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const numeroRandom = Math.floor(Math.random() * 21); //utilizzo i metodi Mathfloor per avere valori interi e li genero successivamente con Math.random
console.log(numeroRandom);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "carlo", //inserisco il nome in stringa...
  surname: "Patalano", //inserisco cognome in stringa...
  age: 20, //età come valore numerico...
};
console.log(me); //ora visualizzo insieme in console...
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age; //uso il comando delete assegnandogli l'attributo da eliminare...specificando con la dot not quale parametro preciso...
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skill = ["JavaScript", "HTML", "CSS"]; //Creo un arrey Skill e lo collego direttamente alla variabile me...
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skill.push("Java"); //vado ad utilizzare il comando push per aggiungere un nuovo elemento però sarà un elemento che verrà aggiunto in ultima posizione...
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skill.pop(); //uso pop per eliminare l'ultimo elemento di skill...
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  //Sviluppo una funzione...
  const numero = Math.floor(Math.random() * 6) + 1; //dichiaro una variabile la quale applico come prima il metodo Math floor e random...
  console.log(numero); //Eseguo un console log..
};
dice(); //avvio la funzione vera e propria...
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (num1, num2) {
  //inizializzo la mia funzione...per comodità inserisco i due numeri come parametri della funzione...
  if (num1 > num2) {
    //do una prima condizione dove trovo il numero maggiore dei due...
    return num1; //ritorno un parametro se soddisfo la condizione...
  } else {
    return num2; //ritorno un altro parametro se non viene soddisfatta...
  }
};
console.log(whoIsBigger(10, 3)); //mostro in console se funziona correttamente...s
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function (sentence) {
  //inizializzo sempre la mia funzione...
  const words = sentence.split(" "); //uso split per determinare lo spazio tra le parole...
  const capitalizedWords = words.map(function (word) {
    //ora vado a selezionare ogni signola inziiale delle parole con la funzione...
    return word.charAt(0).toUpperCase() + word.slice(1); //e con toUpperCase le rendo maiuscole...
  });
  return capitalizedWords;
};
console.log(splitMe("I love coding"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (stringa, booleano) {
  //inizializzo la funzione con stringa e booleano...
  if (booleano) {
    //prima condizione...
    return stringa.substring(1); //se è true avro questo...
  } else {
    return stringa.substring(0, stringa.length - 1); //se è false avrò quest'altro...
  }
};
console.log(deleteOne("Cancellami", true)); //nel primo caso avrò come output:'ancellami'
console.log(deleteOne("Cancellami", false)); //nel secondo caso avrò:'Cancellam'
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = function (stringa) {
  //inzilizzo la funzione col parametro stringa...
  return stringa.replace(/[0-9]/g, ""); //ora nel ritorn uso replace sul mio parametro cosi facendo eliminerà tutti i valori da 0 a 9...e dando uno spazio
};

// Esempio di utilizzo
console.log(onlyLetters("I have 4 dogs")); //l'output desiderato dovrebbe essere 'i have dogs'...
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (stringa) {
  //inizializzo la funzione col parametro stringa...
  return stringa.includes("@") && stringa.includes("."); //ora vado a dichiarare che la mia stringa dovrà contenere al suo interno due parametri cioè @ e .
};
console.log(isThisAnEmail("patalanocarlo674@gmail.com")); //in questo caso avrò true perchè i valori sono entrambi veri..
console.log(isThisAnEmail("Ciao")); //Qui avrò false perchè i parametri sono tutti falsi...
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function () {
  //inizializzo la funzione...
  const giorniDellaSettimana = [
    //ho creato un array di tutti i giorni della settimana come nelle esercitazioni....
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];

  const dataCorrente = new Date(); //ora dichiaro un variabile la quale avrà accesso al numero dei giorni della settimana corrente...

  const giorni = dataCorrente.getDay(); //ottengo il giorno corrente..

  return giorniDellaSettimana[giorni]; //qui chiudo la funzione ritornando col giorno della settimana corrente...
};
console.log(whatDayIsIt()); //ora posso visualizzare in console 'VENERDI'
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function dicess() {
  const numero = Math.floor(Math.random() * 6) + 1;
  return numero;
}
function rollTheDices(numRolls) {
  const values = [];
  const sum = 0;

  for (let i = 0; i < numRolls; i++) {
    const value = numero;
    sum += value;
    values.push(value);
  }

  return {
    sum: sum,
    values: values,
  };
}

console.log(rollTheDices());
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function (date) {
  // ho inizializzato la funzione...
  const dataPrincipale = new Date(date).getTime();

  const data = new Date().getTime(); //ho convertito tutto in millisecondi e poi ho trovato come portare il tutto in giorni...

  const sottraggo = data - dataPrincipale;

  const giorniPassati = Math.floor(sottraggo / (1000 * 60 * 60 * 24)); //porto tutto in giorni,,,

  return giorniPassati;
};

const date = new Date("2020-04-20"); //da qui do l'input della data che voglio usare...
console.log(howManyDays(date)); //ho il numero di giorni che sono passati dalla data...
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function () {
  //inizializzo sempre la funzione...
  const currentDate = new Date(); //prendo la data corrente...

  const birthday = new Date("2003-04-01"); //inserisco la mia data di nascita cosi da poterla comparare successivamente..

  return (
    currentDate.getMonth() === birthday.getMonth() && //comparo tutti i valori tra di loro...
    currentDate.getDate() === birthday.getDate()
  );
};

console.log(isTodayMyBirthday()); //avro un true o false in questo caso avrò:'false'

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj, propName) {
  if (obj.hasOwnProperty(propName)) {
    delete obj[propName];
  }
  return obj;
}
const myObject = { a: 200, b: 346, c: 356, d: 54 };
console.log(deleteProp(myObject, "d"));

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function (movies) {
  //trovo subito l'anno del film più recente...utilizzando come dice il metodo reduce un accumulatore e un currentvalue...
  const newest = movies.reduce(function (acc, cur) {
    const curYear = parseInt(cur.Year); //vado a convertire gli anni in numeri
    const accYear = parseInt(acc.Year);

    if (curYear > accYear) {
      //vado a confrontare l'accumulatore degli anni e il currentvalue degli anni...
      return cur;
    } else {
      return acc;
    }
  });

  return newest;
};
console.log(newestMovie(movies)); //il risultato mi darà il film più recente...
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function (movies) {
  //ho semplicemente usato tutta la lunghezza dell'arrey di movies cosi facendo ho trovato il numero completo dei film presenti nell'arrey
  return movies.length;
};

console.log(countMovies(movies)); //avrò il numero di film cioè 14
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
  //inizializzo la funzione...
  const years = movies.map(function (movie) {
    //voglio col metodo map prendere solo gli anni di uscita...
    return movie.Year;
  });

  return years;
}

console.log(onlyTheYears(movies)); //avrò un array contenente solo gli anni...
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function (movies) {
  //inizializzo la funzione...
  const lastMillenniumMovies = movies.filter(function (movie) {
    //uso un filtro per prendere solo i film del vecchio millennio...
    const year = parseInt(movie.Year);

    return year >= 1000 && year <= 1999; //specifico che i film devono avere questi valori...
  });

  return lastMillenniumMovies; //ritorno fuori la funzione...
};

console.log(onlyInLastMillennium(movies)); //ora posso vedere quali film sono stati prodotti lo scorso millennio...
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function (movies) {
  const sum = movies.reduce(function (total, movie) {
    //uso il metodo reduce di nuovo per poter accumulare i valori in una somma...
    return total + parseInt(movie.Year); //li vado a sommare
  }, 0); //do come valore inziale zero sennò in console noto che avrò solo i numeri degli anni dei film...

  return sum;
};

console.log(sumAllTheYears(movies)); //visualizzo la somma...
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function (movies, searchString) {
  const matchingMovies = movies.filter(function (movie) {
    // Utilizzo il metodo filter per selezionare i film che contengono la stringa che desidero nel titolo
    // Confronto ora il titolo del film corrente con la stringa di ricerca
    return movie.Title.toLowerCase().includes(searchString.toLowerCase());
  });

  return matchingMovies;
};

console.log(searchByTitle(movies, "Lord")); //ora avrò come console.log solo i titoli che hanno Lord come stringa inserita al loro interno....
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function (movies, searchString) {
  const match = movies.filter(function (movie) {
    return movie.Title.toLowerCase().includes(searchString.toLowerCase());
  });
  const unmatch = movies.filter(function (movie) {
    return !movie.Title.toLowerCase().includes(searchString.toLowerCase());
  });

  return { match: match, unmatch: unmatch };
};
//PS:Ho googlato per la risoluzione di questo esercizio...:)
console.log(searchAndDivide(movies, "Lord"));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selectElement = function () {
  const newDiv = document.getElementById("container"); //creo prima il collegamento del id nel mio html e successivamente in js creo un nuobo elemento al quale seleziono l'elemento container...
  console.log(newDiv);
};
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const SelectTd = function () {
  return document.querySelectorAll("td");
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const coloreRosso = function () {
  const links = document.querySelectorAll("a"); //Selezioni tutte le ancore...
  links.forEach(function (link) {
    //qua specifico che il colore rosso deve essere applicato attraverso un foreach a tutti...
    link.style.backgroundColor = "red"; //le do il colore rosso
  });
};

coloreRosso(); //avvio il tutto
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addmylist = function (text) {
  const newItem = document.createElement("li"); //creo un nuovo item li
  newItem.textContent = text;
  const myList = document.getElementById("mylist"); //collego l'id al nuovo elemento da inserire...
  myList.appendChild(newItem); //aggiungo il nuovo elemento in basso alla lista...
};
addmylist("pane");
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const svuotalista = function () {
  // Ottiengo la lista con id "myList"
  const myList = document.getElementById("mylist");
  myList.innerHTML = ""; //rimuobo la lista...
};
svuotalista();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const add = function () {
  // Ottiengo tutti i tag <tr>
  const rows = document.querySelectorAll("tr");

  //vado a specificare con il foreach tutti i tr e vado ad aggiungere  test
  rows.forEach(function (row) {
    row.classList.add("test");
  });
};
add();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
