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
});

  const startButton = document.getElementById("btn");
  const container = document.getElementById("container");
  const gameOverDiv = document.getElementById("game-over");
  const timeEl = document.getElementById("timer");
  const questionDiv = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".a-btn");
  
  let currentQuestionIndex = 0;
  let secondsLeft = 60;

  // Initially hide the quiz container and game over div
  container.style.display = "none";
  gameOverDiv.style.display = "none";

  startButton.addEventListener("click", function() {
    // Hide start button and show the quiz container
    startButton.style.display = "none";
    container.style.display = "block";
    
    // Start the quiz and timer
    startTimer();
    showQuestion(currentQuestionIndex);
  });

  function startTimer() {
    timer = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
  }

  function endGame() {
    alert("Time's up! Game Over!");
    container.style.display = "none";  // Hide the quiz container
    gameOverDiv.style.display = "block";  // Show the game over div
  }

  function showQuestion(questionIndex) {
    // Display the question
    questionDiv.innerHTML = `<p>${questions[questionIndex].question}</p>`;

    // Display the answer options
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
    } else {
        alert("Wrong!");
        secondsLeft -= 10;  // Subtract 10 seconds if the answer is wrong
        if (secondsLeft < 0) secondsLeft = 0;  // Ensure time doesn't go into negative
        timeEl.textContent = secondsLeft;  // Update the displayed time
    }

    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert("Quiz Completed!");
        // Optional: reset the quiz or navigate to a results page
    }
  }
