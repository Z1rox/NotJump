document.addEventListener('DOMContentLoaded', async function() {
    const tgId = tg.initDataUnsafe.user.id;

    try {
        const response = await fetch(`https://notjump.top/shop?tgId=${tgId}`);
        const data = await response.json();
        console.log(data.score);

        // Отображаем Highscore
        if (data.score !== undefined) {
            document.getElementById('highscore1').innerText = data.score;
        } else {
            document.getElementById('highscore1').innerText = '0';
        }

        const claimButton = document.getElementById('claimButton');
        const statusText = document.getElementById('statusText');

        if (parseInt(data.score, 10) > 24999) {
            claimButton.classList.add('enabled');
            claimButton.classList.remove('disabled');
            claimButton.innerText = 'Enabled';
        } else {
            claimButton.classList.add('disabled');
            claimButton.classList.remove('enabled');
            claimButton.innerText = 'Locked';
            statusText.innerText = 'Your highscore is less than 25000';
        }

    } catch (error) {
        console.error('ERROR', error);
        document.getElementById('highscore1').innerText = 'Connection Error';
    }
});
