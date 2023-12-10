let compMove = '';
        let result = '';

        const score = {
            wins: 0,
            ties: 0,
            losses: 0
        };

        function updateScore() {
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}`;
        }



        function playgame(playerMove) {
            pickCompMove();
            if (compMove === playerMove) {
                result = 'Tie';
            } else if ((compMove === 'rock' && playerMove === 'scissors') ||
                (compMove === 'paper' && playerMove === 'rock') ||
                (compMove === 'scissors' && playerMove === 'paper')) {
                result = 'You lose';
            } else {
                result = 'You win';
            }
            if (result === 'You win') {
                score.wins += 1;
            }
            if (result === 'You lose') {
                score.losses += 1;
            }
            if (result === 'Tie') {
                score.ties += 1;
            }


            updateScore();
            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = `You : <img src="${playerMove}-emoji.png" alt="" class="demo"> <img src="${compMove}-emoji.png" alt=""
            class="demo">: Computer`
        }


        function pickCompMove() {
            const randNum = Math.random();

            if (randNum >= 0 && randNum <= 0.33) {
                compMove = 'rock';
            } else if (randNum > 0.33 && randNum <= 0.66) {
                compMove = 'paper';
            } else if (randNum > 0.66) {
                compMove = 'scissors';
            }
        }
        updateScore();
