// Function to randomly return 'Rock', 'Paper', or 'Scissors' for computer's play
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();

    if ((playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')) {
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection === computerSelection.toLowerCase()) {
        return 'It\'s a Tie!';
    } else {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}

// Function to handle the game logic
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    while (roundsPlayed < 5) {
        let playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');
        if (!playerSelection) {
            alert('No input detected. Please enter a valid choice to play.');
            continue;
        }

        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log('Round ' + (roundsPlayed + 1) + ': ' + result);
        document.getElementById('results').innerHTML += '<p>Round ' + (roundsPlayed + 1) + ': ' + result + '</p>';

        if (result.startsWith('You Win')) {
            playerScore++;
        } else if (result.startsWith('You Lose')) {
            computerScore++;
        }

        roundsPlayed++;
    }

    console.log('Final Score - You: ' + playerScore + ', Computer: ' + computerScore);
    document.getElementById('results').innerHTML += '<p>Final Score - You: ' + playerScore + ', Computer: ' + computerScore + '</p>';
    if (playerScore > computerScore) {
        console.log('Congratulations! You won the game!');
        document.getElementById('results').innerHTML += '<p>Congratulations! You won the game!</p>';
    } else if (playerScore < computerScore) {
        console.log('The computer won the game. Better luck next time!');
        document.getElementById('results').innerHTML += '<p>The computer won the game. Better luck next time!</p>';
    } else {
        console.log('It\'s a tie! No winner this time.');
        document.getElementById('results').innerHTML += '<p>It\'s a tie! No winner this time.</p>';
    }
}

function startGame() {
    document.getElementById('results').innerHTML = ''; // Clear previous results
    game(); // Start the game logic
}
