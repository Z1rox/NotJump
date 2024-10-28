document.addEventListener("DOMContentLoaded", () => {
    const leaderboardContainer = document.getElementById("leaderboard");
    async function fetchAndDisplayLeaderboard() {
        try {
            const response = await fetch('https://notjump.top/scores', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const data = await response.json();

            const sortedData = data
                .map(item => ({ ...item, score: parseInt(item.score, 10) || 0 }))
                .sort((a, b) => b.score - a.score)
                .slice(0, 100);

            leaderboardContainer.innerHTML = "";

            sortedData.forEach((player, index) => {
                const playerElement = document.createElement("div");
                playerElement.classList.add("player");
                playerElement.innerHTML = `<strong>#${index + 1}</strong> ${player.username}: ${player.score}`;
                leaderboardContainer.appendChild(playerElement);
            });
        } catch (error) {
            console.error("error", error);
            leaderboardContainer.innerHTML = "<p>Error</p>";
        }
    }
    fetchAndDisplayLeaderboard();
});
sortedData.forEach((player, index) => {
    const playerElement = document.createElement("div");
    playerElement.classList.add("player");

    playerElement.innerHTML = `
        <div class="rank">#${index + 1}</div>
        <div class="info">
            <div class="username">${player.username}</div>
            <div class="score">${player.score}</div>
        </div>
    `;

    leaderboardContainer.appendChild(playerElement);
});
