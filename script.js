const envelope = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const catImg = document.getElementById("letter-cat");
const title = document.getElementById("letter-title");
const buttonsArea = document.querySelector(".buttons");
const finalText = document.getElementById("final-text");
const music = document.getElementById("valentine-music");

let noClickCount = 0;

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letterContainer.classList.add("active");
});

noBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    noClickCount++;

    catImg.src = "angry-cat.gif";

    if (noClickCount < 10) {
        const areaWidth = buttonsArea.clientWidth;
        const areaHeight = buttonsArea.clientHeight;

        const randomX = Math.floor(Math.random() * (areaWidth - 100));
        const randomY = Math.floor(Math.random() * (areaHeight - 100));

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    } else {
        noBtn.style.display = "none";
    }

    const windowEl = document.querySelector(".letter-window");
    windowEl.style.animation = "none";
    void windowEl.offsetWidth; 
    windowEl.style.animation = "shake 0.4s ease-in-out";
});

yesBtn.addEventListener("click", () => {
    title.textContent = "YOU BETTER BITCH! ❤️";
    catImg.src = "CatFU-removebg-preview.png"; 
    buttonsArea.style.display = "none";
    finalText.style.display = "block"; // Reveals the date at the bottom
});
yesBtn.addEventListener("click", () => {
    // --- THIS IS THE MAGIC LINE ---
    music.play().catch(error => console.log("Music play failed:", error));
    // ------------------------------

    title.textContent = "YOU BETTER BITCH, DON'T BE SELFISH MOTHERF*KER! ❤️";
    catImg.src = "CatFU-removebg-preview.png"; 
    buttonsArea.style.display = "none"; 
    finalText.style.display = "block";  
});