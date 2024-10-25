
let board, context;
let boardWidth = 384;
let boardHeight = 576;

let doodlerWidth = boardWidth / 6.5;
let doodlerHeight = boardHeight / 9;
let doodlerX = boardWidth / 2 - doodlerWidth / 2;
let doodlerY = boardHeight * 7 / 8 - doodlerHeight;
let doodlerRightImg, doodlerLeftImg, soundEffect;

let doodler = {
    img: null,
    x: doodlerX,
    y: doodlerY,
    width: doodlerWidth,
    height: doodlerHeight
}

let velocityX = 0;
let velocityY = 0;
let initialVelocityY = -10;
let gravity = 0.35;
let maxHeight = boardHeight / 2;

let platformArray = [];
let platformWidth = 80;
let platformHeight = 23;
let platformImg;

let score = 0;
let maxDistance = doodlerY;
let gameOver = false;
let isJumping = false;

let cameraSpeed = 0.2;

let highScore = localStorage.getItem("highScore") ? parseInt(localStorage.getItem("highScore")) : 0;

window.onload = function () {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    doodlerRightImg = new Image();
    doodlerRightImg.src = "./player.png";
    doodler.img = doodlerRightImg;

    soundEffect = new Audio('BounceYoFrankie.wav');
    doodlerRightImg.onload = function () {
        context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);
    }

    doodlerLeftImg = new Image();
    doodlerLeftImg.src = "./player.png";

    platformImg = new Image();
    platformImg.src = "./platform.png";

    velocityY = initialVelocityY;
    placePlatforms();
    requestAnimationFrame(update);

    document.addEventListener("keydown", moveDoodler);
    document.addEventListener('touchend', handleTouchEnd);

    board.addEventListener('touchstart', handleTouch);

    function handleTouch(e) {
        let touchX = e.changedTouches[0].clientX;

        if (touchX < boardWidth / 2) {
            moveLeft();
        } else {
            moveRight();
        }
    }
    function handleTouchEnd(e) {
        stopMove();
    }
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) return;

    context.clearRect(0, 0, board.width, board.height);

    doodler.x += velocityX;
    if (doodler.x > boardWidth) doodler.x = 0;
    else if (doodler.x + doodler.width < 0) doodler.x = boardWidth;

    velocityY += gravity;
    doodler.y += velocityY;

    if (doodler.y < 0) {
        doodler.y = 0;
    }

    if (doodler.y > boardHeight) {
        gameOver = true;
        checkHighScore();
    }

    if (doodler.y < maxHeight) {
        let cameraShift = (maxHeight - doodler.y) * cameraSpeed;
        doodler.y += cameraShift;

        for (let i = 0; i < platformArray.length; i++) {
            platformArray[i].y += cameraShift;
        }

        score += Math.floor(cameraShift);
    }

    for (let i = 0; i < platformArray.length; i++) {
        let platform = platformArray[i];

        if (detectCollision(doodler, platform) && velocityY >= 0 && !isJumping) {
            velocityY = initialVelocityY;
            soundEffect.play();
            isJumping = true;
        }

        if (platform.y >= boardHeight) {
            platformArray.shift();
            newPlatform();
        }

        context.drawImage(platform.img, platform.x, platform.y, platform.width, platform.height);
    }

    if (velocityY > 0) {
        isJumping = false;
    }

    context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);

    updateScore();

    if (gameOver) {
        context.fillStyle = "white";
        context.font = "16px Arial, sans-serif";
        context.fillText("Game Over", boardWidth / 2, boardHeight / 2);
    }
}

function moveDoodler(e) {
    if (e.code == "ArrowRight" || e.code == "KeyD") {
        moveRight();
    } else if (e.code == "ArrowLeft" ||     e.code == "KeyA") {
        moveLeft();
    } else if (e.code == "Space" && gameOver) {
        restartGame();
    }
}

function moveRight() {
    velocityX = 4;
    doodler.img = doodlerRightImg;
}
function stopMove() {
    velocityX = 0;
    doodler.img = doodlerRightImg;
}

function moveLeft() {
    velocityX = -4;
    doodler.img = doodlerLeftImg;
}

function stopDoodler() {
    velocityX = 0;
}
function restartGame() {
    doodler = {
        img: doodlerRightImg,
        x: doodlerX,
        y: doodlerY,
        width: doodlerWidth,
        height: doodlerHeight
    };

    velocityX = 0;
    velocityY = initialVelocityY;
    score = 0;
    maxDistance = doodlerY;
    gameOver = false;
    placePlatforms();
}


function placePlatforms() {
    platformArray = [];
    let platform = {
        img: platformImg,
        x: boardWidth / 2,
        y: boardHeight - 50,
        width: platformWidth,
        height: platformHeight
    };
    platformArray.push(platform);

    for (let i = 0; i < 6; i++) {
        let randomX = Math.floor(Math.random() * boardWidth * 3 / 4);
        let platform = {
            img: platformImg,
            x: randomX,
            y: boardHeight - 75 * i - 150,
            width: platformWidth,
            height: platformHeight
        }
        platformArray.push(platform);
    }
}

function newPlatform() {
    let randomX = Math.floor(Math.random() * boardWidth * 3 / 4);
    let platform = {
        img: platformImg,
        x: randomX,
        y: -platformHeight,
        width: platformWidth,
        height: platformHeight
    };
    platformArray.push(platform);
}

function detectCollision(a, b) {
    const leg = 10; 

    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y + a.height > b.y &&
           a.y + a.height - leg < b.y;
}
function updateScore() {
    if (doodler.y < maxDistance) {
        let distanceTraveled = maxDistance - doodler.y;
        score += Math.floor(distanceTraveled);
        maxDistance = doodler.y;
    }
    document.getElementById('currentscore').innerText = score;
}

async function checkHighScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        let data = {
            username: `${username}`,
            score: highScore,
        };
        try{
            const response = await fetch('http://5.42.104.249:5000/scores', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        catch (error) {
            console.error(error);
        }
        
}
document.getElementById('highscore1').innerText = highScore;}
