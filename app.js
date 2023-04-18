const player1 = [(global = 0), (round = 0)];
const player2 = [(global = 0), (round = 0)];

// management of the game

function defaultGame() {
  player1[0] = 0;
  player1[1] = 0;
  player2[0] = 0;
  player2[1] = 0;
  document.querySelector("#score1").textContent = player1[0];
  document.querySelector("#score2").textContent = player2[0];
  document.querySelector("#current-score1").textContent = player1[1];
  document.querySelector("#current-score2").textContent = player2[1];
  document.querySelector("#dice-img").setAttribute("src", "img/dices/de-1.png");
}

// new game

const newGame = document.querySelector("#new-game-btn");
if (newGame) {
  newGame.addEventListener("click", () => {
    return defaultGame();
  });
}

defaultGame();

// hold
const hold = document.querySelector("#holdbtn");
if (hold) {
  hold.addEventListener("click", () => {
    if (player1[0] > 0) {
      player1[1] += player1[0];
      document.querySelector("#current-score1").textContent = player1[1];
      player1[0] = 0;
      document.querySelector("#score1").textContent = player1[0];
    } else {
      player2[1] += 0;
      document.querySelector("#current-score1").textContent = player2[1];
      player2[0] = 0;
      document.querySelector("#score1").textContent = player2[0];
    }
  });
}

// Roll dice player 1

const dice = document.querySelector("#dicebtn");
if (player1[0] > 1 || player2[0] > 1 || hold) {
  if (dice) {
    dice.addEventListener("click", () => {
      const randomCalc = Math.floor(Math.random() * 6) + 1;
      console.log(randomCalc);
      if (randomCalc > 1) {
        player1[0] += randomCalc;
        document.querySelector("#score1").textContent = player1[0];
      } else if (randomCalc === 1) {
        player1[0] = 0;
        document.querySelector("#score1").textContent = player1[0];
      }

      // Roll dice img

      const diceImg = document.querySelector("#dice-img");
      if (randomCalc === 1) {
        diceImg.setAttribute("src", "img/dices/de-1.png");
      } else if (randomCalc === 2) {
        diceImg.setAttribute("src", "img/dices/de-2.png");
      } else if (randomCalc === 3) {
        diceImg.setAttribute("src", "img/dices/de-3.png");
      } else if (randomCalc === 4) {
        diceImg.setAttribute("src", "img/dices/de-4.png");
      } else if (randomCalc === 5) {
        diceImg.setAttribute("src", "img/dices/de-5.png");
      } else if (randomCalc === 6) {
        diceImg.setAttribute("src", "img/dices/de-6.png");
      } else {
        diceImg.setAttribute("src", "img/dices/de-1.png");
      }
    });
  }
}
/*
Le jeu s’initialise. 
Le joueur 1 Lance le dé 
le score du joueur 1 s’incrémente. 
- si il clique sur hold, le score round du joueur 1 est mis à jour.
- si il fait un 1, le score global du joueur 1 est mis à 0 et c’est au joueur 2 de jouer.
Le joueur 2 lance le dé
le score du joueur 2 s’incrémente.
- si il clique sur hold, le score round du joueur 2 est mis à jour.
- si il fait un 1, le score global du joueur 2 est mis à 0 et c’est au joueur 1 de jouer.
Le joueur 1 lance le dé
ainsi de suite jusqu’à ce que l’un des joueurs atteigne 100 points.
*/
