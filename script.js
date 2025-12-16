let buttonMinusTeamA = document.getElementById('minus-team-a')
let buttonPlusTeamA = document.getElementById('plus-team-a')
let buttonMinusTeamB = document.getElementById('minus-team-b')
let buttonPlusTeamB = document.getElementById('plus-team-b')

let scoreTeamAel = document.getElementById('score-team-a-el')
let scoreTeamBel = document.getElementById('score-team-b-el')

scoreA = 0
scoreB = 0


function sumGoalA() {
    scoreA += 1
    scoreTeamAel.textContent = scoreA
    compareWinner();
}

function sumGoalB() {
    scoreB += 1
    scoreTeamBel.textContent = scoreB
    compareWinner();
}

function subGoalA() {
    if (scoreA <= 0) {
        scoreA = 0
        scoreTeamAel.textContent = scoreA
    } else {
        scoreA -= 1
        scoreTeamAel.textContent = scoreA
    }
    compareWinner();
}

function subGoalB() {
    if (scoreB <= 0) {
        scoreB = 0
        scoreTeamBel.textContent = scoreB
    } else {
        scoreB -= 1
        scoreTeamBel.textContent = scoreB
    }
    compareWinner();
}

function compareWinner() {
    if (scoreA == scoreB )
        scoreTeamAel.style.color = '#4A4A4A';
        scoreTeamBel.style.color = '#4A4A4A';

    if (scoreA > scoreB) {
        scoreTeamAel.style.color = '#8EE500';
        scoreTeamBel.style.color = '#4A4A4A';
    }
    if (scoreB > scoreA) {
        scoreTeamBel.style.color = '#8EE500';
        scoreTeamAel.style.color = '#4A4A4A';
    }
}

function newGame() {
    scoreA = 0;
    scoreB = 0;
    scoreTeamAel.textContent = scoreA;
    scoreTeamBel.textContent = scoreB;
    scoreTeamAel.style.color = '#4A4A4A'
    scoreTeamBel.style.color = '#4A4A4A'
}