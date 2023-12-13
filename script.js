const colorNameEl = document.querySelector('.colorName-el');

const Btn = document.querySelector('.btn');

let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];


Btn.addEventListener("click", function () {
    let startHex = '#';
    for (let i = 0; i < 6; i++) {
        let randomNo = getRandomNo(hex);
        startHex+=hex[randomNo];
    }
    document.body.style.backgroundColor = startHex;
    colorNameEl.textContent = "Background Color : " + startHex;

});

function getRandomNo(arr) {
    return Math.floor(Math.random() * arr.length);
}