
function computerPlay() {
    let rock="Rock";
    let paper="Paper";
    let scissors="Scissors";
    let getRandomValue= Math.random();

    if (getRandomValue <= 0.33) {

        return rock;
    } else if (getRandomValue <= 0.66) {
                
        return paper;
    } else {
                
        return scissors;
    }
}


function game() {
    let roundsPlayed= 0;
    let playerWin= 0;
    let computerWin= 0;
    let gameWinner="";


    while (roundsPlayed < 5) {
        roundsPlayed++;
        const computerSelection= computerPlay();
        playerSelection= prompt("Player, please type in your selection (Rock, Paper, Scissors): ");
        console.log(playRound(capitalize(playerSelection), computerSelection));

        console.log("Player win totals " + playerWin);
        console.log("Computer win totals " + computerWin);


        function playRound(firstLetterCap, computerSelection) {
            let tie="It's a Tie! You selected " + firstLetterCap + " and the computer selected " + computerSelection + ".";
            let paperBeatRock="You Win! You selected " +firstLetterCap + " and the computer selected " + computerSelection + ".";
            let scissorsBeatPaperLoss="You Lose! You selected " +firstLetterCap + " and the computer selected " + computerSelection + ".";
            let paperBeatRockLoss="You Lose! You selected " +firstLetterCap + " and the computer selected " + computerSelection + ".";
            let rockBeatScissors="You Win! You selected " +firstLetterCap + " and the computer selected " + computerSelection + ".";
            let rockBeatScissorsLoss="You Lose! You selected " +firstLetterCap + " and the computer selected " + computerSelection + ".";
            let scissorsBeatPaper="You Win! You selected " +firstLetterCap + " and the computer selected " + computerSelection + ".";

            if (firstLetterCap == computerSelection) {
                return tie;
            } else if ((firstLetterCap === "Paper") && (computerSelection === "Rock")) {
                playerWin++;
                return paperBeatRock;
            } else if ((firstLetterCap === "Paper") && (computerSelection === "Scissors")) {
                computerWin++;
                return scissorsBeatPaperLoss;
            } else if ((firstLetterCap === "Rock") && (computerSelection === "Paper")) {
                computerWin++;
                return paperBeatRockLoss;
            } else if ((firstLetterCap === "Rock") && (computerSelection === "Scissors")) {
                playerWin++;
                return rockBeatScissors;
            } else if ((firstLetterCap === "Scissors") && (computerSelection === "Rock")) {
                computerWin++;
                return rockBeatScissorsLoss;
            } else {
                playerWin++;
                return scissorsBeatPaper;
            }
        }
    }

    if (playerWin > computerWin) {
        gameWinner="YOU WIN!";
    } else if (playerWin === computerWin) {
        gameWinner="TIE!";
    } else {
        gameWinner="COMPUTER WINS!";
    }


    console.log("The five game winner is: " + gameWinner);
    }


    function capitalize(playerSelection) {
        let allLowerCase= playerSelection.toLowerCase();
        let firstLetterCap= allLowerCase.charAt(0).toUpperCase() + allLowerCase.slice(1);

        return firstLetterCap;
    }

    //fuction call
    game();