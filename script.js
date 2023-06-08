let tg = window.Telegram.WebApp;

tg.expand();

let btn = document.querySelector('input[type=button]');

btn.addEventListener("click", ()=> {
        tg.MainButton.setText("Message was sent");
        tg.MainButton.show();
        tg.sendData("some data");
})
