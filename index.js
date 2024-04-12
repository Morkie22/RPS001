// Function to randomly return 'Rock', 'Paper', or 'Scissors' for computer's play
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // Determine the winner of the round
    if ((playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')) {
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection === computerSelection) {
        return 'It\'s a Tie!';
    } else {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}

// Function to play 5 rounds of the game and keep score
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // Loop for 5 rounds
    for (let i = 0; i < 5; i++) {
        // Get user input
        let playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');
        if (!playerSelection) {
            console.log('Game cancelled. Refresh the page to play again.');
            return;
        }

        // Get computer's play
        let computerSelection = computerPlay();

        // Play a round and display the result
        let result = playRound(playerSelection, computerSelection);
        console.log('Round ' + (i + 1) + ': ' + result);

        // Update scores
        if (result.startsWith('You Win')) {
            playerScore++;
        } else if (result.startsWith('You Lose')) {
            computerScore++;
        }
    }

    // Display final score and winner
    console.log('Final Score - You: ' + playerScore + ', Computer: ' + computerScore);
    if (playerScore > computerScore) {
        console.log('Congratulations! You won the game!');
    } else if (playerScore < computerScore) {
        console.log('The computer won the game. Better luck next time!');
    } else {
        console.log('It\'s a tie! No winner this time.');
    }
}

// Call the game function to start the game
game();
