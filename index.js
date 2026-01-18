function createDiceFace(number) {
    const dots = [];
    for (let i = 0; i < number; i++) {
        dots.push('<div class="dot"></div>');
    }
    return dots.join('');
}

function rollDice() {
    // Add rolling animation
    document.getElementById('dice1-container').classList.add('rolling');
    document.getElementById('dice2-container').classList.add('rolling');
    
    // Remove previous winner classes
    document.getElementById('player1').classList.remove('winner');
    document.getElementById('player2').classList.remove('winner');
    
    // Reset result text
    document.getElementById('result').textContent = 'Rolling...';
    
    setTimeout(() => {
        // Generate random numbers
        const randomNumber1 = Math.floor(Math.random() * 6 + 1);
        const randomNumber2 = Math.floor(Math.random() * 6 + 1);
        
        // Update dice faces
        const dice1 = document.getElementById('dice1');
        const dice2 = document.getElementById('dice2');
        
        dice1.className = `dice-face dice-${randomNumber1}`;
        dice1.innerHTML = createDiceFace(randomNumber1);
        
        dice2.className = `dice-face dice-${randomNumber2}`;
        dice2.innerHTML = createDiceFace(randomNumber2);
        
        // Remove rolling animation
        document.getElementById('dice1-container').classList.remove('rolling');
        document.getElementById('dice2-container').classList.remove('rolling');
        
        // Determine winner
        const resultElement = document.getElementById('result');
        if (randomNumber1 > randomNumber2) {
            resultElement.textContent = '🎉 Player 1 Wins!';
            document.getElementById('player1').classList.add('winner');
        } else if (randomNumber1 < randomNumber2) {
            resultElement.textContent = '🎉 Player 2 Wins!';
            document.getElementById('player2').classList.add('winner');
        } else {
            resultElement.textContent = '🤝 It\'s a Draw!';
        }
    }, 500);
}