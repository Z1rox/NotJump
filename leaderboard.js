const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let leaderboard = [];

app.get('/scores', (req, res) => {
    res.json(leaderboard.slice(0, 100));
});

app.post('/scores', (req, res) => {
    const newScore = req.body;
    const username = newScore.username;
    const score = newScore.score;

    let playerFound = false;

    leaderboard.forEach(player => {
        if (player.username === username) {
            player.score = score;
            playerFound = true;
        }
    });

    if (!playerFound) {
        leaderboard.push(newScore);
    }

    leaderboard.sort((a, b) => b.score - a.score);

    console.log(leaderboard);
    res.status(201).json();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
