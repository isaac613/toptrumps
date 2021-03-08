class Card {
  constructor(identity, strength, speed, fate, will, wins, loses) {
    this.identity = identity;
    this.strength = strength;
    this.speed = speed;
    this.fate = fate;
    this.will = will;
    this.wins = wins;
    this.loses = loses;
  }
}

let hobbit = new Card(`hobbit`, `20`, `30`, `60`, `90`, 0, 0);
let man = new Card(`man`, `40`, `60`, `80`, `30`, 0, 0);
let elf = new Card(`elf`, `60`, `70`, `20`, `50`, 0, 0);
let dwarf = new Card(`dwarf`, `70`, `30`, `30`, `40`, 0, 0);
let ents = new Card(`ents`, `80`, `10`, `30`, `40`, 0, 0);
let druedain = new Card(`druedain`, `60`, `30`, `30`, `40`, 0, 0);
let beornings = new Card(`beorning`, `90`, `60`, `10`, `50`, 0, 0);
let oathBreakers = new Card(`oathbreakers`, `70`, `70`, `50`, `10`, 0, 0);
let eagles = new Card(`eagles`, `80`, `80`, `30`, `40`, 0, 0);

let orcs = new Card(`orcs`, `40`, `40`, `50`, `30`, 0, 0);
let halfOrcs = new Card(`half-orcs`, `60`, `40`, `30`, `50`, 0, 0);
let urukHai = new Card(`uruk-hai`, `70`, `50`, `30`, `60`, 0, 0);
let goblins = new Card(`goblins`, `20`, `30`, `50`, `40`, 0, 0);
let trolls = new Card(`trolls`, `80`, `30`, `30`, `40`, 0, 0);
let balrog = new Card(`balrog`, `90`, `60`, `20`, `30`, 0, 0);
let easterlings = new Card(`easterlings`, `60`, `60`, `80`, `40`, 0, 0);
let nazgul = new Card(`nazgul`, `80`, `70`, `20`, `90`, 0, 0);
let wargs = new Card(`wargs`, `40`, `80`, `40`, `40`, 0, 0);

let freeFolkCards = [
  hobbit,
  man,
  elf,
  dwarf,
  ents,
  druedain,
  beornings,
  oathBreakers,
  eagles,
];
let forcesOfMordorCards = [
  orcs,
  halfOrcs,
  urukHai,
  goblins,
  trolls,
  balrog,
  easterlings,
  nazgul,
  wargs,
];

// Scores
let freeFolkScore = 0;
let forcesOfMordorScore = 0;

// Array of cards for each player
let freeFolkCurrent = [];
let forcesOfMordorCurrent = [];

// Variable to decide which player is playing

let playerOne = true;
let twoPlayers = false;

function askPlayerNumbers() {
  let playerQuestion = prompt("Is this a 1 or 2 player game?");
  switch (playerQuestion) {
    case "1":
      alert("You have selected one player mode!");
      twoPlayers = false;
      break;
    case "2":
      alert("You have selected two player mode!");
      twoPlayers = true;
      break;
    default:
      alert("That is not a valid input, please try again");
      askPlayerNumbers();
  }
}
askPlayerNumbers();

// Current card function which is going to be called back after each round
function currentCard() {
  let freeFolk = Math.floor(Math.random() * freeFolkCards.length);
  let forcesOfMordor = Math.floor(Math.random() * forcesOfMordorCards.length);
  freeFolkCurrent.push(freeFolkCards.splice(freeFolk, 1)[0]);
  forcesOfMordorCurrent.push(forcesOfMordorCards.splice(forcesOfMordor, 1)[0]);
  if (playerOne == true || twoPlayers == false) {
    console.log(
      `The free folk are fighting with ${freeFolkCurrent[0].identity}`
    );
    console.log(`Strength: ${freeFolkCurrent[0].strength}`);
    console.log(`Speed: ${freeFolkCurrent[0].speed}`);
    console.log(`Fate: ${freeFolkCurrent[0].fate}`);
    console.log(`Will: ${freeFolkCurrent[0].will}`);
    console.log(`Card Wins: ${freeFolkCurrent[0].wins}`);
    console.log(`Card Loses: ${freeFolkCurrent[0].loses}`);
  } else {
    console.log(
      `The forces of Mordor are fighting with ${forcesOfMordorCurrent[0].identity}`
    );
    console.log(`Strength: ${forcesOfMordorCurrent[0].strength}`);
    console.log(`Speed: ${forcesOfMordorCurrent[0].speed}`);
    console.log(`Fate: ${forcesOfMordorCurrent[0].fate}`);
    console.log(`Will: ${forcesOfMordorCurrent[0].will}`);
    console.log(`Card Wins: ${forcesOfMordorCurrent[0].wins}`);
    console.log(`Card Loses: ${forcesOfMordorCurrent[0].loses}`);
  }
  freeFolkDisplay.textContent = `Free Folk Score: ${freeFolkScore}`;
  forcesOfMordorDisplay.textContent = `Forces of Mordor Score: ${forcesOfMordorScore}`;
}

