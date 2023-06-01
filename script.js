let tg = window.Telegram.WebApp;

tg.expand();

let btn = document.querySelector('#btn');

btn.addEventListener("click", function(){
        tg.MainButton.setText("Message was sent");
        tg.MainButton.show();
        tg.sendData("some data");
})
