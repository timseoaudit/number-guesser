// Scoring 
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates the random Target number
function generateTarget() {
    return Math.floor(Math.random() * 9);
}

// Compare of target number with guesses to decide winner
/* const compareGuesses = (humanGuess, computerGuess, target) => {
    const humanDistance = Math.abs(humanGuess - target);
    const computerDistance = Math.abs(computerGuess - target);
    if (humanDistance <= computerDistance) { 
        return true;
    } else if (computerDistance <= humanDistance){
        return false;
    }
} */

const compareGuesses = (human, computer, target) => {
    const humanDistance = Math.abs((target - human )); // forgot the Math.abs for over one hour and did not figure out why it is not working. 
    const computerDistance = Math.abs((target - computer));
    
    return humanDistance <= computerDistance ? true : false;
}

// Update scoring
let updateScore = winner => {
    if (winner === 'human'){
        humanScore ++;
    } else if (winner === 'computer') { 
        computerScore ++;
    }
}
// Advanced round 
const advanceRound = () => {
    currentRoundNumber += 1;
}

