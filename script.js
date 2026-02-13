const envelope = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const catImg = document.getElementById("letter-cat");
const title = document.getElementById("letter-title");
const buttonsArea = document.querySelector(".buttons");
const lyricsDisplay = document.getElementById("lyrics-display");
const music = document.getElementById("valentine-music");
const finalText = document.getElementById("final-text");

let noClickCount = 0;

const pleadingMessages = [
    "Are you sure?",
    "Like... sure sure?",
    "100% used sure?",
    "Please? 🥺",
    "Think about it again...",
    "Don't do this to me..."
];

// EXACT SYNC BASED ON YOUR TIMESTAMPS
const songLyrics = [
    { time: 1.0,  text: "You might" },
    { time: 2.0,  text: "Love her now but you" },
    { time: 3.0,  text: "love me first" },
    { time: 5.0,  text: "Said you'd never" },
    { time: 6.0,  text: "hurt me" },
    { time: 8.0,  text: "but here we are" },
    { time: 9.0,  text: "Oh, you swore" },
    { time: 10.0, text: "on" },
    { time: 11.0, text: "every" },
    { time: 12.0, text: "star" },
    { time: 13.0, text: "How could" },
    { time: 14.0, text: "you be" },
    { time: 15.0, text: "so" },
    { time: 16.0, text: "reckless" },
    { time: 17.0, text: "with my" },
    { time: 18.0, text: "heart? 💔" }
];

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letterContainer.classList.add("active");
});

function updateLyrics() {
    if (!music.paused) {
        const currentTime = music.currentTime;
        let activeLyric = "";

        // Find the correct line based on your seconds
        for (let i = 0; i < songLyrics.length; i++) {
            if (currentTime >= songLyrics[i].time) {
                activeLyric = songLyrics[i].text;
            }
        }

        if (lyricsDisplay.textContent !== activeLyric) {
            lyricsDisplay.textContent = activeLyric;
            
            // Animation Reset for that "Pop" effect
            lyricsDisplay.style.animation = 'none';
            lyricsDisplay.offsetHeight; 
            lyricsDisplay.style.animation = null;
        }
        requestAnimationFrame(updateLyrics);
    }
}

noBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    catImg.src = "angry-cat.gif"; 

    if (noClickCount < pleadingMessages.length) {
        title.textContent = pleadingMessages[noClickCount];
        const areaWidth = buttonsArea.clientWidth;
        const areaHeight = buttonsArea.clientHeight;
        noBtn.style.position = "absolute";
        noBtn.style.left = `${Math.random() * (areaWidth - 80)}px`;
        noBtn.style.top = `${Math.random() * (areaHeight - 40)}px`;
        noClickCount++;
    } else {
        title.textContent = "You're breaking my heart... 💔";
        catImg.src = "sad-walk-of-shame.gif"; 
        buttonsArea.style.display = "none"; 
        lyricsDisplay.style.display = "block";

        music.src = "AnotherLovesSong.mp3";
        music.play().then(() => {
            requestAnimationFrame(updateLyrics);
        });
    }
});

yesBtn.addEventListener("click", () => {
    title.textContent = "YOU BETTER BITCH! ❤️";
    catImg.src = "CatFU-removebg-preview.png"; 
    buttonsArea.style.display = "none"; 
    lyricsDisplay.style.display = "none";
    finalText.style.display = "block";
    
    music.src = "love-song.mp3";
    music.loop = true;
    music.play();
});