strBtn.addEventListener("click", () => {
  if (playerOne == true || twoPlayers == false) {
    console.log(
      `Mordor is fighting with ${forcesOfMordorCurrent[0].identity}. Wins: ${forcesOfMordorCurrent[0].wins} Loses: ${forcesOfMordorCurrent[0].loses}`
    );
  } else {
    console.log(
      ` The free folk are currently fighting with ${freeFolkCurrent[0].identity}. Wins: ${freeFolkCurrent[0].wins} Loses: ${forcesOfMordorCurrent[0].loses}`
    );
  }
  console.log(`Free forces strength: ${freeFolkCurrent[0].strength}`);
  console.log(
    `Forces of Mordor strength: ${forcesOfMordorCurrent[0].strength}`
  );

  if (freeFolkCurrent[0].strength > forcesOfMordorCurrent[0].strength) {
    playerOne = true;
    freeFolkScore += 1;
    freeFolkCurrent[0].wins += 1;
    forcesOfMordorCurrent[0].loses += 1;
    freeFolkDisplay.textContent = `Free Folk Score: ${freeFolkScore}`;
    freeFolkCards.push(forcesOfMordorCurrent.splice(0, 1)[0]);
    freeFolkCards.push(freeFolkCurrent.splice(0, 1)[0]);
    msgDisplay.textContent = `Free forces wins the round!`;

    playGame();
  } else if (forcesOfMordorCurrent[0].strength > freeFolkCurrent[0].strength) {
    playerOne = false;
    forcesOfMordorScore += 1;
    freeFolkCurrent[0].loses += 1;
    forcesOfMordorCurrent[0].wins += 1;
    forcesOfMordorDisplay.textContent = `Forces of Mordor Score: ${forcesOfMordorScore}`;
    msgDisplay.textContent = `The Forces of mordor wins the round!`;
    forcesOfMordorCards.push(freeFolkCurrent.splice(0, 1)[0]);
    forcesOfMordorCards.push(forcesOfMordorCurrent.splice(0, 1)[0]);
    playGame();
  } else {
    msgDisplay.textContent = `This round is a tie!`;
    freeFolkCards.push(freeFolkCurrent.splice(0, 1)[0]);
    forcesOfMordorCards.push(forcesOfMordorCurrent.splice(0, 1)[0]);
    playGame();
  }
});

speedBtn.addEventListener("click", () => {
  if (playerOne == true || twoPlayers == false) {
    console.log(
      `Mordor is fighting with ${forcesOfMordorCurrent[0].identity}. Wins: ${forcesOfMordorCurrent[0].wins} Loses: ${forcesOfMordorCurrent[0].loses}`
    );
  } else {
    console.log(
      ` The free folk are currently fighting with ${freeFolkCurrent[0].identity}. Wins: ${freeFolkCurrent[0].wins} Loses: ${forcesOfMordorCurrent[0].loses}`
    );
  }
  console.log(`Free forces speed: ${freeFolkCurrent[0].speed}`);
  console.log(`Forces of Mordor speed: ${forcesOfMordorCurrent[0].speed}`);

  if (freeFolkCurrent[0].speed > forcesOfMordorCurrent[0].speed) {
    playerOne = true;
    freeFolkScore += 1;
    freeFolkCurrent[0].wins += 1;
    forcesOfMordorCurrent[0].loses += 1;
    freeFolkDisplay.textContent = `Free Folk Score: ${freeFolkScore}`;
    freeFolkCards.push(forcesOfMordorCurrent.splice(0, 1)[0]);
    freeFolkCards.push(freeFolkCurrent.splice(0, 1)[0]);
    msgDisplay.textContent = `Free forces wins the round!`;
    playGame();
  } else if (forcesOfMordorCurrent[0].speed > freeFolkCurrent[0].speed) {
    playerOne = false;
    forcesOfMordorScore += 1;
    freeFolkCurrent[0].loses += 1;
    forcesOfMordorCurrent[0].wins += 1;
    forcesOfMordorDisplay.textContent = `Forces of Mordor Score: ${forcesOfMordorScore}`;
    msgDisplay.textContent = `The Forces of mordor wins the round!!`;
    msgDisplay.textContent = `Free forces wins the round!`;
    forcesOfMordorCards.push(freeFolkCurrent.splice(0, 1)[0]);
    forcesOfMordorCards.push(forcesOfMordorCurrent.splice(0, 1)[0]);
    playGame();
  } else {
    msgDisplay.textContent = `This round is a tie!`;
    freeFolkCards.push(freeFolkCurrent.splice(0, 1)[0]);
    forcesOfMordorCards.push(forcesOfMordorCurrent.splice(0, 1)[0]);
    playGame();
  }
});

