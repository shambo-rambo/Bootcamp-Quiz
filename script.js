document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById("btn");
  const container = document.getElementById("container");
  const gameOverDiv = document.getElementById("game-over");
  
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
});

function endGame() {
    alert("Time's up! Game Over!");
    container.style.display = "none";  // Hide the quiz container
    gameOverDiv.style.display = "block";  // Show the game over div
}
