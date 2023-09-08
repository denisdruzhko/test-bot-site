let tg = window.Telegram.WebApp;

tg.expand();

let btn = document.querySelector('input[type=button]');

btn.addEventListener("click", ()=> {
        tg.sendData(document.querySelector('input[type=time]').value+"|"+document.querySelector('select').value);
})
