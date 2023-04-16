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

function rollQuestion() {
    
}

let score = 0;
window.addEventListener("resize", (event) => { moveScoreSelector(score, event) });
// document.getElementById("temp-button").addEventListener("click", () => { moveScoreSelector(score) });