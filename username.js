const tg = window.Telegram.WebApp;
tg.expand();

let username = tg.initDataUnsafe.user.username;
console.log(tg.platform);
tg.Field.setHeaderColor(black);