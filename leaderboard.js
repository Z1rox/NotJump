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
                .sort((a, b) => b.score - a.score);

            leaderboardContainer.innerHTML = "";

            sortedData.forEach((player, index) => {
                const playerElement = document.createElement("div");
                playerElement.classList.add("player");
                playerElement.innerHTML = `<strong>#${index + 1}</strong> ${player.username} ${player.score}`;
                leaderboardContainer.appendChild(playerElement);
            });
        } catch (error) {
            console.error("Error fetching leaderboard:", error);
            leaderboardContainer.innerHTML = "<p>Error loading leaderboard</p>";
        }
    }

    fetchAndDisplayLeaderboard();
});
