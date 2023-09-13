document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "What does html stand for?",
            options: ["Hyper Transfer Markup Language", "Hyperlinking Text Management Language", "Hyperlink and Text Markup Language", "Hyper Text Markup Language"],
            correctAnswer: "Hyper Text Markup Language"
        },
        {
            question: "What was Git named after, referring to British slang?",
            options: ["Type of Car", "A silly person", "A small fish", "A quick movement"],
            correctAnswer: "A silly person"
        },
        // ... rest of your questions ...
    ];

    const startButton = document.getElementById("btn");
    const container = document.getElementById("container");
    const gameOverDiv = document.getElementById("game-over");
    const timeEl = document.getElementById("timer");
    const questionDiv = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".a-btn");
    const scoreSection = document.getElementById("score-section");

    let currentQuestionIndex = 0;
    let secondsLeft = 60;
    let score = 0;  // Initialize score

    // Initially hide the quiz container, game over div, and score section
    container.style.display = "none";
    gameOverDiv.style.display = "none";
    scoreSection.style.display = "none";

    startButton.addEventListener("click", function() {
        startButton.style.display = "none";
        container.style.display = "block";
        startTimer();
        showQuestion(currentQuestionIndex);
    });

    function startTimer() {
        const timer = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(timer);
                endGame();
            }
        }, 1000);
    }

    function endGame() {
        alert("Time's up! Game Over!");
        container.style.display = "none";
        gameOverDiv.style.display = "block";
    }

    function showQuestion(questionIndex) {
        questionDiv.innerHTML = `<p>${questions[questionIndex].question}</p>`;
        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].innerText = questions[questionIndex].options[i];
            answerButtons[i].onclick = function() {
                checkAnswer(questions[questionIndex].options[i]);
            };
        }
    }

    function checkAnswer(selectedOption) {
        if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
            alert("Correct!");
            score += 10;
        } else {
            alert("Wrong!");
            secondsLeft -= 10;
            if (secondsLeft < 0) secondsLeft = 0;
            timeEl.textContent = secondsLeft;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            alert("Quiz Completed!");
        }
    }

    function saveScore(initials, score) {
        const scores = JSON.parse(localStorage.getItem("scores")) || [];
        scores.push({ initials, score });
        localStorage.setItem("scores", JSON.stringify(scores));
        alert("Score saved!");
        window.location.href = "highscores.html";
    }
});
