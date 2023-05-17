const readline = require("readline");

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: "Rock",
    winsAgainst: "s",
  },
  p: {
    name: "Paper",
    winsAgainst: "r",
  },
  s: {
    name: "Scissors",
    winsAgainst: "p",
  },
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function subPrint() {
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");
}
function printHelp(move1) {
    subPrint();
  }


  function getWinner(move1,move2) {

    if (move1 === move2) {
      // tie
      console.log("You tie.\n");
      ties++;
      return 0

    } else if (VALID_MOVES[move1].winsAgainst === move2) {
      // win
      console.log("You win!\n");
      wins++;
      return 1
    } else {
      // loss
      console.log("You lose...\n");
      losses++;
      return -1
    }
  }

  function getCPUMove() {
    if (VALID_MOVES[move1]) {
      const validMoveKeys = Object.keys(VALID_MOVES);
      const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
      const move2 = validMoveKeys[randomIndex];

  }
}

  function processMove(move1, move2) {
    // Your code here
  }

  /******************************* MAIN FUNCTION *******************************/
  function promptInput(rl) {
    console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
    rl.question("> ", (move1) => {
      move1 = move1.toLowerCase();
      if (move1 === "h") {
        console.log("\nHelp:\n");
        printHelp(move1);
      }
      else if (move1 === "q") {
        rl.close();
        return;
      }

        console.log(`You pick ${move1}, computer picks ${move2}.`);
        getWinner(move1,move2)
        getCPUMove();
        if(!VALID_MOVES[move1])  {
        console.log("\nInvalid command.\n");
        console.log("  Type 'r' for Rock");
        console.log("  Type 'p' for Paper");
        console.log("  Type 's' for Scissors");
        console.log("  Type 'q' to quit");
        console.log("  Type 'h' for a list of valid commands\n");
      }

      promptInput(rl);
    });
  }

  /****************************** INITIALIZE GAME ******************************/
  function initializeGame() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    console.log("Welcome to Rock/Paper/Scissors\n");
    console.log("  Type 'r' for Rock");
    console.log("  Type 'p' for Paper");
    console.log("  Type 's' for Scissors");
    console.log("  Type 'q' to quit");
    console.log("  Type 'h' for a list of valid commands\n");

    promptInput(rl);
  }

  // start the game if running this file directly, `node game.js`
  // do not start the game if running test specs
  if (typeof require !== "undefined" && require.main === module) {
    initializeGame();
  }

  /**************************************************************************/
  /* DO NOT CHANGE THE CODE BELOW */
  module.exports = {
    printHelp,
    getWinner,
    getCPUMove,
    processMove,
    promptInput,
  };
