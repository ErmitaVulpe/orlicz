const usedQuestionsIndexes = [];
let currentQuestion;
let score;
const answerElementsArray = [];
for (let i = 0; i < 4; i++) { answerElementsArray.push(document.getElementById(`answer-${i + 1}`)) };
let isQuestionAnimationRolling = false;
let answerWasPressed = false;

/**
 * @param int score to which score selector is supposed to move
 * @param bool defines if transition should be animatedd
 */
function moveScoreSelector(scoreElementsNumber, event) {
    if (!scoreElementsNumber) return hideScoreSelector();

    const coolElement = document.getElementById("score-selector-wrapper");
    if (!event) coolElement.style.transitionDuration = "0.75s";

    coolElement.style.top = `${(document.getElementById(`score-element-${scoreElementsNumber}`).getBoundingClientRect().top + (document.getElementById(`score-element-${scoreElementsNumber}`).getBoundingClientRect().height / 2)) / innerHeight * 100}%`
    setTimeout(() => { coolElement.style.transitionDuration = "0s" }, 750);
}

/**
 * Moves scoreselector to it's original (hidden) position
 * @param none 
 */
function hideScoreSelector() {
    const coolElement = document.getElementById("score-selector-wrapper");
    coolElement.style.transitionDuration = "0.75s";
    coolElement.style.top = "110%";
    setTimeout(() => {
        coolElement.style.transitionDuration = "0s"
    }, 750);
}

/**
 * @param none put your dick here please
 * 
 * Function creates HTML divs with randomly chosen questions from database
 */
function rollQuestion() {
    if (isQuestionAnimationRolling) return;
    function shuffle(array) {
        for (let i = 0; i < array.length; i++) {
            let currentIndex = array.length, randomIndex;
    
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
    
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }
        }
        return array;
    }

    isQuestionAnimationRolling = true;
    let randomNumber = Math.floor(Math.random() * questionsDB.length);
    while (usedQuestionsIndexes.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * questionsDB.length);
    }
    usedQuestionsIndexes.push(randomNumber);
    currentQuestion = questionsDB[randomNumber];
    currentQuestion["answers"] = shuffle(currentQuestion["answers"]);

    const question = document.getElementById("question");
    question.setAttribute("answer-text", "");
    answerElementsArray.forEach(element => { element.setAttribute("answer-text", "") });
    
    const answersPrefixes = ["A: ", "B: ", "C: ", "D: "];
    var answersIterator = 0;
    function renderanswers(array) {
        setTimeout(() => {
            answerElementsArray[answersIterator].setAttribute("answer-text", `${answersPrefixes[answersIterator]}${array[answersIterator]}`);
            answersIterator++;
            if (answersIterator < array.length) { renderanswers(array) } else isQuestionAnimationRolling = false;
        }, 750)
    }
    
    setTimeout(() => {
        document.getElementById("question").setAttribute("answer-text", currentQuestion["question"]);
        renderanswers(currentQuestion["answers"]);
    }, 1500);
}

/**
 * Takes answer element that got pressed and returns if the answer was correct
 * @param DOM_Element
 */
function checkAnswers(answerElement) {
    if (isQuestionAnimationRolling || answerWasPressed) return;
    isQuestionAnimationRolling = answerWasPressed = true;
    let wasAnswerCorrect = answerElement.getAttribute("answer-text").replace(/[A-D]: /, "") === currentQuestion["correct"]

    if (wasAnswerCorrect) {
        answerElement.classList.add("correct");
        score++;
    } else {
        answerElement.classList.add("incorrect");
    }

    setTimeout(() => {
        isQuestionAnimationRolling = false;
        if (wasAnswerCorrect) {
            if (score === 13) return gameWon();

            moveScoreSelector(score);
            setTimeout(() => {
                answerElement.classList.remove("correct");
                answerWasPressed = false;
                rollQuestion();
            }, 1750)
        } else {
            gameOver();
        }
    }, 3500)
}

/**
 * @param none
 * starts and resets game
 */
function startGame() {
    score = 0;
    moveScoreSelector(score);
    rollQuestion();
}

/**
 * @param none
 * ends the game
 * displays the game over message
 */
function gameOver() {
    console.log("Game Over");
}

window.addEventListener("resize", (event) => { moveScoreSelector(score, event) });

answerElementsArray.forEach(element => {
    element.addEventListener("click", () => {checkAnswers(element)});
});

// document.getElementsByClassName("panel-right")[0].addEventListener("click", rollQuestion);

startGame();