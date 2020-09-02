const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', StartGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innterText = question.question
    questions.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
            button.addEventListener('click', selectAnswer)
        }
    })
}

function resetState() {
    nextButton.classlist.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.appendChild(button)
    })
}

function selectAnswer(e) {
    const SelectedButton = e.target
    const correct = SelectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button,button.dataset.correct)
    })
}
    const question = [
        question: "what is the capital of thailand?"
    answers: [
            { text: '4', correct: true }
    { text: '22', correct: false }
        ]
    ]