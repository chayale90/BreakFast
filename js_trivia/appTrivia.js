let score = 0;
let counter = 0;

function init() {
    creatQwestion();
    updateUi();
}
function creatQwestion() {

    if (counter > trivia_ar.length - 1) {
        let div = document.createElement("div")
        document.querySelector("#id_parent").append(div);
        div.innerHTML = `Game End! <br><br> Your score is: ` + score +
            ` <br><button style="color: white;
                background: rgb(135, 67, 86);
                border: none;
                padding:0 16px;
                border-radius: 30px;" 
                class="restart mt-5">Restart</button>`

        div.style.color = `rgb(135, 67, 86)`
        div.style.fontFamily = `'Arima', cursive`
        div.style.fontSize = `1.5em`

        document.querySelector(".h5").innerHTML = ""
        document.querySelector(".question").innerHTML = ``
        document.querySelector(".h4").classList.add(`d-none`);

        let btnRestart = div.querySelector(".restart");
        btnRestart.addEventListener("click", function () {
            document.querySelector("#id_parent").innerHTML = "";

            counter = 0;
            score = 0;
            qItem = trivia_ar[counter];
            addSingleQuestion(qItem.question, qItem.answers, qItem.correctAnswer);

            document.querySelector(".h4").classList.remove(`d-none`);
            counter++;
        })
        // יעצור את הפונקציה ולא יתן להמשיך
        return;
    }
    document.querySelector("#id_parent").innerHTML = "";
    qItem = trivia_ar[counter];
    addSingleQuestion(qItem.question, qItem.answers, qItem.correctAnswer);
    counter++;
}

function successAnswer() {
    document.querySelector(".h5").innerHTML = ""
    // alert("You right");
    score += 20;
    updateUi();
    creatQwestion();
}

function failAnswer() {
    document.querySelector(".h5").innerHTML = ""
    // alert("You wrong");
    updateUi();
    creatQwestion();
}

function updateUi() {
    document.querySelector("#id_score").innerHTML = score;
}

init();