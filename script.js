let tg = window.Telegram.WebApp;

tg.expand();

let btn = document.querySelector('#btn');

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

btn.addEventListener("click", function(){
        tg.MainButton.setText("Message was sent");
        tg.MainButton.show();
        tg.sendData("some data");
})
