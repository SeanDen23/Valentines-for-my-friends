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

// Open Letter
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letterContainer.classList.add("active");
});

// No Button Logic
noBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    noClickCount++;
    catImg.src = "angry-cat.gif";

    if (noClickCount < 10) {
        const areaWidth = buttonsArea.clientWidth;
        const areaHeight = buttonsArea.clientHeight;

        const randomX = Math.floor(Math.random() * (areaWidth - 100));
        const randomY = Math.floor(Math.random() * (areaHeight - 50));

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    } else {
        noBtn.style.display = "none";
    }
});

// Yes Button Logic
yesBtn.addEventListener("click", () => {
    // Play music (Must happen on click)
    music.play().catch(err => console.log("Music error:", err));

    title.textContent = "YOU BETTER BITCH, DON'T BE SELFISH MOTHERF*KER! ❤️";
    catImg.src = "CatFU-removebg-preview.png"; 
    
    buttonsArea.style.display = "none"; 
    finalText.style.display = "block";  
});
