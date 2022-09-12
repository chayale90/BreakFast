function addSingleQuestion(_question, _answers_ar, _correctAnswer) {
    console.log(_question);
    let questionDiv = document.createElement("div");
    document.querySelector("#id_parent").append(questionDiv);
    questionDiv.className = `question`

    // מציג את השאלה
    questionDiv.innerHTML += `
    <h2>${_question}</h2>
    `;

    //מייצרת דיב של תשובה עם כתפורים בתוכו
    let answersDiv = document.createElement("div");
    answersDiv.className = "answers py-2";
    questionDiv.append(answersDiv);

    //מייצרת את התשובות בכפתורים יהיו 4 במערך

    _answers_ar.forEach(function (answeItem, i) {
        let btn = document.createElement("button");
        answersDiv.append(btn);
        btn.innerHTML = answeItem;
        btn.addEventListener("click", function () {

            if (i == _correctAnswer) {
                setTimeout(() => { successAnswer() }, 700)
                btn.style.background = "green";
                document.querySelector(".h5").innerHTML = `You right`
                document.querySelector(".h5").style.color = "green"
            }

            else {

                setTimeout(() => { failAnswer() }, 700)
                btn.style.background = "red";
                document.querySelector(".h5").innerHTML = `You wrong`
                document.querySelector(".h5").style.color = "red"
            }
        })
    })

   
}

