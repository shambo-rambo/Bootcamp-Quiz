document.addEventListener("DOMContentLoaded", function() {
    const scoreList = document.getElementById("score-list");
    const scores = JSON.parse(localStorage.getItem("scores")) || [];

    scores.sort((a, b) => b.score - a.score);  // Sort scores in descending order

    scores.forEach(score => {
        const li = document.createElement("li");
        li.textContent = `${score.initials}: ${score.score}`;
        scoreList.appendChild(li);
    });
});
