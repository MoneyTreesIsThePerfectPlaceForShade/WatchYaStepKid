"use strict";
const secretNumber = Math.round(Math.random() * 36);
console.log(secretNumber);

// этот мини проект я делал в рамках курса по JS от Jonas Schmedtmann.
// в его версии игры начальное значение счета было 20, я решил немного усложнить игру
// и сделал начальное значение 5, если игрок потеряет все свои жизни - кнопка Check заблокируется
// и придется нажать Again, чтобы получить еще один шанс
let score = 5;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    // если ответ не верный
    if (!guess) {
        document.querySelector(".message").textContent =
            "YOU MISSED, TRY AGAIN!";
    }

    // если ответ верный
    if (guess === secretNumber) {
        document.querySelector(".message").textContent =
            "Up from the 36 Chambers! YOU WON";

        document.querySelector(".number").textContent = secretNumber;
        // если ответ меньше загаданного числа
    } else if (guess < secretNumber) {
        document.querySelector(".message").textContent = "HIT HIGHER";
        score--;
        if (score > 0) {
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".score").textContent =
                "YOU LOSE! TRY AGAIN!";
            document.querySelector(".check").disabled = true;
        }
        // если ответ больше загаданного числа
    } else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "HIT LOWER";
        score--;
        if (score > 0) {
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".score").textContent =
                "YOU LOSE! TRY AGAIN!";
            document.querySelector(".check").disabled = true;
        }
    }
});
