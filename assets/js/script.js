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
    {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Cascading Style Systems", "Cascading Sheet Styles", "Cascading Style Sheets"],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "What does API stand for?",
      options: ["Application Programming Interface", "Application Programming Index", "Application Programming Internet", "Application Programming Integration"],
      correctAnswer: "Application Programming Interface"
    },
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Document Object Management", "Document Object Manipulation", "Document Object Model"],
      correctAnswer: "Document Object Model"  
    }
  ];

document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("btn");
    const container = document.getElementById("container");
    const gameOverDiv = document.getElementById("game-over");
    const timeEl = document.getElementById("timer");
    const questionDiv = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".a-btn");
    const scoreSection = document.getElementById("high-section");

    let currentQuestionIndex = 0;
    let secondsLeft = 60;
    let score = 0;

    container.style.display = "none";
    gameOverDiv.style.display = "none";
    scoreSection.style.display = "none";

    document.getElementById("submit-score").addEventListener("click", function() {
        const initials = document.getElementById("initials-input").value;
        if (initials) {
            saveScore(initials, score);
        } else {
            alert("Please enter your initials!");
        }
    });

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
      container.style.display = "none";  
      gameOverDiv.style.display = "block";  
      scoreSection.style.display = "block"; 
      document.getElementById("final-score").textContent = score;
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
            endGame();
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
