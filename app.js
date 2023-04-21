// Jeu de dé
// - le premier joueur qui arrive à 100 a gagné
// 2 joueurs
// - tour par tour
// - bouton new game permet de reset les valeurs
// - roll dice permet de lancer le dé, ajouter des points pour le joueur en cours.
//    - si le joueur fait un alors on passe au joueur suivant
// - Hold: sauvegarde le score du joueur courant et passe au jour suivant

// demander le nom des joueurs
// valeurs
// les points des joueurs
// joueur en cour
// afficher les noms des joueurs

// fonctions
// - fonction pour reset le jeu
// - hold
// - roll dice
// - vérifier si un joueur a gagné
// - afficher qui a gagné

// Variables
/*let player1 = prompt("Nom du joueur 1");
let player2 = prompt("Nom du joueur 2");*/
let roundScorePlayer1 = 0;
let roundScorePlayer2 = 0;
let globalScorePlayer1 = 0;
let globalScorePlayer2 = 0;

let currentPlayer = 1;

// Afficher les noms des joueurs
/*
document.getElementById("player1").textContent = player1;
document.getElementById("player2").textContent = player2;
*/
// Fonctions

// Fonction pour reset le jeu

function gameDefault() {
  // reset des valeurs
  roundScorePlayer1 = 0;
  roundScorePlayer2 = 0;
  globalScorePlayer1 = 0;
  globalScorePlayer2 = 0;
  currentPlayer = 1;
  document.getElementById("score1").textContent = roundScorePlayer1;
  document.getElementById("score2").textContent = roundScorePlayer2;
  document.getElementById("current-score1").textContent = globalScorePlayer1;
  document.getElementById("current-score2").textContent = globalScorePlayer2;
  document.getElementById("dice").src = "images/de-1.png";
  document.getElementById("point1").src = "images/point.png";
  document.getElementById("point2").src = "";
}

function createNewGame() {
  // reset du jeu
  gameDefault();
  document
    .getElementById("new-game-btn")
    .addEventListener("click", gameDefault);
}

createNewGame();

// Fonction pour lancer le dé

function rollDice() {
  // générer un nombre aléatoire entre 1 et 6
  const diceResult = Math.ceil(Math.random() * 6);
  // afficher le dé correspondant
  document.getElementById("dice").src = `images/de-${diceResult}.png`;
  // si le dé est différent de 1 alors on ajoute le résultat au score du joueur en cours
  if (diceResult > 1) {
    if (currentPlayer === 1) {
      roundScorePlayer1 += diceResult;
      document.getElementById("score1").textContent = roundScorePlayer1;
    }
    // sinon on passe au joueur suivant
    if (currentPlayer === 2) {
      roundScorePlayer2 += diceResult;
      document.getElementById("score2").textContent = roundScorePlayer2;
    }
  } else {
    // si le dé est égal à 1 alors on passe au joueur suivant
    if (currentPlayer === 1) {
      roundScorePlayer1 = 0;
      document.getElementById("score1").textContent = roundScorePlayer1;
    }
    // sinon on passe au joueur suivant
    if (currentPlayer === 2) {
      roundScorePlayer2 = 0;
      document.getElementById("score2").textContent = roundScorePlayer2;
    }
    // on change le joueur en cours
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else {
      currentPlayer = 1;
    }
    // on affiche le pointeur sur le joueur en cours
    if (currentPlayer === 1) {
      document.getElementById("point1").src = "images/point.png";
    } else {
      document.getElementById("point1").src = "";
    }
    if (currentPlayer === 2) {
      document.getElementById("point2").src = "images/point.png";
    } else {
      document.getElementById("point2").src = "";
    }
  }
}
document.getElementById("dice-btn").addEventListener("click", rollDice);

// Fonction pour sauvegarder le score du joueur en cours

function hold() {
  // on sauvegarde le score du joueur en cours
  if (currentPlayer === 1) {
    globalScorePlayer1 += roundScorePlayer1;
    document.getElementById("current-score1").textContent = globalScorePlayer1;
    roundScorePlayer1 = 0;
    document.getElementById("score1").textContent = roundScorePlayer1;
    currentPlayer = 2;
    document.getElementById("point1").src = "";
    document.getElementById("point2").src = "images/point.png";
  } else {
    globalScorePlayer2 += roundScorePlayer2;
    document.getElementById("current-score2").textContent = globalScorePlayer2;
    roundScorePlayer2 = 0;
    document.getElementById("score2").textContent = roundScorePlayer2;
    currentPlayer = 1;
    document.getElementById("point2").src = "";
    document.getElementById("point1").src = "images/point.png";
  }
}
document.getElementById("hold-btn").addEventListener("click", hold);

// Fonction pour vérifier si un joueur a gagné

function checkWinner() {
  if (globalScorePlayer1 >= 100) {
    gameDefault();
    return alert(`BRAVO ${player1} tu as gagné !`);
  } else if (globalScorePlayer2 >= 100) {
    gameDefault();
    return alert(`BRAVO ${player2} tu as gagné !`);
  }
}
document.getElementById("hold-btn").addEventListener("click", checkWinner);
