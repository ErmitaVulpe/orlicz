const usedQuestionsIndexes = [];
let currentQuestion;

function moveScoreSelector(scoreElementsNumber, event) {
    if (!scoreElementsNumber) { return }
    const coolElement = document.getElementById("score-selector-wrapper");
    if (!event) {
        coolElement.style.overflow = "visible"
        coolElement.style.transitionDuration = "0.75s"};
    coolElement.style.top = `${document.getElementById(`score-element-${scoreElementsNumber}`).getBoundingClientRect().top / innerHeight * 100}%`
    setTimeout(() => { coolElement.style.transitionDuration = "0s" }, 750);
}

let questionIsRolling = false;
function rollQuestion() {
    if (questionIsRolling) return;
    questionIsRolling = true;
    let randomNumber = Math.floor(Math.random() * questionsDB.length);
    setTimeout(() => {
        console.log(randomNumber);
    }, 1000);
    questionIsRolling = false;
    console.log(questionIsRolling);
}

let score = 0;
window.addEventListener("resize", (event) => { moveScoreSelector(score, event) });

document.getElementsByClassName("panel-right")[0].addEventListener("click", rollQuestion)