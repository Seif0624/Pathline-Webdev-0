
const button = document.getElementById("surpriseButton");
const message = document.getElementById("surpriseMessage");
const funText = document.getElementById("funText");
const title = document.getElementById("mainTitle");

button.addEventListener("click", function() {
    funText.textContent = "Wow! The games now have flying cats and dancing dinosaurs!";
    
    message.style.display = "block";
    
    title.style.color = "#e91e63";
    
    button.textContent = "Surprise Unlocked! 🎮";
    button.disabled = true;
});