//let mot = prompt("elle")
var mot = "elle" ; {
    console.log("Le mot " + mot + " contient " + mot.length + " caractères");
    console.log("Il s'écrit en minuscule " + mot.toLowerCase());
    console.log("Il s'écrit en majuscule " + mot.toUpperCase());
  }
  //Comptage du nombre de voyelles et de consonnes
  function compterNbVoyelle(mot) {
  var nbVoyelle = 0;
  for (i = 0; i < mot.length; i++) {
    if (mot[i].toLowerCase() === "a" || mot[i].toLowerCase() === "e" || mot[i].toLowerCase() === "y" || mot[i].toLowerCase() === "u" || mot[i].toLowerCase() === "i" || mot[i].toLowerCase() === "o") {
      nbVoyelle++;
    }
  }
  console.log(mot + " contient " + nbVoyelle + " voyelle(s) " + (mot.length - nbVoyelle) + " consonne(s).");
  }
  compterNbVoyelle("elle");
  //Inversion du mot
  function inverse(inv) {
    var motInverse = ""; // Initialisation de la variable qui contiendra le mot inversé
    for (var i = mot.length - 1; i >= 0; ) {
        motInverse += mot[i]; // Recupère et agence à l'envers le mot saisi par l'utilisateur
        i--; // Contrôle le nombre de caractère du mot
    }return motInverse;
}
console.log("Il s'écrit à l'envers " + inverse(mot));
  //Palindrome ou pas palindrome?
var motMinuscule = mot.toLowerCase();
var initia = inverse(mot);
var motInvMinus = initia.toLowerCase();
if (motMinuscule === motInvMinus){
    console.log(mot + " C'est un palindrome");
} else {
    console.log(mot + " Ce n'est pas un palindrome");
  }
