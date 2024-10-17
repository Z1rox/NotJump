fetch('http://5.42.104.249:5000/scores', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    displayLeaderboard(data);
})
.catch(error => console.error('Error:', error));

function displayLeaderboard(players) {
    const leaderboardDiv = document.getElementById('leaderboard');

    if (!Array.isArray(players)) {
        players = [players];
    }

    players.forEach((player, index) => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        
        playerDiv.innerHTML = `${index + 1}. <strong>${player.username}</strong>: ${player.score} points`;

        leaderboardDiv.appendChild(playerDiv);
    });
}
