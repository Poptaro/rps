

document.addEventListener('DOMContentLoaded', function() {
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissor = document.querySelector('.scissor');
    const winnerz = document.querySelector('.winner');
    
    const buttons = document.querySelectorAll('button')
    let player1;
    let player2;
    let count = 2;

    function winner(){
        if(player1 == player2){
            return('TIE')
        } else if (player1 == 'rock'){
            return (player2 == 'paper') ? 'Player 2 Wins' : 'Player 1 Wins'
        } else if (player1 == 'paper'){
            return (player2 == 'scissor') ? 'Player 2 Wins' : 'Player 1 Wins'
        } else if (player1 == 'scissor'){
            return (player2 == 'rock') ? 'Player 2 Wins' : 'Player 1 Wins'
        }
    }
    function list() {
        console.log(winnerz.textContent == false);
    }

    function restart() {
        if(!!winnerz.textContent){
            
        }
    }
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if(count == 2){
                player1 = button.textContent.toLowerCase()
                count--
                console.log(player1)
            } else if( count == 1){
                player2 = button.textContent.toLowerCase()
                count--
                console.log(player2)
                winnerz.textContent = winner()
            } 
        }) 

    })
    window.list = list;



});