const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const startGameBtn = document.getElementById("start-game-btn");

const browserTool = function () {
  let cpuTool;
  const moveGenerator = Math.random();
  cpuTool =
    moveGenerator < 0.333 ? ROCK : moveGenerator > 0.666 ? SCISSORS : PAPER;
  return cpuTool;
};
const gameReferee = function (player, browser) {
  if (
    (player === ROCK && browser === SCISSORS) ||
    (player === PAPER && browser === ROCK) ||
    (player === SCISSORS && browser === PAPER)
  ) {
    alert(
      `Player choose ${player} , browser choose ${browser}, therefore player wins!!!`
    );
  } else if (player === browser) {
    alert(
      `Player choose ${player} , browser choose ${browser}, therefore It's ad DRAW!!!`
    );
  } else {
    alert(
      `Player choose ${player} , browser choose ${browser}, therefore player lose!`
    );
  }
};

const gameLogic = function () {
  let userTool = prompt(
    "ENTER YOUR TOOL: ROCK, PAPER OR SCISSORS"
  ).toUpperCase();
  if (userTool === ROCK || userTool === PAPER || userTool === SCISSORS) {
  } else {
    userTool = ROCK;
    alert("WRONG INPUT. ROCK IS SET BY DEFAULT");
  }
  gameReferee(userTool, browserTool());
};
startGameBtn.addEventListener("click", gameLogic);
