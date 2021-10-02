const startButton = document.getElementById('start-btn')
const questionsConteinerElement = document.getElementById('questions')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answers')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('hide')
    questionsConteinerElement.classList.remove('hide')
    
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btns')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }

const questions = [
    {
        question: 'Commonly used datatypes DO not include: ',
        answers: [
            {text: '1. Strings', wrong: false},
            {text: '2. Booleans', wrong: false},
            {text: '3. Alerts', correct: true},
            {text: '3. Numbers', wrong: false}
        ]
    },
    {
        question: 'The condition in an if/else statment is enclosed with _________.',
        answers: [
            {text: '1. Quotes', wrong: false},
            {text: '2. Curly Brackets', correct: true},
            {text: '3. Parenthesis', wrong: false},
            {text: '3. Square Brakets', wrong: false}
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store _________.',
        answers: [
            {text: '1. Number and Strings', wrong: false},
            {text: '2. Other Arrays', wrong: false},
            {text: '3. Booleans', wrong: false},
            {text: '3. All of The Above', correct: true}
        ]
    },
    {
        question: 'A useful tool used during development and debugging for printing content to the debugger is: ',
        answers: [
            {text: '1. JavaScript', wrong: false},
            {text: '2. Terminal/Bash', correct: true},
            {text: '3. For Loops', wrong: false},
            {text: '3. console.Log', wrong: false}
        ]
    },
    {
        question: 'String values mast be enclosed within _________ when being assigned to variables.',
        answers: [
            {text: '1. Commas', wrong: false},
            {text: '2. Curly Brackets', wrong: false},
            {text: '3. Quotes', wrong: false},
            {text: '3. Parenthesis', correct: true}
        ]
    },
]