fateBtn.addEventListener("click", () => {
  if (playerOne == true || twoPlayers == false) {
    console.log(
      `Mordor is fighting with ${forcesOfMordorCurrent[0].identity}. Wins: ${forcesOfMordorCurrent[0].wins} Loses: ${forcesOfMordorCurrent[0].loses}`
    );
  } else {
    console.log(
      ` The free folk are currently fighting with ${freeFolkCurrent[0].identity}. Wins: ${freeFolkCurrent[0].wins} Loses: ${forcesOfMordorCurrent[0].loses}`
    );
  }
  console.log(`Free forces fate: ${freeFolkCurrent[0].fate}`);
  console.log(`Forces of Mordor fate: ${forcesOfMordorCurrent[0].fate}`);

  if (freeFolkCurrent[0].fate > forcesOfMordorCurrent[0].fate) {
    playerOne = true;
    freeFolkScore += 1;
    freeFolkCurrent[0].wins += 1;
    forcesOfMordorCurrent[0].loses += 1;
    freeFolkDisplay.textContent = `Free Folk Score: ${freeFolkScore}`;
    freeFolkCards.push(forcesOfMordorCurrent.splice(0, 1)[0]);
    freeFolkCards.push(freeFolkCurrent.splice(0, 1)[0]);
    msgDisplay.textContent = `Free forces wins the round!`;
    playGame();
  } else if (forcesOfMordorCurrent[0].fate > freeFolkCurrent[0].fate) {
    playerOne = false;
    forcesOfMordorScore += 1;
    freeFolkCurrent[0].loses += 1;
    forcesOfMordorCurrent[0].wins += 1;
    forcesOfMordorDisplay.textContent = `Forces of Mordor Score: ${forcesOfMordorScore}`;
    msgDisplay.textContent = `The forces of Mordor wins the round!`;
    forcesOfMordorCards.push(freeFolkCurrent.splice(0, 1)[0]);
    forcesOfMordorCards.push(forcesOfMordorCurrent.splice(0, 1)[0]);
    playGame();
  } else {
    msgDisplay.textContent = `This round is a tie!`;
    freeFolkCards.push(freeFolkCurrent.splice(0, 1)[0]);
    forcesOfMordorCards.push(forcesOfMordorCurrent.splice(0, 1)[0]);
    playGame();
  }
});

willBtn.addEventListener("click", () => {
  if (playerOne == true || twoPlayers == false) {
    console.log(
      `Mordor is fighting with ${forcesOfMordorCurrent[0].identity}. Wins: ${forcesOfMordorCurrent[0].wins} Loses: ${forcesOfMordorCurrent[0].loses}`
    );
  } else {
    console.log(
      ` The free folk are currently fighting with ${freeFolkCurrent[0].identity}. Wins: ${freeFolkCurrent[0].wins} Loses: ${forcesOfMordorCurrent[0].loses}`
    );
  }
  console.log(`Free forces will: ${freeFolkCurrent[0].will}`);
  console.log(`Forces of Mordor will: ${forcesOfMordorCurrent[0].will}`);

  if (freeFolkCurrent[0].will > forcesOfMordorCurrent[0].will) {
    playerOne = true;
    freeFolkScore += 1;
    freeFolkCurrent[0].wins += 1;
    forcesOfMordorCurrent[0].loses += 1;
    freeFolkDisplay.textContent = `Free Folk Score: ${freeFolkScore}`;
    freeFolkCards.push(forcesOfMordorCards.splice(0, 1)[0]);
    freeFolkCards.push(freeFolkCurrent.splice(0, 1)[0]);
    msgDisplay.textContent = `Free forces wins the round!`;
    playGame();
  } else if (forcesOfMordorCurrent[0].will > freeFolkCurrent[0].will) {
    playerOne = false;
    forcesOfMordorScore += 1;
    freeFolkCurrent[0].loses += 1;
    forcesOfMordorCurrent[0].wins += 1;
    forcesOfMordorDisplay.textContent = `Forces of Mordor Score: ${forcesOfMordorScore}`;
    msgDisplay.textContent = `The forces of Mordor wins the round!`;
    forcesOfMordorCards.push(freeFolkCurrent.splice(0, 1)[0]);
    forcesOfMordorCards.push(forcesOfMordorCurrent.splice(0, 1)[0]);
    playGame();
  } else {
    msgDisplay.textContent = `This round is a tie!`;
    freeFolkCards.push(freeFolkCurrent.splice(0, 1)[0]);
    forcesOfMordorCards.push(forcesOfMordorCurrent.splice(0, 1)[0]);
    playGame();
  }
});

const playGame = () => {
  if (freeFolkCards.length > 0 && forcesOfMordorCards.length > 0) {
    console.log(
      `The free folk have ${freeFolkCards.length} cards left in their deck`
    );
    console.log(
      `The forces of Mordor have ${forcesOfMordorCards.length} cards left in their deck`
    );
  } else if (freeFolkCards.length == 0) {
    msgDisplay.textContent = "The forces of Mordor destroy the free Folk!";
  } else if (forcesOfMordorCards.length == 0) {
    msgDisplay.textContent =
      "The free Folk have beaten back the forces of Mordor!";
  }

  if (playerOne == false && twoPlayers == true) {
    console.log(`The next round belongs to the forces of Mordor!`);
  } else {
    console.log(`The next round belongs to the free folk!`);
  }
  currentCard();
};

currentCard();
