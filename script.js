"use strict";
let secretNumber = Math.round(Math.random() * 36);
console.log(secretNumber);

// этот мини проект я делал в рамках курса по JS от Jonas Schmedtmann.
// в его версии игры начальное значение счета было 20, я решил немного усложнить игру
// и сделал начальное значение 5, если игрок потеряет все свои жизни - кнопка Check заблокируется
// и придется нажать Again, чтобы получить еще один шанс
let score = 5;
let highscore = 0;

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
            "Up from the 36 Chambers! YOU WON!";
        if (highscore < score) {
            highscore = score;
        }

        document.querySelector(".highscore").textContent = highscore;

        document.querySelector(".number").textContent =
            secretNumber + "  ▬▬ι═══════ﺤ YOU WON";

        document.querySelector("body").style.background =
            "linear-gradient(to top left, #FFC000, #781818)";
        document.querySelector("body").style.color = "#333";
        document.querySelector(".check").style.color = "#333";
        document.querySelector(".check").style.backgroundColor = "#f0f0d8";
        document.querySelector(".btn").style.color = "#333";
        document.querySelector(".btn").style.backgroundColor = "#f0f0d8";
        document.querySelector(".guess").style.color = "#333";
        document.querySelector(".score").style.color = "#333";
        document.querySelector(".message").style.color = "#333";
        document.querySelector(".label-score").style.color = "#333";
        document.querySelector(".label-highscore").style.color = "#333";
        document.querySelector(".number").style.width = "25rem";

        // если ответ меньше загаданного числа
    } else if (guess !== secretNumber) {
        document.querySelector(".message").textContent =
            guess < secretNumber ? "HIT HIGHER" : "HIT LOWER";
        score--;
        if (score > 0) {
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".score").textContent = 0;
            document.querySelector(".check").disabled = true;
            document.querySelector("body").style.background =
                "linear-gradient(to top left, #F0FFF0, #781818)";
            document.querySelector("body").style.color = "#333";
            document.querySelector(".check").style.color = "#333";
            document.querySelector(".check").style.backgroundColor = "#f0f0d8";
            document.querySelector(".btn").style.color = "#333";
            document.querySelector(".btn").style.backgroundColor = "#f0f0d8";
            document.querySelector(".guess").style.color = "#333";
            document.querySelector(".score").style.color = "#333";
            document.querySelector(".message").style.color = "#333";
            document.querySelector(".label-score").style.color = "#781818";
            document.querySelector(".label-highscore").style.color = "#333";
            document.querySelector(".number").textContent =
                "YOU LOSE! TRY AGAIN!";
            document.querySelector(".number").style.width = "60rem";
            document.querySelector(".number").style.color = "#781818";
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.round(Math.random() * 36);
    console.log(secretNumber);
    document.querySelector("body").style.background =
        "linear-gradient(to top left, #222, #484878)";
    document.querySelector("body").style.color = "#ffc000";
    document.querySelector(".check").style.color = "#ffc000";
    document.querySelector(".check").style.backgroundColor = "#f0f0d849";
    document.querySelector(".btn").style.color = "#ffc000";
    document.querySelector(".btn").style.backgroundColor = "#f0f0d849";
    document.querySelector(".guess").style.color = "#ffc000";
    document.querySelector(".score").style.color = "#ffc000";
    document.querySelector(".message").style.color = "#ffc000";
    document.querySelector(".label-score").style.color = "#ffc000";
    document.querySelector(".label-highscore").style.color = "#ffc000";
    document.querySelector(".number").style.color = "#222";

    score = 5;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "5rem";
    document.querySelector(".message").textContent = "FIND A WEAK SPOT, SON!";
    document.querySelector(".check").disabled = false;
});
