const questions = [
    {
        question: "ما هو الناتج من 1 + 2 * 3؟",
        choices: ["9", "7", "5"],
        correct: "7"
    },
    {
        question: "أي من هذه لغات برمجة؟",
        choices: ["HTML", "Python", "CSS"],
        correct: "Python"
    },
    {
        question: "ما هو الرمز المستخدم لتعليقات الكود في JavaScript؟",
        choices: ["//", "#", "/* */"],
        correct: "//"
    },
    {
        question: "ما هو الناتج من 10 % 3؟",
        choices: ["1", "3", "0"],
        correct: "1"
    },
    {
        question: "كيف تطبع نصًا في Java؟",
        choices: ["echo", "System.out.println", "print"],
        correct: "System.out.println"
    }
];

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");

function loadQuiz() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            ${q.choices
                .map(
                    (choice) =>
                        `<label><input type="radio" name="q${index}" value="${choice}"> ${choice}</label><br>`
                )
                .join("")}
        `;
        quizContainer.appendChild(questionDiv);
    });
}

submitBtn.addEventListener("click", () => {
    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === q.correct) {
            score++;
        }
    });
    resultContainer.innerHTML = `<h2>نتيجتك: ${score} من ${questions.length}</h2>`;
});

loadQuiz();